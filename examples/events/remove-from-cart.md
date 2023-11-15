## remove-from-cart

### 🤖 Intelligent strategies

-   None

### ⤴️ Publishing pages and conditions

-   Cart
    -   on remove from cart
    -   on decrease quantity in cart

### 🛄 Required contexts

[`page`](./example-contexts/mock-page-context.md)

[`storefront`](./example-contexts/mock-storefront-context.md)

[`shoppingCart`](./example-contexts/mock-shopping-cart-context.md)

[`changedProducts`](./example-contexts/mock-changed-products-context.md)

### 🔧 Usage

```javascript
const mse = window.magentoStorefrontEvents;

/* set in application container */
// mse.context.page(pageCtx);
// mse.context.setStorefrontInstance(storefrontCtx);

/* set before firing event */
mse.context.setShoppingCart(shoppingCartCtx);
mse.context.setChangedProducts(changedProductsCtx);

mse.publish.removeFromCart();
```
