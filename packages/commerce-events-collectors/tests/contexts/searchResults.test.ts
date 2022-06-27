import { createSearchResultsCtx } from "../../src/contexts";
import schemas from "../../src/schemas";
import { mockSearchResultsCtx } from "../utils/mocks";

test("creates context", () => {
    const ctx = createSearchResultsCtx("search-bar");

    expect(ctx).toEqual({
        data: mockSearchResultsCtx,
        schema: schemas.SEARCH_RESULTS_SCHEMA_URL,
    });
});
