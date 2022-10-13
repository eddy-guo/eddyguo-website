import Head from "next/head";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Eddy Guo</title>
      </Head>
      <h1>Projects</h1>
      <p>
        DAOs, dApps, and DEXs are all great ways for me to bridge my passion for
        programming with my interest in blockchain development.
        <br />
        <br />I love building in web3, and have a special interest in
        decentralized finance, gaming, and collectibles.
      </p>
      <ul className="bottom">
        <li className="button">
          <Link href="/projects/snip3r">
            <a>snip3r</a>
          </Link>
        </li>
        <li className="button">
          <Link href="/projects/habipets">
            <a>Habipets</a>
          </Link>
        </li>
      </ul>
      <Link href="/">
        <a className="nocolor">&#8592; Back to home</a>
      </Link>
    </>
  );
}
