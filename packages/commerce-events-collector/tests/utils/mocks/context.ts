import pkg from "../../../package.json";

const mockProductCtx = {
    productId: 111111,
    name: "T-Shirt",
    sku: "aaaaaa",
    topLevelSku: "bbbbbb",
    specialToDate: "01/10/2021",
    specialFromDate: "01/01/2021",
    newToDate: "01/10/2021",
    newFromDate: "01/01/2021",
    createdAt: "01/01/2021",
    updatedAt: "01/01/2021",
    manufacturer: "Magento",
    countryOfManufacture: "USA",
    categories: ["Tops", "Shirts"],
    productType: "normal",
    pricing: {
        regularPrice: 19.99,
        minimalPrice: 10.99,
        maximalPrice: 24.99,
        specialPrice: 14.99,
        tierPricing: [],
        currencyCode: "USD",
    },
    canonicalUrl: "https://magento.com/tshirt",
    mainImageUrl: "https://magento.com/tshirt.jpg",
};

const mockShopperCtx = {
    shopperId: "logged-in",
};

const mockShoppingCartCtx = {
    cartId: "111111",
    items: [
        {
            basePrice: 20.0,
            cartItemId: "aaaaaa",
            mainImageUrl: undefined,
            offerPrice: 20.0,
            productName: "T-Shirt",
            productSku: "ts001",
            qty: 1,
        },
        {
            basePrice: 50.0,
            cartItemId: "cccccc",
            mainImageUrl: undefined,
            offerPrice: 50.0,
            productName: "Hoodie",
            productSku: "h001",
            qty: 1,
        },
    ],
    itemsCount: 2,
    subtotalExcludingTax: 70.0,
    subtotalIncludingTax: 73.5,
    possibleOnepageCheckout: false,
    giftMessageSelected: false,
    giftWrappingSelected: false,
};

const mockStorefrontCtx = {
    baseCurrencyCode: "USD",
    environment: "production",
    environmentId: "aaaaaa",
    instanceId: "bbbbbb",
    storeCode: "magento",
    storeId: 111111,
    storeName: "magento",
    storeUrl: "https://magento.com",
    storeViewCode: "default",
    storeViewCurrencyCode: "USD",
    storeViewId: 222222,
    storeViewName: "default",
    websiteCode: "website",
    websiteId: 333333,
    websiteName: "website",
};

const mockAepCtx = {
    imsOrgId: "1234@AdobeOrg",
    datastreamId: "1234:dev",
};

const mockEventForwardingCtx = {
    aep: false,
    // snowplow: true,
};

const mockTrackerCtx = {
    magentoJsVersion: pkg.version,
};

const mockExtensionCtx = {
    magentoExtensionVersion: "1.2.3",
};

const mockDataServicesExtensionCtx = {
    version: "1.2.3",
};

const mockRecommendationsExtensionCtx = {
    version: "1.2.3",
};

const mockSearchExtensionCtx = {
    version: "1.2.3",
};

const mockSearchInputCtx = {
    searchUnitId: "search-bar",
    source: null,
    queryTypes: ["products"],
    searchRequestId: "abc123",
    query: "red patns",
    page: 1,
    perPage: 20,
    filter: [
        {
            name: "size",
            values: ["small"],
            operator: "eq",
        },
        {
            name: "category",
            values: ["bottoms", "mens"],
            operator: "in",
        },
        {
            name: "price",
            values: ["19.99", "49.99"],
            operator: "range",
        },
    ],
    sort: [
        {
            attribute: "relevance",
            direction: "DESC",
        },
    ],
};

const mockSearchResultCategoryCtx = {
    name: "Pants",
    rank: 1,
    url: "https://magento.com/category/pants",
};

const mockSearchResultProductCtx = {
    imageUrl: "https://magento.com/red-pants.jpg",
    name: "Red Pants",
    price: 49.99,
    rank: 1,
    sku: "abc123",
    url: "https://magento.com/red-pants",
};

const mockSearchResultsCtx = {
    searchUnitId: "search-bar",
    searchRequestId: "abc123",
    executionTime: 378.39,
    products: [
        {
            imageUrl: "https://magento.com/red-pants.jpg",
            name: "Red Pants",
            price: 49.99,
            rank: 1,
            sku: "abc123",
            url: "https://magento.com/red-pants",
        },
    ],
    suggestions: [
        {
            rank: 1,
            suggestion: "red pants",
        },
    ],
    categories: [
        {
            name: "Pants",
            rank: 1,
            url: "https://magento.com/category/pants",
        },
        {
            name: "Bottoms",
            rank: 2,
            url: "https://magento.com/category/bottoms",
        },
    ],
    page: 1,
    perPage: 20,
    productCount: 1,
    categoryCount: 2,
    suggestionCount: 1,
    facets: [
        {
            attribute: "size",
            title: "Size",
            type: "PINNED",
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
        },
    ],
};

const mockSearchResultSuggestionCtx = {
    rank: 1,
    suggestion: "red pants",
};

const mockRecommendationUnitCtx = {
    backupsCount: 0,
    configType: "preconfigured",
    itemsCount: 2,
    name: "most-viewed",
    source: "api",
    unitId: "abc123",
    placement: "below-main-content",
    yOffsetTop: 100,
    yOffsetBottom: 1200,
    recType: "most-viewed",
};

const mockRecommendedItemsCtx = [
    {
        currencyCode: "USD",
        displayRank: 1,
        imageUrl: null,
        name: "first item",
        prices: {
            maximum: {
                final: 19.99,
                finalAdjustments: [
                    {
                        code: "coupon",
                        amount: 10,
                    },
                ],
                regular: 29.99,
                regularAdjustments: [],
            },
            minimum: {
                final: 19.99,
                finalAdjustments: [
                    {
                        code: "coupon",
                        amount: 10,
                    },
                ],
                regular: 29.99,
                regularAdjustments: [],
            },
        },
        serviceRank: 1,
        sku: "abc123",
        unitId: "abc123",
        url: "https://magento.com",
    },
    {
        currencyCode: "USD",
        displayRank: 2,
        imageUrl: null,
        name: "second item",
        prices: {
            maximum: {
                final: 9.99,
                finalAdjustments: [
                    {
                        code: "coupon",
                        amount: 10,
                    },
                ],
                regular: 19.99,
                regularAdjustments: [],
            },
            minimum: {
                final: 9.99,
                finalAdjustments: [
                    {
                        code: "coupon",
                        amount: 10,
                    },
                ],
                regular: 19.99,
                regularAdjustments: [],
            },
        },
        serviceRank: 2,
        sku: "def456",
        unitId: "abc123",
        url: "https://magento.com",
    },
];

export {
    mockAepCtx,
    mockDataServicesExtensionCtx,
    mockEventForwardingCtx,
    mockExtensionCtx,
    mockProductCtx,
    mockRecommendationsExtensionCtx,
    mockRecommendationUnitCtx,
    mockRecommendedItemsCtx,
    mockSearchExtensionCtx,
    mockSearchInputCtx,
    mockSearchResultCategoryCtx,
    mockSearchResultProductCtx,
    mockSearchResultsCtx,
    mockSearchResultSuggestionCtx,
    mockShopperCtx,
    mockShoppingCartCtx,
    mockStorefrontCtx,
    mockTrackerCtx,
};
