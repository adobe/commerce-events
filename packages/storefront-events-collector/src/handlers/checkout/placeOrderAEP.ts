import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { sendEvent } from "../../alloy";
import { BeaconSchema } from "../../types/aep";
import { createOrder } from "../../utils/aep/order";
import { createProductListItems } from "../../utils/aep/productListItems";
import { createCommerceScope } from "../../utils/aep/commerceScope";

const XDM_EVENT_TYPE = "commerce.purchases";

/** Sends an event to aep with a checkout complete payload */
const aepHandler = async (event: Event): Promise<void> => {
    const {
        accountContext,
        storefrontInstanceContext,
        orderContext,
        shoppingCartContext,
        debugContext,
        customContext,
    } = event.eventInfo;

    let payload: BeaconSchema = {};
    if (customContext && Object.keys(customContext as BeaconSchema).length !== 0) {
        // override payload on custom context
        payload = customContext as BeaconSchema;
    }

    payload.commerce = payload.commerce || {};

    payload.commerce.order = createOrder(payload.commerce.order, orderContext, storefrontInstanceContext);
    payload.commerce.promotionID = payload.commerce.promotionID || orderContext?.appliedCouponCode;
    payload.commerce.shipping = payload.commerce.shipping || {};
    payload.commerce.shipping.shippingMethod =
        payload.commerce.shipping.shippingMethod || orderContext?.shipping?.shippingMethod;
    payload.commerce.shipping.shippingAmount =
        payload.commerce.shipping.shippingAmount || Number(orderContext?.shipping?.shippingAmount) || 0;

    payload.personalEmail = payload.personalEmail || {};
    payload.personalEmail.address = payload.personalEmail.address || accountContext?.emailAddress;

    payload.productListItems = createProductListItems(
        payload.productListItems,
        shoppingCartContext,
        undefined,
        storefrontInstanceContext,
    );

    payload.commerce.purchases = {
        value: 1,
    };

    payload.commerce.commerceScope = createCommerceScope(storefrontInstanceContext);

    payload._id = debugContext?.eventId;
    payload.eventType = XDM_EVENT_TYPE;

    sendEvent(payload);
};

export default aepHandler;
