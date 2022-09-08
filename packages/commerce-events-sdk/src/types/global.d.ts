import MagentoStorefrontEvents from "../MagentoStorefrontEvents";
import { AdobeClientDataLayer } from "./acdl";

// use var for globals and not const or let - https://stackoverflow.com/a/69429093
declare global {
    interface Window {
        // eslint-disable-next-line no-var
        adobeDataLayer: AdobeClientDataLayer | [];
        // eslint-disable-next-line no-var
        commerceEventsSdk: MagentoStorefrontEvents;
    }
}
