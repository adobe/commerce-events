import { AEP } from "@adobe/commerce-events-sdk/dist/types/types/schemas";

import { AEPContext } from "../types/contexts";

const createContext = (aep?: AEP): AEPContext => {
    const mse = window.magentoStorefrontEvents;
    const aepCtx = aep ?? mse.context.getAEP();

    if (!aepCtx) {
        return {};
    }

    const context: AEPContext = {
        imsOrgId: aepCtx.imsOrgId,
        datastreamId: aepCtx.datastreamId,
    };

    return context;
};

export default createContext;
