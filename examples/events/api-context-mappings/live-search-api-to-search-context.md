## Live Search API -> Search events mappings

All Live Search headless implementations must track Live Search [request](../search-request-sent.md) and [response](../recs-response-received.md) events for Intelligent Merchandising, conversion tracking, attributions, and performance dashboards to function properly.

Headless implementations can use the examples provided here to tie API requests and responses to request and response events.

Search Input context example [here](../example-contexts/mock-search-input-context.md).

Search Results context example [here](../example-contexts/mock-search-results-context.md).

**1. Set input context and generate request sent event**

```javascript
const searchUnitId = "custom-client-identifier"; // can be any

// searchRequestId in must the same in the input and results context for search actions to be properly tracked
const searchRequestId = uuidv4();

const filters = []; // can be any

const sort = []; // can be any

const searchInputUnit: SearchInputUnit = {
    searchUnitId,
    searchRequestId,
    queryTypes: ["products"],
    phrase, // search query phrase
    pageSize: 20, // can be any
    currentPage: 1, // can be any
    filter,
    sort,
};

const searchInputCtx = { units: [searchInputUnit] };

// set context
mse.context.setSearchInput(searchInputCtx);

// publish event
window.magentoStorefrontEvents?.publish.searchRequestSent(searchUnitId);
```

**2. Make API request**

```javascript
const response = await fetch(liveSearchAPIUrl, {
    method: "POST",
    headers: {
        /*...*/
    },
    body: {
        /*...*/
    },
});

const results = await response.json();
```

**3. Set results context and generate response received event**

```javascript
// create products
const products = results.items
    ? items.map((item, index) => ({
          name: item.product.name,
          sku: item.product.sku,
          url: item.product.canonical_url ?? "",
          imageUrl: item.product.image?.url ?? "",
          price: item.product.price_range.minimum_price.final_price.value,
          rank: index,
      }))
    : [];

// create facets
const facets = results.facets
    ? results.facets.map((facet) => ({
          attribute: facet.attribute,
          title: facet.title,
          type: facet.type || "PINNED",
          buckets: facet.buckets.map((bucket) => bucket),
      }))
    : [];

// create search result unit
const searchResultUnit: SearchResultUnit = {
    searchUnitId,
    searchRequestId, // must be searchRequestId from corresponding request
    products,
    categories: [],
    suggestions: [],
    page: results.page_info?.current_page || 1,
    perPage: results.page_info?.page_size || 6,
    facets,
};

const searchResultsCtx = { units: [searchResultUnit] };

// set context
mse.context.setSearchResults(searchResultsCtx);

// publish event
window.magentoStorefrontEvents?.publish.searchResponseReceived(this.searchUnitId);
```
