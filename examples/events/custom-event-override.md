## event overrides

For any event with a set `customContext`, the collector overrides joins fields set in the relevant contexts with fields in `customContext`. The use case for overrides is when a developer wants to reuse and extend contexts set by other parts of the page in already supporte events.

Event overrides are only applicable when forwarding to AEP. They are not applied to Adobe Commerce and Sensei analytics events. Additional info in [README](../../packages/storefront-events-collector/README.md)

### 🔧 Usage

```javascript
const mse = window.magentoStorefrontEvents;

mse.publish.productPageView(customCtx);
```

### Example - adding categories product

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
