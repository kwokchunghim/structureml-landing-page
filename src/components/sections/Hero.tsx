import { RelationalDiagram } from "../visuals/RelationalDiagram";

export function Hero() {
  return (
    <section className="hero section" id="top">
      <div aria-hidden="true" className="hero-grid" />
      <div className="site-container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">StructureML</p>
          <h1>Foundational ML for structured data.</h1>
          <p className="hero-summary">
            StructureML researches models that learn directly from tables, entities and
            relationships — and the systems needed to make them useful at scale.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#research">
              Explore our research <span aria-hidden="true">↓</span>
            </a>
            <button className="secondary-action" disabled type="button">
              GitHub ↗ <span>Coming soon</span>
            </button>
          </div>
        </div>
        <RelationalDiagram />
      </div>
    </section>
  );
}
