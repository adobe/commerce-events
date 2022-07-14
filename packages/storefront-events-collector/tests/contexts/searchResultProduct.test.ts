import { createSearchResultProductCtx } from "../../src/contexts";
import schemas from "../../src/schemas";
import { mockSearchResultProductCtx } from "../utils/mocks";

test("creates context", () => {
    const ctx = createSearchResultProductCtx("search-bar", "abc123");

    expect(ctx).toEqual({
        data: mockSearchResultProductCtx,
        schema: schemas.SEARCH_RESULT_PRODUCT_SCHEMA_URL,
    });
});
