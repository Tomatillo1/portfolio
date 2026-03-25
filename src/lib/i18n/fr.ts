/**
 * Fichier de traductions françaises (FR)
 * Contient tous les textes affichés sur le portfolio en français.
 * Structure organisée par section pour faciliter la maintenance.
 */

export const fr = {
  /* ===== HEADER / NAVIGATION ===== */
  header: {
    home: "Accueil",
    stack: "Compétences",
    projects: "Projets",
    about: "À propos",
    contact: "Contact",
    cta: "Télécharger CV",
  },

  /* ===== SECTION HERO ===== */
  hero: {
    name: "Thomas Farkas",
    subtitle: "Digital Marketing & IA",
    description:
      "Étudiant en Master Marketing Digital & IA, je fusionne créativité et performance technique pour propulser la présence en ligne des entreprises. De la stratégie SEO à la conception web, je transforme chaque défi en levier de croissance mesurable.",
    cta: "Découvrir mes projets",
    scrollHint: "Défiler vers le bas",
  },

  /* ===== SECTION STACK TECHNIQUE ===== */
  stack: {
    title: "Compétences Technique",
    subtitle: "Mes outils et technologies",
    categories: [
      {
        title: "Intelligence Artificielle",
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
          "SEO Technique",
          "Data Analytics",
          "Marketing Automation",
          "CMS Management (Wordpress, Shopify)",
          "Stratégie CRM ",
          "Gestion d'hébergement",
          "Emailing (Brevo, Mailchimp)",
        ],
      },
      {
        title: "Communication",
        icon: "MonitorSmartphone",
        items: [
          "Identité de marque",
          "Copywriting",
          "Stratégie Réseaux Sociaux",
          "Stratégie de Communication",
        ],
      },
      {
        title: "Logiciels",
        icon: "LayoutGrid",
        items: [
          "LLM (Claude, Gemini, NotebookLM, ...)",
          "Vibe Coding (Antigravity & Google AI Studio)",
          "IA Design (Stitch & v0)",
          "Automatisation (N8N)",
          "SEO (SemRush)",
          "Google Analytics (GA4)",
          "Hébergement (O2switch)",
          "Notion (Workspace)",
          "Suite Microsoft 365",
        ],
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
    title: "Expériences professionnelles",
    subtitle: "Mon parcours",
    missions: "Mes missions : ",
    experiences: [
      {
        year: "2025-Actuellement",
        role: "Freelance",
        company: "FTS 360",
        description: [
          "Web Design : Création de sites optimisés (SEO & UI/UX).",
          "Branding : Développement d'identités visuelles et chartes graphiques.",
          "Data & Market : Audits concurrentiels et analyse de performance.",
          "SEO : Optimisation technique et sémantique.",
          "Automation : Workflows productif.",
          "Prompt Engineering : diverses IA.",
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
        role: "Assistant vente",
        company: "Dunnes Stores l Irlande",
        description: [
          "Mise en pratique de mon anglais.",
          "Mise en rayon, entretien, conseil client et valorisation des produits.",
        ],
        skills: ["Anglais"],
      },
      {
        year: "2024-2025 (5 mois)",
        role: "Séjour linguistique en Irlande",
        company: "ELI School",
        description: [
          "5 mois dans une famille d’accueil irlandaise.",
          "5 mois dans une école de langue niveau C1",
        ],
        skills: ["Anglais"],
      },
      {
        year: "2023 - 2024 (1 an)",
        role: "B3 Alternance : webmarketing",
        company: "Lécopot l Couiza",
        description: [
          "Création de sites e-commerce.",
          "Refonte de sites e-commerce.",
          "Création d'une stratégie digitale : emailing, analyse de données, SEO.",
          "Création de contenus pour les réseaux sociaux.",
          "Implémentation d'une stratégie inbound marketing",
        ],
        skills: [
          "Wordpress",
          "Prestashop",
          "Extensions(Elementor & Yaost SEO)",
          "Thèmes (Astra & Hello)",
          "WooCommerce",
          "Mailchimp & Brevo",
          "UberSuggest",
          "Réseaux sociaux",
          "Canva & Photoshop",
        ],
      },
      {
        year: "2023 (3 mois)",
        role: "B2 Stage : CMS",
        company: "Quentin Trompeau l Toulouse",
        description: [
          "Création & refonte de site vitrine.",
          "Création & refonte de site e-commerce.",
          "Maquette UX/UI.",
          "Hébergement web.",
          "Référencement naturel (SEO).",
        ],
        skills: [
          "Wordpress",
          "Extensions(Elementor, Crocoblocks & Yaost SEO)",
          "Thèmes (Astra & Hello)",
          "WooCommerce",
          "Photoshop",
          "Figma",
          "O2switch",
        ],
      },
      {
        year: "2022 (2 mois)",
        role: "B1 Stage : Communication",
        company: "GBC l Toulouse",
        description: [
          "Rédaction publicitaire : descriptions de services avec les métadonnées.",
          "Création de contenu : réseaux sociaux.",
          "Référencement naturel (SEO).",
          "Branding : création de la marque, communication, supports, etc.",
        ],
        skills: [
          "Réseaux sociaux",
          "Canva",
          "Suite Adobe",
          "Suite Microsoft 365",
          "Diverses outils SEO",
        ],
      },
    ],
  },

  /* ===== SECTION CENTRES D'INTÉRÊT ===== */
  interests: {
    title: "Centres d'intérêt",
    subtitle: "Découvrez-moi",
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
      sending: "Envoi en cours...",
      success: "Message envoyé avec succès ! Je vous répondrai rapidement.",
      error: "Une erreur est survenue. Réessayez plus tard.",
    },
    info: {
      title: "Informations de contact",
      email: "farkasthomas2003@gmail.com",
      phone: "+33 6 12 34 56 78",
      location: "Toulouse, France",
    },
    social: {
      title: "Réseaux sociaux",
    },
  },

  /* ===== FOOTER ===== */
  footer: {
    title: "Thomas Farkas",
    subtitle: "Alternant Webmarketing & Passionné de Tech",
    location: "Basé à Toulouse",
    rights: "© 2026 Thomas Farkas. Tous droits réservés.",
  },
};

/** Type exporté pour garantir la cohérence entre langues */
export type Translations = typeof fr;
