// ensure this is treated as a module

import { sdk } from "./get-sdk";

setTimeout(() => {
    sdk.publish.addToCart();
    sdk.publish.customUrl();
    sdk.publish.initiateCheckout();
    sdk.publish.pageActivitySummary();
    sdk.publish.pageView();
    sdk.publish.placeOrder();
    sdk.publish.productPageView();
    sdk.publish.recsItemAddToCartClick("abc123", 123456);
    sdk.publish.recsItemClick("abc123", 123456);
    sdk.publish.recsRequestSent();
    sdk.publish.recsResponseReceived();
    sdk.publish.recsUnitRender("abc123");
    sdk.publish.recsUnitView("abc123");
    sdk.publish.referrerUrl();
    sdk.publish.removeFromCart();
    sdk.publish.searchCategoryClick("tops", "sku");
    sdk.publish.searchProductClick("abc123", "sku");
    sdk.publish.searchRequestSent("searchUnitId");
    sdk.publish.searchResponseReceived("searchUnitId");
    sdk.publish.searchResultsView("searchUnitId");
    sdk.publish.searchSuggestionClick("pants", "suggestion");
    sdk.publish.shoppingCartView();
    sdk.publish.signIn();
    sdk.publish.signOut();
    sdk.publish.updateCart();
}, 1000);
