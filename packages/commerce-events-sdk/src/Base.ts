import { getDataLayer } from "./data-layer";
import { AdobeClientDataLayer } from "./types";
import { ContextName, CustomContext, Context } from "./types/contexts";
import { EventName, ListenerOptions, EventHandler } from "./types/events";

export abstract class Base {
    private dataLayer: AdobeClientDataLayer;

    constructor() {
        this.dataLayer = getDataLayer();
    }

    // Set a context on ACDL
    protected setContext<T>(name: ContextName | string, context: T): void {
        this.dataLayer.push({ [name]: null });
        this.dataLayer.push({ [name]: context });
    }

    // Get a context from ACDL
    protected getContext<T>(name?: ContextName | string): T {
        return this.dataLayer.getState ? this.dataLayer.getState(name) : ({} as T);
    }

    // Add event listener to ACDL
    protected addEventListener(name: EventName, handler: EventHandler, options?: ListenerOptions): void {
        this.dataLayer.push((acdl: AdobeClientDataLayer) => {
            acdl.addEventListener(name, handler, options);
        });
    }

    // Remove event listener from ACDL
    protected removeEventListener(name: EventName, handler: EventHandler): void {
        this.dataLayer.push((acdl: AdobeClientDataLayer) => {
            acdl.removeEventListener(name, handler);
        });
    }

    // Push event to ACDL
    protected pushEvent(event: EventName, context: CustomContext = {}): void {
        this.dataLayer.push((acdl: AdobeClientDataLayer) => {
            acdl.push({
                event,
                eventInfo: {
                    ...this.getContext<Context>(),
                    ...context,
                },
            });
        });
    }
}
