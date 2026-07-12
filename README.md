# Islands in the Net — Digital Guide

This is the first production slice of the mobile exhibition guide. It implements the opening journey from the supplied wireframes:

1. Animated loading screen
2. Exhibition cover
3. Visitor name entry
4. Personalised welcome and introduction
5. How to use the space
6. Exhibition map and route reveal
7. A handoff into **You & the Net**

It is built as a mobile-first React + TypeScript app using Vite. The visitor's name and motion preference are stored only in their browser.

## Open it on your computer

You need Node.js installed. Then open a terminal in this folder and run:

```bash
npm install
npm run dev
```

Vite will print a local address, usually:

```text
http://localhost:5173
```

Open that address in a browser. Use the browser's mobile preview or open it on a phone connected to the same network.

## Add the supplied header font

Copy your original font file into:

```text
public/fonts/Header_Font.ttf
```

The app is already configured to use it. Until it is added, a system monospace fallback is used.

## Create a production build

```bash
npm run build
```

The finished site will be generated inside the `dist` folder.

## Put it on GitHub

Create an empty repository on GitHub, then run these commands in this folder:

```bash
git init
git add .
git commit -m "Initial Islands in the Net guide slice"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with the URL GitHub gives you.

## Deploy on Vercel

1. Sign in to Vercel.
2. Choose **Add New → Project**.
3. Import the GitHub repository.
4. Vercel should detect Vite automatically.
5. Press **Deploy**.

No database, account system or environment variables are required for this slice.

## Where to edit things

- Main experience and copy: `src/App.tsx`
- Visual design, spacing and animation: `src/styles.css`
- Reusable app shell and modals: `src/components/`
- Supplied image assets: `public/assets/`

More implementation notes are in `docs/BUILD_NOTES.md`.

## Install troubleshooting

Use Node.js 20 LTS where possible.

```bash
npm install
npm run dev
```

This corrected package pins dependency versions and intentionally omits the previous lockfile, which contained environment-specific package URLs that could stall installs outside the build environment.
