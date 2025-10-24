/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-console */
import { createInstance } from "@adobe/alloy";
import { configure, hasConfig, setConsent, setExistingAlloy } from "./alloy";
import { subscribeToEvents } from "./events";
import { configureSnowplow } from "./snowplow";

// Snowplow configuration constants
const SNOWPLOW_CONFIG = {
    production: {
        collectorUrl: "https://commerce.adobedc.net",
        collectorPath: "/collector/tp2",
    },
    qa: {
        collectorUrl: "https://com-magento-qa1.collector.snplow.net",
        collectorPath: "/com.snowplowanalytics.snowplow/tp2",
    },
};

/**
 * this is the script added to an external build if a user is adding a custom name
 * see https://experienceleague.adobe.com/docs/experience-platform/edge/fundamentals/installing-the-sdk.html?lang=en
 */
const addCustomNameToAlloyNamespace = (customName: string) =>
    (function (n, o) {
        ``;
        o.forEach(function (o) {
            // @ts-ignore
            n[o] ||
                ((n.__alloyNS = n.__alloyNS || []).push(o),
                // @ts-ignore
                (n[o] = function () {
                    // eslint-disable-next-line prefer-rest-params
                    const u = arguments;
                    return new Promise(function (i, l) {
                        // @ts-ignore
                        n[o].q.push([i, l, u]);
                    });
                }),
                // @ts-ignore
                (n[o].q = []));
        });
    })(window, [customName]);

/** initialize alloy if magentoStorefrontEvents exists and aep contenxt set up right */
const initializeAlloy = async () => {
    try {
        const sdk = window.magentoStorefrontEvents;
        const customName = sdk.context.getAEP().webSdkName;

        // if a client has provided a webSdkName, we assume that they have another alloy instance
        if (customName) {
            // the launch script injected into the page already configures alloy
            setExistingAlloy(customName);
        } else {
            if (!hasConfig()) {
                return;
            }

            const name = "alloy";
            // if we don't add the name to the namespace,
            // we get a error saying window[data.instance] doesn't exist
            addCustomNameToAlloyNamespace(name);

            const instance = await configure(createInstance({ name }));

            // assign alloy back to the window
            window.alloy = instance;
        }

        // start polling every second to look for changes
        const consentInterval = setInterval(async () => {
            try {
                await setConsent();
            } catch {
                clearInterval(consentInterval);
                console.warn("Alloy consent could not be set.");
            }
        }, 1000);
    } catch (error) {
        console.warn("Alloy could not be configured.");
    }
};

const initialize = async () => {
    const { context } = window.magentoStorefrontEvents;
    const eventForwarding = context.getEventForwarding();
    const storefrontInstance = context.getStorefrontInstance();

    const sendToSnowplow = eventForwarding?.commerce === false ? false : true;
    const sendToAEP = eventForwarding?.aep && hasConfig() ? true : false;

    if (sendToSnowplow) {
        // Dynamic Snowplow routing based on environment
        const environment = storefrontInstance?.environment?.toLowerCase() || "production";
        const isQAEnvironment =
            environment.includes("stage") || environment.includes("qa") || environment.includes("test");

        const config = isQAEnvironment ? SNOWPLOW_CONFIG.qa : SNOWPLOW_CONFIG.production;
        const collectorUrl = config.collectorUrl;
        const collectorPath = config.collectorPath;

        configureSnowplow({
            appId: "magento-storefront-event-collector",
            collectorUrl,
            collectorPath,
        });
    }

    if (sendToAEP) {
        await initializeAlloy();
    }

    subscribeToEvents(sendToSnowplow, sendToAEP);
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
