import type { WritingEntry } from "../../content/site";
import { writingEntries } from "../../content/site";

function WritingRow({ entry }: { entry: WritingEntry }) {
  const statusLabel = entry.status === "upcoming" ? "Upcoming" : "Published";

  return (
    <article className="writing-row">
      <p className="writing-meta">
        <span>{statusLabel}</span> {entry.kind} · {entry.year}
      </p>
      <h3>{entry.title}</h3>
      <p className="writing-summary">{entry.summary}</p>
    </article>
  );
}

export function Writing() {
  return (
    <section className="section writing" id="writing">
      <div className="site-container">
        <div className="editorial-heading">
          <div>
            <p className="eyebrow">Writing</p>
            <h2>Research &amp; Writing</h2>
          </div>
          <p>Notes, experiments and technical investigations as we learn in public.</p>
        </div>

        <p className="publication-disclosure">Upcoming concepts — not yet published.</p>
        <div className="writing-list">
          {writingEntries.map((entry) => (
            <WritingRow entry={entry} key={entry.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
