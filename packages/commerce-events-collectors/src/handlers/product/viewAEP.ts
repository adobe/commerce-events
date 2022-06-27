import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { sendEvent } from "../../alloy";
import { BeaconSchema, ProductListItem } from "../../types/aep";
import { getDiscountAmount } from "../../utils/discount";

const XDM_EVENT_TYPE = "commerce.productViews";

const aepHandler = async (event: Event): Promise<void> => {
    const { productContext, debugContext, customContext } = event.eventInfo;

    let payload: BeaconSchema;
    if (customContext) {
        // override payload on custom context
        payload = customContext as BeaconSchema;
    } else {
        const productListItem: ProductListItem = {
            SKU: productContext.sku,
            name: productContext.name,
            priceTotal:
                productContext.pricing?.specialPrice ??
                productContext.pricing?.regularPrice,
            currencyCode: productContext.pricing?.currencyCode ?? undefined,
            discountAmount: getDiscountAmount(productContext),
        };

        payload = {
            productListItems: [productListItem],
        };
    }

    payload.commerce = payload.commerce || {};

    payload.commerce.productViews = {
        value: 1,
    };

    payload._id = debugContext?.eventId;
    payload.eventType = XDM_EVENT_TYPE;

    sendEvent(payload);
};

export default aepHandler;
