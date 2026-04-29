# SANDBOX INDEX — drshallandahunter.com Portfolio
> Version: 4.2 | Updated: 2026-04-28 | Quick-reference for all AI agents and future sessions.
> **Read this file before touching anything.**

---

## ⚠️ FIRST THING TO DO EVERY SESSION — RUN THIS IF THE SITE LOOKS BROKEN

If you see 404 errors for `layout.css`, `page.css`, or any `/_next/static/` files in the browser console, the Next.js cache is stale. **Always run this before assuming something is wrong with the code:**

```bash
kill $(lsof -ti :4000); rm -rf /Users/higgi/drshallandahunter/claude-design/.next; cd /Users/higgi/drshallandahunter/claude-design && npm run dev
```

This happens automatically after any file change when the dev server was not running. It is not a code bug — it is a Next.js cache issue. Do not touch any components until after running this.

---

## PROJECT IDENTITY
- **Client:** Dr. Shallanda Hunter — PharmD, MBA, CFNMP, GLP-1 Educator, AI Implementation Architect, Healthcare Product Builder
- **Domain:** drshallandahunter.com
- **Type:** Next.js 15 (App Router) — pure web, no React Native
- **Framework:** Next.js 15.3.1 + React 19
- **Animation:** GSAP 3.12.5 (ScrollTrigger, path draw, stagger, parallax)
- **Icons:** lucide-react 0.475.0 + custom inline SVG for brand/social icons (see SocialIcons.js)
- **Styling:** CSS Modules (zero Tailwind, zero inline styles for layout)
- **Dev server:** `npm run dev` → **http://localhost:4000** (port 3000 is reserved for another project)
- **Cache fix:** If CSS/JS return 404: `kill $(lsof -ti :4000); rm -rf .next; npm run dev`

---

## BRAND IDENTITY
| Property | Value |
|---|---|
| Public name | Dr. Shallanda Hunter |
| Health brand | Sugar Functional PharmD |
| Primary email | info@huntersholistichealth.com |
| Accent Gold | `#c8a74b` — spark highlights, CTAs, ROOTS letters, scroll line |
| Accent Teal | `#0B9E8E` — labels, graphical accents, section kickers |
| Teal Dark | `#144445` — mission card headings, borders |
| Fonts | Outfit (headlines, 900wt) · Inter (body) · Cormorant Garamond (serif headings, testimonial quotes) |
| Credentials | PharmD · MBA · CFNMP · Google AI Certified · Claude AI Certified |
| Positioning | GLP-1 Educator · AI Implementation Architect · Product Builder for Women in Healthcare |

---

## DIRECTORY MAP
```
/drshallandahunter/
├── UI_UX_PRO_MAX.md               ← Design intelligence rules (read before ANY UI task)
├── ROOTLABEL.MP4                  ← Source for Studio Dashboard video (154MB — same as vitaplate_studio_dashboard.mp4)
├── shallanda-portfolio.zip        ← Original Manus build (reference only — do not unzip again)
├── recovered_media/               ← Extracted images from recovered_portfolio_media.zip
├── reuploaded_portfolio_videos/   ← Extracted videos (some too large for web — see notes below)
└── claude-design/                 ← MAIN PROJECT — Next.js portfolio (port 4000)
    ├── SANDBOX_INDEX.md           ← This file
    ├── app/
    │   ├── layout.js              ← Root layout, Google Fonts, metadata
    │   ├── page.js                ← Page assembly — all section components in order
    │   └── globals.css            ← Design tokens + ticker speed (80s — do not change)
    ├── public/                    ← All web assets — see Asset Reference below
    └── components/                ← All section components — see Component map below
```

---

## PAGE SECTION ORDER (page.js)
```
1.  <Cursor />           — GSAP custom cursor
2.  <Navbar />           — Sticky header
3.  <Hero />             — id="home"
4.  <Ticker />           — CSS marquee strip (80s speed — do not change)
5.  <Testimonials />     — id="about"  (About + Authority + ROOTS + testimonials)
6.  <Services />         — id="services"
7.  <VitaPlate />        — (no id — scroll-reached)
8.  <Work />             — id="work"
9.  <ProofStack />       — (no id — scroll-reached)
10. <ClientTrust />      — (no id — scroll-reached)
11. <Contact />          — id="contact"
12. <Footer />
```

---

