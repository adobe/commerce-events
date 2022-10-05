import { MagentoStorefrontEvents } from "@adobe/commerce-events-sdk";

import { AlloyInstance } from "../aep/types";

declare global {
    const SNOWPLOW_COLLECTOR_URL: string;
    const SNOWPLOW_COLLECTOR_PATH: string;

    interface Window {
        __alloyNS?: string[];
        magentoStorefrontEvents: MagentoStorefrontEvents;
        alloy: AlloyInstance;
    }
}
