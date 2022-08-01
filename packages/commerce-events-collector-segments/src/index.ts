import { getAEPSegmentsFromProxyService } from "./handlers/apiIntegration";
import { setAdobeCommerceSegmentCookies } from "./handlers/browserCookieIntegration";
import { getECID } from "./handlers/alloyIntegration";

/**
 * Initialize the commerce-events-collector workflow
 */
const initialize = async () => {
    try {
        const ecid: string = (await getECID()) || "";
        const segmentMembershipIds: string = (await getAEPSegmentsFromProxyService(ecid)) || "";

        setAdobeCommerceSegmentCookies(segmentMembershipIds);
    } catch (error) {
        console.warn("Error on getting segments: ", error);
    }
};

initialize();
