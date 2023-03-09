import { RequisitionList } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import { RequisitionListContext } from "../types/contexts";

const createContext = (requisitionList?: RequisitionList): RequisitionListContext | null => {
    const mse = window.magentoStorefrontEvents;
    const requisitionListCtx = requisitionList ?? mse.context.getRequisitionList();

    if (!requisitionListCtx) {
        return null;
    }

    const context: RequisitionListContext = {
        id: requisitionListCtx.id,
        name: requisitionListCtx.name,
        description: requisitionListCtx.description,
    };

    return context;
};

export default createContext;
