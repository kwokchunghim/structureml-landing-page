# StructureML V0 implementation specification

This document is the durable source of truth for StructureML V0. Read it before changing public copy, founders, legal wording, links, architecture, or visual direction.

## Purpose and positioning

StructureML is an early-stage, unincorporated independent ML research initiative focused on foundational machine learning for structured data.

The intended production domain is structureml.com. The domain has been purchased, but domain ownership must never be presented as trademark registration, incorporation, or exclusive legal rights.

The site should feel approximately 80% serious ML research lab and 20% ambitious infrastructure startup. It must establish technical seriousness, explain the structured-data thesis, provide a future home for research, writing, experiments and open-source work, show current research interests, and include only a restrained placeholder for a future product.

Do not imply that StructureML has built its own foundation model or demonstrated unreported results. Do not position it primarily as consulting, decisioning SaaS, AutoML, generic enterprise AI, an AI-agent company, or an experimentation platform.

## Legal and brand guardrails

- Use plain “StructureML” without TM or registered-mark symbols.
- Do not claim that StructureML is trademarked or registered.
- Do not use Ltd, Limited, LLP, Inc., Corporation, registered company, incorporated, or wording that presents StructureML as a separate legal person.
- Call StructureML an “independent research initiative,” never a company.
- The founders’ employer has permitted the activity, but that is private governance context. Do not name the employer or mention permission, affiliation, sponsorship, endorsement, investment, or partnership.
- The MIT license and footer copyright owner is “Tony Kwok and Billy Zhao.”
- Do not add an Organization legal-entity schema, company number, registered office, trademark notice, or incorporation statement.

## Route and navigation

Build one route, /, with smooth anchor navigation:

- StructureML → #top
- Research → #research
- Writing → #writing
- Prototype → #prototype
- About → #about
- GitHub → disabled coming-soon state

Use a sticky desktop header and accessible mobile disclosure menu. Store the future organization GitHub URL centrally as null. The header and footer show non-link GitHub text with aria-disabled and a visible Soon label. The hero shows a disabled GitHub button. A future non-null URL must enable all three destinations. Never link to Tony’s or Billy’s personal GitHub or any existing public codebase.

## Exact public content

### Hero

Brand:

StructureML

Heading:

Foundational ML for structured data.

Supporting copy:

> StructureML researches models that learn directly from tables, entities and relationships — and the systems needed to make them useful at scale.

Primary CTA:

Explore our research ↓

The primary CTA links to #research.

Secondary disabled CTA:

GitHub ↗

It includes a visible Coming soon status.

### Hero relational diagram

Implement one focused presentation component named RelationalDiagram. It is not a database, schema framework, relational application architecture, or reusable component system.

Display:

- customers: customer_id PK, country, segment
- orders: order_id PK, customer_id FK, product_id FK, amount
- products: product_id PK, category, price
- sessions: session_id PK, customer_id FK, duration

Show these relationships:

- orders.customer_id → customers.customer_id
- orders.product_id → products.product_id
- sessions.customer_id → customers.customer_id

Communicate:

> tables + entities + relationships → learned representation

Animate once: tables appear, connectors draw, small signals move through the relationships, and a compact learned-representation block resolves. Under reduced motion, show the complete static state. Stack tables vertically on mobile and simplify connectors without hiding information.

Do not use brains, robots, neural-network spheres, node clouds, sci-fi imagery, or generic AI illustrations.

### Thesis

Heading:

Structured data deserves better primitives.

Conventional ML:

Relational database
↓
SQL joins + aggregations
↓
Handcrafted feature table
↓
Task-specific model
↓
Prediction

Emerging approach:

Structured / relational data
↓
Pretrained structured-data model
↓
Learned representation + in-context adaptation
↓
Prediction across new tasks

Supporting copy:

> Much of enterprise machine learning still begins by compressing relational data into manually designed feature tables. Recent work in tabular and relational foundation models suggests another possibility: models that learn more directly from the structure of the underlying data and adapt to new prediction tasks through pretraining and in-context learning.

Then:

> StructureML explores the modelling and systems problems required to make this practical.

Keep the comparison exploratory. Do not say foundation models have replaced feature engineering or conventional supervised learning.

### Research

Anchor: #research

Heading:

Research

Intro:

> We are interested in the model and systems layer underneath the next generation of structured-data machine learning.

01 — Relational Foundation Models

> How can pretrained models learn across tables, entities, relationships and schemas, then generalize to unseen databases and prediction tasks?

