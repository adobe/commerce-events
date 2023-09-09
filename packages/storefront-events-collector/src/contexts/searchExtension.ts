import { SearchExtension } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import schemas from "../schemas";
import { SearchExtensionContext } from "../types/contexts";

const createContext = (extension?: SearchExtension): SearchExtensionContext => {
    const mse = window.magentoStorefrontEvents;
    const searchExtensionCtx = extension ?? mse.context.getSearchExtension();

    const context = {
        schema: schemas.SEARCH_EXTENSION_SCHEMA_URL,
        data: {
            version:
                searchExtensionCtx?.version && !!searchExtensionCtx.version
                    ? searchExtensionCtx.version
                    : "unspecified",
        },
    };

    return context;
};

export default createContext;
