## Product Recommendations API -> Recs events mappings

All Adobe Commerce Product Recommendations headless implementations must track Product Recommendations API [request](../recs-request-sent.md) and [response](../recs-response-received.md) events for recommendations, conversion tracking, attributions, and performance dashboards to function properly.

Headless implementations can use the examples provided here to tie API requests and responses to request and response events.

`Recommendations` context example [here](../example-contexts/mock-recommendations-context.md).

**1. Set up RecommendationsClient (Product Recs SDK)**

```javascript
const storefrontContext = mse.context.getStorefrontInstance();

const pageType = "CATEGORY"; // can be any PageType

const storefront = { ...storefrontContext, pageType };

const client = new RecommendationsClient(storefront);
```

**2. Generate `recsRequestSent` event (no special contexts required)**

```javascript
mse.publish.recsRequestSent({ pageContext: { pageType } });
```

**3. Make API request**

```javascript
const res = await client.fetchPreconfigured(/* props */);
```

**4. Set `Recommendations` context and generate `recsResponseReceived` event**

```javascript
const { data } = res;
mse.context.setRecommendations({ units: data.results });
mse.publish.recsResponseReceived();
```
