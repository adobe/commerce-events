#!/usr/bin/env node

const sade = require("sade");
const micro = require("micro");
const handler = require("serve-handler");
const http = require("http");

/* eslint-disable @typescript-eslint/no-var-requires */
const { version } = require("../package.json");

const DEFAULT_FORMATS = "esm,umd"; // ENABLE_MODERN ? "modern,esm,cjs,umd" : "esm,cjs,umd";

const prog = sade("microserve");

prog.version(version)
    .option("--cwd", "Use an alternative working directory", ".")
    .option("--format, -f", `Only build specified formats (any of ${DEFAULT_FORMATS} or iife)`, DEFAULT_FORMATS)
    .option("--dir", "Specify the directory to watch", "public")
    .option("--external", "Specify external dependencies", "none")
    .option("--globals", "Specify global dependencies", "none")
    .option("--jsx", "A custom JSX pragma like React.createElement", "h")
    .option("--define", "Inline constants")
    .option("--alias", "Remap imports from one module to another", "none")
    .option("--open", "Automatically open browser", true)
    .option("--port", "Specify a port", 3000)
    .option("--single", "Serve single page app", false)
    .option("--ws", "Specify a port for the reload ws", 3301);

prog.command("watch", "", { default: true }).describe("Bundle, serve, and reload").action(run);

prog.parse(process.argv);

function run(options) {
    const server = micro(require(".")(options));
    server.listen(options.port, () => {
        process.stdout.write("microenvi running on: " + options.port + "\n");
    });
    // const server = http.createServer((request, response) => {
    //     // You pass two more arguments for config and middleware
    //     // More details here: https://github.com/vercel/serve-handler#options
    //     return handler(request, response, { public: options.dir });
    // });
    // server.listen(options.port, () => {
    //     console.log(`Running at http://localhost:${options.port}`);
    // });
}
