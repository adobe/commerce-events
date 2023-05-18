## recs-item-click

### 🤖 Intelligent strategies

-   Conversion tracking, data integrity
-   Most clicked

### ⤴️ Publishing pages and conditions

-   Recs carousel
    -   on product click

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

mse.publish.recsItemClick({ unitId });
```
