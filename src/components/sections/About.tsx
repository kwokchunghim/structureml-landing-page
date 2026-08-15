import { founders } from "../../content/site";

export function About() {
  return (
    <section className="section about" id="about">
      <div className="site-container">
        <div className="about-intro">
          <div>
            <p className="eyebrow">About</p>
            <h2>About StructureML</h2>
          </div>
          <div className="about-copy">
            <p>
              StructureML is an independent research initiative exploring foundational machine
              learning for structured data.
            </p>
            <p>
              We study how relational and tabular foundation models can work together, how
              structured context can be selected efficiently, and how predictive systems can support
              decisions under real-world objectives, constraints and feedback.
            </p>
          </div>
        </div>

        <div className="founder-heading">
          <p className="eyebrow">Team</p>
          <h3>Founding team</h3>
        </div>
        <div className="founder-grid">
          {founders.map((founder) => (
            <article className="founder-profile" key={founder.name}>
              <div>
                <h3>{founder.name}</h3>
                <p className="founder-role">{founder.role}</p>
              </div>
              <a
                className="founder-link"
                href={founder.linkedinUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn <span aria-hidden="true">↗</span>
                <span className="sr-only"> profile for {founder.name} (opens in a new tab)</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