## CSS DESIGN TOKENS (globals.css)
| Token | Value | Use |
|---|---|---|
| `--bg-base` | `hsl(205,32%,7%)` | Page background |
| `--bg-elevated` | `hsl(205,26%,11%)` | Cards, sections |
| `--bg-raised` | `hsl(205,20%,15%)` | Hover states |
| `--accent` | `#c8a74b` | Gold — spark highlights, CTAs, scroll line, ROOTS letters |
| `--accent-rgb` | `200, 167, 75` | Used in `rgba(var(--accent-rgb), 0.x)` |
| `--accent-teal` | `#0B9E8E` | Teal — labels, kickers, authority titles, dot indicators |
| `--accent-teal-rgb` | `11, 158, 142` | Used in `rgba(var(--accent-teal-rgb), 0.x)` |
| `--accent-teal-dark` | `#144445` | Very dark teal — mission card headings, scrollbar |
| `--text-primary` | `hsl(0,0%,97%)` | Headlines |
| `--text-secondary` | `hsl(205,14%,62%)` | Body copy |
| `--text-muted` | `hsl(205,12%,42%)` | Labels, placeholders |
| `--font-serif` | `'Cormorant Garamond', serif` | Serif font variable |
| `--ease-expo` | `cubic-bezier(0.16,1,0.3,1)` | Primary easing |
| `--ease-spring` | `cubic-bezier(0.34,1.56,0.64,1)` | Spring/bounce |

---

## CDN BACKDROP IMAGES (all public, no auth required)
| Section | URL |
|---|---|
| Hero | `https://d2xsxph8kpxj0f.cloudfront.net/310519663094779485/mne9ZDoMYpFEH7LXCxpfnb/shallanda-hero-editorial-clinical-luxury-hwHFBGXoRVdh6DTWFQnRYa.webp` |
| Mission (About) | `https://d2xsxph8kpxj0f.cloudfront.net/310519663094779485/mne9ZDoMYpFEH7LXCxpfnb/shallanda-mission-story-panel-VSHpzfFdRwRm64sShrprhp.webp` |
| Work/Projects | `https://d2xsxph8kpxj0f.cloudfront.net/310519663094779485/mne9ZDoMYpFEH7LXCxpfnb/shallanda-projects-gallery-backdrop-ZcEthAwXSUXQFjwMUBobAc.webp` |
| Contact CTA | `https://d2xsxph8kpxj0f.cloudfront.net/310519663094779485/mne9ZDoMYpFEH7LXCxpfnb/shallanda-contact-cta-glow-LSaztLHxHUCGUcL43R3tt7.webp` |

---

## ASSET REFERENCE — public/ directory (complete, verified 2026-04-28)

### Headshots
| File | Description | Used in | Positioning |
|---|---|---|---|
| `headshot-blue.jpg` | Blue Hunter's Holistic Health polo — branding is intentional, do not crop the shirt | Hero.js | `objectPosition: 'top center'` inline style — anchors to face. `max-height: 420px` on `.photo`. Do not revert. |
| `headshot.jpg` | White pharmacy school lab coat — school badge on right shoulder must not show | Testimonials.js | `.avatarImg` CSS class: `transform: scale(1.7); transform-origin: 50% 0%` — pushes badge below the clip boundary |

### Project Media — Work section
| File | Size | Used in |
|---|---|---|
| `glproot_reel.mp4` | 3.6MB | Work.js — GLPRoot card (video autoplay) |
| `clinmotion-screenshot.webp` | 49KB | Work.js — ClinMotion card (image) |
| `deidguard_promo.mp4` | 2.7MB | Work.js — DeIDGuard card (video autoplay) |
| `roots-health-clinic.png` | 326KB | Work.js — Shallanda's World card (dark dashboard screenshot, `imgPosition: 'left top'` to show sidebar nav) |
| `malachi-mobile.jpg` | 274KB | Work.js — Malachi card, dual image LEFT (mobile home screen — colorful modules) |
| `malachi-2.png` | 63KB | Work.js — Malachi card, dual image RIGHT (All Modules list with star ratings) |
| `malachi-1.png` | 50KB | Unused — superseded by malachi-mobile.jpg |
| `glproot.svg` | small | Unused fallback |
| `clinmotion.svg` | small | Unused fallback |
| `deidguard.svg` | small | Unused fallback |

### VitaPlate AI — 4 video slots
| File | Size | Label in VitaPlate.js | Status |
|---|---|---|---|
| `vitaplate_protocol_generation.mp4` | 83MB | Protocol Generation | ✓ Playing |
| `vitaplate_daily_plate_ai_coaching.mp4` | 2.5MB | The GLP-1 Plate | ✓ Playing |
| `vitaplate_recipe_builder.mov` | 41MB | Recipe Builder | ✓ Playing (MOV — works in Chrome/Safari) |
| `vitaplate_studio_dashboard.mp4` | 154MB | RootLabel | ✓ Playing locally — **TOO LARGE for Vercel** (100MB limit). Needs ffmpeg compression before deploy. |
| `vitaplate-placeholder.svg` | small | — | Fallback SVG when video missing |
| `vitaplate-logo.png` | 5.8MB | — | VitaPlate AI logo in section header — displayed at `height:48px; maxWidth:280px; objectFit:contain` to prevent wide dark banner. Do not remove the maxWidth. |
| `vitaplate-icon.png` | 3.5MB | — | VitaPlate circular icon |

