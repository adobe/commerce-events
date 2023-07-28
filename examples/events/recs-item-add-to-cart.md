## recs-item-add-to-cart

### 🤖 Intelligent strategies

-   Most added to cart

### 📈 Reporting

-   Click-through rate (recs)
-   Conversion rate

### ⤴️ Publishing pages and conditions

-   Recs carousel
    -   on product add to cart

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

mse.publish.recsItemAddToCartClick({ unitId });
```
