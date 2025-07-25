export type Product = {
    productId: number;
    name: string;
    sku: string;
    /**
     * For simple, downloadable, and virtual products with no configurable options topLevelSku is the same
     * as the product SKU.
     * For grouped, bundled, and configurable products topLevelSku is the parent product SKU of the associated item.
     */
    topLevelSku?: string | null;
    specialToDate?: string | null;
    specialFromDate?: string | null;
    newToDate?: string | null;
    newFromDate?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    manufacturer?: string | null;
    countryOfManufacture?: string | null;
    categories?: string[] | null;
    productType?: string | null;
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
    canonicalUrl?: string | null;
    mainImageUrl?: string | null;
};
