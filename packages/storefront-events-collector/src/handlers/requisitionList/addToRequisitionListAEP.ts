import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";
import { sendEvent } from "../../alloy";
import { BeaconSchema } from "../../types/aep";
import { createProductListItems } from "../../utils/aep/productListItems";
import { createRequisitionList } from "../../utils/aep/requisitionList";
import { createCommerceScope } from "../../utils/aep/commerceScope";

const XDM_EVENT_TYPE = "commerce.requisitionListAdds";

/** Sends an event to aep with an addToRequisitionList payload */
const handler = async (event: Event): Promise<void> => {
    const {
        accountContext,
        changedProductsContext,
        requisitionListContext,
        requisitionListItemsContext,
        orderPageContext,
        debugContext,
        customContext,
        storefrontInstanceContext,
    } = event.eventInfo;

    let payload: BeaconSchema = {};
    if (customContext && Object.keys(customContext as BeaconSchema).length !== 0) {
        // override payload on custom context
        payload = customContext as BeaconSchema;
    }

    payload.commerce = payload.commerce || {};
    payload.commerce.requisitionList = createRequisitionList(payload.commerce.requisitionList, requisitionListContext);

    const requisitionContext = requisitionListItemsContext || orderPageContext;

    payload.productListItems = createProductListItems(
        payload.productListItems,
        changedProductsContext,
        requisitionContext,
        storefrontInstanceContext,
    );
    payload.personalEmail = payload.personalEmail || {};
    payload.personalEmail.address = payload.personalEmail.address || accountContext?.emailAddress;

    payload.commerce.requisitionListAdds = {
        value: 1,
    };

    payload.commerce.commerceScope = createCommerceScope(storefrontInstanceContext);

    payload._id = debugContext?.eventId;
    payload.eventType = XDM_EVENT_TYPE;

    sendEvent(payload, event);
};

export default handler;
