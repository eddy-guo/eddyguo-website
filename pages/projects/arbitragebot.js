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
      <p>Coming soon!</p>
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
