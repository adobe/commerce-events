import { createProductCtx } from "../../src/contexts";
import schemas from "../../src/schemas";
import { mockProductCtx } from "../utils/mocks";

test("creates context", () => {
    const ctx = createProductCtx();

    expect(ctx).toEqual({
        data: mockProductCtx,
        schema: schemas.PRODUCT_SCHEMA_URL,
    });
});
