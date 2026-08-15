# StructureML repository instructions

## Source of truth

Read `docs/structureml-v0-spec.md` before making changes. It owns the approved public copy, founders, legal wording, links, visual direction, architecture, tests, and release constraints.

Do not invent research results, publications, product functionality, founder information, URLs, affiliations, or business claims. StructureML is an unincorporated independent research initiative. Never add trademark symbols, company suffixes, incorporation claims, or employer references.

## Working method

1. State assumptions and measurable success criteria.
2. Inspect the implementation and affected tests first.
3. Make the smallest change that satisfies the request.
4. Keep content separate from presentation and dependencies minimal.
5. Add behavior-focused tests with behavior changes.
6. Run the relevant checks and review the diff for unrelated changes.

Do not refactor, reformat, or clean up unrelated code. Remove only orphans created by the current change.

## Verification

Run `npm run check` before handoff. Do not claim a check passed if it did not run. Test exact public claims, keyboard behavior, reduced motion, responsive layouts, and disabled link states.

## Git discipline

Use focused conventional commits on a feature branch. Do not push directly to `main`, rewrite published history, skip hooks/checks, create external infrastructure, publish code, or deploy unless explicitly authorized.
