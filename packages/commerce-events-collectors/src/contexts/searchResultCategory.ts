import { SearchResults } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import schemas from "../schemas";
import { SearchResultCategoryContext } from "../types/contexts";
import { getCategory, getSearchResultUnit } from "../utils/search";

const createContext = (
    searchUnitId: string,
    name: string,
    searchResults?: SearchResults,
): SearchResultCategoryContext | null => {
    const mse = window.magentoStorefrontEvents;
    const searchResultsCtx = searchResults ?? mse.context.getSearchResults();

    if (!searchResultsCtx) {
        return {
            schema: schemas.SEARCH_RESULT_CATEGORY_SCHEMA_URL,
            data: {},
        };
    }

    const searchResultUnit = getSearchResultUnit(
        searchUnitId,
        searchResultsCtx,
    );

    if (!searchResultUnit) {
        return null;
    }

    const category = getCategory(name, searchResultUnit);

    if (!category) {
        return null;
    }

    const context: SearchResultCategoryContext = {
        schema: schemas.SEARCH_RESULT_CATEGORY_SCHEMA_URL,
        data: {
            name: category.name,
            url: category.url,
            rank: category.rank,
        },
    };

    return context;
};

export default createContext;
