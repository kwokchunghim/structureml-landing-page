# StructureML V0 site requirements

This document defines the maintained product, editorial, legal, visual, and engineering requirements for the StructureML landing page.

## Purpose and positioning

StructureML is an early-stage, unincorporated independent ML research initiative focused on foundational machine learning for structured data.

The production domain is structureml.com. Domain ownership must never be presented as trademark registration, incorporation, or exclusive legal rights.

The site should feel approximately 80% serious ML research lab and 20% ambitious infrastructure startup. It must establish technical seriousness, explain the structured-data thesis, provide a future home for research, writing, experiments and open-source work, show current research interests, and include only a restrained placeholder for a future product.

Recent work on the Relational Transformer, KumoRFM-2, RT-J, and OpenRFM provides evidence that pretrained models can transfer across relational databases and prediction tasks. These results make the technical direction credible while leaving major gaps in context efficiency, relational-tabular integration, and decision learning.

StructureML believes this is a GPT-2 moment for structured data: the core capability is visible, but the field has not yet reached its GPT-3 breakthrough. This is an authored research thesis, not a benchmark conclusion or a claim that scale alone will produce the breakthrough.

Do not imply that StructureML has built its own foundation model or demonstrated unreported results. Do not position it primarily as consulting, decisioning SaaS, AutoML, generic enterprise AI, an AI-agent company, or an experimentation platform.

## Legal and brand guardrails

- Use plain “StructureML” without TM or registered-mark symbols.
- Use GPT-2 and GPT-3 only as descriptive historical comparisons inside the attributed StructureML thesis. Do not use them in the brand, tagline, metadata, visual assets, or language implying OpenAI affiliation.
- Do not claim that StructureML is trademarked or registered.
- Do not use Ltd, Limited, LLP, Inc., Corporation, registered company, incorporated, or wording that presents StructureML as a separate legal person.
- Call StructureML an “independent research initiative,” never a company.
- Do not name the founders' employers or imply affiliation, sponsorship, endorsement, investment, or partnership.
- The MIT license and footer copyright owner is “Tony Kwok and Billy Zhao.”
- Do not add an Organization legal-entity schema, company number, registered office, trademark notice, or incorporation statement.
- Cite third-party research as external work only. Do not imply ownership, partnership, endorsement, customer relationships, product dependencies, or independent validation by StructureML.
- Do not show third-party logos or numeric benchmark claims on the homepage.

## Route and navigation

The site has one route, `/`, with smooth anchor navigation:

- StructureML → #top
- Research → #research
- Writing → #writing
- Prototype → #prototype
- About → #about
- GitHub → disabled coming-soon state

Use a sticky desktop header and accessible mobile disclosure menu. Store the StructureML GitHub URL centrally as `githubUrl`, which is currently `null`. The header and footer show non-link GitHub text with `aria-disabled` and a visible Soon label. The hero shows a disabled GitHub button. A future non-null URL must enable all three destinations. Never substitute Tony's or Billy's personal GitHub profiles.

## Public content

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

`RelationalDiagram` is a focused presentation component. It is not a database, schema framework, relational application architecture, or reusable component system.

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

> Much of enterprise machine learning still begins by compressing relational data into manually designed feature tables. Recent work in tabular and relational foundation models now demonstrates a credible alternative: pretrained systems that learn more directly from structured data and adapt across prediction tasks.

Then:

> StructureML studies what remains unresolved: how relational and tabular learning should work together, how models can select sufficient context efficiently, and how predictive representations can support decisions under objectives, constraints and feedback.

State-of-the-field subsection:

Heading:

### The capability is visible. The frontier is still open.

Copy, with each named work linked inline:

> Recent external work—including Relational Transformer (ICLR 2026) and KumoRFM-2 (Preprint · 2026)—shows that pretrained models can transfer across relational databases and prediction tasks. RT-J (Preprint · 2026) and OpenRFM (Preprint · 2026) further explore context-efficient relational inference and the combination of relational and tabular in-context learning. Together, this body of work makes the direction credible without closing the gaps in context efficiency, relational–tabular integration or learning to make decisions.

Attributed callout label:

StructureML thesis

Callout:

> We believe structured-data foundation models are at a GPT-2 moment: the core capability is visible, but the field has not yet reached its GPT-3 breakthrough. Getting there will require advances in data, context efficiency, adaptation and decision learning—not scale alone.

Citation destinations:

- Relational Transformer — ICLR 2026 — https://openreview.net/forum?id=rpPtgMC5s9
- KumoRFM-2 — Preprint · 2026 — https://arxiv.org/abs/2604.12596
- RT-J — Preprint · 2026 — https://openreview.net/forum?id=oQINTd9din
- OpenRFM — Preprint · 2026 — https://arxiv.org/abs/2606.04320

These citations are external research, not StructureML publications. Render them only as inline links inside the state-of-the-field prose; do not display them as a standalone publication list, card group, or other treatment that could imply authorship. Open each in a new tab with safe external-link attributes and accessible new-tab text.

Keep the comparison exploratory. Do not say foundation models have replaced feature engineering or conventional supervised learning.

### Research

Anchor: #research

Heading:

Research

Intro:

> We study what comes after the first convincing structured-data foundation models: how relational and tabular learning fit together, how context can be made efficient, and how predictions can support decisions.

01 — Relational & Tabular Foundation Models

> How should relational representation learning and tabular task adaptation work together across schemas and tasks, and can they be unified without losing the strengths of either?

Tags: RFM, Tabular FM, Representation Learning, Task Adaptation

02 — Context-Efficient Adaptation

