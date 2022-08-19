const config = {
    clearMocks: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    preset: "ts-jest",
    testEnvironment: "jsdom",
    globals: {
        __VERSION__: "1.2.0",
        __DEV__: true,
    },
};

module.exports = config;
