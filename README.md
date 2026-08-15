# StructureML

Production landing page for StructureML, an independent research initiative exploring foundational machine learning for structured data.

The V0 site is intentionally a research-led homepage, not a mature SaaS product. It explains the thesis, current research questions, an honest writing coming-soon state, exploratory technical direction, and a restrained non-functional product placeholder. The intended production domain is `structureml.com`.

The complete content, legal, visual, engineering, and release contract lives in [docs/structureml-v0-spec.md](docs/structureml-v0-spec.md). Read it before changing public copy, founders, links, positioning, architecture, or deployment behavior.

## Status and scope

- One static route at `/` with anchor navigation.
- No backend, API routes, database, authentication, analytics, secrets, or environment variables.
- No functioning product prototype, StructureML publications, or unreported StructureML results.
- GitHub destinations remain visibly disabled until a real repository URL is approved.
- Research & Writing displays only `COMING SOON` and contains no promised titles, dates, or links.
- Tony Kwok and Billy Zhao are shown with equal weight as co-founders, using only their approved LinkedIn destinations and no founder biographies or employer references.

StructureML is currently described only as an unincorporated independent research initiative. Do not add trademark symbols, a company suffix, incorporation language, employer references, affiliations, or endorsements. GPT-2 and GPT-3 appear only in an attributed historical analogy; they are not StructureML branding and do not imply OpenAI affiliation. The MIT license covers the repository source; it does not make a trademark or incorporation claim.

## Research positioning

The homepage cites four external primary sources—Relational Transformer, KumoRFM-2, RT-J, and OpenRFM—as evidence that the technical direction is credible. The sources appear only as inline links within prose explicitly introduced as external work, use qualitative rather than numeric claims, and retain their conference/preprint status labels. They are not presented as a publication list and remain distinct from StructureML's empty writing section.

The public thesis remains exploratory. It does not claim that StructureML built the cited models, that structured-data foundation models are solved, or that predictive benchmarks establish decision quality. Prediction-to-decisioning is presented as an open research problem spanning context, objectives, constraints, feedback, optimization, contextual bandits, and reinforcement learning—not as prototype functionality.

## Technology

- Vite 8, React 19, and strict TypeScript
- Tailwind CSS 4 plus small, modular CSS files and semantic design tokens
- Self-hosted IBM Plex Sans and IBM Plex Mono
- Vitest, Testing Library, Playwright Chromium, and Axe
- ESLint with type-aware rules and Prettier
- npm with exact dependency versions and a committed lockfile

Node `24.16.0` and npm `11.13.0` are the reproducible local and CI baseline. The package accepts later compatible Node 24 and npm 11 releases so Vercel can apply supported patch updates.

## Local development

Prerequisites:

- Node.js 24.16.0 (`.nvmrc` is included)
- npm 11.13.0

Install the locked dependencies and Chromium once:

```sh
npm ci
npm exec -- playwright install chromium
```

Start the development server:

```sh
npm run dev
```

