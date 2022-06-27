import {
    Event,
    EventHandler,
} from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { createEventForwardingCtx } from "./contexts";
import {
    abandonCartHandler,
    abandonCartHandlerAEP,
    addToCartHandler,
    addToCartHandlerAEP,
    createAccountHandlerAEP,
    customHandlerAEP,
    editAccountHandlerAEP,
    initiateCheckoutHandler,
    initiateCheckoutHandlerAEP,
    pageViewHandler,
    pageViewHandlerAEP,
    placeOrderHandler,
    placeOrderHandlerAEP,
    productViewHandler,
    productViewHandlerAEP,
    recsItemAddToCartClickHandler,
    recsItemClickHandler,
    recsRequestSentHandler,
    recsResponseReceivedHandler,
    recsUnitRenderHandler,
    recsUnitViewHandler,
    searchCategoryClickHandler,
    searchProductClickHandler,
    searchRequestSentHandler,
    searchRequestSentHandlerAEP,
    searchResponseReceivedHandler,
    searchResponseReceivedHandlerAEP,
    searchResultsViewHandler,
    searchSuggestionClickHandler,
    shoppingCartViewHandler,
    shoppingCartViewHandlerAEP,
    signInHandlerAEP,
    signOutHandlerAEP,
} from "./handlers";
import { EventForwardingContext } from "./types/contexts";

const isCommerce = (event: Event): boolean => {
    const ctx: EventForwardingContext = createEventForwardingCtx(
        event.eventInfo.eventForwardingContext,
    );
    // default to true unless explicitly set to false
    return ctx.commerce === false ? false : true;
};

const isAep = (event: Event): boolean => {
    const ctx: EventForwardingContext = createEventForwardingCtx(
        event.eventInfo.eventForwardingContext,
    );
    return ctx.aep ?? false;
};

const handleIf = (
    predicate: (e: Event) => boolean,
    handler: EventHandler,
): EventHandler => {
    return (event: Event) => {
        if (predicate(event)) {
            handler(event);
        }
    };
};

// custom event - AEP only
const handleAepCustom = handleIf(isAep, customHandlerAEP);

// page
const handleSnowplowPageView = handleIf(isCommerce, pageViewHandler);
const handleAepPageView = handleIf(isAep, pageViewHandlerAEP);

// cart
const handleSnowplowInitiateCheckout = handleIf(
    isCommerce,
    initiateCheckoutHandler,
);
const handleAepInitiateCheckout = handleIf(isAep, initiateCheckoutHandlerAEP);

const handleSnowplowAbandonCart = handleIf(isCommerce, abandonCartHandler);
const handleAepAbandonCart = handleIf(isAep, abandonCartHandlerAEP);

// product
const handleSnowplowAddToCart = handleIf(isCommerce, addToCartHandler);
const handleAepAddToCart = handleIf(isAep, addToCartHandlerAEP);

// shopping cart view
const handleSnowplowShoppingCartView = handleIf(
    isCommerce,
    shoppingCartViewHandler,
);
const handleAepShoppingCartView = handleIf(isAep, shoppingCartViewHandlerAEP);

const handleSnowplowProductView = handleIf(isCommerce, productViewHandler);
const handleAepProductView = handleIf(isAep, productViewHandlerAEP);

// order
const handleSnowplowPlaceOrder = handleIf(isCommerce, placeOrderHandler);
const handleAepPlaceOrder = handleIf(isAep, placeOrderHandlerAEP);

// account
const handleAepSignIn = handleIf(isAep, signInHandlerAEP);
const handleAepSignOut = handleIf(isAep, signOutHandlerAEP);
const handleAepCreateAccount = handleIf(isAep, createAccountHandlerAEP);
const handleAepEditAccount = handleIf(isAep, editAccountHandlerAEP);

// search
const handleSnowplowSearchRequestSent = handleIf(
    isCommerce,
    searchRequestSentHandler,
);
const handleAepSearchRequestSent = handleIf(isAep, searchRequestSentHandlerAEP);
const handleSnowplowSearchResponseReceived = handleIf(
    isCommerce,
    searchResponseReceivedHandler,
);
const handleAepSearchResponseReceived = handleIf(
    isAep,
    searchResponseReceivedHandlerAEP,
);

