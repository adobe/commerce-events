## Order context

### Used

-   place-order

### Full schema and required fields

[Order schema](../../../packages/storefront-events-sdk/src/types/schemas/order.ts)

### Mock data

```javascript
const mockOrder = {
    appliedCouponCode: "",
    email: "example@email.com",
    grandTotal: 69.98,
    orderId: 111111,
    orderType: "checkout",
    otherTax: 0.0,
    paymentMethodCode: "credit card",
    paymentMethodName: "visa",
    payments: [
        {
            paymentMethodCode: "credit card",
            paymentMethodName: "visa",
            total: 30,
        },
        {
            paymentMethodCode: "cash",
            paymentMethodName: "cash",
            total: 39.98,
        },
    ],
    salesTax: 0.0,
    subtotalExcludingTax: 69.98,
    subtotalIncludingTax: 69.98,
    shipping: {
        shippingAmount: 5.99,
        shippingMethod: "ground",
    },
};
```
