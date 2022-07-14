import { createShoppingCartCtx } from "../../src/contexts";
import schemas from "../../src/schemas";
import { mockShoppingCartCtx } from "../utils/mocks";

test("creates context", () => {
    const ctx = createShoppingCartCtx();

    expect(ctx).toEqual({
        data: mockShoppingCartCtx,
        schema: schemas.SHOPPING_CART_SCHEMA_URL,
    });
});
