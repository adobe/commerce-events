// ensure this is treated as a module
export {};
const sdk = window.commerceEventsSdk;

sdk.subscribe.addToCart((args) => console.log(args));
sdk.subscribe.customUrl((args) => console.log(args));
sdk.subscribe.initiateCheckout((args) => console.log(args));
sdk.subscribe.pageActivitySummary((args) => console.log(args));
sdk.subscribe.pageView((args) => console.log(args));
sdk.subscribe.placeOrder((args) => console.log(args));
sdk.subscribe.productPageView((args) => console.log(args));
sdk.subscribe.recsItemAddToCartClick((args) => console.log(args));
sdk.subscribe.recsItemClick((args) => console.log(args));
sdk.subscribe.recsRequestSent((args) => console.log(args));
sdk.subscribe.recsResponseReceived((args) => console.log(args));
sdk.subscribe.recsUnitRender((args) => console.log(args));
sdk.subscribe.recsUnitView((args) => console.log(args));
sdk.subscribe.referrerUrl((args) => console.log(args));
sdk.subscribe.removeFromCart((args) => console.log(args));
sdk.subscribe.searchCategoryClick((args) => console.log(args));
sdk.subscribe.searchProductClick((args) => console.log(args));
sdk.subscribe.searchRequestSent((args) => console.log(args));
sdk.subscribe.searchResponseReceived((args) => console.log(args));
sdk.subscribe.searchResultsView((args) => console.log(args));
sdk.subscribe.searchSuggestionClick((args) => console.log(args));
sdk.subscribe.shoppingCartView((args) => console.log(args));
sdk.subscribe.signIn((args) => console.log(args));
sdk.subscribe.signOut((args) => console.log(args));
sdk.subscribe.updateCart((args) => console.log(args));
