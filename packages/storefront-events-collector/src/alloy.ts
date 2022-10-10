/* TS wrapper around `@adobe/alloy`*/
import { AlloyIndentity, AlloyInstance, ConfigOptions } from "./aep/types/alloy.types";
import createContext from "./contexts/aep";
import { BeaconSchema } from "./types/aep";
import { AEPContext } from "./types/contexts";

let alloyInstance: AlloyInstance;

/**
 *  configures alloy and assigns it to the window object
 */
const configure = async (instance: AlloyInstance): Promise<AlloyInstance> => {
    alloyInstance = instance;
    const aepCtx: AEPContext = createContext();
    if (aepCtx.datastreamId !== "" && aepCtx.imsOrgId !== "") {
        const alloyConfig: ConfigOptions = {
            edgeConfigId: aepCtx.datastreamId as string,
            orgId: aepCtx.imsOrgId as string,
            defaultConsent: "pending",
        };

        if (aepCtx.edgeDomain && aepCtx.edgeDomain !== "") {
            alloyConfig.edgeDomain = aepCtx.edgeDomain;
        }

        await alloyInstance("configure", alloyConfig);

        return alloyInstance;
    } else {
        return Promise.reject();
    }
};

/** use an existing instance of alloy already on the page */
const getExistingAlloy = async (name: string) => {
    try {
        if (window.hasOwnProperty(name)) {
            alloyInstance = (window as any)[name];
        } else {
            throw new Error();
        }
    } catch (error) {
        throw new Error(`Could not find Alloy Instance: ${name}`);
    }
};

/**
 * sends event payload that matches the BeaconSchema that's been defined
 */
const sendEvent = async (schema: BeaconSchema): Promise<void> => {
    try {
        // attach identity field
        const result: AlloyIndentity = (await alloyInstance("getIdentity")) as AlloyIndentity;
        schema.personID = result.identity.ECID || "unknown";

        const xdm = { xdm: { ...schema } };

        // send async
        await alloyInstance("sendEvent", xdm);
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

    return (eventForwarding?.aep || false) && config.datastreamId !== "" && config.imsOrgId !== "";
};

/**
 * checks to see if the mg_dnt cookie is set and will set the consent
 * on the alloy instance
 */
const setConsent = async (): Promise<void> => {
    const doNotTrackCookie = document.cookie.indexOf("mg_dnt") !== -1;
    const instance = alloyInstance;
    await instance("setConsent", {
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
export { configure, hasConfig, getExistingAlloy, sendEvent, setConsent };