Open [http://127.0.0.1:5173](http://127.0.0.1:5173). The port is fixed intentionally; startup fails if 5173 is occupied rather than silently selecting another port.

The production preview uses [http://127.0.0.1:4173](http://127.0.0.1:4173):

```sh
npm run build
npm run preview
```

## Commands

| Command                | Purpose                                             |
| ---------------------- | --------------------------------------------------- |
| `npm run dev`          | Start the fixed local development server            |
| `npm run build`        | Type-check and create the production `dist/` bundle |
| `npm run preview`      | Serve the built site on the fixed preview port      |
| `npm run format`       | Write Prettier formatting                           |
| `npm run format:check` | Verify formatting without changing files            |
| `npm run lint`         | Run type-aware ESLint                               |
| `npm run typecheck`    | Run TypeScript without emitting files               |
| `npm run test:unit`    | Run component and configuration tests               |
| `npm run test:e2e`     | Build and run Chromium smoke/accessibility tests    |
| `npm run test`         | Run unit/component and browser tests                |
| `npm run check`        | Run every required local verification gate          |

`npm run check` is the definition-of-done command. Playwright traces and failure screenshots are written beneath the ignored `output/playwright/` directory.

## Repository structure

```text
src/
  components/
    layout/       Header and footer
    sections/     Homepage sections
    visuals/      Relational-data hero diagram
  content/        Typed public content and link state
  styles/         Tokens, layout, sections, and diagram styling
tests/
  unit/           Component and production-configuration tests
  e2e/            Production-preview browser journeys
public/           Favicon, robots.txt, and sitemap.xml
docs/             Durable V0 specification
.github/          CI and dependency automation
```

`src/App.tsx` explicitly composes the page. `src/content/site.ts` centralizes navigation, external research evidence, research areas, the empty writing collection, founders, approved founder LinkedIn destinations, contact details, and the nullable site GitHub destination. Keep content changes there unless the content is inseparable from a section's explanatory structure.

To publish future work, add a typed Research Note, Experiment, Paper, or Code entry only when its content and destination exist. Set its status deliberately, add an `internal`, `github`, `arxiv`, or `external` link, and update rendering/tests in the same change. Do not add speculative titles or links pre-emptively.

## Foundation decision

This repository uses Option C: selective reuse.

The inspected `ai-project-cookiecutter` repository offered strong lockfile, type-aware linting, pinned CI action, Dependabot, and verification conventions. Its fuller application profiles would add backend, Supabase, rewrite, hook, and scaffolding machinery that a one-route research site does not need. StructureML therefore uses a minimal standalone Vite application while adopting the cookiecutter's strongest engineering controls.

The two SubCore repositories were reference material only and were not modified. `subcore-landing-page` informed spacing, semantic tokens, technical diagrams, and frontend polish; none of its branding, product logic, Lovable stack, dark palette, or unused component bulk was copied. `subcore-agent-demo` informed the small static Vite/Vercel shape and deterministic build convention; its demo state and product architecture were not reused.

## Testing and CI

The test suite focuses on behavior that matters for this landing page:

- Approved positioning, attributed research thesis, exact external citations, founders, and legal wording.
- Anchor destinations, contact link, and disabled GitHub/prototype states.
- Mobile-menu keyboard interaction and focus restoration.
- Relational schema and relationship semantics.
- The writing collection remaining visibly empty, unpublished, and unlinked.
- External-link safety and the absence of StructureML model/result claims or universal context-complexity claims.
- Reduced-motion behavior and responsive overflow at 390, 768, and 1440 pixels.
- Production metadata/static assets and serious Axe findings.

GitHub Actions runs on pull requests and pushes to `main`. It uses a deterministic `npm ci`, read-only repository permission, concurrency cancellation, a 20-minute limit, SHA-pinned actions, and fails on formatting, lint, type checking, component tests, browser tests, or the production build. Dependabot checks npm and GitHub Actions weekly.

For visual changes, also inspect the complete page at 1440, 768, and 390 pixels, the open mobile menu, keyboard focus states, and reduced motion. Automated accessibility checks supplement rather than replace manual review.

## Vercel deployment

The repository is ready for the intended GitHub → Vercel → `structureml.com` flow, but no repository remote, Vercel project, deployment, DNS record, or custom domain has been created by this implementation.

When external setup is authorized:

1. Create the GitHub repository and push the feature through the normal review process.
2. Import the repository into Vercel using Git integration.
3. Confirm the Vite framework, `npm run build` command, and `dist` output. These are also declared in `vercel.json`.
4. Leave environment variables empty; the site needs no secrets.
5. Attach `structureml.com` as the production custom domain and follow Vercel's DNS instructions.

No application-code change is required for the custom domain. `vercel.json` deliberately has no catch-all SPA rewrite because V0 has only `/` and fragment anchors. It supplies conservative static security headers; keep the content-security policy aligned if future code adds a genuine external runtime dependency.

## Contribution discipline

Read `AGENTS.md` (also available through the `CLAUDE.md` symlink) and the durable specification before making changes. Use a feature branch, keep commits focused and reviewable, add relevant tests, and run `npm run check` before handoff. Do not push directly to `main`, publish, deploy, or create external infrastructure without explicit authorization.

## License

MIT © Tony Kwok and Billy Zhao. See [LICENSE](LICENSE).
