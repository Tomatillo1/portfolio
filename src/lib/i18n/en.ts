/**
 * Fichier de traductions anglaises (EN)
 * Contient tous les textes affichés sur le portfolio en anglais.
 * Même structure que fr.ts pour cohérence.
 */

import type { Translations } from "./fr";

export const en: Translations = {
  /* ===== HEADER / NAVIGATION ===== */
  header: {
    home: "Home",
    stack: "Skills",
    projects: "Projects",
    about: "Experiences",
    contact: "Contact",
    cta: "Download CV",
  },

  /* ===== SECTION HERO ===== */
  hero: {
    name: "Thomas Farkas",
    subtitle: "Digital Marketing & AI",
    description:
      "Master's student in Digital Marketing & AI, I merge creativity with technical performance to scale online presence. From SEO strategy to web design, I turn every challenge into a measurable growth lever.",
    cta: "Discover my projects",
    scrollHint: "Scroll down",
  },

  /* ===== SECTION STACK TECHNIQUE ===== */
  stack: {
    title: "Technical skills",
    subtitle: "My tools and technologies",
    categories: [
      {
        title: "Artificial Intelligence",
        icon: "BrainCircuit",
        items: [
          "LLM Optimization",
          "Prompt Engineering",
          "Generative Design",
          "RAG & Knowledge Base",
          "AI Automation",
          "AI Agentic Frameworks",
          "AI Data Analysis",
        ],
      },
      {
        title: "Code",
        icon: "CodeXml",
        items: [
          "HTML5 / Semantic UI",
          "Tailwind CSS",
          "JavaScript (ES6+)",
          "SvelteKit",
          "Supabase",
          "Github",
          "PWA (Progressive Web App)",
        ],
      },
      {
        title: "Design",
        icon: "Palette",
        items: [
          "Figma (Protypage UX/UI)",
          "Photoshop",
          "Illustrator",
          "Indesign",
          "Canva",
          "Premiere Pro",
        ],
      },
      {
        title: "Marketing",
        icon: "Megaphone",
        items: [
          "Growth Marketing",
          "Technical SEO",
          "Data Analytics",
          "Marketing Automation",
          "CMS Management",
          "CRM Strategy",
          "Cloud Hosting",
          "Emailing (Brevo, Mailchimp)",
        ],
      },
      {
        title: "Communication",
        icon: "MonitorSmartphone",
        items: [
          "Brand Identity",
          "Copywriting",
          "Social Media Strategy",
          "Communication Strategy",
        ],
      },
      {
        title: "Software",
        icon: "LayoutGrid",
        items: [
          "LLM (Claude, Gemini, NotebookLM, ...)",
          "Vibe Coding (Antigravity & Google AI Studio)",
          "IA Design (Stitch & v0)",
          "Automation (N8N)",
          "SEO (SemRush)",
          "Google Analytics (GA4)",
          "Cloud Hosting (O2switch)",
          "Notion (Workspace)",
          "Microsoft 365",
        ],
      },
    ],
  },

  /* ===== SECTION PROJETS ===== */
  projects: {
    title: "Projects",
    subtitle: "Discover my latest work",
    viewProject: "View project",
    tasks: "My missions: ",
    items: [
      {
        logo: "/logos/logo_ff_conseils.jpg",
        title: "FF Conseils",
        description:
          "Creation and launch of a public policy training activity for elected officials and local authorities.",
        tags: [
          "Marketing",
          "Branding",
          "vO",
          "N8N",
          "SEO",
          "Supabase",
          "Cloud Hosting",
          "Business Plan",
          "Vibe Coding",
          "AI",
        ],
        missions: [
          "Business Strategy: Market research, offer definition, and business model development.",
          "Brand Identity: Full creation of branding, graphic guidelines, and communication plan.",
          "Digital & Ops: Showcase website development, SEO, Inbound/Outbound strategy, and management automation.",
          "Steering: Initial audit and 2-year strategic roadmap.",
        ],
      },
      {
        logo: "/logos/logo_mylego.jpg",
        title: "MyLego",
        description:
          "Development of a PWA to manage LEGO collections, addressing the lack of official tools.",
        tags: [
          "SvelteKit",
          "Tailwind CSS",
          "HTML",
          "Supabase",
          "v0",
          "N8N",
          "Newsletter",
          "Agentic AI",
          "Vercel",
          "Scraping",
          "Github",
        ],
        missions: [
          "Tech Stack: Developed with SvelteKit, Tailwind CSS, and Supabase (Auth & DB) to master full-stack fundamentals.",
          "Data Engineering: JS scripts for automated data scraping (product specs and retirement dates).",
          "Automation (n8n): Complex monthly synchronization workflow (Scraping > Google Sheets > Supabase) with duplicate management and backups.",
          "Agentic AI: AI agent integration for automated short descriptions and newsletter generation.",
        ],
      },
      {
        logo: "/logos/logo_sparks.jpg",
        title: "Sparks",
        description:
          "Startup specializing in neuro-motor analysis and performance for Sports & Corporate sectors.",
        tags: [
          "Rebranding",
          "Marketing",
          "Communication",
          "UX/UI",
          "PWA",
          "Growth",
          "Business Plan",
          "Audit",
          "Project Management",
        ],
        missions: [
          "Audit & Rebranding: Complete overhaul of the brand strategy for the parent company and its product lines (Motion/Pulse).",
          "Strategic Marketing: PESTEL/SWOT analysis, SMART objectives, and profitability planning.",
          "Product Design: PWA (Progressive Web App) design: wireframing, prototyping, and coded functional demo.",
          "Growth: Inbound content strategy and operational marketing plan for fundraising.",
          "Project Management: Initial audit, steering, and full project coordination.",
        ],
      },
    ],
  },

  /* ===== SECTION ABOUT ===== */
  about: {
    title: "Professional experiences",
    subtitle: "My journey",
    missions: "My missions: ",
    experiences: [
      {
        year: "2025-Now",
        role: "Freelance",
        company: "FTS 360",
        description: [
          "Web Design: Creation of optimized websites (SEO & UI/UX).",
          "Branding: Development of visual identities and graphic guidelines.",
          "Data & Market: Competitive audits and performance analysis.",
          "SEO: Technical and on-page optimization.",
          "Automation: Workflow automation & productivity optimization.",
          "Prompt Engineering: Advanced prompting for various LLMs.",
        ],
        skills: [
          "Marketing",
          "Branding",
          "UI/UX",
          "Antigravity",
          "SvelteKit",
          "Supabase",
          "O2switch",
          "SEO",
          "N8N",
          "GA4",
        ],
      },
      {
        year: "2025 (4 mois)",
        role: "Sales Assistant",
        company: "Dunnes Stores l Ireland",
        description: [
          "Professional English immersion.",
          "Inventory management, customer advisory, and product merchandising.",
        ],
        skills: ["English"],
      },
      {
        year: "2024-2025 (5 mois)",
        role: "English courses in Ireland",
        company: "ELI School",
        description: [
          "5 month immersive stay in an Irish host family.",
          "C1 Advanced English certification course (5 months).",
        ],
        skills: ["English"],
      },
      {
        year: "2023 - 2024 (1 an)",
        role: "B3 apprenticeship: webmarketing",
        company: "Lécopot l Couiza",
        description: [
          "Development and redesign of e-commerce platforms.",
          "Digital strategy development: emailing, data analysis, SEO.",
          "Content creation for social media.",
          "Implementation of inbound marketing strateges",
        ],
        skills: [
          "Wordpress",
          "Prestashop",
          "Extensions(Elementor & Yaost SEO)",
          "Themes (Astra & Hello)",
          "WooCommerce",
          "Mailchimp & Brevo",
          "UberSuggest",
          "Social medias",
          "Canva & Photoshop",
        ],
      },
      {
        year: "2023 (3 mois)",
        role: "B2 Internship: CMS",
        company: "Quentin Trompeau l Toulouse",
        description: [
          "Design and development of showcase and e-commerce websites.",
          "UX/UI Prototyping & Wireframing.",
          "Cloud hosting management.",
          "Search Engine Optimization (SEO).",
        ],
        skills: [
          "Wordpress",
          "Extensions(Elementor, Crocoblocks & Yaost SEO)",
          "Themes (Astra & Hello)",
          "WooCommerce",
          "Photoshop",
          "Figma",
          "O2switch",
        ],
      },
      {
        year: "2022 (2 mois)",
        role: "B1 Internship: Communication",
        company: "GBC l Toulouse",
        description: [
          "SEO copywriting: service descriptions and metadata optimization.",
          "Content creation: social medias.",
          "Search Engine Optimization (SEO).",
          "Brand identity, communication strategy, and marketing collateral.",
        ],
        skills: [
          "Social medias",
          "Canva",
          "Adobe suite",
          "Microsoft 365",
          "Various SEO tools",
        ],
      },
    ],
  },

  /* ===== SECTION CENTRES D'INTÉRÊT ===== */
  interests: {
    title: "Hobbies and interests",
    subtitle: "Discover me",
    items: [
      { name: "Chess", icon: "ChessKnight" },
      { name: "Legos", icon: "ToyBrick" },
      { name: "Astronomy", icon: "Telescope" },
      { name: "Travelling", icon: "Plane" },
      { name: "History", icon: "History" },
      { name: "Reading", icon: "BookOpen" },
    ],
  },

  /* ===== SECTION CONTACT ===== */
  contact: {
    title: "Contact",
    subtitle: "Let's work together",
    form: {
      name: "Your name",
      email: "Your mail",
      subject: "Subject",
      message: "Your message",
      send: "Send the message",
      sending: "Sending in progress...",
      success: "Message sent successfully! I will reply to you shortly.",
      error: "An error has occurred. Please try again later.",
    },
    info: {
      title: "Contact information",
      email: "farkasthomas2003@gmail.com",
      phone: "+33 6 88 44 20 05",
      location: "Toulouse, France",
    },
    social: {
      title: "Social medias",
    },
  },

  /* ===== FOOTER ===== */
  footer: {
    title: "Thomas Farkas",
    subtitle: "Webmarketing Apprentice & Tech Enthusiast",
    location: "Based in Toulouse",
    rights: "© 2026 Thomas Farkas. All rights reserved.",
  },
};
