import { createTrackerCtx } from "../../src/contexts";
import schemas from "../../src/schemas";
import { mockTrackerCtx } from "../utils/mocks";

test("creates context", () => {
    const ctx = createTrackerCtx();

    expect(ctx).toEqual({
        data: mockTrackerCtx,
        schema: schemas.MAGENTO_JS_TRACKER_SCHEMA_URL,
    });
});
