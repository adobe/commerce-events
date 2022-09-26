// Get ECID from alloy
import { AlloyReturnData, AlloyIdentity } from "../../aep/types";

const getECID = (): Promise<string | void> => {
    return new Promise((resolve, reject): string | void => {
        let retry = true;

        const fetchECID = () => {
            if (window.hasOwnProperty("alloy")) {
                window
                    .alloy("getIdentity")
                    .then((result: void | AlloyReturnData) => {
                        const { identity } = result as AlloyIdentity;
                        console.log("Alloy fetched identity.");
                        resolve(identity?.ECID || "");
                    })
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    .catch((error: any) => {
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
