import * as sdkSchemas from "@adobe/magento-storefront-events-sdk/src/types/schemas";

import { BeaconSchema } from "../../types/aep";

const createAccountPayload = (customContext: any, accountContext: sdkSchemas.Account): BeaconSchema => {
    let payload: BeaconSchema = {};
    if (customContext && Object.keys(customContext as BeaconSchema).length !== 0) {
        // override payload on custom context
        payload = customContext as BeaconSchema;
    }

    payload.person = payload.person || {};
    payload.person.accountID = payload.person.accountID || accountContext?.accountId;

    payload.personalEmail = payload.personalEmail || {};
    payload.personalEmail.address = payload.personalEmail.address || accountContext?.emailAddress;

    return payload;
};

export { createAccountPayload };
