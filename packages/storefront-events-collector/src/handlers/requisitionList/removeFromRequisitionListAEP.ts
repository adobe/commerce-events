import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { sendEvent } from "../../alloy";
import { BeaconSchema } from "../../types/aep";
import { createProductListItemsFromRequisitionListItems } from "../../utils/aep/requisitionList";

const XDM_EVENT_TYPE = "commerce.requisitionListRemovals";

/** Sends an event to aep with an addToCart payload */
const aepHandler = async (event: Event): Promise<void> => {
    const { requisitionListItemsContext, debugContext, customContext, requisitionListContext, storefrontInstanceContext } = event.eventInfo;

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
            productListItems: createProductListItemsFromRequisitionListItems(requisitionListItemsContext, storefrontInstanceContext),
        };
    }

    payload.commerce = payload.commerce || {};

    payload.commerce.requisitionListRemovals = {
        value: 1,
    };

    payload._id = debugContext?.eventId;
    payload.eventType = XDM_EVENT_TYPE;
    sendEvent(payload);
};

export default aepHandler;
