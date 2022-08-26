export {};
describe("blah", () => {
    it("works", () => {
        const nameCache: any = {};
        const bareNameCache = nameCache;

        expect(bareNameCache).toBe(nameCache);

        nameCache.minify = true;
        console.log(nameCache);
        console.log(bareNameCache);
        expect(bareNameCache).toMatchObject(nameCache);
    });
});
