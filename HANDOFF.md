# Mae's Sour Cravings — handoff at ~60%

**Live:** https://maesolivespreparados.com/
**Repo:** https://github.com/10elizabethbell/maeSourCravings · **Built:** 2026-11-01 from Muse brief 2026-11-01

An interactive version (stirrable sauce hero) was also built mid-build at Ellie's request. On 2026-11-05 Ellie had it deleted so only the calm version exists; it's in git history before that date. The old `/interactive/` and `/calm/` links redirect to the main URL, so links already sent still work.

Domain `maesolivespreparados.com` bought 2026-11-05 at GoDaddy. DNS: `A @` records to GitHub Pages (185.199.108–111.153), `www` CNAME. The repo's `CNAME` file sets it; the old github.io links forward to it.

## What's built
- **Sections:** header, hero ("Craving sour in San Antonio? I deliver."), four cups with published prices, Facebook link under them, how to get some, order builder, close, footer. Tapping a cup adds one to the order and jumps to the builder.
- **Order builder:** steppers, running total, name, delivery or pickup, address, payment. "Text my order" opens their texting app to (210) 638-0378 with the whole order already written (`sms:+12106380378?&body=…`); they just hit send. The page also shows the order and an "Open my texts" button in case the texting app didn't open (e.g. on a computer). Orders survive a reload.
- **Delivery or pickup:** required choice. Delivery asks for a day (the next 8 days as pills, from `CONFIG.DAYS_AHEAD`, San Antonio time) and the address; the message says "Delivery on: Sunday, Nov 8" with no time; under the days it says "I'll text you to set a time." (Ellie, 2026-11-06). Pickup asks where they are now and says a meetup spot will follow. No time is ever asked for, per the owner.
- **Payment (required):** Cash App, Zelle or Cash. The message ends "Paying with: Cash App" and the sheet has a Payment column. Her Cash App tag and Zelle number aren't on the page (not known); she sends them in the chat.
- **Daily order caps (owner request 2026-11-06):** 6 deliveries per weekday, 20 per weekend day. Orders log to a Google Sheet through an Apps Script web app (`backend/orders.gs`, setup in `backend/SETUP.md`); full days show as "Full" and can't be picked, and the script refuses an order for a day that filled meanwhile. Pickup is logged but not counted. Off until `CONFIG.ORDERS_API` is set. If Google can't be reached, every day stays open.
- **Palette:** paper #f5f7ee, greens #0f4a28 and #0a3019 from the flyer's ground, lime #b9e32e from the logo. Lime is a fill with deep green text.
- **Look (`index.html`):** Cal Sans, eyebrow pills, H1 bounce-in, fade-up, floating text circle. Hero is her 16oz cup from the flyer fading out of the green, with no navy overlay.
- **Contact:** text only, to (210) 638-0378 (`CONFIG.PHONE`), switched from Messenger on 2026-11-06 at Ellie's request. The number is in the header's top-right, the floating circle and the footer. The hero has only a See the menu button (Ellie, 2026-11-06). Never a Call button. The Facebook links still go to her personal profile.

## Assumptions I made
- **"Aleda" as the voice:** the brief names Aleda Gonzalez as owner, but the brand says Mae. I don't know who Mae is.
- **Lime as the accent, greens as the bands:** taken from her logo and flyer, since the brief listed colours as unknown.
- **Logo:** the brief says none was found, but the flyer has one at the top. I cut it out as a circle for the header, close and icons.
- **"Surrounding areas":** taken from the Facebook group's name, not from her.
- **Address is required:** step 2 asks where they are, and it saves a back-and-forth. (Changed from "part of town" to full address on 2026-11-05 at Ellie's request.)
- **"Delivery included" on the total:** based on her "NO extra charge for delivery" comment. I don't know if a delivery radius or minimum applies.

## Placeholders and gaps
- **No email,** so none appears.
- **Images:** the logo, hero and plain cups are crops of her first flyer (1080x1262). The two pickle cups (green brine) are crops of a second flyer Ellie supplied on 2026-11-05 (833x403), so they're small, about 336px wide. They look slightly soft at large desktop sizes, and I painted the logo's edge out of the area above the 16oz cup.
- **The flyer's cups look AI-rendered or heavily retouched.** It came from her own post, but real phone photos would be more honest and stronger.
- **Deliberately not shown:** pickup, shipping, hours, ingredients, reviews. The page says to ask about pickup and shipping.

## Questions for the owner
1. A phone number she'll take orders on? Does it accept texts?
2. Who's Mae? Is "I'm Aleda" right?
3. Does she offer pickup or shipping? Where does she deliver, and is there a minimum?
4. ~~Which days and hours?~~ Answered 2026-11-06: delivers Mon–Fri after 5pm, Sat–Sun 3pm–10pm, no set times. Still unknown: weekday end time, and whether same-day orders are OK (the page offers today until 10pm San Antonio time; `CONFIG.SAME_DAY_UNTIL`).
5. What's in the sauce, and what are the dark chunks? Can the page name chamoy or similar?
6. Is the business licensed or permitted? (The brief flags this as unknown. Worth knowing before promoting it.)
7. Real photos of the cups?
8. Her Cash App $tag and Zelle number or email, if she wants them shown after ordering?
9. Does she watch Message Requests? Orders from strangers land there, not in her main inbox.

## Ideas not built (yours to pick)
- **Impeccable findings left in on purpose (your choices):** eyebrow pills, stripe texture and letter bounce-in. The detector's "gray on color" warning for #cfdcc9 on green was also left: it's a green-tinted light colour with strong contrast.
- **Spanish toggle:** her caption says "preparados" and much of the audience may read Spanish.
- **Chatbot or order inbox:** a natural first paid software step, since she runs orders through comments.
- **Google Business listing:** she has none.
- **Interactive worlds considered (opt-in signature motion):** the stirrable sauce pool that was built and removed; squeezing a lime that sprays across the page; shaking a sealed cup with the phone's motion sensor.

## Not verified
- **Real Facebook in-app browser on a real phone.** This matters most. Copy may be blocked there; the page then says to press and hold the message.
- **The text link on real phones.** `sms:` with a pre-written body was tested in desktop browsers only. Check on an iPhone and an Android phone, including inside Facebook's in-app browser, that the body arrives filled in.
- **Impeccable coverage:** the detector ran, and one finish reviewer covered the critique, audit, polish, harden, clarify, adapt, optimize, typeset and layout lenses in a single pass. Those modes weren't run one at a time. Bolder, quieter, distill, delight, overdrive, animate, colorize, extract and shape weren't run.
- **Generated images:** none used. OpenAI credits are exhausted and local `genimg --local` is broken (missing `libaom` dylib in mflux's cv2), so both need fixing before any future generated photo.
