# Rangan Roy — Portfolio Website

Built with **React 18 + Vite**, deployed on **Vercel**.

## 🚀 Local Development

```bash
npm install
npm run dev
# → http://localhost:5173
```

## 📦 Build

```bash
npm run build
# output in /dist
```

## ☁️ Deploy to Vercel (3 steps)

### Option A — Vercel CLI (fastest)
```bash
npm install -g vercel
vercel          # follow prompts, done in ~60 seconds
```

### Option B — GitHub + Vercel Dashboard
1. Push this folder to a GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "initial portfolio"
   gh repo create my-portfolio --public --push
   ```
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import your repo
3. Click **Deploy** — Vercel auto-detects Vite ✅

Every future `git push` auto-redeploys. 🎉

## 🎨 Customisation

All content lives in **`src/data/data.js`** — edit your name, experience,
skills, awards, and contact links there. No need to touch any component files.

Your photo is at **`public/rroy.jpg`** — replace it with any image and update
`profile.photo` in `data.js` if you rename the file.

## 🗂 Project Structure

```
portfolio/
├── public/
│   ├── rroy.jpg          ← your profile photo
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .module.css
│   │   ├── Hero.jsx / .module.css
│   │   ├── Accordion.jsx / .module.css   ← reusable collapsible
│   │   ├── Skills.jsx / .module.css
│   │   ├── Experience.jsx / .module.css
│   │   ├── Awards.jsx / .module.css
│   │   └── Contact.jsx / .module.css
│   ├── data/
│   │   └── data.js       ← ✏️  edit all content here
│   ├── App.jsx
│   ├── App.css
│   ├── index.css         ← design tokens & global styles
│   └── main.jsx
├── index.html
├── vite.config.js
├── vercel.json
└── package.json
```

## 🔗 Custom Domain

After deploying to Vercel:
1. Buy `ranganroy.dev` on Namecheap (~₹1000/yr)
2. In Vercel dashboard → **Domains** → Add your domain
3. Add the DNS records Vercel gives you → done in ~5 min
