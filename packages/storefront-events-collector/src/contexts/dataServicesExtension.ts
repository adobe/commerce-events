import { DataServicesExtension } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import schemas from "../schemas";
import { DataServicesExtensionContext } from "../types/contexts";

const createContext = (extension?: DataServicesExtension): DataServicesExtensionContext => {
    const mse = window.magentoStorefrontEvents;
    const dataServicesExtensionCtx = extension ?? mse.context.getDataServicesExtension();

    const context = {
        schema: schemas.DATA_SERVICES_EXTENSION_SCHEMA_URL,
        data: {
            version:
                dataServicesExtensionCtx?.version && dataServicesExtensionCtx.version !== ""
                    ? dataServicesExtensionCtx.version
                    : "unspecified",
        },
    };

    return context;
};

export default createContext;
