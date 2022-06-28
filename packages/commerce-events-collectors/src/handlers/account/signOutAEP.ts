import { Event } from "@adobe/commerce-events-sdk/dist/types/types/events";

import { sendEvent } from "../../alloy";
import { BeaconSchema } from "../../types/aep";

const XDM_EVENT_TYPE = "userAccount.logout";
const aepHandler = async (event: Event): Promise<void> => {
    const { debugContext, customContext } = event.eventInfo;

    let payload: BeaconSchema;
    if (customContext) {
        // override payload on custom context
        payload = customContext as BeaconSchema;
    } else {
        payload = {};
    }

    payload.userAccount = {
        logout: 1,
    };

    payload._id = debugContext?.eventId;
    payload.eventType = XDM_EVENT_TYPE;
    sendEvent(payload);
};

export default aepHandler;
