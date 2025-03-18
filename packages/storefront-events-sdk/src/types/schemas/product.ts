export type Product = {
    canonicalUrl?: string | null;
    categories?: string[] | null;
    countryOfManufacture?: string | null;
    createdAt?: string | null;
    mainImageUrl?: string | null;
    manufacturer?: string | null;
    name: string;
    newFromDate?: string | null;
    newToDate?: string | null;
    pricing?: {
        regularPrice: number;
        minimalPrice?: number;
        maximalPrice?: number;
        specialPrice?: number;
        tierPricing?: {
            customerGroupId?: number | null;
            qty: number;
            value: number;
        }[];
        currencyCode: string | null;
    };
    productId: number;
    productType?: string | null;
    sku: string;
    specialToDate?: string | null;
    specialFromDate?: string | null;
    /**
     * For simple, downloadable, and virtual products with no configurable options topLevelSku is the same
     * as the product SKU.
     * For grouped, bundled, and configurable products topLevelSku is the parent product SKU of the associated item.
    */
    topLevelSku?: string | null; // This is required in most cases and will be mandatory in future releases.
    updatedAt?: string | null;  
};
