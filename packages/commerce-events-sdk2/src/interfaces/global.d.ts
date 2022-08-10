import { AdobeClientDataLayer } from "./src/interfaces";

declare global {
    interface Window {
        adobeDataLayer: AdobeClientDataLayer;
    }
}
