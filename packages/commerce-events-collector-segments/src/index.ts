import { getAEPSegmentsFromProxyService } from "./handlers/apiIntegration";
import { setAdobeCommerceSegmentCookies } from "./handlers/browserCookieIntegration";
import { getECID } from "./handlers/alloyIntegration";
import { AlloyIdentity } from "./aep/types";

const PROXY_SERVICE_CALL_INTERVAL = 60000; //1 minute

const OLD_FLOW = false;

/**
 * Initialize the commerce-events-collector workflow
 */
const initialize = async () => {
    initializeGetAEPSegements();

    if (OLD_FLOW) {
        try {
            const ecid: string = (await getECID()) || "";

            // need to call proxy service every set amount of time and retrieve updated segment information
            setInterval(callProxyService, PROXY_SERVICE_CALL_INTERVAL, ecid);

            //call the proxy service the first time, then do it on a timely manner afterwards.
            callProxyService(ecid);
        } catch (error) {
            console.warn("Error on getting segments: ", error);
        }
    }
};

/**
 * Makes the proxy service call and saves that info to the browser cookies
 *
 * @param ecid - users profile id to be used to get the segment information
 */
const callProxyService = async (ecid: string) => {
    //call proxy service with ecid
    const segmentMembershipIds: string = (await getAEPSegmentsFromProxyService(ecid)) || "";

    //save the segment membership info out to the browser cookies
    setAdobeCommerceSegmentCookies(segmentMembershipIds);
};

const initializeGetAEPSegements = async () => {
    console.log("initializeGetAEPSegements");

    // let retry = true;
    const ALLOY_COMMAND = "sendEvent"; //"getIdentity"

    if (window.hasOwnProperty("alloy")) {
        console.log("Alloy is available.");

        window.alloy(ALLOY_COMMAND).then((result: AlloyIdentity) => {
            console.log("result: ", result);
            const alloyDestinationsSegments = result?.destinations[0].segments;
            const segmentList = alloyDestinationsSegments.map((segmentItem) => segmentItem.id);

            console.log("alloyDestinationsSegments: ", alloyDestinationsSegments);
            console.log("segmentList: ", segmentList);

            setAdobeCommerceSegmentCookies(segmentList.join(",") || "");
        });
    }
};

initialize();
