import { StorefrontInstance } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";
import { RequisitionListItems } from "@adobe/magento-storefront-events-sdk/src/types/schemas";
import { RequisitionListContext } from "src/types/contexts";

import { ProductListItem, RequisitionList } from "../../types/aep";

/**
 * create a list of requisition list items from the `RequisitionListItems` context for AEP
 *
 * @remarks `discountAmount` and `selectedOtions` are not supported in the sdk type yet
 */
const createProductListItemsFromRequisitionListItems = (
    requisitionListItemsContext: RequisitionListItems,
    storefrontContext: StorefrontInstance,
): ProductListItem[] => {
    
    return requisitionListItemsContext.items?.map((item) => {
        return {
            SKU: item.sku,
            name: item.name,
            quantity: Number(item.quantity),
            priceTotal: (Number(item.pricing?.regularPrice) || 0) * Number(item.quantity),
            currencyCode: item.pricing?.currencyCode ?? storefrontContext.storeViewCurrencyCode,
            selectedOptions: item.selectedOptions
        }
    });
};

const createRequisitionList = (
    requisitionListContext: RequisitionListContext
) : RequisitionList => {
    return { 
                ID: requisitionListContext?.id?.toString(),
                name: requisitionListContext?.name,
                description: requisitionListContext?.description,
           }
};

export { createProductListItemsFromRequisitionListItems,
         createRequisitionList };
