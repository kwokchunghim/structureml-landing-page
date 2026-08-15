import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const pageDescription =
  "StructureML researches models that learn directly from tables, entities and relationships — and the systems needed to make them useful at scale.";

const externalReferences = [
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

test("serves production metadata and indexable static assets", async ({ page, request }) => {
  const response = await page.goto("/");
  expect(response?.status()).toBe(200);

  await expect(page).toHaveTitle("StructureML — Foundational ML for structured data");
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    pageDescription,
  );
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", "index, follow");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://structureml.com/",
  );
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
    "content",
    "https://structureml.com/",
  );
  await expect(page.locator('meta[property="og:description"]')).toHaveAttribute(
    "content",
    pageDescription,
  );
  await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute("content", "summary");
  await expect(page.locator('link[rel="icon"]')).toHaveAttribute("href", "/favicon.svg");

  const robots = await request.get("/robots.txt");
  expect(robots.ok()).toBe(true);
  expect(await robots.text()).toContain("Sitemap: https://structureml.com/sitemap.xml");

  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBe(true);
  expect(await sitemap.text()).toContain("<loc>https://structureml.com/</loc>");
});

test("serves the complete landing page with working anchors and disabled placeholders", async ({
  page,
}) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Foundational ML for structured data.",
  );
  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.getByRole("main")).toBeVisible();
  await expect(page.getByRole("contentinfo")).toBeVisible();

  await page
    .getByRole("navigation", { name: "Primary navigation" })
    .getByRole("link", {
      name: "Research",
    })
    .click();
  await expect(page).toHaveURL(/#research$/u);
  await expect(page.getByRole("heading", { name: "Research", exact: true })).toBeInViewport();

  const initialUrl = page.url();
  await expect(page.getByRole("button", { name: /GitHub/u })).toBeDisabled();
  await expect(page.getByRole("button", { name: "Prototype coming soon" })).toBeDisabled();
  await expect(page).toHaveURL(initialUrl);
  await expect(page.getByRole("link", { name: "Contact" })).toHaveAttribute(
    "href",
    "mailto:info@structureml.com",
  );
});

test("attributes external research and keeps StructureML writing unpublished", async ({ page }) => {
  await page.goto("/");

  const thesis = page.locator("blockquote.research-thesis");
  await expect(thesis).toContainText("StructureML thesis");
  await expect(thesis).toContainText(
    "We believe structured-data foundation models are at a GPT-2 moment",
  );

  const referenceList = page.getByRole("list", { name: "Selected external research" });
  for (const reference of externalReferences) {
    const link = referenceList.getByRole("link", { name: new RegExp(reference.title, "u") });
    const row = link.locator("..");
    await expect(link).toHaveAttribute("href", reference.href);
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", "noopener noreferrer");
    await expect(row).toContainText(reference.citation);
    await expect(row).toContainText(reference.relevance);
  }

  const writing = page.locator("#writing");
  await expect(writing.getByText("COMING SOON", { exact: true })).toBeVisible();
  await expect(writing.getByText("Nothing published yet.", { exact: true })).toBeVisible();
  await expect(writing.locator("article")).toHaveCount(0);
  await expect(writing.getByRole("link")).toHaveCount(0);
  for (const removedTitle of [
    "Does Tabular ICL Need the Entire Training Set?",
    "Dissecting Relational In-Context Learning",
    "From Feature Engineering to Relational Foundation Models",
  ]) {
    await expect(page.getByText(removedTitle, { exact: true })).toHaveCount(0);
  }
});

test("supports the mobile menu keyboard journey", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const menuButton = page.locator(".menu-button");
  await expect(menuButton).toHaveAccessibleName("Open navigation menu");
  await menuButton.focus();
  await page.keyboard.press("Enter");
  await expect(menuButton).toHaveAttribute("aria-expanded", "true");
  await expect(menuButton).toHaveAccessibleName("Close navigation menu");
  const mobileNavigation = page.getByRole("navigation", { name: "Mobile navigation" });
  await expect(mobileNavigation.getByRole("link", { name: "Writing" })).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  await expect(menuButton).toHaveAccessibleName("Open navigation menu");
  await expect(menuButton).toBeFocused();

  await menuButton.press("Enter");
  await mobileNavigation.getByRole("link", { name: "Writing" }).click();
  await expect(page).toHaveURL(/#writing$/u);
  await expect(menuButton).toHaveAttribute("aria-expanded", "false");
});

test("reveals the skip link for keyboard users", async ({ page }) => {
  await page.goto("/");

  await page.keyboard.press("Tab");
  const skipLink = page.getByRole("link", { name: "Skip to content" });
  await expect(skipLink).toBeFocused();
  await expect(skipLink).toBeVisible();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#main-content$/u);
});

for (const viewport of [
  { width: 390, height: 844 },
  { width: 768, height: 1024 },
  { width: 1440, height: 1000 },
]) {
  test(`has no horizontal overflow at ${viewport.width}px`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto("/");

    const dimensions = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }));
    expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth);
  });
}

test("stacks founders on mobile and gives them equal desktop weight", async ({ page }) => {
  await page.goto("/");
  const tony = page
    .getByRole("heading", { name: "Tony Kwok" })
    .locator("..", { hasText: "Co-founder" });
  const billy = page
    .getByRole("heading", { name: "Billy Zhao" })
    .locator("..", { hasText: "Co-founder" });

  await page.setViewportSize({ width: 1440, height: 1000 });
  const tonyDesktop = await tony.boundingBox();
  const billyDesktop = await billy.boundingBox();
  expect(tonyDesktop).not.toBeNull();
  expect(billyDesktop).not.toBeNull();
  expect(Math.abs((tonyDesktop?.y ?? 0) - (billyDesktop?.y ?? 0))).toBeLessThan(2);

  await page.setViewportSize({ width: 390, height: 844 });
  const tonyMobile = await tony.boundingBox();
  const billyMobile = await billy.boundingBox();
  expect(tonyMobile).not.toBeNull();
  expect(billyMobile).not.toBeNull();
  expect(billyMobile?.y ?? 0).toBeGreaterThan(tonyMobile?.y ?? 0);
});

