import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function snipe() {
  return (
    <>
      <Head>
        <title>snip3r | Eddy Guo</title>
      </Head>
      <h1>
        snip3r{" "}
        <Image className="logo" src="/logo.png" height={30} width={30} alt="snip3r-logo" />{" "}
        <Image className="shooter" src="/shooter.png" height={30} width={30} alt="shooter" />
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
      <Link href="/">
        <a className="nocolor">&#8592; Back to home</a>
      </Link>
    </>
  );
}
