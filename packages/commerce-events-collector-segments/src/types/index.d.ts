import { MagentoStorefrontEvents } from "@adobe/commerce-events-sdk";
import { AlloyInstance } from "../aep/types";

declare global {
    interface Window {
        magentoStorefrontEvents: MagentoStorefrontEvents;
        alloy: AlloyInstance;
    }
}
