import { Formats, MinibundleOptions } from "./types";
import { cosmiconfigSync as cosmiconfig } from "cosmiconfig";

// modern builds use babel, see if we can find an alternative with esbuild
const ENABLE_MODERN = false; // process.env.MINIBUNDLE_MODERN !== "false";
export const DEFAULT_FORMATS = ENABLE_MODERN ? "modern,esm,cjs,umd" : "esm,cjs,umd";

// these are the default options from microbundle, which uses sade to parse cli arguments, may need to abstract the alias function for easier use
export const DEFAULT_OPTIONS = {
    _: [],
    format: DEFAULT_FORMATS,
    watch: false,
    "pkg-main": true,
    target: "web",
    external: undefined,
    globals: undefined,
    define: undefined,
    alias: undefined,
    compress: true,
    strict: undefined,
    name: undefined,
    cwd: ".",
    sourcemap: undefined,
    raw: false,
    jsx: "h",
    jsxFragment: "Fragment",
    jsxImportSource: undefined,
    tsconfig: undefined,
    generateTypes: undefined,
    css: "external",
    "css-modules": null,
    workers: false,
    visualize: false,
    f: DEFAULT_FORMATS,
    w: false,
    entries: [],
};

const removeEmpty = (obj) => {
    const { _, ...rest } = obj;
    const entries = Object.fromEntries(
        Object.entries(rest)
            .filter(([_, v]) => {
                return v !== null;
            })
            .filter(([_, v]) => Array.isArray(v) && v.length > 0),
    );

    return { _, ...entries };
};

// i'd love to use the defaults in the sade package, but this does what i need it to do
// TODO: will probably need to be cleaned up values for config and cli options
export const normalizeOptions = (cli) => {
    const explorer = cosmiconfig("minibundle");
    const config = explorer.search();

    // convert to camelcase
    cli.pkgMain = cli["pkg-main"];
    cli.cssModules = cli["css-modules"];

    // strip undefined values from cli args
    const cleaned = removeEmpty(cli);

    const options = { ...DEFAULT_OPTIONS, ...config?.config, ...cleaned };

    return options;
};
