## Search input context

### Used

-   search-request-sent

### Mock data

```javascript
const mockSearchInput = {
    units: [
        {
            searchUnitId: "search-bar",
            searchRequestId: "abc123",
            queryTypes: ["products"],
            phrase: "red pants",
            currentPage: 1,
            pageSize: 20,
            filter: [
                {
                    attribute: "size",
                    eq: "small",
                },
                {
                    attribute: "category",
                    in: ["bottoms", "mens"],
                },
                {
                    attribute: "price",
                    range: { from: 19.99, to: 49.99 },
                },
            ],
            sort: [
                {
                    attribute: "relevance",
                    direction: "DESC",
                },
            ],
        },
    ],
};
```
