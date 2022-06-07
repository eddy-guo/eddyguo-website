import Head from "next/head";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Eddy Guo</title>
      </Head>
      <h1>Projects</h1>
      <p>
        Smart contracts and the concept of "programmable money" were the first
        crypto-related topics I researched back in January of 2022.
        <br />
        This was followed closely by dApps (Decentralized applications), which I
        thought was a perfect way to bridge my passion for programming and
        interest in the web3 space. Whether it be decentralized finance, gaming,
        or technology, I was interested and wanted to create something on my
        own.
      </p>
      <ul className="bottom">
        <li>
          <Link href="/projects/arbitragebot">
            <a>WETH/DAI Arbitrage Bot</a>
          </Link>
        </li>
      </ul>
      <Link href="/">
        <a className="nocolor">&#8592; Back to home</a>
      </Link>
    </>
  );
}
