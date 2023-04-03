import { ChangedProducts } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import { ChangedProductsContext } from "../types/contexts";

const createContext = (changedProducts?: ChangedProducts): ChangedProductsContext | null => {
    const mse = window.magentoStorefrontEvents;
    const cartEventCtx = changedProducts ?? mse.context.getChangedProducts();

    if (!cartEventCtx) {
        return {};
    }

    const context: ChangedProductsContext = {
        items: cartEventCtx.items,
    };

    return context;
};

export default createContext;
