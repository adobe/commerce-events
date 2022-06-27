/* TS wrapper around `@adobe/alloy`*/

import { createInstance } from "@adobe/alloy";

import { AlloyIndentity, AlloyInstance } from "./aep/types/alloy.types";
import createContext from "./contexts/aep";
import { BeaconSchema } from "./types/aep";
import { AEPContext } from "./types/contexts";

const alloyInstance: AlloyInstance = createInstance({ name: "alloy" });

/**
 *  configures alloy and assigns it to the window object
 */
const configure = async (): Promise<AlloyInstance> => {
    const aepCtx: AEPContext = createContext();
    if (aepCtx.datastreamId !== "" && aepCtx.imsOrgId !== "") {
        await alloyInstance("configure", {
            edgeConfigId: aepCtx.datastreamId as string,
            orgId: aepCtx.imsOrgId as string,
            defaultConsent: "pending",
        });

        window.alloy = alloyInstance;

        return window.alloy;
    } else {
        return Promise.reject();
    }
};

/**
 * returns alloy instance if it exists on the window
 * configures instance if it doesn't exist
 */
const getAlloy = async (): Promise<AlloyInstance> => {
    if (typeof window.alloy === "function") {
        return window.alloy;
    }

    // if alloy doesn't exist on the window, configure it
    const windowAlloy = await configure();

    return windowAlloy;
};

/**
 * sends event payload that matches the BeaconSchema that's been defined
 */
const sendEvent = async (schema: BeaconSchema): Promise<void> => {
    try {
        const instance = await getAlloy();

        // attach identity field
        const result: AlloyIndentity = (await instance(
            "getIdentity",
        )) as AlloyIndentity;
        schema.personID = result.identity.ECID || "unknown";

        const xdm = { xdm: { ...schema } };

        // send async
        instance("sendEvent", xdm);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error("sendEvent error:", error);
    }
};

/**
 * checks to make sure aep in the eventForwarding context is set to true and
 * that there is at least a datastreamId
 */
const hasConfig = (): boolean => {
    const { context } = window.magentoStorefrontEvents;
    const eventForwarding = context.getEventForwarding();
    const config = context.getAEP();

    return (
        (eventForwarding?.aep || false) &&
        config.datastreamId !== "" &&
        config.imsOrgId !== ""
    );
};

/**
 * checks to see if the mg_dnt cookie is set and will set the consent
 * on the alloy instance
 */
const setConsent = async (): Promise<void> => {
    const doNotTrackCookie = document.cookie.indexOf("mg_dnt") !== -1;
    const instance = await getAlloy();

    instance("setConsent", {
        consent: [
            {
                standard: "Adobe",
                version: "1.0",
                value: {
                    general: doNotTrackCookie ? "out" : "in",
                },
            },
        ],
    });
};

/** preconfigured alloy instance that allows us to send an event */
export { configure, getAlloy, hasConfig, sendEvent, setConsent };
