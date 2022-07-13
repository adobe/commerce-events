import { createDataServicesExtensionCtx } from "../../src/contexts";
import schemas from "../../src/schemas";
import { mockDataServicesExtensionCtx } from "../utils/mocks";

test("creates context", () => {
    const ctx = createDataServicesExtensionCtx();

    expect(ctx).toEqual({
        data: mockDataServicesExtensionCtx,
        schema: schemas.DATA_SERVICES_EXTENSION_SCHEMA_URL,
    });
});
