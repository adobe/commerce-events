import { Event, SearchResultSuggestion } from "@adobe/commerce-events-sdk";

import { sendEvent } from "../../alloy";
import { createSearchResultsCtx } from "../../contexts";
import { BeaconSchema } from "../../types/aep";
import { SearchResultProduct } from "../../types/contexts";

const XDM_EVENT_TYPE = "searchResponse";

const handler = async (event: Event): Promise<void> => {
    const { searchUnitId, searchResultsContext, debugContext, customContext } = event.eventInfo;

    const searchResultsCtx = createSearchResultsCtx(searchUnitId as string, searchResultsContext);

    const suggestionsFromCtx: SearchResultSuggestion[] =
        (searchResultsCtx?.data?.suggestions as SearchResultSuggestion[]) ?? [];

    const suggestions: string[] = suggestionsFromCtx.map((suggestion: SearchResultSuggestion) => suggestion.suggestion);

    const productsFromCtx: SearchResultProduct[] = (searchResultsCtx?.data?.products as SearchResultProduct[]) ?? [];

    const productListItems = productsFromCtx.map((product: SearchResultProduct) => {
        return { SKU: product.sku, name: product.name, productImageUrl: product.imageUrl };
    });

    let payload: BeaconSchema;
    if (customContext && Object.keys(customContext as BeaconSchema).length !== 0) {
        // override payload on custom context
        payload = customContext as BeaconSchema;
    } else {
        payload = {
            siteSearch: {
                suggestions: suggestions,
                numberOfResults: searchResultsCtx?.data?.productCount as number,
            },
            productListItems,
        };
    }

    payload.searchResponse = {
        value: 1,
    };

    payload._id = debugContext?.eventId;
    payload.eventType = XDM_EVENT_TYPE;

    sendEvent(payload);
};

export default handler;
