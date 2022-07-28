import getECID from "../src/getECID";

describe("Get ECID function", () => {
    it("Should throw correct error message if alloy is not available", async () => {
        await expect(getECID()).rejects.toEqual("Alloy not available");
    });
});
