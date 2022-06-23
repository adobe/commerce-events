import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";
import {
    SelfDescribingJson,
    trackStructEvent,
} from "@snowplow/browser-tracker";

import { createShoppingCartCtx } from "../../contexts";

const handler = (event: Event): void => {
    const { pageContext, orderContext, shoppingCartContext } = event.eventInfo;

    const shoppingCartCtx = createShoppingCartCtx(shoppingCartContext);

    const context: Array<SelfDescribingJson> = [];

    if (shoppingCartCtx) {
        context.push(shoppingCartCtx);
    }

    trackStructEvent({
        category: "checkout",
        action: "place-order",
        label: orderContext?.orderId.toString(),
        property: pageContext?.pageType,
        context,
    });
};

export default handler;
