import ContextManager from "./ContextManager";
import PublishManager from "./PublishManager";
import SubscribeManager from "./SubscribeManager";
import UnsubscribeManager from "./UnsubscribeManager";

class MagentoStorefrontEvents {
    constructor() {
        // ensure event array is available
        window.adobeDataLayer = window.adobeDataLayer || [];

        // broadcast availability
        window.postMessage("magento-storefront-events-sdk", "*");
    }

    // Methods for interacting with context data
    public context = new ContextManager();

    // Methods for publishing events
    public publish = new PublishManager();

    // Methods for subscribing to events
    public subscribe = new SubscribeManager();

    // Methods for unsubscribing from events
    public unsubscribe = new UnsubscribeManager();
}

export default MagentoStorefrontEvents;
