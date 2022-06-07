import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Eddy Guo</title>
      </Head>
      <ul>
        <li>
          <a
            href="/Resume_Eddy_Guo.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
        <li>
          <a href="https://github.com/eddy-guo" target="_blank">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://twitter.com/spagh_eddy" target="_blank">
            Twitter
          </a>
        </li>
        <li>
          <a href="mailto: eddyyanruguo@gmail.com" target="_blank">
            Email
          </a>
        </li>
      </ul>
      <h1>Hey, I'm Eddy Guo &#127837;</h1>
      <p>
        I'm a 3rd year student studying Computer Science at the University of
        Waterloo. I am currently exploring blockchain and web3 development.
        <br />
        <br />I have previously developed software at{" "}
        <Link href="https://atsautomation.com/">
          <a target="_blank">ATS Automation</a>
        </Link>{" "}
        and{" "}
        <Link href="https://www.processfusion.com/">
          <a target="_blank">Process Fusion</a>
        </Link>
        .<br />
        <ul className="bottom">
          <li>
            <Link href="/research">
              <a>Research</a>
            </Link>
          </li>
          <li>
            <Link href="/writing">
              <a>Writing</a>
            </Link>
          </li>
        </ul>
      </p>
    </>
  );
}
