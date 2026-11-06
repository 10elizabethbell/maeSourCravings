---
name: Mae's Sour Cravings
description: Olives preparados from Aleda, delivered around San Antonio, ordered through a one-page order builder and Messenger.
colors:
  lime: "#b9e32e"
  lime-2: "#cdf04f"
  green: "#0f4a28"
  deep: "#0a3019"
  sauce-top: "#b3271a"
  sauce-low: "#5f0e0a"
  paper: "#f5f7ee"
  card: "#ffffff"
  field: "#e7edd6"
  ink: "#10341f"
  body: "#2b4032"
  soft: "#4c6152"
  on-dark: "#f5f8ee"
  on-dark-soft: "#cfdcc9"
  line: "rgba(16,52,31,.13)"
  focus: "#0f4a28"
  error: "#b3261e"
typography:
  display:
    fontFamily: "Cal Sans, Avenir Next, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(40px, 11.4vw, 76px)"
    fontWeight: 400
    lineHeight: 1.03
    letterSpacing: "-.005em"
  headline:
    fontFamily: "Cal Sans, Avenir Next, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(30px, 7.6vw, 48px)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-.005em"
  price:
    fontFamily: "Cal Sans, Avenir Next, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(28px, 8vw, 34px)"
    fontWeight: 400
    lineHeight: 1
  title:
    fontFamily: "Cal Sans, Avenir Next, Segoe UI, system-ui, sans-serif"
    fontSize: "21px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: ".01em"
  label:
    fontFamily: "Cal Sans, Avenir Next, Segoe UI, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: ".01em"
  button:
    fontFamily: "Cal Sans, Avenir Next, Segoe UI, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: ".01em"
  lede:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(17px, 4.6vw, 19px)"
    fontWeight: 400
    lineHeight: 1.7
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
  small:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.3
rounded:
  focus: "6px"
  field: "10px"
  link-card: "20px"
  card: "24px"
  pill: "999px"
  circle: "50%"
spacing:
  gap-12: "12px"
  gap-16: "16px"
  gap-20: "20px"
  gap-24: "24px"
  gap-32: "32px"
  gap-40: "40px"
  gutter: "20px"
  gutter-wide: "40px"
  section: "64px"
  section-wide: "96px"
components:
  button-primary:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "56px"
  button-primary-hover:
    backgroundColor: "{colors.lime-2}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "56px"
  button-ghost-hover:
    backgroundColor: "rgba(255,255,255,.1)"
  cup-card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "14px"
  link-card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.link-card}"
    padding: "14px 16px 14px 22px"
    height: "76px"
  arrow-disc:
    backgroundColor: "rgba(16,52,31,.08)"
    textColor: "{colors.ink}"
    rounded: "{rounded.circle}"
    size: "44px"
  arrow-disc-hover:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.ink}"
  form-card:
    backgroundColor: "{colors.card}"
    rounded: "{rounded.card}"
    padding: "clamp(20px, 5vw, 32px)"
  input:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "13px 14px"
    height: "52px"
  stepper-button:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    rounded: "{rounded.circle}"
    size: "46px"
  step-number:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.ink}"
    rounded: "{rounded.circle}"
    size: "48px"
  message-circle:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.ink}"
    rounded: "{rounded.circle}"
    size: "60px"
  round-cup-frame:
    rounded: "{rounded.circle}"
    width: "100%"
---

# Design System: Mae's Sour Cravings

Two shipped pages share this system. `calm/index.html` is the calm band version; every section below describes it unless it says otherwise. `index.html` is the interactive version, which the owner chose on 2026-11-05 and which is the live default. It keeps the same palette, images, copy structure and order builder, and differs as listed in **Interactive Version** at the end. The frontmatter tokens hold for the calm version, and the interactive version uses the color, spacing and radius values that the differences section does not change.

## Overview

**Creative North Star: "The Flyer That Takes Orders"**

The system is her Facebook flyer's colors and images turned into a phone-first page that ends in a written order. Off-white paper alternates with two deep flyer greens in full-width bands. The logo's lime is the only accent, and it marks what to tap. Six images in `img/`, all crops of that flyer, supply all of the food color: the logo, a hero shot, and four cup images.

Density is low and the page is linear: header, hero, four cups, how it works, order builder, close, footer. Surfaces are flat, corners are generous, and actions are pills or circles. From 760px the layout widens in two steps without changing that sequence.

The calm version moves little. The hero heading animates in once, content below the first screen fades up 12px once, and the message circle slides in after the hero.

**Key Characteristics:**
- Full-width paper and green bands, with white cards only on paper.
- One accent, lime, as a fill carrying deep ink, or as text on dark bands.
- Cal Sans at a single weight for every named thing, and a system stack for running text.
- Pills for actions, circles for small controls, 24px corners for containers.
- Flat at rest, with one shadow on the page.

## Colors

The palette is two flyer greens and a paper ground, with one saturated lime accent and green-tinted neutrals.

### Primary
- **Logo Lime** (#b9e32e): Primary buttons, numbered step discs, the message circle, active arrow discs, text selection, accent phrases in headings on dark bands, and the focus ring on dark bands.
- **Bright Lime** (#cdf04f): Hover state of the primary button, nothing else.

### Secondary
- **Flyer Green** (#0f4a28): Hero and close bands. Also the input caret and the Facebook icon on its white card.
- **Deep Flyer Green** (#0a3019): How-it-works band and footer. Sits under the faint line texture in the calm version.

### Tertiary
- **Sauce Top** (#b3271a) and **Sauce Low** (#5f0e0a): Interactive version only. See Interactive Version.

### Neutral
- **Paper** (#f5f7ee): Page ground, header, menu and order bands, and the theme color of the calm version.
- **Card White** (#ffffff): Cup cards, the Facebook card, and the order form. Also the hero heading color in both versions.
- **Pale Field** (#e7edd6): Inputs, stepper buttons, and the written-order block, all on white.
- **Ink** (#10341f): Headings on light, all text on lime, card text, and the 2px rule above the total.
- **Body Green** (#2b4032): Running text on light.
- **Soft Green** (#4c6152): Ledes, sublabels, placeholders, and the place name in the header.
- **On Dark** (#f5f8ee): Headings, step titles, ghost button text and links on green bands.
- **On Dark Soft** (#cfdcc9): Running text on green bands.
- **Hairline** (rgba(16,52,31,.13)): 1px dividers between order lines.
- **Focus Green** (#0f4a28): Input hover and focus border, and the focus ring on light grounds. Same value as Flyer Green, held as its own token.
- **Error Red** (#b3261e): Validation text and the invalid input border. Used only for those.

The calm stylesheet also declares a darker lime (#4d6a00) as the accent-phrase color on light grounds. No shipped heading uses an accent phrase on a light ground, so it is not a token.

### Named Rules
**The One Accent Rule.** Lime is the only accent in the interface. Greens and paper are grounds, and red in the interface is reserved for errors. The interactive version's sauce is scene, not interface.

**The Lime Carries Ink Rule.** Every lime fill has Ink (#10341f) on it, in buttons, discs, the message circle and text selection.

**The Lime On Dark Rule.** Lime appears as text only on green bands: the accent phrase in a heading, and the footer link on hover. The calm page's direction note says lime is always a fill. The build also sets it as text on dark, and the build is what this records.

## Typography

**Display Font:** Cal Sans (with Avenir Next, Segoe UI, system-ui, sans-serif), loaded from Google Fonts.
**Body Font:** System stack (-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, sans-serif).

**Character:** Cal Sans gives every name, price and action a rounded, friendly geometric voice. The platform sans stays out of its way for sentences and form entry.

### Hierarchy
- **Display** (400, clamp(40px, 11.4vw, 76px), 1.03, max 11ch): The hero heading only, in white. Its accent phrase is lime.
- **Headline** (400, clamp(30px, 7.6vw, 48px), 1.08): Section headings.
- **Price** (400, clamp(28px, 8vw, 34px), 1): Cup prices. The order total is the same voice at a fixed 34px.
- **Title** (400, 21px, 1.2, rising to 22px at 1024px): Step titles. Related sizes on the same voice: Facebook card clamp(18px, 5vw, 21px); cup name clamp(17px, 4.6vw, 20px) at 1.15; order line name 18px; total label 22px; stepper count 20px; brand name 19px at 1.05, rising to 22px at 760px.
- **Label** (400, 17px, 1.2): Form field labels.
- **Button** (400, 18px, 1): All buttons.
- **Lede** (400, clamp(17px, 4.6vw, 19px), 1.7, max 38ch): The line under a section heading, in Soft Green. The hero promise is clamp(17px, 4.7vw, 20px) at 1.5, max 32ch. The close line is clamp(18px, 5vw, 20px), max 36ch.
- **Body** (400, 16px, 1.7): Running text. Inputs are also 16px, at 1.4. Bold runs are 600.
- **Small** (400, 15px, 1.3): Sublabels under order line names and the total. The same 15px size sets the header place name at 1.2, the written-order block at 1.5, and error text and the note under the form at the body line height.

### Named Rules
**The One Weight Display Rule.** Cal Sans is always set at 400. Hierarchy comes from size and ground, never from a heavier cut.

**The Name Or Sentence Rule.** Headings, names, prices, counts, labels and buttons are Cal Sans. Sentences, sublabels and typed input are the system stack.

**The Open Word Rule.** Cal Sans at small sizes carries .01em letter spacing and .06em word spacing, on buttons, cup names, order line names, field labels, step titles and the Facebook card. Headings use -.005em and no word spacing.

## Layout

Phone first, with min-width breakpoints at 760px and 1024px. Content sits in a centered column up to 1160px wide, with a 20px gutter that becomes 40px at 760px. Bands are full-bleed. Section padding is 64px top and bottom, 96px from 760px.

- **Section heads:** Stacked with a 16px gap, max 640px wide.
- **Cups:** Two columns with a 12px gap on phones, four columns with a 16px gap from 760px, starting 32px under the head. The Facebook card follows 20px below, capped at 520px from 760px.
- **Hero:** On phones the copy stacks with an 18px gap above the hero image, at 7:4, which fades in from the top over 26% of its height. Buttons stack with a 12px gap, and sit side by side from 760px with a 210px minimum width, where the image is capped at 440px tall. From 1024px the hero is at least 600px tall, the copy holds the left 46%, and the image fills the right 50% at full height, fading in from its left edge over 12% of its width.
- **Steps:** One column with a 24px gap, starting 36px under the heading. Three columns with a 40px gap from 1024px.
- **Order:** One column with a 28px gap. From 1024px, two columns at 1fr and 1.2fr with a 64px gap, and the 16oz pickle image appears under the head at 24px corners. The form is capped at 600px wide, with a 20px internal gap.
- **Close:** Logo (150px) above the text. From 1024px, logo (180px) beside the text with a 40px gap.
- **Footer:** 40px top padding. Bottom padding is 96px plus the safe area, which keeps the message circle clear of the footer content.

Safe-area insets are respected at the top of the header, around the message circle, and at the bottom of the footer.

**The 44 Floor Rule.** Nothing tappable is under 44px: brand link and footer link 44px, arrow disc 44px, stepper 46px, input 52px, button 56px, message circle 60px.

## Elevation & Depth

The calm version is flat. Depth comes from the change of ground between bands and from white cards on paper. Green bands other than the close carry a faint diagonal line texture (`repeating-linear-gradient(135deg, transparent 0 22px, rgba(255,255,255,.035) 22px 23px)`) on the hero, the how-it-works band and the footer.

### Shadow Vocabulary
- **Float** (`box-shadow: 0 10px 28px rgba(5,28,14,.32)`): The message circle, the only element that floats above the page.

### Named Rules
**The One Shadow Rule.** In the calm version, cards, the form and buttons carry no shadow. The single shadow belongs to the one fixed element.

## Shapes

The form language is soft and round, and the corner radius follows the job. Containers (the form, cup cards, the order image) use generously rounded 24px corners, and the Facebook card uses 20px. Fields and the written-order block use gently curved 10px corners. Actions are full pills (999px), and small controls are true circles: arrow discs, stepper buttons, step numbers, the message circle. Images in cup cards are clipped by the card at 3:2. The logo is a circular cutout in its own artwork.

Borders are rare. Primary buttons, inputs and stepper buttons carry a 2px border that is transparent or matches the fill at rest and changes color on interaction. The ghost button's 2px border is the only visible outline at rest. The only drawn rules are the 1px hairline between order lines and the 2px Ink rule above the total.

## Components

### Buttons
Large, round and unmistakable.
- **Shape:** Full pill (999px), 56px minimum height, 26px side padding, 10px gap to a 22px icon.
- **Primary:** Logo Lime fill and border with Ink text. Full width inside the form.
- **Ghost:** Transparent with On Dark text and a 2px border of On Dark at 70%. Used only on the hero.
- **Hover / Focus:** Primary brightens to Bright Lime. Ghost's border turns white over a 10% white fill. Inside the form, primary also gains a 2px Focus Green outline at 2px offset on hover and focus. Press scales to .98. Color transitions take .2s, the press .12s.

### Cards / Containers
- **Cup card:** A whole-card link in white with 24px corners and no border or shadow. A 3:2 image on top, the size name across the top of a 14px text area, the price and arrow disc on the row beneath.
- **Facebook card:** White, 20px corners, 76px minimum height, with a 30px Flyer Green Facebook mark, a label, and an arrow disc.
- **Arrow disc:** 44px circle in 8% Ink holding an 18px drawn arrow. It turns Logo Lime when its card is hovered or focused, and takes the focus ring itself on keyboard focus, so the card shows no ring of its own.

### Inputs / Fields
- **Style:** Pale Field fill, 2px transparent border, 10px corners, 52px minimum height, 13px by 14px padding, 16px text, Flyer Green caret, Soft Green placeholder.
- **Focus:** Border turns Focus Green, with no outer ring. Hover does the same.
- **Error:** Border and message turn Error Red. The message appears under the field and clears once the field has content.

### Order Builder
The page's working component, in a white form card.
- **Lines:** One row per cup, split by hairlines with 12px vertical padding. Name in Cal Sans, price below in Small, stepper on the right.
- **Stepper:** Two 46px Pale Field circles holding 16px drawn plus and minus icons, either side of a 30px count. Border turns Focus Green on hover. Minus at zero is disabled at 45% opacity.
- **Total:** Label left, 34px amount right, under the 2px Ink rule, baseline aligned.
- **Written order:** After submit, a status block shows a lead line, instructions, the message in a Pale Field block, and an Open Messenger primary button. Any later edit hides it again.

### Navigation
There is no menu. The header is a brand link and a place name: a 52px logo beside the two-line brand name on the left, and "San Antonio, TX" on the right in Soft Green, on paper at 68px minimum height. Footer links are On Dark and turn lime on hover.

### Numbered Steps
A 48px Logo Lime disc with an Ink numeral at 20px, in a 48px column beside a Title and a line of body text. The numbers are generated from the list order.

### Hero
Green band with the line texture, with copy over the 16oz cup image, which fades out of the green through a mask rather than an overlay. No tint sits on the image.

The heading animates once on load: each letter slides in from 50px right over 1s on `cubic-bezier(.34,1.56,.64,1)`, staggered 20ms. Once the last letter lands, the plain heading is restored so kerning and selection return. With JavaScript off or reduced motion on, the heading is static.

### Message Circle
A fixed 60px Logo Lime circle with a 28px drawn message icon, 16px from the bottom right plus safe area, linking to Messenger. It slides up from 120px below over .35s on `cubic-bezier(.2,.8,.2,1)` once the hero leaves, and hides while the order form is on screen. It is removed if the page config turns it off or IntersectionObserver is missing.

### Fade-Up
Elements that start below the first screen fade in and rise 12px over .4s ease-out, once. Everything else is visible at rest.

## Do's and Don'ts

### Do:
- **Do** put Ink (#10341f) on every lime fill.
- **Do** switch the focus ring by ground: 3px at 3px offset, in Focus Green on light and Logo Lime on green bands.
- **Do** put hover styles inside a hover-capable media query, so taps don't leave them stuck on.
- **Do** give every motion a reduced-motion state: smooth scroll, transitions and fade-up off, the heading static.
- **Do** keep tap targets at 44px or larger, and form text at 16px.
- **Do** use drawn SVG icons from the shared set: arrow, message, plus, minus, each in currentColor.

### Don't:
- **Don't** add a second accent hue to the interface.
- **Don't** set lime as text on paper or white.
- **Don't** make the message action a bottom bar. It is one circle.
- **Don't** animate content that is already on the first screen with the fade-up. It applies only below the fold.
- **Don't** lay a tint or overlay over the hero image.
- **Don't** set Cal Sans heavier than 400.

## Interactive Version

`index.html` (the live page) shares the color values, the six images, the page sequence, the button geometry, the order builder and the icon set. Everything below replaces the matching description above for this page only. Its direction note: "You came for sour. The first thing you get to do is stir it."

### Removed
No Cal Sans or web font request, no line texture, no heading letter animation, no fade-up, no message circle, no white cup cards, and no darker-lime token.

### Colors
- **Grounds:** The page ground is Deep Flyer Green, and the menu and how-it-works bands sit directly on it. Only the order band is Paper. The close band is Flyer Green. Running text defaults to On Dark Soft, and Body Green and Soft Green apply only inside the order band. The theme color is Flyer Green.
- **Sauce Top and Sauce Low** are the no-JavaScript gradient for the stirring zone. Sauce Low also starts the first seam.
- **Scene colors** are drawn on canvas, and are not interface tokens. Sauce: back surface #7c1610, body from rgba(179,39,26,.72) through rgba(131,24,15,.78) to #5f0e0a, drops #a51f14, flecks rgba(235,120,40,.55). Olive: #dcd568, #b3ad3a, #7e8421, #4a5512, pimento #f0432b and #a81a10. Lime slice: #5f9a1c, #e6f3a8, #cfe86a, #a4d42e.
- **Focus:** The ring defaults to Logo Lime, and switches to Focus Green inside the order band.

### Typography
One family throughout: the system stack, with no separate display face. This records what the file ships. It is not a token, and new surfaces in this system take the display tokens above. Hierarchy comes from weight and case.
- **Headings:** Weight 900, uppercase, -.02em, 1.02. Hero heading clamp(36px, 10.2vw, 78px), max 12ch, in white. Section headings clamp(32px, 8.4vw, 54px).
- **Weight 900:** Brand name (15px uppercase, 17px from 760px), cup price (clamp(28px, 8vw, 36px)), step numeral (20px), stepper count (20px), order total (34px).
- **Weight 800:** Buttons (17px), cup name (clamp(15px, 4.2vw, 18px), uppercase), step title (19px at 1.25), Facebook card (clamp(17px, 4.8vw, 20px)), order line name (17px), field label (16px), total label (20px).
- **Body:** 16px at 1.65. The hero promise is 1.45. Bold in the written-order block is 700. The Cal Sans spacing rule does not apply.

### Layout
- **Header:** Inside the hero, on green, with On Dark brand text.
- **Hero:** A column at least 92svh tall (92vh as fallback): header, copy, and a stirring zone that takes the remaining height, at least clamp(190px, 30svh, 340px). The canvas covers the whole hero. Buttons sit side by side from 760px with a 230px minimum width.
- **Sections:** 56px top and 64px bottom, rising to 80px and 96px from 760px. These bands hold fixed, smaller top padding at every width, because a seam already sits above them or the bands run together: menu 40px, how-it-works 16px, order 32px, close 28px.
- **Cups:** Centered, with 28px by 14px gaps on phones, 28px gaps at four columns from 760px, and no card behind them.
- **Footer:** 36px top padding and 40px plus the safe area at the bottom.

### Elevation & Depth
The interactive version uses shadows on round frames, paired with a lime ring as a second shadow layer.
- **Cup frame** (`box-shadow: 0 18px 34px -14px rgba(0,0,0,.65), 0 0 0 5px rgba(185,227,46,.9)`): Each round cup in the menu.
- **Rider, phone** (`box-shadow: 0 14px 26px -10px rgba(0,0,0,.6), 0 0 0 4px rgba(185,227,46,.9)`): The hero cup under 1024px.
- **Rider, desktop** (`box-shadow: 0 26px 50px -18px rgba(0,0,0,.6), 0 0 0 6px rgba(185,227,46,.9)`): The hero cup from 1024px.

Canvas layering gives the hero its depth: back surface, far olives seen through the sauce, sauce body, flecks, near olives, lime slices, then anything in the air and drops.

### Shapes
Cups become circles. Each image is cropped to a 1:1 circle by its frame. The order band's form and image keep 24px corners, fields keep 10px, and the Facebook card keeps 20px.

### Components
- **Stirrable sauce hero:** A canvas pool of red sauce with 40 olives and 2 lime slices under 760px, 120 olives and 4 slices at 760px and up. Drag or mouse movement pushes olives within a 92px radius (85% of that on phones), ripples the surface, and a fast flick launches olives that fall back with a splash. Olives and drops stop at a ceiling just under the buttons, so they never cross the heading, promise or buttons. Until first touched, and again after 5s idle, the sauce stirs itself. Vertical drags still scroll the page. All physics values live in the page's config object.
- **Stir hint:** "Go ahead, stir the sauce." at 15px, weight 600, On Dark, under the buttons. It fades over .5s on first touch, and is hidden under reduced motion.
- **Rider:** The hero image in a round frame, 34vw under 1024px and min(30vw, 440px) from 1024px, sitting on the sauce's surface and rocking with it. It is decorative and hidden without JavaScript.
- **Wave seams:** Three animated SVG dividers, clamp(52px, 9vw, 96px) tall: sauce to deep green, deep green to paper, paper to green. Each has three lines: a 3px Logo Lime middle line and two 1.5px outer lines in #7fa821 at 60% opacity. The next band's color fills below the middle line, so no straight color edge shows.
- **Round cup:** A round frame with the image inside, with name and price centered below, and the arrow disc inline beside the price. Frames bob up to about 6.5px and rock about 1.2 degrees, each on its own phase. The arrow disc is 12% white with On Dark on the dark band, and turns Logo Lime with Ink on hover or focus.
- **Facebook card:** Flyer Green with On Dark text, on the deep band.

### Motion
Everything moving shares one animation loop. Each job pauses when its element is more than 80px off screen. Under reduced motion the sauce and seams draw one still frame, and the cups stay still. The canvas caps device pixel ratio at 1.5. Without JavaScript, the stirring zone shows a static sauce gradient.
