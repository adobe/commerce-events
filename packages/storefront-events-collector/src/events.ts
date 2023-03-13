import { Event, EventHandler } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { createEventForwardingCtx } from "./contexts";
import {
    addToCartHandler,
    addToCartHandlerAEP,
    addToRequisitionListHandlerAEP,
    createAccountHandlerAEP,
    createRequisitionListHandlerAEP,
    customHandlerAEP,
    editAccountHandlerAEP,
    initiateCheckoutHandler,
    initiateCheckoutHandlerAEP,
    openCartHandlerAEP,
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
    removeFromCartHandlerAEP,
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
    const ctx: EventForwardingContext = createEventForwardingCtx(event.eventInfo.eventForwardingContext);
    // default to true unless explicitly set to false
    return ctx.commerce === false ? false : true;
};

const isAep = (event: Event): boolean => {
    const ctx: EventForwardingContext = createEventForwardingCtx(event.eventInfo.eventForwardingContext);
    return ctx.aep ?? false;
};

const handleIf = (predicate: (e: Event) => boolean, handler: EventHandler): EventHandler => {
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
const handleSnowplowInitiateCheckout = handleIf(isCommerce, initiateCheckoutHandler);
const handleAepInitiateCheckout = handleIf(isAep, initiateCheckoutHandlerAEP);
const handleAepOpenCart = handleIf(isAep, openCartHandlerAEP);

// product
const handleSnowplowAddToCart = handleIf(isCommerce, addToCartHandler);
const handleAepAddToCart = handleIf(isAep, addToCartHandlerAEP);
const handleAepRemoveFromCart = handleIf(isAep, removeFromCartHandlerAEP);

// shopping cart view
const handleSnowplowShoppingCartView = handleIf(isCommerce, shoppingCartViewHandler);
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
const handleSnowplowSearchRequestSent = handleIf(isCommerce, searchRequestSentHandler);
const handleAepSearchRequestSent = handleIf(isAep, searchRequestSentHandlerAEP);
const handleSnowplowSearchResponseReceived = handleIf(isCommerce, searchResponseReceivedHandler);
const handleAepSearchResponseReceived = handleIf(isAep, searchResponseReceivedHandlerAEP);

// requisitionList
const handleAepAddToRequisitionList = handleIf(isAep, addToRequisitionListHandlerAEP);
const handleAepCreateRequisitionList = handleIf(isAep, createRequisitionListHandlerAEP);

const subscribeToEvents = (): void => {
    const mse = window.magentoStorefrontEvents;

    // Snowplow events
    try {
        mse.subscribe.addToCart(handleSnowplowAddToCart);
        mse.subscribe.initiateCheckout(handleSnowplowInitiateCheckout);
        mse.subscribe.pageView(handleSnowplowPageView);
        mse.subscribe.placeOrder(handleSnowplowPlaceOrder);
        mse.subscribe.productPageView(handleSnowplowProductView);
        mse.subscribe.recsItemAddToCartClick(recsItemAddToCartClickHandler);
        mse.subscribe.recsItemClick(recsItemClickHandler);
        mse.subscribe.recsRequestSent(recsRequestSentHandler);
        mse.subscribe.recsResponseReceived(recsResponseReceivedHandler);
        mse.subscribe.recsUnitRender(recsUnitRenderHandler);
        mse.subscribe.recsUnitView(recsUnitViewHandler);
        mse.subscribe.searchCategoryClick(searchCategoryClickHandler);
        mse.subscribe.searchProductClick(searchProductClickHandler);
        mse.subscribe.searchRequestSent(handleSnowplowSearchRequestSent);
        mse.subscribe.searchResponseReceived(handleSnowplowSearchResponseReceived);
        mse.subscribe.searchResultsView(searchResultsViewHandler);
        mse.subscribe.searchSuggestionClick(searchSuggestionClickHandler);
        mse.subscribe.shoppingCartView(handleSnowplowShoppingCartView);
    } catch (e) {
        console.error(`error subscribing to Commerce events: ${JSON.stringify(e)}`);
    }

    // AEP events
    try {
        mse.subscribe.addToCart(handleAepAddToCart);
        mse.subscribe.addToRequisitionList(handleAepAddToRequisitionList);
        mse.subscribe.custom(handleAepCustom);
        mse.subscribe.createAccount(handleAepCreateAccount);
        mse.subscribe.createRequisitionList(handleAepCreateRequisitionList);
        mse.subscribe.editAccount(handleAepEditAccount);
        mse.subscribe.initiateCheckout(handleAepInitiateCheckout);
        mse.subscribe.openCart(handleAepOpenCart);
        mse.subscribe.pageView(handleAepPageView);
        mse.subscribe.placeOrder(handleAepPlaceOrder);
        mse.subscribe.productPageView(handleAepProductView);
        mse.subscribe.removeFromCart(handleAepRemoveFromCart);
        mse.subscribe.searchRequestSent(handleAepSearchRequestSent);
        mse.subscribe.searchResponseReceived(handleAepSearchResponseReceived);
        mse.subscribe.shoppingCartView(handleAepShoppingCartView);
        mse.subscribe.signIn(handleAepSignIn);
        mse.subscribe.signOut(handleAepSignOut);
    } catch (e) {
        console.error(`error subscribing to Experience events: ${JSON.stringify(e)}`);
    }
};

const unsubscribeFromEvents = (): void => {
    const mse = window.magentoStorefrontEvents;

    // Snowplow events
    try {
        mse.unsubscribe.addToCart(handleSnowplowAddToCart);
        mse.unsubscribe.initiateCheckout(handleSnowplowInitiateCheckout);
        mse.unsubscribe.pageView(handleSnowplowPageView);
        mse.unsubscribe.placeOrder(handleSnowplowPlaceOrder);
        mse.unsubscribe.productPageView(handleSnowplowProductView);
        mse.unsubscribe.recsItemAddToCartClick(recsItemAddToCartClickHandler);
        mse.unsubscribe.recsItemClick(recsItemClickHandler);
        mse.unsubscribe.recsRequestSent(recsRequestSentHandler);
        mse.unsubscribe.recsResponseReceived(recsResponseReceivedHandler);
        mse.unsubscribe.recsUnitRender(recsUnitRenderHandler);
        mse.unsubscribe.recsUnitView(recsUnitViewHandler);
        mse.unsubscribe.searchCategoryClick(searchCategoryClickHandler);
        mse.unsubscribe.searchProductClick(searchProductClickHandler);
        mse.unsubscribe.searchRequestSent(handleSnowplowSearchRequestSent);
        mse.unsubscribe.searchResponseReceived(handleSnowplowSearchResponseReceived);
        mse.unsubscribe.searchResultsView(searchResultsViewHandler);
        mse.unsubscribe.searchSuggestionClick(searchSuggestionClickHandler);
        mse.unsubscribe.shoppingCartView(shoppingCartViewHandler);
        mse.unsubscribe.shoppingCartView(handleSnowplowShoppingCartView);
    } catch (e) {
        console.error(`error unsubscribing from Commerce events: ${JSON.stringify(e)}`);
    }

    // AEP events
    try {
        mse.unsubscribe.addToCart(handleAepAddToCart);
        mse.unsubscribe.addToRequisitionList(handleAepAddToRequisitionList);
        mse.unsubscribe.createAccount(handleAepCreateAccount);
        mse.unsubscribe.createRequisitionList(handleAepCreateRequisitionList);
        mse.unsubscribe.custom(handleAepCustom);
        mse.unsubscribe.editAccount(handleAepEditAccount);
        mse.unsubscribe.initiateCheckout(handleAepInitiateCheckout);
        mse.unsubscribe.openCart(handleAepOpenCart);
        mse.unsubscribe.pageView(handleAepPageView);
        mse.unsubscribe.placeOrder(handleAepPlaceOrder);
        mse.unsubscribe.productPageView(handleAepProductView);
        mse.unsubscribe.removeFromCart(handleAepRemoveFromCart);
        mse.unsubscribe.searchRequestSent(handleAepSearchRequestSent);
        mse.unsubscribe.searchResponseReceived(handleAepSearchResponseReceived);
        mse.unsubscribe.shoppingCartView(handleAepShoppingCartView);
        mse.unsubscribe.signIn(handleAepSignIn);
        mse.unsubscribe.signOut(handleAepSignOut);
    } catch (e) {
        console.error(`error unsubscribing from Experience events: ${JSON.stringify(e)}`);
    }
};

export { subscribeToEvents, unsubscribeFromEvents };
