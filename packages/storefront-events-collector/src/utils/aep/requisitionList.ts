import { RequisitionListContext } from "src/types/contexts";

import { RequisitionList } from "../../types/aep";

const createRequisitionList = (
    requisitionListContextFromCustomContext: RequisitionList | undefined,
    requisitionListContext: RequisitionListContext,
): RequisitionList => {
    const requisitionList = requisitionListContextFromCustomContext || ({} as RequisitionList);

    (requisitionList.ID = requisitionList?.ID || requisitionListContext?.id?.toString()),
        (requisitionList.name = requisitionList?.name || requisitionListContext?.name),
        (requisitionList.description = requisitionList?.description || requisitionListContext?.description);

    return requisitionList;
};

export { createRequisitionList };
