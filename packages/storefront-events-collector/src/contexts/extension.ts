import { MagentoExtension } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import schemas from "../schemas";
import { ExtensionContext } from "../types/contexts";

const createContext = (extension?: MagentoExtension): ExtensionContext => {
    const mse = window.magentoStorefrontEvents;
    const magentoExtensionCtx = extension ?? mse.context.getMagentoExtension();

    const context = {
        schema: schemas.MAGENTO_EXTENSION_SCHEMA_URL,
        data: {
            magentoExtensionVersion:
                magentoExtensionCtx?.magentoExtensionVersion && magentoExtensionCtx.magentoExtensionVersion !== ""
                    ? magentoExtensionCtx.magentoExtensionVersion
                    : "unspecified",
        },
    };

    return context;
};

export default createContext;
