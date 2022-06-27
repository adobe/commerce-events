import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";
import {
    SelfDescribingJson,
    trackStructEvent,
} from "@snowplow/browser-tracker";

import { createRecommendationUnitCtx } from "../../contexts";

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

    trackStructEvent({
        category: "recommendation-unit",
        action: "view",
        property: pageContext?.pageType,
        context,
    });
};

export default handler;
