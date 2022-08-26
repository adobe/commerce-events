#!/usr/bin/env node

import minibundle from "./index";
import logError from "./log-error";
import prog from "./prog";
import { stdout } from "./utils";

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
