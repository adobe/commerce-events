import { Publisher, Subscriber } from "./interfaces";
import { AdobeClientDataLayer } from "./interfaces/acdl";

// export type Event = {
//     event: string;
//     // eventInfo: Context & CustomContext;
// };

// export type EventHandler = (event: Event) => void;

// export type ListenerOptions = {
//     path?: string;
//     scope?: "past" | "future" | "all";
// };

// /** An Adapter class for the ACDL */
// export class ACDL {
//     constructor(private readonly acdl: AdobeClientDataLayer) {
//         if (window && window.adobeDataLayer) {
//             this.acdl = window.adobeDataLayer;
//         }
//     }

//     addEventListener(name: string, handler: EventHandler, options?: ListenerOptions) {
//         // this.acdl.addEventListener(name, handler, options);
//     }
// }

export class CommerceEvents implements Publisher {
    /**
     * @type {unknown} This is going to be the same as the acdl.getState();
     */
    public state: unknown;

    /**
     * @type {Subscriber[]} List of subscribers. In real life, the list of
     * subscribers can be stored more comprehensively (categorized by event
     * type, etc.).
     */
    private subscribers: Subscriber[] = [];

    constructor(public readonly acdl: AdobeClientDataLayer) {
        // assign default state or initialize as empty array
        this.state = acdl.getState();

        // this should be handled elsewhere
        // window && window.postMessage("adobe-commerce-events-sdk", "*");
    }

    public subscribe(subscriber: Subscriber): void {
        const isExist = this.subscribers.includes(subscriber);
        if (isExist) {
            return console.log("CommerceEvents: Subscriber has been attached already.");
        }

        console.log("CommerceEvents: Attached an subscriber.");
        this.subscribers.push(subscriber);

        this.acdl.push((dl: AdobeClientDataLayer) => {
            dl.addEventListener("page-view", this.publish);
        });
    }

    public unsubscribe(subscriber: Subscriber): void {
        const observerIndex = this.subscribers.indexOf(subscriber);
        if (observerIndex === -1) {
            return console.log("CommerceEvents: Nonexistent subscriber.");
        }

        this.subscribers.splice(observerIndex, 1);
        __DEV__ && console.log("CommerceEvents: Detached a subscriber.");
    }

    /**
     * Trigger an update in each subscriber.
     */
    public publish = (event?: any): void => {
        console.log(event);
        console.log("CommerceEvents: Notifying subscribers...");
        console.log(this.subscribers);
        for (const subscriber of this.subscribers) {
            // subscriber.update(this, event);
            subscriber.handler(event);
        }
    };
}
