## Space Tourism

Interactive multi-page Space Tourism website built with Next.js App Router. Explore destinations, meet the crew, and discover the technology behind space travel.

### Features
- **Responsive design**: Mobile-first, optimized layouts for all screen sizes
- **Animated transitions**: Smooth page and content transitions with Framer Motion
- **Accessible navigation**: Semantic landmarks, keyboard-ready mobile menu, ARIA attributes
- **Optimized assets**: Preloaded fonts, lazy-loaded imagery, static assets served from `public/`

### Tech Stack
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D**: Three.js (via `@react-three/fiber` and `@react-three/drei`)
- **Fonts**: Google Fonts via `next/font` (Bellefair, Barlow)

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
# visit http://localhost:3000
```

### Build
```bash
npm run build
npm run start
```

### Lint
```bash
npm run lint
```

## Project Structure
```text
src/
  app/
    page.jsx                 # Home page
    layout.jsx               # Root layout + metadata
    destination/page.jsx     # Destination page
    crew/page.jsx            # Crew page
    technology/page.jsx      # Technology page
  components/
    background.jsx           # Fullscreen background image
    nav-bar.jsx              # Responsive navigation bar
    explore-button.jsx       # CTA on the home page
    planet-model.jsx         # 3D/visual component
public/
  background-images/         # Page backgrounds
  crew/                      # Crew imagery
  technology/                # Technology imagery
  planets-textures/          # Destination textures
```

## Accessibility
- Labeled navigation (`aria-label`, `aria-current`)
- Mobile menu with `aria-expanded`, `aria-controls`, and modal semantics
- Decorative backgrounds isolated from content

## Deployment
- Any Node-compatible platform works (e.g., Vercel). After `npm run build`, run `npm run start`.

## Credits
- Design inspiration: Space Tourism challenge (Frontend Mentor-style)
- Images: Stored locally in `public/` for demo purposes

## License
This project is for learning and demonstration purposes.
