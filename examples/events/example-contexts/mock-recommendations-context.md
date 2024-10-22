## Recommendation Unit context

### Used

-   recs-response-received
-   recs-unit-render
-   recs-unit-view
-   recs-item-click
-   recs-item-add-to-cart

### Full schema and required fields

[Recommendations schema](../../../packages/storefront-events-sdk/src/types/schemas/recommendations.ts)

### Mock data

```javascript
const Recommendations = {
    units: [
        {
            unitId: "abc123",
            unitName: "Most Viewed",
            unitType: "primary",
            searchTime: 7,
            totalProducts: 2,
            primaryProducts: 2,
            backupProducts: 0,
            pagePlacement: "below-main-content",
            typeId: "most-viewed",
            yOffsetTop: 100,
            yOffsetBottom: 1200,
            products: [
                {
                    rank: 1,
                    score: 0,
                    sku: "MSH06",
                    name: "Lono Yoga Short",
                    productId: 101,
                    type: "configurable",
                    visibility: "Catalog, Search",
                    categories: [
                        "men/bottoms-men",
                        "men/bottoms-men/shorts-men",
                        "collections/yoga-new"
                    ],
                    weight: 0,
                    currency: "USD",
                    image: [
                        {
                            label: "",
                            url: "//example.com/media/msh06-gray_main_6.jpg"
                        }
                    ],
                    url: "//example.com/lono-yoga-short.html",
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
                    queryType: "primary"
                },
                {
                    rank: 2,
                    score: 0,
                    sku: "24-WG084",
                    name: "Sprite Foam Yoga Brick",
                    productId: 215,
                    type: "simple",
                    visibility: "Catalog, Search",
                    categories: [
                        "sport/yoga",
                        "collections/yoga-new"
                    ],
                    weight: 0,
                    currency: "USD",
                    image: [
                        {
                            label: "",
                            url: "//example.com/media/luma-yoga-brick.jpg"
                        }
                    ],
                    url: "//example.com/sprite-foam-yoga-brick.html",
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
                    queryType: "primary"
                },
            ]
        }
    ]
};
```
