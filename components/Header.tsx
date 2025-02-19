import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <Link href="/">
                <div className="logo">
                  <Image src="/assets/images/logo-v1.png" alt="DigiMedia Logo" width={150} height={50} />
                </div>
              </Link>
              <ul className="nav">
                <li><Link href="#top"><span className="active">Home</span></Link></li>
                <li><Link href="#about"><span>About</span></Link></li>
                <li><Link href="#services"><span>Services</span></Link></li>
                <li><Link href="#portfolio"><span>Projects</span></Link></li>
                <li><Link href="#blog"><span>Blog</span></Link></li>
                <li><Link href="#contact"><span>Contact</span></Link></li>
                <li><div className="border-first-button"><Link href="#contact"><span>Free Quote</span></Link></div></li>
              </ul>
              <div className="menu-trigger">
                <span>Menu</span>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}