## recs-request-sent

### 🤖 Intelligent strategies

-   Conversion tracking, data integrity

### ⤴️ Publishing pages and conditions

-   Recs carousel
    -   on API request sent

### 🛄 Required contexts

`page`

`storefront`

### 🔧 Usage

```javascript
const mse = window.magentoStorefrontEvents;

/* set in application container */
// mse.context.page(pageCtx);
// mse.context.setStorefrontInstance(storefrontCtx);

mse.publish.recsRequestSent();
```
