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
    stack: "Stack",
    projects: "Projects",
    about: "About",
    contact: "Contact",
    cta: "Download CV",
  },

  /* ===== SECTION HERO ===== */
  hero: {
    name: "Your Name",
    subtitle: "Digital Experience Creator",
    description:
      "Passionate developer crafting modern and high-performance interfaces. I turn your ideas into memorable web experiences using the latest technologies.",
    cta: "Discover my projects",
    scrollHint: "Scroll down",
  },

  /* ===== SECTION STACK TECHNIQUE ===== */
  stack: {
    title: "Tech Stack",
    subtitle: "My tools and technologies",
    categories: [
      {
        title: "Artificial Intelligence",
        icon: "BrainCircuit",
        items: ["Machine Learning", "NLP", "Computer Vision", "Lorem Ipsum"],
      },
      {
        title: "Code",
        icon: "CodeXml",
        items: ["React", "Next.js", "TypeScript", "Node.js", "Python"],
      },
      {
        title: "Design",
        icon: "Palette",
        items: ["Figma", "UI/UX", "Prototyping", "Lorem Ipsum"],
      },
      {
        title: "Marketing",
        icon: "Megaphone",
        items: ["SEO", "Analytics", "Growth", "Lorem Ipsum"],
      },
      {
        title: "Communication",
        icon: "MonitorSmartphone",
        items: ["Copywriting", "Strategy", "Lorem", "Ipsum"],
      },
      {
        title: "Software",
        icon: "LayoutGrid",
        items: ["Adobe Suite", "Notion", "Slack", "Lorem"],
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
    title: "About",
    subtitle: "My journey",
    experiences: [
      {
        year: "2024",
        role: "Senior Full-Stack Developer",
        company: "Tech Corp",
        description:
          "Technical lead on large-scale projects. Building scalable architectures and mentoring junior teams.",
        skills: ["React", "Node.js", "AWS", "Docker"],
      },
      {
        year: "2022",
        role: "Front-End Developer",
        company: "Startup Innovation",
        description:
          "Design and development of modern user interfaces. Web performance optimization and test implementation.",
        skills: ["Vue.js", "TypeScript", "Sass", "Jest"],
      },
      {
        year: "2020",
        role: "Junior Web Developer",
        company: "Digital Agency",
        description:
          "Development of responsive websites and web applications. Collaboration with UX/UI designers.",
        skills: ["HTML/CSS", "JavaScript", "PHP", "WordPress"],
      },
    ],
  },

  /* ===== SECTION INTERESTS ===== */
  interests: {
    title: "Interests",
    items: [
      { name: "Technology", icon: "Monitor" },
      { name: "Photography", icon: "Camera" },
      { name: "Travel", icon: "Plane" },
      { name: "Music", icon: "Music" },
      { name: "Sports", icon: "Dumbbell" },
      { name: "Reading", icon: "BookOpen" },
    ],
  },

  /* ===== SECTION CONTACT ===== */
  contact: {
    title: "Contact",
    subtitle: "Let's work together",
    form: {
      name: "Your name",
      email: "Your email",
      subject: "Subject",
      message: "Your message",
      send: "Send message",
    },
    info: {
      title: "Contact information",
      email: "your@email.com",
      phone: "+33 6 12 34 56 78",
      location: "Paris, France",
    },
    social: {
      title: "Social media",
    },
  },

  /* ===== FOOTER ===== */
  footer: {
    rights: "© 2024 Your Name. All rights reserved.",
    links: {
      privacy: "Privacy Policy",
      terms: "Terms of Use",
    },
  },
};
