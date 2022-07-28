# Adobe Commerce Events SDK

[![version][version-badge]][npm]
[![downloads][downloads-badge]][npm]
[![size][size-badge]][bundlephobia]
[![build][build-badge]][actions]
[![typescript][typescript-badge]][typescript]
[![contributing][contributing-badge]][contributing]

## Overview

This package serves as the foundation for eventing on an [Adobe Commerce][commerce] storefront. It provides access to a common data layer, and an event publishing and subscription service.

You can handle the events in a custom implementation, or use the [Adobe Commerce Events Collectors][collectors] package that listens for events and sends them to Adobe Commerce edges for processing.

**Note:** When an event is published through the SDK, all subscribers to that event get notified. Defining a custom listener shouldn't preclude you from also running the Adobe Commerce Events Collectors.

Our context schemas are designed to simplify forwarding to two edges:

-   Adobe Commerce Data Services (maintained by Adobe Engineering and used to power merchant performance dashboards)
-   [Adobe Experience Platform](https://business.adobe.com/products/experience-platform/adobe-experience-platform.html) (requires a subscription and additional merchant [setup](https://experienceleague.adobe.com/docs/experience-platform/edge/fundamentals/datastreams.html?lang=en); data can be used by merchants inside the Adobe Experience Platform for detailed analytics, targeted merchandising, real time customer data profiles, and more)

## Installation

This SDK can be used as a hosted script, or bundled in a JavaScript application. The script version is hosted on [unpkg][unpkg], and the bundled version is hosted on [npm][npm].

To load the SDK as a script, use the following snippet.

### Option 1: Package dependency (npm)

To install the script as a dependency, run this command.

```shell
npm install @adobe/commerce-events-sdk
```

### Option 2: Pre-built standalone script (async)

The SDK implements a command queue so that no events are missed during initial page load using asynchronous loading.

Copy the command queue (base) script as close to the top of your HTML `<head>` tag:

```
<script>
    !function(n,o){o.forEach(function(o){n[o]||((n.__commerceNS=n.__commerceNS||
    []).push(o),n[o]=function(){var u=arguments;return new Promise(
    function(i,l){n[o].q.push([i,l,u])})},n[o].q=[])})}
    (window,["commerceConnector"]);
</script>
```

```
<script src="https://unpkg.com/@adobe/commerce-events-sdk/dist/index.js" async></script>
```

### Option 3: Pre-built standalone script (sync)

```
<script>
    !function(n,o){o.forEach(function(o){n[o]||((n.__commerceNS=n.__commerceNS||
    []).push(o),n[o]=function(){var u=arguments;return new Promise(
    function(i,l){n[o].q.push([i,l,u])})},n[o].q=[])})}
    (window,["commerceConnector"]);
</script>
```

```
<script src="https://unpkg.com/@adobe/commerce-events-sdk/dist/index.js"></script>
```

For options 2 and 3, some example code is available in [the collector example directory](../../examples/old-collector-example/).

## Quick start

Once imported, you have access to the four main functions of the Events SDK.

-   [Context][context] - set context data
-   [Publish][publish] - publish events
-   [Subscribe][subscribe] - subscribe to events
-   [Unsubscribe][unsubscribe] - unsubscribe from events

Below are some code example of how to get started.

> _IMPORTANT: Relevant context data must be populated before publishing events that require it._

```javascript
/** sync **/

import mse from "@adobe/commerce-events-sdk";
// handler - can go in a different module
function addToCartHandler(event) {
    // do something with the event
}
// subscribe to events
mse.subscribe.addToCart(addToCartHandler);

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

```javascript
/** async **/

// handler - can go in a different module
function addToCartHandler(event) {
    // do something with the event
}

// subscribe to events
commerceConnector("subscribe", "addToCart", addToCartHandler).then(() => {
    // set context data
    commerceConnector("context", "setShoppingCart", shoppingCartContext).then(() => {
        // publish events
        commerceConnector("publish", "addToCart");
    });
});

// unsubscribe from events
commerceConnector("unsubscribe", "addToCart", addToCartHandler);
```

```javascript
import mse from "@adobe/commerce-events-sdk";
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
/** async **/
commerceConnector("context", "setAEP", aepCtx);
```

```javascript
/** sync **/
mse.context.setAEP(aepCtx);
```

Sets the `AEP` context which can be used by event handlers to forward events to the Adobe Experience Platform. A client must have an AEP subscription and provide a valid [IMS Org Id and Datastream Id](https://experienceleague.adobe.com/docs/experience-platform/edge/fundamentals/datastreams.html?lang=en).

-   [context schema definition](https://github.com/adobe/commerce-events/tree/main/packages/commerce-events-sdk/src/types/schemas/aep.ts)
-   [context example](https://github.com/adobe/commerce-events/blob/main/packages/commerce-events-sdk/tests/mocks.ts#L25)

#### `setCategory`

```javascript
/** async **/
commerceConnector("context", "setCategory", categoryCtx);
```

```javascript
/** sync **/
mse.context.setCategory(categoryCtx);
```

Sets the `Category` context.

-   [context schema definition](https://github.com/adobe/commerce-events/tree/main/packages/commerce-events-sdk/src/types/schemas/category.ts)
-   [context example](https://github.com/adobe/commerce-events/blob/main/packages/commerce-events-sdk/tests/mocks.ts#L31)

#### `setAccount`

```javascript
/** async **/
commerceConnector("context", "setAccount", accountCtx);
```

```javascript
/** sync **/
mse.context.setAccount(accountCtx);
```

Sets the `Account` context.

#### `setEventForwarding`

```javascript
/** async **/
commerceConnector("context", "setEventForwarding", eventForwardingCtx);
```

```javascript
/** sync **/
mse.context.setEventForwarding(eventForwardingCtx);
```

Sets the `EventForwarding` context. Tells a handler if it should forward events to Adobe Commerce DataSolutions (`commerce: true`), Adobe Experience Platform (`aep: true`), or both.

-   [context schema definition](https://github.com/adobe/commerce-events/tree/main/packages/commerce-events-sdk/src/types/schemas/eventForwarding.ts)
-   [context example](https://github.com/adobe/commerce-events/blob/main/packages/commerce-events-sdk/tests/mocks.ts#L47)

#### `setMagentoExtension` @deprecated

```javascript
/** async **/
commerceConnector("context", "setMagentoExtension", magentoExtensionCtx);
```

```javascript
/** sync **/
mse.context.setMagentoExtension(magentoExtensionCtx);
```

Sets the `MagentoExtension` context. Includes Data Services extension version.

This field is deprecated. `setDataServicesExtension` should be used instead.

-   [context schema definition](https://github.com/adobe/commerce-events/tree/main/packages/commerce-events-sdk/src/types/schemas/magentoExtension.ts)
-   [context example](https://github.com/adobe/commerce-events/blob/main/packages/commerce-events-sdk/tests/mocks.ts#L55)

#### `setDataServicesExtension`

```javascript
/** async **/
commerceConnector("context", "setDataServicesExtension", dataServicesExtensionCtx);
```

```javascript
/** sync **/
mse.context.setDataServicesExtension(dataServicesExtensionCtx);
```

Sets the `DataServicesExtension` context. Includes Data Services extension version.

-   [context schema definition](https://github.com/adobe/commerce-events/tree/main/packages/commerce-events-sdk/src/types/schemas/dataServicesExtension.ts)

#### `setOrder`

```javascript
/** async **/
commerceConnector("context", "setOrder", orderCtx);
```

```javascript
/** sync **/
mse.context.setOrder(orderCtx);
```

Sets the `Order` context.

-   [context schema definition](https://github.com/adobe/commerce-events/tree/main/packages/commerce-events-sdk/src/types/schemas/order.ts)
-   [context example](https://github.com/adobe/commerce-events/blob/main/packages/commerce-events-sdk/tests/mocks.ts#L62)

#### `setPage`

```javascript
/** async **/
commerceConnector("context", "setPage", pageCtx);
```

```javascript
/** sync **/
mse.context.setPage(pageCtx);
```

Sets the `Page` context.

-   [context schema definition](https://github.com/adobe/commerce-events/tree/main/packages/commerce-events-sdk/src/types/schemas/page.ts)
-   [context example](<(https://github.com/adobe/commerce-events/blob/main/packages/commerce-events-sdk/tests/mocks.ts#L76)>)

#### `setProduct`

```javascript
/** async **/
commerceConnector("context", "setProduct", productCtx);
```

```javascript
/** sync **/
mse.context.setProduct(productCtx);
```

Sets the `Product` context.

-   [context schema definition](https://github.com/adobe/commerce-events/tree/main/packages/commerce-events-sdk/src/types/schemas/product.ts)
-   [context example](https://github.com/adobe/commerce-events/blob/main/packages/commerce-events-sdk/tests/mocks.ts#L88)

#### `setRecommendations`

```javascript
/** async **/
commerceConnector("context", "setRecommendations", recommendationsCtx);
```

```javascript
/** sync **/
mse.context.setRecommendations(recommendationsCtx);
```

Sets the `Recommendations` context.

-   [context schema definition](https://github.com/adobe/commerce-events/tree/main/packages/commerce-events-sdk/src/types/schemas/recommendations.ts)
-   [context example](https://github.com/adobe/commerce-events/blob/main/packages/commerce-events-sdk/tests/mocks.ts#L105)

#### `setRecommendationsExtension`

```javascript
/** async **/
mse.context.setRecommendationsExtension(recommendationsExtensionCtx);
```

```javascript
/** sync **/
commerceConnector("context", "setRecommendationsExtension", recommendationsExtensionCtx);
```

Sets the `RecommendationsExtension` context. Includes Recommendations extension version.

-   [context schema definition](https://github.com/adobe/commerce-events/tree/main/packages/commerce-events-sdk/src/types/schemas/recommendationsExtension.ts)

#### `setReferrerUrl`

```javascript
/** async **/
commerceConnector("context", "setReferrerUrl", referrerUrlCtx);
```

```javascript
/** sync **/
mse.context.setReferrerUrl(referrerUrlCtx);
```

Sets the `ReferrerUrl` context.

-   [context schema definition](https://github.com/adobe/commerce-events/tree/main/packages/commerce-events-sdk/src/types/schemas/referrerUrl.ts)
-   [context example](https://github.com/adobe/commerce-events/blob/main/packages/commerce-events-sdk/tests/mocks.ts#L230)

#### `setSearchExtension`

```javascript
/**  async **/
commerceConnector("context", "setSearchExtension", searchExtensionCtx);
```

```javascript
/** sync **/
mse.context.setSearchExtension(searchExtensionCtx);
```

Sets the `SearchExtension` context. Includes Live Search extension version.

-   [context schema definition](https://github.com/adobe/commerce-events/tree/main/packages/commerce-events-sdk/src/types/schemas/searchExtension.ts)

#### `setSearchInput`

```javascript
/** async **/
commerceConnector("context", "setSearchInput", searchInputCtx);
```

```javascript
/** sync **/
mse.context.setSearchInput(searchInputCtx);
```

Sets the `SearchInput` context.

-   [context schema definition](https://github.com/adobe/commerce-events/tree/main/packages/commerce-events-sdk/src/types/schemas/searchInput.ts)
-   [context example](https://github.com/adobe/commerce-events/blob/main/packages/commerce-events-sdk/tests/mocks.ts#L237)

#### `setSearchResults`

```javascript
/** async **/
commerceConnector("context", "setSearchResults", searchResultsCtx);
```

```javascript
/** sync *//
mse.context.setSearchResults(searchResultsCtx);
```

Sets the `SearchResults` context.

-   [context schema definition](https://github.com/adobe/commerce-events/tree/main/packages/commerce-events-sdk/src/types/schemas/searchResults.ts)
-   [context example](https://github.com/adobe/commerce-events/blob/main/packages/commerce-events-sdk/tests/mocks.ts#L255)

#### `setShopper`

```javascript
/** async **/
commerceConnector("context", "setShopper", shopperCtx);
```

```javascript
/** sync **/
mse.context.setShopper(shopperCtx);
```

Sets the `Shopper` context.

-   [context schema definition](https://github.com/adobe/commerce-events/tree/main/packages/commerce-events-sdk/src/types/schemas/shopper.ts)
-   [context example](https://github.com/adobe/commerce-events/blob/main/packages/commerce-events-sdk/tests/mocks.ts#L294)

#### `setShoppingCart`

```javascript
/** async **/
commerceConnector("context", "setShoppingCart", shoppingCartCtx);
```

```javascript
/** sync **/
mse.context.setShoppingCart(shoppingCartCtx);
```

Sets the `ShoppingCart` context.

-   [context schema definition](https://github.com/adobe/commerce-events/tree/main/packages/commerce-events-sdk/src/types/schemas/shoppingCart.ts)
-   [context example](https://github.com/adobe/commerce-events/blob/main/packages/commerce-events-sdk/tests/mocks.ts#L298)

#### `setStorefrontInstance`

```javascript
/** async **/
commerceConnector("context", "setStorefrontInstance", storefrontCtx);
```

```javascript
/** sync **/
mse.context.setStorefrontInstance(storefrontCtx);
```

Sets the `StorefrontInstance` context. This context is used when forwarding data to Adobe Commerce Data Services to identify the Adobe Commerce instance associated with the data.

-   [context schema definition](https://github.com/adobe/commerce-events/tree/main/packages/commerce-events-sdk/src/types/schemas/storefrontInstance.ts)
-   [context example](https://github.com/adobe/commerce-events/blob/main/packages/commerce-events-sdk/tests/mocks.ts#L345)

#### `setContext`

```javascript
/** async **/
commerceConnector("context", "setContext", name, ctx);
```

```javascript
/** sync **/
mse.context.setContext(name, ctx);
```

Sets a custom `Context`.

These getters are available for accessing context data:

```javascript
/** async **/
const aep = await commerceConnector("context", "getAEP");
const category = await commerceConnector("context", "getCategory");
const context = await commerceConnector("context", "getContext", "name");
const eventForwarding = await commerceConnector("context", "getEventForwarding");
const magentoExtension = await commerceConnector("context", "getMagentoExtension");
const dataServicesExtension = await commerceConnector("context", "getDataServicesExtension");
const order = await commerceConnector("context", "getOrder");
const page = await commerceConnector("context", "getPage");
const product = await commerceConnector("context", "getProduct");
const referrerUrl = await commerceConnector("context", "getReferrerUrl");
const product = await commerceConnector("context", "getProduct");
const recommendations = await commerceConnector("context", "getRecommendations");
const recommendationsExtension = await commerceConnector("context", "getRecommendationsExtension");
const searchExtension = await commerceConnector("context", "getSearchExtension");
const searchInput = await commerceConnector("context", "getSearchInput");
const searchResults = await commerceConnector("context", "getSearchResults");
const shopper = await commerceConnector("context", "getShopper");
const shoppingCart = await commerceConnector("context", "getShoppingCart");
```

```javascript
/** sync **/
const aep = mse.context.getAEP();
const category = mse.context.getCategory();
const context = mse.context.getContext(name);
const eventForwarding = mse.context.getEventForwarding();
const magentoExtension = mse.context.getMagentoExtension();
const dataServicesExtension = mse.context.getDataServicesExtension();
const order = mse.context.getOrder();
const page = mse.context.getPage();
const product = mse.context.getProduct();
const referrerUrl = mse.context.getReferrerUrl();
const product = mse.context.getProduct();
const recommendations = mse.context.getRecommendations();
const recommendationsExtension = mse.context.getRecommendationsExtension();
const searchExtension = mse.context.getSearchExtension();
const searchInput = mse.context.getSearchInput();
const searchResults = mse.context.getSearchResults();
const shopper = mse.context.getShopper();
const shoppingCart = mse.context.getShoppingCart();
```

### Publish

These functions publish events which notify all subscribers:

```javascript
/** sync **/
mse.publish.addToCart();
mse.publish.abandonCart();
mse.publish.createAccount(ctx);
mse.publish.custom({ customCtx });
mse.publish.customUrl(ctx);
mse.publish.editAccount(ctx);
mse.publish.initiateCheckout(ctx);
mse.publish.pageActivitySummary(ctx);
mse.publish.pageView(ctx);
mse.publish.placeOrder(ctx);
mse.publish.productPageView(ctx);
mse.publish.recsItemAddToCartClick(unitId, productId, ctx);
mse.publish.recsItemClick(unitId, productId, ctx);
mse.publish.recsRequestSent(ctx);
mse.publish.recsResponseReceived(ctx);
mse.publish.recsUnitRender(unitId, ctx);
mse.publish.recsUnitView(unitId, ctx);
mse.publish.referrerUrl(ctx);
mse.publish.removeFromCart(ctx);
mse.publish.searchCategoryClick(searchUnitId, name, ctx);
mse.publish.searchProductClick(searchUnitId, sku, ctx);
mse.publish.searchRequestSent(searchUnitId, ctx);
mse.publish.searchResponseReceived(searchUnitId, ctx);
mse.publish.searchResultsView(searchUnitId, ctx);
mse.publish.searchSuggestionClick(searchUnitId, suggestion, ctx);
mse.publish.shoppingCartView(ctx);
mse.publish.signIn(ctx);
mse.publish.signOut(ctx);
mse.publish.updateCart(ctx);
```

### Subscribe

All publish methods have a corresponding subscribe method that registers a handler (callback) on published event.

Example:

```javascript
/** asynch **/
commerceConnector("subscribe", "addToCart", handler, options);
commerceConnector("subscribe", "placeOrder", handler, options);
```

```javascript
/** sync **/
mse.subscribe.addToCart(handler, options);
mse.subscribe.placeOrder(handler, options);
```

### Unsubscribe

All subscribe methods have a corresponding unsubscribe method.

Example:

```javascript
commerceConnector("unsubscribe", "addToCart", handler);
commerceConnector("unsubscribe", "placeOrder", handler);
```

```javascript
mse.unsubscribe.addToCart(handler);
mse.unsubscribe.placeOrder(handler);
```

## Support

If you have any questions or encounter any issues, please reach out on [GitHub][issues].

[npm]: https://npmjs.com/package/@adobe/commerce-events-sdk
[version-badge]: https://img.shields.io/npm/v/@adobe/commerce-events-sdk.svg?style=flat-square
[downloads-badge]: https://img.shields.io/npm/dt/@adobe/commerce-events-sdk?style=flat-square
[bundlephobia]: https://bundlephobia.com/result?p=@adobe/commerce-events-sdk
[size-badge]: https://img.shields.io/bundlephobia/minzip/@adobe/commerce-events-sdk?style=flat-square
[actions]: https://github.com/adobe/commerce-events/actions
[build-badge]: https://img.shields.io/github/workflow/status/adobe/commerce-events/publish-latest?style=flat-square
[typescript]: https://typescriptlang.org/dt/search?search=%40adobe%2Fcommerce-events-sdk
[typescript-badge]: https://img.shields.io/npm/types/@adobe/commerce-events-sdk?style=flat-square
[contributing]: https://github.com/adobe/commerce-events/blob/main/.github/CONTRIBUTING.md
[contributing-badge]: https://img.shields.io/badge/PRs-welcome-success?style=flat-square
[commerce]: https://business.adobe.com/products/magento/magento-commerce.html
[collectors]: https://github.com/adobe/commerce-events-collectors
[unpkg]: https://unpkg.com/@adobe/commerce-events-sdk/dist/index.js
[npm]: https://npmjs.com/package/@adobe/commerce-events-sdk
[context]: #context
[publish]: #publish
[subscribe]: #subscribe
[unsubscribe]: #unsubscribe
[issues]: https://github.com/adobe/commerce-events/issues
