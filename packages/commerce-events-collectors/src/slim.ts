/* eslint-disable no-console */
import { configure, hasConfig, setConsent } from "./alloy";
import { subscribeToEvents } from "./events";
import { SNOWPLOW_COLLECTOR_URL, SNOWPLOW_COLLECTOR_PATH, configureSnowplow } from "./snowplow";

/*
 * the "slim" build expects window.__alloyNS exist and the `@adobe/alloy` 3rd party lib to be loaded on the page
 * before our initialization here. we should be able to grab the alloy instance off of the window in a UMD build
 * which what our default library format is right now.
 */

/** initialize alloy if magentoStorefrontEvents exists and aep is set to true */
const initializeAlloy = async () => {
    const sdk = window.magentoStorefrontEvents;

    try {
        // Steps to check for alloy
        // 1. see if we can even send events first
        const canForwardEvents = sdk.context.getEventForwarding().aep;
        if (!canForwardEvents) throw new Error(`AEP EventForwarding set to ${canForwardEvents}`);

        // 2. make sure we have options to configure alloy with
        if (!hasConfig()) throw new Error(`Check AEP context for correct options`);

        // 3. Get custom alloy event
        //  make sure there is a namespace array that contains the alloy name
        const namespace = window.__alloyNS || [];
        if (!namespace) throw new Error(`No alloy namespace found. Be sure to add external Alloy library properly`);

        const alloyName = sdk.context.getAEP()?.webSDKName ?? "alloy";

        // does the alloy name exist in __alloyNS?
        const nameExists = namespace.includes(alloyName);

        if (nameExists) {
            await configure((window as any)[`${alloyName}`]);
        } else {
            throw new Error("Could not find Alloy Instance");
        }

        // start polling every second to look for changes
        const consentInterval = setInterval(async () => {
            try {
                await setConsent();
            } catch {
                clearInterval(consentInterval);
                console.warn("Consent could not be set.");
            }
        }, 1000);
    } catch (error) {
        console.warn("Alloy could not be configured.");
    }
};

const initialize = async () => {
    configureSnowplow({
        appId: "magento-storefront-event-collector",
        collectorUrl: SNOWPLOW_COLLECTOR_URL,
        collectorPath: SNOWPLOW_COLLECTOR_PATH,
    });

    await initializeAlloy();
    subscribeToEvents();
};

/**
 * handleMessage will only run if we recieve a `magento-storefront-events-sdk`
 * message and if the `magentoStorefrontEvents` exists on the window. this
 * allows the collector to be loaded before the sdk and we can then initialize
 * our collectors
 */
const handleMessage = (event: MessageEvent) => {
    // skip other messages
    if (event.data !== "magento-storefront-events-sdk") {
        return;
    }

    // do nothing if sdk is still not available
    if (!window.magentoStorefrontEvents) {
        return;
    }

    initialize();

    // clean up listener
    window.removeEventListener("message", initialize);
};

if (window.magentoStorefrontEvents) {
    initialize();
} else {
    window.addEventListener("message", handleMessage, false);
}

export * from "./events";
export * from "./snowplow";
