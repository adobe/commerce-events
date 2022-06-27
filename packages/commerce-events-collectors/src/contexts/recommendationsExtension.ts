import { RecommendationsExtension } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import schemas from "../schemas";
import { RecommendationsExtensionContext } from "../types/contexts";

const createContext = (
    extension?: RecommendationsExtension,
): RecommendationsExtensionContext => {
    const mse = window.magentoStorefrontEvents;
    const recommendationsExtensionCtx =
        extension ?? mse.context.getRecommendationsExtension();

    if (!recommendationsExtensionCtx) {
        return {
            schema: schemas.RECOMMENDATIONS_EXTENSION_SCHEMA_URL,
            data: {},
        };
    }

    const context = {
        schema: schemas.RECOMMENDATIONS_EXTENSION_SCHEMA_URL,
        data: {
            version: recommendationsExtensionCtx.version,
        },
    };

    return context;
};

export default createContext;
