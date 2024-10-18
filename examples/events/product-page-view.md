## product-page-view

### 🤖 Intelligent strategies

-   Trending
-   Viewed also viewed
-   Viewed also bought

### ⤴️ Publishing pages and conditions

-   PDP
    -   on render/view

### 🛄 Required contexts

[`page`](./example-contexts/mock-page-context.md)

[`storefront`](./example-contexts/mock-storefront-context.md)

[`product`](./example-contexts/mock-product-context.md)

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
