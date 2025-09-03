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

    /**
     * If there's only one item in the custom context and it doesn't have a SKU,
     * then merge this context with every item,
     * otherwise match by SKU
     */
    const generalCustomContext =
        productListItemsFromCustomContext?.length === 1 && productListItemsFromCustomContext[0]?.SKU === undefined
            ? productListItemsFromCustomContext[0]
            : undefined;

    productListItemsFromCustomContext?.forEach((item) => {
        productListFromCustomContextMap.set(item.SKU as string, item);
    });

    if (requisitionListItemsContext) {
        requisitionListItemsContext.items?.map((item) => {
            const requisitionListItem = generalCustomContext || productListFromCustomContextMap.get(item.sku) || {};

            // custom SKU is not supported as it is used as identification for merging
            requisitionListItem.SKU = item.sku;
            requisitionListItem.name = requisitionListItem?.name || item.name;
            requisitionListItem.quantity = requisitionListItem?.quantity || Number(item.quantity);
            requisitionListItem.priceTotal =
                requisitionListItem?.priceTotal ||
                formatPrice((Number(item.pricing?.regularPrice) || 0) * Number(item.quantity));
            requisitionListItem.currencyCode =
                requisitionListItem?.currencyCode ||
                (item.pricing?.currencyCode ?? storefrontContext.storeViewCurrencyCode);
            requisitionListItem.selectedOptions = requisitionListItem?.selectedOptions || item.selectedOptions;
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

            const productListItem =
                generalCustomContext || productListFromCustomContextMap.get(item.product?.sku) || {};

            // custom SKU is not supported as it is used as identification for merging
            productListItem.SKU = item.product?.sku;
            productListItem.name = productListItem.name || item.product?.name;
            productListItem.quantity = productListItem?.quantity || item.quantity;
            productListItem.priceTotal =
                productListItem?.priceTotal || formatPrice(item.prices?.price?.value * item.quantity) || 0;
            productListItem.productImageUrl = productListItem?.productImageUrl || item.product.mainImageUrl;
            productListItem.currencyCode =
                productListItem?.currencyCode ||
                (item.prices?.price?.currency ?? storefrontContext.storeViewCurrencyCode);
            productListItem.discountAmount =
                productListItem?.discountAmount || item.discountAmount || getDiscountAmount(item.product);
            productListItem.selectedOptions = productListItem?.selectedOptions || selectedOptions;

            returnList.push(productListItem);
        });
    }
    return returnList;
};

const formatPrice = (value: number) => {
    return Number(value.toFixed(2));
};

export { createProductListItems };
