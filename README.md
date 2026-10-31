# The People v. Satyam

An illustrated, interactive courtroom romantic comedy and sincere apology. It is a static React experience: no backend, analytics, tracking, visitor uploads, or remote response storage.

## Stack

React, TypeScript, Vite, Tailwind CSS, Motion for React, Lucide, Vitest, and React Testing Library. Illustrations are lightweight CSS/SVG artwork.

## Run locally

```bash
npm install
npm run dev
npm run typecheck
npm run test
npm run build
```

The production output is in `dist/`. Preview it with `npm run dev -- --host` or `npx vite preview` after building.

## Personalize

All personal copy lives in `src/config/story.ts`. Change `recipientName` only if desired; an empty name is intentional and reads naturally. The same file contains the names, case number/title, charges, evidence, questions, tea, contract clauses, translations, HYROX material, heartfelt statements, apology, verdicts, and secret evidence. No real court provisions or legal definitions are claimed.

## Tests

`npm run test` checks the case-file opening, charge inspection, cross-examination, verdict/secret-room path, and replay behavior. `npm run typecheck` performs strict TypeScript checking, and `npm run build` verifies the static bundle and GitHub Pages base-path logic.

## GitHub Pages deployment

1. Open a terminal in the `UsKinda1` directory, create a GitHub repository, and push this project to its `main` branch.
2. In **Settings → Pages**, choose **GitHub Actions** as the source.
3. The workflow installs with `npm ci`, type-checks, tests, builds, uploads `dist`, and deploys with the official Pages actions.
4. The URL is normally `https://USERNAME.github.io/REPOSITORY/`. Vite derives the repository base path from `GITHUB_REPOSITORY`; no username is hardcoded.

Common issues: enable Pages in repository settings; ensure Actions have Pages write permission; commit `package-lock.json`; confirm the default branch is `main`; and rerun the workflow after changing Pages settings. For a custom domain, configure it in GitHub after the first successful deployment.

## Pre-sharing checklist

- Read the apology once in `src/config/story.ts` and adjust only what feels true.
- Test at phone width and complete every verdict path.
- Confirm no personal or law-firm information was added accidentally.
- Remember that a public Pages link can be opened by anyone who has it.
- Share without framing the page as requiring forgiveness or a response.

The footer summarizes the project’s scope: “A fictional court. A very real apology. Absolutely no legal advice.”
