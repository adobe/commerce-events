## custom

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

TODO
