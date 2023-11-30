# Adobe Commerce Events SDK

[![version][version-badge]][npm]
[![downloads][downloads-badge]][npm]
[![size][size-badge]][bundlephobia]
[![build][build-badge]][actions]
[![typescript][typescript-badge]][typescript]
[![contributing][contributing-badge]][contributing]

## Overview

This package serves as the foundation for eventing on an [Adobe Commerce][commerce] storefront. It provides access to the Adobe data layer, and an event publishing service.

You can handle the events in a custom implementation, or use the [Adobe Commerce Events Collectors][collectors] package that listens for events and sends them to Adobe Commerce edges for processing.

**Note:** When an event is published through the SDK, all subscribers to that event get notified. Defining a custom listener shouldn't preclude you from also running the Adobe Commerce Events Collectors.

Our context schemas are designed to simplify forwarding to two edges:

-   Adobe Commerce Data Services (maintained by Adobe Engineering and used to power merchant performance dashboards)
-   [Adobe Experience Platform](https://business.adobe.com/products/experience-platform/adobe-experience-platform.html) (requires a subscription and additional merchant [setup](https://experienceleague.adobe.com/docs/experience-platform/edge/fundamentals/datastreams.html?lang=en); data can be used by merchants inside the Adobe Experience Platform for detailed analytics, targeted merchandising, real time customer data profiles, and more)

## Installation

This SDK can be used as a hosted script, or bundled in a JavaScript application. The script version is hosted on [unpkg][unpkg], and the bundled version is hosted on [npm][npm].

To load the SDK as a script, use the following snippet.

```
<script src="https://unpkg.com/@adobe/commerce-events-sdk/dist/index.js"></script>
```

To install the script as a dependency, run this command.

```shell
npm install @adobe/commerce-events-sdk
```

## Quick start

Once imported, you have access to the four main functions of the Events SDK.

-   `Context` - set context data
-   `Publish` - publish events
-   `Subscribe` - subscribe to events
-   `Unsubscribe` - unsubscribe from events

Below is a code example of how to get started.

**IMPORTANT** Relevant context data must be populated before publishing events that require it.

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

The SDK is broken down into four major parts: `Context`, `Publish`, `Subscribe`, `Unsubscribe`.

### Context

Pre-defined contexts are listed in the [ContextManager](./src/ContextManager.ts).

Examples of setting context under [examples/events/example-contexts](../../examples/events/example-contexts/).

Required contexts per event under [examples/events/](../../examples/events/).

### Publish

Pre-defined publishable events are listed in the [PublishManager](./src/PublishManager.ts). Any event that is not part of the `PublishManager` should be handled as a custom event.

A list of examples on publishing events is available under [examples](../../examples/).

### Subscribe

Supported `subscibe` events are defined in the [SubscribeManager](./src/SubscribeManager.ts). Any event that is not part of the `SubscribeManager` should be handled as a custom event.

Note that a large number of custom events with different schemas is an anti-pattern (most events you need should be supported by `SubscribeManager`). If there are standard events you believe should be supported by `SubscribeManager`, please submit an [issue](https://github.com/adobe/commerce-events/issues).

Note that it is rare for an application utilizing the SDK to have to subscribe to events. In most cases subscribes and unsubscribes are handled by the [Storefront Events Collector](../storefront-events-collector/).

### Unsubscribe

Supported `unsubscibe` events are defined in the [UnubscribeManager](./src/UnsubscribeManager.ts).

As noted above, it is rare for an SDK and Collector user to have to call these functions directly.

## Support

If you have any questions or encounter any issues, please reach out on [GitHub][issues].

[npm]: https://npmjs.com/package/@adobe/magento-storefront-events-sdk
[version-badge]: https://img.shields.io/npm/v/@adobe/magento-storefront-events-sdk.svg?style=flat-square
[downloads-badge]: https://img.shields.io/npm/dt/@adobe/magento-storefront-events-sdk?style=flat-square
[bundlephobia]: https://bundlephobia.com/result?p=@adobe/magento-storefront-events-sdk
[size-badge]: https://img.shields.io/bundlephobia/minzip/@adobe/magento-storefront-events-sdk?style=flat-square
[actions]: https://github.com/adobe/commerce-events/actions
[build-badge]: https://img.shields.io/github/workflow/status/adobe/commerce-events/publish-latest?style=flat-square
[typescript]: https://typescriptlang.org/dt/search?search=%40adobe%2Fcommerce-events-sdk
[typescript-badge]: https://img.shields.io/npm/types/@adobe/commerce-events-sdk?style=flat-square
[contributing]: https://github.com/adobe/commerce-events/blob/main/.github/CONTRIBUTING.md
[contributing-badge]: https://img.shields.io/badge/PRs-welcome-success?style=flat-square
[commerce]: https://business.adobe.com/products/magento/magento-commerce.html
[collectors]: https://github.com/adobe/commerce-events/tree/main/packages/storefront-events-collector
[unpkg]: https://unpkg.com/@adobe/magento-storefront-events-sdk/dist/index.js
[issues]: https://github.com/adobe/commerce-events/issues
