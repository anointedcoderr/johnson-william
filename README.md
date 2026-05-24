# The Johnson Law Group, LLC

Premium website for The Johnson Law Group, LLC, built with Next.js, TypeScript, and Tailwind CSS.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (subtle transitions)
- React Hook Form + Zod (forms and validation)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm run start
```

## Project structure

```
app/                  # App Router pages
  about/
  practice-areas/
  practice-areas/[slug]/
  attorney-profile/
  client-approach/
  resources/
  resources/[slug]/
  faq/
  book-consultation/
  contact/
  privacy-policy/
  legal-disclaimer/
components/
  layout/             # Header, Footer, MobileMenu, Logo
  sections/           # Home page sections
  ui/                 # Reusable UI primitives
  forms/              # ConsultationForm, ContactForm
data/                 # Central content files
  firm.ts
  practiceAreas.ts
  faqs.ts
  resources.ts
  nav.ts
lib/                  # Utilities
```

## Editing firm content

Firm contact details, address, phone, and email live in `data/firm.ts`.
Practice area content lives in `data/practiceAreas.ts` and is easy to edit per area.

## Credit

Website built by RSS World Network.
Email: info@rssworldnet.work
WhatsApp: https://wa.me/+2349014870002
