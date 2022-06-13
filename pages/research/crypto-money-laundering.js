import Head from "next/head";
import Link from "next/link";

export default function launder() {
  return (
    <>
      <Head>
        <title>Crypto Money Laundering | Eddy Guo</title>
      </Head>
      <h1>Crypto Money Laundering</h1>
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
