import Link from "next/link";
import strings from "@/lib/strings";

/**
 * Footer component for the blog
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { footer } = strings.layout;
  
  return (
      <footer id="footer" className="footer">

        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <Link href="/" className="logo d-flex align-items-center">
                <span className="sitename">{strings.site.name}</span>
              </Link>
              <div className="footer-contact pt-3">
                <p>{footer.contactInfo.location}</p>
                <p>{footer.contactInfo.country}</p>
                <p className="mt-3"><strong>{footer.contactInfo.phoneLabel}</strong> <span>{footer.contactInfo.phone}</span></p>
                <p><strong>{footer.contactInfo.emailLabel}</strong> <span>{footer.contactInfo.email}</span></p>
              </div>
              <div className="social-links d-flex mt-4">
                <a href={footer.socialLinks.facebook}><i className="bi bi-facebook"></i></a>
                <a href={footer.socialLinks.linkedin}><i className="bi bi-linkedin"></i></a>
                <a href={footer.socialLinks.instagram}><i className="bi bi-instagram"></i></a>
                <a href={footer.socialLinks.github}><i className="bi bi-github"></i></a>
              </div>
            </div>

            <div className="col-lg-2 col-md-2 footer-links">
              <h4>{footer.sections.usefulLinks.title}</h4>
              <ul>
                {footer.sections.usefulLinks.links.map((link, index) => (
                  <li key={index}><Link href={link.path}>{link.label}</Link></li>
                ))}
              </ul>
            </div>

            <div className="col-lg-2 col-md-2 footer-links">
              <h4>{footer.sections.ourServices.title}</h4>
              <ul>
                {footer.sections.ourServices.links.map((link, index) => (
                  <li key={index}><a href={link.path}>{link.label}</a></li>
                ))}
              </ul>
            </div>

            <div className="col-lg-2 col-md-2 footer-links">
              <h4>{footer.sections.categories.title}</h4>
              <ul>
                {footer.sections.categories.links.map((link, index) => (
                  <li key={index}><Link href={link.path}>{link.label}</Link></li>
                ))}
              </ul>
            </div>

            <div className="col-lg-2 col-md-2 footer-links">
              <h4>{footer.sections.ourWebsites.title}</h4>
              <ul>
                {footer.sections.ourWebsites.links.map((link, index) => (
                  <li key={index}><Link href={link.path}>{link.label}</Link></li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p><span>{footer.copyright.text}</span> <strong className="px-1 sitename">{strings.site.name}</strong> <span>{footer.copyright.rightsReserved}</span>
          </p>
          <div className="credits">
            {footer.copyright.by} <a href={footer.copyright.authorLink}>{footer.copyright.authorName}</a>
          </div>
        </div>

      </footer>
  );
}