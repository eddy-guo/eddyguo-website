import Head from "next/head";
import Link from "next/link";

export default function Writing() {
  return (
    <>
      <Head>
        <title>Writing | Eddy Guo</title>
      </Head>
      <h1>Writing Pieces</h1>
      <p>
        "Writing is timeless" - Anish Agnihotri
        <br />
        <br />
        As I progress through college and the rest of my life, I will explore
        various career paths, meet many people, and understand more about
        myself. Keeping track of interesting events and what I learned would be
        pretty rewarding to look back on in the future.
      </p>
      <ul className="bottom">
        <li>
          <Link href="/writing/hard-work-talent">
            <a>Hard Work vs. Talent</a>
          </Link>
        </li>
      </ul>
      <Link href="/">
        <a className="nocolor">&#8592; Back to home</a>
      </Link>
    </>
  );
}
