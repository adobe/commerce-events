import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";
import {
    Account,
    ChangedProducts,
    Category,
    CustomUrl,
    DataServicesExtension,
    MagentoExtension,
    Order,
    Page,
    Product,
    Recommendations,
    RecommendationsExtension,
    ReferrerUrl,
    RequisitionList,
    SearchExtension,
    SearchInput,
    SearchResults,
    Shopper,
    ShoppingCart,
    StorefrontInstance,
    ExperiencePlatformConnectorExtension,
} from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import {
    mockAepCtx,
    mockChangedProductsCtx,
    mockEventForwardingCtx,
    mockRequisitionListItemsCtx,
    mockOrderPageCtx,
} from "./context";

const mockAccount: Account = {
    firstName: "firstName",
    lastName: "lastName",
    emailAddress: "beacon3@commerce.com",
};

const mockChangedProducts: ChangedProducts = mockChangedProductsCtx;

const mockCategory: Category = {
    name: "pants",
    urlKey: "pants",
    urlPath: "/categories/pants",
};

const mockExtension: MagentoExtension = {
    magentoExtensionVersion: "1.2.3",
};

const mockDataServicesExtension: DataServicesExtension = {
    version: "1.2.3",
};

const mockExperiencePlatformConnectorExtenion: ExperiencePlatformConnectorExtension = {
    version: "1.2.3",
};

const mockRecommendationsExtension: RecommendationsExtension = {
    version: "1.2.3",
};

const mockSearchExtension: SearchExtension = {
    version: "1.2.3",
};

const mockOrder: Order = {
    appliedCouponCode: "",
    email: "example@email.com",
    grandTotal: 69.98,
    orderId: "111111",
    orderType: "checkout",
    otherTax: 0.0,
    paymentMethodCode: "credit card",
    paymentMethodName: "visa",
    payments: [
        {
            paymentMethodCode: "credit card",
            paymentMethodName: "visa",
            total: 30,
        },
        {
            paymentMethodCode: "cash",
            paymentMethodName: "cash",
            total: 39.98,
        },
    ],
    salesTax: 0.0,
    subtotalExcludingTax: 69.98,
    subtotalIncludingTax: 69.98,
    shipping: {
        shippingAmount: 5.99,
        shippingMethod: "ground",
    },
};

const mockPage: Page = {
    pageType: "pdp",
    maxXOffset: 0,
    maxYOffset: 0,
    minXOffset: 0,
    minYOffset: 0,
    ping_interval: 5,
    pings: 12,
};

