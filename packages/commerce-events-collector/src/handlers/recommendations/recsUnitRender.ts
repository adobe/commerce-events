import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";
import {
    SelfDescribingJson,
    trackStructEvent,
} from "@snowplow/browser-tracker";

import {
    createRecommendationUnitCtx,
    createRecommendedItemCtx,
} from "../../contexts";
import { getUnit } from "../../utils/recommendations";

const handler = (event: Event): void => {
    const { unitId, pageContext, recommendationsContext } = event.eventInfo;

    const context: Array<SelfDescribingJson> = [];

    const recommendationUnitCtx = createRecommendationUnitCtx(
        unitId as string,
        recommendationsContext,
    );

    if (recommendationUnitCtx) {
        context.push(recommendationUnitCtx);
    }

    const unit = getUnit(unitId as string, recommendationsContext);

    unit?.products.forEach(product => {
        const itemCtx = createRecommendedItemCtx(
            unitId as string,
            product.productId,
            recommendationsContext,
        );

        if (itemCtx) {
            context.push(itemCtx);
        }
    });

    trackStructEvent({
        category: "recommendation-unit",
        action: "impression-render",
        property: pageContext?.pageType,
        context,
    });
};

export default handler;
