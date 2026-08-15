const explorationSteps = [
  { stage: "Structured data", label: "Tables + relationships" },
  { stage: "Representation learning", label: "Structured foundation models" },
  { stage: "In-context learning", label: "Task adaptation" },
  { stage: "Efficient context selection", label: "Retrieval / context efficiency" },
  { stage: "Predictions on new tasks", label: "Predictions" },
] as const;

export function TechnicalDirection() {
  return (
    <section className="section technical-direction" aria-labelledby="direction-heading">
      <div className="site-container">
        <div className="section-heading direction-heading">
          <p className="eyebrow">Technical direction</p>
          <h2 id="direction-heading">What we're exploring</h2>
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
