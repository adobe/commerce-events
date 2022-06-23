import { CustomUrl } from "../src/types/schemas/customUrl";
import {
    AEP,
    Category,
    Debug,
    EventForwarding,
    MagentoExtension,
    Order,
    Page,
    Product,
    Recommendations,
    ReferrerUrl,
    SearchExtension,
    RecommendationsExtension,
    DataServicesExtension,
    SearchInput,
    SearchResults,
    Shopper,
    ShoppingCart,
    StorefrontInstance,
    Account,
} from "../src/types/schemas/";
import { CustomContext } from "../src/types/contexts";

export const generateAccountContext = (
    overrides?: Partial<Account>,
): Account => ({
    firstName: "firstName",
    lastName: "lastName",
    ...overrides,
});

export const generateDebugContext = (overrides?: Partial<Debug>): Debug => ({
    eventId: "abcdefg12345",
    ...overrides,
});

export const generateAEPContext = (overrides?: Partial<AEP>): AEP => ({
    imsOrgId: "1234@AdobeOrg",
    datastreamId: "1234:dev",
    ...overrides,
});

export const generateCategoryContext = (
    overrides?: Partial<Category>,
): Category => ({
    name: "pants",
    urlKey: "pants",
    urlPath: "/categories/pants",
    ...overrides,
});

export const generateCustomUrlContext = (
    overrides?: Partial<CustomUrl>,
): CustomUrl => ({
    customUrl: "https://www.test.org",
    ...overrides,
});

export const generateEventForwardingContext = (
    overrides?: Partial<EventForwarding>,
): EventForwarding => ({
    aep: false,
    commerce: true,
    ...overrides,
});

export const generateMagentoExtensionContext = (
    overrides?: Partial<MagentoExtension>,
): MagentoExtension => ({
    magentoExtensionVersion: "1.0.0",
    ...overrides,
});

export const generateOrderContext = (overrides?: Partial<Order>): Order => ({
    appliedCouponCode: "",
    email: "test@test.com",
    grandTotal: 123,
    orderId: 1293949,
    orderType: "instant_purchase",
    otherTax: 5,
    paymentMethodCode: "giftcard",
    paymentMethodName: "giftcard",
    salesTax: 7,
    subtotalExcludingTax: 111,
    subtotalIncludingTax: 123,
    ...overrides,
});

export const generatePageContext = (overrides?: Partial<Page>): Page => ({
    pageType: "pdp",
    eventType: "visibilityHidden",
    maxXOffset: 0,
    maxYOffset: 0,
    minXOffset: 0,
    minYOffset: 0,
    ping_interval: 5,
    pings: 20419,
    ...overrides,
});

export const generateProductContext = (
    overrides?: Partial<Product>,
): Product => ({
    categories: ["14", "15", "21"],
    name: "Felicia Maxi Dress",
    productId: 1153,
    sku: "VD04",
    topLevelSku: "VD04",
    pricing: {
        regularPrice: 19.99,
        minimalPrice: 10.99,
        maximalPrice: 24.99,
        currencyCode: "USD",
    },
    ...overrides,
});

export const generateRecommendationsContext = (
    overrides?: Partial<Recommendations>,
): Recommendations => ({
    units: [
        {
            unitId: "abc123",
            unitName: "most-viewed",
            typeId: "most-viewed",
            unitType: "primary",
            searchTime: 2,
            totalProducts: 2,
            primaryProducts: 2,
            backupProducts: 0,
            products: [
                {
                    rank: 1,
                    score: 100.5,
                    sku: "space sku tst two",
                    name: "space sku tst two",
                    productId: 2051,
                    shortDescription: "short product description",
                    type: "simple",
                    visibility: "Catalog, Search",
                    categories: [
                        "",
                        "gear",
                        "collections",
                        "training",
                        "men",
                        "women",
                        "promotions",
                        "gift-cards",
                        "sale",
                        "what-is-new",
                        "what-is-new/qa",
                    ],
                    weight: 7.0,
                    currency: "USD",
                    url: "https://magento.com",
                    prices: {
                        maximum: {
                            finalAdjustments: [
                                {
                                    code: "coupon",
                                    amount: 10,
                                },
                            ],
                            final: 33.12,
                            regular: 33.12,
                            regularAdjustments: [],
                        },
                        minimum: {
                            finalAdjustments: [
                                {
                                    code: "coupon",
                                    amount: 10,
                                },
                            ],
                            final: 33.12,
                            regular: 33.12,
                            regularAdjustments: [],
                        },
                    },
                    queryType: "primary",
                },
                {
                    rank: 2,
                    score: 100.5,
                    sku: "space sku tst three",
                    name: "space sku tst three",
                    productId: 2052,
                    shortDescription: "short product description",
                    type: "simple",
                    visibility: "Catalog, Search",
                    categories: [
                        "",
                        "gear",
                        "collections",
                        "training",
                        "men",
                        "women",
                        "promotions",
                        "gift-cards",
                        "sale",
                        "what-is-new",
                        "what-is-new/qa",
                    ],
                    weight: 7.0,
                    currency: "USD",
                    url: "https://magento.com",
                    prices: {
                        maximum: {
                            finalAdjustments: [
                                {
                                    code: "coupon",
                                    amount: 10,
                                },
                            ],
                            final: 12.22,
                            regular: 12.22,
                            regularAdjustments: [],
                        },
                        minimum: {
                            finalAdjustments: [
                                {
                                    code: "coupon",
                                    amount: 10,
                                },
                            ],
                            final: 12.22,
                            regular: 12.22,
                            regularAdjustments: [],
                        },
                    },
                    queryType: "primary",
                },
            ],
            pagePlacement: "below-main-content",
            yOffsetTop: 100,
            yOffsetBottom: 1200,
        },
    ],
    ...overrides,
});

