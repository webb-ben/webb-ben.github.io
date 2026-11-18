# benwebb.com

Personal site for Ben Webb, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check and build to dist/
npm run preview  # serve the production build
```

## Editing content

All content (bio, projects, experience, education, skills, organizations) lives in
[`src/data/site.ts`](src/data/site.ts). Project screenshots and logos live in `src/assets/`
and are resized/optimized at build time.

## Layout

```
public/          static files served as-is (CNAME, favicons, robots.txt)
src/assets/      images processed by astro:assets
src/components/  Header, Footer, Section, ProjectCard, ThemeToggle
src/data/        site content
src/layouts/     base HTML shell (meta tags, analytics, theme bootstrap)
src/pages/       index and 404
```

## Deployment

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes
it to GitHub Pages. The repository's Pages source must be set to **GitHub Actions**
(Settings → Pages → Build and deployment).
