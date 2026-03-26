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
    about: "Expériences",
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
    title: "Compétences Techniques",
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
    tasks: "Mes missions : ",
    items: [
      {
        logo: "/logos/logo_ff_conseils.jpg",
        title: "FF Conseils",
        description:
          "Création et lancement d'une activité de formation en politiques publiques pour les élus et collectivités.",
        tags: [
          "Marketing",
          "Branding",
          "vO",
          "N8N",
          "SEO",
          "Supabase",
          "Hébergement",
          "Business Plan",
          "Vibe Coding",
          "IA",
        ],
        missions: [
          "Stratégie Business : Étude de marché, définition de l'offre et du modèle économique (Business Plan).",
          "Identité de Marque : Création complète du branding, de la charte graphique et du plan de communication.",
          "Digital & Opérationnel : Développement du site vitrine, SEO, stratégie marketing Inbound/Outbound et mise en place d'automatisations de gestion.",
          "Pilotage : Audit initial et préconisations stratégiques sur 2 ans.",
        ],
      },
      {
        logo: "/logos/logo_mylego.jpg",
        title: "MyLego",
        description:
          "Création d'une plateforme (PWA) de gestion de collection LEGO pour pallier l'absence d'outil officiel.",
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
          "Stack Technique : Développement avec SvelteKit, Tailwind CSS et Supabase (Authentification & DB).",
          "Data Engineering : Création de scripts JS pour le scraping de données (fiches produits et dates de retrait).",
          "Automation (n8n) : Workflow complexe de synchronisation mensuelle (Scraping > Google Sheets > Supabase) avec gestion des doublons et backups.",
          "IA Agentic : Intégration d'un agent IA pour générer automatiquement des descriptions courtes et une newsletter sur les nouveautés.",
        ],
      },
      {
        logo: "/logos/logo_sparks.jpg",
        title: "Sparks",
        description:
          "Start-up spécialisée dans l’analyse neuromotrice et la performance (Sport & Entreprise).",
        tags: [
          "Rebranding",
          "Marketing",
          "Communication",
          "UX/UI",
          "PWA",
          "Growth",
          "Business Plan",
          "Audit",
          "Gestion de projet",
        ],
        missions: [
          "Audit & Rebranding : Refonte totale de la stratégie de marque pour l'entité mère et ses gammes (Motion/Pulse).",
          "Marketing Stratégique : Analyse PESTEL/SWOT, définition d'objectifs SMART et plan de rentabilité.",
          "Product Design : Conception d'une PWA (Progressive Web App) : wireframing, prototypage et démo fonctionnelle codée.",
          "Growth : Stratégie de contenu Inbound et plan de marketing opérationnel pour levée de fonds.",
          "Gestion de projet: Audit initial, pilotage, et coordination complète du projet.",
        ],
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
          "Automation : Workflows productifs.",
          "Prompt Engineering : diverses IA.",
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
        role: "Assistant vente",
        company: "Dunnes Stores - Irlande",
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
        year: "2023-2024 (1 an)",
        role: "B3 Alternance : webmarketing",
        company: "Lécopot - Couiza",
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
        company: "Quentin Trompeau - Toulouse",
        description: [
          "Création & refonte de sites vitrine.",
          "Création & refonte de sites e-commerce.",
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
        company: "GBC - Toulouse",
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
      { name: "Échecs", icon: "ChessKnight" },
      { name: "Legos", icon: "ToyBrick" },
      { name: "Astronomie", icon: "Telescope" },
      { name: "Voyager", icon: "Plane" },
      { name: "Histoire", icon: "History" },
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
      phone: "+33 6 88 44 20 05",
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
