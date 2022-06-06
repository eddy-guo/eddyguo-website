export default function test() {
  return (
    <body scroll="no">
    <object data="/images/Resume_Eddy_Guo.pdf" type="application/pdf">
    <p>Hmm, seems like this browser doesn't support PDFs.
    No worries, you can download my pdf <a href="http://yoursite.com/the.pdf">here</a>
    !</p>
    </object>
    <style jsx>{`
      object {
        width: 100%;
        height: 100vh;
      }
      body {
        zoom: 100%;
        overflow: hidden;
        margin: 0;
      }
    `}</style>
    </body>
  );
}