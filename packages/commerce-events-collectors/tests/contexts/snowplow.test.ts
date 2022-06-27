import { createSnowplowCtx } from "../../src/contexts";

test("creates context", () => {
    const ctx = createSnowplowCtx();

    expect(ctx).toEqual([
        expect.any(Function),
        expect.any(Function),
        expect.any(Function),
        expect.any(Function),
        expect.any(Function),
        expect.any(Function),
        expect.any(Function),
    ]);
});
