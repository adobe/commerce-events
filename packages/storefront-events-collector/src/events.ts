import * as handlers from "./handlers";

const subscribeToEvents = (sendToSnowplow: boolean, sendToAEP: boolean): void => {
    const mse = window.magentoStorefrontEvents;

    // Snowplow events
    if (sendToSnowplow) {
        try {
            mse.subscribe.addToCart(handlers.addToCartHandler);
            mse.subscribe.initiateCheckout(handlers.initiateCheckoutHandler);
            mse.subscribe.pageView(handlers.pageViewHandler);
            mse.subscribe.placeOrder(handlers.placeOrderHandler);
            mse.subscribe.productPageView(handlers.productViewHandler);
            mse.subscribe.recsItemAddToCartClick(handlers.recsItemAddToCartClickHandler);
            mse.subscribe.recsItemClick(handlers.recsItemClickHandler);
            mse.subscribe.recsRequestSent(handlers.recsRequestSentHandler);
            mse.subscribe.recsResponseReceived(handlers.recsResponseReceivedHandler);
            mse.subscribe.recsUnitRender(handlers.recsUnitRenderHandler);
            mse.subscribe.recsUnitView(handlers.recsUnitViewHandler);
            mse.subscribe.searchCategoryClick(handlers.searchCategoryClickHandler);
            mse.subscribe.searchProductClick(handlers.searchProductClickHandler);
            mse.subscribe.searchRequestSent(handlers.searchRequestSentHandler);
            mse.subscribe.searchResponseReceived(handlers.searchResponseReceivedHandler);
            mse.subscribe.searchResultsView(handlers.searchResultsViewHandler);
            mse.subscribe.categoryResultsView(handlers.categoryResultsViewHandler);
            mse.subscribe.searchSuggestionClick(handlers.searchSuggestionClickHandler);
            mse.subscribe.shoppingCartView(handlers.shoppingCartViewHandler);
        } catch (e) {
            console.error(`error subscribing to Commerce events: ${JSON.stringify(e)}`);
        }
    }

    // AEP events
    if (sendToAEP) {
        try {
            mse.subscribe.addToCart(handlers.addToCartHandlerAEP);
            mse.subscribe.addToRequisitionList(handlers.addToRequisitionListHandlerAEP);
            mse.subscribe.custom(handlers.customHandlerAEP);
            mse.subscribe.createAccount(handlers.createAccountHandlerAEP);
            mse.subscribe.createRequisitionList(handlers.createRequisitionListHandlerAEP);
            mse.subscribe.editAccount(handlers.editAccountHandlerAEP);
            mse.subscribe.initiateCheckout(handlers.initiateCheckoutHandlerAEP);
            mse.subscribe.openCart(handlers.openCartHandlerAEP);
            mse.subscribe.pageView(handlers.pageViewHandlerAEP);
            mse.subscribe.placeOrder(handlers.placeOrderHandlerAEP);
            mse.subscribe.productPageView(handlers.productViewHandlerAEP);
            mse.subscribe.removeFromCart(handlers.removeFromCartHandlerAEP);
            mse.subscribe.removeFromRequisitionList(handlers.removeFromRequisitionListHandlerAEP);
            mse.subscribe.searchRequestSent(handlers.searchRequestSentHandlerAEP);
            mse.subscribe.searchResponseReceived(handlers.searchResponseReceivedHandlerAEP);
            mse.subscribe.shoppingCartView(handlers.shoppingCartViewHandlerAEP);
            mse.subscribe.signIn(handlers.signInHandlerAEP);
            mse.subscribe.signOut(handlers.signOutHandlerAEP);
        } catch (e) {
            console.error(`error subscribing to Experience events: ${JSON.stringify(e)}`);
        }
    }
};

const unsubscribeFromEvents = (sendToSnowplow: boolean, sendToAEP: boolean): void => {
    const mse = window.magentoStorefrontEvents;

    // Snowplow events
    if (sendToSnowplow) {
        try {
            mse.unsubscribe.addToCart(handlers.addToCartHandler);
            mse.unsubscribe.initiateCheckout(handlers.initiateCheckoutHandler);
            mse.unsubscribe.pageView(handlers.pageViewHandler);
            mse.unsubscribe.placeOrder(handlers.placeOrderHandler);
            mse.unsubscribe.productPageView(handlers.productViewHandler);
            mse.unsubscribe.recsItemAddToCartClick(handlers.recsItemAddToCartClickHandler);
            mse.unsubscribe.recsItemClick(handlers.recsItemClickHandler);
            mse.unsubscribe.recsRequestSent(handlers.recsRequestSentHandler);
            mse.unsubscribe.recsResponseReceived(handlers.recsResponseReceivedHandler);
            mse.unsubscribe.recsUnitRender(handlers.recsUnitRenderHandler);
            mse.unsubscribe.recsUnitView(handlers.recsUnitViewHandler);
            mse.unsubscribe.searchCategoryClick(handlers.searchCategoryClickHandler);
            mse.unsubscribe.searchProductClick(handlers.searchProductClickHandler);
            mse.unsubscribe.searchRequestSent(handlers.searchRequestSentHandler);
            mse.unsubscribe.searchResponseReceived(handlers.searchResponseReceivedHandler);
            mse.unsubscribe.searchResultsView(handlers.searchResultsViewHandler);
            mse.unsubscribe.categoryResultsView(handlers.categoryResultsViewHandler);
            mse.unsubscribe.searchSuggestionClick(handlers.searchSuggestionClickHandler);
            mse.unsubscribe.shoppingCartView(handlers.shoppingCartViewHandler);
            mse.unsubscribe.shoppingCartView(handlers.shoppingCartViewHandler);
        } catch (e) {
            console.error(`error unsubscribing from Commerce events: ${JSON.stringify(e)}`);
        }
    }

    // AEP events
    if (sendToAEP) {
        try {
            mse.unsubscribe.addToCart(handlers.addToCartHandlerAEP);
            mse.unsubscribe.addToRequisitionList(handlers.addToRequisitionListHandlerAEP);
            mse.unsubscribe.createAccount(handlers.createAccountHandlerAEP);
            mse.unsubscribe.createRequisitionList(handlers.createRequisitionListHandlerAEP);
            mse.unsubscribe.custom(handlers.customHandlerAEP);
            mse.unsubscribe.editAccount(handlers.editAccountHandlerAEP);
            mse.unsubscribe.initiateCheckout(handlers.initiateCheckoutHandlerAEP);
            mse.unsubscribe.openCart(handlers.openCartHandlerAEP);
            mse.unsubscribe.pageView(handlers.pageViewHandlerAEP);
            mse.unsubscribe.placeOrder(handlers.placeOrderHandlerAEP);
            mse.unsubscribe.productPageView(handlers.productViewHandlerAEP);
            mse.unsubscribe.removeFromCart(handlers.removeFromCartHandlerAEP);
            mse.unsubscribe.removeFromRequisitionList(handlers.removeFromRequisitionListHandlerAEP);
            mse.unsubscribe.searchRequestSent(handlers.searchRequestSentHandlerAEP);
            mse.unsubscribe.searchResponseReceived(handlers.searchResponseReceivedHandlerAEP);
            mse.unsubscribe.shoppingCartView(handlers.shoppingCartViewHandlerAEP);
            mse.unsubscribe.signIn(handlers.signInHandlerAEP);
            mse.unsubscribe.signOut(handlers.signOutHandlerAEP);
        } catch (e) {
            console.error(`error unsubscribing from Experience events: ${JSON.stringify(e)}`);
        }
    }
};

export { subscribeToEvents, unsubscribeFromEvents };
