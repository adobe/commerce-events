const config = {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    preset: "ts-jest",
    setupFilesAfterEnv: ["<rootDir>/tests/utils/setup.ts"],
    testEnvironment: "jsdom",
    verbose: true,
    globals: {
        __VERSION__: "1.2.0",
        __DEV__: true,
    },
};

module.exports = config;
