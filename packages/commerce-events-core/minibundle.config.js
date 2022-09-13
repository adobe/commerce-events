const serve = require("rollup-plugin-serve");

const isDevelopment = !["testing", "production"].includes(process.env.NODE_ENV);

/** @type {import('minibundle').MinibundleOptions} */
module.exports = {
    // plugins: [isDevelopment && serve({ contentBase: "dist" })].filter(Boolean),
};
