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
        bot which arbitrages on a decentralized exchange between two tokens. The
        repository can be found{" "}
        <Link href="https://github.com/eddy-guo/WETH-DAI-arb-bot">
          <a target="_blank">here</a>
        </Link>{" "}
        (in progress).
        <br />
        <br />
        Arbitrage (specifically arbitrage on DEX's through smart contracts)
        means purchasing and selling an asset to profit from the difference in
        the listed price between various marketplaces. For example, purchasing
        Ethereum (ETH) on Uniswap and selling it immediately afterwards on
        Sushiswap at a higher price would result in profit for the searcher. The
        price discrepancy, or spread, can be difficult to find across differing
        exchanges, which is why code and botting is required. Additionally, by
        using{" "}
        <Link href="https://docs.aave.com/faq/flash-loans">
          <a target="_blank">flash loans</a>
        </Link>
        , there is no risk of losing money if any transactions or trades fail -
        if the smart contract cannot repay the loan, the trade will simply
        cancel. This is a big advantage compared to centralized trading, as
        arbitrage traders on centralized exchanges can fall victim to{" "}
        <Link href="https://www.investopedia.com/terms/s/slippage.asp">
          <a target="_blank">price slippage</a>
        </Link>
        . Flash loans also allow traders to borrow hundreds of thousands of
        dollars without risking a cent of their own capital. With such
        volatility in cryptocurrencies and countless new coins being added every
        day, it is evident that decentralized finance arbitrage is a great
        opportunity to earn passive income with little to no risk.
        <br />
        <br />
        <b>Implementation:</b> <br />
        Arbitrages between large cryptocurrency exchanges (eg. Uniswap,
        Sushiswap, 1inch, Binance) generally refers to bringing prices into
        efficiency, otherwise known as{" "}
        <Link href="https://www.investopedia.com/terms/p/price-efficiency.asp">
          <a target="_blank">price efficiency</a>
        </Link>
        . This is done through{" "}
        <Link href="https://academy.binance.com/en/articles/what-are-liquidity-pools-in-defi">
          <a target="_blank">liquidity pools</a>
        </Link>
        , where DeFi exchange users put their funds to earn interest or tokens. 
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