Tags: RFM, Relational Learning, RDL, Pretraining

02 — Tabular & Structured ICL

> How can models infer new structured-data prediction tasks from labelled examples without requiring a new model-training pipeline for every task?

Tags: Tabular FM, PFN, ICL, Task Adaptation

03 — Efficient Context & Retrieval

> Can structured-data models learn which examples and relational context actually matter instead of conditioning on an entire training dataset?

Tags: Retrieval, Context Selection, Scaling, Efficient Inference

Render these as active research questions in numbered, typography-led rows, never product capabilities or oversized marketing cards.

### Research & Writing

Anchor: #writing

Heading:

Research & Writing

Supporting copy:

> Notes, experiments and technical investigations as we learn in public.

Disclosure:

> Upcoming concepts — not yet published.

Does Tabular ICL Need the Entire Training Set?

Upcoming Research Note · 2026

> Full-context inference, retrieval and the scalability problem for structured-data foundation models.

Dissecting Relational In-Context Learning

Upcoming Research Note · 2026

> What recent relational foundation models tell us about context construction, support labels and cross-database generalization.

From Feature Engineering to Relational Foundation Models

Upcoming Research Note · 2026

> Why relational databases provide a natural substrate for end-to-end representation learning.

Render publication-style ruled rows. These concepts have no links and must not appear published. The typed model must support future Research Note, Experiment, Paper, and Code entries with optional internal, GitHub, arXiv, or external links.

### Product prototype

Anchor: #prototype

Heading:

Product Prototype

Status:

COMING SOON

Copy:

> We're exploring how advances in foundational ML for structured data could translate into new enterprise ML products.

Then:

> Product direction currently under development.

Disabled control:

Prototype coming soon

Use a restrained conceptual frame clearly labelled non-functional. Do not imply working technology, fabricate features, build the prototype, assume it is a decision engine, or reuse SubCore/subscription functionality.

### Technical direction

Heading:

What we're exploring

Flow:

Structured data
↓
Representation learning
↓
In-context learning
↓
Efficient context selection
↓
Predictions on new tasks

Concise labels:

Tables + relationships
→ Structured foundation models
→ Task adaptation
→ Retrieval / context efficiency
→ Predictions

This is a research architecture diagram, not a sales funnel.

### About and founding team

Anchor: #about

Heading:

About StructureML

Copy:

> StructureML is an independent research initiative exploring foundational machine learning for structured data.

> We study relational and tabular foundation models, in-context learning, and the systems required to make these approaches practical at real-world scale.

Never replace “initiative” with company, corporation, or incorporated organization.

Tony Kwok

Co-founder

> Machine learning engineer based in London, interested in production ML, structured-data foundation models and learning systems.

Billy Zhao

Co-founder

> Information TBC.

Render both founders with equal visual weight. Billy’s placeholder is honest ordinary copy, not a fabricated biography, skeleton, hidden profile, or implied network request. Show no founder GitHub, LinkedIn, employer branding, employer permission statement, Spotify branding, affiliation, or endorsement.

### Footer

Display:

StructureML

Foundational ML for structured data.

Links and states:

- Research → #research
- Writing → #writing
- GitHub → disabled with Soon
- Contact → mailto:info@structureml.com

Omit LinkedIn and personal social links.

Then:

© 2026 Tony Kwok and Billy Zhao

London, UK

Independent research initiative.

Do not add trademark symbols, a company suffix, registration information, or a registered-office statement.

## Visual system

Use a warm technical direction: warm off-white background, near-black text, muted oxide/rust as the sole accent, warm neutral surfaces, thin borders, self-hosted IBM Plex Sans and IBM Plex Mono, generous whitespace, editorial typography, low-radius corners, minimal shadows, subtle grid motifs, fluid typography, and a maximum width around 1200px.

Use approximately 96–128px desktop and 64–88px mobile section spacing. The hierarchy must be typography-led, not card-led.

Page composition:

- Asymmetric hero text/diagram split at desktop, stacked on mobile
- Two editorial thesis columns
- Numbered research rows
- Compact publication list
- One clearly labelled prototype frame
- Precise technical-direction diagram
- Equal two-founder grid
- Minimal border-separated footer

Do not use purple-to-blue gradients, gradient text, glassmorphism, glowing orbs, floating neural networks, generic AI artwork, excessive rounded rectangles, large decorative shadows, forced dark mode, or trademark symbols.

