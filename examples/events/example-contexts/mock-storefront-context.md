## Storefront context 

> [!NOTE]
> If you are using Adobe Commerce Optimizer (ACO), the `viewId` and `locale` fields are required in the storefront context. These correspond to the `AC-View-Id` and `AC-Source-Locale` header values respectively. 
> 
> For more information on these headers, see the [Adobe Commerce Services API documentation](https://developer.adobe.com/commerce/services/optimizer/merchandising-services/using-the-api/#headers).

> [!TIP] 
> If you are not using ACO, these fields can be left blank or null.

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
    viewId: "12345678-1234-1234-1234-123456789abc"
};
```
