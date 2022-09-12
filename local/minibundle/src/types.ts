// https://stackoverflow.com/q/72577451
// look into this answer https://stackoverflow.com/a/67184772 since this can blow up the compiler
type CommaSeparated<T extends string, U extends T = T> = T extends string
    ? [U] extends [T]
        ? T
        : `${`${T},` | ""}${CommaSeparated<Exclude<U, T>>}`
    : never;

/** valid bundle types */
export type Formats = "esm" | "cjs" | "umd" | "iife" | "modern";

export type MinibundleOptions = {
    format: CommaSeparated<Formats>;
    cwd: string;
    watch: boolean;
};
