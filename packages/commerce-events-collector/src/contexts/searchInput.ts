import { SearchInput } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import schemas from "../schemas";
import { SearchInputContext } from "../types/contexts";
import { createFilters, getSearchInputUnit } from "../utils/search";

const createContext = (
    searchUnitId: string,
    searchInput?: SearchInput,
): SearchInputContext | null => {
    const mse = window.magentoStorefrontEvents;
    const searchInputCtx = searchInput ?? mse.context.getSearchInput();

    if (!searchInputCtx) {
        return {
            schema: schemas.SEARCH_INPUT_SCHEMA_URL,
            data: {},
        };
    }

    const searchInputUnit = getSearchInputUnit(searchUnitId, searchInputCtx);

    if (!searchInputUnit) {
        return null;
    }

    const context: SearchInputContext = {
        schema: schemas.SEARCH_INPUT_SCHEMA_URL,
        data: {
            searchUnitId: searchInputUnit.searchUnitId,
            source: null,
            queryTypes: searchInputUnit.queryTypes,
            searchRequestId: searchInputUnit.searchRequestId,
            query: searchInputUnit.phrase,
            page: searchInputUnit.currentPage,
            perPage: searchInputUnit.pageSize,
            filter: createFilters(searchInputUnit),
            sort: searchInputUnit.sort,
        },
    };

    return context;
};

export default createContext;
