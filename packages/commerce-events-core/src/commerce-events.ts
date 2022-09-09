import { Publisher, Subscriber } from "./interfaces";

/** Allows us to provide a loose data layer contract that clients can use if they have their own custom data layer. */
interface DataLayer {
    push(): void;
    getState<T>(substate?: string): Record<string, unknown>;
}

export class CommerceEvents implements Publisher {
    /**
     * This will handle the state of the application
     */
    public state: unknown;

    /**
     * List of subscribers that will be listening for events from the sdk
     */
    private subscribers: Subscriber[] = [];

    constructor(public readonly dataLayer: DataLayer) {
        this.state = dataLayer.getState();

        __DEV__ && console.log(`${this.constructor.name} initialized.`);
    }

    /** Add a subscription to our list of subscribers */
    public async subscribe(subscriber: Subscriber, events = "*"): Promise<void> {
        const isExist = this.subscribers.includes(subscriber);
        if (isExist) {
            __DEV__ && console.log("CommerceEvents: Subscriber has been attached already.");
            return;
        }

        __DEV__ && console.log("CommerceEvents: Attached an subscriber.");
        this.subscribers.push(subscriber);
    }

    /** Removes a subscription from our list of subscribers */
    public unsubscribe(subscriber: Subscriber): void {
        const observerIndex = this.subscribers.indexOf(subscriber);
        if (observerIndex === -1) {
            console.log("CommerceEvents: Nonexistent subscriber.");
            return;
        }

        this.subscribers.splice(observerIndex, 1);
        __DEV__ && console.log("CommerceEvents: Detached a subscriber.");
    }

    /** Triggers an update in each subscriber */
    public publish(event?: unknown): void {
        __DEV__ && console.log(`${this.constructor.name}: Notifying subscribers...`);
        for (const subscriber of this.subscribers) {
            subscriber.update(this, event);
            // if (subscriber.events === "*") {

            //     return;
            // }
        }
    }
}
