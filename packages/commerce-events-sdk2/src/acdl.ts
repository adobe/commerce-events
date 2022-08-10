import { AdobeClientDataLayer } from "./interfaces/acdl";

export class ACDL {
    constructor(private readonly dl: AdobeClientDataLayer) {}

    addEventListener(name: string, handler: any, options?: any) {
        this.dl.push((acdl: AdobeClientDataLayer) => {
            acdl.addEventListener(name, handler, options);
        });
    }
}
