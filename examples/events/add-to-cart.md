## add-to-cart

### 🤖 Intelligent strategies

-   Most added to cart

### ⤴️ Publishing pages and conditions

-   PDP
    -   on add to cart
    -   on increase quantity in cart
-   PLP
    -   on add to cart
    -   on increase quantity in cart
-   Cart
    -   on increase quantity in cart

### 🛄 Required contexts

[`page`](./example-contexts/mock-page-context.md)

[`storefront`](./example-contexts/mock-storefront-context.md)

[`product`](./example-contexts/mock-product-context.md)

[`shoppingCart`](./example-contexts/mock-shopping-cart-context.md)

[`changedProducts`](./example-contexts/mock-changed-products-context.md)

### 🔧 Usage

```javascript
const mse = window.magentoStorefrontEvents;

/* set in application container */
// mse.context.page(pageCtx);
// mse.context.setStorefrontInstance(storefrontCtx);

/* set before firing event */
mse.context.setProduct(productCtx);
mse.context.setShoppingCart(shoppingCartCtx);
mse.context.setChangedProducts(changedProductsCtx);

mse.publish.addToCart();
```
