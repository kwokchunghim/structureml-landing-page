export function Prototype() {
  return (
    <section className="section prototype" id="prototype">
      <div className="site-container prototype-layout">
        <div className="prototype-copy">
          <p className="eyebrow">Product Prototype</p>
          <p className="status-label">Coming soon</p>
          <h2>Product Prototype</h2>
          <p className="prototype-lead">
            We're exploring how advances in foundational ML for structured data could translate into
            new enterprise ML products.
          </p>
          <p className="prototype-note">Product direction currently under development.</p>
          <button className="prototype-action" disabled type="button">
            Prototype coming soon
          </button>
        </div>

        <div className="prototype-frame" aria-label="Non-functional prototype concept">
          <div className="prototype-frame-bar">
            <span>Concept frame</span>
            <span>Non-functional</span>
          </div>
          <div aria-hidden="true" className="prototype-frame-content">
            <div className="prototype-rail">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="prototype-workspace">
              <div className="prototype-lines">
                <span />
                <span />
                <span />
              </div>
              <div className="prototype-panels">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
          <p>Exploratory interface study</p>
        </div>
      </div>
    </section>
  );
}
