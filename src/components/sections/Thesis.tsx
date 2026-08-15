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
            models suggests another possibility: models that learn more directly from the structure
            of the underlying data and adapt to new prediction tasks through pretraining and
            in-context learning.
          </p>
          <p>
            StructureML explores the modelling and systems problems required to make this practical.
          </p>
        </div>
      </div>
    </section>
  );
}
