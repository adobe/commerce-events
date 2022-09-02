import { CartEvent } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import { CartEventContext } from "../types/contexts";

const createContext = (cartEvent?: CartEvent): CartEventContext | null => {
    const mse = window.magentoStorefrontEvents;
    const cartEventCtx = cartEvent ?? mse.context.getCartEvent();

    if (!cartEventCtx) {
        return {};
    }

    const context: CartEventContext = {
        items: cartEventCtx.items
    };

    return context;
};

export default createContext;
