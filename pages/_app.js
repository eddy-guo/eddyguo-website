import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "../styles/global.css";

const App = ({ Component, pageProps }) => {
  const { router } = useRouter();
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, [router]);

  return (
    <d>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </d>
  );
};

export default App;
