import { SiteFooter } from "./components/layout/SiteFooter";
import { SiteHeader } from "./components/layout/SiteHeader";

export function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <section className="section shell-intro" id="top">
          <div className="site-container">
            <p className="eyebrow">StructureML</p>
            <h1>Foundational ML for structured data.</h1>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
