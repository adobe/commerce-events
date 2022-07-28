/**
 * This code was borrowed from the AEP Web SDK team (alloy)
 * https://github.com/adobe/alloy
 * https://github.com/adobe/alloy/blob/main/src/baseCode/index.js
 *
 * It initiates a command queue that allows the Commerce SDK to be loaded asynchronously without commands being missed.
 */
const baseCode = (window: Window, instanceNames: string[]) => {
    instanceNames.forEach(function (instanceName: any) {
        if (!window[instanceName]) {
            // __commerceNS stores a name of each "instance", or in other words, each
            // global function created that the consumer will use. This array is
            // what the SDK library will consult once it is loaded to determine
            // which global functions have been set up so that is can connect them to
            // the library's command processing pipeline.
            (window.__commerceNS = window.__commerceNS || []).push(instanceName);
            window[instanceName] = function () {
                // eslint-disable-next-line prefer-rest-params
                const userProvidedArgs = arguments;
                // Always return a promise, because the command may be executed
                // asynchronously, especially if the SDK library has not yet loaded.
                return new Promise(function (resolve, reject) {
                    // Push required call information into the queue. Once the SDK
                    // library is loaded, it will process this queue and resolve/reject
                    // the promise we just returned to the consumer. If the SDK
                    // library has already loaded, then it will have already overridden
                    // q.push and will therefore process the call immediately.
                    window[instanceName].q.push([resolve, reject, userProvidedArgs]);
                });
            } as any;
            window[instanceName].q = [];
        }
    });
};

export default baseCode;
