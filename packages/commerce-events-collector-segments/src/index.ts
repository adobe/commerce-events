import { getAEPSegmentsFromProxyService } from "src/handlers/apiIntegration";
import { setAdobeCommerceSegmentCookies } from "src/handlers/browserCookieIntegration";
import { getECID } from "src/handlers/alloyIntegration";

/**
 * Initialize the commerce-events-collector workflow
 */
const initialize = async () => {
    getECID()
        .then((ecid: string) => {
            getAEPSegmentsFromProxyService(ecid)
                .then((segmentMembershipIds: string) => {
                    setAdobeCommerceSegmentCookies(segmentMembershipIds)
                })
                .catch(error => {
                    console.error("Error on getting proxy service data; ", error);
                })
        })
        .catch(error => {
            console.error("Error on getting `ECID`: ", error);
        })
};

initialize();
