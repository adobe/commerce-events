import { promises as fs } from "fs";
import camelCase from "camelcase";

export const readFile = fs.readFile;

export const stat = fs.stat;

export const isDir = async (name: string) => {
    return stat(name)
        .then((stats) => stats.isDirectory())
        .catch(() => false);
};

export const isFile = async (name: string) => {
    return stat(name)
        .then((stats) => stats.isFile())
        .catch(() => false);
};

export const stdout = console.log.bind(console);
export const stderr = console.error.bind(console);

export const isTruthy = (obj: typeof Object) => {
    if (!obj) {
        return false;
    }

    return obj.constructor !== Object || Object.keys(obj).length > 0;
};

/** Remove a @scope/ prefix from a package name string */
export const removeScope = (name: string) => name.replace(/^@.*\//, "");

export const safeVariableName = (name: string) => {
    const normalized = removeScope(name).toLowerCase();
    const identifier = normalized.replace(/((^[^a-zA-Z]+)|[^\w.-])|([^a-zA-Z0-9]+$)/g, "");

    return camelCase(identifier);
};
export const EXTENSION = /(\.(umd|cjs|es|m))?\.([cm]?[tj]sx?)$/;
