import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";
import { SelfDescribingJson, trackStructEvent } from "@snowplow/browser-tracker";

import { createProductCtx } from "../../contexts";

const handler = (event: Event): void => {
    const { pageContext, productContext } = event.eventInfo;

    const productCtx = createProductCtx(productContext);

    const context: Array<SelfDescribingJson> = [productCtx];

    trackStructEvent({
        category: "product",
        action: "view",
        property: pageContext?.pageType,
        context,
    });
};

export default handler;
