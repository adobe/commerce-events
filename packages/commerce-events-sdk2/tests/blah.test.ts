export const sum = (a: number, b: number) => {
    // if (process.env.NODE_ENV === "development") {
    //     console.log("development build!");
    // }

    if (__DEV__) {
        console.log("I should show up in a dev build");
    }

    console.log(__VERSION__);

    return a + b;
};
