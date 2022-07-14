import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { sendEvent } from "../../alloy";
import { BeaconSchema } from "../../types/aep";

const XDM_EVENT_TYPE = "userAccount.login";
const aepHandler = async (event: Event): Promise<void> => {
    const { debugContext, accountContext, customContext } = event.eventInfo;

    let payload: BeaconSchema;
    if (customContext) {
        // override payload on custom context
        payload = customContext as BeaconSchema;
    } else {
        payload = {
            person: {
                accountID: accountContext?.accountId,
                accountType: accountContext?.accountType,
                personalEmailID: accountContext?.emailAddress,
            },
            personalEmail: {
                address: accountContext?.emailAddress,
            },
        };
    }

    payload.userAccount = {
        login: 1,
    };

    payload._id = debugContext?.eventId;
    payload.eventType = XDM_EVENT_TYPE;

    sendEvent(payload);
};

export default aepHandler;
