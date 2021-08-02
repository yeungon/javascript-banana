import Link from "next/link";

function header() {
  return (
    <>
      <p className="title">
        <Link href="/">
          <a>
            Banana Unf<span className="title-sub">||</span>told
          </a>
        </Link>
      </p>
      <p className="subtitle">An exclusive JavaScript story</p>
    </>
  );
}

export default header;
