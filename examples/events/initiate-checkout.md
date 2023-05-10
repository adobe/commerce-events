## initiate-checkout

### 🤖 Intelligent strategies

-   Conversion tracking, data integrity

### ⤴️ Publishing pages and conditions

-   Mini cart
    -   on initiate checkout
-   Cart
    -   on initiate checkout

### 🛄 Required contexts

`page`

`storefront`

`shoppingCart`

### 🔧 Usage

```javascript
const mse = window.magentoStorefrontEvents;

/* set in application container */
// mse.context.page(pageCtx);
// mse.context.setStorefrontInstance(storefrontCtx);

/* set before firing event */
mse.context.setShoppingCart(shoppingCartCtx);

mse.publish.initiateCheckout();
```
