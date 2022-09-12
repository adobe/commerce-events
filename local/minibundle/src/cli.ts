#!/usr/bin/env node

import logError from "./errors";
import minibundle from "./index";
import prog from "./prog";
import { stdout } from "./utils";

// where to pull in config file?

// if have a config file, overwrite the pkgJson
// if i have a cli argument, use that over the config file

const run = (opts: any) => {
    minibundle(opts)
        .then(({ output }) => {
            if (output !== null) stdout(output);
            if (!opts.watch) process.exit(0);
        })
        .catch((err) => {
            process.exitCode = (typeof err.code === "number" && err.code) || 1;
            logError(err);
            process.exit();
        });
};

prog(run)(process.argv);
