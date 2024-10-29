## Storefront context

> [!WARNING] 
> `storeCode` and `storeViewCode` are required fields of the storefront context in all events.  Beginning in 2025 any events without `storeCode` or `storeViewCode` will fail validation.  

### Used

-   all events

### Full schema and required fields

[Storefront schema](../../../packages/storefront-events-sdk/src/types/schemas/storefrontInstance.ts)

### Mock data

```javascript
const mockStorefrontCtx = {
    environmentId: "aaaaaa",
    instanceId: "bbbbbb",
    environment: "Production",
    storeUrl: "https://example.com",
    websiteId: 333333,
    websiteCode: "website",
    storeId: 111111,
    storeCode: "magento",
    storeViewId: 222222,
    storeViewCode: "default",
    websiteName: "website",
    storeName: "magento",
    storeViewName: "default",
    baseCurrencyCode: "USD",
    storeViewCurrencyCode: "USD",
    storefrontTemplate: "Other",
};
```
