## open-cart

On first item in cart. Also used as `initiate-cart`.

### 🤖 Intelligent strategies

-   Conversion tracking, data integrity

### ⤴️ Publishing pages and conditions

-   PDP
    -   on first add to cart
-   PLP
    -   on first add to cart

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

mse.publish.openCart();
```