export const generateReferrerUrlContext = (
    overrides?: Partial<ReferrerUrl>,
): ReferrerUrl => ({
    referrerUrl: "https://www.test.org",
    ...overrides,
});

export const generateSearchInputContext = (
    overrides?: Partial<SearchInput>,
): SearchInput => ({
    units: [
        {
            searchUnitId: "search-bar",
            searchRequestId: "abc123",
            queryTypes: ["products"],
            phrase: "pants",
            pageSize: 20,
            currentPage: 1,
            filter: [{ attribute: "size", eq: "small" }],
            sort: [{ attribute: "relevance", direction: "DESC" }],
            context: { customerGroup: "NLI" },
        },
    ],
    ...overrides,
});

export const generateSearchResultsContext = (
    overrides?: Partial<SearchResults>,
): SearchResults => ({
    units: [
        {
            searchUnitId: "search-bar",
            searchRequestId: "abc123",
            executionTime: 476.27,
            products: [],
            categories: [],
            suggestions: [],
            page: 1,
            perPage: 20,
            facets: [
                {
                    attribute: "size",
                    buckets: [
                        {
                            title: "S",
                            count: 4,
                        },
                        {
                            title: "M",
                            count: 12,
                        },
                        {
                            title: "L",
                            count: 9,
                        },
                    ],
                    title: "Size",
                    type: "PINNED",
                },
            ],
        },
    ],
    ...overrides,
});

export const generateShopperContext = (
    overrides?: Partial<Shopper>,
): Shopper => ({ shopperId: "guest", ...overrides });

export const generateShoppingCartContext = (
    overrides?: Partial<ShoppingCart>,
): ShoppingCart => ({
    id: "1",
    items: [
        {
            canApplyMsrp: false,
            formattedPrice: "$20.00",
            id: "aaaaaa",
            prices: {
                price: {
                    value: 20.0,
                    currency: "USD",
                    regularPrice: 20.0,
                },
            },
            product: {
                productId: 111111,
                name: "T-Shirt",
                sku: "ts001",
                pricing: {
                    regularPrice: 20.0,
                    minimalPrice: 20.0,
                    maximalPrice: 20.0,
                    currencyCode: "USD",
                },
            },
            configurableOptions: [],
            quantity: 1,
        },
    ],
    prices: {
        subtotalExcludingTax: {
            value: 19.99,
            currency: "USD",
        },
        subtotalIncludingTax: {
            value: 23.23,
            currency: "USD",
        },
    },
    totalQuantity: 5,
    possibleOnepageCheckout: false,
    giftMessageSelected: false,
    giftWrappingSelected: false,
    ...overrides,
});

export const generateStorefrontInstanceContext = (
    overrides?: Partial<StorefrontInstance>,
): StorefrontInstance => ({
    baseCurrencyCode: "USD",
    environment: "Test",
    environmentId: "12345",
    storeId: 12345,
    storeName: "Test Store",
    storeUrl: "https://www.test.org",
    storeViewCurrencyCode: "CLP",
    storeViewId: 12345,
    storeViewName: "Test store view",
    websiteId: 12345,
    websiteName: "test website name",
    ...overrides,
});

export const generateCustomContext = (
    overrides?: Partial<CustomContext>,
): CustomContext => ({
    foo: "foo",
    bar: "bar",
    ...overrides,
});

export const generateSearchExtensionContext = (
    overrides?: Partial<SearchExtension>,
): SearchExtension => ({
    version: "1.0.0",
    ...overrides,
});

export const generateRecommendationsExtensionContext = (
    overrides?: Partial<RecommendationsExtension>,
): RecommendationsExtension => ({
    version: "1.0.0",
    ...overrides,
});

export const generateDataServicesExtensionContext = (
    overrides?: Partial<DataServicesExtension>,
): DataServicesExtension => ({
    version: "1.0.0",
    ...overrides,
});
