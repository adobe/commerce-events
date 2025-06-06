## Shopping Cart context

### Used

-   product-view
-   add-to-cart
-   remove-from-cart
-   initiate-cart
-   view-cart
-   initiate-checkout
-   complete-checkout

### Full schema and required fields

[Shopping Cart schema](../../../packages/storefront-events-sdk/src/types/schemas/shoppingCart.ts)

### Mock data

```javascript
const mockShoppingCartCtx = {
    id: "1",
    items: [
        {
            canApplyMsrp: false,
            formattedPrice: "$20.00",
            id: "aaaaaa",
            prices: {
                price: {
                    value: 20.0,
                    currency: "USD",
                    regularPrice: 20.0,
                },
            },
            product: mockProductCtx,
            quantity: 2,
        },
    ],
    prices: {
        subtotalExcludingTax: {
            value: 40.00,
            currency: "USD",
        },
        subtotalIncludingTax: {
            value: 46.46,
            currency: "USD",
        },
    },
    totalQuantity: 1, 
    possibleOnepageCheckout: false,
    giftMessageSelected: false,
    giftWrappingSelected: false,
};
```
