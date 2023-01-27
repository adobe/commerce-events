import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { sendEvent } from "../../alloy";
import { getSegmentIds, setAdobeCommerceAEPSegmentCookies } from "../../segments";
import { BeaconSchema } from "../../types/aep";
import { AdobeClientDataLayer } from "@adobe/commerce-events-sdk";

const XDM_EVENT_TYPE = "web.webpagedetails.pageViews";

const aepHandler = async (event: Event): Promise<void> => {
    const { pageContext, debugContext, customContext } = event.eventInfo;

    let payload: BeaconSchema;
    if (customContext && Object.keys(customContext as BeaconSchema).length !== 0) {
        // override payload on custom context
        payload = customContext as BeaconSchema;
    } else {
        payload = {
            web: {
                webPageDetails: {
                    pageViews: {
                        value: 1,
                    },
                    siteSection: pageContext?.pageType,
                    name: pageContext?.pageName,
                },
            },
        };
    }

    payload._id = debugContext?.eventId;
    payload.eventType = XDM_EVENT_TYPE;

    const response = await sendEvent(payload);

    // TODO: make sure context is set to use segments
    const userSegmentIds = getSegmentIds(response?.destinations);
    setAdobeCommerceAEPSegmentCookies(userSegmentIds);

    // this is a workaround to push the segments data onto the acdl.
    // we need to fix this asap to conform to the normal way of doing this.
    setTimeout(() => {
        window.adobeDataLayer.push((acdl: AdobeClientDataLayer) => {
            acdl.push({
                event: "userSegmentIds",
                eventInfo: { userSegmentIds },
            });
        });
    }, 10000);
};

export default aepHandler;
