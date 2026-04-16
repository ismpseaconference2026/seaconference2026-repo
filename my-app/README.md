# ISMP Southeast Asia Conference 2026

A marketing and registration landing page for the ISMP Southeast Asia Conference, built with Next.js, React, TypeScript, and Tailwind CSS.

## Overview

This repo contains a single-page conference website aimed at students and international attendees traveling to Bangkok, Thailand from April 23 to April 26, 2026.

Key features:
- Hero section with conference title, dates, location, and registration buttons
- Conference details section highlighting nature, faith, and workshop focus areas
- Embedded promotional video section
- Interactive schedule section with day switching
- Packing list section with travel recommendations and footnotes
- Sticky navigation bar with registration links

## Tech Stack

- Next.js 16.2.4
- React 19.2.4
- TypeScript 5
- Tailwind CSS v4
- ESLint

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Available Scripts

- `npm run dev` - Start the Next.js development server
- `npm run build` - Build the app for production
- `npm run start` - Start the production server after build
- `npm run lint` - Run ESLint

## Project Structure

- `src/app/page.tsx` - Main page component that assembles the homepage sections
- `src/components/` - UI sections and shared layout components
  - `HeroSection.tsx`
  - `InfoSection.tsx`
  - `VideoPromoSection.tsx`
  - `ScheduleSection.tsx`
  - `PackingListSection.tsx`
  - `NavigationBar.tsx`
  - `Footer.tsx`
- `src/lib/conference.ts` - Conference data, schedule details, registration links, and packing list
- `public/` - Static assets used by the site

## Notes

- Registration buttons open separate Google Forms for Thailand and international attendees.
- The schedule data and packing list are defined in `src/lib/conference.ts`.
- The site uses client state to switch the active conference day in the schedule section.

## Deployment

This app can be deployed on Vercel or any hosting platform that supports Next.js.

If deploying manually:

```bash
npm run build
npm run start
```
