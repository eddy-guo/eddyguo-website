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
        DAOs (decentralized autonomous organizations), dApps (decentralized
        applications), and DEXs (decentralized exchanges) are all great ways to
        bridge my passion for programming with my interest in blockchain
        development.
        <br />
        <br />
        Whether it be decentralized finance, gaming, or collectibles, I am
        always interested in building something.
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
