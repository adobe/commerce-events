## commerce events examples

### Required contexts in all events

`page`

`storefront`

Setting `page` and `storefront` contexts should happen at the page level/storefront application layer rather than when generating individual events (for example, in a PHP storefront, the PHP application container is responsible for setting them at runtime).

The contexts are included in all event generation examples as a reminder that they are required for events to be processed correctly.

### Optional contexts in all events

`eventForwarding`

`aep`

Setting `eventForwarding` and `aep` contexts should happen at the page level/storefront application layer.

**NOTE** it is imporant to set `eventForwarding` to `{ aep: false }` for all clients using AEP Launch Tags.
