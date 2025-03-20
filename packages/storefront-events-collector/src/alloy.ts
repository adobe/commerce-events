/* TS wrapper around `@adobe/alloy`*/
import { AlloyIndentity, AlloyInstance, ConfigOptions } from "./aep/types/alloy.types";
import createContext from "./contexts/aep";
import { BeaconSchema, CustomIdentityMap, IdentityMap } from "./types/aep";
import { AlloySendEventResponse } from "./types/aep/segments";
import { AEPContext } from "./types/contexts";
import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

let alloyInstance: AlloyInstance;

/**
 *  configures alloy and assigns it to the window object
 */
const configure = async (instance: AlloyInstance): Promise<AlloyInstance> => {
    const aepCtx: AEPContext = createContext();
    if (!!aepCtx.datastreamId && !!aepCtx.imsOrgId) {
        const alloyConfig: ConfigOptions = {
            edgeConfigId: aepCtx.datastreamId as string,
            orgId: aepCtx.imsOrgId as string,
            defaultConsent: "pending",
        };

        if (aepCtx.edgeDomain && aepCtx.edgeDomain !== "") {
            alloyConfig.edgeDomain = aepCtx.edgeDomain;
        }

        await instance("configure", alloyConfig);

        alloyInstance = instance;

        return alloyInstance;
    } else {
        return Promise.reject();
    }
};

/** use an existing instance of alloy already on the page */
const setExistingAlloy = async (name: string) => {
    try {
        if (window.hasOwnProperty(name)) {
            alloyInstance = (window as unknown as Record<string, AlloyInstance>)[name];
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
const sendEvent = async (schema: BeaconSchema, event: Event): Promise<AlloySendEventResponse | undefined> => {
    try {
        const { channelContext } = event.eventInfo;

        // attach identity field
        const result: AlloyIndentity = (await alloyInstance("getIdentity")) as AlloyIndentity;

        const ecid = result.identity.ECID || "000000000000000000000000000000000000";

        schema.channel = schema.channel || channelContext;
        schema.personID = ecid; // TODO: for backwards compatibility, deprecated
        schema.identityMap = getCustomIdentityMap(ecid, schema);

        const xdm = { xdm: { ...schema } };

        // send async
        const response = (await alloyInstance("sendEvent", xdm)) as AlloySendEventResponse;

        return response;
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

    return !!eventForwarding?.aep && !!config.datastreamId && !!config.imsOrgId;
};

/**
 * Returns a custom identityMap if it was preset otherwise returns ECID and email (if it exists)
 */
const getCustomIdentityMap = (ecid: string, schema: BeaconSchema): IdentityMap | CustomIdentityMap => {
    const { context } = window.magentoStorefrontEvents;
    const config = context.getAEP();
    const baseIdentityMap: IdentityMap = {
        ECID: [
            {
                id: ecid,
                primary: true,
            },
        ],
    };

    // return preset custom identityMap if it exists
    if (config?.identityMap) {
        const hasPrimaryIdentity = Object.values(config.identityMap)
            .flat()
            .some((identity) => identity.primary);

        /**
         * Check if custom identityMap has a primary identity.
         * Otherwise, add ECID as primary, as for RTCP schemas, primary identity is required.
         */
        return hasPrimaryIdentity ? config.identityMap : { ...config.identityMap, ...baseIdentityMap };
    }

    // add email to baseIdentityMap if it exists
    if (schema.personalEmail?.address) {
        baseIdentityMap.email = [
            {
                id: schema.personalEmail?.address,
                primary: false,
            },
        ];
    }

    return baseIdentityMap;
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
export { configure, hasConfig, setExistingAlloy, sendEvent, setConsent };
