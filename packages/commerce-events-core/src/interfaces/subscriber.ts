import { events } from "../events";
import { Publisher } from "./publisher";

/**
 * The Subscriber interface declares the update method, used by publishers.
 */
export interface Subscriber {
    events: typeof events | "*";
    // recieve updates from publisher
    update(publisher: Publisher | string, event: unknown): void;
}
