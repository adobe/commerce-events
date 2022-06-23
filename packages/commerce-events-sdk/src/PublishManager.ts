import { Base } from "./Base";
import events from "./events";
import { CustomContext } from "./types/contexts";
import {
    RecommendationUnit,
    RecommendedProduct,
    SearchResultUnit,
    SearchResultCategory,
    SearchResultProduct,
    SearchResultSuggestion,
} from "./types/schemas";

export default class PublishManager extends Base {
    addToCart(context?: CustomContext): void {
        this.pushEvent(events.ADD_TO_CART, { customContext: context });
    }

    abandonCart(context?: CustomContext): void {
        this.pushEvent(events.ABANDON_CART, { customContext: context });
    }

    createAccount(context?: CustomContext): void {
        this.pushEvent(events.CREATE_ACCOUNT, { customContext: context });
    }

    custom(context?: CustomContext): void {
        this.pushEvent(events.CUSTOM, { customContext: context });
    }

    customUrl(context?: CustomContext): void {
        this.pushEvent(events.CUSTOM_URL, { customContext: context });
    }

    editAccount(context?: CustomContext): void {
        this.pushEvent(events.EDIT_ACCOUNT, { customContext: context });
    }

    initiateCheckout(context?: CustomContext): void {
        this.pushEvent(events.INITIATE_CHECKOUT, { customContext: context });
    }

    pageActivitySummary(context?: CustomContext): void {
        this.pushEvent(events.PAGE_ACTIVITY_SUMMARY, {
            customContext: context,
        });
    }

    pageView(context?: CustomContext): void {
        this.pushEvent(events.PAGE_VIEW, { customContext: context });
    }

    placeOrder(context?: CustomContext): void {
        this.pushEvent(events.PLACE_ORDER, { customContext: context });
    }

    productPageView(context?: CustomContext): void {
        this.pushEvent(events.PRODUCT_PAGE_VIEW, { customContext: context });
    }

    recsItemAddToCartClick(
        unitId: RecommendationUnit["unitId"],
        productId: RecommendedProduct["productId"],
        context?: CustomContext,
    ): void {
        this.pushEvent(events.RECS_ITEM_ADD_TO_CART_CLICK, {
            unitId,
            productId,
            customContext: context,
        });
    }

    recsItemClick(
        unitId: RecommendationUnit["unitId"],
        productId: RecommendedProduct["productId"],
        context?: CustomContext,
    ): void {
        this.pushEvent(events.RECS_ITEM_CLICK, {
            unitId,
            productId,
            customContext: context,
        });
    }

    recsRequestSent(context?: CustomContext): void {
        this.pushEvent(events.RECS_REQUEST_SENT, { customContext: context });
    }

    recsResponseReceived(context?: CustomContext): void {
        this.pushEvent(events.RECS_RESPONSE_RECEIVED, {
            customContext: context,
        });
    }

    recsUnitRender(
        unitId: RecommendationUnit["unitId"],
        context?: CustomContext,
    ): void {
        this.pushEvent(events.RECS_UNIT_RENDER, {
            unitId,
            customContext: context,
        });
    }

    recsUnitView(
        unitId: RecommendationUnit["unitId"],
        context?: CustomContext,
    ): void {
        this.pushEvent(events.RECS_UNIT_VIEW, {
            unitId,
            customContext: context,
        });
    }

    referrerUrl(context?: CustomContext): void {
        this.pushEvent(events.REFERRER_URL, { customContext: context });
    }

    removeFromCart(context?: CustomContext): void {
        this.pushEvent(events.REMOVE_FROM_CART, { customContext: context });
    }

    searchCategoryClick(
        searchUnitId: SearchResultUnit["searchUnitId"],
        name: SearchResultCategory["name"],
        context?: CustomContext,
    ): void {
        this.pushEvent(events.SEARCH_CATEGORY_CLICK, {
            searchUnitId,
            name,
            customContext: context,
        });
    }

    searchProductClick(
        searchUnitId: SearchResultUnit["searchUnitId"],
        sku: SearchResultProduct["sku"],
        context?: CustomContext,
    ): void {
        this.pushEvent(events.SEARCH_PRODUCT_CLICK, {
            searchUnitId,
            sku,
            customContext: context,
        });
    }

    searchRequestSent(
        searchUnitId: SearchResultUnit["searchUnitId"],
        context?: CustomContext,
    ): void {
        this.pushEvent(events.SEARCH_REQUEST_SENT, {
            searchUnitId,
            customContext: context,
        });
    }

    searchResponseReceived(
        searchUnitId: SearchResultUnit["searchUnitId"],
        context?: CustomContext,
    ): void {
        this.pushEvent(events.SEARCH_RESPONSE_RECEIVED, {
            searchUnitId,
            customContext: context,
        });
    }

    searchResultsView(
        searchUnitId: SearchResultUnit["searchUnitId"],
        context?: CustomContext,
    ): void {
        this.pushEvent(events.SEARCH_RESULTS_VIEW, {
            searchUnitId,
            customContext: context,
        });
    }

    searchSuggestionClick(
        searchUnitId: SearchResultUnit["searchUnitId"],
        suggestion: SearchResultSuggestion["suggestion"],
        context?: CustomContext,
    ): void {
        this.pushEvent(events.SEARCH_SUGGESTION_CLICK, {
            searchUnitId,
            suggestion,
            customContext: context,
        });
    }

    shoppingCartView(context?: CustomContext): void {
        this.pushEvent(events.SHOPPING_CART_VIEW, { customContext: context });
    }

    signIn(context?: CustomContext): void {
        this.pushEvent(events.SIGN_IN, { customContext: context });
    }

    signOut(context?: CustomContext): void {
        this.pushEvent(events.SIGN_OUT, { customContext: context });
    }

    updateCart(context?: CustomContext): void {
        this.pushEvent(events.UPDATE_CART, { customContext: context });
    }
}
