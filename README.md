# Ilkin Ismayilov Portfolio

Production-ready personal portfolio for Ilkin Ismayilov, built from the private CV source in `input/ilkin-cv.pdf`.

## Stack

React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide React. The build output is static and generated under `dist/`.

## Folder Structure

`src/data/portfolio.ts` stores editable factual portfolio content.
`src/sections/` contains page sections.
`src/components/` contains reusable UI pieces.
`public/` contains safe public assets such as favicon and Open Graph artwork.
`input/` is private and ignored by Git.

## Local Development

```bash
npm install
npm run dev
npm run build
```

## Editing Content

Update biography, projects, skills, education, experience, activities, contact email, and links in `src/data/portfolio.ts`.

## CV Safety

The CV at `input/ilkin-cv.pdf` is private and excluded from Git. To publish a downloadable CV, add an approved public copy under `public/`, link it from the contact or hero section, and verify the file does not expose private information.

## Profile Photo and Screenshots

The profile photo is stored at `public/assets/ilkin-profile.jpg`. It was copied from the supplied local image and stripped of EXIF/GPS metadata before publication. To replace it, add a sanitized image under `public/assets/` and update the image path in `src/sections/Hero.tsx`.

## Missing Inputs

Optional items still worth supplying:

- Public GitHub profile or project repository links.
- Live demo links for real projects.
- Approved downloadable CV PDF.
- Sanitized profile photo or project screenshots.
- Preferred domain or final public URL for deployment metadata.

## Git Workflow

Development branch: `feat/personal-portfolio-website`.

Review locally, then push the feature branch when approved. Merge into `main` yourself on GitHub after review. Do not commit private `input/` files.

## Deployment Notes

Intended production static directory: `/var/www/ilkin-portfolio`.
Intended source directory: `~/portfolio/ilkin/source`.
Intended Nginx port: `5172`.

Deployment should be performed only after server inspection confirms port `5172` is available and unrelated port `5173` configuration is not affected.
