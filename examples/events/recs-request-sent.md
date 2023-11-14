## recs-request-sent

### 🤖 Intelligent strategies

-   None

### ⤴️ Publishing pages and conditions

-   Recs carousel
    -   on API request sent

### 🛄 Required contexts

[`page`](./example-contexts/mock-page-context.md)

[`storefront`](./example-contexts/mock-storefront-context.md)

### 🔧 Usage

```javascript
const mse = window.magentoStorefrontEvents;

/* set in application container */
// mse.context.page(pageCtx);
// mse.context.setStorefrontInstance(storefrontCtx);

mse.publish.recsRequestSent();
```
