# CLAUDE.md — Dr. Shallanda Hunter Portfolio

Read this file before doing anything. No exceptions.

---

## Project Overview

Personal portfolio for Dr. Shallanda Hunter, PharmD, MBA, CFNMP.
URL: drshallandahunter.com
Stack: Next.js 15 (App Router), GSAP animations, CSS Modules
No database. No auth. No backend. Static portfolio only.

---

## Development Rules

**Rule 1: Always read first**
Before any action, read this file. Then read the component or file being changed.
Never assume what a file contains.

**Rule 2: Ask before changing copy**
Do not rewrite, replace, or delete any text content without showing the proposed change and getting explicit approval first. Copy changes are not cosmetic — they are the brand.

**Rule 3: One change at a time**
Never bundle multiple unrelated changes into one response. If the user asks for three things, confirm each one before moving to the next, unless they explicitly say "do all of these."

**Rule 4: Look before you create**
Check if a file already exists before creating a new one. Check if an image or asset already exists in `/public` before copying anything there.

**Rule 5: Ask before copying files**
Never copy files from the user's computer into `/public` without confirming:
- Which exact file to use
- Where it should go
- What it will replace

**Rule 6: Test before responding**
After any change, verify the dev server at http://localhost:4000 shows no errors before saying "done."

**Rule 7: Do exactly what is asked — nothing more**
If the user says "fix the foundation name," fix only the foundation name. Do not also change copy, add features, or update unrelated files.

---

## How to Respond

Explain everything like talking to someone who is not a developer.

Every response must include:
- **What I just did** — plain English, one or two sentences
- **What you need to do** — step by step if anything is required from the user
- **Why** — one sentence
- **Next step** — one clear action or question

If something is unclear, ask before starting. Never guess.

---

## Tech Stack

- Framework: Next.js 15 (App Router)
- Animations: GSAP + ScrollTrigger
- Styling: CSS Modules (`Component.module.css` next to each component)
- No TypeScript — plain JavaScript (.js files)
- No database, no auth, no Supabase, no Stripe

---

## Running the Project

```
cd /Users/higgi/drshallandahunter/claude-design
npm run dev
```

Opens at: http://localhost:4000
Port 3000 is taken by another site on this machine.

---

## File Structure

```
claude-design/
├── app/
│   ├── layout.js       — fonts, global CSS, metadata
│   ├── page.js         — renders all sections in order
│   └── globals.css     — design tokens (colors, fonts, spacing)
├── components/
│   ├── Navbar.js / .module.css
│   ├── Hero.js / .module.css
│   ├── Ticker.js
│   ├── Testimonials.js / .module.css   — About, ROOTS, testimonials
│   ├── Services.js / .module.css
│   ├── VitaPlate.js / .module.css
│   ├── Work.js / .module.css
│   ├── ProofStack.js / .module.css
│   ├── ClientTrust.js / .module.css
│   ├── Contact.js / .module.css
│   ├── Footer.js / .module.css
│   ├── SocialIcons.js
│   └── Cursor.js
└── public/
    ├── headshot.jpg                    — real headshot (white coat photo)
    ├── vitaplate-logo.png              — VitaPlate AI dark horizontal logo
    ├── vitaplate-icon.png              — VitaPlate AI circular icon
    ├── vitaplate_protocol_generation.mp4
    ├── vitaplate_daily_plate_ai_coaching.mp4
    ├── glproot.svg
    ├── clinmotion.svg
    ├── deidguard.svg
    └── review.svg
```

---

## Brand

**Dr. Shallanda Hunter, PharmD, MBA, CFNMP**
Also certified in Google AI and Claude AI.

**Colors:**
- Gold accent: `#c8a74b`
- Teal secondary: `#0B9E8E`
- Teal dark: `#144445`

**CDN backdrop images (never change these URLs):**
- Hero: `https://d2xsxph8kpxj0f.cloudfront.net/310519663094779485/mne9ZDoMYpFEH7LXCxpfnb/shallanda-hero-editorial-clinical-luxury-hwHFBGXoRVdh6DTWFQnRYa.webp`
- Mission: `...shallanda-mission-story-panel-VSHpzfFdRwRm64sShrprhp.webp`
- Projects: `...shallanda-projects-gallery-backdrop-ZcEthAwXSUXQFjwMUBobAc.webp`
- Contact: `...shallanda-contact-cta-glow-LSaztLHxHUCGUcL43R3tt7.webp`

**Foundation:** The Pauline Higgins Foundation Inc → https://paulinehigginsfoundation.org

**ROOTS Framework (exact, do not paraphrase):**
- R — Review: Review your unique health landscape through comprehensive assessment and targeted testing.
- O — Optimize Nutrition: Optimize Nutrition with nutrient-dense foods and meal timing to balance blood sugar.
- O — Optimize Biochemical Balance: Optimize Biochemical Balance through targeted supplementation and gut health support.
- T — Transform Lifestyle: Transform Lifestyle by integrating stress management, sleep optimization, and sustainable movement.
- S — Sustain & Adapt: Sustain & Adapt with strategies for long-term success and health advocacy.

---

## Secrets & Safety

- No `.env` files needed — this is a static portfolio
- Never delete files in `/public` without asking first
- Never copy files from elsewhere on the computer without explicit permission
- Ask before deleting or renaming any component

---

## Scope

Only change what the user explicitly asks to change.
If anything is unclear, ask one specific question before starting.
