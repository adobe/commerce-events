import { createStorefrontInstanceCtx } from "../../src/contexts";
import schemas from "../../src/schemas";
import { mockStorefrontCtx, mockCcdmStorefrontCtx, mockCcdmStorefrontProcessedCtx } from "../utils/mocks";

test("creates context main", () => {
    const ctx = createStorefrontInstanceCtx();

    expect(ctx).toEqual({
        data: mockStorefrontCtx,
        schema: schemas.STOREFRONT_INSTANCE_SCHEMA_URL,
    });
});

test("creates storefront context for ccdm", () => {
    const ctx = createStorefrontInstanceCtx(mockCcdmStorefrontCtx);

    expect(ctx).toEqual({
        data: mockCcdmStorefrontProcessedCtx,
        schema: schemas.STOREFRONT_INSTANCE_SCHEMA_URL,
    });
});

// ToDO: add cases when locale exists but scope codes are not empty