### Client Review
| File | Notes |
|---|---|
| `client-review.png` | Real 5-star review (Calendly). Name blurred in CSS with `.nameBlur` overlay. Do not remove. |

### Unused / Fallback
| File | Notes |
|---|---|
| `headshot-placeholder.svg` | Unused — superseded by real headshots |
| `review.svg` | Unused — superseded by client-review.png |

---

## LARGE VIDEO FILES (in reuploaded_portfolio_videos/ — NOT in public/)
| File | Size | Status |
|---|---|---|
| `VitaplateAI.mp4` | 83MB | Deployed as `public/vitaplate_protocol_generation.mp4` |
| `ScreenRecording_04-20-202609-21-24_1.mov` | 41MB | Deployed as `public/vitaplate_recipe_builder.mov` |
| `ScreenRecording_04-27-202612-56-57_1.MP4` | 154MB | Same file as `ROOTLABEL.MP4` — deployed as `public/vitaplate_studio_dashboard.mp4` but needs compression for Vercel |
| `glproot_reel_39s_v3.mp4` | 3.6MB | Same size as current `public/glproot_reel.mp4` — likely identical |

---

## PROJECTS IN THE WORK SECTION
| Project | Category | Media | Link | Badge |
|---|---|---|---|---|
| GLPRoot | Health Tech | `glproot_reel.mp4` (video autoplay) | https://glproot.com | Featured |
| ClinMotion | AI Medical Media | `clinmotion-screenshot.webp` | https://clinmotion.vercel.app/ | Featured |
| DeIDGuard | Privacy & Compliance | `deidguard_promo.mp4` (video autoplay) | https://deidguard.com | Featured |
| Shallanda's World | Personal Health OS | `roots-health-clinic.png` (`imgPosition: 'left top'`) | None — local-only | Personal |
| Malachi's Word Superpowers | Social-Pragmatic Learning App | `malachi-mobile.jpg` (left) + `malachi-2.png` (right) dual image | https://www.youtube.com/@MalachiWordSuperpowers | Personal |

**Personal project cards:** `isPersonal: true` → gold "Personal" badge, gold border, `privateTag` or YouTube link in footer.
**`imgPosition` field:** When set on a project image, overrides the default `object-position: top center` via inline style. Currently only used on Shallanda's World to show the sidebar navigation.
**`videoPosition` field:** When set on a project video, overrides `object-position` via inline style on the `<video>` element. Also triggers `.cardImageTall` class (`aspect-ratio: 4/3` instead of `8/5`) for more vertical room. Currently used on GLPRoot (`videoPosition: 'center'`) to frame the cruise footage correctly without cutting off heads.

---

## VITAPLATE AI SECTION — VIDEO SOURCES
| File name | Feature label | Status |
|---|---|---|
| `vitaplate_protocol_generation.mp4` | Protocol Generation | ✓ |
| `vitaplate_daily_plate_ai_coaching.mp4` | The GLP-1 Plate | ✓ |
| `vitaplate_recipe_builder.mov` | Recipe Builder | ✓ (MOV format) |
| `vitaplate_studio_dashboard.mp4` | RootLabel | ✓ locally — needs compression for Vercel deploy |

---

## ROOTS FRAMEWORK (current — broader than blood sugar only)
The ROOTS Framework applies to any health condition, not just metabolic. Do not narrow it.
- **R — Review:** The journey begins with a meticulous review of your unique biological and personal landscape — uncovering the underlying signals and imbalances contributing to your condition through comprehensive assessment and targeted testing.
- **O — Optimize Nutrition:** Nutrition is communication with the body's machinery. This pillar moves beyond "calories in, calories out" to how food influences your genes, hormones, and cellular processes — supporting balance and reducing inflammation.
- **O — Optimize Biochemical Balance:** Addressing the cellular ecosystem beneath visible symptoms — from gut microbiome support to targeted supplementation — restoring the microscopic factors that profoundly impact how you feel and function.
- **T — Transform Lifestyle:** True health cannot be achieved through diet alone. This pillar transforms how you sleep, manage stress, move, and navigate your environment — recognizing lifestyle as a powerful driver of your overall wellbeing.
- **S — Sustain & Adapt:** The goal is not rigid rules that break under pressure — it is flexible systems and habits that evolve with your life. This pillar makes health a sustainable, lifelong practice built around you.

---

