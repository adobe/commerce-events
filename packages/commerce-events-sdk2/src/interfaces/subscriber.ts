import { Publisher } from "./publisher";

/**
 * The Subscriber interface declares the update method, used by publishers.
 */
export interface Subscriber {
    // recieve updates from publisher
    update(publisher: Publisher, event: unknown): void;

    // recieve event from adobe-client-data-layer
    handler(event: string, eventInfo?: any): void;
}
