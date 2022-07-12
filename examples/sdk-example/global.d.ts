import { MagentoStorefrontEvents } from "@adobe/commerce-events-sdk";

declare global {
    interface Window {
        magentoStorefrontEvents: MagentoStorefrontEvents;
    }
}
