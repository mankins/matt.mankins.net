# matt.mankins.net

Portfolio site. Slideshow-style: one section per viewport, hamburger menu to
jump between them, arrow keys to step.

SvelteKit 2 · Svelte 5 · Tailwind 4 · deploys to Vercel.

```sh
npm install
npm run dev       # localhost:4343
npm run build
npm run preview
```

## Editing content

**All copy lives in `src/lib/sections.js`.** Nothing else needs touching to add,
remove, or reword a section — the components read from that file.

Each section is one slide:

```js
{
  id: 'thanks-computer',   // url hash + menu anchor
  group: 'Now',            // menu grouping
  kicker: 'Lorem Labs · open source, MPL-2.0',
  title: 'Thanks, Computer',
  year: '2024–',
  blurb: 'One or two sentences that set the frame.',
  points: [{ label: 'Short label', text: 'The substance.' }],
  links: [{ label: 'thanks.computer', href: 'https://…' }],
  draft: true              // marks it visibly unfinished
}
```

Reordering the array reorders the site. Menu groups derive from `group`.

## What still needs your words

Seven sections are marked `draft: true` and render a visible "needs content"
note, so nothing half-finished ships by accident:

**Cyan · Ka-Zam · Semicolons · Monetized.Link · Votetastic · Ident Agency ·
Setler**

Semicolons and Monetized.Link have partial notes from the resume archaeology;
the other five are titles only. Either fill them in or delete them from the
array — an obviously empty section costs more than a missing one.

Everything else is drawn from `~/code/mankins/resumes/EVIDENCE.md`, which is the
sourced record behind these claims.

## Deploying

```sh
npx vercel        # first run links the project
npx vercel --prod
```

Every route is prerendered, so this is a static deploy. The adapter pins
`runtime: 'nodejs22.x'` because it can't infer one from Node 23 locally; that
only affects the build environment.
