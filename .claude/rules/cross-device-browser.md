# Cross-Device & Cross-Browser Rules

## Responsive Design
- Mobile-first: Basis-Styles für kleine Screens, dann `md:` / `lg:` breakpoints
- Kein festes `width` in px für Layout-Container — stattdessen `max-w-*` + `w-full`
- Flexbox oder Grid für Layouts, kein absolutes Positioning für fließende Elemente
- Schriftgrößen mit `text-sm/base/lg` (relative Einheiten), nicht `px`
- Bilder immer mit `max-w-full h-auto` oder `object-cover` + definierter Containergröße

## Browser-Kompatibilität
- Kein experimentelles CSS ohne Fallback (z.B. `container queries` nur mit Tailwind-Support prüfen)
- Tailwind-Klassen bevorzugen — Tailwind handled Vendor-Prefixing automatisch
- Keine browser-spezifischen Hacks — wenn nötig, kommentieren warum
- `<meta charset="UTF-8">` und `<meta name="viewport" content="width=device-width, initial-scale=1">` immer im `<head>`
- `lang`-Attribut am `<html>`-Tag setzen (z.B. `lang="de"`)

## Performance & Rendering
- Keine render-blockenden Ressourcen ohne `defer`/`async`
- Bilder mit `loading="lazy"` für alles below the fold
- System-Fonts bevorzugen oder `font-display: swap` verwenden

## Testing-Checklist
- [ ] Chrome (Desktop + Mobile Emulation)
- [ ] Firefox
- [ ] Safari (macOS + iOS wenn möglich)
- [ ] Edge
- [ ] Mindestens 3 Breakpoints testen: 375px, 768px, 1280px
