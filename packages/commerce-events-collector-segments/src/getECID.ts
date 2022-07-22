// Gets the ECID from session cookie "AMCV_{AdobeOrgID}_AdobeOrg"

const ECID_SESSION_REGEX = "AMCV_[A-Z0-9]*%40AdobeOrg=([^;]+)";

const getECID = (): Promise<unknown> => {
    return new Promise((resolve, reject) => {
        let cookieForECID = document.cookie.match(ECID_SESSION_REGEX);
        if (cookieForECID === null) {
            setTimeout(() => {
                cookieForECID = document.cookie.match(ECID_SESSION_REGEX);
            }, 1500);
        }
        if (cookieForECID !== null) {
            resolve(cookieForECID[1].split("|")[1]);
        } else {
            reject("ECID session cookie not available");
        }
    });
};

export default getECID;
