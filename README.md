# Srvixo SA — 3D System Analysis Presentation

A premium, immersive 3D web presentation for the **Servixo Service Marketplace System** System Analysis & Design college project.

## 🎯 Recent Updates (May 2026)

✨ **Major Enhancements:**
- ✅ New **Interactive Table of Contents** with 5 navigable sections
- ✅ Added **3 new diagrams**: DFD-Level-0, DFD-Level-1, Feasibility Study
- ✅ Improved **3D Model** positioning - fully visible now
- ✅ Enhanced **Overview** section with detailed description
- ✅ **Email integration** - contact form opens mail client
- ✅ Cleaner **Footer** design - removed unnecessary icons
- ✅ Better **Team section** - organized supervision vertically
- ✅ Brand update: **Srvixo SA** (System Analysis)

## Project Info

- **System**: Servixo — Service Marketplace Platform
- **Course**: System Analysis (Srvixo SA)
- **Doctor**: Dr. Nesma Ibrahim
- **TA**: Eng. Menna El-Zawawy
- **Team 6**:
  - Ahmed Ezzat (Presentation Lead)
  - El-Sayed Helmy (Team Lead)
  - Khaled Abukhalifa (Developer)
  - Raneem Eissa (Analyst)
  - Rowan El-Khatib (Designer)
  - Shahd Lotfy (Tester)
- **Year**: 2025-2026

## Features

### 🎨 Design & UI
- **Interactive Table of Contents** — 5 sections with smooth navigation
- **3D Worker Character** — Animated 3D worker with mouse tracking
- **Dark Premium UI** — Glassmorphism, custom cursor, grain texture, glow effects
- **Responsive Design** — Works on desktop, tablet, and mobile

### 📊 Content Sections
- **Diagram Gallery** — DFD, Use Case, Activity, Context, Feasibility with zoom modal
- **Use Case Specifications** — Full UC details with flows
- **SDLC Timeline** — Visual development phases
- **Team Showcase** — Member cards with roles and social links
- **Download Center** — PDF downloads for diagrams

### ⚙️ Functionality
- **Zoom Diagrams** — Click any diagram to expand
- **Email Integration** — Contact form opens mail client
- **Smooth Navigation** — Table of contents jumps to sections
- **PDF Downloads** — All diagrams available as PDFs

## Tech Stack

- React 18 + TypeScript
- Next.js 14
- Three.js + React Three Fiber + Drei
- GSAP + ScrollTrigger
- Tailwind CSS
- Framer Motion
- Lucide React

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000)

## File Structure

```
app/
├── sections/
│   ├── Hero.tsx                    # Main hero with 3D model
│   ├── TableOfContents.tsx         # Interactive index (NEW)
│   ├── Overview.tsx                # Project overview
│   ├── Diagrams.tsx                # All diagrams including new DFDs
│   ├── SDLC.tsx                    # Development lifecycle
│   ├── UseCases.tsx                # Use case details
│   ├── Team.tsx                    # Team members
│   └── Contact.tsx                 # Contact form & footer
├── components/
│   ├── Navbar.tsx                  # Navigation bar
│   ├── Worker3D.tsx                # 3D character
│   └── ...
└── page.tsx                        # Main page

public/diagrams/
├── DFD-Level-0.png                 # NEW
├── DFD-Level-1.png                 # NEW
├── fesability.png                  # NEW
├── context-diagram.png
├── use-case-diagram.png
├── activity-diagram.png
├── casual-page-1.png
├── casual-page-2.png
└── casual-page-3.png
```

## Adding Diagrams

Place PNG images in `/public/diagrams/`:

```
DFD-Level-0.png
DFD-Level-1.png
fesability.png
context-diagram.png
use-case-diagram.png
activity-diagram.png
casual-page-1.png
casual-page-2.png
casual-page-3.png
```

And PDF versions for downloads:

```
DFD-Level-0.pdf
DFD-Level-1.pdf
fesability.pdf
context-diagram.pdf
use-case.pdf
activity-diagram.pdf
casual-descriptions.pdf
sdlc-document.pdf
```

## Customization

- **Colors**: Edit `tailwind.config.ts`
- **3D Worker**: Modify `app/components/Worker3D.tsx`
- **Content**: Update text in section files
- **Team Links**: Edit `app/sections/Team.tsx`
- **Navigation**: Modify table of contents in `app/sections/TableOfContents.tsx`

## Documentation

- **QUICK_START.md** — Quick setup and testing guide
- **CHANGES_SUMMARY.md** — Summary of all changes
- **DETAILED_CHANGES.md** — Detailed breakdown of modifications
- **PDF_GUIDE.md** — Guide for adding PDF files

## Features Checklist

- ✅ New interactive table of contents
- ✅ 3 new diagrams (DFD-0, DFD-1, Feasibility)
- ✅ Improved 3D model visibility
- ✅ Enhanced project description
- ✅ Email integration for contact form
- ✅ Cleaner footer without unnecessary icons
- ✅ Better team section organization
- ✅ Brand update to Srvixo SA
- ✅ Zoom functionality on all diagrams
- ✅ PDF download support

## License

Academic Project — Team 6 — System Analysis 2025-2026

