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
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
        
        {/* Primary Meta Tags */}
        <title>Eddy Guo</title>
        <meta name="title" content="Eddy Guo" />
        <meta name="description" content="Software developer enthusiastic about web3 and blockchain development." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.eddyguo.ca/" />
        <meta property="og:title" content="Eddy Guo" />
        <meta property="og:description" content="Software developer enthusiastic about web3 and blockchain development." />
        <meta property="og:image" content="https://www.eddyguo.ca//ogimage.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.eddyguo.ca/" />
        <meta property="twitter:title" content="Eddy Guo" />
        <meta property="twitter:description" content="Software developer enthusiastic about web3 and blockchain development." />
        <meta property="twitter:image" content="https://www.eddyguo.ca//ogimage.png" />
      </Head>
      <Component {...pageProps} />
    </d>
  )
}

export default App
