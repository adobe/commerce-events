import { getAEPSegmentsFromProxyService } from "./handlers/apiIntegration";
import { setAdobeCommerceSegmentCookies } from "./handlers/browserCookieIntegration";
import { getECID } from "./handlers/alloyIntegration";

const PROXY_SERVICE_CALL_INTERVAL = 60000; //1 minute

/**
 * Initialize the commerce-events-collector workflow
 */
const initialize = async () => {
    console.log("commerce-event-segmnets - initialized");
    try {
        const ecid: string = (await getECID()) || "";

        // need to call proxy service every set amount of time and retrieve updated segment information
        setInterval(callProxyService, PROXY_SERVICE_CALL_INTERVAL, ecid);

        //call the proxy service the first time, then do it on a timely manner afterwards.
        callProxyService(ecid);
    } catch (error) {
        console.warn("Error on getting segments: ", error);
    }
};

/**
 * Makes the proxy service call and saves that info to the browser cookies
 *
 * @param ecid - users profile id to be used to get the segment information
 */
const callProxyService = async (ecid: string) => {
    console.log("commerce-event-segmnets - proxy service called from timer");
    //call proxy service with ecid
    const segmentMembershipIds: string = (await getAEPSegmentsFromProxyService(ecid)) || "";

    //save the segment membership info out to the browser cookies
    setAdobeCommerceSegmentCookies(segmentMembershipIds);
};

initialize();
