import Head from "next/head";
import Link from "next/link";

export default function auction() {
  return (
    <>
      <Head>
        <title>Auction Theory | Eddy Guo</title>
      </Head>
      <h1>Auction Theory &#128176;</h1>
      <p>
        My interest in auction theory started when an NFT collection I was
        following closely (
        <Link href="https://ragnarokmeta.medium.com/">
          <a target="_blank">Ragnarök - web3 MMORPG</a>
        </Link>
        ) had a different type of minting process than I was used to. They had
        multiple whitelists for multiple selling days, but used a Fair Auction
        (similar to a{" "}
        <Link href="https://www.investopedia.com/terms/d/dutchauction.asp">
          <a target="_blank">Dutch Auction</a>
        </Link>
        ) for their mint instead of setting it at one price and waiting for
        their supply to sell out. <br />
        Essentially, an initial price of the NFT is set and drops over a period
        of time. However, a Fair Auction allows buyers to claim back the
        difference between the price they minted at and the closing price of the
        auction. This incentivizes them to mint immediately, as everyone will be
        paying the same price after the sale is over. Minting as soon as
        possible secures their NFT and has no repercussion of minting for more,
        hence the word "fair". <br />
        <br /> This experience raised many questions:
      </p>
      <ul>
        <li>
          What other minting strategies are NFT projects implementing to
          increase their sales and outreach?
        </li>
        <li>
          Which auction strategy is the most effective? Which is the least
          effective? Is it case-by-case, and if so, depending on what?
        </li>
        <li>
          How does this tie into classical economics (supply and demand, digital
          scarcity, market theory)?{" "}
        </li>
      </ul>
      <p>:3</p>
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
