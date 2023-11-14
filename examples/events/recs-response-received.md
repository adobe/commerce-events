## recs-response-received

### 🤖 Intelligent strategies

-   None

### ⤴️ Publishing pages and conditions

-   Recs carousel
    -   on API response received

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

mse.publish.recsRequestSent();
```
