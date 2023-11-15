## category-results-view

### 🤖 Intelligent strategies

-   Trending
-   Most viewed
-   Viewed also viewed

### ⤴️ Publishing pages and conditions

-   Product listing page page (_category browse_ mode vs _search_ mode)
    -   on results view/render

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

mse.publish.categoryResultsView("search-bar");
```