## PROOF STACK SECTION — 6 CARDS
1. I Can Teach You AI (Sparkles icon)
2. VitaPlate AI (HeartPulse icon)
3. Malachi's Word Superpowers (BrainCircuit icon)
4. Agent and Workflow Builds (ShieldCheck icon)
5. Websites and Digital Platforms (BriefcaseBusiness icon)
6. Healthcare Brand Ecosystem (Microscope icon)

---

## ALSO BUILT — WEBSITES LIST (ClientTrust.js)
| Name | URL |
|---|---|
| Compounded Path | https://compoundedpath.com |
| Learn Bible Languages | https://learnbiblelanguages.org |
| The Pauline Higgins Foundation Inc | https://paulinehigginsfoundation.org |
| Hunter's Holistic Health | https://huntersholistichealth.com/ |
| GLPRoot | https://glproot.com |
| DeIDGuard | https://deidguard.com |

---

## SOCIAL LINKS
| Platform | URL | Icon Component |
|---|---|---|
| LinkedIn | linkedin.com/in/dr-shallanda-hunter | `LinkedInIcon` |
| Instagram | @sugarfunctionalpharmd | `InstagramIcon` |
| YouTube | @sugarfunctionalpharmd | `YoutubeIcon` |
| TikTok | @sugarfunctionalph0 | `TikTokIcon` |
| Facebook | profile.php?id=61559864680044 | `FacebookIcon` |
| X | @sugarfuncpharmD | `XIcon` |

---

## KNOWN BUG RULES (must not resurface)
1. **Port is 4000** — not 3000. Port 3000 belongs to another project on this machine.
2. **Stale cache 404s** — If CSS/JS return 404: `kill $(lsof -ti :4000) && rm -rf .next && npm run dev`
3. **No `useNativeDriver: true`** — Web-only project.
4. **GSAP must be registered in `useEffect`** — Never at module scope in SSR pages.
5. **All GSAP contexts must `ctx.revert()` on cleanup** — prevents hot-reload leaks.
6. **CSS Modules only for layout/spacing** — Inline `style={{}}` only for dynamic JS values (e.g. `imgPosition`).
7. **`'use client'` required** on any component using hooks, GSAP, or browser APIs.
8. **No new animation libraries** — GSAP only.
9. **Social icons** — Use `SocialIcons.js` inline SVGs, NOT lucide-react brand icons.
10. **Ticker uses pure CSS `@keyframes ticker`** — do not convert to JS. Speed: **60s**. The `@media (prefers-reduced-motion: reduce)` block in globals.css has a `.ticker-track` override that restores this speed — if reduce-motion is removed or the ticker overrides are removed, the ticker will appear to run instantly on Macs with Reduce Motion enabled. Do not remove that override.
11. **Gold accent** — `#c8a74b`. Do not reintroduce lime green.
12. **Teal accent** — `#0B9E8E` for labels/kickers; `#144445` for dark mission card elements.
13. **Client review name** — Blurred with `.nameBlur` CSS overlay in ClientTrust.module.css. Do not remove.
14. **Gold neon glow** — CSS variables `--gold-glow`, `--gold-glow-strong`, `--gold-text-glow`, `--gold-dot-glow` defined in `:root` of globals.css. Applied to: `.btn-primary`, `.accent-text`, `.label-gold`, `.ticker-dot` (globals.css); `.logoDot` (Navbar + Footer); `.rootsLetter`, `.pipActive` (Testimonials). Do not remove — this is an intentional design decision.
15. **Footer P.S. line** — "P.S. — I vibe coded this entire website. A pharmacist, a clear vision, and the right AI tools — that is exactly what I teach." Styled as `.ps` in Footer.module.css. Copy is voice-matched — do not revert to "zero apologies" phrasing.

---

## PENDING — BEFORE DEPLOY
- [ ] **Compress `vitaplate_studio_dashboard.mp4`** — Currently 154MB, exceeds Vercel's 100MB static file limit. Install ffmpeg and run:
  ```bash
  brew install ffmpeg
  ffmpeg -i public/vitaplate_studio_dashboard.mp4 -vcodec libx264 -crf 28 public/vitaplate_studio_dashboard_web.mp4
  ```
  Then rename and swap the file reference.
- [ ] **Trim GLPRoot video** — `glproot_reel.mp4` contains cruise/personal photos between the app demo sections. Trim to app-only footage using QuickTime Player (Cmd+T) or ffmpeg once installed.

---

## DEPLOY WHEN READY
```bash
cd /Users/higgi/drshallandahunter/claude-design
git init && git add . && git commit -m "initial: Dr. Shallanda Hunter portfolio v4"
# Push to GitHub → import in Vercel → connect drshallandahunter.com DNS
```
**Before deploying:** Compress `vitaplate_studio_dashboard.mp4` (154MB → under 100MB). All other video files are within Vercel limits.

---

*This file is the single source of truth for project state. Update after every significant session.*
