import type { WritingEntry } from "../../content/site";
import { writingEntries } from "../../content/site";

export function WritingRow({ entry }: { entry: WritingEntry }) {
  const statusLabel = entry.status === "upcoming" ? "Upcoming" : "Published";
  const opensNewTab = entry.link ? entry.link.destination !== "internal" : false;

  return (
    <article className="writing-row">
      <p className="writing-meta">
        <span>{statusLabel}</span> {entry.kind} · {entry.year}
      </p>
      <h3>
        {entry.link ? (
          <a
            className="writing-title-link"
            href={entry.link.href}
            rel={opensNewTab ? "noopener noreferrer" : undefined}
            target={opensNewTab ? "_blank" : undefined}
          >
            {entry.title}
            {opensNewTab ? (
              <>
                <span aria-hidden="true"> ↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </>
            ) : null}
          </a>
        ) : (
          entry.title
        )}
      </h3>
      <p className="writing-summary">{entry.summary}</p>
    </article>
  );
}

export function Writing({ entries = writingEntries }: { entries?: readonly WritingEntry[] }) {
  return (
    <section className="section writing" id="writing">
      <div className="site-container">
        <div className="editorial-heading">
          <div>
            <p className="eyebrow">Writing</p>
            <h2>Writing</h2>
          </div>
          <p>Notes, experiments and technical investigations as we learn in public.</p>
        </div>

        {entries.length === 0 ? (
          <div className="writing-coming-soon">
            <p>COMING SOON</p>
            <p>Nothing published yet.</p>
          </div>
        ) : (
          <div className="writing-list">
            {entries.map((entry) => (
              <WritingRow entry={entry} key={entry.title} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
