import ContextManager from "./ContextManager";
import executeCommand from "./excecuteCommand";
import PublishManager from "./PublishManager";
import SubscribeManager from "./SubscribeManager";
import UnsubscribeManager from "./UnsubscribeManager";

class MagentoStorefrontEvents {
    constructor() {
        // ensure event array is available
        window.adobeDataLayer = window.adobeDataLayer || [];

        // drain message queue
        if (window["commerceConnector"]) {
            const queue = window["commerceConnector"].q;
            queue.push = executeCommand;

            // TODO the command below doesn't work bc window.magentoStorefrontEvents isn't available yet
            // queue.forEach(executeCommand);

            // TODO looping through each command and the queue and parsing them is duplicating code
            // but because above command doesn't work, leaving here for now; remove when above is fixed
            queue.forEach((...args : any[]) => {
                const userProvidedArgs: any = args[0][2];
                const namespace: any = userProvidedArgs[0];
                const command: any = userProvidedArgs[1];

                const resolve = args[1];
                const reject = args[2];

                // TODO this only gets first option/arg but that's fine for now
                const options = userProvidedArgs[2];

                let result: any;
                try {
                    result = namespace[command]([options]);
                    resolve(result);
                } catch(e) {
                    reject (e);
                }
            });
        }

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
