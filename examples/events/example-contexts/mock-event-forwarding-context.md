## Event forwarding context

Contains configuration for forwarding events to Adobe Sensei and Adobe DX/AEP Edge.

**NOTE** `snowplow` option **defaults to true** and must be true for Adobe Sensei Product Recs and Intelligent Merchandising to capture data correctly.

**NOTE** `aep` option **defaults to false** and must be false for clients using Launch Tags to avoid double-counting events.

### Used

-   all events

### Mock data

```javascript
const mockEventForwardingCtx = {
    snowplow: true,
    aep: false,
};
```
