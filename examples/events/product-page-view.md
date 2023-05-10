## product-page-view

### 🤖 Intelligent strategies

-   Conversion tracking, data integrity
-   Trending
-   Viewed also viewed
-   Viewed also bought

### ⤴️ Publishing pages and conditions

-   PDP
    -   on render/view

### 🛄 Required contexts

`page`

`storefront`

`product`

### 🔧 Usage

```javascript
const mse = window.magentoStorefrontEvents;

/* set in application container */
// mse.context.page(pageCtx);
// mse.context.setStorefrontInstance(storefrontCtx);

/* set before firing event */
mse.context.setProduct(productCtx);

mse.publish.productPageView();
```
