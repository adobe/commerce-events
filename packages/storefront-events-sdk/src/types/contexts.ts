import contexts from "../contexts";
import {
    Account,
    AEP,
    Category,
    CustomUrl,
    DataServicesExtension,
    Debug,
    EventForwarding,
    MagentoExtension,
    Order,
    Page,
    Product,
    Recommendations,
    RecommendationsExtension,
    ReferrerUrl,
    SearchExtension,
    SearchInput,
    SearchResults,
    Shopper,
    ShoppingCart,
    StorefrontInstance,
} from "./schemas";

export type ContextName =
    | typeof contexts.AEP_CONTEXT
    | typeof contexts.CATEGORY_CONTEXT
    | typeof contexts.CUSTOM_URL_CONTEXT
    | typeof contexts.DATA_SERVICES_EXTENSION_CONTEXT
    | typeof contexts.DEBUG_CONTEXT
    | typeof contexts.EVENT_FORWARDING_CONTEXT
    | typeof contexts.MAGENTO_EXTENSION_CONTEXT
    | typeof contexts.ORDER_CONTEXT
    | typeof contexts.PAGE_CONTEXT
    | typeof contexts.PRODUCT_CONTEXT
    | typeof contexts.RECOMMENDATIONS_CONTEXT
    | typeof contexts.RECOMMENDATIONS_EXTENSION_CONTEXT
    | typeof contexts.REFERRER_URL_CONTEXT
    | typeof contexts.SEARCH_EXTENSION_CONTEXT
    | typeof contexts.SEARCH_INPUT_CONTEXT
    | typeof contexts.SEARCH_RESULTS_CONTEXT
    | typeof contexts.SHOPPER_CONTEXT
    | typeof contexts.SHOPPING_CART_CONTEXT
    | typeof contexts.STOREFRONT_INSTANCE_CONTEXT;

export type Context = {
    [contexts.ACCOUNT_CONTEXT]?: Account;
    [contexts.AEP_CONTEXT]?: AEP;
    [contexts.CATEGORY_CONTEXT]: Category;
    [contexts.CUSTOM_URL_CONTEXT]: CustomUrl;
    [contexts.DATA_SERVICES_EXTENSION_CONTEXT]?: DataServicesExtension;
    [contexts.DEBUG_CONTEXT]?: Debug;
    [contexts.EVENT_FORWARDING_CONTEXT]?: EventForwarding;
    [contexts.MAGENTO_EXTENSION_CONTEXT]: MagentoExtension;
    [contexts.ORDER_CONTEXT]: Order;
    [contexts.PAGE_CONTEXT]: Page;
    [contexts.PRODUCT_CONTEXT]: Product;
    [contexts.RECOMMENDATIONS_EXTENSION_CONTEXT]?: RecommendationsExtension;
    [contexts.RECOMMENDATIONS_CONTEXT]: Recommendations;
    [contexts.REFERRER_URL_CONTEXT]: ReferrerUrl;
    [contexts.SEARCH_EXTENSION_CONTEXT]?: SearchExtension;
    [contexts.SEARCH_INPUT_CONTEXT]: SearchInput;
    [contexts.SEARCH_RESULTS_CONTEXT]: SearchResults;
    [contexts.SHOPPER_CONTEXT]: Shopper;
    [contexts.SHOPPING_CART_CONTEXT]: ShoppingCart;
    [contexts.STOREFRONT_INSTANCE_CONTEXT]: StorefrontInstance;
};

export type CustomContext = Record<string, unknown>;
