import { Event } from "@adobe/commerce-events-sdk";
import { SelfDescribingJson, trackStructEvent } from "@snowplow/browser-tracker";
import { createProductFromCartItem } from "../../utils/product";
import { createProductCtx, createShoppingCartCtx } from "../../contexts";

const handler = (event: Event): void => {
    const { changedProductsContext, pageContext, productContext, shoppingCartContext } = event.eventInfo;
    changedProductsContext.items?.forEach((item) => {
        let productCtx;
        if(item.product.sku === productContext.sku){
            productCtx = createProductCtx(productContext);
        } else {
<<<<<<< HEAD
            productCtx = createProductFromCartItem(item)
=======
            productCtx = createProductCtx(item.product)
>>>>>>> main
        }
        const shoppingCartCtx = createShoppingCartCtx(shoppingCartContext);
    
        const context: Array<SelfDescribingJson> = [productCtx];
    
        if (shoppingCartCtx) {
            context.push(shoppingCartCtx);
        }
    
        trackStructEvent({
            category: "product",
            action: "add-to-cart",
            property: pageContext?.pageType,
            context,
        });
    });
};

export default handler;
