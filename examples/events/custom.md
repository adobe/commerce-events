## custom

Publishing a custom event writes the custom event to the `adobeDataLayer`.

If AEP data collection is enabled on the Storefront Event Collector, custom events are forwarded to DX as described [here](https://experienceleague.adobe.com/docs/commerce-merchant-services/experience-platform-connector/event-forwarding/custom-events.html?lang=en).

If AEP data collection is not enabled, clients can configure [Adobe Experience Platform Tags](https://experienceleague.adobe.com/docs/commerce-merchant-services/experience-platform-connector/event-forwarding/using-tags.html?lang=en) to read custom events from the data layer and forward to Adobe DX.

Custom events are not forwarded to Adobe Commerce and Sensei analytics and aren't used in intelligent strategies calculatiions.

### 🤖 Intelligent strategies

None

### ⤴️ Publishing pages and conditions

No restrictions

### 🛄 Required contexts

-   no contexts are required but it's recommended that `customContext` is set
-   `customContext` data is the only data forwarded to DX for custom events

### 🔧 Usage

```javascript
const mse = window.magentoStorefrontEvents;

mse.context.setCustom(customCtx);

mse.publish.custom();
```

### Example

Custom event - save for later event.

```javascript
mse.publish.custom({
    commerce: {
        saveForLaters: {
            value: 1,
        },
    },
});
```
