import { ContextPrimitive } from "@snowplow/tracker-core";

import {
    createDataServicesExtensionCtx,
    createExperiencePlatformConnectorExtensionCtx,
    createMagentoExtensionCtx,
    createRecommendationsExtensionCtx,
    createSearchExtensionCtx,
    createShopperCtx,
    createStorefrontInstanceCtx,
    createTrackerCtx,
} from ".";

const createContext = (): Array<ContextPrimitive> => {
    const contexts = [
        () => createTrackerCtx(),
        () => createStorefrontInstanceCtx(),
        () => createMagentoExtensionCtx(),
        () => createDataServicesExtensionCtx(),
        () => createExperiencePlatformConnectorExtensionCtx(),
        () => createRecommendationsExtensionCtx(),
        () => createSearchExtensionCtx(),
        () => createShopperCtx(),
    ];

    return contexts;
};

export default createContext;
