//documents.jsx is the main page for the documents section of the website
// It is the parent component for the documents section of the website

import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    render() {
        return(
            <Html lang='en'>
                <Head>
                    <meta name='description' content='Next.js Blog' />
                    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                    <link rel='icon' href='/favicon.ico' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}