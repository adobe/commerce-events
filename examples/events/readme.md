## commerce events examples

### Event purposes and usage

#### Intelligent Commerce solutions

Adobe Commerce solutions powered by Sensei (Live Search, Product Recommendations) require a set of clickstream events to be captured in shopper's browsers in order to provide accurate recommendations and iMerch strategies.

The events in the table below are the minimum required set of events for Adobe Sensei to interpret shopper data correctly. The required fields and contexts for each event can be found in the detailed examples in this directory.

![event strategies](/examples/imerch_strategy_events.png)

#### Performance dashboards

Live Search and Product Recs dashboards in Commerce Admin utilize event data to show conversion rates and other perofrmance metrics.

#### Adobe DX

TODO

### Required events

**Required events for Live Search dashboard**

Unique Searches, Zero Result Searches, Zero Result Rate, and Popular Searches tables use `searchRequestSent` and `searchResponseReceived` data.

Avg. click position and Click-Through Rate use `searchRequestSent`, `searchResponseReceived`, and `searchProductClick` data.

Conversion rate uses `searchRequestSent`, `searchResponseReceived`, `searchProductClick`, `productView`, `addToCart`, and `checkout` data.

**Required events for Product Recommendations dashboard**

TODO

### Required contexts

**All events**

`page`

`storefront`

Setting `page` and `storefront` contexts should happen at the page level/storefront application layer rather than when generating individual events (for example, in a PHP storefront, the PHP application container is responsible for setting them at runtime).

The contexts are included in all event generation examples as a reminder that they are required for events to be processed correctly.

### Optional contexts in all events

`eventForwarding`

`aep`

Setting `eventForwarding` and `aep` contexts should happen at the page level/storefront application layer.

**NOTE** it is imporant to set `eventForwarding` to `{ aep: false }` for all clients using AEP Launch Tags.
