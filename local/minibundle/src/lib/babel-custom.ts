import { createBabelInputPluginFactory } from "@rollup/plugin-babel";
import merge from "lodash.merge";
import transformFastRest from "./transform-fast-rest";
import { isTruthy } from "../utils";

const ESMODULES_TARGET = {
    esmodules: true,
};

const mergeConfigItems = (babel: any, type: any, ...configItemsToMerge: any) => {
    const mergedItems: any[] = [];

    configItemsToMerge.forEach((configItemToMerge: any) => {
        configItemToMerge.forEach((item: any) => {
            const itemToMergeWithIndex = mergedItems.findIndex(
                (mergedItem) => (mergedItem.name || mergedItem.file.resolved) === (item.name || item.file.resolved),
            );

            if (itemToMergeWithIndex === -1) {
                mergedItems.push(item);
                return;
            }

            mergedItems[itemToMergeWithIndex] = babel.createConfigItem(
                [
                    mergedItems[itemToMergeWithIndex].file.resolved,
                    merge(mergedItems[itemToMergeWithIndex].options, item.options),
                ],
                {
                    type,
                },
            );
        });
    });

    return mergedItems;
};

const createConfigItems = (babel: any, type: any, items: any) => {
    return items.map((item: any) => {
        // eslint-disable-next-line prefer-const
        let { name, value, ...options } = item;
        value = value || [require.resolve(name), options];
        return babel.createConfigItem(value, { type });
    });
};

const environmentPreset = "@babel/preset-env";
// capture both @babel/env & @babel/preset-env (https://babeljs.io/docs/en/presets#preset-shorthand)
const presetEnvRegex = new RegExp(/@babel\/(preset-)?env/);

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return createBabelInputPluginFactory((babelCore) => {
        return {
            // Passed the plugin options.
            options({ custom: customOptions, ...pluginOptions }) {
                return {
                    // Pull out any custom options that the plugin might have.
                    customOptions,

                    // Pass the options back with the two custom options removed.
                    pluginOptions,
                };
            },

            config(config, { customOptions }) {
                const targets = customOptions.targets;
                const isNodeTarget = targets && targets.node != null;

                const defaultPlugins = createConfigItems(
                    babelCore,
                    "plugin",
                    [
                        {
                            name: "@babel/plugin-syntax-import-meta",
                        },
                        !customOptions.jsxImportSource && {
                            name: "@babel/plugin-transform-react-jsx",
                            pragma: customOptions.pragma || "h",
                            pragmaFrag: customOptions.pragmaFrag || "Fragment",
                        },
                        !customOptions.typescript && {
                            name: "@babel/plugin-transform-flow-strip-types",
                        },
                        isTruthy(customOptions.defines) && {
                            name: "babel-plugin-transform-replace-expressions",
                            replace: customOptions.defines,
                        },
                        !customOptions.modern &&
                            !isNodeTarget && {
                                name: "babel-plugin-transform-async-to-promises",
                                inlineHelpers: true,
                                externalHelpers: false,
                                minify: true,
                            },
                        !customOptions.modern &&
                            !isNodeTarget && {
                                value: [
                                    transformFastRest,
                                    {
                                        // Use inline [].slice.call(arguments)
                                        helper: false,
                                        literal: true,
                                    },
                                    "transform-fast-rest",
                                ],
                            },
                        {
                            name: "@babel/plugin-proposal-class-properties",
                            loose: true,
                        },
                        !customOptions.modern &&
                            !isNodeTarget && {
                                name: "@babel/plugin-transform-regenerator",
                                async: false,
                            },
                        {
                            name: "babel-plugin-macros",
                        },
                    ].filter(Boolean),
                );

                const babelOptions = config.options || {};

                const envIdx = (babelOptions.presets || []).findIndex((preset: any) =>
                    presetEnvRegex.test(preset.file.request),
                );

                if (envIdx !== -1) {
                    const preset = (babelOptions as any).presets[envIdx];
                    (babelOptions as any).presets[envIdx] = babelCore.createConfigItem(
                        [
                            require.resolve(environmentPreset),
                            Object.assign(
                                merge(
                                    {
                                        loose: true,
                                        useBuiltIns: false,
                                        targets: customOptions.targets,
                                    },
                                    preset.options,
                                    {
                                        bugfixes: customOptions.modern,
                                        modules: false,
                                        exclude: merge(
                                            ["transform-async-to-generator", "transform-regenerator"],
                                            (preset.options && preset.options.exclude) || [],
                                        ),
                                    },
                                ),
                                customOptions.modern ? { targets: ESMODULES_TARGET } : {},
                            ),
                        ],
                        {
                            type: `preset`,
                        },
                    );
                } else {
                    babelOptions.presets = createConfigItems(
                        babelCore,
                        "preset",
                        [
                            {
                                name: environmentPreset,
                                targets: customOptions.modern ? ESMODULES_TARGET : customOptions.targets,
                                modules: false,
                                loose: true,
                                useBuiltIns: false,
                                bugfixes: customOptions.modern,
                                exclude: ["transform-async-to-generator", "transform-regenerator"],
                            },
                            customOptions.jsxImportSource && {
                                name: "@babel/preset-react",
                                runtime: "automatic",
                                importSource: customOptions.jsxImportSource,
                            },
                        ].filter(Boolean),
                    );
                }

                // Merge babelrc & our plugins together
                babelOptions.plugins = mergeConfigItems(
                    babelCore,
                    "plugin",
                    defaultPlugins,
                    babelOptions.plugins || [],
                );

                if (customOptions.compress) {
                    babelOptions.generatorOpts = {
                        minified: true,
                        compact: true,
                        shouldPrintComment: (comment) => /[@#]__[A-Z]+__/.test(comment),
                    };
                }

                return babelOptions;
            },
        };
    });
};
