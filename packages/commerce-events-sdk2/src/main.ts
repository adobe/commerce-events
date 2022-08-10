const loadAcdl = () => {
    window.adobeDataLayer = window.adobeDataLayer || [];

    return new Promise((resolve, reject) => {
        // programatically append script to body
        const script = document.createElement("script");
        script.async = true;
        script.defer = true;
        script.src = "https://unpkg.com/@adobe/adobe-client-data-layer@latest/dist/adobe-client-data-layer.min.js";
        document.body.appendChild(script);

        script.onload = () => {
            console.log("ACDL loaded");
            console.log(window.adobeDataLayer);
            resolve(true);
        };
    });
};

export class Thingy {
    constructor() {
        // console.log(window.adobeDataLayer === u);
        if (window.adobeDataLayer === undefined) {
            console.log("No Adobe Client Data Layer found. Loading");

            // require("@adobe/adobe-client-data-layer");
            (async () => await loadAcdl())();
            console.log(window);
        } else {
            console.log("Getting ACDL from page.");
        }
    }
}
