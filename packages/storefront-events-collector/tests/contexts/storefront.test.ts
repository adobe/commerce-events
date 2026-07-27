import { StorefrontInstance } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";
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

test("injects placeholders even when viewId is set and scope codes are also set", () => {
    const ctx = createStorefrontInstanceCtx({
        ...mockCcdmStorefrontCtx,
        storeViewCode: "default",
        storeCode: "main_website_store",
        websiteCode: "base",
    });

    expect(ctx.data.storeViewCode).toBe("STORE_VIEW_CODE");
    expect(ctx.data.storeCode).toBe("STORE_CODE");
    expect(ctx.data.websiteCode).toBe("WEBSITE_CODE");
});

test("does not inject placeholders when viewId is not set", () => {
    const ctx = createStorefrontInstanceCtx(mockStorefrontCtx as StorefrontInstance);

    expect(ctx.data.storeViewCode).toBe("default");
    expect(ctx.data.storeCode).toBe("magento");
    expect(ctx.data.websiteCode).toBe("website");
});
