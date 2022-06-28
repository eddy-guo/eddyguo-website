import Head from "next/head";
import Link from "next/link";

export default function snipe() {
  return (
    <>
      <Head>
        <title>snip3r | Eddy Guo</title>
      </Head>
      <h1>
        snip3r
        <img className="logo" src="/logo.png" alt="snip3r"></img>
        <img className="shooter" src="/shooter.png" alt="shooter"></img>
        <br />
        (ETHNewYork blockchain hackathon)
      </h1>
      <p>
        <Link href="https://ethglobal.com/showcase/snip3r-0zmy2">
          <a target="_blank">link</a>
        </Link>
        <br />
        <br />
        Todo: writeup, finish code, event details, resume
      </p>
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
