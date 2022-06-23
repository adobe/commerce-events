const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "production",
    plugins: [
        new webpack.DefinePlugin({
            SNOWPLOW_COLLECTOR_URL: JSON.stringify(
                "https://commerce.adobedc.net",
            ),
            SNOWPLOW_COLLECTOR_PATH: JSON.stringify("/collector/tp2"),
        }),
    ],
});
