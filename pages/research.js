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
          <Link href="/research/MEV">
            <a>MEV</a>
          </Link>
        </li>
        <li className="button">
          <Link href="/research/zero-knowledge">
            <a>Zero-Knowledge</a>
          </Link>
        </li>
        <li className="button">
          <Link href="/research/on-chain-analytics">
            <a>On-Chain Analytics</a>
          </Link>
        </li>
        <li className="button">
          <Link href="/research/51-attack">
            <a>51% Attack</a>
          </Link>
        </li>
        <li className="button">
          <Link href="/research/auction-theory">
            <a>Auction Theory</a>
          </Link>
        </li>
        <li className="button">
          <Link href="/research/crypto-money-laundering">
            <a>Crypto Money Laundering</a>
          </Link>
        </li>
      </ul>
      <Link href="/">
        <a className="nocolor">&#8592; Back to home</a>
      </Link>
    </>
  );
}
