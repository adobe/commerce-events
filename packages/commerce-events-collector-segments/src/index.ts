import {
    setAdobeCommerceAEPSegmentCookies,
    clearAdobeCommerceAEPSegmentCookies,
} from "./handlers/browserCookieIntegration";
import { getSegmentIds } from "./handlers/alloyIntegration";

const GET_SEGMENT_IDS_FROM_ALLOY_INTERVAL = 1000; //2 Second
const MAX_ALLOY_CHECK_RETRIES = 5; //check for alloy a limited amount of times before erroring out

let setSegmentIdsInterval: ReturnType<typeof setInterval> | undefined = undefined;
let setAlloyCheckCount = 0;

const initialize = async () => {
    // need to clear any existing cookies just to avoid any conflicts
    clearAdobeCommerceAEPSegmentCookies();

    setSegmentIdsInterval = setInterval(checkAlloyAndSetAEPSegmentMembership, GET_SEGMENT_IDS_FROM_ALLOY_INTERVAL);
};

const checkAlloyAndSetAEPSegmentMembership = async () => {
    if (window.hasOwnProperty("alloy")) {
        setCookieWithSegmentIds();
    } else {
        setAlloyCheckCount++;
        //alloy not found so wait and try again
        if (setAlloyCheckCount >= MAX_ALLOY_CHECK_RETRIES) {
            clearInterval(setSegmentIdsInterval);
        }
    }
};

const setCookieWithSegmentIds = async () => {
    const userSegmentIds = (await getSegmentIds()) || "";
    setAdobeCommerceAEPSegmentCookies(userSegmentIds);
    clearInterval(setSegmentIdsInterval);
};

initialize();
