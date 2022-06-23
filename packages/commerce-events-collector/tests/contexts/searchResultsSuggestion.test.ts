import { createSearchResultSuggestionCtx } from "../../src/contexts";
import schemas from "../../src/schemas";
import { mockSearchResultSuggestionCtx } from "../utils/mocks";

test("creates context", () => {
    const ctx = createSearchResultSuggestionCtx("search-bar", "red pants");

    expect(ctx).toEqual({
        data: mockSearchResultSuggestionCtx,
        schema: schemas.SEARCH_RESULT_SUGGESTION_SCHEMA_URL,
    });
});
