import { Base } from "./Base";
import events from "./events";
import { ListenerOptions, EventHandler } from "./types/events";

export default class SubscribeManager extends Base {
    addToCart(handler: EventHandler, options?: ListenerOptions): void {
        this.addEventListener(events.ADD_TO_CART, handler, options);
    }

    abandonCart(handler: EventHandler, options?: ListenerOptions): void {
        this.addEventListener(events.ABANDON_CART, handler, options);
    }

    createAccount(handler: EventHandler, options?: ListenerOptions): void {
        this.addEventListener(events.CREATE_ACCOUNT, handler, options);
    }

    custom(handler: EventHandler, options?: ListenerOptions): void {
        this.addEventListener(events.CUSTOM, handler, options);
    }

    customUrl(handler: EventHandler, options?: ListenerOptions): void {
        this.addEventListener(events.CUSTOM_URL, handler, options);
    }

    editAccount(handler: EventHandler, options?: ListenerOptions): void {
        this.addEventListener(events.EDIT_ACCOUNT, handler, options);
    }

    dataLayerChange(handler: EventHandler, options?: ListenerOptions): void {
        this.addEventListener(events.DATA_LAYER_CHANGE, handler, options);
    }

    dataLayerEvent(handler: EventHandler, options?: ListenerOptions): void {
        this.addEventListener(events.DATA_LAYER_EVENT, handler, options);
    }

    initiateCheckout(handler: EventHandler, options?: ListenerOptions): void {
        this.addEventListener(events.INITIATE_CHECKOUT, handler, options);
    }

    pageActivitySummary(
        handler: EventHandler,
        options?: ListenerOptions,
    ): void {
        this.addEventListener(events.PAGE_ACTIVITY_SUMMARY, handler, options);
    }

    pageView(handler: EventHandler, options?: ListenerOptions): void {
        this.addEventListener(events.PAGE_VIEW, handler, options);
    }

    placeOrder(handler: EventHandler, options?: ListenerOptions): void {
        this.addEventListener(events.PLACE_ORDER, handler, options);
    }

    productPageView(handler: EventHandler, options?: ListenerOptions): void {
        this.addEventListener(events.PRODUCT_PAGE_VIEW, handler, options);
    }

    recsItemAddToCartClick(
        handler: EventHandler,
        options?: ListenerOptions,
    ): void {
        this.addEventListener(
            events.RECS_ITEM_ADD_TO_CART_CLICK,
            handler,
            options,
        );
    }

    recsItemClick(handler: EventHandler, options?: ListenerOptions): void {
        this.addEventListener(events.RECS_ITEM_CLICK, handler, options);
    }

    recsRequestSent(handler: EventHandler, options?: ListenerOptions): void {
        this.addEventListener(events.RECS_REQUEST_SENT, handler, options);
    }

    recsResponseReceived(
        handler: EventHandler,
        options?: ListenerOptions,
    ): void {
        this.addEventListener(events.RECS_RESPONSE_RECEIVED, handler, options);
    }

    recsUnitRender(handler: EventHandler, options?: ListenerOptions): void {
        this.addEventListener(events.RECS_UNIT_RENDER, handler, options);
    }

    recsUnitView(handler: EventHandler, options?: ListenerOptions): void {
        this.addEventListener(events.RECS_UNIT_VIEW, handler, options);
    }

    referrerUrl(handler: EventHandler, options?: ListenerOptions): void {
        this.addEventListener(events.REFERRER_URL, handler, options);
    }

    removeFromCart(handler: EventHandler, options?: ListenerOptions): void {
        this.addEventListener(events.REMOVE_FROM_CART, handler, options);
    }

    searchCategoryClick(handler: EventHandler): void {
        this.addEventListener(events.SEARCH_CATEGORY_CLICK, handler);
    }

    searchProductClick(handler: EventHandler): void {
        this.addEventListener(events.SEARCH_PRODUCT_CLICK, handler);
    }

    searchRequestSent(handler: EventHandler): void {
        this.addEventListener(events.SEARCH_REQUEST_SENT, handler);
    }

    searchResponseReceived(handler: EventHandler): void {
        this.addEventListener(events.SEARCH_RESPONSE_RECEIVED, handler);
    }

    searchResultsView(handler: EventHandler): void {
        this.addEventListener(events.SEARCH_RESULTS_VIEW, handler);
    }

    searchSuggestionClick(handler: EventHandler): void {
        this.addEventListener(events.SEARCH_SUGGESTION_CLICK, handler);
    }

    shoppingCartView(handler: EventHandler): void {
        this.addEventListener(events.SHOPPING_CART_VIEW, handler);
    }

    signIn(handler: EventHandler, options?: ListenerOptions): void {
        this.addEventListener(events.SIGN_IN, handler, options);
    }

    signOut(handler: EventHandler, options?: ListenerOptions): void {
        this.addEventListener(events.SIGN_OUT, handler, options);
    }

    updateCart(handler: EventHandler): void {
        this.addEventListener(events.UPDATE_CART, handler);
    }
}
