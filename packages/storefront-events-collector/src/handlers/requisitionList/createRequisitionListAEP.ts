import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { sendEvent } from "../../alloy";
import { BeaconSchema } from "../../types/aep";
// import { createProductListItems } from "../../utils/aep/productListItems";

const XDM_EVENT_TYPE = "commerce.productListOpens";

const handler = async (event: Event): Promise<void> => {
    const { debugContext, requisitionListContext, customContext } = event.eventInfo;
    let payload: BeaconSchema;
    if (customContext && Object.keys(customContext as BeaconSchema).length !== 0) {
        // override payload on custom context
        payload = customContext as BeaconSchema;
    } else {
        payload = {
            commerce: {
                requisitionList: {
                    ID: requisitionListContext?.id,
                    name: requisitionListContext?.name,
                    description: requisitionListContext?.description
                },
            },
        };
    }

    payload.commerce = payload.commerce || {};

    payload.commerce.requisitionListOpens = {
        value: 1,
    };

    payload._id = debugContext?.eventId;
    payload.eventType = XDM_EVENT_TYPE;

    sendEvent(payload);
};

export default handler;