> Can models learn a query- and task-dependent sufficient context from labelled examples, relational neighbourhoods and schema signals—without paying full-context costs or losing rare, global and temporally relevant information?

Tags: Retrieval, Support Selection, Context Efficiency, Efficient Inference

03 — From Prediction to Decisioning

> How can pretrained structured-data models move from predicting outcomes to choosing actions under objectives, constraints and feedback—and safely balance exploration with exploitation as preferences and responses evolve?

Tags: Decision Learning, Contextual Bandits, Exploration / Exploitation, Constrained Optimization

Render these as active research questions in numbered, typography-led rows, never product capabilities or oversized marketing cards.

Do not claim that all tabular in-context inference has a universal O(N) complexity. Context cost is architecture-dependent. Future writing must distinguish cold context construction, attention cost, caching, retrieval cost, labelled support size, relational evidence, and amortized repeated scoring.

Prediction-to-decisioning is broader than preference learning. It may involve causal or counterfactual estimation, constrained optimization, contextual bandits, offline policy learning, or sequential reinforcement learning. DPO is an analogy for preference post-training; it does not itself perform online exploration and exploitation.

### Writing

Anchor: #writing

Heading:

Writing

Supporting copy:

> Notes, experiments and technical investigations as we learn in public.

Status:

COMING SOON

Copy:

> Nothing published yet.

Do not display proposed titles, dates, summaries, publication rows, or disabled article links. The typed model must continue to support future Research Note, Experiment, Paper, and Code entries with optional internal, GitHub, arXiv, or external links once real work is published.

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

Use a restrained conceptual frame clearly labelled non-functional. Do not imply working technology, fabricate features, build the prototype, or assume an eventual product direction.

### Technical direction

Heading:

What we're exploring

Intro:

> Prediction is not decisioning. We are exploring how pretrained representations and task-relevant context could support outcome models, then policies shaped by objectives, constraints, feedback and the balance between exploration and exploitation.

Flow:

Structured data
↓
Shared representations
↓
Context-efficient adaptation
↓
Outcome prediction
↓
Decision learning

Concise labels:

Tables + relationships
→ Relational + tabular models
→ Retrieved support + neighbourhoods
→ Task-conditioned estimates
→ Objectives + constraints + feedback

This is a research architecture diagram, not a sales funnel.

### About and founding team

Anchor: #about

Heading:

About StructureML

Copy:

> StructureML is an independent research initiative exploring foundational machine learning for structured data.

> We study how relational and tabular foundation models can work together, how structured context can be selected efficiently, and how predictive systems can support decisions under real-world objectives, constraints and feedback.

Never replace “initiative” with company, corporation, or incorporated organization.

Tony Kwok

Co-founder

LinkedIn ↗

https://www.linkedin.com/in/tonykwokch/

Billy Zhao

Co-founder

LinkedIn ↗

https://www.linkedin.com/in/yanhong-billy-zhao-9913ba140/

Render both founders with equal visual weight. Show only each configured name, the shared Co-founder role, and the supplied LinkedIn destination; do not display biographies, employer names or branding, affiliations, endorsements, founder GitHub links, or placeholder text. LinkedIn links open in a new tab with safe external-link attributes and accessible new-tab text.

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
- Two editorial thesis columns followed by inline external citations
- Numbered research rows
- Compact writing coming-soon state
- One clearly labelled prototype frame
- Precise technical-direction diagram
- Equal two-founder grid
- Minimal border-separated footer

Do not use purple-to-blue gradients, gradient text, glassmorphism, glowing orbs, floating neural networks, generic AI artwork, excessive rounded rectangles, large decorative shadows, forced dark mode, or trademark symbols.

Use semantic OKLCH tokens, consistent gutters, measured section rhythm, a restrained sticky-header treatment, monospaced technical labels, a subtle masked grid, and short transitions. Keep these patterns specific to StructureML's research-led identity, with dependencies and component scope proportional to the single-page site.

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

Research references contain title, citation/status detail, and an HTTPS URL. Current references are the four external works cited inline in the Thesis section.

Founder entries contain name, role, and a configured LinkedIn URL.

Current links:

- githubUrl: null
- contactEmail: info@structureml.com

Current founders:

- Tony Kwok; Co-founder; https://www.linkedin.com/in/tonykwokch/
- Billy Zhao; Co-founder; https://www.linkedin.com/in/yanhong-billy-zhao-9913ba140/

Current writing entries: none. Render the documented coming-soon state while the collection is empty.

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

Tests cover exact public copy, anchors, disabled GitHub states, info@structureml.com, both co-founders and their configured LinkedIn destinations, the absence of founder biographies and employer references, the empty writing state, external citation URLs and link safety, the attributed GPT-2/GPT-3 thesis, disabled prototype, exact research tags, technical-direction stages, mobile menu keyboard behavior, relational diagram structure, reduced motion, responsive overflow, metadata, landmarks, accessibility, production serving, and the absence of trademark/company/employer/affiliation claims.

CI runs on pull requests and pushes to main with read-only contents permission, concurrency cancellation, a 20-minute timeout, SHA-pinned actions, Node 24/npm caching, npm ci, format check, lint, typecheck, component tests, Chromium installation, Playwright tests, and build.

Dependabot checks npm and GitHub Actions weekly.

Vercel uses framework `vite`, `npm run build`, `dist` output, no catch-all rewrite, and static security headers. The application has no deployment workflow, secrets, or environment variables.

Repository administration, Vercel project settings, deployments, and DNS are managed outside application code. Keep their documented build and domain assumptions aligned with this repository.
