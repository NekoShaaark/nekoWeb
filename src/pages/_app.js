import Head from 'next/head'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico"/>
        
        <meta name="title" content="Neko Web"/>
        <meta name="description" content="NekoWeb Project"/>

        <meta property="og:type" content="Website"/>
        <meta property="og:title" content="Neko Web"/>
        <meta property="og:description" content="NekoWeb Project"/>
        <meta property="og:url" content="https://neko-web.vercel.app"/>
        <meta property="og:image" content="https://cdn.discordapp.com/attachments/822855061751332917/968153302170730556/logo.png"/>
      </Head>


      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp