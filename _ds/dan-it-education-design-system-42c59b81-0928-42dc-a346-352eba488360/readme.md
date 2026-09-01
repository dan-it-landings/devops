# DAN.IT Education — Design System

DAN.IT (dan-it.com.ua) is a Ukrainian **IT & AI education hub** — an ed-tech company that sells
cohort-based and self-paced online courses (Front End, Java, Python, UI/UX design, Digital
Marketing, Product Owner, IT Recruiting, Graphic Design, etc.), positioning itself as a career
switch/upskilling platform ("освітній хаб IT та AI професій" — an educational hub for IT & AI
professions). The homepage is a single long-scroll marketing/landing page whose job is to funnel
visitors into a free career-consultation booking or a course enrollment form.

Founded proposition on the homepage: 7+ years on the Ukrainian market, 9,700+ graduates, 120+
partner companies that have hired graduates, 20+ course programs. The brand leans heavily on
**social proof** (graduate portfolios, employer logos, video testimonials, "featured in the press"
strip) and a **low-friction, always-visible lead form** (phone number + "Записатись/Залишити
заявку" — a career consultant callback), repeated 3-4 times down the page.

## Sources

This design system was built **from screenshots only** — no Figma file or codebase was attached.
If either becomes available, re-derive the component internals and exact numeric values from it
directly (per this system's authoring rules, source code/Figma always wins over screenshot
estimation). Everything here should be treated as a faithful *approximation*, not pixel-exact
truth, until corroborated.

Source screenshots (in `assets/reference/`, originals in `uploads/`):
- `Desktop - 1920.png` / `Desktop - 1400.png` / `Desktop - 1024.png` — full homepage, three desktop breakpoints
- `Tablet - 768 - 1024.png` — full homepage, tablet breakpoint
- `Mobile - 390 - 768.png` — full homepage, mobile breakpoint
- `Logo Black 2.jpg` — wordmark lockup ("DAN IT education")
- `dec-patern.svg` — recurring lavender confetti/pattern shapes (used on purple bands)
- `play.svg` / `play-1.svg` — circular outlined play-button icon (video testimonial triggers)

No live URL, GitHub repo, or Figma link was provided by the user for this pass.

## Typography — important substitution flag

⚠️ **No font files were provided.** The homepage's headline/body face is a geometric-leaning
neo-grotesque with a tall x-height, simple single-storey glyphs, and rounded dot tittles —
closely matching **Golos Text** (Paratype, free/open, excellent Cyrillic support, weights
Regular→Black), which is what this system loads from Google Fonts. It is a *substitution*, not
a confirmed brand font. **Please attach the real webfont files (or confirm Golos Text is in fact
correct) so this can be corrected.**

## Content Fundamentals

**Voice: informal "ти" (you-singular/familiar), never "ви" (formal you).** Ukrainian marketing
copy consistently uses the familiar second person, addressing the reader as a peer making a
personal decision, e.g. *"Обирай свою програму навчання, здобувай актуальну професію та отримуй
максимум від життя і від кар'єри разом із DAN. IT"*, *"Поки ти сумніваєшся в своїх здібностях,
інші наважуються та досягають успіху!"*, *"Залиш свої контакти і наш кар'єрний консультант
допоможе визначитись з напрямком."* This is deliberate — the brand is talking a 20s-30s career
switcher out of hesitation, one-to-one.

**Tone: encouraging, urgency-light, low-pressure.** Copy reassures more than it hard-sells:
*"Це абсолютно безкоштовно і ні до чого тебе не забов'язує"* ("this is completely free and
doesn't obligate you to anything"), *"Реєструючись, я погоджуюсь з політикою приватності"*. CTAs
read as small, doable next steps ("Записатись", "Залишити заявку", "Дивитись більше") rather than
"Buy now" urgency.

**Headline pattern: short, bold, benefit/identity-first.** Section headers are terse noun-phrase
questions or imperatives, always sentence case, no trailing punctuation except the occasional "!"
or "?": *"Вибери затребувану професію"*, *"Оберай власний формат навчання"*, *"Що ти зможеш
створювати"*, *"Твій шлях у нову кар'єру"*, *"Питання що часто виникають"*.

**Numbers do the trust-building.** Stat callouts are always "N+" (120+, 20+, 7+, 9 700+) paired
with a one/two-word label underneath, never a full sentence — the number is the headline, not the
noun.

**Micro-copy is plain, no emoji, no exclamation-heavy hype.** FAQ questions are asked in first
person ("Якщо я не маю знань з програмування, чи підійдуть мені курси?"). Course card badges are
short 1-2 word chips ("Популярно", "Топ вибір", "Новинка", "Хіт сезону") — playful but not
gimmicky, no emoji used anywhere observed on the page.

**Latin brand/tech terms stay in Latin inside Cyrillic sentences.** "+AI Tools", "Front End",
"Product Owner", "UI/UX", "SMM + Content Marketing" all appear un-transliterated mid-sentence —
signals a tech-fluent audience that already codeswitches this way.

## Visual Foundations

**Color.** One confident brand purple (`--purple-600 #8D59FF`) carries every accent: primary
button-on-color fills, icon strokes, links, the two full-bleed "career path" / "leave your
contact" bands, and the recurring confetti pattern (lighter tint `#E2C6FF`). Everything else is
neutral: near-black ink (`#212121`, never pure `#000`) for all headings, body copy, and the
default (dark) button fill, on a mostly-white canvas with soft lavender-tinted section wells
(`#F8F8FB`) used to separate page zones without hard borders. A rotating set of four pastel chips
(lavender, buttery yellow, mint, sky blue) fills small stat/badge surfaces — always as a flat
background behind dark text/icons, never as a text color, never as a gradient. Footer breaks the
palette with a single dark slate-navy (`#40404C`) full-bleed band.

**Type.** One family, weight does all the work: ExtraBold/Bold for every headline (H1 ~56px, H2
~36px), Regular/Medium for body and UI copy. No serif, no script, no italics observed anywhere.
Headlines run tight leading (~1.1–1.2); body text is roomier (~1.5) for the long-form course/FAQ
copy.

**Spacing & rhythm.** Airy and generous — section-to-section gaps read like 80–120px, card
padding ~24–32px. Sections alternate between edge-to-edge white and big rounded "well" panels
(`#F8F8FB`, ~24px radius, ~48px internal padding) that group a heading + a grid/carousel of cards.
This well-panel is the single most repeated structural motif on the page.

**Backgrounds.** Mostly flat, no full-bleed photography as page background. Photography appears
inside rounded frames (portrait cards, format-picker photo, testimonial photos) with a warm,
natural, un-filtered color grade — real people, real offices, soft window light, not stock-cold.
The two purple CTA bands use a flat purple fill overlaid with the scattered lavender confetti
pattern (`dec-patern.svg`) bleeding off the right/bottom edge — the only "decoration" on the whole
page; no gradients, no textures/grain, no illustration full-bleeds.

**Illustration usage is narrow and specific:** small 2-color icon illustrations mark the "format
of study" cards (pastel rounded-square tile behind a simple line icon) and the blog/article
thumbnails use flat vector illustration (recruiter/HR/AI themes) — reserved for supporting
/secondary content, never for hero or trust-building sections (those are always real photography).

**Cards.** Two card idioms recur: (1) plain white card, ~20-24px radius, subtle cool-toned shadow,
no visible border, generous internal padding — course cards, event/article cards; (2) split
two-tone card (photo left/top, flat pastel-color panel right/bottom holding a quote + name) for
testimonials — no shadow needed there since the color block itself creates separation.

**Buttons.** Two states only, both pill-shaped (fully rounded): solid near-black fill with white
text (primary — "Програми навчання", "Записатись", "Залишити заявку") and white-fill/dark-1px-
outline (secondary — "Про курс"). No ghost/tertiary button beyond the plain purple text link
("Всі програми →", "Читати історію →") which always carries a small arrow glyph.

**Hover / press states** were not capturable from static screenshots — treat the documented values
(slight darken to `--color-btn-primary-bg-hover`, opacity-based hover on pastel chips) as
reasonable inferred defaults, not confirmed brand states. Flag for confirmation once interactive
files/specs are available.

**Borders.** Near absent. The only hairline borders in the source are the 1–1.5px dark outline on
secondary buttons and FAQ accordion rows sitting inside their well panel. Cards separate via
shadow + whitespace, not strokes.

**Radii.** Generously rounded throughout — pills are fully round (badges, buttons, tab chips);
cards/photos/icon tiles sit around 20–24px; small icon chips ~12–16px. No sharp (0px) corners
appear anywhere in the source.

**Shadows.** Soft, cool-tinted (purple-navy undertone, not pure black), low-opacity, used sparingly
— under floating white cards inside well panels, and under the sticky nav bar. No hard drop
shadows or neumorphic inner shadows.

**Transparency / blur.** Not used as a visual device anywhere observed (no glassmorphism, no
backdrop-filter panels).

**Imagery color vibe.** Warm, natural skin tones, shallow depth of field, a few images lit with
cool purple/violet ambient light (the "format of study" hero photo) that rhymes with the brand
purple — no black-and-white treatment, no heavy grain/film effect, no duotone.

**Layout rules.** Single-column long-scroll marketing page, content capped around ~1360px inside
a wider canvas, consistently centered. Course/format/testimonial/article rows are horizontally
scrollable carousels on constrained width (dot + arrow controls), not infinite grids. Sticky
top nav bar appears to float with its own shadow/pill treatment slightly inset from the page edge.

**Animation.** Not observable from static screenshots — no evidence of the site's actual motion
language. Assume understated, fast, ease-out fades/slides by default (per `--duration-*` /
`--ease-standard` tokens) until real interaction specs are available; do not invent bounce/spring
motion, which would contradict the calm, trustworthy tone of the rest of the brand.

## Iconography

No icon font, SVG icon sprite, or icon library could be recovered from the attachments — only two
loose SVGs were provided (`play.svg`, `play-1.svg`, an identical outlined circular play glyph used
twice, likely for two different video-testimonial embeds) plus one decorative shape sprite
(`dec-patern.svg`). Everything else visible on the page (chevrons, arrow-up-right on cards, FAQ
chevrons, form icons, footer social glyphs, the little chat-bubble FAQ icon, LinkedIn badge on
testimonial photos) is a **substitution using Lucide icons via CDN** (`unpkg.com/lucide-static` or
the `lucide` web font-free SVG set) chosen for its similar even-stroke-weight, minimal, rounded-cap
style — matching what's visible in the screenshots at low fidelity. **This is a flagged
substitution** — replace with the real icon set as soon as source files/specs are available.
Emoji are not used anywhere on the page. The two "format of study" pastel icon tiles and the
article thumbnails are small **flat 2-color illustrations**, not icon-font glyphs — no source files
for these were provided, so UI kit screens using them fall back to Lucide icons + a labeled
placeholder rather than inventing new illustration art.

## Index

- `styles.css` — global stylesheet entry point (imports everything under `tokens/`)
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `radii.css`, `fonts.css`
- `assets/` — `logos/` (wordmark), `patterns/` (confetti SVG), `icons/` (play buttons),
  `reference/` (source screenshots + `extracted/` real photo crops used by the UI kit)
- `guidelines/` — foundation specimen cards (see Design System tab: Colors, Type, Spacing, Brand groups)
- `components/` — reusable primitives, see below
- `ui_kits/marketing-website/` — full click-through homepage recreation (`index.html` + `sections/`)
- `SKILL.md` — portable skill wrapper for Claude Code

### Components (namespace: see `check_design_system`)
- `components/core/` — Button, Badge, IconCircle, AvatarGroup, LogoStrip
- `components/forms/` — Tabs, Input, PhoneInput, Accordion (+ AccordionItem)
- `components/cards/` — CourseCard, FormatCard, TestimonialCard, EventCard, ArticleCard, StepCard
- `components/navigation/` — Navbar, Footer
- `components/feedback/` — CarouselControls (arrow + dot controls)
