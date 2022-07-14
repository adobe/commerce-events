import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { sendEvent } from "../../alloy";
import { BeaconSchema } from "../../types/aep";

const XDM_EVENT_TYPE = "web.webpagedetails.pageViews";

const aepHandler = async (event: Event): Promise<void> => {
    const { pageContext, debugContext, customContext } = event.eventInfo;

    let payload: BeaconSchema;
    if (customContext) {
        // override payload on custom context
        payload = customContext as BeaconSchema;
    } else {
        payload = {
            web: {
                webPageDetails: {
                    pageViews: {
                        value: 1,
                    },
                    siteSection: pageContext.pageType,
                    name: pageContext.pageName,
                },
            },
        };
    }

    payload._id = debugContext?.eventId;
    payload.eventType = XDM_EVENT_TYPE;

    sendEvent(payload);
};

export default aepHandler;
