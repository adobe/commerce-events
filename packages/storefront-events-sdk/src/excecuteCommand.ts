export default function executeCommand(...args: any[]) {
    const userProvidedArgs = args[0][2];
    const namespace = userProvidedArgs[0];
    const command = userProvidedArgs[1];

    const resolve = args[1];
    const reject = args[2];

    // TODO this only gets first option/arg but that's fine for now
    const options = userProvidedArgs[2];

    let result: any;
    try {
        result = window.magentoStorefrontEvents[namespace][command]([options]);
        resolve(result);
    } catch(e) {
        reject (e);
    }
}
