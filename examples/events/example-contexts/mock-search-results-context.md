## Search Results context

### Used

-   search-response-received
-   search-results-view
-   category-results-view
-   search-product-click
-   search-category-click

### Full schema and required fields

[Search Results schema](../../../packages/storefront-events-sdk/src/types/schemas/searchResults.ts)

**IMPORTANT** `searchUnitId` must match `searchUnitId` in request for the context to be processed by Commerce correctly.

### Mock data

```javascript
const mockSearchResults = {
    units: [
        {
            searchUnitId: "search-bar",
            searchRequestId: "abc123",
            executionTime: 378.39,
            products: [
                {
                    name: "Red Pants",
                    sku: "abc123",
                    url: "https://magento.com/red-pants",
                    imageUrl: "https://magento.com/red-pants.jpg",
                    price: 49.99,
                    rank: 1,
                },
            ],
            suggestions: [
                {
                    suggestion: "red pants",
                    rank: 1,
                },
            ],
            categories: [
                {
                    name: "Pants",
                    url: "https://magento.com/category/pants",
                    rank: 1,
                },
                {
                    name: "Bottoms",
                    url: "https://magento.com/category/bottoms",
                    rank: 2,
                },
            ],
            page: 1,
            perPage: 20,
            facets: [
                {
                    attribute: "size",
                    title: "Size",
                    type: "PINNED",
                    buckets: [
                        {
                            title: "S",
                            count: 4,
                        },
                        {
                            title: "M",
                            count: 12,
                        },
                        {
                            title: "L",
                            count: 9,
                        },
                    ],
                },
            ],
        },
    ],
};
```
