import Link from "next/link";

/**
 * Footer component for the blog
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
      <footer id="footer" className="footer">

        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <Link href="/" className="logo d-flex align-items-center">
                <span className="sitename">Alalfy Tech</span>
              </Link>
              <div className="footer-contact pt-3">
                <p>Cairo</p>
                <p>Cairo, EG</p>
                <p className="mt-3"><strong>Phone:</strong> <span>+20 11 53263 994</span></p>
                <p><strong>Email:</strong> <span>islam@alalfy.com</span></p>
              </div>
              <div className="social-links d-flex mt-4">
                <a href="https://www.facebook.com/EngineerMix"><i className="bi bi-facebook"></i></a>
                <a href="https://www.linkedin.com/in/islam-hassan-alalfy-2b2234167"><i className="bi bi-linkedin"></i></a>
                <a href="https://www.instagram.com/yotech_org/"><i className="bi bi-instagram"></i></a>
                <a href="https://github.com/EngALAlfy"><i className="bi bi-github"></i></a>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About us</Link></li>
                <li><Link href="https://yotech.org/ar/home#services">Services</Link></li>
                {/*<li><Link href="#">Terms of service</Link></li>*/}
                {/*<li><Link href="#">Privacy policy</Link></li>*/}
              </ul>
            </div>

            <div className="col-lg-2 col-md-2 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><a href="https://yotech.org/ar/home#services">Web Design</a></li>
                <li><a href="https://yotech.org/ar/home#services">Web Development</a></li>
                <li><a href="https://yotech.org/ar/home#services">Server Management</a></li>
                <li><a href="https://yotech.org/ar/home#services">Hosting</a></li>
                <li><a href="https://yotech.org/ar/home#services">App Development</a></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-2 footer-links">
              <h4>Categories</h4>
              <ul>
                <li><Link href="https://alalfy.com/">Alalfy Portfolio</Link></li>
                <li><Link href="https://profile.alalfy.com/ts/t2/">Our website 1</Link></li>
                <li><Link href="https://profile.alalfy.com/ts/t1/">Our website 2</Link></li>
                <li><Link href="https://alalfy.com/storage/uploads/cv.pdf">Alalfy CV</Link></li>
                <li><Link href="https://store.yotech.org/">YoStore online store</Link></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-2 footer-links">
              <h4>Our websites</h4>
              <ul>
                <li><Link href="https://alalfy.com/">Alalfy Portfolio</Link></li>
                <li><Link href="https://profile.alalfy.com/ts/t2/">Our website 1</Link></li>
                <li><Link href="https://profile.alalfy.com/ts/t1/">Our website 2</Link></li>
                <li><Link href="https://alalfy.com/storage/uploads/cv.pdf">Alalfy CV</Link></li>
                <li><Link href="https://store.yotech.org/">YoStore online store</Link></li>
              </ul>
            </div>

          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>© <span>Copyright</span> <strong className="px-1 sitename">ALALFY Tech</strong> <span>All Rights Reserved</span>
          </p>
          <div className="credits">
            By <a href="https://alalfy.com/">Alalfy.com</a>
          </div>
        </div>

      </footer>
  );
}