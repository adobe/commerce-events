import schemas from "../schemas";
import { ExperiencePlatformConnectorExtension } from "@adobe/commerce-events-sdk";

import { ExperiencePlatformConnectorExtensionContext } from "../types/contexts";

const createContext = (
    extension?: ExperiencePlatformConnectorExtension,
): ExperiencePlatformConnectorExtensionContext => {
    const mse = window.magentoStorefrontEvents;
    const experiencePlatformExtensionCtx = extension ?? mse.context.getExperiencePlatformConnectorExtension();

    if (!experiencePlatformExtensionCtx) {
        return {
            schema: schemas.EXPERIENCE_PLATFORM_CONNECTOR_EXTENSION_SCHEMA_URL,
            data: {},
        };
    }

    const context = {
        schema: schemas.EXPERIENCE_PLATFORM_CONNECTOR_EXTENSION_SCHEMA_URL,
        data: {
            version: experiencePlatformExtensionCtx.version,
        },
    };

    return context;
};

export default createContext;
