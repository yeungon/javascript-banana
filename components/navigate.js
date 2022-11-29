import Link from "next/link";

function navigate() {
  return (
    <div className = "navigate__style">           
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
             
        <li>
          <Link href="/credits">
            Credits
          </Link>
        </li>
        <li>
          <Link href="/resource">
            API
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>      
      </ul>
    </div>
  );
}

export default navigate;
