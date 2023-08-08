import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { sendEvent } from "../../alloy";
import { BeaconSchema } from "../../types/aep";
import { createProductListItems } from "../../utils/aep/productListItems";
import { createCommerceScope } from "../../utils/aep/commerceScope";

const XDM_EVENT_TYPE = "commerce.productListViews";

/** shoppingCartView handler for AEP event */
const aepHandler = async (event: Event): Promise<void> => {
    const { shoppingCartContext, debugContext, storefrontInstanceContext, customContext } = event.eventInfo;

    let payload: BeaconSchema = {};
    if (customContext && Object.keys(customContext as BeaconSchema).length !== 0) {
        // override payload on custom context
        payload = customContext as BeaconSchema;
    }

    payload.commerce = payload.commerce || {};

    payload.commerce.cart = payload.commerce.cart || {};
    payload.commerce.cart.cartID = payload.commerce.cart.cartID || shoppingCartContext?.id;

    payload.productListItems = createProductListItems(
        payload.productListItems,
        shoppingCartContext,
        undefined,
        storefrontInstanceContext,
    );

    payload.commerce.productListViews = {
        value: 1,
    };

    payload.commerce.commerceScope = createCommerceScope(storefrontInstanceContext);

    payload._id = debugContext?.eventId;
    payload.eventType = XDM_EVENT_TYPE;

    sendEvent(payload);
};

export default aepHandler;
