import Head from 'next/head';
import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>Research | Eddy Guo</title>
      </Head>
      <h1>Second Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}