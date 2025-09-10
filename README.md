# Too Hot To Walk — Next.js (Vercel-ready)

## Local Development
1. Install Node.js 18+ from nodejs.org
2. In a terminal inside this folder:
   ```bash
   npm install
   npm run dev
   ```
3. Open http://localhost:3000

## Deploy (GitHub → Vercel)
1. Create a GitHub repo and push this folder.
2. Go to https://vercel.com → New Project → Import Git Repository.
3. Framework: **Next.js**. Build command: `next build`. Output: `.next` (defaults are fine).
4. Deploy.

## Edit Content
- Main page: `app/page.tsx`
- YouTube embeds: `components/YouTubeEmbed.tsx` (replace the video ID)
- Global styles: `app/globals.css`
- Add images to `public/` and reference as `/your-image.jpg`.
