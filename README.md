# Lekgegaj Consulting - Premium Law & Business Consulting Website

A premium, modern Next.js website for Lekgegaj Consulting, featuring legal and business consulting services in Durrës, Albania.

## 🎯 Project Overview

**Client:** Lekgegaj Consulting  
**Location:** Durrës, Albania  
**Services:** Legal Services & Business Consulting  
**Website:** https://lekgegaj-consulting.com  
**Built with:** Next.js 14, TypeScript, Tailwind CSS, React 18

---

## ✨ Features

### Design & Branding
- ✅ Premium brand identity (Navy + Gold + Cream)
- ✅ Custom typography (Playfair Display, Inter, Cormorant Garamond)
- ✅ Responsive design (Mobile-first approach)
- ✅ Smooth animations and transitions
- ✅ Professional color palette with accessibility standards

### Pages
- ✅ **Home** - Hero section, services overview, process, CTA
- ✅ **Services** - Detailed legal and business consulting services
- ✅ **About** - Company story, values, team members
- ✅ **Contact** - Contact form, office location, embedded map, office photo

### Functionality
- ✅ Contact form with validation
- ✅ Click-to-call buttons
- ✅ WhatsApp integration
- ✅ Embedded Google Map
- ✅ Office exterior photo display
- ✅ Responsive navigation
- ✅ Mobile-optimized layout

### SEO & Performance
- ✅ JSON-LD schema markup (LocalBusiness, LegalService, ProfessionalService)
- ✅ Meta tags and Open Graph
- ✅ Optimized images with next/image
- ✅ Lighthouse 95+ target
- ✅ Mobile-first responsive design
- ✅ Fast page load times
- ✅ Security headers configured

### Content
- ✅ English content (complete)
- ✅ Albanian content (complete)
- ✅ Professional copywriting
- ✅ Service descriptions
- ✅ Team information
- ✅ Contact details

---

## 📁 Project Structure

```
lekgegaj-consulting/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with metadata
│   │   ├── page.tsx                # Home page
│   │   ├── globals.css             # Global styles
│   │   ├── services/
│   │   │   └── page.tsx            # Services page
│   │   ├── about/
│   │   │   └── page.tsx            # About page
│   │   └── contact/
│   │       └── page.tsx            # Contact page
│   └── components/
│       ├── Header.tsx              # Navigation header
│       ├── Footer.tsx              # Footer component
│       └── SchemaMarkup.tsx        # SEO schema components
├── public/
│   ├── favicon.ico                 # Favicon
│   ├── apple-touch-icon.png        # Apple touch icon
│   └── uploads/
│       └── IMG_20260225_211215.jpg # Office photo
├── package.json                    # Dependencies
├── tsconfig.json                   # TypeScript config
├── tailwind.config.ts              # Tailwind configuration
├── next.config.ts                  # Next.js configuration
├── postcss.config.js               # PostCSS configuration
├── .eslintrc.json                  # ESLint configuration
├── .gitignore                      # Git ignore rules
├── .env.example                    # Environment variables template
├── BRAND_GUIDELINES.md             # Brand system documentation
├── IMAGE_GENERATION_PROMPTS.md     # AI image prompts
├── WEBSITE_COPY.md                 # Website content (EN & AL)
└── DEPLOYMENT_INSTRUCTIONS.md      # Deployment guide
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone repository:**
```bash
git clone https://github.com/yourusername/lekgegaj-consulting.git
cd lekgegaj-consulting
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create environment file:**
```bash
cp .env.example .env.local
```

4. **Start development server:**
```bash
npm run dev
```

5. **Open browser:**
Visit `http://localhost:3000`

---

