# Pictures With Magic - Next.js Migration

This is a complete migration of [pictureswithmagic.com](https://pictureswithmagic.com) from Wix to a modern Next.js application with full functionality.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL + Prisma ORM
- **Email**: Resend
- **Deployment**: Vercel (frontend) + Railway (database)

## Features

- ✅ 23 pages (all pages from original site)
- ✅ Responsive navigation with multi-level dropdowns
- ✅ Functional contact form with email notifications
- ✅ Database integration for form submissions
- ✅ SEO optimization with metadata
- ✅ Image optimization ready
- 🚧 Photo galleries (structure ready, needs images)
- 🚧 Booking system (pending implementation)

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database (local or Railway/Neon)
- Resend account for email (free tier available)

### Installation

1. **Clone and install dependencies:**

```bash
cd pictureswithmagic-nextjs
npm install
```

2. **Set up environment variables:**

Copy `.env.example` to `.env` and update the values:

```bash
cp .env.example .env
```

Required environment variables:

- `DATABASE_URL`: PostgreSQL connection string
- `RESEND_API_KEY`: Get from [resend.com](https://resend.com)
- `NEXT_PUBLIC_SITE_URL`: Your site URL (use http://localhost:3000 for local)

3. **Set up the database:**

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev --name init

# (Optional) Open Prisma Studio to view database
npx prisma studio
```

4. **Run the development server:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Testing the Contact Form

### Option 1: With Resend (Recommended)

1. Sign up at [resend.com](https://resend.com) (free tier: 100 emails/day)
2. Get your API key from the dashboard
3. Add the API key to `.env`:
   ```
   RESEND_API_KEY="re_xxxxxxxxxxxxxxxxxxxxxxxxxxxx"
   ```
4. In Resend, verify your sender domain or use their test domain
5. Update the `from` address in `src/lib/email.ts` if needed
6. Navigate to [http://localhost:3000/contact](http://localhost:3000/contact)
7. Fill out and submit the form
8. Check your email for the notification

### Option 2: Without Email (Database Only)

If you don't want to set up email right now, you can test database storage:

1. Comment out the email sending code in `src/app/api/contact/route.ts`:
   ```typescript
   // await sendEmail({ ... });
   ```
2. Submit the form
3. Open Prisma Studio to verify the data was saved:
   ```bash
   npx prisma studio
   ```
4. View the `Contact` table to see your submission

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── contact/       # Contact form endpoint
│   ├── services/          # Services pages
│   ├── galleries/         # Gallery pages
│   ├── training/          # Training/workshop pages
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   └── testimonials/     # Testimonials page
├── components/
│   ├── forms/            # Form components
│   └── layout/           # Header, Footer, Navigation
├── lib/
│   ├── db.ts            # Prisma client
│   ├── email.ts         # Email service
│   └── validation.ts    # Zod schemas
└── config/
    ├── site.ts          # Site configuration
    └── navigation.ts    # Navigation structure
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npx prisma studio` - Open database viewer
- `npx prisma migrate dev` - Create new migration
- `npx prisma generate` - Regenerate Prisma client

## Database Schema

### Contact Model

```prisma
model Contact {
  id        String   @id @default(cuid())
  name      String
  email     String
  phone     String?
  message   String
  service   String?
  status    String   @default("new")
  createdAt DateTime @default(now())
}
```

## Next Steps

### Immediate

1. **Get a Resend API key** and test the contact form
2. **Set up a production database** (Railway or Neon)
3. **Add real gallery images** to replace placeholders

### Phase 5 - Advanced Features

1. Implement booking system with calendar
2. Add admin dashboard for managing contacts/bookings
3. Implement photo gallery with lightbox
4. Add CMS for easy content updates

### Phase 6 - Deployment

1. Deploy to Vercel
2. Configure custom domain
3. Set up production database
4. Configure email sender domain
5. Add analytics (Google Analytics)
6. Set up error tracking (Sentry)

## Environment Variables Reference

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `DATABASE_URL` | PostgreSQL connection string | Yes | `postgresql://user:pass@localhost:5432/db` |
| `RESEND_API_KEY` | Resend API key for emails | Yes* | `re_xxxxxxxxxxxx` |
| `NEXT_PUBLIC_SITE_URL` | Site URL | No | `http://localhost:3000` |
| `SENTRY_DSN` | Sentry error tracking | No | Leave blank if unused |

*Required only if you want email functionality. The form will still save to database without it.

## Troubleshooting

### Database Connection Issues

- Make sure PostgreSQL is running locally
- Check your `DATABASE_URL` is correct
- Run `npx prisma generate` if you see Prisma errors

### Email Not Sending

- Verify your Resend API key is correct
- Check the sender email is verified in Resend
- Look for errors in the terminal/console
- Check Resend dashboard for delivery status

### Build Errors

- Delete `.next` folder and rebuild
- Make sure all dependencies are installed (`npm install`)
- Check for TypeScript errors (`npm run build`)

## Migration Progress

- [x] Phase 1: Project foundation and setup
- [x] Phase 2: Layout and navigation
- [x] Phase 3: All pages created
- [x] Phase 4: Contact form functional
- [ ] Phase 5: Advanced features (booking, galleries, admin)
- [ ] Phase 6: Deployment and launch

## License

This project is private and proprietary to Pictures With Magic.
