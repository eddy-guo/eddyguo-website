import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Eddy Guo</title>
      </Head>
      {/* Unordered list */}
      <ul className='top'>
        <li className='button'>
          <a
            href='https://github.com/eddy-guo'
            target='_blank'
            className='nocolor'
          >
            GitHub
          </a>
        </li>
        <li className='button'>
          <a
            href='https://twitter.com/spagh_eddy'
            target='_blank'
            className='nocolor'
          >
            Twitter
          </a>
        </li>
        <li className='button'>
          <a
            href='mailto:eddyyanruguo@gmail.com'
            target='_blank'
            className='nocolor'
          >
            Email
          </a>
        </li>
        <li className='button'>
          <a
            href='/Resume_Eddy_Guo.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='nocolor'
          >
            Resume
          </a>
        </li>
      </ul>
      <h1>
        <b>Hey, I'm Eddy Guo &#127837;</b>
      </h1>
      <p>
        I'm a 3rd year student studying Computer Science at the University of
        Waterloo. I'm currently working as a Software Engineer at{" "}
        <Link href='https://jackaldao.com/'>
          <a target='_blank'>JACKAL</a>
        </Link>
        , a{" "}
        <Link href='https://cosmos.network/'>
          <a target='_blank'>Cosmos</a>
        </Link>{" "}
        blockchain aimed at providing speed, utility, and private data storage
        for an inter-chain world. I am also exploring blockchain development and
        web3 research with the{" "}
        <Link href='https://twitter.com/uw_blockchain'>
          <a target='_blank'>UW Blockchain Club</a>
        </Link>
        .
        <br />
        <br /> I have previously developed software at{" "}
        <Link href='https://atsautomation.com/'>
          <a target='_blank'>ATS Automation</a>
        </Link>{" "}
        and{" "}
        <Link href='https://www.processfusion.com/'>
          <a target='_blank'>Process Fusion</a>
        </Link>
        .
      </p>
      <h2>Projects</h2>
      <Link href='https://github.com/eddy-guo/snip3r'>
        <a target='_blank'>snip3r</a>
      </Link>
      {" "}
      <Link href='https://habipets.vercel.app/'>
        <a target='_blank'>Habipets</a>
      </Link>

      <h2>Research</h2>
      <Link href='/jackal'>
        <a>JACKAL</a>
      </Link>
      {" "}
      <Link href='/arbitragebot'>
        <a>WETH/DAI Arbitrage Bot</a>
      </Link>
      {" "}
      <Link href='/mev'>
        <a>MEV</a>
      </Link>
      {" "}
      <Link href='/on-chain-analytics'>
        <a>On-Chain Analytics</a>
      </Link>
      {" "}
      <Link href='/auction-theory'>
        <a>Auction Theory</a>
      </Link>
    </>
  );
}
