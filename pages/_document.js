import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head title='Better PW'>
                <title>Better PW</title>
                {/* discord embed */}
                <meta property="og:title" content="Better PW" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://betterpw.live" />
                <meta property="og:image" content="/media/pw_white.png" />
                <meta property="og:description" content="For the Students, by the Students ( ͡° ͜ʖ ͡°)" />
                <meta name="theme-color" content="#FFFFFF" />
                {/* <meta name="twitter:card" content="summary_large_image" /> */}

                <link rel='shortcut icon' href="/media/pw_white.png" />

                <meta name="keywords" content="better pw, pw, better physicswallah, physicswallah, pw nextjs, pankaj pw, titan pw, ankush pw, arnab pw, ag pw, rudransh pw"></meta>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}