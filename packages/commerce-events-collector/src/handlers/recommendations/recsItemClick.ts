import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";
import {
    SelfDescribingJson,
    trackStructEvent,
} from "@snowplow/browser-tracker";

import {
    createRecommendationUnitCtx,
    createRecommendedItemCtx,
} from "../../contexts";
import { getProduct } from "../../utils/recommendations";

const handler = (event: Event): void => {
    const { unitId, productId, pageContext, recommendationsContext } =
        event.eventInfo;

    const context: Array<SelfDescribingJson> = [];

    const recommendationUnitCtx = createRecommendationUnitCtx(
        unitId as string,
        recommendationsContext,
    );

    if (recommendationUnitCtx) {
        context.push(recommendationUnitCtx);
    }

    const recommendedItemCtx = createRecommendedItemCtx(
        unitId as string,
        productId as number,
        recommendationsContext,
    );

    if (recommendedItemCtx) {
        context.push(recommendedItemCtx);
    }

    const product = getProduct(
        unitId as string,
        productId as number,
        recommendationsContext,
    );

    trackStructEvent({
        category: "recommendation-unit",
        action: "rec-click",
        property: pageContext?.pageType,
        value: product?.rank,
        context,
    });
};

export default handler;