Reuse only the SubCore reference’s quality patterns: semantic OKLCH tokens, consistent gutters, section rhythm, sticky-header treatment, mono labels, masked technical grid, and restrained transitions. Do not copy its branding, layout, product logic, forced dark palette, Supabase, Lovable setup, or component bulk.

## Accessibility and interaction

- Use semantic header, nav, main, section, article, and footer landmarks.
- Include a keyboard-visible skip link.
- Use one h1 and a logical heading hierarchy.
- Provide visible focus styles, WCAG AA contrast, and 44px touch targets.
- The mobile menu exposes aria-expanded and aria-controls, supports Enter/Space, closes on Escape, returns focus, and closes after anchor selection.
- Disabled GitHub and prototype states have no href and cannot navigate.
- External links use target blank and noopener/noreferrer only when real URLs exist.
- Disable smooth scrolling and active animation under reduced motion.

## Typed content contract

The site has no public API or backend interface.

Writing kinds: Research Note, Experiment, Paper, Code.

Writing statuses: upcoming, published.

Link destinations: internal, github, arxiv, external.

Founder entries contain name, role, bio, and complete/tbc status.

Initial links:

- githubUrl: null
- contactEmail: info@structureml.com
- founderGithubUrl: null
- founderLinkedInUrl: null

Initial founders:

- Tony Kwok; Co-founder; approved biography above; complete
- Billy Zhao; Co-founder; Information TBC.; tbc

Centralize navigation, research areas, writing entries, founders, and links in one typed content module. Do not create a CMS, schema engine, generic component framework, or speculative abstraction.

## Metadata and static assets

Production URL: https://structureml.com

Title:

StructureML — Foundational ML for structured data

Description:

StructureML researches models that learn directly from tables, entities and relationships — and the systems needed to make them useful at scale.

Include canonical URL, Open Graph title/description/URL/type, Twitter summary metadata without an invented account, lang=en, indexable robots.txt, a one-entry sitemap, and an original structured-grid favicon.

Do not add trademark symbols, registered-business metadata, Organization legal-entity structured data, company registration information, or invented social/founder/publication metadata.

## Engineering and verification

Use Vite 8, React 19, TypeScript, Tailwind CSS 4, Node 24.16.0, and npm 11.13.0. Use a committed npm lockfile and strict TypeScript.

Pin npm run dev to http://127.0.0.1:5173 with strictPort. If occupied, fail instead of selecting another port.

Scripts must include dev, build, preview, format, format:check, lint, typecheck, test:unit, test:e2e, test, and check. The check command runs formatting verification, lint, typecheck, all tests, and the production build.

Use Prettier, type-aware ESLint, Vitest, Testing Library, user-event, Playwright Chromium, and Axe Playwright.

Tests cover exact public copy, anchors, disabled GitHub states, info@structureml.com, both co-founders, Billy’s TBC status, upcoming writing entries without links, disabled prototype, exact research tags, mobile menu keyboard behavior, relational diagram structure, reduced motion, responsive overflow, metadata, landmarks, accessibility, production serving, and the absence of trademark/company/employer claims.

CI runs on pull requests and pushes to main with read-only contents permission, concurrency cancellation, a 20-minute timeout, SHA-pinned actions, Node 24/npm caching, npm ci, format check, lint, typecheck, component tests, Chromium installation, Playwright tests, and build.

Add weekly Dependabot updates for npm and GitHub Actions.

Prepare Vercel with framework vite, npm run build, dist output, no catch-all rewrite, and static security headers. No deployment workflow, secrets, or environment variables.

Do not create GitHub/Vercel infrastructure, DNS records, deployments, or public code links.

## Commit sequence

1. docs: establish StructureML V0 specification
2. build: scaffold the StructureML frontend
3. feat: establish the StructureML visual system and navigation
4. feat: add the hero and structured-data thesis
5. feat: add research and writing sections
6. feat: add prototype direction and founding team
7. feat: animate the relational research diagram
8. test: cover StructureML landing-page journeys
9. ci: add deterministic quality and Vercel gates
10. docs: finalize development and deployment guidance

After commit 1 on main, create feat/structureml-v0. Make no further feature changes directly on main. Each commit must be focused, reviewable, and valid. Do not merge, push, open a pull request, publish, or deploy.

At handoff, run npm ci, install Chromium, run npm run check, inspect desktop/tablet/mobile screenshots, confirm the reference repositories are clean, show the feature-branch commit log and diff summary, and leave the site running at http://127.0.0.1:5173.
