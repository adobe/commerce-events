import { SelfDescribingJson } from "@snowplow/tracker-core";

type Extension = {
    magentoExtensionVersion: string;
};

type DataServicesExtension = {
    version: string;
};

type RecommendationsExtension = {
    version: string;
};

type SearchExtension = {
    version: string;
};

type Product = {
    canonicalUrl?: string | null;
    categories?: Array<string> | null;
    countryOfManufacture?: string | null;
    createdAt?: string | null;
    mainImageUrl?: string | null;
    manufacturer?: string | null;
    name: string;
    newFromDate?: string | null;
    newToDate?: string | null;
    productId: number;
    sku: string;
    pricing?: ProductPricing | null;
    productType?: string | null;
    specialFromDate?: string | null;
    specialToDate?: string | null;
    topLevelSku?: string | null;
    updatedAt?: string | null;
};

type ProductPricing = {
    currencyCode: string | null;
    maximalPrice?: number;
    minimalPrice?: number;
    regularPrice: number;
    specialPrice?: number;
    tierPricing?: Array<{
        customerGroupId: number | null;
        qty: number;
        value: number;
    }>;
};

type RecommendationUnit = {
    name: string;
    unitId: string;
    itemsCount: number;
    backupsCount: number;
    configType: string;
    source: string;
    recType: string;
    typeId: string;
    placement: string | null;
    yOffsetTop?: number | null;
    yOffsetBottom?: number | null;
};

type RecommendedItem = {
    unitId: string;
    serviceRank: number;
    displayRank: number;
    name: string;
    sku: string;
    url: string;
    imageUrl: string | null;
    prices?: {
        maximum: {
            final: number | null;
            regular: number | null;
            finalAdjustments?: Array<{
                code: string;
                amount: number;
            }>;
            regularAdjustments?: Array<{
                code: string;
                amount: number;
            }>;
        };
        minimum: {
            final: number | null;
            regular: number | null;
            finalAdjustments?: Array<{
                code: string;
                amount: number;
            }>;
            regularAdjustments?: Array<{
                code: string;
                amount: number;
            }>;
        };
    };
    currencyCode?: string | null;
};

type SearchInput = {
    searchUnitId: string;
    source: string | null;
    queryTypes: Array<string>;
    searchRequestId: string;
    query: string;
    page: number;
    perPage: number;
    filter: Array<SearchFilter> | null;
    sort: Array<SearchSort> | null;
};

type SearchFilter = {
    name: string;
    values: Array<string>;
    operator: string;
};

type SearchSort = {
    attribute: string;
    direction: string;
};

type SearchResultCategory = {
    name: string;
    url: string;
    rank: number;
};

type SearchResultProduct = {
    name: string;
    url: string;
    rank: number;
    sku: string;
    imageUrl: string;
    price?: number;
};

type SearchResults = {
    searchUnitId: string;
    searchRequestId: string;
    executionTime?: number;
    products: Array<SearchResultProduct> | null;
    suggestions: Array<SearchResultSuggestion> | null;
    categories: Array<SearchResultCategory> | null;
    page: number;
    perPage: number;
    productCount: number;
    categoryCount: number;
    suggestionCount: number;
    facets: Array<SearchFacet> | null;
};

type SearchFacet = {
    attribute: string;
    title: string;
    type: string;
    buckets: Array<SearchBucket>;
};

type SearchBucket = {
    title: string;
};

type SearchResultSuggestion = {
    suggestion: string;
    rank: number;
};

type Shopper = {
    ecid?: string;
    name?: string;
    shopperId: string;
};

type ShoppingCart = {
    cartId?: string | null;
    itemsCount: number;
    items?: Array<ShoppingCartItem>;
    subtotalAmount?: number;
    subtotalIncludingTax?: number;
    subtotalExcludingTax?: number;
    possibleOnepageCheckout?: boolean;
    giftMessageSelected?: boolean;
    giftWrappingSelected?: boolean;
};

type ShoppingCartItem = {
    offerPrice: number;
    basePrice: number;
    qty: number;
    productName: string;
    cartItemId: string;
    productSku: string;
    mainImageUrl?: string;
};

type Storefront = {
    baseCurrencyCode: string;
    catalogExtensionVersion?: string | null;
    environment: string;
    environmentId: string;
    instanceId?: string;
    storeCode?: string;
    storeId: number;
    storeName: string;
    storeUrl: string;
    storeViewCode?: string;
    storeViewCurrencyCode: string;
    storeViewId: number;
    storeViewName: string;
    websiteCode?: string;
    websiteId: number;
    websiteName: string;
};

type Tracker = {
    magentoJsVersion: string;
};

type SnowplowContext<DataType> = SelfDescribingJson<
    DataType | Record<string, unknown>
>;

type ExtensionContext = SnowplowContext<Extension>;
type DataServicesExtensionContext = SnowplowContext<DataServicesExtension>;
type RecommendationsExtensionContext =
    SnowplowContext<RecommendationsExtension>;
type SearchExtensionContext = SnowplowContext<SearchExtension>;
type ProductContext = SnowplowContext<Product>;
type RecommendationUnitContext = SnowplowContext<RecommendationUnit>;
type RecommendedItemContext = SnowplowContext<RecommendedItem>;
type SearchInputContext = SnowplowContext<SearchInput>;
type SearchResultCategoryContext = SnowplowContext<SearchResultCategory>;
type SearchResultProductContext = SnowplowContext<SearchResultProduct>;
type SearchResultsContext = SnowplowContext<SearchResults>;
type SearchResultSuggestionContext = SnowplowContext<SearchResultSuggestion>;
type ShopperContext = SnowplowContext<Shopper>;
type ShoppingCartContext = SnowplowContext<ShoppingCart>;
type StorefrontContext = SnowplowContext<Storefront>;
type TrackerContext = SnowplowContext<Tracker>;

// non-Snowplow contexts

type EventForwardingContext = {
    aep?: boolean;
    commerce?: boolean;
};

type AEPContext = {
    imsOrgId?: string;
    datastreamId?: string;
};
