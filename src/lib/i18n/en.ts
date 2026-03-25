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
    about: "About",
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
    title: "Technicals skills",
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
    items: [
      {
        title: "Project Alpha",
        description:
          "Modern web application with an intuitive and responsive user interface.",
        tags: ["React", "Node.js", "MongoDB"],
        link: "#",
      },
      {
        title: "Project Beta",
        description:
          "Complete e-commerce platform with integrated payment system.",
        tags: ["Svelte", "Stripe", "PostgreSQL"],
        link: "#",
      },
      {
        title: "Project Gamma",
        description:
          "Real-time analytics dashboard with interactive data visualizations.",
        tags: ["TypeScript", "D3.js", "Firebase"],
        link: "#",
      },
      {
        title: "Project Delta",
        description: "Cross-platform mobile application for task management.",
        tags: ["React Native", "Redux", "Express"],
        link: "#",
      },
      {
        title: "Project Epsilon",
        description:
          "Robust REST API with Swagger documentation and automated tests.",
        tags: ["Node.js", "Jest", "Swagger"],
        link: "#",
      },
      {
        title: "Project Zeta",
        description:
          "Creative portfolio with advanced animations and dark mode.",
        tags: ["SvelteKit", "Tailwind", "Framer"],
        link: "#",
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
          "UI/UX (vO)",
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
      phone: "+33 6 12 34 56 78",
      location: "Toulouse, France",
    },
    social: {
      title: "Social media",
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
