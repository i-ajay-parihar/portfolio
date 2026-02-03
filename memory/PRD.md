# Portfolio Website - PRD

## Original Problem Statement
Create a modern, professional, and responsive personal portfolio landing page for Software Developer Ajay Parihar showcasing skills, experience, education, and projects.

## User Persona
**Primary Users:** Recruiters, potential clients, employers, and professional connections
**Goals:** Quickly assess Ajay's technical capabilities, experience, and contact information

## Architecture & Tech Stack
- **Frontend:** React 19, Tailwind CSS, Shadcn UI components
- **Styling:** Custom CSS with dark theme, Inter font
- **Backend:** FastAPI (not yet integrated)
- **Database:** MongoDB (not yet integrated)

## What's Been Implemented (Feb 3, 2026)

### Frontend Components (✓ Complete)
1. **Navigation** - Fixed header with smooth scroll navigation
2. **Hero Section** - Animated background, CTAs, social links
3. **About Section** - Professional summary with highlights
4. **Skills Section** - Three-column grid with progress bars and badges
5. **Experience Section** - Detailed work history at Thoughtwin IT Solutions
6. **Projects Section** - Showcase of Pidhi personal project
7. **Education Section** - MCA degree details with CGPA
8. **Contact Section** - Contact form UI (non-functional)
9. **Footer** - Social links and copyright

### Design Elements (✓ Complete)
- Dark theme (#0a0a0b background)
- Blue accent colors (#3b82f6, #60a5fa)
- Lucide-react icons (no emoji)
- Smooth animations and transitions
- Glass-morphism effects
- Responsive design
- Professional Inter font

### Mock Data (✓ Complete)
- Personal information
- Skills with proficiency levels
- Work experience details
- Project information
- Education credentials
- Social media links (GitHub, LinkedIn, Instagram)

## Prioritized Backlog

### P0 Features (Essential for Full Launch)
- [ ] Backend API for contact form
- [ ] Email notification service
- [ ] Form validation and error handling
- [ ] Success/failure toast notifications

### P1 Features (High Priority)
- [ ] Resume/CV download functionality
- [ ] Project detail modals
- [ ] Animated skill bars on scroll
- [ ] Loading states for form submission

### P2 Features (Nice to Have)
- [ ] Blog section
- [ ] Testimonials/recommendations
- [ ] Dark/light theme toggle
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] Open Graph meta tags

## Next Tasks
1. Implement backend contact form API endpoint
2. Add email sending service (SendGrid/AWS SES)
3. Integrate form with backend
4. Add form validation
5. Implement toast notifications for feedback
6. Test end-to-end contact form flow

## API Contracts (Future)

### POST /api/contact
**Request:**
```json
{
  "name": "string",
  "email": "string",
  "message": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

## Notes
- All frontend is built with mock data
- No backend integration yet (frontend only)
- Contact form shows alert message on submit
- All external links are functional (GitHub, LinkedIn, Instagram)
- Images loaded from Unsplash and custom uploaded profile image
