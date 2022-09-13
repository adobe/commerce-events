import sade from "sade";
import { DEFAULT_FORMATS, DEFAULT_OPTIONS, normalizeOptions } from "./options";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require("../package.json");

const toArray = (val: string | string[]) => (Array.isArray(val) ? val : val == null ? [] : [val]);

// eslint-disable-next-line import/no-anonymous-default-export
export default (handler: any) => {
    // const ENABLE_MODERN = process.env.MINIBUNDLE_MODERN !== "false";

    // const DEFAULT_FORMATS = ENABLE_MODERN ? "modern,esm,cjs,umd" : "esm,cjs,umd";

    const cmd = (type: string) => (str: string | string[], opts: any) => {
        opts.watch = opts.watch || type === "watch";

        opts.entries = toArray(str || opts.entry).concat(opts._);

        if (typeof opts.compress !== "undefined") {
            // Convert `--compress true/false/1/0` to booleans:
            if (typeof opts.compress !== "boolean") {
                opts.compress = opts.compress !== "false" && opts.compress !== "0";
            }
        } else {
            // the default compress value is `true` for web, `false` for Node:
            opts.compress = opts.target !== "node";
        }

        // const options = normalizeOptions(opts);

        handler(opts);
    };

    const prog = sade("minibundle");

    prog.version(version)
        .option("--entry, -i", "Entry module(s)")
        .option("--output, -o", "Directory to place build files into")
        .option("--format, -f", `Only build specified formats (any of ${DEFAULT_FORMATS} or iife)`, DEFAULT_FORMATS)
        .option("--watch, -w", "Rebuilds on any change", false)
        .option("--pkg-main", "Outputs files analog to package.json main entries", true)
        .option("--target", "Specify your target environment (node or web)", "web")
        .option("--external", `Specify external dependencies, or 'none'`)
        .option("--globals", `Specify globals dependencies, or 'none'`)
        .example("--globals react=React,jquery=$")
        .option("--define", "Replace constants with hard-coded values")
        .example("--define API_KEY=1234")
        .option("--alias", `Map imports to different modules`)
        .example("--alias react=preact")
        .option(
            "--compress",
            "Compress output using Terser (default true when --target is web, false when --target is node)",
        )
        .example("build --target web --no-compress")
        .option("--strict", 'Enforce undefined global context and add "use strict"')
        .option("--name", "Specify name exposed in UMD builds")
        .option("--cwd", "Use an alternative working directory", ".")
        .option("--sourcemap", "Generate source map")
        .example("watch --no-sourcemap # don't generate sourcemaps")
        .option("--raw", "Show raw byte size", false)
        .option("--jsx", "A custom JSX pragma like React.createElement", "h")
        .option("--jsxFragment", "A custom JSX fragment pragma like React.Fragment", "Fragment")
        .option("--jsxImportSource", "Declares the module specifier to be used for importing jsx factory functions")
        .option("--tsconfig", "Specify the path to a custom tsconfig.json")
        .example("build --tsconfig tsconfig.build.json")
        .option(
            "--generateTypes",
            "Whether or not to generate types , if `types` or `typings` is set in `package.json` then it will default to be `true`",
        )
        .option("--css", 'Where to output CSS: "inline" or "external"', "external")
        .option(
            "--css-modules",
            'Turns on css-modules for all .css imports. Passing a string will override the scopeName. eg --css-modules="_[hash]"',
            null,
        )
        .option(
            "--workers",
            "Bundle module workers - see https://github.com/surma/rollup-plugin-off-main-thread#auto-bundling",
            false,
        )
        .option("--visualize", "Generate bundle makeup visualization (stats.html)", false)
        .option("--serve", "Serve the dist folder", false);

    prog.command("build [...entries]", "", { default: true }).describe("Build once and exit").action(cmd("build"));

    prog.command("watch [...entries]").describe("Rebuilds on any change").action(cmd("watch"));

    // Parse argv; add extra aliases
    return (argv: any) => {
        // console.log(argv);
        return prog.parse(argv, {
            alias: {
                o: ["output", "d"],
                i: ["entry", "entries", "e"],
                w: ["watch"],
            },
            boolean: ["generateTypes", "serve"],
        });
    };
};
