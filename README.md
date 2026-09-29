# Bahtraku website (Next.js)

Profile and donation site for Yayasan Bahasa Transformasi Suku (Bahtraku).
Next.js 15 (App Router) + TypeScript, plain CSS, English / Bahasa Indonesia switch.

## Pages
- `/`: home page: hero, progress (June 2026), who we are, how we serve, story, giving, registrations, footer
- `/donate`: giving page with two options:
  - **Give directly (Midtrans)**: IDR, card / virtual account / QRIS / e-wallet via Midtrans Snap popup
  - **Give with a tax receipt (TrustBridge)**: USD, opens Bahtraku’s TrustBridge giving page
- `/privacy`: placeholder privacy policy

## Run locally
```bash
npm install
cp .env.example .env.local   # then fill in your keys
npm run dev                  # http://localhost:3000
```

## Environment variables
| Name | What it is |
| --- | --- |
| `MIDTRANS_SERVER_KEY` | Midtrans server key (secret, server only) |
| `NEXT_PUBLIC_MIDTRANS_CLIENT_KEY` | Midtrans client key |
| `NEXT_PUBLIC_MIDTRANS_ENV` | `sandbox` while testing, `production` when live |
| `NEXT_PUBLIC_TRUSTBRIDGE_URL` | Bahtraku’s giving page on TrustBridge |
| `NEXT_PUBLIC_SITE_URL` | Your live domain, e.g. `https://www.bahtraku.org` |

## Midtrans setup
1. Create an account at dashboard.midtrans.com and copy the **sandbox** Access Keys into `.env.local`.
2. In **Settings › Payment › Notification URL**, set `https://YOUR-DOMAIN/api/midtrans/notification`.
3. Test with Midtrans’ sandbox test cards / virtual accounts.
4. When approved for production, switch to production keys and `NEXT_PUBLIC_MIDTRANS_ENV=production`.

How it works: the browser calls `POST /api/midtrans` → the server creates a Snap transaction with
your server key → the browser opens the Snap popup with the returned token. The webhook at
`/api/midtrans/notification` verifies Midtrans’ SHA-512 signature before trusting a status.

### Still to connect (marked `TODO` in code)
- **Database**: save each donation in `src/app/api/midtrans/route.ts` and update its status in
  `notification/route.ts` (Supabase, Postgres, or a Google Sheet all work).
- **Receipt email**: send after a `settlement` / accepted `capture` notification (e.g. Resend, Brevo).
- **Monthly gifts**: currently recorded as `custom_field1: "monthly"` so you can email a monthly
  reminder link. True automatic card charging needs Midtrans’ Subscription API with saved cards.

## Editing content
All text (both languages), stats and addresses live in `src/content/dictionary.ts`.
Update the progress figures there each quarter.

## Adding photos
Put images in `public/images/` and pass `src` to the `Photo` component, e.g.
`<Photo src="/images/hero.jpg" label={t.hero.photo} className="hero-photo" />` in
`src/components/HomePage.tsx`. Placeholders marked `[Photo: …]` show where they go.

## Deploy
Push to GitHub and import the repo in Vercel, then add the environment variables in
Project › Settings › Environment Variables.

## Responsive / phone layout
All layout rules are in `src/app/globals.css`. Breakpoints:
- `max-width: 1024px`: tablets and phones (mobile menu, stacked donate page, sticky pay bar)
- `max-width: 900px`: two-column sections become one column
- `max-width: 640px`: phones (tighter spacing, smaller photos); see "Phone refinements" at the end of the file
- `max-width: 360px`: very small phones

To test: run `npm run dev`, open Chrome DevTools (F12) › device toolbar (Ctrl+Shift+M), and try
iPhone SE (375px), iPhone 14 (390px) and a small Android (360px).
