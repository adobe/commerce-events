## recs-unit-view

### 🤖 Intelligent strategies

-   Conversion tracking, data integrity
-   Trending
-   Most viewed
-   Viewed also viewed

### ⤴️ Publishing pages and conditions

-   Recs carousel
    -   on results view

### 🛄 Required contexts

`page`

`storefront`

`recommendations`

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
