import Head from "next/head";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <Head>
        <title>WETH/DAI Arbitrage Bot | Eddy Guo</title>
      </Head>
      <h1>
        WETH/DAI Arbitrage Bot <br />
        (UniswapV2 implementation)
      </h1>
      <p>
        Most DEX arbitrage opportunities are low risk but offer low payout. To
        fully grasp the scale of these transactions, I wanted to create my own
        bot which arbitrages between the ETH/DAI pair on UniswapV2. The
        repository can be found{" "}
        <Link href="https://github.com/eddy-guo/WETH-DAI-arb-bot">
          <a target="_blank">here</a>
        </Link>{" "}
        (in progress).
      </p>
      <ul className="bottom">
        <li className="button">
          <Link href="/projects">
            <a className="nocolor">&#8592; Back to projects</a>
          </Link>
        </li>
      </ul>
      <Link href="/">
        <a className="nocolor">&#8592; Back to home</a>
      </Link>
    </>
  );
}
