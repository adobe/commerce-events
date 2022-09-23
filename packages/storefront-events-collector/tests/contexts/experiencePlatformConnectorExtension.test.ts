import { createExperiencePlatformConnectorExtensionCtx } from "../../src/contexts";
import schemas from "../../src/schemas";
import { mockExperiencePlatformExtensionCtx } from "../utils/mocks";

test("creates context", () => {
    const ctx = createExperiencePlatformConnectorExtensionCtx();

    expect(ctx).toEqual({
        data: mockExperiencePlatformExtensionCtx,
        schema: schemas.EXPERIENCE_PLATFORM_CONNECTOR_EXTENSION_SCHEMA_URL,
    });
});
