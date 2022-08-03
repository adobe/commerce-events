/**
 * The name of the cookie to save so that adobe commerce can read in the segment information.
 *
 * Should match up with Github located at:
 * @link https://github.com/magento-commerce/segments-service/blob/poc/Segment/Model/SegmentResolver.php#L12
 */
const ADOBE_COMMERCE_SHOPPER_SEGMENT = "adobe_segment";

/**
 * Set the browser cookies with the returned segmentMembershipIds from the proxy service
 *
 * @note for now we'll keep the `expires` param for cookies set to default.
 *
 * @param segmentMembershipIds comma delimited string of `segmentMembershipIds` that is returned from the proxy service
 */
const setAdobeCommerceSegmentCookies = (segmentMembershipIds = "") => {
    console.log("commerce-event-segmnets - setAdobeCommerceSegmentCookies: ", segmentMembershipIds);
    //again, note that no expiration is set, so this will be a session cookie
    document.cookie = `${ADOBE_COMMERCE_SHOPPER_SEGMENT}=${segmentMembershipIds}`;
};

export default setAdobeCommerceSegmentCookies;
