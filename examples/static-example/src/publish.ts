// ensure this is treated as a module
export {};

const mse = window.commerceEventsSdk;

setTimeout(() => {
    mse.publish.addToCart();
    mse.publish.customUrl();
    mse.publish.initiateCheckout();
    mse.publish.pageActivitySummary();
    mse.publish.pageView();
    mse.publish.placeOrder();
    mse.publish.productPageView();
    mse.publish.recsItemAddToCartClick("abc123", 123456);
    mse.publish.recsItemClick("abc123", 123456);
    mse.publish.recsRequestSent();
    mse.publish.recsResponseReceived();
    mse.publish.recsUnitRender("abc123");
    mse.publish.recsUnitView("abc123");
    mse.publish.referrerUrl();
    mse.publish.removeFromCart();
    mse.publish.searchCategoryClick("tops", "sku");
    mse.publish.searchProductClick("abc123", "sku");
    mse.publish.searchRequestSent("searchUnitId");
    mse.publish.searchResponseReceived("searchUnitId");
    mse.publish.searchResultsView("searchUnitId");
    mse.publish.searchSuggestionClick("pants", "suggestion");
    mse.publish.shoppingCartView();
    mse.publish.signIn();
    mse.publish.signOut();
    mse.publish.updateCart();
}, 1000);
