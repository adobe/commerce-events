## Recommendation Unit context

### Used

-   recs-response-received
-   recs-unit-render
-   recs-unit-view
-   recs-item-click
-   recs-item-add-to-cart

### Full schema and required fields

[Recommendations schema](../../../packages/storefront-events-sdk/src/types/schemas/recommendations.ts

### Mock data

```javascript
const mockRecommendationUnitCtx = {
    backupsCount: 0,
    configType: "preconfigured",
    itemsCount: 2,
    name: "most-viewed",
    source: "api",
    unitId: "abc123",
    placement: "below-main-content",
    yOffsetTop: 100,
    yOffsetBottom: 1200,
    recType: "most-viewed",
};

const mockRecommendedItemsCtx = [
    {
        currencyCode: "USD",
        displayRank: 1,
        imageUrl: null,
        name: "first item",
        prices: {
            maximum: {
                final: 19.99,
                finalAdjustments: [
                    {
                        code: "coupon",
                        amount: 10,
                    },
                ],
                regular: 29.99,
                regularAdjustments: [],
            },
            minimum: {
                final: 19.99,
                finalAdjustments: [
                    {
                        code: "coupon",
                        amount: 10,
                    },
                ],
                regular: 29.99,
                regularAdjustments: [],
            },
        },
        serviceRank: 1,
        sku: "abc123",
        unitId: "abc123",
        url: "https://magento.com",
    },
    {
        currencyCode: "USD",
        displayRank: 2,
        imageUrl: null,
        name: "second item",
        prices: {
            maximum: {
                final: 9.99,
                finalAdjustments: [
                    {
                        code: "coupon",
                        amount: 10,
                    },
                ],
                regular: 19.99,
                regularAdjustments: [],
            },
            minimum: {
                final: 9.99,
                finalAdjustments: [
                    {
                        code: "coupon",
                        amount: 10,
                    },
                ],
                regular: 19.99,
                regularAdjustments: [],
            },
        },
        serviceRank: 2,
        sku: "def456",
        unitId: "abc123",
        url: "https://magento.com",
    },
];
```
