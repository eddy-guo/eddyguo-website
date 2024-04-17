import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Eddy Guo</title>
      </Head>
      <ul id="top">
        <li className="button">
          <a href="https://github.com/eddy-guo" target="_blank">
            GitHub
          </a>
        </li>
        <li className="button">
          <a href="https://twitter.com/spagh_eddy" target="_blank">
            Twitter
          </a>
        </li>
        <li className="button">
          <a href="mailto:eddyyanruguo@gmail.com" target="_blank">
            Email
          </a>
        </li>
        <li className="button">
          <a
            href="/Eddy_Guo_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer">
            Resume
          </a>
        </li>
      </ul>
      <main>
        <div className="intro">
          <h1>
            <b>Hey, I'm Eddy Guo &#127837;</b>
          </h1>
          <p>
            I'm a 4th year Computer Science student studying at{" "}
            <Link href="https://uwaterloo.ca/">
              <a target="_blank">UWaterloo</a>
            </Link>
            . I'm currently working as a Fullstack Developer for{" "}
            <Link href="https://www.flood.bid/">
              <a target="_blank">Flood</a>
            </Link>
            , a next-gen DEX aggregator optimizing the trading experience.
            <br />
            <br />
            Previously - Software Development Intern for{" "}
            <Link href="https://axelar.network/">
              <a target="_blank">Axelar</a>
            </Link>
            , Software Engineer at{" "}
            <Link href="https://jackalprotocol.com/">
              <a target="_blank">Jackal Labs</a>
            </Link>
            .
          </p>
        </div>
        <div className="projects">
          <h3>Projects</h3>
          <ul id="projects-list">
            <li>
              <Link href="https://github.com/eddy-guo/validator-monitor">
                <a target="_blank">
                  Validator Monitor - Discord Bot monitoring Cosmos blockchains
                  and their validators/nodes
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.coherentapp.tech/">
                <a target="_blank">
                  Co:herent - Web app streamlining communication with the
                  hearing impaired
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://jackallabs-explorer.vercel.app/">
                <a target="_blank">
                  Jackal Labs Explorer - Astro-built dashboard following
                  everything JACKAL
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://airdrop.jackalprotocol.com">
                <a target="_blank">
                  Jackal Airdrop Checker — Calculate address's $JKL airdrop with
                  Keplr integration
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://habipets.vercel.app/">
                <a target="_blank">
                  Habipets — Gamified habit tracker featuring smart NFT rewards
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/eddy-guo/snip3r">
                <a target="_blank">snip3r — NFT rarity sniping tool</a>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/eddy-guo/eddy-selfbot">
                <a target="_blank">
                  Eddy Selfbot — Script for auto-joining exclusive community
                  invites
                </a>
              </Link>
            </li>
          </ul>
          <div className="footer">
            <span>
              <Link href="https://d3l-n3st.vercel.app/prev">
                <a>«</a>
              </Link>{" "}
              <Link href="https://d3l-n3st.vercel.app/">
                <a>&#10023;</a>
              </Link>{" "}
              <Link href="https://d3l-n3st.vercel.app/next">
                <a>»</a>
              </Link>
            </span>
          </div>
        </div>
      </main>
    </>
  );
}
