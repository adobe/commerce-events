## search-product-click

### 🤖 Intelligent strategies

-   None

### ⤴️ Publishing pages and conditions

-   Search bar
    -   on category results click

### 🛄 Required contexts

[`page`](./example-contexts/mock-page-context.md)

[`storefront`](./example-contexts/mock-storefront-context.md)

[`searchResults`](./example-contexts/mock-search-results-context.md)

### 🔧 Usage

```javascript
const mse = window.magentoStorefrontEvents;

/* set in application container */
// mse.context.page(pageCtx);
// mse.context.setStorefrontInstance(storefrontCtx);

/* set before firing event */
mse.context.setSearchResults(searchResultsCtx);

mse.publish.searchCategoryClick("search-bar", { categoryId });
```
