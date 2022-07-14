const config = {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    preset: "ts-jest",
    setupFilesAfterEnv: ["<rootDir>/tests/utils/setup.ts"],
    testEnvironment: "jsdom",
    verbose: true,
};

module.exports = config;
