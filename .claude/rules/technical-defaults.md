# Technical Defaults

- Use Tailwind CSS via CDN (`<script src="https://cdn.tailwindcss.com"></script>`)
- Use placeholder images from `https://placehold.co/` when source images aren't provided
- Mobile-first responsive design
- Single `index.html` file unless the user requests otherwise

## Component-Based Projects (React / Next.js)
- Use shadcn/ui primitives first (Button, Card, Dialog, Table, etc.) before building custom components
- Class merging: use `cn()` helper from `"@/lib/utils"` — never concatenate class strings manually
- Dark mode: class strategy (`darkMode: 'class'` in config), always test both modes
- Icons: lucide-react, size 20–24px, stroke-width 1.5–2
- Variants: use shadcn variant prop + `className` overrides, not custom CSS
- Tailwind only: no custom CSS files unless complex animation or unavoidable escape hatch
- CSS variables + Tailwind `@theme` for all design tokens — reuse via `var(--color-*)`
