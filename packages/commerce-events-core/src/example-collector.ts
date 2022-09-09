import { CommerceEvents } from "./commerce-events";
import { Publisher, Subscriber } from "./interfaces";

/**
 * The update function will react to any events sent by the Publisher that the Subscriber has attached to
 */
export class ExampleCollector implements Subscriber {
    constructor(public events = "*" as const) {}

    update(publisher: Publisher, payload: Record<string, unknown>): void {
        if (publisher instanceof CommerceEvents) {
            console.log(`${this.constructor.name}: Reacted to the event.`);
            console.log({ payload });
        }
    }
}
