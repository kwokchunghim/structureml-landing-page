import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { App } from "../../src/App";
import { researchAreas, writingEntries } from "../../src/content/site";

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

  it("labels every writing concept as upcoming and leaves it unlinked", () => {
    render(<App />);

    expect(screen.getByText("Upcoming concepts — not yet published.")).toBeInTheDocument();
    writingEntries.forEach((entry) => {
      const heading = screen.getByRole("heading", { name: entry.title });
      const row = heading.closest("article");
      expect(row).not.toBeNull();
      expect(
        within(row as HTMLElement).getByText("Upcoming", { exact: false }),
      ).toBeInTheDocument();
      expect(within(row as HTMLElement).queryByRole("link")).not.toBeInTheDocument();
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
