import { SiteFooter } from "./components/layout/SiteFooter";
import { SiteHeader } from "./components/layout/SiteHeader";
import { About } from "./components/sections/About";
import { Hero } from "./components/sections/Hero";
import { Prototype } from "./components/sections/Prototype";
import { Research } from "./components/sections/Research";
import { TechnicalDirection } from "./components/sections/TechnicalDirection";
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
        <Prototype />
        <TechnicalDirection />
        <About />
      </main>
      <SiteFooter />
    </div>
  );
}
