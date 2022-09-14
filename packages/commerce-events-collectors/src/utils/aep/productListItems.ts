import { StorefrontInstance, ShoppingCartItem } from "@adobe/commerce-events-sdk";

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
    if (cartContext.items?.length) {
        cartContext.items.forEach((item) => {
            const selectedOptions: SelectedOption[] = [];
            item.configurableOptions?.forEach((option) => {
                selectedOptions.push({
                    attribute: option.optionLabel,
                    value: option.valueLabel,
                });
            });

            const productListItem: ProductListItem = {
                SKU: item.product.sku,
                name: item.product.name,
                quantity: item.quantity,
                priceTotal: item.prices.price.value * item.quantity,
                currencyCode: item.prices.price.currency ?? storefrontContext.storeViewCurrencyCode,
                discountAmount: getDiscountAmount(item.product),
                selectedOptions: selectedOptions,
            };

            returnList.push(productListItem);
        });
    }
    return returnList;
};

export { createProductListItems };
