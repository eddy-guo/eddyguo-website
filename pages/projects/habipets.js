import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Habipets() {
  return (
    <>
      <Head>
        <title>Habipets | Eddy Guo</title>
      </Head>
      <h1>
        Habipets{" "}
        <Image
          className="pet"
          src="/habipets.png"
          alt="pet"
          height={30}
          width={30}
          decoding="async"
          loading="eager"
          priority={true}
        />
        <br />
        (ETHToronto 2022 hackathon)
      </h1>
      <p>
        <Link href="https://habipets.vercel.app/">
          <a target="_blank">link</a>
        </Link>
        <br />
        <Link href="https://github.com/eddy-guo/habipets">
          <a target="_blank">repo</a>
        </Link>
        <br />
        <br />
        Todo: writeup, event details (bounty, placement, vc opportunity)
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
