import { Base } from "./Base";
import contexts from "./contexts";
import {
    Account,
    AEP,
    Category,
    ChangedProducts,
    CustomUrl,
    Debug,
    EventForwarding,
    ExperiencePlatformConnectorExtension,
    MagentoExtension,
    Order,
    Page,
    Product,
    Shopper,
    ShoppingCart,
    StorefrontInstance,
    Recommendations,
    ReferrerUrl,
    RequisitionList,
    RequisitionListItems,
    SearchInput,
    SearchResults,
    DataServicesExtension,
    RecommendationsExtension,
    SearchExtension,
} from "./types/schemas";
import { OrderProducts } from "./types/schemas/orderProducts";

export default class ContextManager extends Base {
    getAEP(): AEP {
        return this.getContext<AEP>(contexts.AEP_CONTEXT);
    }

    setAEP(context: AEP): void {
        this.setContext<AEP>(contexts.AEP_CONTEXT, context);
    }

    getAccount(): Account {
        return this.getContext<Account>(contexts.ACCOUNT_CONTEXT);
    }

    setAccount(context: Account): void {
        this.setContext<Account>(contexts.ACCOUNT_CONTEXT, context);
    }

    getChangedProducts(): ChangedProducts {
        return this.getContext<ChangedProducts>(contexts.CHANGED_PRODUCTS_CONTEXT);
    }

    setChangedProducts(context: ChangedProducts): void {
        this.setContext<ChangedProducts>(contexts.CHANGED_PRODUCTS_CONTEXT, context);
    }

    getCategory(): Category {
        return this.getContext<Category>(contexts.CATEGORY_CONTEXT);
    }

    setCategory(context: Category): void {
        this.setContext<Category>(contexts.CATEGORY_CONTEXT, context);
    }

    getDebug(): Debug {
        return this.getContext<Debug>(contexts.DEBUG_CONTEXT);
    }

    setDebug(context: Debug): void {
        this.setContext<Debug>(contexts.DEBUG_CONTEXT, context);
    }

    getEventForwarding(): EventForwarding {
        return this.getContext<EventForwarding>(contexts.EVENT_FORWARDING_CONTEXT);
    }

    setEventForwarding(context: EventForwarding): void {
        this.setContext<EventForwarding>(contexts.EVENT_FORWARDING_CONTEXT, context);
    }

    getExperiencePlatformConnectorExtension(): ExperiencePlatformConnectorExtension {
        return this.getContext<ExperiencePlatformConnectorExtension>(
            contexts.EXPERIENCE_PLATFORM_CONNECTOR_EXTENSION_CONTEXT,
        );
    }

    setExperiencePlatformConnectorExtension(context: ExperiencePlatformConnectorExtension): void {
        this.setContext<ExperiencePlatformConnectorExtension>(
            contexts.EXPERIENCE_PLATFORM_CONNECTOR_EXTENSION_CONTEXT,
            context,
        );
    }

    getCustomUrl(): CustomUrl {
        return this.getContext<CustomUrl>(contexts.CUSTOM_URL_CONTEXT);
    }

    setCustomUrl(context: CustomUrl): void {
        this.setContext<CustomUrl>(contexts.CUSTOM_URL_CONTEXT, context);
    }

    getDataServicesExtension(): DataServicesExtension {
        return this.getContext<DataServicesExtension>(contexts.DATA_SERVICES_EXTENSION_CONTEXT);
    }

    setDataServicesExtension(context: DataServicesExtension): void {
        this.setContext<DataServicesExtension>(contexts.DATA_SERVICES_EXTENSION_CONTEXT, context);
    }

    getMagentoExtension(): MagentoExtension {
        return this.getContext<MagentoExtension>(contexts.MAGENTO_EXTENSION_CONTEXT);
    }

    setMagentoExtension(context: MagentoExtension): void {
        this.setContext<MagentoExtension>(contexts.MAGENTO_EXTENSION_CONTEXT, context);
    }

    getOrder(): Order {
        return this.getContext<Order>(contexts.ORDER_CONTEXT);
    }

    setOrder(context: Order): void {
        this.setContext<Order>(contexts.ORDER_CONTEXT, context);
    }

    getOrderPage(): OrderProducts {
        return this.getContext<OrderProducts>(contexts.ORDER_PAGE_CONTEXT);
    }

