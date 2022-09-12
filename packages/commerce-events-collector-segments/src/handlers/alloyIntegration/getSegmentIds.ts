import { AlloyIdentity, AlloySendEventResponse } from "../../aep/types";

const getSegmentIds = (): Promise<string | void> => {
    return new Promise((resolve, reject): string | void => {
        if (window.hasOwnProperty("alloy")) {
            window
                .alloy("sendEvent")
                .then((result: void | AlloySendEventResponse | AlloyIdentity) => {
                    const { destinations } = result as AlloySendEventResponse;
                    const segments = destinations?.map(({ segments }) => segments.map(({ id }) => id)).join(",") || "";
                    resolve(segments);
                })
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .catch((error: any) => {
                    reject(error);
                });
        } else {
            reject("Alloy not available");
        }
    });
};

export default getSegmentIds;
