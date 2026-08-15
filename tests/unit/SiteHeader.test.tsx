import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { SiteHeader } from "../../src/components/layout/SiteHeader";

describe("mobile navigation", () => {
  it("opens accessibly, closes on Escape, and returns focus", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);
    const menuButton = screen.getByRole("button", { name: "Open navigation menu" });

    await user.click(menuButton);
    expect(menuButton).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("navigation", { name: "Mobile navigation" })).toHaveAttribute(
      "data-open",
      "true",
    );

    fireEvent.keyDown(document, { key: "Escape" });
    expect(menuButton).toHaveAttribute("aria-expanded", "false");
    expect(menuButton).toHaveFocus();
  });

  it("closes after a mobile anchor is selected", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);
    const menuButton = screen.getByRole("button", { name: "Open navigation menu" });

    await user.click(menuButton);
    const mobileNavigation = screen.getByRole("navigation", { name: "Mobile navigation" });
    await user.click(withinNavigation(mobileNavigation, "Research"));

    expect(menuButton).toHaveAttribute("aria-expanded", "false");
    expect(mobileNavigation).toHaveAttribute("data-open", "false");
  });
});

function withinNavigation(navigation: HTMLElement, label: string) {
  const link = Array.from(navigation.querySelectorAll("a")).find(
    (candidate) => candidate.textContent === label,
  );
  if (!link) throw new Error(`Missing ${label} navigation link`);
  return link;
}
