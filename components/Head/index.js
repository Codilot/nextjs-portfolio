import Head from 'next/head'

const HeadComp = () => (
    <Head>
        <title>UI Jinn</title>
        <meta charSet="utf-8" />
        <meta
            name="description"
            content="UI Jinn creates interfaces, prototypes and design systems."
        />
        <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="device"
        />
        <meta
            property="og:title"
            content="UI Jinn creates interfaces, prototypes and design systems."
            key="title"
        />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;800&display=swap" rel="stylesheet"></link>
    </Head>
)

export default HeadComp
