import { Publisher, Subscriber } from "@adobe/commerce-events-core";
import { CommerceEvents } from "@adobe/commerce-events-core";

export class AEPCollector implements Subscriber {
    constructor(public events = "*" as const) {}

    update(publisher: Publisher, payload: Record<string, unknown>): void {
        if (publisher instanceof CommerceEvents) {
            console.log(`${this.constructor.name}: Reacted to the event.`);
            console.log({ payload });
        }
    }
}
