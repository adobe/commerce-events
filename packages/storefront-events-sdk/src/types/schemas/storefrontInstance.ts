// php store specific info
export type StorefrontInstance = {
    environmentId: string;
    instanceId?: string;
    environment: string; // "Production" or "Testing"
    storeUrl: string;
    websiteId: number;
    websiteCode?: string;
    storeId: number;
    storeCode?: string;
    storeViewId: number;
    storeViewCode?: string;
    websiteName: string;
    storeName: string;
    storeViewName: string;
    baseCurrencyCode: string;
    storeViewCurrencyCode: string;
    catalogExtensionVersion?: string | null;
    storefrontTemplate?: "Luma" | "Hyva" | "AEM CIF" | "Franklin" | "PWA Studio" | "Other";
};
