import {
    ShoppingCart,
    StorefrontInstance,
    ShoppingCartItem,
} from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import { ProductListItem, SelectedOption } from "../../types/aep";
import { getDiscountAmount } from "../discount";

/**
 * create a list of shopping cart items from the `ShoppingCart` context for AEP
 *
 * @remarks `discountAmount` and `selectedOtions` are not supported in the sdk type yet
 */
const createProductListItems = (
    cartContext: { items?: Array<ShoppingCartItem> },
    storefrontContext: StorefrontInstance,
): ProductListItem[] => {
    const returnList: ProductListItem[] = [];
    if (cartContext?.items?.length) {
        cartContext.items.forEach((item) => {
            const selectedOptions: SelectedOption[] = [];
            item.configurableOptions?.forEach((option) => {
                selectedOptions.push({
                    attribute: String(option.optionLabel),
                    value: String(option.valueLabel),
                });
            });
            // debugger;
            const productListItem: ProductListItem = {
                SKU: item.product?.sku,
                name: item.product?.name,
                quantity: item.quantity,
                priceTotal: item.prices?.price?.value * item.quantity || 0,
                productImageUrl: item.product.mainImageUrl,
                currencyCode: item.prices?.price.currency ?? storefrontContext.storeViewCurrencyCode,
                discountAmount: getDiscountAmount(item.product),
                selectedOptions: selectedOptions,
            };

            returnList.push(productListItem);
        });
    }
    return returnList;
};

export { createProductListItems };