    setOrderPage(context: OrderProducts) {
        this.setContext<OrderProducts>(contexts.ORDER_PAGE_CONTEXT, context);
    }

    getPage(): Page {
        return this.getContext<Page>(contexts.PAGE_CONTEXT);
    }

    setPage(context: Page): void {
        this.setContext<Page>(contexts.PAGE_CONTEXT, context);
    }

    getProduct(): Product {
        return this.getContext<Product>(contexts.PRODUCT_CONTEXT);
    }

    setProduct(context: Product): void {
        this.setContext<Product>(contexts.PRODUCT_CONTEXT, context);
    }

    getRecommendations(): Recommendations {
        return this.getContext<Recommendations>(contexts.RECOMMENDATIONS_CONTEXT);
    }

    setRecommendations(context: Recommendations): void {
        this.setContext<Recommendations>(contexts.RECOMMENDATIONS_CONTEXT, context);
    }

    getRecommendationsExtension(): RecommendationsExtension {
        return this.getContext<RecommendationsExtension>(contexts.RECOMMENDATIONS_EXTENSION_CONTEXT);
    }

    setRecommendationsExtension(context: RecommendationsExtension): void {
        this.setContext<RecommendationsExtension>(contexts.RECOMMENDATIONS_EXTENSION_CONTEXT, context);
    }

    getReferrerUrl(): ReferrerUrl {
        return this.getContext<ReferrerUrl>(contexts.REFERRER_URL_CONTEXT);
    }

    setReferrerUrl(context: ReferrerUrl): void {
        this.setContext<ReferrerUrl>(contexts.REFERRER_URL_CONTEXT, context);
    }

    getRequisitionList(): RequisitionList {
        return this.getContext<RequisitionList>(contexts.REQUISITION_LIST_CONTEXT);
    }

    setRequisitionList(context: RequisitionList): void {
        this.setContext<RequisitionList>(contexts.REQUISITION_LIST_CONTEXT, context);
    }

    getRequisitionListItems(): RequisitionListItems {
        return this.getContext<RequisitionListItems>(contexts.REQUISITION_LIST_ITEMS_CONTEXT);
    }

    setRequisitionListItems(context: RequisitionListItems): void {
        this.setContext<RequisitionListItems>(contexts.REQUISITION_LIST_ITEMS_CONTEXT, context);
    }

    getSearchExtension(): SearchExtension {
        return this.getContext<SearchExtension>(contexts.SEARCH_EXTENSION_CONTEXT);
    }

    setSearchExtension(context: SearchExtension): void {
        this.setContext<SearchExtension>(contexts.SEARCH_EXTENSION_CONTEXT, context);
    }

    getSearchInput(): SearchInput {
        return this.getContext<SearchInput>(contexts.SEARCH_INPUT_CONTEXT);
    }

    setSearchInput(context: SearchInput): void {
        this.setContext<SearchInput>(contexts.SEARCH_INPUT_CONTEXT, context);
    }

    getSearchResults(): SearchResults {
        return this.getContext<SearchResults>(contexts.SEARCH_RESULTS_CONTEXT);
    }

    setSearchResults(context: SearchResults): void {
        this.setContext<SearchResults>(contexts.SEARCH_RESULTS_CONTEXT, context);
    }

    getShopper(): Shopper {
        return this.getContext<Shopper>(contexts.SHOPPER_CONTEXT);
    }

    setShopper(context: Shopper): void {
        this.setContext<Shopper>(contexts.SHOPPER_CONTEXT, context);
    }

    getShoppingCart(): ShoppingCart {
        return this.getContext<ShoppingCart>(contexts.SHOPPING_CART_CONTEXT);
    }

    setShoppingCart(context: ShoppingCart): void {
        this.setContext<ShoppingCart>(contexts.SHOPPING_CART_CONTEXT, context);
    }

    getStorefrontInstance(): StorefrontInstance {
        return this.getContext<StorefrontInstance>(contexts.STOREFRONT_INSTANCE_CONTEXT);
    }

    setStorefrontInstance(context: StorefrontInstance): void {
        this.setContext<StorefrontInstance>(contexts.STOREFRONT_INSTANCE_CONTEXT, context);
    }

    getContext<T>(name?: string): T {
        return super.getContext<T>(name);
    }

    setContext<T>(name: string, context: T): void {
        super.setContext<T>(name, context);
    }
}
