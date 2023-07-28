## recs-response-received

### 🤖 Intelligent strategies

-   None

### ⤴️ Publishing pages and conditions

-   Recs carousel
    -   on API response received

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

mse.publish.recsRequestSent();
```
