import Head from "next/head";
import Link from "next/link";

export default function Research() {
  return (
    <>
      <Head>
        <title>Research | Eddy Guo</title>
      </Head>
      <h1>Web3 Research</h1>
      <p>
        I am a developer and analyst for the UW Blockchain Club - to keep track
        of what I'm learning and hold myself accountable, I will try my best to
        update this page consistently &#128526;
      </p>
      <ul className="bottom">
        <li>
          <Link href="/research/MEV">
            <a>MEV</a>
          </Link>
        </li>
        <li>
          <Link href="/research/on-chain-analytics">
            <a>On-Chain Analytics</a>
          </Link>
        </li>
      </ul>
      <Link href="/">
        <a>&#8592; Back to home</a>
      </Link>
    </>
  );
}
