import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import * as sdkSchemas from "@adobe/magento-storefront-events-sdk/src/types/schemas";

import { sendEvent } from "../../alloy";
import { createAccountPayload } from "../../../src/utils/aep/account";
import { createCommerceScope } from "../../utils/aep/commerceScope";

const XDM_EVENT_TYPE = "userAccount.createProfile";
const aepHandler = async (event: Event): Promise<void> => {
    const { debugContext, accountContext, storefrontInstanceContext, customContext } = event.eventInfo;

    const payload = createAccountPayload(customContext, accountContext as sdkSchemas.Account);

    payload.userAccount = {
        createProfile: 1,
    };

    payload.commerce = payload.commerce || {};
    payload.commerce.commerceScope = createCommerceScope(storefrontInstanceContext);

    payload._id = debugContext?.eventId;
    payload.eventType = XDM_EVENT_TYPE;

    sendEvent(payload);
};

export default aepHandler;
