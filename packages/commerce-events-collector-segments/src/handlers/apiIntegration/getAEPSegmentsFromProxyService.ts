/**
 * Options to use for the fetch method, this is really only here for development purposes while we get everythign deployed
 * as the default `options` should be fine.
 */
const apiFetchOptions: RequestInit = {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    headers: {
        "content-type": "application/json;charset=UTF-8",
    },
};

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
        fetch(GET_AEP_SEGMENTS_ENDPOINT_URL, apiFetchOptions)
            .then((response) => response.json())
            .then((responseData) => {
                /*
                    JSON object that comes back is in a structure like: 
                    {
                        "data": {
                            "segmentMembershipIds": [
                                "abc-123",
                                "def-456",
                                "ghi-789"
                            ]
                        },
                        "signature": "<hashed signature string>"
                    }
                    So we need to just get `segmentMembershipIds` and combine that into a comma delimited string.  
                    @Note: Once this is finalized could just destructure it out of the `responseData`, i.e. ({data:{segmentMembershipIds = []} = {}})
                */
                resolve(responseData?.data?.segmentMembershipIds?.join(",") || "");
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export default getAEPSegmentsFromProxyService;
