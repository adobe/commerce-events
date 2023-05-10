## shopping-cart-view

### 🤖 Intelligent strategies

-   Conversion tracking, data integrity

### ⤴️ Publishing pages and conditions

-   Cart
    -   on view/render
-   Mini cart
    -   on view

### 🛄 Required contexts

`page`

`storefront`

`shoppingCart`

### 🔧 Usage

```javascript
const mse = window.magentoStorefrontEvents;

/* set in application container */
//   mse.context.page(pageCtx);
//   mse.context.setStorefrontInstance(storefrontCtx);

/* set before firing event */
mse.context.setShoppingCart(shoppingCartCtx);

mse.publish.shoppingCartView();
```
