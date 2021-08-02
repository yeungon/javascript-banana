import Link from "next/link";

function navigate() {
  return (
    <>
      <ul>     
        <li>
          <Link href="/credits">
            <a>Credits</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default navigate;
