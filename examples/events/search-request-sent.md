## search-request-sent

### 🤖 Intelligent strategies

-   None

### 📈 Reporting

-   Avg. click position
-   Unique searches
-   Popular searches
-   Zero results searches
-   Zero results rate

### ⤴️ Publishing pages and conditions

-   Search bar
    -   on API request sent
-   Browse/Search results page
    -   on API request sent

### 🛄 Required contexts

`page`

`storefront`

`searchInput`

### 🔧 Usage

```javascript
const mse = window.magentoStorefrontEvents;

/* set in application container */
// mse.context.page(pageCtx);
// mse.context.setStorefrontInstance(storefrontCtx);

/* set before firing event */
mse.context.setSearchInput(searchInputCtx);

mse.publish.searchRequestSent("search-bar");
```
