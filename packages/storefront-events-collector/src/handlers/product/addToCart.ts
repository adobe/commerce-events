import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";
import { SelfDescribingJson, trackStructEvent } from "@snowplow/browser-tracker";

import { createProductCtx, createShoppingCartCtx } from "../../contexts";

const handler = (event: Event): void => {
    const { changedProductsContext, pageContext, productContext, shoppingCartContext } = event.eventInfo;
    // console.log("CHANGED PRODUCTS:");
    // console.log(changedProductsContext.items);
    // console.log("PRODUCT CONTEXT:");
    // console.log(productContext);
    changedProductsContext.items?.forEach((item) => {
        let productCtx;
        if(item.product.sku === productContext.sku){
            productCtx = createProductCtx(productContext);
        } else {
            productCtx = createProductCtx(item.product)
        }
        console.log(productCtx);
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
