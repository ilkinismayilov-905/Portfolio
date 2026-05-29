# Ilkin Ismayilov Portfolio

A production-ready personal portfolio for Ilkin Ismayilov, built as a static React application and deployed with Nginx.

Live site: [https://ismayilovilkin.online](https://ismayilovilkin.online)

The content is based on the private CV source at `input/ilkin-cv.pdf`. Private source files remain excluded from Git and deployment.

## Overview

This portfolio presents Ilkin's Java backend engineering profile, including secure Spring-based backend work, mentoring experience, education, skills, selected initiatives, activities, and contact details.

The site is designed to be:

- fast and static-hosting friendly;
- easy to update through structured content;
- responsive across desktop and mobile;
- privacy-conscious around CV and personal assets;
- ready for Nginx deployment.

## Technology Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- Nginx static hosting

Production output is generated in `dist/`.

## Project Structure

```txt
.
├── public/
│   ├── assets/
│   │   └── ilkin-profile.jpg
│   ├── favicon.svg
│   └── og-preview.svg
├── src/
│   ├── components/
│   ├── data/
│   │   └── portfolio.ts
│   ├── sections/
│   ├── App.tsx
│   ├── main.tsx
│   ├── styles.css
│   └── types.ts
├── input/              # private, ignored by Git
├── dist/               # generated build output
└── README.md
```

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

Preview the production build locally:

```bash
npm run preview
```

## Editing Portfolio Content

Most public-facing content is stored in:

```txt
src/data/portfolio.ts
```

Edit this file to update:

- biography and headline;
- selected work and initiatives;
- experience;
- education;
- activities;
- skills;
- languages;
- contact email;
- LinkedIn URL.

Keep all additions factual and backed by the CV or another approved source.

## Public Assets

Safe public assets live in `public/`.

Current assets:

- `public/assets/ilkin-profile.jpg`
- `public/favicon.svg`
- `public/og-preview.svg`

The profile photo was copied from the supplied local image and stripped of EXIF/GPS metadata before publication.

To replace the profile photo:

1. Add a sanitized image to `public/assets/`.
2. Update the image path in `src/sections/Hero.tsx`.
3. Rebuild and verify the page visually.

## CV and Privacy

The private CV source is stored at:

```txt
input/ilkin-cv.pdf
```

The `input/` directory is intentionally ignored by Git and should not be deployed.

To publish a downloadable CV:

1. Create a public-safe PDF copy.
2. Remove private details that should not be public.
3. Place the approved file under `public/`.
4. Add a link in the hero or contact section.
5. Rebuild and redeploy.

Do not commit private CV files, references, raw screenshots, credentials, or local-only files.

## Git Workflow

Development branch:

```txt
feat/personal-portfolio-website
```

Recommended workflow:

```bash
git status
npm run lint
npm run build
git add <intended-files>
git commit -m "your commit message"
git push
```

Merge into `main` only after reviewing the branch on GitHub.

## Deployment

Current deployment target:

```txt
Source directory:      /root/portfolio/source
Static web root:       /var/www/ilkin-portfolio
Nginx port endpoint:   http://213.199.37.210:5172
Primary domain:        https://ismayilovilkin.online
WWW domain:            https://www.ismayilovilkin.online
```

Nginx site files:

```txt
/etc/nginx/sites-available/ilkin-portfolio
/etc/nginx/sites-enabled/ilkin-portfolio
/etc/nginx/sites-available/ilkin-portfolio-domain
/etc/nginx/sites-enabled/ilkin-portfolio-domain
```

The unrelated application on port `5173` is separate and should not be modified during portfolio updates.

## Update and Redeploy

After making local changes:

```bash
npm run lint
npm run build
```

Then deploy the verified build output to:

```txt
/var/www/ilkin-portfolio
```

If source mirroring is needed, sync the project source to:

```txt
/root/portfolio/source
```

Exclude these from server source sync:

- `node_modules/`
- `.git/`
- `dist/` when syncing source only;
- `input/`
- `images/`
- `.idea/`
- secrets or local environment files.

After changing Nginx config:

```bash
nginx -t
systemctl reload nginx
```

## SSL

HTTPS is managed by Certbot for:

```txt
ismayilovilkin.online
www.ismayilovilkin.online
```

Certbot installed an automatic renewal task. Certificate files are managed under `/etc/letsencrypt/`.

## Missing Optional Inputs

Useful future additions:

- approved downloadable CV PDF;
- public GitHub profile URL;
- project repository links;
- live demo links;
- project screenshots;
- stronger Open Graph preview image.
