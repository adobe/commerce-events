## event overrides

For any event with a set `customContext`, the collector overrides joins fields set in the relevant contexts with fields in `customContext`. The use case for overrides is when a developer wants to reuse and extend contexts set by other parts of the page in already supporte events.

Event overrides are only applicable when forwarding to AEP. They are not applied to Adobe Commerce and Sensei analytics events. Additional info in [README](../../packages/storefront-events-collector/README.md)

### 🔧 Usage

```javascript
const mse = window.magentoStorefrontEvents;

mse.publish.productPageView(customCtx);
```

### Example 1 - adding categories product

```javascript
magentoStorefrontEvents.publish.productPageView({
    productListItems: [
        {
            productCategories: [
                {
                    categoryID: "cat_15",
                    categoryName: "summer pants",
                    categoryPath: "pants/mens/summer",
                },
            ],
        },
    ],
});
```

### Example 2 - adding custom context before publishing event

```javascript
const mse = window.magentoStorefrontEvents;

mse.context.setCustom({
  productListItems: [
    {
      productCategories: [
        {
          categoryID: "cat_15",
          categoryName: "summer pants",
          categoryPath: "pants/mens/summer",
        },
      ],
    },
  ],
});

mse.publish.productPageView();
```

### Example 3 - the custom context set in the publisher overwrites the custom context previously set in ACDL.

In this example page view event will have **Custom Page Name 2** in `web.webPageDetails.name` field

```javascript
const mse = window.magentoStorefrontEvents;

mse.context.setCustom({
  web: {
    webPageDetails: {
      name: 'Custom Page Name 1'
    },
  },
});

mse.publish.pageView({
  web: {
    webPageDetails: {
      name: 'Custom Page Name 2'
    },
  },
});
```
