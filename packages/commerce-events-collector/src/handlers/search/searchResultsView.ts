import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";
import {
    SelfDescribingJson,
    trackStructEvent,
} from "@snowplow/browser-tracker";

import { createSearchResultsCtx } from "../../contexts";

const handler = (event: Event): void => {
    const { searchUnitId, pageContext, searchResultsContext } = event.eventInfo;

    const searchResultsCtx = createSearchResultsCtx(
        searchUnitId as string,
        searchResultsContext,
    );

    const context: Array<SelfDescribingJson> = [];

    if (searchResultsCtx) {
        context.push(searchResultsCtx);
    }

    trackStructEvent({
        category: "search",
        action: "results-view",
        label: searchResultsCtx?.data.searchRequestId as string,
        property: pageContext?.pageType,
        context,
    });
};

export default handler;
