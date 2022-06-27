import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { sendEvent } from "../../alloy";
import { BeaconSchema } from "../../types/aep";
import { createProductListItems } from "../../utils/aep/productListItems";

const XDM_EVENT_TYPE = "commerce.productListViews";

/** shoppingCartView handler for AEP event */
const aepHandler = async (event: Event): Promise<void> => {
    const {
        shoppingCartContext,
        debugContext,
        storefrontInstanceContext,
        customContext,
    } = event.eventInfo;

    let payload: BeaconSchema;
    if (customContext) {
        // override payload on custom context
        payload = customContext as BeaconSchema;
    } else {
        payload = {
            commerce: {
                cart: {
                    cartID: shoppingCartContext.id,
                },
                productListViews: {
                    value: 1,
                },
            },
            productListItems: createProductListItems(
                shoppingCartContext,
                storefrontInstanceContext,
            ),
        };
    }

    payload.commerce = payload.commerce || {};

    payload._id = debugContext?.eventId;
    payload.eventType = XDM_EVENT_TYPE;

    sendEvent(payload);
};

export default aepHandler;
