import { ContextName, CustomContext, Context } from "./types/contexts";
import { EventName, ListenerOptions, EventHandler } from "./types/events";

export abstract class Base {
    // Set a context on ACDL
    protected setContext<T>(name: ContextName | string, context: T): void {
        window.adobeDataLayer.push({
            [name]: null,
        });
        window.adobeDataLayer.push({
            [name]: context,
        });
    }

    // Get a context from ACDL
    protected getContext<T>(name?: ContextName | string): T {
        return window.adobeDataLayer.getState ? window.adobeDataLayer.getState(name) : ({} as T);
    }

    // Add event listener to ACDL
    protected addEventListener(name: EventName, handler: EventHandler, options?: ListenerOptions): void {
        window.adobeDataLayer.push((acdl: AdobeClientDataLayer) => {
            acdl.addEventListener(name, handler, options);
        });
    }

    // Remove event listener from ACDL
    protected removeEventListener(name: EventName, handler: EventHandler): void {
        window.adobeDataLayer.push((acdl: AdobeClientDataLayer) => {
            acdl.removeEventListener(name, handler);
        });
    }

    // Push event to ACDL
    protected pushEvent(event: EventName, context: CustomContext = {}): void {
        window.adobeDataLayer.push((acdl: AdobeClientDataLayer) => {
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
