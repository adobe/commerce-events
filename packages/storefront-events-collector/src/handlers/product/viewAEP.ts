import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { sendEvent } from "../../alloy";
import { BeaconSchema, ProductListItem } from "../../types/aep";
import { getDiscountAmount } from "../../utils/discount";
import { createCommerceScope } from "../../utils/aep/commerceScope";

const XDM_EVENT_TYPE = "commerce.productViews";

const aepHandler = async (event: Event): Promise<void> => {
    const { productContext, debugContext, customContext, storefrontInstanceContext } = event.eventInfo;

    let payload: BeaconSchema = {};
    if (customContext && Object.keys(customContext as BeaconSchema).length !== 0) {
        // override payload on custom context
        payload = customContext as BeaconSchema;
    }

    const productListItemFromCustomContext: ProductListItem | undefined = payload.productListItems?.length
        ? payload.productListItems[0]
        : undefined;

    const productListItem = productListItemFromCustomContext || {};

    productListItem.SKU = productListItem.SKU || productContext?.sku;
    productListItem.name = productListItem.name || productContext?.name;
    productListItem.productImageUrl = productListItem.productImageUrl || productContext?.mainImageUrl;
    productListItem.priceTotal =
        productListItem.priceTotal || (productContext?.pricing?.specialPrice ?? productContext?.pricing?.regularPrice);
    productListItem.currencyCode =
        productListItem?.currencyCode ||
        (productContext?.pricing?.currencyCode ?? storefrontInstanceContext?.storeViewCurrencyCode ?? undefined);
    productListItem.discountAmount = productListItem?.discountAmount || getDiscountAmount(productContext);
    payload.productListItems = [productListItem];

    payload.commerce = payload.commerce || {};

    payload.commerce.productViews = {
        value: 1,
    };

    payload.commerce.commerceScope = createCommerceScope(storefrontInstanceContext);

    payload._id = debugContext?.eventId;
    payload.eventType = XDM_EVENT_TYPE;

    sendEvent(payload);
};

export default aepHandler;
