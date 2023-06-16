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

**Required events for Live Search dashboard**

Unique Searches, Zero Result Searches, Zero Result Rate, and Popular Searches tables use `searchRequestSent` and `searchResponseReceived` data.

Avg. click position and Click-Through Rate use `searchRequestSent`, `searchResponseReceived`, and `searchProductClick` data.

Conversion rate uses `searchRequestSent`, `searchResponseReceived`, `searchProductClick`, `productView`, `addToCart`, and `checkout` data.

**Required events for Product Recommendations dashboard**

TODO

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
