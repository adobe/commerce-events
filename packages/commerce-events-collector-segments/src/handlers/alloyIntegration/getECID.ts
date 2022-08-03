// Get ECID from alloy
import { AlloyIdentity } from "../../aep/types";

const getECID = (): Promise<string | void> => {
    return new Promise((resolve, reject): string | void => {
        let retry = true;

        const fetchECID = () => {
            if (window.hasOwnProperty("alloy")) {
                window
                    .alloy("getIdentity")
                    .then((result: AlloyIdentity | void) => {
                        console.log("Alloy fetched identity.");
                        resolve(result?.identity.ECID);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            } else {
                if (retry) {
                    retry = false;
                    setTimeout(fetchECID, 1000);
                } else {
                    console.log("Alloy not available to fetch identity.");
                    reject("Alloy not available");
                }
            }
        };

        fetchECID();
    });
};

export default getECID;
