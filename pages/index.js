import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Eddy Guo</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <p><Link href="/posts/first-post"><a>First post</a></Link></p>
        <p><Link href="/posts/resume"><a>Resume</a></Link></p>
      </section>
    </>
  );
}
