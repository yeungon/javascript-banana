import Link from "next/link";

function navigate() {
  return (
    <div className = "navigate__style">           
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
             
        <li>
          <Link href="/credits">
            <a>Credits</a>
          </Link>
        </li>
        <li>
          <Link href="/resource">
            <a>API</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>      
      </ul>
    </div>
  );
}

export default navigate;
