 Changelog - The Glow Republic Website

All notable changes to this project will be documented in this file.

Part 2 - 2026

Added
- **External CSS file** (`css/style.css`) with complete styling for all pages
- **Internal CSS** on each page for page-specific styles
- **Inline CSS** on specific elements (buttons, special messages)
- **Stacked text logo** (THE / GLOW / REPUBLIC) displayed as image on all pages
- **Top-left navigation** on all pages for consistent user experience
- **Horizontal scrolling gallery** on home page with 16 before/after images
- **New pages:** Testimonials page with client reviews and star ratings
- **Team section** on About page with staff photos, titles, and detailed bios
- **Features section** on About page with images for location, certified team, clean studio, and walk-ins
- **Service category images** below Facial Treatments, Lash Services, and Brow Services
- **Service menu** with complete pricing for all treatments
- **Before/after badges** (gold for BEFORE, pink for AFTER) on gallery images
- **Contact form** on Contact page with service selection dropdown
- **Business hours** displayed on Contact page
- **Responsive design** with media queries for tablet and mobile devices
- **Hover effects** on cards, buttons, and gallery images

Changed
- **Navigation** from centered to top-left alignment on all pages
- **Logo** from text to image format with white background
- **About page layout** from colored backgrounds to clean white cards with gold borders
- **Vision and Mission statements** placed in white cards with cursive titles
- **Contact page** now uses matching card style (white background, gold border on hover)
- **Color scheme** updated to soft gold (`#d4af37`) and blush pink (`#e8c9c0`) accents
- **Typography** added cursive font for main titles (Brush Script MT)

Fixed
- **Duplicate folder structure** - removed nested `theglowrepublic` folder
- **Services page content** - was identical to Home page, now has complete service menu
- **Image paths** - corrected from `images1.jpg` to `images/images1.jpg`
- **Missing `</p>` tag** in Testimonials page navigation
- **Duplicate DOCTYPE** removed from Contact page
Removed
- **Enquiry page** (merged with Contact page functionality)
- **Duplicate image references** from gallery sections
- **Unused CSS classes** from earlier versions

 Part 1 - Initial Release

Added
- 5 HTML pages: Home, About, Services, Contact, Enquiry
- Basic HTML structure with H1, H2, H3 headings
- Navigation with anchor links between pages
- Placeholder images in gallery sections
- Vision and mission statements on About page
- Service listings with prices on Services page
- Contact information and basic form structure

Next steps

Planned for part 3
- CSS Grid and Flexbox layout enhancements
- Additional responsive breakpoints
- JavaScript form validation
- Image gallery lightbox
- Mobile menu toggle

 [Part 2 Feedback Corrections] - June 2025

 Issues Fixed Based on Lecturer Feedback

. External CSS (Fixed)
- Created `css/style.css` file and uploaded to GitHub
- Added `<link rel="stylesheet" href="css/style.css">` to ALL 5 HTML pages:
  - index.html
  - about.html
  - services.html
  - testimonials.html
  - contact.html
- Verified CSS is correctly linked and applied to all pages

2. Default/Base Styles (Added)
- Added reset styles: `* { margin: 0; padding: 0; box-sizing: border-box; }`
- Added body styles: font-family (Segoe UI), font-size (16px), line-height (1.6), background-color (#faf7f2)
- Added anchor styles: text-decoration: none, color: inherit
- Added image styles: max-width: 100%, height: auto, display: block
- Added list styles: list-style: none for ul and ol

3. Typography Styles (Enhanced)
- Added font-weight: h1 (300), h2 (400), h3 (500)
- Added letter-spacing: h1 (4px), h2 (2px), h3 (1px)
- Added line-height: 1.8 for paragraphs
- Added cursive fonts (Brush Script MT) for `.cursive-title` and `.cursive-main`
- Added font-size variations for all heading levels

4. Layout Structure (Added)
- Added Flexbox for navigation (display: flex, justify-content: flex-start)
- Added Flexbox for services row (3 columns)
- Added Flexbox for team grid (3 columns)
- Added Flexbox for features grid (4 columns)
- Added Flexbox for contact cards (2 columns)
- Added Grid for testimonials/review cards (3 columns on desktop, 1 on mobile)
- Added `.container` class with max-width: 1200px for consistent layout

5. Decoration & Colour (Added)
- Added CSS variables (`:root`) for consistent colours:
  - `--gold: #d4af37`
  - `--gold-light: #e8c9a0`
  - `--pink: #e8c9c0`
  - `--beige: #faf7f2`
  - `--white: #ffffff`
  - `--dark: #4a3b2c`
  - `--text: #5a4a3a`
  - `--border: #e8e0d5`
- Added box-shadow to all cards and buttons
- Added border-radius (12px for cards, 30px for buttons)
- Added gold accent colour (#d4af37) for branding
- Added gradient and shadow effects on hover

6. Pseudo-classes (Added)
- Added `:hover` for:
  - Navigation links (gold colour + underline)
  - Buttons (gold background, scale, shadow)
  - Cards (lift up, gold border, shadow)
  - Gallery items (lift up, gold border)
  - Service rows (background colour change)
  - Visit block (gold border, background change)
- Added `:focus` for:
  - Input fields (gold border + glow shadow)
  - Select dropdowns (gold border + glow shadow)
  - Textareas (gold border + glow shadow)
- Added `:active` for:
  - Buttons (scale down effect)
  - Submit buttons (scale down effect)
- Added `:first-child` for service rows (top gold border)
- Added `:last-child` for service rows (no bottom border)
- Added `:nth-child(even)` for alternating row colours

7. Responsive Design (Added)
- Added media query for tablet (max-width: 1024px)
  - Changed review cards from 3 to 2 columns
  - Adjusted gallery image sizes
- Added media query for mobile (max-width: 768px)
  - Changed all columns to single column
  - Adjusted font sizes for readability
  - Made navigation wrap
  - Reduced logo size
- Added media query for small mobile (max-width: 480px)
  - Further reduced font sizes
  - Adjusted button sizes for touch targets
    
8. Images Added
- Uploaded team photos:
  - Ashley Ndawana (Senior Brow Artist)
  - Natasha Lenonyane (Lead Facial Therapist)
  - Priya Singh (Lash Extension Artist)
  - Team photo

9. File Structure Updated
