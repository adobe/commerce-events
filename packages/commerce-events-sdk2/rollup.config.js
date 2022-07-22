import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";
import license from "rollup-plugin-license";
import serve from "rollup-plugin-serve";

import pkg from "./package.json";

const isProduction = process.env.NODE_ENV === "production";

const config = {
    input: `src/index.ts`,
    output: [
        {
            dir: "dist",
            entryFileNames: "umd.[name].js",
            format: "umd",
            name: "commerceEventsSDK",
            sourcemap: isProduction,
        },
        // {
        //     input: "src/index.ts",
        //     output: [{ file: "dist/index.d.ts", format: "es" }],
        //     plugins: [dts()],
        // },
    ],
    plugins: [
        esbuild({
            include: /\.[jt]sx?$/, // default, inferred from `loaders` option
            exclude: /node_modules/, // default
            sourceMap: isProduction, // by default inferred from rollup's `output.sourcemap` option
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
            sourcemap: isProduction,
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
};

export default config;
