/* eslint-disable no-console */
import { configure, hasConfig, setConsent } from "./alloy";
import { subscribeToEvents } from "./events";
import { configureSnowplow } from "./snowplow";

/** initialize alloy if magentoStorefrontEvents exists and aep is set to true */
const initializeAlloy = async () => {
    try {
        if (!hasConfig()) {
            return;
        }

        await configure();

        // start polling every second to look for changes
        setInterval(setConsent, 1000);
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
