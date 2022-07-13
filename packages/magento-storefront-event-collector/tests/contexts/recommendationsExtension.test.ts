import { createRecommendationsExtensionCtx } from "../../src/contexts";
import schemas from "../../src/schemas";
import { mockRecommendationsExtensionCtx } from "../utils/mocks";

test("creates context", () => {
    const ctx = createRecommendationsExtensionCtx();

    expect(ctx).toEqual({
        data: mockRecommendationsExtensionCtx,
        schema: schemas.RECOMMENDATIONS_EXTENSION_SCHEMA_URL,
    });
});
