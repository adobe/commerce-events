import { StorefrontInstance } from "@adobe/magento-storefront-events-sdk/src/types/schemas";
import { CommerceScope } from "../../types/aep";

const createCommerceScope = (storefrontInstanceContext: StorefrontInstance): CommerceScope => {
    return {
        environmentID: storefrontInstanceContext.environmentId,
        storeCode: storefrontInstanceContext.storeCode,
        storeViewCode: storefrontInstanceContext.storeViewCode,
        websiteCode: storefrontInstanceContext.websiteCode,
    };
};

export { createCommerceScope };
