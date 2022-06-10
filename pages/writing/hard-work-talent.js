import Head from "next/head";
import Link from "next/link";

export default function hardWorkTalent() {
  return (
    <>
      <Head>
        <title>Hard Work vs. Talent | Eddy Guo</title>
      </Head>
      <h1>Hard Work vs. Talent - A cup-stacking case study</h1>
      <p>Coming soon!</p>
      <ul className="bottom">
        <li className="button">
          <Link href="/writing">
            <a className="nocolor">&#8592; Back to writing</a>
          </Link>
        </li>
      </ul>
      <Link href="/">
        <a className="nocolor">&#8592; Back to home</a>
      </Link>
    </>
  );
}
