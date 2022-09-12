import { getSegmentIds } from "../../../src/handlers/alloyIntegration";

describe("Get Segment Ids function", () => {
    it("Should throw correct error message if alloy is not available", async () => {
        await expect(getSegmentIds()).rejects.toEqual("Alloy not available");
    });
});
