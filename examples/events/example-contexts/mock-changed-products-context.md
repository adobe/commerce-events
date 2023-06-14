## Changed Products context

Represent product changes in cart.

### Used

-   add-to-cart
-   remove-from-cart

### Full schema and required fields

[Changed Products schema](../../../packages/storefront-events-sdk/src/types/schemas/changedProducts.ts)

### Mock data

```javascript
{
    items: [
        {
            canApplyMsrp: false,
            formattedPrice: "$20.00",
            id: "aaaaaa",
            prices: {
                price: {
                    value: 20.0,
                    currency: "USD",
                },
            },
            product: mockProductCtx,
            configurableOptions: [],
            quantity: 1,
        },
        {
            canApplyMsrp: false,
            formattedPrice: "$50.00",
            id: "cccccc",
            prices: {
                price: {
                    value: 50.0,
                    currency: "USD",
                },
            },
            product: {
                productId: 222222,
                name: "Hoodie",
                sku: "h001",
                pricing: {
                    regularPrice: 50.0,
                    minimalPrice: 50.0,
                    maximalPrice: 50.0,
                    currencyCode: "USD",
                },
            },
            configurableOptions: [],
            quantity: 1,
        },
    ],
}
```
