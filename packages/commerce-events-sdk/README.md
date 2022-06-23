# Magento Storefront Events SDK

[![version][version-badge]][npm]
[![downloads][downloads-badge]][npm]
[![size][size-badge]][bundlephobia]
[![build][build-badge]][actions]
[![typescript][typescript-badge]][typescript]
[![contributing][contributing-badge]][contributing]

## Overview

This package serves as the foundation for eventing on an [Adobe Commerce][magento] storefront. It provides access to a common data layer, and an event publishing and subscription service.

You can handle the events in a custom implementation, or use the [Magento Storefront Event Collector][collector] package that listens for events and sends them to Adobe Commerce edges for processing.

**Note:** When an event is published through the SDK, all subscribers to that event get notified. Defining a custom listener shouldn't preclude you from also running the Magento Storefront Event Collector.

Our context schemas are designed to simplify forwarding to two edges:

-   Adobe Commerce Data Services (maintained by Adobe Engineering and used to power merchant performance dashboards)
-   [Adobe Experience Platform](https://business.adobe.com/products/experience-platform/adobe-experience-platform.html) (requires a subscription and additional merchant [setup](https://experienceleague.adobe.com/docs/experience-platform/edge/fundamentals/datastreams.html?lang=en); data can be used by merchants inside the Adobe Experience Platform for detailed analytics, targeted merchandising, real time customer data profiles, and more)

## Installation

This SDK can be used as a hosted script, or bundled in a JavaScript application. The script version is hosted on [unpkg][unpkg], and the bundled version is hosted on [npm][npm].

To load the SDK as a script, use the following snippet.

```
<script src="https://unpkg.com/@adobe/magento-storefront-events-sdk/dist/index.js"></script>
```

To install the script as a dependency, run this command.

```shell
npm install @adobe/magento-storefront-events-sdk
```

## Quick start

Once imported, you have access to the four main functions of the Events SDK.

-   [Context][context] - set context data
-   [Publish][publish] - publish events
-   [Subscribe][subscribe] - subscribe to events
-   [Unsubscribe][unsubscribe] - unsubscribe from events

Below is a code example of how to get started.

> _IMPORTANT: Relevant context data must be populated before publishing events that require it._

```javascript
import mse from "@adobe/magento-storefront-events-sdk";
// handler - can go in a different module
function addToCartHandler(event) {
    // do something with the event
}
// subscribe to events
mse.subscribe.addToCart(addToCartHandler);

// set context data
const shoppingCartContext = {
    id: "1",
    items: [
        {
            id: "shoppingCart",
            product: {
                productId: 111111,
                sku: "ts001",
                pricing: {
                    regularPrice: 20.0,
                    currencyCode: "USD",
                },
            },
            quantity: 1,
        },
    ],
};
mse.context.setShoppingCart(shoppingCartContext);

// publish events
mse.publish.addToCart();

// unsubscribe from events
mse.unsubscribe.addToCart(addToCartHandler);
```

## Schemas and supported events

The below methods allow you to set specific contexts based on the SDK schema and to publish a set of events supported by this API.

Addiontally, you can publish custom events or add a custom context to a supported event.

## API reference

The SDK is broken down into four major parts: [Context][context], [Publish][publish], [Subscribe][subscribe], [Unsubscribe][unsubscribe].

### Context

These setters can be used to specify context in the `mse`:

#### `setAEP`

```javascript
mse.context.setAEP(aepCtx);
```

Sets the `AEP` context which can be used by event handlers to forward events to the Adobe Experience Platform. A client must have an AEP subscription and provide a valid [IMS Org Id and Datastream Id](https://experienceleague.adobe.com/docs/experience-platform/edge/fundamentals/datastreams.html?lang=en).

-   [context schema definition](https://github.com/adobe/magento-storefront-events-sdk/blob/main/src/types/schemas/aep.ts)
-   [context example](https://github.com/adobe/magento-storefront-events-sdk/blob/main/tests/mocks.ts#L25)

#### `setCategory`

```javascript
mse.context.setCategory(categoryCtx);
```

Sets the `Category` context.

-   [context schema definition](https://github.com/adobe/magento-storefront-events-sdk/blob/main/src/types/schemas/category.ts)
-   [context example](https://github.com/adobe/magento-storefront-events-sdk/blob/main/tests/mocks.ts#L31)

#### `setAccount`

```javascript
mse.context.setAccount(accountCtx);
```

Sets the `Account` context.

#### `setCustomUrl`

```javascript
mse.context.setCustomUrl(customUrlCtx);
```

Sets the `CustomUrl` context.

-   [context schema definition](https://github.com/adobe/magento-storefront-events-sdk/blob/main/src/types/schemas/customUrl.ts)
-   [context example](https://github.com/adobe/magento-storefront-events-sdk/blob/main/tests/mocks.ts#L40)

#### `setEventForwarding`

```javascript
mse.context.setEventForwarding(eventForwardingCtx);
```

Sets the `EventForwarding` context. Tells a handler if it should forward events to Adobe Commerce DataSolutions (`commerce: true`), Adobe Experience Platform (`aep: true`), or both.

-   [context schema definition](https://github.com/adobe/magento-storefront-events-sdk/blob/main/src/types/schemas/eventForwarding.ts)
-   [context example](https://github.com/adobe/magento-storefront-events-sdk/blob/main/tests/mocks.ts#L47)

#### `setMagentoExtension` @deprecated

```javascript
mse.context.setMagentoExtension(magentoExtensionCtx);
```

Sets the `MagentoExtension` context. Includes Data Services extension version.

This field is deprecated. `setDataServicesExtension` should be used instead.

-   [context schema definition](https://github.com/adobe/magento-storefront-events-sdk/blob/main/src/types/schemas/magentoExtension.ts)
-   [context example](https://github.com/adobe/magento-storefront-events-sdk/blob/main/tests/mocks.ts#L55)

#### `setDataServicesExtension`

```javascript
mse.context.setDataServicesExtension(dataServicesExtensionCtx);
```

Sets the `DataServicesExtension` context. Includes Data Services extension version.

-   [context schema definition](https://github.com/adobe/magento-storefront-events-sdk/blob/main/src/types/schemas/dataServicesExtension.ts)

#### `setOrder`

```javascript
mse.context.setOrder(orderCtx);
```

Sets the `Order` context.

-   [context schema definition](https://github.com/adobe/magento-storefront-events-sdk/blob/main/src/types/schemas/order.ts)
-   [context example](https://github.com/adobe/magento-storefront-events-sdk/blob/main/tests/mocks.ts#L62)

#### `setPage`

```javascript
mse.context.setPage(pageCtx);
```

Sets the `Page` context.

-   [context schema definition](https://github.com/adobe/magento-storefront-events-sdk/blob/main/src/types/schemas/page.ts)
-   [context example](<(https://github.com/adobe/magento-storefront-events-sdk/blob/main/tests/mocks.ts#L76)>)

#### `setProduct`

```javascript
mse.context.setProduct(productCtx);
```

Sets the `Product` context.

-   [context schema definition](https://github.com/adobe/magento-storefront-events-sdk/blob/main/src/types/schemas/product.ts)
-   [context example](https://github.com/adobe/magento-storefront-events-sdk/blob/main/tests/mocks.ts#L88)

#### `setRecommendations`

```javascript
mse.context.setRecommendations(recommendationsCtx);
```

Sets the `Recommendations` context.

-   [context schema definition](https://github.com/adobe/magento-storefront-events-sdk/blob/main/src/types/schemas/recommendations.ts)
-   [context example](https://github.com/adobe/magento-storefront-events-sdk/blob/main/tests/mocks.ts#L105)

#### `setRecommendationsExtension`

```javascript
mse.context.setRecommendationsExtension(recommendationsExtensionCtx);
```

Sets the `RecommendationsExtension` context. Includes Recommendations extension version.

-   [context schema definition](https://github.com/adobe/magento-storefront-events-sdk/blob/main/src/types/schemas/recommendationsExtension.ts)

#### `setReferrerUrl`

```javascript
mse.context.setReferrerUrl(referrerUrlCtx);
```

Sets the `ReferrerUrl` context.

-   [context schema definition](https://github.com/adobe/magento-storefront-events-sdk/blob/main/src/types/schemas/referrerUrl.ts)
-   [context example](https://github.com/adobe/magento-storefront-events-sdk/blob/main/tests/mocks.ts#L230)

#### `setSearchExtension`

```javascript
mse.context.setSearchExtension(searchExtensionCtx);
```

Sets the `SearchExtension` context. Includes Live Search extension version.

-   [context schema definition](https://github.com/adobe/magento-storefront-events-sdk/blob/main/src/types/schemas/searchExtension.ts)

#### `setSearchInput`

```javascript
mse.context.setSearchInput(searchInputCtx);
```

Sets the `SearchInput` context.

-   [context schema definition](https://github.com/adobe/magento-storefront-events-sdk/blob/main/src/types/schemas/searchInput.ts)
-   [context example](https://github.com/adobe/magento-storefront-events-sdk/blob/main/tests/mocks.ts#L237)

#### `setSearchResults`

```javascript
mse.context.setSearchResults(searchResultsCtx);
```

Sets the `SearchResults` context.

-   [context schema definition](https://github.com/adobe/magento-storefront-events-sdk/blob/main/src/types/schemas/searchResults.ts)
-   [context example](https://github.com/adobe/magento-storefront-events-sdk/blob/main/tests/mocks.ts#L255)

#### `setShopper`

```javascript
mse.context.setShopper(shopperCtx);
```

Sets the `Shopper` context.

-   [context schema definition](https://github.com/adobe/magento-storefront-events-sdk/blob/main/src/types/schemas/shopper.ts)
-   [context example](https://github.com/adobe/magento-storefront-events-sdk/blob/main/tests/mocks.ts#L294)

#### `setShoppingCart`

```javascript
mse.context.setShoppingCart(shoppingCartCtx);
```

Sets the `ShoppingCart` context.

-   [context schema definition](https://github.com/adobe/magento-storefront-events-sdk/blob/main/src/types/schemas/shoppingCart.ts)
-   [context example](https://github.com/adobe/magento-storefront-events-sdk/blob/main/tests/mocks.ts#L298)

#### `setStorefrontInstance`

```javascript
mse.context.setStorefrontInstance(storefrontCtx);
```

Sets the `StorefrontInstance` context. This context is used when forwarding data to Adobe Commerce Data Services to identify the Adobe Commerce instance associated with the data.

-   [context schema definition](https://github.com/adobe/magento-storefront-events-sdk/blob/main/src/types/schemas/storefrontInstance.ts)
-   [context example](https://github.com/adobe/magento-storefront-events-sdk/blob/main/tests/mocks.ts#L345)

#### `setContext`

```javascript
mse.context.setContext(name, ctx);
```

Sets a custom `Context`.

These getters are available for accessing context data:

```javascript
mse.context.getAEP();
mse.context.getCategory();
mse.context.getContext(name);
mse.context.getCustomUrl();
mse.context.getEventForwarding();
mse.context.getMagentoExtension();
mse.context.getDataServicesExtension();
mse.context.getOrder();
mse.context.getPage();
mse.context.getProduct();
mse.context.getRecommendations();
mse.context.getReferrerUrl();
mse.context.getProduct();
mse.context.getRecommendations();
mse.context.getRecommendationsExtension();
mse.context.getSearchExtension();
mse.context.getSearchInput();
mse.context.getSearchResults();
mse.context.getShopper();
mse.context.getShoppingCart();
```

### Publish

These functions publish events which notify all subscribers:

```javascript
mse.publish.addToCart();
```

```javascript
mse.publish.abandonCart();
```

```javascript
mse.publish.createAccount(ctx);
```

```javascript
// write a `commerce-custom` event to the adobeDataLayer
// any object passed in will be set under `customContext` for this event
mse.publish.custom({
    /*...*/
});
```

```javascript
mse.publish.customUrl(ctx);
```

```javascript
mse.publish.editAccount(ctx);
```

```javascript
mse.publish.initiateCheckout(ctx);
```

```javascript
mse.publish.pageActivitySummary(ctx);
```

```javascript
mse.publish.pageView(ctx);
```

```javascript
mse.publish.placeOrder(ctx);
```

```javascript
mse.publish.productPageView(ctx);
```

```javascript
mse.publish.recsItemAddToCartClick(unitId, productId, ctx);
```

```javascript
mse.publish.recsItemClick(unitId, productId, ctx);
```

```javascript
mse.publish.recsRequestSent(ctx);
```

```javascript
mse.publish.recsResponseReceived(ctx);
```

```javascript
// requires recommendationsContext to be set
mse.publish.recsUnitRender(unitId, ctx);
```

```javascript
// requires recommendationsContext to be set
mse.publish.recsUnitView(unitId, ctx);
```

```javascript
mse.publish.referrerUrl(ctx);
```

```javascript
mse.publish.removeFromCart(ctx);
```

```javascript
// requires searchResultsContext to be set
mse.publish.searchCategoryClick(searchUnitId, name, ctx);
```

```javascript
// requires searchResultsContext to be set
mse.publish.searchProductClick(searchUnitId, sku, ctx);
```

```javascript
// requires searchInputContext to be set
mse.publish.searchRequestSent(searchUnitId, ctx);
```

```javascript
// requires searchResultsContext to be set
mse.publish.searchResponseReceived(searchUnitId, ctx);
```

```javascript
// requires searchResultsContext to be set
mse.publish.searchResultsView(searchUnitId, ctx);
```

```javascript
// requires searchResultsContext to be set
mse.publish.searchSuggestionClick(searchUnitId, suggestion, ctx);
```

```javascript
// requires shoppingCartContext to be set
mse.publish.shoppingCartView(ctx);
```

```javascript
mse.publish.signIn(ctx);
```

```javascript
mse.publish.signOut(ctx);
```

```javascript
mse.publish.updateCart(ctx);
```

### Subscribe

These functions subscribe to events:

```javascript
mse.subscribe.addToCart(handler, options);
mse.subscribe.abandonCart(handler, options);
mse.subscribe.createAccount(handler, options);
mse.subscribe.custom(handler, options);
mse.subscribe.customUrl(handler, options);
mse.subscribe.editAccount(handler, options);
mse.subscribe.dataLayerChange(handler, options);
mse.subscribe.dataLayerEvent(handler, options);
mse.subscribe.initiateCheckout(handler, options);
mse.subscribe.pageActivitySummary(handler, options);
mse.subscribe.pageView(handler, options);
mse.subscribe.placeOrder(handler, options);
mse.subscribe.productPageView(handler, options);
mse.subscribe.recsItemAddToCartClick(handler, options);
mse.subscribe.recsItemClick(handler, options);
mse.subscribe.recsRequestSent(handler, options);
mse.subscribe.recsResponseReceived(handler, options);
mse.subscribe.recsUnitRender(handler, options);
mse.subscribe.recsUnitView(handler, options);
mse.subscribe.referrerUrl(handler, options);
mse.subscribe.removeFromCart(handler, options);
mse.subscribe.searchCategoryClick(handler, options);
mse.subscribe.searchProductClick(handler, options);
mse.subscribe.searchRequestSent(handler, options);
mse.subscribe.searchResponseReceived(handler, options);
mse.subscribe.searchResultsView(handler, options);
mse.subscribe.searchSuggestionClick(handler, options);
mse.subscribe.shoppingCartView(handler, options);
mse.subscribe.signIn(handler, options);
mse.subscribe.signOut(handler, options);
mse.subscribe.updateCart(handler, options);
```

### Unsubscribe

These functions unsubscribe from events:

```javascript
mse.unsubscribe.addToCart(handler);
mse.unsubscribe.abandonCart(handler);
mse.unsubscribe.createAccount(handler);
mse.unsubscribe.custom(handler);
mse.unsubscribe.customUrl(handler);
mse.unsubscribe.editAccount(handler);
mse.unsubscribe.dataLayerChange(handler);
mse.unsubscribe.dataLayerEvent(handler);
mse.unsubscribe.initiateCheckout(handler);
mse.unsubscribe.pageActivitySummary(handler);
mse.unsubscribe.pageView(handler);
mse.unsubscribe.placeOrder(handler);
mse.unsubscribe.productPageView(handler);
mse.unsubscribe.recsItemAddToCartClick(handler);
mse.unsubscribe.recsItemClick(handler);
mse.unsubscribe.recsRequestSent(handler);
mse.unsubscribe.recsResponseReceived(handler);
mse.unsubscribe.recsUnitRender(handler);
mse.unsubscribe.recsUnitView(handler);
mse.unsubscribe.referrerUrl(handler);
mse.unsubscribe.removeFromCart(handler);
mse.unsubscribe.searchCategoryClick(handler);
mse.unsubscribe.searchProductClick(handler);
mse.unsubscribe.searchRequestSent(handler);
mse.unsubscribe.searchResponseReceived(handler);
mse.unsubscribe.searchResultsView(handler);
mse.unsubscribe.searchSuggestionClick(handler);
mse.unsubscribe.shoppingCartView(handler);
mse.unsubscribe.signIn(handler);
mse.unsubscribe.signOut(handler);
mse.unsubscribe.updateCart(handler);
```

## Support

If you have any questions or encounter any issues, please reach out on [GitHub][issues].

[npm]: https://npmjs.com/package/@adobe/magento-storefront-events-sdk
[version-badge]: https://img.shields.io/npm/v/@adobe/magento-storefront-events-sdk.svg?style=flat-square
[downloads-badge]: https://img.shields.io/npm/dt/@adobe/magento-storefront-events-sdk?style=flat-square
[bundlephobia]: https://bundlephobia.com/result?p=@adobe/magento-storefront-events-sdk
[size-badge]: https://img.shields.io/bundlephobia/minzip/@adobe/magento-storefront-events-sdk?style=flat-square
[actions]: https://github.com/adobe/magento-storefront-events-sdk/actions
[build-badge]: https://img.shields.io/github/workflow/status/adobe/magento-storefront-events-sdk/publish-latest?style=flat-square
[typescript]: https://typescriptlang.org/dt/search?search=%40adobe%2Fmagento-storefront-events-sdk
[typescript-badge]: https://img.shields.io/npm/types/@adobe/magento-storefront-events-sdk?style=flat-square
[contributing]: https://github.com/adobe/magento-storefront-events-sdk/blob/main/.github/CONTRIBUTING.md
[contributing-badge]: https://img.shields.io/badge/PRs-welcome-success?style=flat-square
[magento]: https://magento.com
[collector]: https://github.com/adobe/magento-storefront-event-collector
[unpkg]: https://unpkg.com/@adobe/magento-storefront-events-sdk/dist/index.js
[npm]: https://npmjs.com/package/@adobe/magento-storefront-events-sdk
[context]: #context
[publish]: #publish
[subscribe]: #subscribe
[unsubscribe]: #unsubscribe
[issues]: https://github.com/adobe/magento-storefront-events-sdk/issues
