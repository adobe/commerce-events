import { StorefrontInstance } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

/** returns part of storefront instance data which should be set for CCDM customers */
export const getCcdmData = (storefrontCtx : StorefrontInstance): object => {
    // If locale is not empty, and scope codes are empty -  it is CCDM customer, otherwise returns empty object
    if (!storefrontCtx?.locale ||
        storefrontCtx?.storeViewCode ||
        storefrontCtx?.storeCode ||
        storefrontCtx?.websiteCode
    ) {
        return {};
    }

    return {
        storeViewCode: storefrontCtx.locale,
        storeCode: "STORE_CODE",
        websiteCode: "WEBSITE_CODE"

    };
};
