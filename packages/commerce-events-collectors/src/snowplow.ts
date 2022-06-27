import {
    enableLinkClickTracking,
    LinkClickTrackingPlugin,
} from "@snowplow/browser-plugin-link-click-tracking";
import { PerformanceTimingPlugin } from "@snowplow/browser-plugin-performance-timing";
import {
    addGlobalContexts,
    enableActivityTracking,
    newTracker,
    setOptOutCookie,
    TrackerConfiguration,
} from "@snowplow/browser-tracker";

import { createSnowplowCtx } from "./contexts";

type ConfigureSnowplowParams = {
    appId: string;
    collectorUrl: string;
    collectorPath: string;
};

const configureSnowplow = ({
    appId,
    collectorUrl,
    collectorPath,
}: ConfigureSnowplowParams): void => {
    const configuration: TrackerConfiguration = {
        appId,
        platform: "web",
        discoverRootDomain: true,
        cookieName: "mg",
        encodeBase64: true,
        respectDoNotTrack: false,
        sessionCookieTimeout: 1800,
        eventMethod: "beacon",
        bufferSize: 1,
        maxPostBytes: 40000,
        crossDomainLinker: undefined,
        cookieLifetime: 86400 * 365 * 2,
        stateStorageStrategy: "localStorage",
        postPath: collectorPath,
        contexts: {
            webPage: true,
        },
        plugins: [PerformanceTimingPlugin(), LinkClickTrackingPlugin()],
    };

    newTracker("sp", collectorUrl, configuration);

    const snowplowCtx = createSnowplowCtx();
    addGlobalContexts(snowplowCtx);

    setOptOutCookie("mg_dnt");

    enableActivityTracking({
        minimumVisitLength: 5,
        heartbeatDelay: 5,
    });

    enableLinkClickTracking();
};

export { configureSnowplow };
