import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";
import { SelfDescribingJson, trackStructEvent } from "@snowplow/browser-tracker";

import { createProductCtx, createShoppingCartCtx } from "../../contexts";

const handler = (event: Event): void => {
    const { changedProductsContext, pageContext, productContext, shoppingCartContext } = event.eventInfo;
    changedProductsContext.items?.forEach((item) => {
        let productCtx;
        if(item.product.sku === productContext.sku){
            productCtx = createProductCtx(productContext);
        } else {
            productCtx = createProductCtx(item.product)
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
