## page-view

### 🤖 Intelligent strategies

-   All (needed for data integrity verification)

### ⤴️ Publishing pages and conditions

-   All
    -   on render/view

### 🛄 Required contexts

[`page`](./example-contexts/mock-page-context.md)

[`storefront`](./example-contexts/mock-storefront-context.md)

### 🔧 Usage

```javascript
const mse = window.magentoStorefrontEvents;

/* set in application container */
// mse.context.setStorefrontInstance(storefrontCtx);

/* set before firing event */
mse.context.setPage(pageCtx);

mse.publish.pageView();
```
