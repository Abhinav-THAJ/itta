# ITTA Academy - Premium Trading Academy Platform

This is a world-class, premium trading academy website built for **ITTA – International Trading Training Academy**.

## Features
- **Premium Fintech UI**: Dark luxury theme with blue and silver aesthetics.
- **5 Core Pages**: Home, About Us, Courses, Portal, Contact.
- **Student Portal**: Netflix-style learning interface with lesson navigation and progress tracking.
- **Admin Dashboard**: Manage courses, students, and view revenue analytics.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
- **Modern Animations**: Powered by Framer Motion.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Components**: Shadcn UI
- **Language**: TypeScript

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Backend Integration (Supabase)**:
   - Create a Supabase project.
   - Set up `courses`, `users`, and `enrollments` tables.
   - Add your Supabase URL and Anon Key to `.env.local`.

4. **Payment Integration (Razorpay)**:
   - Create a Razorpay account.
   - Add your Key ID and Key Secret to `.env.local`.
   - Update the "Enroll Now" buttons in `CoursesPage.tsx` to trigger the Razorpay checkout.

## Project Structure
- `src/app`: Application routes and pages.
- `src/components`: Reusable UI components.
- `src/lib`: Utility functions and configurations.
- `public`: Static assets (Logo, images).

## Contact ITTA
- **Address**: 1st Floor, Relcon Plaza, Opposite LIC, Pattom, Thiruvananthapuram, Kerala
- **Phone**: +91 7907409671
- **Email**: ittaacademy03@gmail.com
