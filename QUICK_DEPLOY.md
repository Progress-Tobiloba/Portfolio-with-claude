# ⚡ QUICK START: Deploy to Vercel via Termux

## Copy-Paste Commands (In Order)

### 1. Install Requirements
```bash
pkg update && pkg upgrade
pkg install nodejs-lts git
```

### 2. Create & Setup Project
```bash
cd ~
mkdir portfolio
cd portfolio
npm create vite@latest . -- --template react
npm install framer-motion
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3. Initialize Git
```bash
git init
git config --global user.name "Your Name"
git config --global user.email "your-email@gmail.com"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

### 4. Copy All Files
- Copy `tailwind.config.js`
- Copy `src/index.css`
- Copy `src/App.jsx`
- Copy `src/Portfolio.jsx`

Into your project folders.

### 5. Test Locally
```bash
npm run dev
```

Visit `http://localhost:5173` in your browser. Press `Ctrl+C` to stop.

### 6. Build for Production
```bash
npm run build
```

### 7. Push to GitHub
```bash
git add .
git commit -m "Initial commit: Portfolio"
git push -u origin main
```

### 8. Deploy to Vercel
```bash
npm i -g vercel
vercel login
vercel
```

Select:
- **Project name**: `portfolio`
- **Framework**: `Vite`
- **Output directory**: `dist`

---

## 🎉 Done!

Your site is now live! Check the URL Vercel gives you.

---

## Update Changes

Every time you make changes:

```bash
git add .
git commit -m "Update: describe what changed"
git push
```

Vercel auto-deploys! ✨

---

## Common Issues

**"npm: command not found"**
```bash
pkg install nodejs-lts
```

**"Permission denied" on push**
- Use Personal Access Token instead of password
- Generate at: https://github.com/settings/tokens

**Build fails**
- Run `npm run build` locally first
- Check all files are copied correctly

---

Still stuck? Check `TERMUX_DEPLOY_GUIDE.md` for detailed help!
