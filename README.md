# Nissan Skyline GT-R R34 - Interactive Landing Page

A premium, interactive landing page dedicated to the legendary Nissan Skyline GT-R R34. Built with React, TypeScript, and Tailwind CSS, this project showcases modern web design principles, dynamic media integration, and interactive components.

## Features

- 🎥 **Dynamic Media Integration:** Features high-quality background videos in the Hero section and stacked interactive video players with custom mute controls in the Powertrain section.
- 🎨 **Premium Aesthetic:** Designed with a striking dark theme accented by the iconic "Bayside Blue" (`#2563eb`), complete with glassmorphism effects and smooth micro-animations.
- 🔍 **Interactive Design Explorer:** A custom hotspot component that lets users explore key aerodynamic and design features of the R34's exterior.
- 📸 **Mosaic Gallery:** A responsive image gallery featuring a 16:9 featured image and 1:1 thumbnails, complete with a full-screen lightbox viewer.
- 📜 **Historical Timeline:** A scroll-revealed timeline detailing the rich legacy of the Skyline GT-R, from its birth in 1969 to its pop-culture immortality in *Fast & Furious*.
- 📱 **Fully Responsive:** Carefully crafted layouts that adapt seamlessly from mobile devices to ultrawide desktop monitors.

## Tech Stack

- **Framework:** React 18 (via Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Custom Intersection Observer hook (`useReveal`) and CSS transitions

## Project Structure

- `src/components/`
  - `Navbar.tsx` - Sticky navigation with scroll-aware styling and mobile menu support.
  - `Hero.tsx` - Initial landing view with a full-screen video background.
  - `Specs.tsx` - Key performance metrics and statistics.
  - `Powertrain.tsx` - Engine details featuring dual stacked video elements.
  - `Design.tsx` - Interactive side-profile view with clickable informational hotspots.
  - `Interior.tsx` - Cockpit overview with an accordion-style feature list.
  - `Gallery.tsx` - Responsive mosaic image grid with lightbox functionality.
  - `Legacy.tsx` - Chronological history timeline.
  - `Footer.tsx` - Simple, elegant footer section.
- `src/hooks/useReveal.ts` - Custom hook for triggering animations when elements scroll into view.
- `src/index.css` - Global CSS variables, custom animations, and utility classes.

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open your browser and visit `http://localhost:5173`

## Assets Note
All media assets required for this project (images, videos, and logos) should be placed in the `public/images/` and `public/videos/` directories.
