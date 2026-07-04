# 🏥 Aarogya Club

The official website for **Aarogya Club** — a health & wellness club at NIT Jalandhar dedicated to promoting health awareness, blood donation drives, and community well-being.

> **Live Site** — Deployed on [Vercel](https://vercel.com)

---

## ✨ Features

| Feature | Description |
|---|---|
| **Landing Page** | Animated hero section, "Who Are We", event timeline, "What We Do", and faculty advisors |
| **Blood Bank Portal** | Donor registration, eligibility checker, Blood Ally sign-up, and paginated donor directory |
| **Quiz Module** | Email-verified quiz system with confetti celebrations and result tracking |
| **Team Page** | Showcase of club members with profile cards |
| **Gallery** | Photo gallery of past events and activities |
| **Launch Screen** | Dedicated animated launch/countdown page |
| **Visit Counter** | Tracks and displays site visit count |
| **Google Analytics** | Integrated via `gtag.js` for traffic insights |

---

## 🛠️ Tech Stack

- **Framework** — [React 18](https://react.dev) with [Vite 6](https://vite.dev)
- **Routing** — [React Router v7](https://reactrouter.com) (Browser Router)
- **Styling** — [Tailwind CSS v3](https://tailwindcss.com) + PostCSS + Autoprefixer
- **Animations** — [Framer Motion](https://www.framer.com/motion/) / [Motion](https://motion.dev) + [Lottie](https://lottiefiles.com)
- **Forms** — [React Hook Form](https://react-hook-form.com)
- **Icons** — [React Icons](https://react-icons.github.io/react-icons/) · [Heroicons](https://heroicons.com) · [Tabler Icons](https://tabler.io/icons)
- **Effects** — [canvas-confetti](https://www.npmjs.com/package/canvas-confetti) · [react-confetti](https://www.npmjs.com/package/react-confetti)
- **UI** — [React Fast Marquee](https://www.npmjs.com/package/react-fast-marquee) · [React Vertical Timeline](https://www.npmjs.com/package/react-vertical-timeline-component)
- **Utilities** — [clsx](https://www.npmjs.com/package/clsx) · [tailwind-merge](https://www.npmjs.com/package/tailwind-merge)
- **Backend API** — Hosted on DigitalOcean App Platform
- **Deployment** — [Vercel](https://vercel.com) with SPA rewrites

---

## 📁 Project Structure

```
aarogya-club-main/
├── public/                  # Static assets & visitor counter
├── src/
│   ├── assets/              # Images, SVGs, logos, team photos
│   │   ├── BloodBank/       # Blood bank related assets
│   │   ├── favicon/         # Favicon files
│   │   ├── footer/          # Footer assets
│   │   ├── jury/            # Jury/judge images
│   │   ├── logoparts/       # Logo components
│   │   ├── professorDP/     # Faculty advisor photos
│   │   ├── team/            # Team member photos
│   │   ├── troffee/         # Trophy/award images
│   │   └── whatwedo/        # Activity images
│   ├── components/
│   │   ├── Hero.jsx         # Hero section with animated background
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Footer.jsx       # Site footer
│   │   ├── Mainpage.jsx     # Home page layout
│   │   ├── WhoAreWe.jsx     # Club introduction section
│   │   ├── WhatWeDo.jsx     # Activities showcase
│   │   ├── Timeline.jsx     # Event timeline
│   │   ├── Professors.jsx   # Faculty advisors section
│   │   ├── Team.jsx         # Team members page
│   │   ├── Gallery.jsx      # Photo gallery page
│   │   ├── MainBlood.jsx    # Blood bank portal entry
│   │   ├── BloodForm.jsx    # Blood donation registration form
│   │   ├── BloodAlly.jsx    # Blood Ally sign-up
│   │   ├── Donors.jsx       # Donor directory with pagination
│   │   ├── CheckBlood.jsx   # Eligibility checker
│   │   ├── Quiz.jsx         # Quiz module
│   │   ├── LaunchScreen.jsx # Launch/countdown screen
│   │   ├── counter.jsx      # Visit counter widget
│   │   └── ui/              # Reusable UI primitives
│   ├── context/
│   │   └── AuthContext.jsx  # Authentication context provider
│   ├── utils/
│   │   ├── api.js           # API client (auth, quiz, donors)
│   │   └── image-utils.js   # Image helper utilities
│   ├── App.jsx              # Root component & route definitions
│   ├── main.jsx             # Application entry point
│   ├── index.css            # Global styles
│   ├── quizQuestions.js     # Quiz question bank
│   └── winnerAns.js         # Quiz winner answers/data
├── index.html               # HTML entry point (includes Google Analytics)
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── vite.config.js           # Vite build configuration
├── vercel.json              # Vercel deployment config (SPA rewrites)
├── eslint.config.js         # ESLint configuration
├── package.json             # Dependencies & scripts
└── .env                     # Environment variables
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/aarogya-club-main.git
cd aarogya-club-main

# Install dependencies
npm install
```

### Environment Setup

Create a `.env` file in the project root:

```env
VITE_API_BASE_URL=https://admin-aarogya-3wmj8.ondigitalocean.app
```

> For local backend development, switch to:
> ```env
> VITE_API_BASE_URL=http://localhost:8000
> ```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build & Preview

```bash
# Production build
npm run build

# Preview the production build locally
npm run preview
```

### Linting

```bash
npm run lint
```

---

## 🗺️ Routes

| Path | Page | Description |
|---|---|---|
| `/` | Home | Landing page with hero, about, timeline, activities & faculty |
| `/team` | Team | Club members directory |
| `/gallery` | Gallery | Event photo gallery |
| `/bloodbank` | Blood Bank | Blood donation portal (register, check eligibility, view donors) |
| `/quiz` | Quiz | Email-verified health quiz with leaderboard |
| `/launch` | Launch Screen | Animated launch/event countdown page |

---

## 🔌 API Endpoints

The frontend communicates with a backend hosted on **DigitalOcean App Platform**:

| Endpoint | Method | Purpose |
|---|---|---|
| `/quiz/userInfo` | `POST` | Send email & get verification code |
| `/quiz/verifyUser` | `POST` | Verify user with email + code |
| `/quiz/submit` | `POST` | Submit quiz answer |
| `/ally/donors` | `GET` | Fetch paginated donor list |

---

## 📜 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m "feat: add amazing feature"`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is maintained by **Aarogya Club, NIT Jalandhar**.

---

<p align="center">
  Made with ❤️ by the Aarogya Club Tech Team
</p>
