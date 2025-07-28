## Product context

> [!NOTE]  
> For simple, downloadable, and virtual products with no configurable options `topLevelSku` is the same as the product SKU.  For grouped, bundled, and configurable products `topLevelSku` is the parent product SKU of the associated item.

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
    topLevelSku: "WJ06",
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
