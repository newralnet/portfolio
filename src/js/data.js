const PORTFOLIO_DATA = {
  hero: {
    name: "Mohan Seetha",
    role: "Software Developer",
    qualification: "BTech in CSE @ GIET",
    imageSrc: "/src/assets/hero.jpg",
    imageAlt: "portfolio hero image",
  },
  about: {
    label: "01 / Profile",
    title: "About Me",
    description:
      "Software developer focused on building reliable full-stack products that solve real user problems. I turn ideas into production-ready applications with clean architecture, measurable performance, and a polished user experience.",
    experienceTitle: "Experience",
    educationTitle: "Education",
    experience: [
      {
        duration: "JAN 2025 — MAR 2025",
        role: "Full Stack Development Intern",
        organization: "Godavari Institute of Engineering and Technology",
      },
    ],
    education: [
      {
        duration: "SEP 2022 — APR 2026 | CGPA: 8.8 / 10",
        degree: "B.Tech in Computer Science (AI & ML)",
        organization: "Godavari Institute of Engineering and Technology",
      },
    ],
  },
  projectsSection: {
    label: "02 / Curation",
    title: "Selected Projects",
  },
  projects: [
    {
      title: "Feed Focus",
      metric: "10K+ Articles/Day",
      summary:
        "News platform processing 10,000+ daily articles across 150+ feeds with responsive topic filtering.",
      live: "https://feedfocused.vercel.app/",
      github: "https://github.com/mohans44/feedfocus",
    },
    {
      title: "Flick Deck",
      metric: "1M+ Dataset",
      summary:
        "Personalized movie journal with recommendation engine for 1M+ records and sub-second search latency.",
      live: "https://flickdeck.vercel.app/",
      github: "https://github.com/mohans44/flickdeck",
    },
    {
      title: "GGU UniPass",
      metric: "1,500+ Users",
      summary:
        "Digital hall-ticket and verification workflow used by 1,500+ students for exam operations.",
      live: "https://giet-unipass.vercel.app/",
      github: "https://github.com/giet-intern/giet-unipass",
    },
    {
      title: "Job Finder",
      metric: "Role-Based",
      summary:
        "Role-based job portal with secure application tracking for recruiter and candidate workflows.",
      live: "https://job-finder-web.web.app/",
      github: "https://github.com/mohans44/job-finder",
    },
  ],
  discourse: {
    label: "03 / Discourse",
    title: "Writing & Research",
    items: [
      {
        meta: "Research Paper · IEEE Xplore",
        title:
          "Multi-Asset Cryptocurrency Price Forecasting Using Attention-Enhanced LSTM",
        url: "https://doi.org/10.1109/DECoN67170.2025.11447794",
      },
      {
        meta: "Technical Writing · Medium",
        title: "Compilers and How They Work",
        url: "https://medium.com/@mohansseetha/compilers-and-how-they-work-a7f20f2e3061",
      },
      {
        meta: "Technical Writing · Medium",
        title: "Designing a Robust Notification System",
        url: "https://medium.com/@mohansseetha/the-unsung-hero-of-messaging-apps-designing-a-robust-notification-system-c8ed97a357f5",
      },
    ],
  },
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mohansseetha/",
    },
    {
      label: "Read.CV",
      href: "/src/assets/mohan_resume_sde.pdf",
    },
    {
      label: "GitHub",
      href: "https://github.com/mohans44",
    },
    {
      label: "Email",
      href: "mailto:mohansseetha@gmail.com",
    },
  ],
  signature: "Mohan Seetha",
};
