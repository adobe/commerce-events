import {
    createFilters,
    getCategory,
    getProduct,
    getSuggestion,
} from "../src/utils/search";
import {
    mockSearchInput,
    mockSearchInputCtx,
    mockSearchResults,
} from "./utils/mocks";

test("gets category", () => {
    const category = getCategory("Pants", mockSearchResults.units[0]);
    expect(category).toEqual(mockSearchResults.units[0].categories[0]);
});

test("gets product", () => {
    const product = getProduct("abc123", mockSearchResults.units[0]);
    expect(product).toEqual(mockSearchResults.units[0].products[0]);
});

test("gets suggestion", () => {
    const suggestion = getSuggestion("red pants", mockSearchResults.units[0]);
    expect(suggestion).toEqual(mockSearchResults.units[0].suggestions[0]);
});

test("creates filters", () => {
    const filters = createFilters(mockSearchInput.units[0]);
    expect(filters).toEqual(mockSearchInputCtx.filter);
});
