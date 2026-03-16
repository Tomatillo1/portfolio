/**
 * Fichier de traductions françaises (FR)
 * Contient tous les textes affichés sur le portfolio en français.
 * Structure organisée par section pour faciliter la maintenance.
 */

export const fr = {
  /* ===== HEADER / NAVIGATION ===== */
  header: {
    home: "Accueil",
    stack: "Stack",
    projects: "Projets",
    about: "À propos",
    contact: "Contact",
    cta: "Télécharger CV",
  },

  /* ===== SECTION HERO ===== */
  hero: {
    name: "Votre Nom",
    subtitle: "Créateur d'expériences digitales",
    description:
      "Développeur passionné, je conçois des interfaces modernes et performantes. Je transforme vos idées en expériences web mémorables avec les dernières technologies.",
    cta: "Découvrir mes projets",
    scrollHint: "Défiler vers le bas",
  },

  /* ===== SECTION STACK TECHNIQUE ===== */
  stack: {
    title: "Stack Technique",
    subtitle: "Mes outils et technologies",
    categories: [
      {
        title: "Intelligence Artificielle",
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
        items: ["Figma", "UI/UX", "Prototypage", "Lorem Ipsum"],
      },
      {
        title: "Marketing",
        icon: "Megaphone",
        items: ["SEO", "Analytics", "Growth", "Lorem Ipsum"],
      },
      {
        title: "Communication",
        icon: "MonitorSmartphone",
        items: ["Copywriting", "Stratégie", "Lorem", "Ipsum"],
      },
      {
        title: "Logiciels",
        icon: "LayoutGrid",
        items: ["Adobe Suite", "Notion", "Slack", "Lorem"],
      },
    ],
  },

  /* ===== SECTION PROJETS ===== */
  projects: {
    title: "Projets",
    subtitle: "Découvrez mes dernières réalisations",
    viewProject: "Voir le projet",
    items: [
      {
        title: "Projet Alpha",
        description:
          "Application web moderne avec une interface utilisateur intuitive et réactive.",
        tags: ["React", "Node.js", "MongoDB"],
        link: "#",
      },
      {
        title: "Projet Beta",
        description:
          "Plateforme e-commerce complète avec système de paiement intégré.",
        tags: ["Svelte", "Stripe", "PostgreSQL"],
        link: "#",
      },
      {
        title: "Projet Gamma",
        description:
          "Dashboard d'analytics temps réel avec visualisations de données interactives.",
        tags: ["TypeScript", "D3.js", "Firebase"],
        link: "#",
      },
      {
        title: "Projet Delta",
        description:
          "Application mobile cross-platform pour la gestion de tâches.",
        tags: ["React Native", "Redux", "Express"],
        link: "#",
      },
      {
        title: "Projet Epsilon",
        description:
          "API REST robuste avec documentation Swagger et tests automatisés.",
        tags: ["Node.js", "Jest", "Swagger"],
        link: "#",
      },
      {
        title: "Projet Zeta",
        description:
          "Portfolio créatif avec animations avancées et mode sombre.",
        tags: ["SvelteKit", "Tailwind", "Framer"],
        link: "#",
      },
    ],
  },

  /* ===== SECTION À PROPOS ===== */
  about: {
    title: "À propos",
    subtitle: "Mon parcours",
    experiences: [
      {
        year: "2024",
        role: "Développeur Full-Stack Senior",
        company: "Tech Corp",
        description:
          "Lead technique sur des projets d'envergure. Mise en place d'architectures scalables et formation d'équipes juniors.",
        skills: ["React", "Node.js", "AWS", "Docker"],
      },
      {
        year: "2022",
        role: "Développeur Front-End",
        company: "Startup Innovation",
        description:
          "Conception et développement d'interfaces utilisateur modernes. Optimisation des performances web et implémentation de tests.",
        skills: ["Vue.js", "TypeScript", "Sass", "Jest"],
      },
      {
        year: "2020",
        role: "Développeur Web Junior",
        company: "Agence Digitale",
        description:
          "Développement de sites web responsives et d'applications web. Collaboration avec les designers UX/UI.",
        skills: ["HTML/CSS", "JavaScript", "PHP", "WordPress"],
      },
    ],
  },

  /* ===== SECTION CENTRES D'INTÉRÊT ===== */
  interests: {
    title: "Centres d'intérêt",
    items: [
      { name: "Technologie", icon: "Monitor" },
      { name: "Photographie", icon: "Camera" },
      { name: "Voyage", icon: "Plane" },
      { name: "Musique", icon: "Music" },
      { name: "Sport", icon: "Dumbbell" },
      { name: "Lecture", icon: "BookOpen" },
    ],
  },

  /* ===== SECTION CONTACT ===== */
  contact: {
    title: "Contact",
    subtitle: "Travaillons ensemble",
    form: {
      name: "Votre nom",
      email: "Votre email",
      subject: "Sujet",
      message: "Votre message",
      send: "Envoyer le message",
    },
    info: {
      title: "Informations de contact",
      email: "votre@email.com",
      phone: "+33 6 12 34 56 78",
      location: "Paris, France",
    },
    social: {
      title: "Réseaux sociaux",
    },
  },

  /* ===== FOOTER ===== */
  footer: {
    rights: "© 2024 Votre Nom. Tous droits réservés.",
    links: {
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
    },
  },
};

/** Type exporté pour garantir la cohérence entre langues */
export type Translations = typeof fr;
