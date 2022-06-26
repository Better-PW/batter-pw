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
                <meta property="og:image" content="https://cdn.discordapp.com/attachments/988729878444642377/990616741908463626/pw_light.png" />
                <meta property="og:description" content="Minimal and Better website for Physics Wallah.<br/>For the students, by the students." />
                <meta name="theme-color" content="#FFFFFF" />
                <meta name="twitter:card" content="summary_large_image" />

                <link rel='shortcut icon' href="https://cdn.discordapp.com/attachments/988729878444642377/990616817175265280/pw_dark.png" />

                <meta name="keywords" content="better pw, pw, better physicswallah, physicswallah, pw nextjs, pankaj pw, titan pw, ankush pw, arnab pw, ag pw, rudransh pw"></meta>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}