import { SearchResults } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import schemas from "../schemas";
import { SearchResultsContext } from "../types/contexts";
import { getSearchResultUnit } from "../utils/search";

const createContext = (searchUnitId: string, searchResults?: SearchResults): SearchResultsContext | null => {
    const mse = window.magentoStorefrontEvents;
    const searchResultsCtx = searchResults ?? mse.context.getSearchResults();

    if (!searchResultsCtx) {
        return {
            schema: schemas.SEARCH_RESULTS_SCHEMA_URL,
            data: {},
        };
    }

    const searchResultsUnit = getSearchResultUnit(searchUnitId, searchResultsCtx);

    if (!searchResultsUnit) {
        return null;
    }

    const context: SearchResultsContext = {
        schema: schemas.SEARCH_RESULTS_SCHEMA_URL,
        data: {
            ...searchResultsUnit,
            productCount: searchResultsUnit.products.length,
            categoryCount: searchResultsUnit.categories.length,
            suggestionCount: searchResultsUnit.suggestions.length,
        },
    };

    return context;
};

export default createContext;
