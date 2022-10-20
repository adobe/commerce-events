/**
 * The name of the cookie to save so that adobe commerce can read in the segment information.
 *
 * Should match up with Github located at:
 * @link https://github.com/magento-commerce/segments-service/blob/main/Segment/Model/SegmentResolver.php#L13
 */
const ADOBE_COMMERCE_AEP_SEGMENT_MEMBERSHIP_COOKIE_NAME = "aep-segments-membership";

/**
 * Clear the browsers cookies set for Adobe Commerce AEP Segments
 */
export const clearAdobeCommerceAEPSegmentCookies = () => {
    document.cookie = `${ADOBE_COMMERCE_AEP_SEGMENT_MEMBERSHIP_COOKIE_NAME}=; expires=Fri, 31 Dec 1999 23:59:59 GMT;`;
};

/**
 * Set the browser cookies with the returned segmentMembershipIds from the proxy service
 *
 * @note for now we'll keep the `expires` param for cookies set to default.
 *
 * @param userSegmentIds comma delimited string of `segmentMembershipIds` that is returned from the proxy service
 */
export const setAdobeCommerceAEPSegmentCookies = (userSegmentIds = "") => {
    //again, note that no expiration is set, so this will be a session cookie
    document.cookie = `${ADOBE_COMMERCE_AEP_SEGMENT_MEMBERSHIP_COOKIE_NAME}=${userSegmentIds};path=/`;
};

// i'm not sure the shape of this object so i'm just typing as any to avoid errors
export const getSegmentIds = (destinations = []) => {
    return destinations.map(({ segments }: any) => segments.map(({ id }: any) => id)).join(",") || "";
};
