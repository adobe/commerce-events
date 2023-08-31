import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { sendEvent } from "../../alloy";
import { getSegmentIds, setAdobeCommerceAEPSegmentCookies } from "../../segments";
import { BeaconSchema } from "../../types/aep";

const XDM_EVENT_TYPE = "web.webpagedetails.pageViews";

const aepHandler = async (event: Event): Promise<void> => {
    const { pageContext, debugContext, customContext } = event.eventInfo;

    let payload: BeaconSchema = {};
    if (customContext && Object.keys(customContext as BeaconSchema).length !== 0) {
        // override payload on custom context
        payload = customContext as BeaconSchema;
    }

    payload.web = payload.web || {};
    payload.web.webPageDetails = payload.web.webPageDetails || {};
    payload.web.webPageDetails.pageViews = { value: 1 };
    payload.web.webPageDetails.siteSection = payload.web.webPageDetails.siteSection || pageContext?.pageType;
    payload.web.webPageDetails.name = payload.web.webPageDetails.name || pageContext?.pageName;

    payload.web.webPageDetails.URL = window.document.URL;

    payload.web.webReferrer = {
        URL: window.document.referrer,
    };

    payload._id = debugContext?.eventId;
    payload.eventType = XDM_EVENT_TYPE;

    const response = await sendEvent(payload);

    // TODO: make sure context is set to use segments
    const userSegmentIds = getSegmentIds(response?.destinations);
    setAdobeCommerceAEPSegmentCookies(userSegmentIds);
};

export default aepHandler;
