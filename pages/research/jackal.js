import Head from "next/head";
import Link from "next/link";

export default function jackal() {
  return (
    <>
      <Head>
        <title>JACKAL | Eddy Guo</title>
      </Head>
      <h1>Jackal Labs - Motivation, Tech, Protocol, Economics </h1>
      <p>
        <Link href="https://jackaldao.com/wp-content/uploads/2022/09/JACKAL-PROTOCOL-WHITEPAPER.pdf">
          <a className="nocolor" target="_blank">&#128058;</a>
        </Link>
      </p>
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
