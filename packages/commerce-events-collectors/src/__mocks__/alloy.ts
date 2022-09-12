/* TS wrapper around `@adobe/alloy`*/

const configure = jest.fn(() => {
    return Promise.resolve(
        jest.fn(() => {
            return undefined;
        }),
    );
});

const getAlloy = jest.fn(() => {
    return Promise.resolve(
        jest.fn(() => {
            return undefined;
        }),
    );
});

const sendEvent = jest.fn(() => {
    return Promise.resolve(undefined);
});

const hasConfig = jest.fn(() => {
    return true;
});

const setConsent = jest.fn(() => {
    return Promise.resolve(undefined);
});

export { configure, getAlloy, hasConfig, sendEvent, setConsent };
