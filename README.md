# Petra Air Foundation — Website

Modern React landing page for **Petra Air Foundation** (petra-air.cz).

## Tech Stack

- **React 18** — UI framework
- **Tailwind CSS 3** — Utility-first styling
- **Vite 4** — Dev server & build tool
- **Lucide React** — Icons
- **Google Fonts** — Playfair Display + Montserrat

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploy to Vercel

### Option A — Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option B — GitHub + Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import the repository
4. Framework Preset: **Vite**
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy** ✓

## Customization Checklist

- [ ] Replace placeholder YouTube embeds with actual episode URLs
- [ ] Add high-res photos of Petra Sováková (hero, about sections)
- [ ] Add Women Changing the World 2025 certificate photo
- [ ] Update contact email (currently `info@petra-air.cz`)
- [ ] Add Flying Revue logo (transparent PNG)
- [ ] Add real partner logos
- [ ] Connect Stripe for donation processing
- [ ] Connect Mailchimp/Brevo for newsletter
- [ ] Add Google Analytics 4 tracking ID
- [ ] Set up form backend (Formspree, Netlify Forms, or custom API)

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Navy Blue | `#0A2240` | Backgrounds, nav, footer |
| Gold | `#D4AF37` | CTAs, highlights, accents |
| White | `#FFFFFF` | Body text on dark backgrounds |
| Light Grey | `#F0F2F5` | Alternate section backgrounds |

## Typography

- **Headings:** Playfair Display (serif) — authority & elegance
- **Body:** Montserrat (sans-serif) — clean, legible
- **Labels:** Montserrat 600, uppercase, wide letter-spacing

---

*Petra Air Foundation · petra-air.cz · Founder: Petra Sováková*
