/* eslint-disable @typescript-eslint/ban-types */

/** The event object pushed to the data layer that triggered the callback. */
type DataLayerEvent = Record<string, unknown>;

/**
 *  A function that is called when the event of the specified type occurs.
 *
 * @param event - The event object pushed to the data layer that triggered the callback.
 */
export type EventListenerCallback = (event: DataLayerEvent) => void;

/**
 *  past: The listener is triggered for past events only.
 *
 *  future: The listener is triggered for future events only.
 *
 *  all: The listener is triggered for past & future events (default).
 */
export type EventListenerScope = "past" | "future" | "all";

/** Optional characteristics of the event listener. */
export type EventListenerOptions = {
    /** Filters events by state object path. */
    path?: string;

    /** Filters events by timing */
    scope?: EventListenerScope;
};

/**
 * The interface for the Adobe Client Data Layer. @adobe/adobe-client-data-layer doesn't provide types, but we need a
 * to inject the object into our CommerceEvents class.
 *
 * Types taken from https://github.com/adobe/adobe-client-data-layer/wiki#methods
 */
export interface AdobeClientDataLayer {
    /**
     * Adds items to the data layer.
     *
     * @param {...Object|Function} args The items to add to the Data Layer.
     * @returns {Number} The length of the Data Layer array after adding the items.
     */
    push(args: Record<string, unknown> | Function): number;

    /**
     * Returns the merged state of all pushed data.
     *
     * @param reference Optional path of the part of the state to get.
     */
    getState(reference?: string): Record<string, unknown>;

    /** Sets up a function that will be called whenever the specified event is triggered. */
    addEventListener(type: string, listener: any, options?: EventListenerOptions): void;

    /** Removes an event listener previously registered with addEventListener(). */
    removeEventListener(type: string, listener?: EventListenerCallback): void;
}
