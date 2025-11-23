# Deployment Guide

Congratulations on finishing your **My Art-toy studio** website! Here is how to publish it to the internet.

## Option 1: Vercel (Recommended - Easiest)
Vercel is optimized for Vite projects and requires zero configuration.

### 1. Push to GitHub
1.  Log in to your [GitHub](https://github.com) account.
2.  Create a **New Repository** (name it `collage-shop` or similar).
3.  In your project terminal, run:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    git push -u origin main
    ```
    *(Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual details)*

### 2. Deploy on Vercel
1.  Go to [Vercel.com](https://vercel.com) and sign up/login with GitHub.
2.  Click **"Add New..."** -> **"Project"**.
3.  Import your `collage-shop` repository.
4.  Click **"Deploy"**.
5.  Wait a minute, and you'll get a live URL (e.g., `collage-shop.vercel.app`)!

---

## Option 2: GitHub Pages
If you prefer to host directly on GitHub.

1.  Open `vite.config.js` and add your repository name as the base:
    ```js
    export default defineConfig({
      plugins: [react()],
      base: '/YOUR_REPO_NAME/', // Add this line
    })
    ```
2.  Build and deploy:
    ```bash
    npm run build
    ```
    *(Then you need to push the `dist` folder to a `gh-pages` branch, or use a GitHub Action)*.

**Note**: Option 1 (Vercel) is much simpler because it handles the build and updates automatically whenever you push to GitHub.