const mockProduct: Product = {
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

const mockRecommendations: Recommendations = {
    units: [
        {
            unitId: "abc123",
            typeId: "most-viewed",
            unitName: "most-viewed",
            unitType: "primary",
            searchTime: 2,
            totalProducts: 2,
            primaryProducts: 2,
            backupProducts: 0,
            products: [
                {
                    rank: 1,
                    score: 100.5,
                    sku: "abc123",
                    name: "first item",
                    productId: 111111,
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
                            final: 19.99,
                            regular: 29.99,
                            regularAdjustments: [],
                        },
                        minimum: {
                            finalAdjustments: [
                                {
                                    code: "coupon",
                                    amount: 10,
                                },
                            ],
                            final: 19.99,
                            regular: 29.99,
                            regularAdjustments: [],
                        },
                    },
                    queryType: "primary",
                },
                {
                    rank: 2,
                    score: 100.5,
                    sku: "def456",
                    name: "second item",
                    productId: 222222,
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
                            final: 9.99,
                            regular: 19.99,
                            regularAdjustments: [],
                        },
                        minimum: {
                            finalAdjustments: [
                                {
                                    code: "coupon",
                                    amount: 10,
                                },
                            ],
                            final: 9.99,
                            regular: 19.99,
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
};

const mockShoppingCart: ShoppingCart = {
    id: "111111",
    items: [
        {
            canApplyMsrp: false,
            formattedPrice: "$20.00",
            id: "aaaaaa",
            prices: {
                price: {
                    value: 20.0,
                    currency: "USD",
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
        {
            canApplyMsrp: false,
            formattedPrice: "$50.00",
            id: "cccccc",
            prices: {
                price: {
                    value: 50.0,
                    currency: "USD",
                },
            },
            product: {
                productId: 222222,
                name: "Hoodie",
                sku: "h001",
                pricing: {
                    regularPrice: 50.0,
                    minimalPrice: 50.0,
                    maximalPrice: 50.0,
                    currencyCode: "USD",
                },
            },
            configurableOptions: [],
            quantity: 1,
        },
    ],
    prices: {
        subtotalExcludingTax: {
            value: 70.0,
            currency: "USD",
        },
        subtotalIncludingTax: {
            value: 73.5,
            currency: "USD",
        },
    },
    totalQuantity: 2,
    possibleOnepageCheckout: false,
    giftMessageSelected: false,
    giftWrappingSelected: false,
};

const mockStorefront: StorefrontInstance = {
    baseCurrencyCode: "USD",
    storeViewCurrencyCode: "USD",
    environment: "production",
    environmentId: "aaaaaa",
    instanceId: "bbbbbb",
    storeCode: "magento",
    storeId: 111111,
    storeName: "magento",
    storeUrl: "https://magento.com",
    storeViewCode: "default",
    storeViewId: 222222,
    storeViewName: "default",
    websiteCode: "website",
    websiteId: 333333,
    websiteName: "website",
    storefrontTemplate: "Franklin",
};

const mockShopper: Shopper = {
    shopperId: "logged-in",
};

const mockSearchInput: SearchInput = {
    units: [
        {
            searchUnitId: "search-bar",
            searchRequestId: "abc123",
            queryTypes: ["products"],
            phrase: "red patns",
            currentPage: 1,
            pageSize: 20,
            filter: [
                {
                    attribute: "size",
                    eq: "small",
                },
                {
                    attribute: "category",
                    in: ["bottoms", "mens"],
                },
                {
                    attribute: "price",
                    range: { from: 19.99, to: 49.99 },
                },
            ],
            sort: [
                {
                    attribute: "relevance",
                    direction: "DESC",
                },
            ],
        },
    ],
};

const mockSearchResults: SearchResults = {
    units: [
        {
            searchUnitId: "search-bar",
            searchRequestId: "abc123",
            rankingType: "viewed-also-viewed",
            trendingWindow: "7days",
            executionTime: 378.39,
            products: [
                {
                    name: "Red Pants",
                    sku: "abc123",
                    url: "https://magento.com/red-pants",
                    imageUrl: "https://magento.com/red-pants.jpg",
                    price: 49.99,
                    rank: 1,
                },
            ],
            suggestions: [
                {
                    suggestion: "red pants",
                    rank: 1,
                },
            ],
            categories: [
                {
                    name: "Pants",
                    url: "https://magento.com/category/pants",
                    rank: 1,
                },
                {
                    name: "Bottoms",
                    url: "https://magento.com/category/bottoms",
                    rank: 2,
                },
            ],
            page: 1,
            perPage: 20,
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
        },
    ],
};

const mockReferrerUrl: ReferrerUrl = {
    referrerUrl: "https://magento.com",
};

const mockRequisitionList: RequisitionList = {
    id: "1",
    name: "Req List 1",
    description: "This is req list 1",
};

const mockCustomUrl: CustomUrl = {
    customUrl: "https://magento.com",
};

const mockEvent: Event = {
    event: "add-to-cart",
    eventInfo: {
        searchUnitId: "search-bar",
        unitId: "abc123",
        productId: 111111,
        name: "Pants",
        sku: "abc123",
        suggestion: "red pants",
        accountContext: mockAccount,
        categoryContext: mockCategory,
        changedProductsContext: mockChangedProducts,
        customContext: {},
        customUrlContext: mockCustomUrl,
        magentoExtensionContext: mockExtension,
        orderContext: mockOrder,
        orderPageContext: mockOrderPageCtx,
        pageContext: mockPage,
        productContext: mockProduct,
        recommendationsContext: mockRecommendations,
        referrerUrlContext: mockReferrerUrl,
        requisitionListContext: mockRequisitionList,
        requisitionListItemsContext: mockRequisitionListItemsCtx,
        searchInputContext: mockSearchInput,
        searchResultsContext: mockSearchResults,
        shopperContext: mockShopper,
        shoppingCartContext: mockShoppingCart,
        storefrontInstanceContext: mockStorefront,
        aepContext: mockAepCtx,
        eventForwardingContext: mockEventForwardingCtx,
        dataServicesExtensionContext: mockDataServicesExtension,
        recommendationsExtensionContext: mockRecommendationsExtension,
        searchExtensionContext: mockSearchExtension,
    },
};

export {
    mockAccount,
    mockCategory,
    mockChangedProducts,
    mockDataServicesExtension,
    mockEvent,
    mockExperiencePlatformConnectorExtenion,
    mockExtension,
    mockOrder,
    mockPage,
    mockProduct,
    mockRecommendations,
    mockRecommendationsExtension,
    mockSearchExtension,
    mockSearchInput,
    mockSearchResults,
    mockShopper,
    mockShoppingCart,
    mockStorefront,
};
