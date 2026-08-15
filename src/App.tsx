import { SiteFooter } from "./components/layout/SiteFooter";
import { SiteHeader } from "./components/layout/SiteHeader";
import { Hero } from "./components/sections/Hero";
import { Thesis } from "./components/sections/Thesis";

export function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <Thesis />
      </main>
      <SiteFooter />
    </div>
  );
}
