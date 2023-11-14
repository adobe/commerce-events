## search-product-click

### 🤖 Intelligent strategies

-   Conversion tracking, data integrity
-   Most clicked

### 📈 Reporting

-   Avg. click position
-   Click-through rate
-   Conversion rate

### ⤴️ Publishing pages and conditions

-   Search bar
    -   on product click
-   Search results page
    -   on product click

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

mse.publish.searchProductClick("search-bar", { productId });
```
