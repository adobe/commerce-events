import sade from "sade";

import { DEFAULT_OPTIONS, normalizeOptions } from "./options";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require("../package.json");

const toArray = (val: string | string[]) => (Array.isArray(val) ? val : val == null ? [] : [val]);

const program = (handler: any) => {
    const cmd = (type: "build" | "watch") => (str: string | string[], opts: any) => {
        opts.watch = opts.watch || type === "watch";

        opts.entries = toArray(str || opts.entry).concat(opts._);

        const allOptions = normalizeOptions(opts);

        handler(allOptions);
    };

    const prog = sade("minibundle");

    prog.version(version)
        .option("--entry, -i", "Entry module(s)")
        .option("--output, -o", "Directory to place build files into")
        .option("--format, -f", `Only build specified formats (any of ${DEFAULT_OPTIONS.format} or iife)`)
        .option("--watch, -w", "Rebuilds on any change")
        .option("--pkg-main", "Outputs files analog to package.json main entries")
        .option("--target", "Specify your target environment (node or web)")
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
        .option("--cwd", "Use an alternative working directory")
        .option("--sourcemap", "Generate source map")
        .example("watch --no-sourcemap # don't generate sourcemaps")
        .option("--raw", "Show raw byte size")
        .option("--jsx", "A custom JSX pragma like React.createElement")
        .option("--jsxFragment", "A custom JSX fragment pragma like React.Fragment")
        .option("--jsxImportSource", "Declares the module specifier to be used for importing jsx factory functions")
        .option("--tsconfig", "Specify the path to a custom tsconfig.json")
        .example("build --tsconfig tsconfig.build.json")
        .option(
            "--generateTypes",
            "Whether or not to generate types , if `types` or `typings` is set in `package.json` then it will default to be `true`",
        )
        .option("--css", 'Where to output CSS: "inline" or "external"')
        .option(
            "--css-modules",
            'Turns on css-modules for all .css imports. Passing a string will override the scopeName. eg --css-modules="_[hash]"',
        )
        .option(
            "--workers",
            "Bundle module workers - see https://github.com/surma/rollup-plugin-off-main-thread#auto-bundling",
        )
        .option("--visualize", "Generate bundle makeup visualization (stats.html)");

    prog.command("build [...entries]", "", { default: true }).describe("Build once and exit").action(cmd("build"));

    prog.command("watch [...entries]").describe("Rebuilds on any change").action(cmd("watch"));

    return (argv: any) =>
        prog.parse(argv, {
            alias: {
                o: ["output", "d"],
                i: ["entry", "entries", "e"],
                w: ["watch"],
            },
            boolean: ["generateTypes"],
        });
};

export default program;
