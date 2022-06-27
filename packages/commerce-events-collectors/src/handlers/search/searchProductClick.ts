import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";
import {
    SelfDescribingJson,
    trackStructEvent,
} from "@snowplow/browser-tracker";

import {
    createSearchResultProductCtx,
    createSearchResultsCtx,
} from "../../contexts";

const handler = (event: Event): void => {
    const { searchUnitId, sku, pageContext, searchResultsContext } =
        event.eventInfo;

    const searchResultsCtx = createSearchResultsCtx(
        searchUnitId as string,
        searchResultsContext,
    );

    const searchResultsProductCtx = createSearchResultProductCtx(
        searchUnitId as string,
        sku as string,
        searchResultsContext,
    );

    const context: Array<SelfDescribingJson> = [];

    if (searchResultsCtx) {
        context.push(searchResultsCtx);
    }

    if (searchResultsProductCtx) {
        context.push(searchResultsProductCtx);
    }

    trackStructEvent({
        category: "search",
        action: "product-click",
        label: searchResultsProductCtx?.data.sku as string,
        property: pageContext?.pageType,
        context,
    });
};

export default handler;
