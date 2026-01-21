# Project Structure

```
simplilearn-roundtable/
│
├── app/                          # Next.js App Router
│   ├── actions/
│   │   └── rsvp.ts              # Server Action for form submission
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Home page (composes all sections)
│   └── globals.css              # Global Tailwind CSS styles
│
├── components/                   # React Server Components
│   ├── Hero.tsx                 # Hero/Banner section
│   ├── About.tsx                # About the event section
│   ├── Speakers.tsx             # Featured speakers section
│   ├── Agenda.tsx               # Event schedule/agenda section
│   ├── RSVPForm.tsx             # RSVP form (Client Component)
│   └── Footer.tsx               # Footer section
│
├── public/                       # Static assets (create this folder)
│   └── images/                  # Add your images here
│
├── .env.example                 # Environment variables template
├── .env.local                   # Your local env vars (create this)
├── .eslintrc.json              # ESLint configuration
├── .gitignore                  # Git ignore rules
├── next.config.ts              # Next.js configuration
├── package.json                # Project dependencies
├── postcss.config.mjs          # PostCSS configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
│
├── README.md                    # Main documentation
├── SETUP.md                     # Quick setup guide
├── DESIGN_GUIDE.md             # Design customization guide
└── PROJECT_STRUCTURE.md        # This file
```

## File Purposes

### Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Project dependencies and scripts |
| `tsconfig.json` | TypeScript compiler configuration |
| `next.config.ts` | Next.js framework configuration |
| `tailwind.config.ts` | Tailwind CSS customization |
| `postcss.config.mjs` | PostCSS plugin configuration |
| `.eslintrc.json` | Code linting rules |
| `.gitignore` | Files to exclude from Git |
| `.env.local` | Environment variables (not in Git) |

### Application Code

| File/Folder | Purpose | Type |
|-------------|---------|------|
| `app/layout.tsx` | Root layout, metadata, fonts | Server Component |
| `app/page.tsx` | Home page composition | Server Component |
| `app/globals.css` | Global styles | CSS |
| `app/actions/rsvp.ts` | Form submission logic | Server Action |
| `components/Hero.tsx` | Hero section | Server Component |
| `components/About.tsx` | About section | Server Component |
| `components/Speakers.tsx` | Speakers section | Server Component |
| `components/Agenda.tsx` | Agenda section | Server Component |
| `components/RSVPForm.tsx` | Interactive form | Client Component |
| `components/Footer.tsx` | Footer section | Server Component |

## Component Hierarchy

```
RootLayout (app/layout.tsx)
└── Home (app/page.tsx)
    ├── Hero (components/Hero.tsx)
    ├── About (components/About.tsx)
    ├── Speakers (components/Speakers.tsx)
    ├── Agenda (components/Agenda.tsx)
    ├── RSVPForm (components/RSVPForm.tsx)
    └── Footer (components/Footer.tsx)
```

## Data Flow

```
User fills RSVP form
       ↓
RSVPForm.tsx (Client Component)
       ↓
submitRSVP() Server Action (app/actions/rsvp.ts)
       ↓
Validates data
       ↓
Airtable API
       ↓
Success/Error response
       ↓
Display message to user
```

## Server vs Client Components

### Server Components (Default)
- Hero, About, Speakers, Agenda, Footer
- No JavaScript sent to client
- Can directly access backend (not needed here)
- Better performance

### Client Components
- RSVPForm (needs state and event handlers)
- Uses `'use client'` directive
- Interactive functionality
- Form validation and submission

## Adding New Sections

To add a new section:

1. Create component file: `components/NewSection.tsx`
2. Import in `app/page.tsx`
3. Add to page composition

Example:

```typescript
// components/Testimonials.tsx
export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      {/* Your content */}
    </section>
  );
}

// app/page.tsx
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Testimonials />  {/* New section */}
      <Speakers />
      {/* ... */}
    </main>
  );
}
```

## Best Practices

### Component Organization
- One component per file
- Server Components by default
- Only use Client Components when needed
- Keep components focused and reusable

### Styling
- Use Tailwind utility classes
- Avoid custom CSS when possible
- Use Tailwind config for design tokens
- Keep responsive design in mind

### Performance
- Optimize images with Next.js Image component
- Use Server Components for static content
- Minimize client-side JavaScript
- Use Server Actions for forms

### Code Quality
- TypeScript for type safety
- ESLint for code consistency
- Descriptive component names
- Comments for complex logic

## Customization Points

### Content
- Component files: Update text, add/remove sections
- `app/layout.tsx`: Update page metadata

### Styling
- `tailwind.config.ts`: Colors, fonts, spacing
- Component files: Update Tailwind classes
- `app/globals.css`: Global styles

### Functionality
- `app/actions/rsvp.ts`: Form validation logic
- `components/RSVPForm.tsx`: Form fields and UI

### Configuration
- `.env.local`: Environment variables
- `next.config.ts`: Next.js settings

## Development Workflow

1. **Start dev server**: `npm run dev`
2. **Make changes**: Edit component files
3. **Auto-reload**: Browser updates automatically
4. **Check types**: TypeScript catches errors
5. **Test form**: Submit RSVP, check Airtable
6. **Build**: `npm run build` to test production

## Deployment Checklist

- [ ] Set environment variables on hosting platform
- [ ] Test form submission in production
- [ ] Verify all images load
- [ ] Check mobile responsiveness
- [ ] Run Lighthouse audit
- [ ] Test on different browsers
