import Head from "next/head";
import Link from "next/link";
import reactDom from "react-dom";

export default function Writing() {
  return (
    <>
      <Head>
        <title>Writing | Eddy Guo</title>
      </Head>
      <h1>Writing Pieces</h1>
      <p>
        <p style={{color:"#091930", opacity:"0.5"}}>"Writing is timeless" - Anish Agnihotri</p>
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
