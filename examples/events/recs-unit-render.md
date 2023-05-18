## recs-unit-render

### 🤖 Intelligent strategies

-   Conversion tracking, data integrity

### ⤴️ Publishing pages and conditions

-   Recs carousel
    -   on results rendered

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

mse.publish.recsUnitRender({ unitId });
```
