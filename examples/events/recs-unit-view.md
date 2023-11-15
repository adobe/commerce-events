## recs-unit-view

### 🤖 Intelligent strategies

-   Trending
-   Most viewed
-   Viewed also viewed

### ⤴️ Publishing pages and conditions

-   Recs carousel
    -   on results view

### 🛄 Required contexts

[`page`](./example-contexts/mock-page-context.md)

[`storefront`](./example-contexts/mock-storefront-context.md)

[`recommendations`](./example-contexts/mock-recommendations-context.md)

### 🔧 Usage

```javascript
const mse = window.magentoStorefrontEvents;

/* set in application container */
// mse.context.page(pageCtx);
// mse.context.setStorefrontInstance(storefrontCtx);

/* set before firing event */
mse.context.setRecommendations(recommendationsCtx);

mse.publish.recsUnitView({ unitId });
```
