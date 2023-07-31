## Commerce events examples

### Event purposes and usage

#### Intelligent Commerce solutions

Adobe Commerce solutions powered by Sensei (Live Search, Product Recommendations) require a set of clickstream events to be captured in shopper's browsers in order to provide accurate recommendations and iMerch strategies.

The events in the table below are the minimum required set of events for Adobe Sensei to interpret shopper data correctly. The required fields and contexts for each event can be found in the detailed examples in this directory.

![event strategies](/examples/imerch_strategy_events.png)

#### Performance dashboards

Live Search and Product Recs dashboards in Commerce Admin utilize event data to show conversion rates and other perofrmance metrics.

#### Adobe DX

All commerce events published through the Storefront Events SDK are written to the `adobeDataLayer` in a shopper's browser. Adobe Commerce clients can easily set up data forwarding from the `adobeDataLayer` to the Adobe Digital Experience platform using one of two options:

(1) [Adobe Experience Platform Tags](https://experienceleague.adobe.com/docs/commerce-merchant-services/experience-platform-connector/event-forwarding/using-tags.html?lang=en)

OR

(2) Setting [`EventForwarding`](./example-contexts/mock-event-forwarding-context.md) and [`AEP`](./example-contexts/mock-aep-context.md) contexts at storefront application level (same time as `Storefront` context).

**NOTE** it is imporant to set `EventForwarding` to `{ aep: false }` for all clients using AEP Launch Tags.

### Required events

**Required events for [Live Search dashboard](https://experienceleague.adobe.com/docs/commerce-merchant-services/live-search/live-search-admin/performance.html?lang=en)**

Unique Searches: [`search-request-sent`](./search-request-sent.md) and [`search-response-received`](./search-response-received.md)

Zero Result Searches: [`search-request-sent`](./search-request-sent.md) and [`search-response-received`](./search-response-received.md)

Zero Result Rate: [`search-request-sent`](./search-request-sent.md) and [`search-response-received`](./search-response-received.md)

Popular Searches table: [`search-request-sent`](./search-request-sent.md) and [`search-response-received`](./search-response-received.md)

Avg. click position: [`search-request-sent`](./search-request-sent.md), [`search-response-received`](./search-response-received.md), and [`search-product-click`](./search-product-click.md)

Click-Through Rate: [`search-request-sent`](./search-request-sent.md), [`search-response-received`](./search-response-received.md), and [`search-product-click`](./search-product-click.md)

Conversion rate: [`search-request-sent`](./search-request-sent.md), [`search-response-received`](./search-response-received.md), [`search-product-click`](./search-product-click.md), [`product-view`](./product-page-view.md), [`add-to-cart`](./add-to-cart.md), and [`place-order`](./place-order.md)

**Required events for [Product Recommendations dashboard](https://experienceleague.adobe.com/docs/commerce-merchant-services/product-recommendations/admin/workspace.html?lang=en)**

Impressions: [`recs-unit-render`](./recs-unit-render.md) and [`recs-unit-view`](./recs-unit-view.md)

Views: [`recs-unit-view`](./recs-unit-view.md)

Clicks: [`recs-item-click`](./recs-item-click.md) and [`recs-add-to-cart-click`](./recs-item-add-to-cart.md)

Revenue: [`recs-item-click`](./recs-item-click.md), [`recs-add-to-cart-click`](./recs-item-add-to-cart.md), and [`place-order`](./place-order.md)

LT Revenue: [`recs-item-click`](./recs-item-click.md), [`recs-add-to-cart-click`](./recs-item-add-to-cart.md), and [`place-order`](./place-order.md)

CTR: [`recs-unit-render`](./recs-unit-render.md), [`recs-item-click`](./recs-item-click.md), and [`recs-add-to-cart-click`](./recs-item-add-to-cart.md)

vCTR: [`recs-unit-render`](./recs-unit-render.md), [`recs-unit-view`](./recs-unit-view.md), `recs-item-click`, and `recs-add-to-cart-click`

### Required contexts

**All events**

`Page`

`Storefront`

Setting `Page` and `Storefront` contexts should happen at the page level/storefront application layer rather than when generating individual events (for example, in a PHP storefront, the PHP application container is responsible for setting them at runtime).

The contexts are included in all event generation examples as a reminder that they are required for events to be processed correctly.

### Debugging

#### Adobe Data Layer

All events published through the Storefront Events SDK are written to the `adobeDataLayer` object in a shopper's browser. You can check contexts and fields in your events in Dev Tools -> Console, `window.adobeDataLayer`.

Search Response Received example

![search response received example](/examples/search_response_received.png)

Recs Item Click example

![recs item click example](/examples/recs_item_click.png)

#### Snowplow Debugger

TODO

#### AEP Debugger

TODO
