/* eslint-disable import/no-anonymous-default-export */
import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";
import license from "rollup-plugin-license";
import serve from "rollup-plugin-serve";

import pkg from "./package.json";

const isProduction = process.env.NODE_ENV === "production";

const bundle = (config) => ({
    ...config,
    input: "src/index.ts",
    external: (id) => !/^[./]/.test(id),
});

export default [
    bundle({
        output: [
            {
                dir: "dist",
                entryFileNames: `umd.[name].js`,
                name: "myBundle",
                format: "umd",
                sourcemap: true,
            },
            {
                dir: "dist",
                entryFileNames: `[name].js`,
                format: "cjs",
                sourcemap: true,
            },
            {
                dir: "dist",
                entryFileNames: `[name].mjs`,
                format: "es",
                sourcemap: true,
            },
        ],
        plugins: [
            esbuild({
                // All options are optional
                include: /\.[jt]sx?$/, // default, inferred from `loaders` option
                exclude: /node_modules/, // default
                sourceMap: true, // by default inferred from rollup's `output.sourcemap` option
                minify: process.env.NODE_ENV === "production",
                target: "es2017", // default, or 'es20XX', 'esnext'
                // Like @rollup/plugin-replace
                define: {
                    __VERSION__: `"${pkg.version}"`,
                    __DEV__: process.env.NODE_ENV !== "production",
                },
                tsconfig: "tsconfig.json",
            }),
            license({
                sourcemap: true,
                banner: "<%= pkg.name %> \nv<%= pkg.version %> \nby <%= pkg.author %>",
            }),
            !isProduction &&
                serve({
                    contentBase: "dist",
                    port: 8080,
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                    },
                }),
        ].filter(Boolean),
    }),
    bundle({
        output: {
            dir: "dist",
            entryFileNames: `[name].d.ts`,
            format: "es",
        },
        plugins: [dts()],
    }),
];

// const config = {
//     input: `src/index.ts`,
//     output: [
//         {
//             dir: "dist",
//             entryFileNames: "umd.[name].js",
//             format: "umd",
//             name: "commerceEventsSDK",
//             sourcemap: true,
//         },
//         // {
//         //     input: "src/index.ts",
//         //     output: [{ file: "dist/index.d.ts", format: "es" }],
//         //     plugins: [dts()],
//         // },
//     ],
//     plugins: [
//         esbuild({
//             include: /\.[jt]sx?$/, // default, inferred from `loaders` option
//             exclude: /node_modules/, // default
//             sourceMap: true, // by default inferred from rollup's `output.sourcemap` option
//             minify: process.env.NODE_ENV === "production",
//             target: "es2017", // default, or 'es20XX', 'esnext'
//             // Like @rollup/plugin-replace
//             define: {
//                 __VERSION__: `"${pkg.version}"`,
//                 __DEV__: process.env.NODE_ENV !== "production",
//             },
//             tsconfig: "tsconfig.json",
//         }),
//         license({
//             sourcemap: true,
//             banner: "<%= pkg.name %> \nv<%= pkg.version %> \nby <%= pkg.author %>",
//         }),
//         !isProduction &&
//             serve({
//                 contentBase: "dist",
//                 port: 8080,
//                 headers: {
//                     "Access-Control-Allow-Origin": "*",
//                 },
//             }),
//     ].filter(Boolean),
// };

// export default config;
