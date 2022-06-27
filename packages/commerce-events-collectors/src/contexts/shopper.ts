import { Shopper } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import schemas from "../schemas";
import { ShopperContext } from "../types/contexts";

const createContext = (shopper?: Shopper): ShopperContext => {
    const mse = window.magentoStorefrontEvents;
    const shopperCtx = shopper ?? mse.context.getShopper();

    if (!shopperCtx) {
        return {
            schema: schemas.SHOPPER_SCHEMA_URL,
            data: {
                shopperId: "guest",
            },
        };
    }

    const context: ShopperContext = {
        schema: schemas.SHOPPER_SCHEMA_URL,
        data: {
            shopperId: shopperCtx.shopperId,
        },
    };

    return context;
};

export default createContext;
