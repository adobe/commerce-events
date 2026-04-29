const config = {
    clearMocks: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    preset: "ts-jest",
    testEnvironment: "jsdom",

    moduleNameMapper: {
        "@adobe/adobe-client-data-layer":
            "<rootDir>/../../node_modules/@adobe/adobe-client-data-layer/dist/adobe-client-data-layer.min.js",
    },
};

module.exports = config;