## 🛠️ Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Type checking
npm run type-check
```

---

## 🎨 Brand System

### Color Palette
- **Primary Navy:** #0F1B3C
- **Accent Gold:** #C9A961
- **Background Cream:** #F8F7F4
- **Text Charcoal:** #1A1A1A

### Typography
- **Headings:** Playfair Display (700)
- **Body:** Inter (400, 500, 600)
- **Accents:** Cormorant Garamond (400, 600)

### Design System
- Spacing scale (4px base unit)
- Custom button styles
- Card components
- Icon system (Lucide React)
- Responsive grid layout

---

## 📱 Responsive Design

- **Mobile:** 320px - 640px
- **Tablet:** 641px - 1024px
- **Desktop:** 1025px+
- **Large Desktop:** 1920px+

All pages are fully responsive and mobile-optimized.

---

## 🔍 SEO Features

### Meta Tags
- Title tags optimized for each page
- Meta descriptions
- Open Graph tags
- Twitter Card tags
- Canonical URLs

### Schema Markup
- LocalBusiness schema
- LegalService schema
- ProfessionalService schema
- Structured data for search engines

### Performance
- Image optimization
- Code splitting
- Lazy loading
- Caching strategies

---

## 📧 Contact Information

**Legal Services:**
- Attorney: Av. Tone Lekgegaj
- Phone: +355 69 208 2624
- WhatsApp: wa.me/355692082624

**Business Consulting:**
- Consultant: Pjerin Lekgegaj
- Phone: +355 68 208 2624
- WhatsApp: wa.me/355682082624

**General Inquiries:**
- Email: info@lekgegaj-consulting.com
- Address: Lagjia nr.11, Rr. "Aleksander Goga", Pazari Bizantin, Durrës, Albania

---

## 🚢 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel auto-deploys on push
4. Add custom domain in Vercel dashboard

See `DEPLOYMENT_INSTRUCTIONS.md` for detailed instructions.

### Other Platforms
- Netlify
- Self-hosted VPS
- Docker containers

---

## 📊 Performance Targets

- **Lighthouse Performance:** 95+
- **Lighthouse Accessibility:** 95+
- **Lighthouse Best Practices:** 95+
- **Lighthouse SEO:** 100
- **Page Load Time:** < 2 seconds
- **First Contentful Paint:** < 1 second

---

## 🔒 Security

- ✅ HTTPS enabled
- ✅ Security headers configured
- ✅ XSS protection
- ✅ CSRF protection
- ✅ Content Security Policy
- ✅ No sensitive data in code
- ✅ Environment variables secured

---

## 📚 Documentation

- `BRAND_GUIDELINES.md` - Complete brand system
- `IMAGE_GENERATION_PROMPTS.md` - AI image prompts
- `WEBSITE_COPY.md` - Website content (English & Albanian)
- `DEPLOYMENT_INSTRUCTIONS.md` - Deployment guide

---

## 🎯 Key Pages

### Home Page
- Hero section with headline
- Trust & authority cards
- Services overview (Legal & Business)
- Process section (4 steps)
- Call-to-action section

### Services Page
- Legal services (6 services)
- Business consulting (5 services)
- Detailed descriptions
- Service cards with icons

### About Page
- Company story
- Core values (6 values)
- Team members (2 professionals)
- Call-to-action

### Contact Page
- Contact information cards
- Office location with photo
- Embedded Google Map
- Contact form
- WhatsApp/Call buttons

---

## 🔧 Technologies Used

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Lucide React
- **Fonts:** Google Fonts
- **Deployment:** Vercel
- **Version Control:** Git

---

## 📝 License

This project is proprietary and confidential. All rights reserved to Lekgegaj Consulting.

---

## 👥 Team

**Brand Direction & Design:**
- Senior Brand Director
- Art Director

**Development:**
- Next.js Engineer

**Client:**
- Lekgegaj Consulting

---

## 📞 Support

For questions or issues:
- Email: info@lekgegaj-consulting.com
- Phone: +355 69 208 2624

---

## 🎉 Project Status

✅ **Complete and Ready for Production**

- Brand system: Complete
- Website design: Complete
- All pages: Complete
- SEO optimization: Complete
- Performance optimization: Complete
- Deployment ready: Yes

---

**Version:** 1.0.0  
**Last Updated:** February 2026  
**Status:** Production Ready
