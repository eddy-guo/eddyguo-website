import Head from "next/head";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <Head>
        <title>WETH/DAI Arbitrage Bot | Eddy Guo</title>
      </Head>
      <h1>
        WETH/DAI Arbitrage Bot &#x1f984;
        <br />
        (UniswapV2 implementation)
      </h1>
      <p>
        <b>Introduction:</b>
        <br />
        Most DEX arbitrage opportunities are low risk but offer low payouts. To
        fully grasp the scale of these transactions, I wanted to create my own
        bot which arbitrages on different decentralized exchanges between two
        tokens. The repository can be found{" "}
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
        price discrepancy, or spread, can be difficult to find across different
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
        , where DeFi exchange users put their funds in a pool to earn interest
        or tokens. These funds, which are locked in a smart contract, are used
        only for a specific cryptocurrency pair. If slippage were to occur in
        this pool (prices falling out of sync due to a large trade or other
        factors), there would be a chance for an arbitrage to capture this
        "spread" by buying on one exchange and selling on the other to bring the
        pools into sync.
        <br />
        <br />
        <b>Technical Implementation:</b> <br />
        There are various libraries that need to be initialized before the
        trading contract is called - this may include declaring exchange
        contracts and setting up the flash loan pool (Aave, Uniswap, dYdX). The
        contract's <i>constructor</i> function should convert any ETH sent to it
        into WETH (ERC-20 token used for trading) for the arbitrage, as well as
        approving the{" "}
        <Link href="https://protocol.0x.org/en/latest/tokenomics/staking.html">
          <a target="_blank">staking proxy</a>
        </Link>{" "}
        fee (trading fees paid to protocols such as 0x, 1inch, Kyber, etc.).
        <br />
        <br />
        In order for the flash loan function to execute, many parameters need to
        be passed through said function in order to call future <i>
          trade
        </i> and <i>swap</i> functions. The token address that needs the loan,
        the flash loan amount, the address of the arbitraged token (in this
        case, DAI), and the minimum amount wanted back are all necessary
        parameters to consider. After it is confirmed that the loan was
        successful, an <i>arbitrage</i> function should be called, which tracks
        the balance of the smart contract before and after the trade occurs. If
        the final balance is not greater than the initial balance (factoring in
        gas and other fees), the transaction will be canceled.
        <br />
        <br />
        Let's assume, for the sake of example, that we are trading across
        Uniswap and Sushiswap. After determining that an arbitrage opportunity
        is present, the <i>trade</i> function (which includes a <i>Uniswap</i>{" "}
        and <i>Sushiswap</i> function) would track the initial balance, perform
        the trade on Uniswap, track the final balance, then trade on Sushiswap
        for a profit. The <i>Uniswap</i> function approves Uniswap to spend the
        WETH ERC-20 tokens, and similarly, the <i>Sushiswap</i> function
        approves Sushiswap to trade the tokens. Keep in mind the <i>trade</i>{" "}
        function is inside the <i>arbitrage</i> function - now that the
        execution is complete, the final balance is used to pay off the initial
        flash loan. Of course, if no profit was made, the entire sequence of
        function calls would revert and the flash loan would be canceled. The
        contract owner can now withdraw all tokens by calling a <i>withdraw</i>{" "}
        function.
        <br />
        <br />
        To keep this bot running and continuously searching for DEX arbitrages,
        it would be hosted on a Node.js server that runs on Vercel, AWS, GCP,
        Heroku, or anything similar.
        <br />
        <br />
        It is clear that this is a simplified summary; many things were not
        discussed, including:{" "}
      </p>
      <ul>
        <li>
          adding more trading pairs (in order to include UniswapV2, Sushiswap,
          Shebaswap, Sakeswap, and Croswap for a higher chance at a successful
          arb)
        </li>
        <li>
          various required node.js libraries (Axios for api calls, web3 for
          smart contract, express to run server)
        </li>
        <li>
          deploying smart contract via Remix IDE (with consideration of gas
          amount)
        </li>
        <li>
          deploying the contract on a testnet beforehand (Rinkeby, Ropsten)
        </li>
        <li>Skipping partially filled order</li>
        <li>
          Skipping{" "}
          <Link href="https://www.investopedia.com/articles/active-trading/042414/what-makertaker-fees-mean-you.asp">
            <a target="_blank">taker fees</a>
          </Link>
        </li>
        <li>
          Bot Optimizations
          <ul>
            <li>
              <Link href="https://moralis.io/gas-optimizations-in-solidity-top-tips/">
                <a target="_blank">gas optimization</a>
              </Link>{" "}
              in Solidity
            </li>
            <li>
              dynamically calculating gas fees as opposed to static assumption
            </li>
            <li>executing multiple orders at the same time</li>
          </ul>
        </li>
      </ul>
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
