import { BeaconSchema } from "../../types/aep";

export type CommandType =
    | "configure"
    | "sendEvent"
    | "getIdentity"
    | "setConsent";

export type ConfigOptions = {
    // required fields
    edgeConfigId: string;
    orgId: string;

    // non-required fields
    /** defaults to false */
    debugEnabled?: boolean;

    /** defaults to "in" */
    defaultConsent?: "in" | "out" | "pending";

    /** defaults to edge.adobedc.net */
    edgeDomain?: string;

    edgeBasePath?: string;

    onBeforeEventSend?: () => void;
};

export interface XDM<T> {
    xdm: T;
}

export type consentOptions = {
    consent: [
        {
            standard: "Adobe";
            version: "1.0" | "2.0";
            value: {
                general: "in" | "out";
            };
        },
    ];
};

export type AlloyInstance = (
    command: CommandType,
    options?: ConfigOptions | XDM<BeaconSchema> | consentOptions,
) => Promise<void | AlloyIndentity>;

export type AlloyIndentity = {
    identity: {
        ECID?: string;
    };
};
