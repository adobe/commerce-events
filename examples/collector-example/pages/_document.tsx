import Document, { Html, Head, Main, NextScript } from "next/document";


export default class CustomDocument extends Document<unknown> {
    render(): React.ReactElement {
        return (
            <Html>
                <Head>
                    {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
                    <title>Adobe Commerce Events Collectors Example</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
