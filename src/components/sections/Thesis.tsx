import { researchPositioning } from "../../content/site";

const conventionalPipeline = [
  "Relational database",
  "SQL joins + aggregations",
  "Handcrafted feature table",
  "Task-specific model",
  "Prediction",
] as const;

const emergingPipeline = [
  "Structured / relational data",
  "Pretrained structured-data model",
  "Learned representation + in-context adaptation",
  "Prediction across new tasks",
] as const;

function Pipeline({ label, steps }: { label: string; steps: readonly string[] }) {
  return (
    <article className="pipeline">
      <h3>{label}</h3>
      <ol>
        {steps.map((step) => (
          <li key={step}>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </article>
  );
}

export function Thesis() {
  return (
    <section className="section thesis" id="thesis">
      <div className="site-container">
        <div className="section-heading">
          <p className="eyebrow">Thesis</p>
          <h2>Structured data deserves better primitives.</h2>
        </div>

        <div className="pipeline-comparison">
          <Pipeline label="Conventional ML" steps={conventionalPipeline} />
          <Pipeline label="Emerging approach" steps={emergingPipeline} />
        </div>

        <div className="thesis-copy">
          <p>
            Much of enterprise machine learning still begins by compressing relational data into
            manually designed feature tables. Recent work in tabular and relational foundation
            models now demonstrates a credible alternative: pretrained systems that learn more
            directly from structured data and adapt across prediction tasks.
          </p>
          <p>
            StructureML studies what remains unresolved: how relational and tabular learning should
            work together, how models can select sufficient context efficiently, and how predictive
            representations can support decisions under objectives, constraints and feedback.
          </p>
        </div>

        <div className="field-evidence" aria-labelledby="field-evidence-heading">
          <div className="field-evidence-copy">
            <p className="eyebrow">State of the field</p>
            <h3 id="field-evidence-heading">
              The capability is visible. The frontier is still open.
            </h3>
            <p className="field-evidence-intro">{researchPositioning.introduction}</p>
            <blockquote className="research-thesis">
              <p className="research-thesis-label">StructureML thesis</p>
              <p>{researchPositioning.thesis}</p>
            </blockquote>
          </div>

          <div className="evidence-references">
            <h4 id="evidence-list-heading">Selected external research</h4>
            <ol aria-labelledby="evidence-list-heading" className="evidence-list">
              {researchPositioning.references.map((reference) => (
                <li key={reference.title}>
                  <a
                    className="evidence-link"
                    href={reference.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="evidence-title">{reference.title}</span>
                    <span className="evidence-citation">
                      {reference.citation} <span aria-hidden="true">↗</span>
                      <span className="sr-only"> (opens in a new tab)</span>
                    </span>
                  </a>
                  <p>{reference.relevance}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
