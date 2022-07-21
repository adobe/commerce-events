import { Publisher, Subscriber } from "./interfaces";

export class CommerceEvents implements Publisher {
    /**
     * @type {number} For the sake of simplicity, the Subject's state, essential
     * to all subscribers, is stored in this variable.
     */
    public state: unknown;

    /**
     * @type {Subscriber[]} List of subscribers. In real life, the list of
     * subscribers can be stored more comprehensively (categorized by event
     * type, etc.).
     */
    private subscribers: Subscriber[] = [];

    constructor(public readonly initialState = []) {
        // assign default state or initialize as empty array
        this.state = initialState;

        // this should be handled elsewhere
        window && window.postMessage("adobe-commerce-events-sdk", "*");
    }

    /**
     * The subscription management methods.
     */
    public subscribe(subscriber: Subscriber): void {
        const isExist = this.subscribers.includes(subscriber);
        if (isExist) {
            return console.log("CommerceEvents: Subscriber has been attached already.");
        }

        console.log("CommerceEvents: Attached an subscriber.");
        this.subscribers.push(subscriber);
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
    public publish(event?: unknown): void {
        console.log("CommerceEvents: Notifying subscribers...");
        for (const subscriber of this.subscribers) {
            subscriber.update(this, event);
        }
    }
}
