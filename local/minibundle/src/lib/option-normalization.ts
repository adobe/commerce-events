/**
 * Convert booleans and int define= values to literals.
 * This is more intuitive than `minibundle --define A=1` producing A="1".
 */
export function toReplacementExpression(value: string, name: string) {
    // --define A="1",B='true' produces string:
    const matches = value.match(/^(['"])(.+)\1$/);
    if (matches) {
        return [JSON.stringify(matches[2]), name];
    }

    // --define @assign=Object.assign replaces expressions with expressions:
    if (name[0] === "@") {
        return [value, name.substring(1)];
    }

    // --define A=1,B=true produces int/boolean literal:
    if (/^(true|false|\d+)$/i.test(value)) {
        return [value, name];
    }

    // default: string literal
    return [JSON.stringify(value), name];
}

/**
 * Parses values of the form "$=jQuery,React=react" into key-value object pairs.
 */
export function parseMappingArgument(globalStrings: string, processValue?: (value: string, key: string) => string[]) {
    const globals: Record<string, unknown> = {};
    globalStrings.split(",").forEach((globalString) => {
        let [key, value] = globalString.split("=");
        if (processValue) {
            const r = processValue(value, key);
            if (r !== undefined) {
                if (Array.isArray(r)) {
                    [value, key] = r;
                } else {
                    value = r;
                }
            }
        }
        globals[key] = value;
    });
    return globals;
}

/**
 * Parses values of the form "$=jQuery,React=react" into key-value object pairs.
 */
export function parseAliasArgument(aliasStrings: string) {
    return aliasStrings.split(",").map((str) => {
        const [key, value] = str.split("=");
        return { find: key, replacement: value };
    });
}
