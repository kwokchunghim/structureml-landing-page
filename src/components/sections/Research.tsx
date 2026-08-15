import { researchAreas } from "../../content/site";

export function Research() {
  return (
    <section className="section research" id="research">
      <div className="site-container">
        <div className="editorial-heading">
          <div>
            <p className="eyebrow">Research</p>
            <h2>Research</h2>
          </div>
          <p>
            We are interested in the model and systems layer underneath the next generation of
            structured-data machine learning.
          </p>
        </div>

        <div className="research-list">
          {researchAreas.map((area) => (
            <article className="research-row" key={area.number}>
              <p className="research-number" aria-hidden="true">
                {area.number}
              </p>
              <div className="research-question">
                <h3>{area.title}</h3>
                <p>{area.question}</p>
              </div>
              <ul className="tag-list" aria-label={`${area.title} topics`}>
                {area.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
