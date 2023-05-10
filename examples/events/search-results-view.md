## search-results-view

### 🤖 Intelligent strategies

-   Conversion tracking, data integrity
-   Trending
-   Most viewed
-   Viewed also viewed

### ⤴️ Publishing pages and conditions

-   Search bar
    -   on results view/render
-   Search results page (_search_ mode vs _category browse_ mode)
    -   on results view/render

### 🛄 Required contexts

`page`

`storefront`

`searchResults`

### 🔧 Usage

```javascript
const mse = window.magentoStorefrontEvents;

/* set in application container */
// mse.context.page(pageCtx);
// mse.context.setStorefrontInstance(storefrontCtx);

/* set before firing event */
mse.context.setSearchResults(searchResultsCtx);

mse.publish.searchResultsView("search-bar");
```
