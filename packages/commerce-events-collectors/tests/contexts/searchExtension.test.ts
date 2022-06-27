import { createSearchExtensionCtx } from "../../src/contexts";
import schemas from "../../src/schemas";
import { mockSearchExtension } from "../utils/mocks";

test("creates context", () => {
    const ctx = createSearchExtensionCtx();

    expect(ctx).toEqual({
        data: mockSearchExtension,
        schema: schemas.SEARCH_EXTENSION_SCHEMA_URL,
    });
});
