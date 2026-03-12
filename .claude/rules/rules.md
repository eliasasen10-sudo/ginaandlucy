# Rules

- Do not add features, sections, or content not present in the reference image
- Match the reference exactly - do not "improve" the design
- If the user provides CSS classes or style tokens, use them verbatim
- Keep code clean but don't over-abstract - inline Tailwind classes are fine
- When comparing screenshots, be specific about what's wrong (e.g., "heading is 32px but reference shows ~24px", "gap between cards is 16px but should be 24px")

## Anti-Patterns (Never Do)
- Do NOT invent new colors outside design tokens — always use `var(--color-*)` or Tailwind token classes
- Do NOT use arbitrary Tailwind values `[value]` excessively — stick to the defined scale
- Do NOT override shadcn/ui defaults with `!important`
- Do NOT create monolithic components >150–200 lines — split logic vs. UI early
- Do NOT add heavy animations or shadows unless they serve a clear purpose
- Do NOT skip dark mode or accessibility checks
- Do NOT generate "beautiful" without purpose — prioritize function and clarity over decoration
- Do NOT use generic "AI slop" aesthetics (heavy gradients, neon shadows, over-rounded corners unless branded)
