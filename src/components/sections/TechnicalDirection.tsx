const explorationSteps = [
  { stage: "Structured data", label: "Tables + relationships" },
  { stage: "Shared representations", label: "Relational + tabular models" },
  { stage: "Context-efficient adaptation", label: "Retrieved support + neighbourhoods" },
  { stage: "Outcome prediction", label: "Task-conditioned estimates" },
  { stage: "Decision learning", label: "Objectives + constraints + feedback" },
] as const;

export function TechnicalDirection() {
  return (
    <section className="section technical-direction" aria-labelledby="direction-heading">
      <div className="site-container">
        <div className="section-heading direction-heading">
          <p className="eyebrow">Technical direction</p>
          <h2 id="direction-heading">What we're exploring</h2>
          <p className="direction-intro">
            Prediction is not decisioning. We are exploring how pretrained representations and
            task-relevant context could support outcome models, then policies shaped by objectives,
            constraints, feedback and the balance between exploration and exploitation.
          </p>
        </div>

        <ol className="direction-flow">
          {explorationSteps.map((step, index) => (
            <li key={step.stage}>
              <p>{step.stage}</p>
              <span>{step.label}</span>
              {index < explorationSteps.length - 1 ? (
                <span aria-hidden="true" className="direction-arrow">
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
