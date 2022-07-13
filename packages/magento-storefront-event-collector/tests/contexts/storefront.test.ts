import { createStorefrontInstanceCtx } from "../../src/contexts";
import schemas from "../../src/schemas";
import { mockStorefrontCtx } from "../utils/mocks";

test("creates context", () => {
    const ctx = createStorefrontInstanceCtx();

    expect(ctx).toEqual({
        data: mockStorefrontCtx,
        schema: schemas.STOREFRONT_INSTANCE_SCHEMA_URL,
    });
});
