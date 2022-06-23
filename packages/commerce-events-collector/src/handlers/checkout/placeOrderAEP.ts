import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { sendEvent } from "../../alloy";
import { BeaconSchema } from "../../types/aep";
import { createOrder } from "../../utils/aep/order";
import { createProductListItems } from "../../utils/aep/productListItems";

const XDM_EVENT_TYPE = "commerce.order";

/** Sends an event to aep with a checkout complete payload */
const aepHandler = async (event: Event): Promise<void> => {
    const {
        storefrontInstanceContext,
        orderContext,
        shoppingCartContext,
        debugContext,
        customContext,
    } = event.eventInfo;

    let payload: BeaconSchema;
    if (customContext) {
        // override payload on custom context
        payload = customContext as BeaconSchema;
    } else {
        payload = {
            commerce: {
                order: createOrder(orderContext, storefrontInstanceContext),
                promotionID: orderContext.appliedCouponCode,
                shipping: {
                    shippingMethod: orderContext.shipping?.shippingMethod,
                    shippingAmount:
                        Number(orderContext.shipping?.shippingAmount) || 0,
                },
            },
            productListItems: createProductListItems(
                shoppingCartContext,
                storefrontInstanceContext,
            ),
        };
    }

    payload.commerce = payload.commerce || {};

    payload.commerce.purchases = {
        value: 1,
    };

    payload._id = debugContext?.eventId;
    payload.eventType = XDM_EVENT_TYPE;

    sendEvent(payload);
};

export default aepHandler;
