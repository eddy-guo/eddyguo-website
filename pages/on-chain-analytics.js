import Head from "next/head";
import Link from "next/link";

export default function MEV() {
  return (
    <>
      <Head>
        <title>On-Chain Analytics | Eddy Guo</title>
      </Head>
      <h1>On-Chain Analytics (Dune, Parsec)</h1>
      <p>Coming soon: Dune dashboards, parsec, opensea volume analytics, rarity.tools </p>
      <Link href="/">
        <a className="nocolor">&#8592; Back to home</a>
      </Link>
    </>
  );
}
