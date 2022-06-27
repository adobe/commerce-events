import { createSearchResultCategoryCtx } from "../../src/contexts";
import schemas from "../../src/schemas";
import { mockSearchResultCategoryCtx } from "../utils/mocks";

test("creates context", () => {
    const ctx = createSearchResultCategoryCtx("search-bar", "Pants");

    expect(ctx).toEqual({
        data: mockSearchResultCategoryCtx,
        schema: schemas.SEARCH_RESULT_CATEGORY_SCHEMA_URL,
    });
});
