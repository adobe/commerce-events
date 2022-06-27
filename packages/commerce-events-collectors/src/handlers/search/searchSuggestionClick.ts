import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";
import {
    SelfDescribingJson,
    trackStructEvent,
} from "@snowplow/browser-tracker";

import {
    createSearchResultsCtx,
    createSearchResultSuggestionCtx,
} from "../../contexts";

const handler = (event: Event): void => {
    const { searchUnitId, suggestion, pageContext, searchResultsContext } =
        event.eventInfo;

    const searchResultsCtx = createSearchResultsCtx(
        searchUnitId as string,
        searchResultsContext,
    );

    const searchResultsSuggestionCtx = createSearchResultSuggestionCtx(
        searchUnitId as string,
        suggestion as string,
        searchResultsContext,
    );

    const context: Array<SelfDescribingJson> = [];

    if (searchResultsCtx) {
        context.push(searchResultsCtx);
    }

    if (searchResultsSuggestionCtx) {
        context.push(searchResultsSuggestionCtx);
    }

    trackStructEvent({
        category: "search",
        action: "suggestion-click",
        label: searchResultsSuggestionCtx?.data.suggestion as string,
        property: pageContext?.pageType,
        context,
    });
};

export default handler;
