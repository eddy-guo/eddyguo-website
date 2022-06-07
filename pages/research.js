import Head from 'next/head';
import Link from 'next/link';

export default function MEV() {
  return (
    <>
      <Head>
        <title>Research | Eddy Guo</title>
      </Head>
      <h1>Web3 Research</h1>
      <p>I am a developer and analyst for the UW Blockchain Club - to keep track of what I'm learning and hold myself accountable, I will try my best to update this page consistently &#128526;</p>
      <p><Link href="/research/MEV"><a>MEV</a></Link>
      <br/><br/><br/><Link href="/"><a>Back to home</a></Link></p>
    </>
  );
}