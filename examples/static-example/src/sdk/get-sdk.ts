// because we switched to rollup, exporting both a default and a named export gets weird
// see https://rollupjs.org/guide/en/#outputexports for more information but this is something we will have to fix
// before rolling out the 2.0 build

const { MagentoStorefrontEvents } = (window as any).commerceEventsSdk;
const sdk = new MagentoStorefrontEvents();

export { sdk };
