import { SiteFooter } from "./components/layout/SiteFooter";
import { SiteHeader } from "./components/layout/SiteHeader";
import { Hero } from "./components/sections/Hero";
import { Research } from "./components/sections/Research";
import { Thesis } from "./components/sections/Thesis";
import { Writing } from "./components/sections/Writing";

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
        <Research />
        <Writing />
      </main>
      <SiteFooter />
    </div>
  );
}
