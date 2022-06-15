import Head from "next/head";
import Link from "next/link";

export default function MEV() {
  return (
    <>
      <Head>
        <title>MEV | Eddy Guo</title>
      </Head>
      <h1>MEV, Arbitrage, Flashbots &#129302;</h1>
      <p>
        Flashbots - sacrificing decentralization for open participation
        <br />
        <br />
        MEV strategy - sandwich attacks, arbitrage, liquidation, time bandit,
        NFT
        <br />
        <br />
        cross-chain MEV - crosschain infrastructure, protocols (Axelar),
        altering of transactions across different blockchains
        <br />
        <br />
        Arb/MEV Bots for code review:
      </p>
      <ul>
        <li>
          <Link href="https://github.com/6eer/uniswap-sushiswap-arbitrage-bot">
            <a className="nocolor" target="_blank">
              Uniswap/Sushiswap Arbitrage Bot
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/Anish-Agnihotri/goblinmode">
            <a className="nocolor" target="_blank">
              Goblinmode long-tail MEV
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/Anish-Agnihotri/punk-nftx-meebit-arb">
            <a className="nocolor" target="_blank">
              Punk/Meebit NFTX Arbitrage Bot
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/fxfactorial/liquidation-bot-fall-2020">
            <a className="nocolor" target="_blank">
              Liquidation Bot
            </a>
          </Link>
        </li>
      </ul>
      <ul className="bottom">
        <li className="button">
          <Link href="/research">
            <a className="nocolor">&#8592; Back to research</a>
          </Link>
        </li>
      </ul>
      <Link href="/">
        <a className="nocolor">&#8592; Back to home</a>
      </Link>
    </>
  );
}
