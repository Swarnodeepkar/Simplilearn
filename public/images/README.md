# Images Directory

Place all your images in this directory.

## Recommended Structure

```
public/
└── images/
    ├── hero-bg.jpg          # Hero section background
    ├── logo.png             # Site logo
    ├── speakers/
    │   ├── speaker-1.jpg
    │   ├── speaker-2.jpg
    │   └── speaker-3.jpg
    └── icons/               # Optional: if you have custom icons
        └── icon-name.svg
```

## Image Guidelines

### File Formats
- **Photos**: Use `.jpg` or `.webp` for photos
- **Graphics/Logos**: Use `.png` for transparent backgrounds
- **Icons**: Use `.svg` for scalable vector graphics

### File Size
- Compress images before adding
- Aim for < 200KB per image
- Use tools like TinyPNG or Squoosh

### Naming Convention
- Use lowercase
- Use hyphens instead of spaces
- Be descriptive: `speaker-john-doe.jpg` not `img1.jpg`

### Dimensions
- **Hero images**: 1920x1080px
- **Speaker photos**: 400x400px (square)
- **Icons**: 24x24px or 32x32px

## Using Images in Components

### With Next.js Image Component (Recommended)

```tsx
import Image from 'next/image';

<Image
  src="/images/hero-bg.jpg"
  alt="Hero background"
  width={1920}
  height={1080}
  priority // for above-the-fold images
  className="object-cover"
/>
```

### As Background Image

```tsx
<div
  className="bg-cover bg-center"
  style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
>
  Content
</div>
```

## Exporting from Figma

1. Select the image/element in Figma
2. Right-click → Export
3. Choose format (PNG, JPG, SVG)
4. Set scale (1x for web, 2x for retina)
5. Export and save here

## Optimization Tools

- **TinyPNG**: https://tinypng.com
- **Squoosh**: https://squoosh.app
- **ImageOptim** (Mac): https://imageoptim.com
- **SVGOMG** (for SVGs): https://jakearchibald.github.io/svgomg/

## Example: Replace Placeholder Images

Current placeholders in code:
- Hero section: Add `hero-bg.jpg`
- Speakers: Add `speaker-1.jpg`, `speaker-2.jpg`, `speaker-3.jpg`

Then update the component:

```tsx
// components/Speakers.tsx
const speakers = [
  {
    name: "John Doe",
    image: "/images/speakers/speaker-1.jpg", // Update this
  },
  // ...
];
```
