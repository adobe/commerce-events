import { createProductCtx } from "../../src/contexts";
import schemas from "../../src/schemas";
import { mockProductCtx } from "../utils/mocks";

test("creates context", () => {
    // we don't send product id to snowplow anymore, but don't want to break mocks for any aep tests
    const { productId, ...mockProductCtxNoId } = mockProductCtx;

    const ctx = createProductCtx();

    expect(ctx).toEqual({
        data: mockProductCtxNoId,
        schema: schemas.PRODUCT_SCHEMA_URL,
    });
});
