import Head from "next/head";
import Link from "next/link";

export default function Research() {
  return (
    <>
      <Head>
        <title>Research | Eddy Guo</title>
      </Head>
      <h1>Research</h1>
      <p>
        My "journey in crypto" started in January of 2022, when I was flipping
        NFTs and learning about smart contracts. Although I am very happy with
        my progress and learned a lot since then, it is clear that the web3
        space is vast.
        <br />
        <br />
        In order to monitor my progress and hold myself accountable, I will try
        my best to update this page whenever I learn something new &#128526;
      </p>
      <ul className="bottom">
        <li className="button">
          <Link href="/research/jackal">
            <a>JACKAL</a>
          </Link>
        </li>
        <li className="button">
          <Link href="/research/arbitragebot">
            <a>WETH/DAI Arbitrage Bot</a>
          </Link>
        </li>
        <li className="button">
          <Link href="/research/mev">
            <a>MEV</a>
          </Link>
        </li>
        <li className="button">
          <Link href="/research/on-chain-analytics">
            <a>On-Chain Analytics</a>
          </Link>
        </li>
        <li className="button">
          <Link href="/research/auction-theory">
            <a>Auction Theory</a>
          </Link>
        </li>
      </ul>
      <Link href="/">
        <a className="nocolor">&#8592; Back to home</a>
      </Link>
    </>
  );
}
