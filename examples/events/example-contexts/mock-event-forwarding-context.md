## Event Forwarding context

Contains configuration for forwarding events to Adobe Sensei and Adobe DX/AEP Edge.

**NOTE** `snowplow` option **defaults to true** and must be true for Adobe Sensei Product Recs and Intelligent Merchandising to capture data correctly.

**NOTE** `aep` option **defaults to false** and must be false for clients using Launch Tags to avoid double-counting events.

### Used

-   all events

### Full schema and required fields

[Event Forwarding schema](../../../packages/storefront-events-sdk/src/types/schemas/eventForwarding.ts)

### Mock data

```javascript
const mockEventForwardingCtx = {
    snowplow: true,
    aep: false,
};
```
