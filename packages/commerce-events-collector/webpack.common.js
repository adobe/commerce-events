const path = require("path");
const webpack = require("webpack");
const { name, version } = require("./package.json");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const copyRightText =
    "Copyright © Adobe, Inc. All rights reserved.See COPYING.txt for license details.";

const banner = `${name}@v${version}\n${copyRightText}`;

const config = {
    entry: "./src/index.ts",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "",
        library: {
            name: "magentoStorefrontEventCollector",
            type: "umd",
            export: "default",
            umdNamedDefine: true,
        },
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin(), new webpack.BannerPlugin(banner)],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    },
    devServer: {
        static: path.join(__dirname, "dist"),
        hot: true,
    },
};

module.exports = config;
