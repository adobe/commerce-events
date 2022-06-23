import { createMagentoExtensionCtx } from "../../src/contexts";
import schemas from "../../src/schemas";
import { mockExtensionCtx } from "../utils/mocks";

test("creates context", () => {
    const ctx = createMagentoExtensionCtx();

    expect(ctx).toEqual({
        data: mockExtensionCtx,
        schema: schemas.MAGENTO_EXTENSION_SCHEMA_URL,
    });
});
