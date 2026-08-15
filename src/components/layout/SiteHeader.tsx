import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { navigationItems, siteLinks } from "../../content/site";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header" data-scrolled={isScrolled}>
      <div className="site-container header-inner">
        <a className="wordmark" href="#top" onClick={closeMenu}>
          StructureML
        </a>

        <nav aria-label="Primary navigation" className="desktop-navigation">
          {navigationItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
          {siteLinks.githubUrl ? (
            <a href={siteLinks.githubUrl} rel="noopener noreferrer" target="_blank">
              GitHub ↗
            </a>
          ) : (
            <span aria-disabled="true" className="disabled-navigation-item">
              GitHub <span className="soon-label">Soon</span>
            </span>
          )}
        </nav>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="menu-button"
          onClick={() => setIsOpen((current) => !current)}
          ref={menuButtonRef}
          type="button"
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <nav
        aria-label="Mobile navigation"
        className="mobile-navigation"
        data-open={isOpen}
        id="mobile-navigation"
      >
        <div className="site-container mobile-navigation-inner">
          {navigationItems.map((item) => (
            <a href={item.href} key={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <span aria-disabled="true" className="disabled-navigation-item">
            GitHub <span className="soon-label">Soon</span>
          </span>
        </div>
      </nav>
    </header>
  );
}
