import {
    setAdobeCommerceAEPSegmentCookies,
    clearAdobeCommerceAEPSegmentCookies,
} from "./handlers/browserCookieIntegration";
import { getSegmentIds } from "./handlers/alloyIntegration";

const GET_SEGMENT_IDS_FROM_ALLOY_INTERVAL = 300000; //5 minute
const MAX_SEGMENT_ID_SET_TIMES = 5; //set cookies 5 times max each session

let setSegmentIdsInterval: ReturnType<typeof setInterval> | undefined = undefined;
let setSegmentIdsCounter = 0;

const initialize = async () => {
    // need to clear any existing cookies just to avoid any conflicts
    clearAdobeCommerceAEPSegmentCookies();

    try {
        // need to call proxy service every set amount of time and retrieve updated segment information
        setSegmentIdsInterval = setInterval(setCookieWithSegmentIds, GET_SEGMENT_IDS_FROM_ALLOY_INTERVAL);

        //call alloy to get semgent ids the first time, then do it on a timely manner afterwards.
        const userSegmentIds = (await getSegmentIds()) || "";
        setAdobeCommerceAEPSegmentCookies(userSegmentIds);
    } catch (error) {
        console.warn("Error on getting segments: ", error);
    }
};

const setCookieWithSegmentIds = async () => {
    if (setSegmentIdsCounter >= MAX_SEGMENT_ID_SET_TIMES) {
        clearInterval(setSegmentIdsInterval);
    } else {
        setSegmentIdsCounter++;
        const userSegmentIds = (await getSegmentIds()) || "";
        setAdobeCommerceAEPSegmentCookies(userSegmentIds);
    }
};

initialize();
