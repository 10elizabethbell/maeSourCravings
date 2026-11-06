# Mae's Sour Cravings — handoff at ~60%

**Live:** https://maesolivespreparados.com/ (interactive version, the owner's pick)
**Calm version (kept, not linked):** https://maesolivespreparados.com/calm/
**Repo:** https://github.com/10elizabethbell/maeSourCravings · **Built:** 2026-11-01 from Muse brief 2026-11-01

Ellie asked mid-build for two versions: the current calm style and the older interactive style. On 2026-11-05 the owner chose the interactive one, so it moved to the main URL (the one on the Call Sheet) and the calm one moved to `/calm/`. Delete `calm/` once she's sure. The old `/interactive/` link redirects to the main URL, so links already sent still work.
Domain `maesolivespreparados.com` bought 2026-11-05 at GoDaddy. DNS: `A @` records to GitHub Pages (185.199.108–111.153), `www` CNAME. The repo's `CNAME` file sets it; the old github.io links forward to it.

## What's built
- **Both:** header, hero ("Craving sour in San Antonio? I deliver."), four cups with published prices, Facebook link under them, how to get some, order builder, close, footer. Tapping a cup adds one to the order and jumps to the builder.
- **Order builder:** steppers, running total, name and part of town. "Send the message" copies the order and shows a pop-up ("Order copied! Paste it in Messenger"). It stays up until they tap "Go to messenger" or the X. Tapping the X leaves them on the page with the order and an Open Messenger button. If copying fails, the page stays put and shows the order to press and hold. Orders survive a reload.
- **Palette:** paper #f5f7ee, greens #0f4a28 and #0a3019 from the flyer's ground, lime #b9e32e from the logo. Lime is a fill with deep green text.
- **Calm (`calm/index.html`):** Cal Sans, eyebrow pills, H1 bounce-in, fade-up, floating Messenger circle. Hero is her 16oz cup from the flyer fading out of the green, with no navy overlay.
- **Interactive (`index.html`, live):** a pool of red sauce, olives and lime along the hero's bottom. It stirs itself until touched. A finger or mouse pushes olives, ripples the surface, and a flick launches olives that plop back with a splash. Her cup rides the surface in a round frame. Animated seams between sections, round cups that bob, system-stack uppercase headings. Tunables are in `CONFIG`.
- **Contact:** Messenger only (`m.me/elita.gonzalez.9`), because that's how she takes orders and no phone is known.

## Assumptions I made
- **"Aleda" as the voice:** the brief names Aleda Gonzalez as owner, but the brand says Mae. I don't know who Mae is.
- **Lime as the accent, greens as the bands:** taken from her logo and flyer, since the brief listed colours as unknown.
- **Logo:** the brief says none was found, but the flyer has one at the top. I cut it out as a circle for the header, close and icons.
- **"Surrounding areas":** taken from the Facebook group's name, not from her.
- **"Part of town" is required:** step 2 asks for it, and it saves a back-and-forth.
- **"Delivery included" on the total:** based on her "NO extra charge for delivery" comment. I don't know if a delivery radius or minimum applies.

## Placeholders and gaps
- **No phone or email,** so neither appears, and the header's top-right holds "San Antonio, TX" instead of a number. **This is the biggest gap:** with a number, the whole order flow could become a pre-filled text.
- **Only one image exists:** the flyer. All cups, the logo and the hero are crops of it (1080x1262). They look slightly soft at large desktop sizes, and I painted the logo's edge out of the area above the 16oz cup.
- **The flyer's cups look AI-rendered or heavily retouched.** It came from her own post, but real phone photos would be more honest and stronger.
- **Deliberately not shown:** pickup, shipping, hours, ingredients, reviews. The page says to ask about pickup and shipping.

## Questions for the owner
1. A phone number she'll take orders on? Does it accept texts?
2. Who's Mae? Is "I'm Aleda" right?
3. Does she offer pickup or shipping? Where does she deliver, and is there a minimum?
4. Which days and hours? (The brief only has one day's "around 3-4pm", so it isn't on the page.)
5. What's in the sauce, and what are the dark chunks? Can the page name chamoy or similar?
6. Is the business licensed or permitted? (The brief flags this as unknown. Worth knowing before promoting it.)
7. Real photos of the cups?
8. Does she watch Message Requests? Orders from strangers land there, not in her main inbox.

## Ideas not built (yours to pick)
- **Impeccable findings left in on purpose (your choices):** eyebrow pills, stripe texture and letter bounce-in on the calm version. The detector's "gray on color" warning for #cfdcc9 on green was also left: it's a green-tinted light colour with strong contrast.
- **Orders that land in Messenger with no paste:** needs a Facebook Page for the business, a Meta app and a small server. The order goes in an `m.me/<page>?ref=` link, and the Page posts it into the chat. Meta's approval is likely needed before the public can use it. It would post as the Page, not as the customer.
- **Spanish toggle:** her caption says "preparados" and much of the audience may read Spanish.
- **Chatbot or order inbox:** a natural first paid software step, since she runs orders through comments.
- **Google Business listing:** she has none.
- **Other interactive worlds considered:** squeezing a lime that sprays across the page; shaking a sealed cup with the phone's motion sensor.

## Not verified
- **Real Facebook in-app browser on a real phone.** This matters most. Copy may be blocked there; the page then says to press and hold the message.
- **The Messenger link when logged in.** Ellie confirmed pre-filled text doesn't reach the chat, so the link no longer sends it.
- **Real touch on the sauce.** Touch was tested with synthetic events in headless Chromium, including up, down and sideways drags. Frame rate on old phones is untested.
- **Impeccable coverage:** the detector ran, and one finish reviewer covered the critique, audit, polish, harden, clarify, adapt, optimize, typeset and layout lenses in a single pass. Those modes weren't run one at a time. Bolder, quieter, distill, delight, overdrive, animate, colorize, extract and shape weren't run.
- **Generated images:** none used. OpenAI credits are exhausted and local `genimg --local` is broken (missing `libaom` dylib in mflux's cv2), so both need fixing before any future generated photo.
