import {
    StorefrontInstance,
    ShoppingCartItem,
    RequisitionListItems,
} from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import { ProductListItem, SelectedOption } from "../../types/aep";
import { getDiscountAmount } from "../discount";

/**
 * create a list of shopping cart items from the `ShoppingCart` context for AEP
 *
 * @remarks `discountAmount` and `selectedOtions` are not supported in the sdk type yet
 */
const createProductListItems = (
    productListItemsFromCustomContext: ProductListItem[] | undefined,
    cartContext: { items?: Array<ShoppingCartItem> } | undefined,
    requisitionListItemsContext: RequisitionListItems | undefined,
    storefrontContext: StorefrontInstance,
): ProductListItem[] => {
    const returnList: ProductListItem[] = [];

    const productListFromCustomContextMap: Map<string, ProductListItem> = new Map();

    productListItemsFromCustomContext?.forEach((item) => {
        productListFromCustomContextMap.set(item.SKU as string, item);
    });

    if (requisitionListItemsContext) {
        requisitionListItemsContext.items?.map((item) => {
            const productListItemFromCustomContext = productListFromCustomContextMap.get(item.sku);
            const requisitionListItem = {
                SKU: item.sku,
                name: productListItemFromCustomContext?.name || item.name,
                quantity: productListItemFromCustomContext?.quantity || Number(item.quantity),
                priceTotal:
                    productListItemFromCustomContext?.priceTotal ||
                    (Number(item.pricing?.regularPrice) || 0) * Number(item.quantity),
                currencyCode:
                    productListItemFromCustomContext?.currencyCode ||
                    (item.pricing?.currencyCode ?? storefrontContext.storeViewCurrencyCode),
                selectedOptions: productListItemFromCustomContext?.selectedOptions || item.selectedOptions,
            };
            returnList.push(requisitionListItem);
        });
    } else {
        cartContext?.items?.forEach((item) => {
            const selectedOptions: SelectedOption[] = [];
            item.configurableOptions?.forEach((option) => {
                selectedOptions.push({
                    attribute: String(option.optionLabel),
                    value: String(option.valueLabel),
                });
            });

            const productListItemFromCustomContext = productListFromCustomContextMap.get(item.product?.sku);

            const productListItem: ProductListItem = {
                SKU: item.product?.sku,
                name: productListItemFromCustomContext?.name || item.product?.name,
                quantity: productListItemFromCustomContext?.quantity || item.quantity,
                priceTotal:
                    productListItemFromCustomContext?.priceTotal || item.prices?.price?.value * item.quantity || 0,
                productImageUrl: productListItemFromCustomContext?.productImageUrl || item.product.mainImageUrl,
                currencyCode:
                    productListItemFromCustomContext?.currencyCode ||
                    (item.prices?.price?.currency ?? storefrontContext.storeViewCurrencyCode),
                discountAmount: productListItemFromCustomContext?.discountAmount || getDiscountAmount(item.product),
                selectedOptions: productListItemFromCustomContext?.selectedOptions || selectedOptions,
            };

            returnList.push(productListItem);
        });
    }
    return returnList;
};

export { createProductListItems };
