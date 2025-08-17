# Zero Fox Gibbon — MVP Site

Next.js + Tailwind + GSAP cinematic hero with Supabase whitelist signup.

## Quick Start

1. Install deps:
```bash
npm install
```

2. Set env (create `.env.local`):
```
NEXT_PUBLIC_SUPABASE_URL=https://iglisrumkjtxqnryiclr.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=REPLACE_WITH_YOUR_ANON_KEY
```

3. Run dev:
```bash
npm run dev
```

4. Deploy: push to GitHub → Vercel auto-deploys.

## Notes
- Replace `/public/fonts/*.woff2` with your licensed font files (Kortz, Wushu, Nutty Noises).
- Ensure a `whitelist` table exists in Supabase with columns: `email text`, `wallet text`, `created_at timestamptz default now()`.
- Social logins (Google/Twitter/Facebook/Apple) need to be enabled in Supabase Auth providers.
