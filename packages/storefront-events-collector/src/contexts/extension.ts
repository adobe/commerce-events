import { MagentoExtension } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import schemas from "../schemas";
import { ExtensionContext } from "../types/contexts";

const createContext = (extension?: MagentoExtension): ExtensionContext => {
    const mse = window.magentoStorefrontEvents;
    const magentoExtensionCtx = extension ?? mse.context.getMagentoExtension();

    if (!magentoExtensionCtx) {
        return {
            schema: schemas.MAGENTO_EXTENSION_SCHEMA_URL,
            data: {},
        };
    }

    const version =
        magentoExtensionCtx.magentoExtensionVersion && magentoExtensionCtx.magentoExtensionVersion !== ""
            ? magentoExtensionCtx.magentoExtensionVersion
            : "unspecified";
    const context = {
        schema: schemas.MAGENTO_EXTENSION_SCHEMA_URL,
        data: {
            magentoExtensionVersion: version,
        },
    };

    return context;
};

export default createContext;
