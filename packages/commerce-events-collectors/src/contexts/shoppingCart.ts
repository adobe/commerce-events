import { ShoppingCart } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import schemas from "../schemas";
import { ShoppingCartContext, ShoppingCartItem } from "../types/contexts";

const createShoppingCartItems = (shoppingCart?: ShoppingCart) => {
    const mse = window.magentoStorefrontEvents;
    const shoppingCartCtx = shoppingCart ?? mse.context.getShoppingCart();

    if (!shoppingCartCtx.items) {
        return [];
    }

    const shoppingCartItems: Array<ShoppingCartItem> =
        shoppingCartCtx.items.map<ShoppingCartItem>(item => ({
            basePrice: item.prices.price.value,
            cartItemId: item.id,
            mainImageUrl: item.product.mainImageUrl ?? undefined,
            offerPrice: item.prices.price.value,
            productName: item.product.name,
            productSku: item.product.sku,
            qty: item.quantity,
        }));

    return shoppingCartItems;
};

const createContext = (
    shoppingCart?: ShoppingCart,
): ShoppingCartContext | null => {
    const mse = window.magentoStorefrontEvents;
    const shoppingCartCtx = shoppingCart ?? mse.context.getShoppingCart();

    if (!shoppingCartCtx) {
        return {
            schema: schemas.SHOPPING_CART_SCHEMA_URL,
            data: {},
        };
    }

    const context: ShoppingCartContext = {
        schema: schemas.SHOPPING_CART_SCHEMA_URL,
        data: {
            cartId: shoppingCartCtx.id,
            itemsCount: shoppingCartCtx.totalQuantity,
            items: createShoppingCartItems(shoppingCartCtx),
            possibleOnepageCheckout: shoppingCartCtx.possibleOnepageCheckout,
            subtotalExcludingTax:
                shoppingCartCtx.prices?.subtotalExcludingTax?.value,
            subtotalIncludingTax:
                shoppingCartCtx.prices?.subtotalIncludingTax?.value,
            giftMessageSelected: shoppingCartCtx.giftMessageSelected,
            giftWrappingSelected: shoppingCartCtx.giftWrappingSelected,
        },
    };

    return context;
};

export default createContext;
