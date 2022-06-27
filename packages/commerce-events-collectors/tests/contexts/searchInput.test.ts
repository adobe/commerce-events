import { createSearchInputCtx } from "../../src/contexts";
import schemas from "../../src/schemas";
import { mockSearchInputCtx } from "../utils/mocks";

test("creates context", () => {
    const ctx = createSearchInputCtx("search-bar");

    expect(ctx).toEqual({
        data: mockSearchInputCtx,
        schema: schemas.SEARCH_INPUT_SCHEMA_URL,
    });
});
