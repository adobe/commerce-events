/* eslint-disable import/no-anonymous-default-export */
import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";
import license from "rollup-plugin-license";
import serve from "rollup-plugin-serve";
import resolve, { DEFAULTS as RESOLVE_DEFAULTS } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

import pkg from "./package.json";

/******************************************************************************************************/
/* planning on moving this to it's own local package but for now i'm just hashing out the beginnings  */
/******************************************************************************************************/
const isProduction = process.env.NODE_ENV === "production";
const isTesting = process.env.NODE_ENV === "testing";

// creates a full build that bundles all modules needed
const bundle = (config) => ({
    ...config,
    input: "./src/index.ts",
    // external: (id) => !/^[./]/.test(id),
    output: [
        {
            dir: "dist",
            entryFileNames: `umd.[name].js`,
            name: "commerceEventsSdk",
            format: "umd",
            sourcemap: true,
            // exports: "named",
        },
    ],
});

// creates a "slim" build that doesn't bundle 3rd party modules
const slim = (config) => ({
    ...config,
    input: "./src/index.ts",
    // external tells rollup to not bundle the 3rd party package, and assume that it's on the page
    external: ["@adobe/adobe-client-data-layer"],
    output: [
        {
            dir: "dist",
            entryFileNames: `umd.[name]-slim.js`,
            name: "commerceEventsSdk",
            format: "umd",
            sourcemap: true,
            // exports: "named",
        },
    ],
});

// plugins for each build
const plugins = [
    // resolve node_modules
    resolve({
        mainFields: ["module", "main", "browser"],
        extensions: [...RESOLVE_DEFAULTS.extensions, ".cjs", ".mjs", ".jsx"],
    }),
    // commonjs
    commonjs({
        include: /\/node_modules\//,
    }),
    // json plugin (if we need it)
    // typescript
    esbuild({
        // All options are optional
        include: /\.[jt]sx?$/, // default, inferred from `loaders` option
        exclude: /node_modules/, // default
        sourceMap: true, // by default inferred from rollup's `output.sourcemap` option
        minify: true, //process.env.NODE_ENV === "production",
        target: "es2015", // default, or 'es20XX', 'esnext'
        // Like @rollup/plugin-replace
        define: {
            __VERSION__: `"${pkg.version}"`,
            __DEV__: process.env.NODE_ENV !== "production",
        },
        tsconfig: "tsconfig.json",
    }),
    // source maps
    // should minify
    license({
        sourcemap: true,
        banner: "<%= pkg.name %> \nv<%= pkg.version %> \nby <%= pkg.author.name %>",
    }),
];

export default [
    bundle({ plugins }),
    slim({ plugins }),
    // creates types and will start a server to host `dist` folder
    // if running in development environment
    {
        input: "./src/types/index.ts",
        external: (id) => !/^[./]/.test(id),
        output: {
            dir: "dist",
            entryFileNames: `[name].d.ts`,
            // format: "es",
        },
        plugins: [
            dts(),
            !isProduction &&
                !isTesting &&
                serve({
                    contentBase: "dist",
                    port: 8787,
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                    },
                }),
        ].filter(Boolean),
    },
];
