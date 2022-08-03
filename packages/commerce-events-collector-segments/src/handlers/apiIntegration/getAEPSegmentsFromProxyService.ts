/**
 * Call segments proxy service and get a list of segment ids for current user
 *
 * @param profileId - ECID of current user, should be retrieved from Alloy
 *
 * @returns Promise with returend data from adobe segment proxy service
 */
const getAEPSegmentsFromProxyService = (profileId: string): Promise<string | void> => {
    // static api_key that is used for the proxy service
    const API_KEY = "commerce-segments-service";

    // get a reference to the magento storefront events context. This will give us access to the AEP data
    const { context } = window.magentoStorefrontEvents;
    const { imsOrgId = "" } = context.getAEP();

    // URL to access the segments proxy service, this will most likely come from a config file or service after POC
    const GET_AEP_SEGMENTS_ENDPOINT_URL = `https://commerce-int.adobe.io/segments/segments-service/profiles/${profileId}/segmentmemberships?imsOrgId=${imsOrgId}&api_key=${API_KEY}`;

    return new Promise((resolve, reject): string | void => {
        fetch(GET_AEP_SEGMENTS_ENDPOINT_URL)
            .then((response) => response.json())
            .then((responseData) => {
                console.log("commerce-event-segmnets - getAEPSegmentsFromProxyService fetch response: ", responseData);
                resolve(responseData?.data?.segmentMembershipIds?.join(",") || "");
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export default getAEPSegmentsFromProxyService;
