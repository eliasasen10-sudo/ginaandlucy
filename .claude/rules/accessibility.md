# Accessibility & UI Quality

## Accessibility Rules
- Semantic HTML first (`<button>`, `<nav>`, `<main>`, `<section>`, etc.)
- ARIA attributes only where native semantics aren't sufficient
- Focus states must always be visible — never `outline: none` without a custom replacement
- All `<img>` elements require meaningful `alt` text (or `alt=""` for decorative images)
- Color contrast ≥ 4.5:1 for normal text, ≥ 3:1 for large text (WCAG AA)
- Interactive elements must be keyboard-navigable

## Design Philosophy
- Modern, clean, accessible. Bold yet minimal.
- Prioritize clarity and hierarchy over decoration.
- Every visual element should serve a purpose — no gratuitous decoration.
- Composition over configuration: combine small primitives rather than building monoliths.

## Workflow for Component Design Tasks
1. Plan layout first (sketch structure in comments before writing JSX)
2. Reference design tokens, brand guidelines, and existing components
3. Output clean, commented JSX with Tailwind utility classes
4. After generation: suggest preview + iteration prompts
5. When refining: update design-tokens.md with any new tokens introduced
