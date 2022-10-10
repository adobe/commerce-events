import { AEP } from "@adobe/commerce-events-sdk";

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
        edgeDomain: aepCtx.edgeDomain,
        webSdkName: aepCtx.webSdkName,
    };

    return context;
};

export default createContext;
