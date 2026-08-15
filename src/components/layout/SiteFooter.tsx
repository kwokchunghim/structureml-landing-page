import { siteLinks } from "../../content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-primary">
          <div>
            <a className="wordmark footer-wordmark" href="#top">
              StructureML
            </a>
            <p>Foundational ML for structured data.</p>
          </div>
          <nav aria-label="Footer navigation" className="footer-navigation">
            <a href="#research">Research</a>
            <a href="#writing">Writing</a>
            <span aria-disabled="true" className="disabled-navigation-item">
              GitHub <span className="soon-label">Soon</span>
            </span>
            <a href={`mailto:${siteLinks.contactEmail}`}>Contact</a>
          </nav>
        </div>
        <div className="footer-meta">
          <span>© 2026 Tony Kwok and Billy Zhao</span>
          <span>London, UK</span>
          <span>Independent research initiative.</span>
        </div>
      </div>
    </footer>
  );
}
