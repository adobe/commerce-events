import schemas from "../schemas";

import {
    AEP,
    ExperiencePlatformConnectorExtension,
} from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import { ExperiencePlatformConnectorExtensionContext } from "../types/contexts";

const createContext = (
    experiencePlatformConnectorExtension?: ExperiencePlatformConnectorExtension,
    aep?: AEP,
): ExperiencePlatformConnectorExtensionContext => {
    const mse = window.magentoStorefrontEvents;
    const experiencePlatformExtensionCtx =
        experiencePlatformConnectorExtension ?? mse.context.getExperiencePlatformConnectorExtension();

    const aepContext = aep ?? mse.context.getAEP();
    const setupComplete = !!aepContext?.datastreamId && !!aepContext?.imsOrgId;

    const context = {
        schema: schemas.EXPERIENCE_PLATFORM_CONNECTOR_EXTENSION_SCHEMA_URL,
        data: {
            version:
                experiencePlatformExtensionCtx?.version && !!experiencePlatformExtensionCtx.version
                    ? experiencePlatformExtensionCtx.version
                    : "unspecified",
            setupComplete: !!setupComplete,
        },
    };

    return context;
};

export default createContext;
