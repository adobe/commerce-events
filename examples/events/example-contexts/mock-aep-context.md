## AEP context

Contains configuration settings for forwarding events to Adobe DX/AEP Edge

**NOTE** this context is not used if client is using AEP Launch Tags

### Used

-   Adobe DX/AEP clients not using Launch Tags: all events

### Full schema and required fields

[AEP schema](../../../packages/storefront-events-sdk/src/types/schemas/aep.ts)

### Mock data

```javascript
const mockAepCtx = {
    imsOrgId: "1234@AdobeOrg",
    datastreamId: "1234:dev",
};
```
