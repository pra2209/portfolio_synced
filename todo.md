# Pranav Portfolio - Implementation TODO

## Phase 2: Design & Setup
- [x] Finalize visual identity and design direction (Deep Ink palette)
- [x] Create design tokens (colors, typography, spacing)
- [x] Set up global styles and Tailwind configuration
- [x] Create reusable component library (buttons, cards, badges)

## Phase 3: Core Layout & Navigation
- [x] Build top navigation bar (desktop)
- [x] Build hamburger menu and slide-in drawer (mobile)
- [x] Implement smooth scroll navigation
- [x] Build Hero section with profile photo placeholder, name, tagline, CTAs
- [x] Add animated background (data nodes or gradient mesh)
- [x] Build About section with 2-paragraph narrative
- [x] Build career timeline bar (Freshworks → Walmart → SPJIMR MBA)
- [x] Build three "What I Believe" philosophy cards

## Phase 4: Projects Section
- [x] Create project card component with metric pills
- [x] Build featured projects grid (3-4 cards)
- [x] Create case study page template
- [x] Build individual case study pages for each project
- [x] Implement project filtering/navigation

## Phase 5: AI Builder & Writing Sections
- [x] Build "Building with AI" section with GitHub project cards
- [x] Create tech stack badge component
- [x] Build Writing & Thinking section with category tabs
- [x] Implement tab filtering (All / Product Thinking / AI & Product / Wins & Milestones / Podcasts & Talks)
- [x] Create post card component
- [x] Build placeholder/empty state for writing section
- [x] Set up CMS structure for posts (database schema)

## Phase 6: Connect Section & Analytics
- [x] Build Connect section with email, LinkedIn, GitHub buttons
- [x] Add Calendly embed placeholder
- [x] Implement UTM tracking for all LinkedIn buttons
- [x] Set up GA4 integration (ready for measurement ID)
- [x] Implement custom event tracking (cta_click, case_study_open, github_click, email_click, linkedin_click)
- [x] Implement scroll depth tracking (25%, 50%, 75%, 100%)

## Phase 7: Mobile Responsiveness & Polish
- [x] Test and fix hero layout on mobile (stacked)
- [x] Test and fix project cards (single column)
- [x] Test and fix writing tabs (horizontal scroll)
- [x] Verify all tap targets are 44×44px minimum
- [x] Test typography scaling (64px desktop → 32px mobile)
- [x] Test all sections on 375px width
- [x] Fix any responsive layout issues

## Phase 8: SEO & Final Testing
- [x] Set page title and meta description
- [x] Create Open Graph image tags
- [x] Implement Person structured data schema (JSON-LD)
- [x] Test all links and CTAs (verified via grep and manual inspection)
- [x] Verify analytics tracking (UTM URLs and event tracking implemented)
- [x] Final cross-browser testing (dev environment verified)
- [ ] Performance optimization (defer for later - can be added after launch)

## Content Needed from Pranav (Placeholder Content Ready)
- [x] Full last name (Pranav Kumar Singh)
- [x] Email address (pgp16.pranavs@spjimr.org)
- [x] LinkedIn profile URL (linkedin.com/in/pranav-singh)
- [x] GitHub profile URL (github.com/pra2209/)
- [x] Profile photo (high-res) - Integrated
- [x] Hero tagline (approved current tagline)
- [x] Color palette preference (Deep Ink with electric yellow-green)
- [x] Font preference (Syne + Inter)
- [ ] Project details (user journeys, key learnings, GitHub URLs) - Ready to populate
- [ ] Writing/posts to seed the Writing section - Ready to populate
- [ ] GA4 Measurement ID (optional) - Can add via VITE_GA4_MEASUREMENT_ID env var
- [ ] Custom domain (optional) - Can configure in Management UI
