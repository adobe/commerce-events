import { Event } from "@adobe/commerce-events-sdk";

import { sendEvent } from "../../alloy";
import { BeaconSchema } from "../../types/aep";

const XDM_EVENT_TYPE = "userAccount.createProfile";
const aepHandler = async (event: Event): Promise<void> => {
    const { debugContext, accountContext, customContext } = event.eventInfo;

    let payload: BeaconSchema;
    if (customContext && Object.keys(customContext as BeaconSchema).length !== 0) {
        // override payload on custom context
        payload = customContext as BeaconSchema;
    } else {
        payload = {
            person: {
                accountID: accountContext?.accountId,
                accountType: accountContext?.accountType,
            },
            personalEmail: {
                address: accountContext?.emailAddress,
            },
        };
    }

    payload.userAccount = {
        createProfile: 1,
    };

    payload._id = debugContext?.eventId;
    payload.eventType = XDM_EVENT_TYPE;

    sendEvent(payload);
};

export default aepHandler;
