import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { sendEvent } from "../../alloy";
import { BeaconSchema } from "../../types/aep";
import { getDiscountAmount } from "../../utils/discount";

const XDM_EVENT_TYPE = "commerce.productListAdds";

/** Sends an event to aep with an addToCart payload */
const aepHandler = async (event: Event): Promise<void> => {
    // note: the shopping cart context does not include the updated product in the cart
    const { productContext, shoppingCartContext, debugContext, customContext } =
        event.eventInfo;

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
            },
            productListItems: [
                {
                    SKU: productContext.sku,
                    name: productContext.name,
                    priceTotal:
                        productContext.pricing?.specialPrice ??
                        productContext.pricing?.regularPrice,
                    currencyCode:
                        productContext.pricing?.currencyCode ?? undefined,
                    discountAmount: getDiscountAmount(productContext),
                },
            ],
        };
    }

    payload.commerce = payload.commerce || {};

    payload.commerce.productListAdds = {
        value: 1,
    };

    payload._id = debugContext?.eventId;
    payload.eventType = XDM_EVENT_TYPE;

    sendEvent(payload);
};

export default aepHandler;
