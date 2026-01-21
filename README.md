# Simplilearn Dallas Round Table - Landing Page

A pixel-perfect, responsive landing page built with Next.js 15, featuring Server Components, Server Actions, and Airtable integration.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Backend**: Server Actions
- **Database**: Airtable
- **Performance**: React Server Components, Turbopack

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Server-side rendering with React Server Components
- ✅ Server Actions for form handling (no API routes needed)
- ✅ Airtable integration for RSVP submissions
- ✅ Form validation (client & server-side)
- ✅ Modern, accessible UI components
- ✅ Optimized for performance
- ✅ SEO-friendly metadata
- ✅ Type-safe with TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Airtable account and API key
- Git (optional)

### Installation

1. Install dependencies:

```bash
npm install
```

2. Set up environment variables:

Create a `.env.local` file in the root directory:

```env
AIRTABLE_API_KEY=your_airtable_api_key_here
AIRTABLE_BASE_ID=your_airtable_base_id_here
AIRTABLE_TABLE_NAME=RSVP
```

### Airtable Setup

1. Create an Airtable base
2. Create a table named "RSVP" with the following fields:
   - First Name (Single line text)
   - Last Name (Single line text)
   - Email (Email)
   - Company (Single line text)
   - Phone (Phone number)
   - Dietary Restrictions (Long text)
   - Submitted At (Date with time)

3. Get your API key from: https://airtable.com/create/tokens
4. Get your Base ID from the base URL or API documentation

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── actions/
│   │   └── rsvp.ts          # Server Action for form submission
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Speakers.tsx         # Speakers section
│   ├── Agenda.tsx           # Event agenda section
│   ├── RSVPForm.tsx         # RSVP form (Client Component)
│   └── Footer.tsx           # Footer section
├── public/                  # Static assets
├── .env.example             # Environment variables template
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Key Implementation Details

### Server Components

All page components are Server Components by default, providing:
- Zero JavaScript sent to the client for static content
- Direct database access (Airtable)
- Improved performance and SEO

### Server Actions

The RSVP form uses Server Actions (`app/actions/rsvp.ts`) for:
- Type-safe form handling
- Server-side validation
- Direct Airtable integration
- No need for API routes

### Form Validation

- Client-side validation for immediate feedback
- Server-side validation for security
- Email format validation
- Required field validation

### Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Flexible grid layouts
- Touch-friendly interactive elements

## Customization

### Updating Design to Match Figma

To match your Figma design exactly:

1. **Colors**: Update `tailwind.config.ts` with design system colors
2. **Typography**: Import specific fonts in `app/layout.tsx`
3. **Spacing**: Adjust padding/margin values in components
4. **Images**: Add images to `public/` folder and update image sources
5. **Content**: Update text content in each component file

### Example: Custom Colors

```typescript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      primary: '#YOUR_PRIMARY_COLOR',
      secondary: '#YOUR_SECONDARY_COLOR',
    },
  },
}
```

### Example: Custom Fonts

```typescript
// app/layout.tsx
import { Inter, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: ['400', '700'], subsets: ["latin"] });
```

## Performance Optimization

- Server Components for static content
- Image optimization with Next.js Image component
- CSS optimization with Tailwind CSS
- Automatic code splitting
- Turbopack for faster development builds

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

The app can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Self-hosted

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `AIRTABLE_API_KEY` | Your Airtable API key | Yes |
| `AIRTABLE_BASE_ID` | Your Airtable base ID | Yes |
| `AIRTABLE_TABLE_NAME` | Table name (default: RSVP) | No |

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Troubleshooting

### Form Submission Fails

1. Check `.env.local` file exists with correct values
2. Verify Airtable API key has write permissions
3. Ensure table name matches exactly
4. Check browser console for errors

### Styling Issues

1. Run `npm run dev` to ensure Tailwind is compiling
2. Check `tailwind.config.ts` content paths
3. Clear `.next` folder and restart dev server

## License

MIT

## Support

For issues or questions, please open an issue in the repository.
