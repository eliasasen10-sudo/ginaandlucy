# Design Tokens

## Colors (OKLCH – Tailwind v4+)
Define in `tailwind.config.ts` via `@theme`, reuse with `var(--color-*)`:

- **Primary**: `oklch(65% 0.2 240)` — blue-ish
- **Accent**: `oklch(72% 0.25 80)` — warm gold/orange
- **Neutral**: `oklch(98% 0 0)` (light) → `oklch(20% 0 0)` (dark)
- **Success**: `oklch(65% 0.15 150)`
- **Error**: `oklch(60% 0.2 30)`

Never hardcode color values inline — always reference tokens.

## Typography
- **Font family**: Inter (sans-serif), elegant serif fallback for headings if needed
- **Scale**: `4xl` (2.25rem) → `base` (1rem) → `xs` (0.75rem)
- **Weights**: 400 regular · 500 medium · 600 semi-bold · 700 bold
- **Line height**: tight (1.1–1.25) for headings · relaxed (1.5–1.75) for body
- **Letter spacing**: `-0.025em` headings · normal body

## Spacing & Border Radius
- **Spacing scale (rem)**: 0.5 · 1 · 1.5 · 2 · 3 · 4 · 6 · 8 · 12
- **Border radius**: sm `0.375rem` · md `0.5rem` · lg `0.75rem` · pill `9999px`

## Shadows
- Subtle / default: `0 1px 2px rgba(0,0,0,0.05)` (Tailwind `shadow-sm`)
- Cards: `shadow-md`
- Avoid heavy shadows unless purposeful
