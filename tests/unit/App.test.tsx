import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { App } from "../../src/App";
import { Writing } from "../../src/components/sections/Writing";

describe("StructureML landing page", () => {
  it("renders the approved positioning and page landmarks", () => {
    render(<App />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toHaveAttribute("id", "main-content");
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Foundational ML for structured data.",
    );
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(
      screen.getByText(
        "StructureML researches models that learn directly from tables, entities and relationships — and the systems needed to make them useful at scale.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "StructureML is an independent research initiative exploring foundational machine learning for structured data.",
      ),
    ).toBeInTheDocument();
  });

  it("attributes the research thesis and cites selected external work", () => {
    render(<App />);

    expect(
      screen.getByText(
        "Much of enterprise machine learning still begins by compressing relational data into manually designed feature tables. Recent work in tabular and relational foundation models now demonstrates a credible alternative: pretrained systems that learn more directly from structured data and adapt across prediction tasks.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "We believe structured-data foundation models are at a GPT-2 moment: the core capability is visible, but the field has not yet reached its GPT-3 breakthrough. Getting there will require advances in data, context efficiency, adaptation and decision learning—not scale alone.",
      ),
    ).toBeInTheDocument();

    const referenceList = screen.getByRole("list", { name: "Selected external research" });
    const references = [
      {
        title: "Relational Transformer",
        citation: "ICLR 2026",
        relevance:
          "Cross-database and cross-task relational prediction without downstream weight updates.",
        href: "https://openreview.net/forum?id=rpPtgMC5s9",
      },
      {
        title: "KumoRFM-2",
        citation: "Preprint · 2026",
        relevance:
          "Few-shot prediction across connected tables with task conditioning and scalable relational retrieval.",
        href: "https://arxiv.org/abs/2604.12596",
      },
      {
        title: "RT-J",
        citation: "Preprint · 2026",
        relevance:
          "Context-efficient relational prediction using task-relevant evidence retrieved from the database.",
        href: "https://openreview.net/forum?id=oQINTd9din",
      },
      {
        title: "OpenRFM",
        citation: "Preprint · 2026",
        relevance: "A dual-stage design combining relational and tabular in-context learning.",
        href: "https://arxiv.org/abs/2606.04320",
      },
    ] as const;

    references.forEach((reference) => {
      const link = within(referenceList).getByRole("link", {
        name: new RegExp(reference.title, "u"),
      });
      const row = link.closest("li");
      expect(row).not.toBeNull();
      expect(link).toHaveAttribute("href", reference.href);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
      expect(within(row as HTMLElement).getByText(reference.citation)).toBeInTheDocument();
      expect(within(row as HTMLElement).getByText(reference.relevance)).toBeInTheDocument();
    });
  });

  it("provides the required anchor navigation and contact destination", () => {
    render(<App />);

    for (const [label, href] of [
      ["Research", "#research"],
      ["Writing", "#writing"],
      ["Prototype", "#prototype"],
      ["About", "#about"],
    ] as const) {
      const links = screen.getAllByRole("link", { name: label });
      expect(links.length).toBeGreaterThanOrEqual(1);
      links.forEach((link) => expect(link).toHaveAttribute("href", href));
    }

    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute(
      "href",
      "mailto:info@structureml.com",
    );
  });

  it("keeps every GitHub surface disabled until a real URL exists", () => {
    const { container } = render(<App />);
    const githubSurfaces = Array.from(container.querySelectorAll("button, span")).filter(
      (element) => element.textContent?.startsWith("GitHub"),
    );

    expect(githubSurfaces).toHaveLength(4);
    githubSurfaces.forEach((surface) => {
      expect(surface).not.toHaveAttribute("href");
      if (surface instanceof HTMLButtonElement) {
        expect(surface).toBeDisabled();
      } else {
        expect(surface).toHaveAttribute("aria-disabled", "true");
      }
    });
  });

  it("renders all research questions and exact topic tags", () => {
    render(<App />);

    expect(
      screen.getByText(
        "We study what comes after the first convincing structured-data foundation models: how relational and tabular learning fit together, how context can be made efficient, and how predictions can support decisions.",
      ),
    ).toBeInTheDocument();

    const researchAreas = [
      {
        title: "Relational & Tabular Foundation Models",
        question:
          "How should relational representation learning and tabular task adaptation work together across schemas and tasks, and can they be unified without losing the strengths of either?",
        tags: ["RFM", "Tabular FM", "Representation Learning", "Task Adaptation"],
      },
      {
        title: "Context-Efficient Adaptation",
        question:
          "Can models learn a query- and task-dependent sufficient context from labelled examples, relational neighbourhoods and schema signals—without paying full-context costs or losing rare, global and temporally relevant information?",
        tags: ["Retrieval", "Support Selection", "Context Efficiency", "Efficient Inference"],
      },
      {
        title: "From Prediction to Decisioning",
        question:
          "How can pretrained structured-data models move from predicting outcomes to choosing actions under objectives, constraints and feedback—and safely balance exploration with exploitation as preferences and responses evolve?",
        tags: [
          "Decision Learning",
          "Contextual Bandits",
          "Exploration / Exploitation",
          "Constrained Optimization",
        ],
      },
    ] as const;

    researchAreas.forEach((area) => {
      const heading = screen.getByRole("heading", { name: area.title });
      const row = heading.closest("article");
      expect(row).not.toBeNull();
      expect(within(row as HTMLElement).getByText(area.question)).toBeInTheDocument();
      area.tags.forEach((tag) => {
        expect(within(row as HTMLElement).getByText(tag)).toBeInTheDocument();
      });
    });
  });

  it("keeps writing in an honest empty state", () => {
    render(<App />);

    const heading = screen.getByRole("heading", { name: "Research & Writing" });
    const section = heading.closest("section");
    expect(section).not.toBeNull();
    expect(within(section as HTMLElement).getByText("COMING SOON")).toBeInTheDocument();
    expect(within(section as HTMLElement).getByText("Nothing published yet.")).toBeInTheDocument();
    expect(within(section as HTMLElement).queryByRole("article")).not.toBeInTheDocument();
    expect(within(section as HTMLElement).queryByRole("link")).not.toBeInTheDocument();
  });

  it("retains the typed renderer for a future published entry", () => {
    render(
      <Writing
        entries={[
          {
            title: "Published fixture",
            kind: "Research Note",
            status: "published",
            year: 2026,
            summary: "Test-only published research summary.",
            link: {
              destination: "external",
              href: "https://example.com/research-note",
            },
          },
        ]}
      />,
    );

    const link = screen.getByRole("link", { name: /Published fixture/u });
    expect(link).toHaveAttribute("href", "https://example.com/research-note");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
    expect(screen.getByText("Published", { selector: ".writing-meta span" })).toBeInTheDocument();
    expect(screen.queryByText("COMING SOON")).not.toBeInTheDocument();
  });

  it("connects structured data to decision learning without presenting a product funnel", () => {
    render(<App />);

    const heading = screen.getByRole("heading", { name: "What we're exploring" });
    const section = heading.closest("section");
    expect(section).not.toBeNull();
    expect(
      within(section as HTMLElement).getByText(
        "Prediction is not decisioning. We are exploring how pretrained representations and task-relevant context could support outcome models, then policies shaped by objectives, constraints, feedback and the balance between exploration and exploitation.",
      ),
    ).toBeInTheDocument();

    const flow = within(section as HTMLElement).getByRole("list");
    const steps = [
      ["Structured data", "Tables + relationships"],
      ["Shared representations", "Relational + tabular models"],
      ["Context-efficient adaptation", "Retrieved support + neighbourhoods"],
      ["Outcome prediction", "Task-conditioned estimates"],
      ["Decision learning", "Objectives + constraints + feedback"],
    ] as const;

    steps.forEach(([stage, label]) => {
      const item = within(flow).getByText(stage).closest("li");
      expect(item).not.toBeNull();
      expect(within(item as HTMLElement).getByText(label)).toBeInTheDocument();
    });
  });

  it("presents a clearly non-functional prototype placeholder", () => {
    render(<App />);

    expect(screen.getByText("Coming soon", { selector: ".status-label" })).toBeInTheDocument();
    expect(screen.getByText("Non-functional")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Prototype coming soon" })).toBeDisabled();
    expect(screen.getByText("Product direction currently under development.")).toBeInTheDocument();
  });

  it("renders both co-founders with only the approved information", () => {
    render(<App />);

    expect(
      screen.getByText(
        "We study how relational and tabular foundation models can work together, how structured context can be selected efficiently, and how predictive systems can support decisions under real-world objectives, constraints and feedback.",
      ),
    ).toBeInTheDocument();

    const tony = screen.getByRole("heading", { name: "Tony Kwok" }).closest("article");
    const billy = screen.getByRole("heading", { name: "Billy Zhao" }).closest("article");

    expect(tony).not.toBeNull();
    expect(billy).not.toBeNull();
    expect(within(tony as HTMLElement).getByText("Co-founder")).toBeInTheDocument();
    expect(
      within(tony as HTMLElement).getByText(
        "Machine learning engineer based in London, interested in production ML, structured-data foundation models and learning systems.",
      ),
    ).toBeInTheDocument();
    expect(within(billy as HTMLElement).getByText("Co-founder")).toBeInTheDocument();
    expect(within(billy as HTMLElement).getByText("Information TBC.")).toBeInTheDocument();
    expect(within(tony as HTMLElement).queryByRole("link")).not.toBeInTheDocument();
    expect(within(billy as HTMLElement).queryByRole("link")).not.toBeInTheDocument();
  });

  it("describes the complete relational schema and relationship set", () => {
    render(<App />);

    const figure = screen.getByRole("figure");
    for (const table of ["customers", "orders", "products", "sessions"]) {
      expect(within(figure).getByRole("heading", { name: table })).toBeInTheDocument();
    }
    for (const relationship of [
      "orders.customer_id → customers.customer_id",
      "orders.product_id → products.product_id",
      "sessions.customer_id → customers.customer_id",
    ]) {
      expect(within(figure).getByText(relationship)).toBeInTheDocument();
    }
    expect(figure).toHaveTextContent("primary-key and foreign-key relationships");
  });

  it("does not make trademark, incorporation, or employer claims", () => {
    const { container } = render(<App />);
    const publicText = container.textContent ?? "";

    expect(publicText).not.toMatch(/[™®]/u);
    expect(publicText).not.toMatch(/\b(?:Ltd|Limited|Inc\.?|LLC|corporation|employer)\b/iu);
    expect(publicText).toContain("© 2026 Tony Kwok and Billy Zhao");
  });
});
