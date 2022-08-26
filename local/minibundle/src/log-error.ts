import { red, dim } from "kleur";
import { stderr } from "./utils";

// class BundleError extends Error {
//     error: string;

//     constructor(message: string) {
//         super(message);
//         this.error = message;
//     }
// }

export default function logError(err: Error) {
    const error = (err as any).error || err;
    const description = `${error.name ? error.name + ": " : ""}${error.message || error}`;
    const message = error.plugin ? `(${error.plugin} plugin) ${description}` : description;

    stderr(red().bold(message));

    if (error.loc) {
        stderr();
        stderr(`at ${error.loc.file}:${error.loc.line}:${error.loc.column}`);
    }

    if (error.frame) {
        stderr();
        stderr(dim(error.frame));
    } else if (err.stack) {
        const headlessStack = error.stack.replace(message, "");
        stderr(dim(headlessStack));
    }

    stderr();
}
