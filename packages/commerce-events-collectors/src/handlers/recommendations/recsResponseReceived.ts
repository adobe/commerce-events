import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";
import { trackStructEvent } from "@snowplow/browser-tracker";

import {
    createRecommendationUnitCtx,
    createRecommendedItemCtx,
} from "../../contexts";
import {
    RecommendationUnitContext,
    RecommendedItemContext,
} from "../../types/contexts";

const handler = (event: Event): void => {
    const { pageContext, recommendationsContext } = event.eventInfo;

    const recommendationUnitCtxs: Array<RecommendationUnitContext> = [];
    const recommendedItemCtxs: Array<RecommendedItemContext> = [];

    recommendationsContext?.units.forEach(unit => {
        const unitCtx = createRecommendationUnitCtx(
            unit.unitId as string,
            recommendationsContext,
        );

        if (unitCtx) {
            recommendationUnitCtxs.push(unitCtx);
        }

        unit.products.forEach(product => {
            {
                const itemCtx = createRecommendedItemCtx(
                    unit.unitId,
                    product.productId,
                    recommendationsContext,
                );

                if (itemCtx) {
                    recommendedItemCtxs.push(itemCtx);
                }
            }
        });
    });

    trackStructEvent({
        category: "recommendation-unit",
        action: "api-response-received",
        property: pageContext?.pageType,
        context: [...recommendationUnitCtxs, ...recommendedItemCtxs],
    });
};

export default handler;
