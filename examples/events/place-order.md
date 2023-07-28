## initiate-checkout

### 🤖 Intelligent strategies

-   Bought also bought
-   Viewed also bought

### 📈 Reporting

-   Conversion rate (recs and search)

### ⤴️ Publishing pages and conditions

-   Checkout
    -   on complete checkout

### 🛄 Required contexts

`page`

`storefront`

`shoppingCart`

`order`

### 🔧 Usage

```javascript
const mse = window.magentoStorefrontEvents;
/* set in application container */
// mse.context.page(pageCtx);
// mse.context.setStorefrontInstance(storefrontCtx);

/* set before firing event */
mse.context.setShoppingCart(shoppingCartCtx);
mse.context.setOrder(orderCtx);

mse.publish.placeOrder();
```
