import Head from "next/head";
import Link from "next/link";

export default function zk() {
  return (
    <>
      <Head>
        <title>Zero-Knowledge | Eddy Guo</title>
      </Head>
      <h1>Zero-Knowledge (ZK-Rollups, ZK-proofs)</h1>
      <p></p>
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
