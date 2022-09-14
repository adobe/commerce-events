import { AdobeClientDataLayer } from "./types";

export const getDataLayer = (): AdobeClientDataLayer => {
    const dataLayerName = document.currentScript?.dataset.layerName || "adobeDataLayer";
    window[dataLayerName as any] = window.adobeDataLayer || [];

    return window[dataLayerName as any];
};
