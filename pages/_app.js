import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import '../styles/global.css'

const App = ({ Component, pageProps }) => {
  const { router } = useRouter()
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [router])

  return (
    <d>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />

        {/* Primary Meta Tags */}
        <title>Hey, I'm Eddy Guo 🍝</title>
        <meta name="title" content="Hey, I'm Eddy Guo 🍝" />
        <meta name="description" content="This is the regular description of my website." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.eddyguo.ca/" />
        <meta property="og:title" content="Hey, I'm Eddy Guo 🍝" />
        <meta property="og:description" content="This is the Facebook description of my website." />
        <meta property="og:image" content="Image should go here." />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.eddyguo.ca/" />
        <meta property="twitter:title" content="Hey, I'm Eddy Guo 🍝" />
        <meta property="twitter:description" content="This is the Twitter description of my website." />
        <meta property="twitter:image" content="Image should go here." />
      </Head>
      <Component {...pageProps} />
    </d>
  )
}

export default App
