import Head from "next/head";
import Script from "next/script";
import { Button } from "ui";

export default function SDK() {
    return (
        <div>
            <Head>
                <title>Adobe Commerce Events SDK Example</title>
            </Head>
            <Script src="http://localhost:8080/index.js"></Script>
            <h1>SDK Example</h1>
            <Button />
        </div>
    );
}
