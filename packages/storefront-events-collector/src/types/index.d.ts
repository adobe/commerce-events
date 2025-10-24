import { MagentoStorefrontEvents } from "@adobe/magento-storefront-events-sdk";

import { AlloyInstance } from "../aep/types";

declare global {
    interface Window {
        __alloyNS: string[];
        magentoStorefrontEvents: MagentoStorefrontEvents;
        alloy: AlloyInstance;
    }
}
