import {
    SearchInput,
    SearchInputUnit,
    SearchResultProduct,
    SearchResults,
    SearchResultSuggestion,
    SearchResultUnit,
} from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import { SearchFilter, SearchResultCategory } from "../types/contexts";

const getSearchInputUnit = (
    searchUnitId: string,
    ctx: SearchInput,
): SearchInputUnit | undefined => {
    const searchInputUnit = ctx.units.find(
        unit => unit.searchUnitId === searchUnitId,
    );

    return searchInputUnit;
};

const getSearchResultUnit = (
    searchUnitId: string,
    ctx: SearchResults,
): SearchResultUnit | undefined => {
    const searchResultUnit = ctx.units.find(
        unit => unit.searchUnitId === searchUnitId,
    );

    return searchResultUnit;
};

const getCategory = (
    name: string,
    ctx: SearchResultUnit,
): SearchResultCategory | null => {
    const category = ctx.categories.find(category => category.name === name);

    if (!category) {
        return null;
    }

    return category;
};

const getProduct = (
    sku: string,
    ctx: SearchResultUnit,
): SearchResultProduct | null => {
    const product = ctx.products.find(product => product.sku === sku);

    if (!product) {
        return null;
    }

    return product;
};

const getSuggestion = (
    suggestion: string,
    ctx: SearchResultUnit,
): SearchResultSuggestion | null => {
    const suggested = ctx.suggestions.find(s => s.suggestion === suggestion);

    if (!suggested) {
        return null;
    }

    return suggested;
};

const createFilters = (ctx: SearchInputUnit): Array<SearchFilter> => {
    const filters: Array<SearchFilter> = [];

    ctx.filter.forEach(filter => {
        // eq
        if (filter.eq) {
            filters.push({
                name: filter.attribute,
                values: [filter.eq],
                operator: "eq",
            });
        }

        // in
        if (filter.in?.length) {
            filters.push({
                name: filter.attribute,
                values: filter.in,
                operator: "in",
            });
        }

        // range
        if (filter.range) {
            const values: SearchFilter["values"] = [];

            if (filter.range?.from) {
                values.push(filter.range?.from?.toString());
            }

            if (filter.range?.to) {
                values.push(filter.range?.to?.toString());
            }

            filters.push({
                name: filter.attribute,
                values,
                operator: "range",
            });
        }
    });

    return filters;
};

export {
    createFilters,
    getCategory,
    getProduct,
    getSearchInputUnit,
    getSearchResultUnit,
    getSuggestion,
};
