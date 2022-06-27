import { EventForwarding } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import { EventForwardingContext } from "../types/contexts";

const createContext = (
    eventForwarding?: EventForwarding,
): EventForwardingContext => {
    const mse = window.magentoStorefrontEvents;
    const eventForwardingCtx =
        eventForwarding ?? mse.context.getEventForwarding();

    if (!eventForwardingCtx) {
        return {};
    }

    const context: EventForwardingContext = {
        aep: eventForwardingCtx.aep,
        commerce: eventForwardingCtx.commerce,
    };

    return context;
};

export default createContext;