const subscribeToEvents = (): void => {
    const mse = window.magentoStorefrontEvents;

    mse.subscribe.abandonCart(handleSnowplowAbandonCart);
    mse.subscribe.abandonCart(handleAepAbandonCart);
    mse.subscribe.addToCart(handleSnowplowAddToCart);
    mse.subscribe.addToCart(handleAepAddToCart);
    mse.subscribe.custom(handleAepCustom);
    mse.subscribe.createAccount(handleAepCreateAccount);
    mse.subscribe.editAccount(handleAepEditAccount);
    mse.subscribe.initiateCheckout(handleSnowplowInitiateCheckout);
    mse.subscribe.initiateCheckout(handleAepInitiateCheckout);
    mse.subscribe.pageView(handleSnowplowPageView);
    mse.subscribe.pageView(handleAepPageView);
    mse.subscribe.placeOrder(handleSnowplowPlaceOrder);
    mse.subscribe.placeOrder(handleAepPlaceOrder);
    mse.subscribe.productPageView(handleSnowplowProductView);
    mse.subscribe.productPageView(handleAepProductView);
    mse.subscribe.recsItemAddToCartClick(recsItemAddToCartClickHandler);
    mse.subscribe.recsItemClick(recsItemClickHandler);
    mse.subscribe.recsRequestSent(recsRequestSentHandler);
    mse.subscribe.recsResponseReceived(recsResponseReceivedHandler);
    mse.subscribe.recsUnitRender(recsUnitRenderHandler);
    mse.subscribe.recsUnitView(recsUnitViewHandler);
    mse.subscribe.searchCategoryClick(searchCategoryClickHandler);
    mse.subscribe.searchProductClick(searchProductClickHandler);
    mse.subscribe.searchRequestSent(handleSnowplowSearchRequestSent);
    mse.subscribe.searchRequestSent(handleAepSearchRequestSent);
    mse.subscribe.searchResponseReceived(handleSnowplowSearchResponseReceived);
    mse.subscribe.searchResponseReceived(handleAepSearchResponseReceived);
    mse.subscribe.searchResultsView(searchResultsViewHandler);
    mse.subscribe.searchSuggestionClick(searchSuggestionClickHandler);
    mse.subscribe.shoppingCartView(handleSnowplowShoppingCartView);
    mse.subscribe.shoppingCartView(handleAepShoppingCartView);
    mse.subscribe.signIn(handleAepSignIn);
    mse.subscribe.signOut(handleAepSignOut);
};

const unsubscribeFromEvents = (): void => {
    const mse = window.magentoStorefrontEvents;

    mse.unsubscribe.abandonCart(handleSnowplowAbandonCart);
    mse.unsubscribe.abandonCart(handleAepAbandonCart);
    mse.unsubscribe.addToCart(handleSnowplowAddToCart);
    mse.unsubscribe.addToCart(handleAepAddToCart);
    mse.unsubscribe.createAccount(handleAepCreateAccount);
    mse.unsubscribe.custom(handleAepCustom);
    mse.unsubscribe.editAccount(handleAepEditAccount);
    mse.unsubscribe.initiateCheckout(handleSnowplowInitiateCheckout);
    mse.unsubscribe.initiateCheckout(handleAepInitiateCheckout);
    mse.unsubscribe.pageView(handleSnowplowPageView);
    mse.unsubscribe.pageView(handleAepPageView);
    mse.unsubscribe.placeOrder(handleSnowplowPlaceOrder);
    mse.unsubscribe.placeOrder(handleAepPlaceOrder);
    mse.unsubscribe.productPageView(handleSnowplowProductView);
    mse.unsubscribe.productPageView(handleAepProductView);
    mse.unsubscribe.recsItemAddToCartClick(recsItemAddToCartClickHandler);
    mse.unsubscribe.recsItemClick(recsItemClickHandler);
    mse.unsubscribe.recsRequestSent(recsRequestSentHandler);
    mse.unsubscribe.recsResponseReceived(recsResponseReceivedHandler);
    mse.unsubscribe.recsUnitRender(recsUnitRenderHandler);
    mse.unsubscribe.recsUnitView(recsUnitViewHandler);
    mse.unsubscribe.searchCategoryClick(searchCategoryClickHandler);
    mse.unsubscribe.searchProductClick(searchProductClickHandler);
    mse.unsubscribe.searchRequestSent(handleSnowplowSearchRequestSent);
    mse.unsubscribe.searchRequestSent(handleAepSearchRequestSent);
    mse.unsubscribe.searchResponseReceived(
        handleSnowplowSearchResponseReceived,
    );
    mse.unsubscribe.searchResponseReceived(handleAepSearchResponseReceived);
    mse.unsubscribe.searchResultsView(searchResultsViewHandler);
    mse.unsubscribe.searchSuggestionClick(searchSuggestionClickHandler);
    mse.unsubscribe.shoppingCartView(shoppingCartViewHandler);
    mse.unsubscribe.shoppingCartView(handleSnowplowShoppingCartView);
    mse.unsubscribe.shoppingCartView(handleAepShoppingCartView);
    mse.unsubscribe.signIn(handleAepSignIn);
    mse.unsubscribe.signOut(handleAepSignOut);
};

export { subscribeToEvents, unsubscribeFromEvents };
