import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <div className="navbar-brand d-flex align-items-center">
          <Link className="text-light fw-bold text-decoration-none" href="/">
            <span>PHOTO</span>
            <span className="text-white">SEARCH</span>
          </Link>
          <span className="fs-6 text-light ms-3">powered by Flickr</span>
        </div>
      </div>
    </nav>
  );
}
