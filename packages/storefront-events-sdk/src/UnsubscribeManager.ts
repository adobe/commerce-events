import { Base } from "./Base";
import events from "./events";
import { EventHandler } from "./types/events";

export default class UnsubscribeManager extends Base {
    addToCart(handler: EventHandler): void {
        this.removeEventListener(events.ADD_TO_CART, handler);
    }

    addToRequisitionList(handler: EventHandler): void {
        this.removeEventListener(events.ADD_TO_REQUISITION_LIST, handler);
    }

    createAccount(handler: EventHandler): void {
        this.removeEventListener(events.CREATE_ACCOUNT, handler);
    }

    createRequisitionList(handler: EventHandler): void {
        this.removeEventListener(events.CREATE_REQUISITION_LIST, handler);
    }

    custom(handler: EventHandler): void {
        this.removeEventListener(events.CUSTOM, handler);
    }

    customUrl(handler: EventHandler): void {
        this.removeEventListener(events.CUSTOM_URL, handler);
    }

    editAccount(handler: EventHandler): void {
        this.removeEventListener(events.EDIT_ACCOUNT, handler);
    }

    dataLayerChange(handler: EventHandler): void {
        this.removeEventListener(events.DATA_LAYER_CHANGE, handler);
    }

    dataLayerEvent(handler: EventHandler): void {
        this.removeEventListener(events.DATA_LAYER_EVENT, handler);
    }

    initiateCheckout(handler: EventHandler): void {
        this.removeEventListener(events.INITIATE_CHECKOUT, handler);
    }

    openCart(handler: EventHandler): void {
        this.removeEventListener(events.OPEN_CART, handler);
    }

    pageActivitySummary(handler: EventHandler): void {
        this.removeEventListener(events.PAGE_ACTIVITY_SUMMARY, handler);
    }

    pageView(handler: EventHandler): void {
        this.removeEventListener(events.PAGE_VIEW, handler);
    }

    placeOrder(handler: EventHandler): void {
        this.removeEventListener(events.PLACE_ORDER, handler);
    }

    productPageView(handler: EventHandler): void {
        this.removeEventListener(events.PRODUCT_PAGE_VIEW, handler);
    }

    recsItemAddToCartClick(handler: EventHandler): void {
        this.removeEventListener(events.RECS_ITEM_ADD_TO_CART_CLICK, handler);
    }

    recsItemClick(handler: EventHandler): void {
        this.removeEventListener(events.RECS_ITEM_CLICK, handler);
    }

    recsRequestSent(handler: EventHandler): void {
        this.removeEventListener(events.RECS_REQUEST_SENT, handler);
    }

    recsResponseReceived(handler: EventHandler): void {
        this.removeEventListener(events.RECS_RESPONSE_RECEIVED, handler);
    }

    recsUnitRender(handler: EventHandler): void {
        this.removeEventListener(events.RECS_UNIT_RENDER, handler);
    }

    recsUnitView(handler: EventHandler): void {
        this.removeEventListener(events.RECS_UNIT_VIEW, handler);
    }

    referrerUrl(handler: EventHandler): void {
        this.removeEventListener(events.REFERRER_URL, handler);
    }

    removeFromCart(handler: EventHandler): void {
        this.removeEventListener(events.REMOVE_FROM_CART, handler);
    }

    removeFromRequisitionList(handler: EventHandler): void {
        this.removeEventListener(events.REMOVE_FROM_REQUISITION_LIST, handler);
    }

    searchCategoryClick(handler: EventHandler): void {
        this.removeEventListener(events.SEARCH_CATEGORY_CLICK, handler);
    }

    searchProductClick(handler: EventHandler): void {
        this.removeEventListener(events.SEARCH_PRODUCT_CLICK, handler);
    }

    searchRequestSent(handler: EventHandler): void {
        this.removeEventListener(events.SEARCH_REQUEST_SENT, handler);
    }

    searchResponseReceived(handler: EventHandler): void {
        this.removeEventListener(events.SEARCH_RESPONSE_RECEIVED, handler);
    }

    searchResultsView(handler: EventHandler): void {
        this.removeEventListener(events.SEARCH_RESULTS_VIEW, handler);
    }

    categoryResultsView(handler: EventHandler): void {
        this.removeEventListener(events.CATEGORY_RESULTS_VIEW, handler);
    }

    searchSuggestionClick(handler: EventHandler): void {
        this.removeEventListener(events.SEARCH_SUGGESTION_CLICK, handler);
    }

    shoppingCartView(handler: EventHandler): void {
        this.removeEventListener(events.SHOPPING_CART_VIEW, handler);
    }

    signIn(handler: EventHandler): void {
        this.removeEventListener(events.SIGN_IN, handler);
    }

    signOut(handler: EventHandler): void {
        this.removeEventListener(events.SIGN_OUT, handler);
    }

    updateCart(handler: EventHandler): void {
        this.removeEventListener(events.UPDATE_CART, handler);
    }
}
