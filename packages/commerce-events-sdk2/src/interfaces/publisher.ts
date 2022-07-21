import { Subscriber } from "./subscriber";

/**
 * The Publisher interface declares a set of methods for managing subscribers.
 */
export interface Publisher {
    // Attach a subscriber to the publisher.
    subscribe(subscriber: Subscriber): void;

    // Detach a subscriber from the publisher.
    unsubscribe(subscriber: Subscriber): void;

    // Notify all subscribers about an event.
    publish(): void;
}
