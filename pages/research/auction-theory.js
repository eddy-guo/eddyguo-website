import Head from "next/head";
import Link from "next/link";

export default function auction() {
  return (
    <>
      <Head>
        <title>Auction Theory | Eddy Guo</title>
      </Head>
      <h1>Auction Theory</h1>
      <p>Coming soon!</p>
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
