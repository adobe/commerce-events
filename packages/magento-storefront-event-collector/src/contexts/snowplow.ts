import { ContextPrimitive } from "@snowplow/tracker-core";

import {
    createDataServicesExtensionCtx,
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
        () => createRecommendationsExtensionCtx(),
        () => createSearchExtensionCtx(),
        () => createShopperCtx(),
    ];

    return contexts;
};

export default createContext;
