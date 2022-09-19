// ensure this is treated as a module

import { sdk } from "./get-sdk";

sdk.subscribe.addToCart((args: any) => console.log(args));
sdk.subscribe.customUrl((args: any) => console.log(args));
sdk.subscribe.initiateCheckout((args: any) => console.log(args));
sdk.subscribe.pageActivitySummary((args: any) => console.log(args));
sdk.subscribe.pageView((args: any) => console.log(args));
sdk.subscribe.placeOrder((args: any) => console.log(args));
sdk.subscribe.productPageView((args: any) => console.log(args));
sdk.subscribe.recsItemAddToCartClick((args: any) => console.log(args));
sdk.subscribe.recsItemClick((args: any) => console.log(args));
sdk.subscribe.recsRequestSent((args: any) => console.log(args));
sdk.subscribe.recsResponseReceived((args: any) => console.log(args));
sdk.subscribe.recsUnitRender((args: any) => console.log(args));
sdk.subscribe.recsUnitView((args: any) => console.log(args));
sdk.subscribe.referrerUrl((args: any) => console.log(args));
sdk.subscribe.removeFromCart((args: any) => console.log(args));
sdk.subscribe.searchCategoryClick((args: any) => console.log(args));
sdk.subscribe.searchProductClick((args: any) => console.log(args));
sdk.subscribe.searchRequestSent((args: any) => console.log(args));
sdk.subscribe.searchResponseReceived((args: any) => console.log(args));
sdk.subscribe.searchResultsView((args: any) => console.log(args));
sdk.subscribe.searchSuggestionClick((args: any) => console.log(args));
sdk.subscribe.shoppingCartView((args: any) => console.log(args));
sdk.subscribe.signIn((args: any) => console.log(args));
sdk.subscribe.signOut((args: any) => console.log(args));
sdk.subscribe.updateCart((args: any) => console.log(args));
