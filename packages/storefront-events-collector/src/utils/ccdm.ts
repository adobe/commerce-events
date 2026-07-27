import { StorefrontInstance } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

/** returns part of storefront instance data which should be set for CCDM customers */
export const getCcdmData = (storefrontCtx: StorefrontInstance): object => {
    // ACO merchants are identified by viewId; normalize scope codes to known placeholders
    if (!storefrontCtx?.viewId) {
        return {};
    }

    return {
        storeViewCode: "STORE_VIEW_CODE",
        storeCode: "STORE_CODE",
        websiteCode: "WEBSITE_CODE",
    };
};
