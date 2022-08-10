import { CommerceEvents } from "./commerce-events";
import { Publisher, Subscriber } from "./interfaces";

/**
 * The update function will react to any events sent by the Publisher that the Subscriber has attached to
 */
export class SampleCollector implements Subscriber {
    update(publisher: Publisher, payload: Record<string, unknown>): void {
        if (publisher instanceof CommerceEvents) {
            console.log("SampleCollector: Reacted to the event.");
            console.log({ payload });
        }
    }

    handler(event: string): void {
        console.log("SampleCollector.handler: Reacted to the event.");
        console.log(event);
    }
}
