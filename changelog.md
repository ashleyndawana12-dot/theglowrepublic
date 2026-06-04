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
