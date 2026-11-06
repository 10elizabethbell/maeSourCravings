# Order log and daily caps — setup

The site logs each order to a Google Sheet and stops offering a delivery day once it
has 6 orders (Mon–Fri) or 20 (Sat–Sun). It runs on Google's servers; no computer
needs to stay on.

## One-time setup (about 5 minutes)

1. Go to https://sheets.new while signed in to the Google account that should own it.
   Name the sheet **Mae's Orders**.
2. **Extensions → Apps Script.** Delete what's in `Code.gs` and paste all of
   [`orders.gs`](orders.gs). Click **Save**.
3. In the function menu at the top choose **setup**, then **Run**. Google asks for
   permission: **Review permissions → your account → Advanced → Go to (unsafe) →
   Allow**. (It says "unsafe" because the script isn't published by Google; it only
   touches this one sheet.) An **Orders** tab with headers appears in the sheet.
4. **Deploy → New deployment →** gear icon **→ Web app.**
   - Execute as: **Me**
   - Who has access: **Anyone**
   Click **Deploy**, then copy the **Web app URL** (ends in `/exec`).
5. Put that URL in `index.html` as `CONFIG.ORDERS_API`, commit and push.
6. Share the sheet with Mae (**Share** → her email, Editor).

## Day to day (for Mae)

- Each order sent from the site is a row: when, delivery day, weekday, delivery or
  pickup, name, address, items, total, order ID.
- **Cancelled or never sent?** Delete the row; that spot opens again right away.
- **Order that came in another way?** Add a row with the **Day** (e.g. `2026-11-08`)
  and **Type** `delivery`; it counts toward that day.
- Pickup orders are logged but don't count toward the caps.

## Changing things

- Caps: `CAP_WEEKDAY` and `CAP_WEEKEND` at the top of the script. After editing,
  **Deploy → Manage deployments → pencil → Version: New version → Deploy**
  (the URL stays the same).
- To switch the caps off on the site, set `CONFIG.ORDERS_API` back to `''`.

## Limits

- The site only knows someone tapped **Send the message**, not that they pasted it
  into Messenger, so a day can show Full early. Deleting rows fixes that.
- The web app URL is public. Someone could send junk orders to fill days; Mae would
  see and delete them. If that ever happens, move to a backend with rate limiting.
- If Google can't be reached, the site keeps every day open rather than blocking orders.
