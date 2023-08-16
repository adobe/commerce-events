import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { sendEvent } from "../../alloy";
import { BeaconSchema } from "../../types/aep";
import { createRequisitionList } from "../../utils/aep/requisitionList";
import { createProductListItems } from "../../utils/aep/productListItems";
import { createCommerceScope } from "../../utils/aep/commerceScope";

const XDM_EVENT_TYPE = "commerce.requisitionListRemovals";

/** Sends an event to aep with an addToCart payload */
const aepHandler = async (event: Event): Promise<void> => {
    const {
        accountContext,
        requisitionListItemsContext,
        debugContext,
        customContext,
        requisitionListContext,
        storefrontInstanceContext,
    } = event.eventInfo;

    let payload: BeaconSchema = {};
    if (customContext && Object.keys(customContext as BeaconSchema).length !== 0) {
        // override payload on custom context
        payload = customContext as BeaconSchema;
    }

    payload.commerce = payload.commerce || {};
    payload.commerce.requisitionList = createRequisitionList(payload.commerce.requisitionList, requisitionListContext);

    // TODO
    payload.productListItems = createProductListItems(
        payload.productListItems,
        undefined,
        requisitionListItemsContext,
        storefrontInstanceContext,
    );

    payload.personalEmail = payload.personalEmail || {};
    payload.personalEmail.address = payload.personalEmail.address || accountContext?.emailAddress;

    payload.commerce.requisitionListRemovals = {
        value: 1,
    };

    payload.commerce.commerceScope = createCommerceScope(storefrontInstanceContext);

    payload._id = debugContext?.eventId;
    payload.eventType = XDM_EVENT_TYPE;
    sendEvent(payload);
};

export default aepHandler;
