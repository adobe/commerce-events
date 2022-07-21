module.exports = {
    transform: { "^.+\\.tsx?$": "esbuild-jest" },
    transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    collectCoverageFrom: ["src/**/*.{ts,tsx,js,jsx}"],
    testMatch: ["<rootDir>/**/*.(spec|test).{ts,tsx,js,jsx}"],
    testEnvironment: "jsdom",
    testEnvironmentOptions: {
        url: "http://localhost",
    },
    watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
};
