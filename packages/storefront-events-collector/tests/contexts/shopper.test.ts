import { createShopperCtx } from "../../src/contexts";
import schemas from "../../src/schemas";
import { mockShopperCtx } from "../utils/mocks";

test("creates context", () => {
    const ctx = createShopperCtx();

    expect(ctx).toEqual({
        data: mockShopperCtx,
        schema: schemas.SHOPPER_SCHEMA_URL,
    });
});
