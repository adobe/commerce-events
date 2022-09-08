import { Publisher } from "./publisher";

/**
 * The Subscriber interface declares the update method, used by publishers.
 */
export interface Subscriber {
    // recieve updates from publisher
    update(publisher: Publisher, event: unknown): void;
}
