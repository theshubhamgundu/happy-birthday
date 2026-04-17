# Design Brief

## Direction

Warm Romantic Celebration — A personal birthday tribute page with elegant rose-gold palette and soft animations inspired by luxury greeting card design.

## Tone

Celebratory intimacy executed with refined elegance and emotional genuineness — not playful, but warmly personal and touching.

## Differentiation

Full-screen hero entrance with animated decorative hearts and sparkles, paired with a countdown timer as focal element and handwritten-aesthetic letter section.

## Color Palette

| Token      | OKLCH           | Role                               |
| ---------- | --------------- | ---------------------------------- |
| background | 0.96 0.01 75    | Warm cream base, full coverage     |
| foreground | 0.25 0.05 10    | Deep burgundy text, high contrast  |
| card       | 0.98 0.01 75    | Slightly elevated surface          |
| primary    | 0.55 0.18 30    | Rose-gold hero and accents         |
| accent     | 0.65 0.15 345   | Warm blush for highlights          |
| secondary  | 0.85 0.08 350   | Muted rose for soft backgrounds    |
| muted      | 0.92 0.02 75    | Light neutral for subtle elements  |

## Typography

- Display: Fraunces — romantic serif for hero title and countdown numbers
- Body: DM Sans — clean sans for letter text and descriptions
- Scale: hero `text-6xl md:text-7xl font-bold tracking-tight`, h2 `text-3xl md:text-4xl font-bold`, body `text-base leading-relaxed`

## Elevation & Depth

Soft layered shadows (subtle 8px, elevated 24px) using warm rose-tinted shadow colors. Photo frames have gentle gold-tinted shadows. No hard lines; depth through color shifts and soft boundaries.

## Structural Zones

| Zone            | Background       | Border          | Notes                                |
| --------------- | ---------------- | --------------- | ------------------------------------ |
| Hero (full)     | card + gradient  | none            | Full-viewport with centered content  |
| Countdown       | card/muted       | none            | Prominent spacing below hero         |
| Photo Gallery   | background      | frame shadow    | 2x2 grid with rose-gold frames      |
| Letter Section  | secondary (soft) | subtle border   | Cream-rose background, centered text |

## Spacing & Rhythm

Generous vertical spacing (48px–80px between sections) for elegance. Hero centered with 24px internal padding. Photo grid gaps 24px. Micro-spacing: 4px label-to-input, 8px button padding.

## Component Patterns

- Hero text: large serif with fade-in animation on load
- Countdown: numeric display with floating animation, rose-gold text
- Photo frame: 12px border-radius, rose-gold border or shadow, soft hover scale
- Letter: serif heading, sans body text, center-aligned, light rose background card
- Buttons: rose-gold primary, soft rounded (8px), hover opacity + slight lift

## Motion

- Entrance: fade-in on hero (0.8s ease-out), staggered fade-in-up for countdown and sections
- Hover: photo cards scale 1.02 with shadow elevation, buttons reduce opacity to 0.9
- Decorative: floating hearts near hero (3s cycle), pulse-glow on accent elements

## Constraints

- No generic AI aesthetics — warm palette is intentional, not cliché
- Fonts loaded locally; no system fallbacks beyond serif/sans-serif
- Full-page layout flows hero → countdown → gallery → letter
- Responsive: hero scales for mobile, gallery becomes 1x4 on mobile

## Signature Detail

Animated floating hearts and sparkles positioned absolutely around the hero title, creating a subtle celebratory atmosphere without compromising elegance.
