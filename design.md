# Nadisoft — Design System

Source of truth for the site revamp, transcribed from the official brand guideline
sheet. Implementation notes map each spec to how this Next.js + Tailwind v4 site is
built (see `src/app/globals.css` and `src/app/layout.tsx`).

## Brand

- **Name:** Nadisoft
- **Logo lockup tagline:** TECHNOLOGY FORWARD
- **Headline / positioning:** Empowering Digital Futures
- **Description:** Nadisoft is a Johor-based technology company delivering innovative
  digital solutions that drive progress, efficiency, and growth for businesses.
- **Location:** Johor, Malaysia
- **Website:** nadisoft.com.my
- **Footer line:** Proudly rooted in Johor, built for the world.

> Note: the brand sheet positions Nadisoft in **English** ("Empowering Digital
> Futures"). The current site uses Malay copy (`lang="ms"`, "Pemacuan Digital,
> Transformasi Global"). Decide which is canonical before the revamp and align
> `layout.tsx` `metadata` + the hero accordingly.

### Logo

The symbol is a dynamic **'N'-shaped ribbon encircled by an orbit**, reflecting
innovation, connectivity, and forward motion.

- **Letter 'N'** — Nadisoft initial, strong identity
- **Orbit Ring** — global reach, continuous connection
- **Forward Motion** — growth, innovation, future-ready

Asset: `public/nadisoft-logo.png`. The wordmark renders "nadi" in Deep Navy and "soft"
in Steel Gray, with "TECHNOLOGY FORWARD" in Nadi Blue letter-spaced caps beneath.

## Color Palette

| Token        | Hex       | Name       | Meaning                          |
| ------------ | --------- | ---------- | -------------------------------- |
| `nadi-blue`  | `#0066FF` | Nadi Blue  | Trust, Technology, Innovation    |
| `deep-navy`  | `#0A1E3D` | Deep Navy  | Professionalism, Strength, Stability |
| `steel-gray` | `#7A8699` | Steel Gray | Sophistication, Balance          |
| `soft-gray`  | `#E6E8EB` | Soft Gray  | Clarity, Neutrality              |
| `white`      | `#FFFFFF` | Pure White | Simplicity, Transparency         |

### Usage guidance

- **Nadi Blue** — primary accent: links, CTAs, highlights, decorative gradients.
- **Deep Navy** — headlines, dark sections (signage/banners), primary brand text.
- **Steel Gray** — secondary text, the "soft" half of the wordmark, muted captions.
- **Soft Gray** — surfaces, borders, section backgrounds, dividers.
- **White** — page background, text on dark surfaces.

## Typography

- **Primary — Poppins** → headlines and brand name. Use **SemiBold (600)**.
- **Secondary — Inter** → body text and descriptions. Use **Regular (400)**.

| Role                  | Font   | Weight   |
| --------------------- | ------ | -------- |
| Headlines, brand name | Poppins | SemiBold |
| Body, descriptions    | Inter  | Regular  |

> Migration note: `layout.tsx` currently loads **Geist** via `next/font/google`.
> Replace with `Poppins` (display/headings) and `Inter` (body), each wired to its own
> CSS variable, then update `--font-sans` / add a `--font-display` token in `globals.css`.

## Brand Pillars (Symbolism)

- **Trust & Reliability** — built on secure, dependable technology.
- **Connectivity** — bridging people, systems, and ideas.
- **Innovation** — creative solutions for a better future.
- **Growth** — empowering businesses to scale higher.

Use these four as the content backbone for a "what we do" / values section in the revamp.

## Applications

The brand sheet shows the identity across: dark Deep Navy **banners/signage**,
**business cards** (logo + name/designation + contact), and **building signage**.
On dark backgrounds the logo and wordmark appear in white/steel.

## Implementation Mapping (Tailwind v4)

Tailwind is configured entirely in `src/app/globals.css` (no `tailwind.config`). To
adopt this palette, replace the current `ocean`/`gray` tokens with the brand tokens in
**both** the `:root` block and the `@theme inline` block:

```css
:root {
  --background: #ffffff;
  --foreground: #0a1e3d;      /* Deep Navy text */
  --nadi-blue:  #0066ff;
  --deep-navy:  #0a1e3d;
  --steel-gray: #7a8699;
  --soft-gray:  #e6e8eb;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-nadi-blue:  var(--nadi-blue);
  --color-deep-navy:  var(--deep-navy);
  --color-steel-gray: var(--steel-gray);
  --color-soft-gray:  var(--soft-gray);
  --font-sans:    var(--font-inter);
  --font-display: var(--font-poppins);
}
```

This yields utilities like `text-deep-navy`, `bg-nadi-blue`, `border-soft-gray`,
`font-display`. Every new color must be declared in both blocks to be usable.
