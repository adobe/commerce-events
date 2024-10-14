## Product context

### Used

-   product view
-   product add to cart

### Full schema and required fields

[Product schema](../../../packages/storefront-events-sdk/src/types/schemas/product.ts)

### Mock data

```javascript
const mockProductCtx = {
    productId: 1153,
    name: "Juno Jacket",
    sku: "WJ06-XS-Green",
    topLevelSku: "WJ06", // This is required in most cases and will be mandatory in future releases.
    categories: ["14", "15", "21"],
    productType: "configurable",  
    mainImageUrl: "https://example.com/product/image-wj06-xs-green.jpg",
    canonicalUrl: "https://example.com/juno-jacket.html?___store=default", //URL in current store
    pricing: {
        regularPrice: 19.99,
        minimalPrice: 10.99,
        maximalPrice: 24.99,
        currencyCode: "USD",
    },
};
```