test("shows a completed static diagram when reduced motion is requested", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  const finalState = await page.locator(".relational-diagram").evaluate((figure) => {
    const schema = figure.querySelector<HTMLElement>(".schema-card");
    const representation = figure.querySelector<HTMLElement>(".representation-block");
    const path = figure.querySelector<SVGPathElement>(".relationship-path");
    const signal = figure.querySelector<SVGCircleElement>(".diagram-signal");
    return {
      pathDashOffset: path ? getComputedStyle(path).strokeDashoffset : null,
      representationAnimation: representation
        ? getComputedStyle(representation).animationName
        : null,
      representationOpacity: representation ? getComputedStyle(representation).opacity : null,
      schemaAnimation: schema ? getComputedStyle(schema).animationName : null,
      schemaOpacity: schema ? getComputedStyle(schema).opacity : null,
      signalDisplay: signal ? getComputedStyle(signal).display : null,
    };
  });

  expect(finalState).toEqual({
    pathDashOffset: "0px",
    representationAnimation: "none",
    representationOpacity: "1",
    schemaAnimation: "none",
    schemaOpacity: "1",
    signalDisplay: "none",
  });
});

test("terminates relationship paths on their exact PK and FK rows", async ({ page }) => {
  await page.goto("/");

  const endpointDeltas = await page.locator(".relational-diagram").evaluate((figure) => {
    const svg = figure.querySelector<SVGSVGElement>(".relationship-connectors");
    if (!svg) throw new Error("Missing relationship connector layer");
    const svgRect = svg.getBoundingClientRect();
    const viewBox = svg.viewBox.baseVal;

    const fieldPoint = (cardSelector: string, fieldName: string, edge: "left" | "right") => {
      const card = figure.querySelector<HTMLElement>(cardSelector);
      const row = Array.from(card?.querySelectorAll<HTMLElement>(".schema-field") ?? []).find(
        (candidate) => candidate.querySelector("dt")?.textContent === fieldName,
      );
      if (!card || !row) throw new Error(`Missing ${cardSelector}.${fieldName}`);
      const cardRect = card.getBoundingClientRect();
      const rowRect = row.getBoundingClientRect();
      return {
        x: edge === "left" ? cardRect.left : cardRect.right,
        y: rowRect.top + rowRect.height / 2,
      };
    };

    const pathPoint = (pathSelector: string, endpoint: "start" | "end") => {
      const path = figure.querySelector<SVGPathElement>(pathSelector);
      if (!path) throw new Error(`Missing ${pathSelector}`);
      const point = path.getPointAtLength(endpoint === "start" ? 0 : path.getTotalLength());
      return {
        x: svgRect.left + ((point.x - viewBox.x) / viewBox.width) * svgRect.width,
        y: svgRect.top + ((point.y - viewBox.y) / viewBox.height) * svgRect.height,
      };
    };

    const delta = (first: { x: number; y: number }, second: { x: number; y: number }) => ({
      x: Math.abs(first.x - second.x),
      y: Math.abs(first.y - second.y),
    });

    return [
      delta(
        pathPoint(".path-customer-orders", "start"),
        fieldPoint(".schema-customers", "customer_id", "right"),
      ),
      delta(
        pathPoint(".path-customer-orders", "end"),
        fieldPoint(".schema-orders", "customer_id", "left"),
      ),
      delta(
        pathPoint(".path-product-orders", "start"),
        fieldPoint(".schema-orders", "product_id", "right"),
      ),
      delta(
        pathPoint(".path-product-orders", "end"),
        fieldPoint(".schema-products", "product_id", "right"),
      ),
      delta(
        pathPoint(".path-customer-sessions", "start"),
        fieldPoint(".schema-sessions", "customer_id", "left"),
      ),
      delta(
        pathPoint(".path-customer-sessions", "end"),
        fieldPoint(".schema-customers", "customer_id", "left"),
      ),
    ];
  });

  endpointDeltas.forEach(({ x, y }) => {
    expect(x).toBeLessThan(1);
    expect(y).toBeLessThan(1);
  });
});

test("has no serious automated accessibility violations", async ({ page }) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page }).analyze();
  const seriousViolations = results.violations.filter(
    (violation) => violation.impact === "serious" || violation.impact === "critical",
  );

  expect(seriousViolations).toEqual([]);
});

test("keeps public legal language restrained", async ({ page }) => {
  await page.goto("/");
  const bodyText = await page.locator("body").innerText();

  expect(bodyText).not.toMatch(/[™®]/u);
  expect(bodyText).not.toMatch(
    /\b(?:company|corporation|incorporated|Ltd|Limited|Inc\.?|LLC|employer|affiliated|affiliation|endorsed|endorsement|sponsored|sponsorship|partnership)\b/iu,
  );
  expect(bodyText).not.toMatch(/\b(?:our foundation model|our model|we built)\b/iu);
  expect(bodyText).not.toContain("O(N)");
  expect(bodyText).toContain("Independent research initiative.");
  expect(bodyText).toContain("© 2026 Tony Kwok and Billy Zhao");
});
