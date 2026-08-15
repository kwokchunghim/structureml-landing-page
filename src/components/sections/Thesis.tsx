import type { ResearchReference } from "../../content/site";
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

function InlineReferences({ references }: { references: readonly ResearchReference[] }) {
  return references.map((reference, index) => (
    <span key={reference.title}>
      {index > 0 ? " and " : null}
      <a
        className="inline-citation"
        href={reference.href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {reference.title} <span className="inline-citation-detail">({reference.citation})</span>
        <span aria-hidden="true"> ↗</span>
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </span>
  ));
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
            <p className="field-evidence-intro">
              At the single-table level, external work including{" "}
              <InlineReferences references={researchPositioning.tabularReferences} /> shows that
              pretrained models can adapt to unseen tabular prediction tasks through labelled
              context rather than per-dataset parameter updates, with newer architectures extending
              the approach to larger classification datasets. These results make tabular foundation
              models credible while leaving context efficiency and support selection open.
            </p>
            <p className="field-evidence-intro">
              At the relational level,{" "}
              <InlineReferences references={researchPositioning.relationalReferences} /> show that
              pretrained models can transfer across relational databases and prediction tasks.{" "}
              <InlineReferences references={researchPositioning.integrationReferences} /> further
              explores the combination of a relational backbone with tabular in-context learning.
              Across these lines of work, the direction is credible without closing the gaps in
              context efficiency, relational–tabular integration or learning to make decisions.
            </p>
            <blockquote className="research-thesis">
              <p className="research-thesis-label">StructureML thesis</p>
              <p>{researchPositioning.thesis}</p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
