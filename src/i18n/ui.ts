export const LANGS = ["en", "fr", "es"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "en";

export const LANG_NAMES: Record<Lang, string> = { en: "English", fr: "Français", es: "Español" };
export const OG_LOCALES: Record<Lang, string> = { en: "en_US", fr: "fr_FR", es: "es_ES" };

export const PAGE_PATHS = {
  home: "",
  expertise: "expertise/",
  experience: "experience/",
  contact: "contact/",
} as const;
export type PageKey = keyof typeof PAGE_PATHS;

export const CONTACT = {
  email: "clement.rieux@yahoo.com",
  linkedin: "https://www.linkedin.com/in/ClementRieux/",
  github: "https://github.com/clementrx",
} as const;

interface PageMeta {
  title: string;
  description: string;
}

interface SkillGroup {
  label: string;
  items: string[];
}

interface UI {
  meta: Record<PageKey, PageMeta>;
  nav: { label: string; items: Record<Exclude<PageKey, "home">, string> };
  skipLink: string;
  languageLabel: string;
  theme: { toDark: string; toLight: string };
  home: {
    role: string;
    lead: string;
    portraitAlt: string;
    ctaExperience: string;
    ctaContact: string;
    domainsTitle: string;
  };
  expertise: {
    title: string;
    intro: string;
    inShort: string;
    toolbox: string;
    certificationsTitle: string;
    verify: string;
  };
  experience: {
    title: string;
    intro: string;
    work: string;
    education: string;
    skills: string;
    languages: string;
    present: string;
    skillGroups: SkillGroup[];
    spokenLanguages: string[];
  };
  contact: {
    title: string;
    intro: string;
    availability: string;
    emailLabel: string;
  };
  notFound: { title: string; text: string; back: string };
}

export const ui = {
  en: {
    meta: {
      home: {
        title: "Clément Rieux — Data Scientist",
        description:
          "Clément Rieux, data scientist at EDF: machine learning, time series forecasting, computer vision and reliable data pipelines.",
      },
      expertise: {
        title: "Expertise — Clément Rieux",
        description:
          "Data science and machine learning in Python and R, AI agents and LLM applications, Anthropic certifications, working style and athletic background.",
      },
      experience: {
        title: "Experience — Clément Rieux",
        description:
          "Career, education and skills of Clément Rieux, data scientist at EDF, previously consultant at Epsilon France for EDF and SFR.",
      },
      contact: {
        title: "Contact — Clément Rieux",
        description:
          "Get in touch with Clément Rieux, data scientist, about a permanent position or a freelance data science project.",
      },
    },
    nav: {
      label: "Main",
      items: { expertise: "Expertise", experience: "Experience", contact: "Contact" },
    },
    skipLink: "Skip to content",
    languageLabel: "Language",
    theme: { toDark: "Switch to dark theme", toLight: "Switch to light theme" },
    home: {
      role: "Data Scientist at EDF",
      lead: "I build machine learning models that hold up outside the notebook: time series forecasting, computer vision, scoring. Most of my work is the part that rarely makes it onto slides: sound validation, honest numbers and pipelines that keep running.",
      portraitAlt: "Black and white portrait of Clément Rieux",
      ctaExperience: "See my background",
      ctaContact: "Get in touch",
      domainsTitle: "What I work on",
    },
    expertise: {
      title: "Expertise",
      intro: "What I can do and how I work.",
      inShort: "In short",
      toolbox: "Toolbox",
      certificationsTitle: "Anthropic certifications",
      verify: "Verify",
    },
    experience: {
      title: "Experience",
      intro:
        "Data scientist since 2019, first as a consultant, now in-house at EDF. Trained as an economist at the Toulouse School of Economics.",
      work: "Work experience",
      education: "Education",
      skills: "Skills",
      languages: "Languages",
      present: "present",
      skillGroups: [
        { label: "Programming", items: ["Python", "R", "SQL"] },
        {
          label: "Data",
          items: [
            "pandas",
            "Polars",
            "NumPy",
            "scikit-learn",
            "PySpark",
            "Oracle",
            "Hive",
            "PostgreSQL",
          ],
        },
        {
          label: "Modelling",
          items: [
            "Time series",
            "Classification",
            "NLP",
            "RAG",
            "Machine learning",
            "Deep learning",
            "Reinforcement learning",
            "Econometrics",
          ],
        },
        {
          label: "Production",
          items: ["Pipelines", "Datamarts", "R Shiny", "Docker", "AWS", "GCP", "Git", "CI"],
        },
        {
          label: "AI agents",
          items: [
            "Claude API",
            "Claude Code",
            "Codex",
            "MCP",
            "Agent skills",
            "Local LLMs (Ollama, MLX)",
          ],
        },
      ],
      spokenLanguages: ["French: native", "English: fluent", "Spanish: intermediate"],
    },
    contact: {
      title: "Contact",
      intro:
        "Whether you are hiring or have a project in mind, email is the quickest way to reach me. I usually reply within a few days.",
      availability: "Open to discussing permanent positions as well as freelance projects.",
      emailLabel: "Email",
    },
    notFound: {
      title: "Page not found",
      text: "This page does not exist or has moved.",
      back: "Back to the home page",
    },
  },
  fr: {
    meta: {
      home: {
        title: "Clément Rieux — Data scientist",
        description:
          "Clément Rieux, data scientist chez EDF : machine learning, prévision de séries temporelles, vision par ordinateur et pipelines de données fiables.",
      },
      expertise: {
        title: "Expertise — Clément Rieux",
        description:
          "Data science et machine learning en Python et R, agents IA et applications LLM, certifications Anthropic, méthode de travail et parcours sportif.",
      },
      experience: {
        title: "Parcours — Clément Rieux",
        description:
          "Parcours, formation et compétences de Clément Rieux, data scientist chez EDF, auparavant consultant chez Epsilon France pour EDF et SFR.",
      },
      contact: {
        title: "Contact — Clément Rieux",
        description:
          "Contacter Clément Rieux, data scientist, pour un poste en CDI ou une mission freelance en data science.",
      },
    },
    nav: {
      label: "Principal",
      items: { expertise: "Expertise", experience: "Parcours", contact: "Contact" },
    },
    skipLink: "Aller au contenu",
    languageLabel: "Langue",
    theme: { toDark: "Passer au thème sombre", toLight: "Passer au thème clair" },
    home: {
      role: "Data scientist chez EDF",
      lead: "Je construis des modèles de machine learning qui tiennent la route hors du notebook : prévision de séries temporelles, vision par ordinateur, scoring. L'essentiel de mon travail, c'est ce qu'on montre rarement : une validation solide, des chiffres honnêtes et des pipelines qui tournent dans la durée.",
      portraitAlt: "Portrait en noir et blanc de Clément Rieux",
      ctaExperience: "Voir mon parcours",
      ctaContact: "Me contacter",
      domainsTitle: "Mes domaines",
    },
    expertise: {
      title: "Expertise",
      intro: "Ce que je sais faire et comment je travaille.",
      inShort: "En bref",
      toolbox: "Boîte à outils",
      certificationsTitle: "Certifications Anthropic",
      verify: "Vérifier",
    },
    experience: {
      title: "Parcours",
      intro:
        "Data scientist depuis 2019, d'abord comme consultant, aujourd'hui en interne chez EDF. Formé à l'économie à la Toulouse School of Economics.",
      work: "Expérience professionnelle",
      education: "Formation",
      skills: "Compétences",
      languages: "Langues",
      present: "aujourd'hui",
      skillGroups: [
        { label: "Programmation", items: ["Python", "R", "SQL"] },
        {
          label: "Données",
          items: [
            "pandas",
            "Polars",
            "NumPy",
            "scikit-learn",
            "PySpark",
            "Oracle",
            "Hive",
            "PostgreSQL",
          ],
        },
        {
          label: "Modélisation",
          items: [
            "Séries temporelles",
            "Classification",
            "NLP",
            "RAG",
            "Machine learning",
            "Deep learning",
            "Apprentissage par renforcement",
            "Économétrie",
          ],
        },
        {
          label: "Production",
          items: ["Pipelines", "Datamarts", "R Shiny", "Docker", "AWS", "GCP", "Git", "CI"],
        },
        {
          label: "Agents IA",
          items: [
            "Claude API",
            "Claude Code",
            "Codex",
            "MCP",
            "Skills d'agent",
            "LLM locaux (Ollama, MLX)",
          ],
        },
      ],
      spokenLanguages: [
        "Français : langue maternelle",
        "Anglais : courant",
        "Espagnol : intermédiaire",
      ],
    },
    contact: {
      title: "Contact",
      intro:
        "Que vous recrutiez ou que vous ayez un projet en tête, l'email est le moyen le plus rapide de me joindre. Je réponds en général sous quelques jours.",
      availability: "Ouvert à échanger sur un poste en CDI comme sur une mission freelance.",
      emailLabel: "Email",
    },
    notFound: {
      title: "Page introuvable",
      text: "Cette page n'existe pas ou a été déplacée.",
      back: "Retour à l'accueil",
    },
  },
  es: {
    meta: {
      home: {
        title: "Clément Rieux — Data scientist",
        description:
          "Clément Rieux, data scientist en EDF: machine learning, previsión de series temporales, visión por computadora y pipelines de datos fiables.",
      },
      expertise: {
        title: "Especialidades — Clément Rieux",
        description:
          "Ciencia de datos y machine learning en Python y R, agentes de IA y aplicaciones LLM, certificaciones de Anthropic, forma de trabajar y trayectoria deportiva.",
      },
      experience: {
        title: "Trayectoria — Clément Rieux",
        description:
          "Trayectoria, formación y competencias de Clément Rieux, data scientist en EDF, antes consultor en Epsilon France para EDF y SFR.",
      },
      contact: {
        title: "Contacto — Clément Rieux",
        description:
          "Contactar con Clément Rieux, data scientist, para un puesto fijo o un proyecto freelance de ciencia de datos.",
      },
    },
    nav: {
      label: "Principal",
      items: { expertise: "Especialidades", experience: "Trayectoria", contact: "Contacto" },
    },
    skipLink: "Saltar al contenido",
    languageLabel: "Idioma",
    theme: { toDark: "Cambiar al tema oscuro", toLight: "Cambiar al tema claro" },
    home: {
      role: "Data scientist en EDF",
      lead: "Construyo modelos de machine learning que funcionan fuera del notebook: previsión de series temporales, visión por computadora, scoring. La mayor parte de mi trabajo es lo que rara vez aparece en las presentaciones: una validación sólida, cifras honestas y pipelines que siguen funcionando con el tiempo.",
      portraitAlt: "Retrato en blanco y negro de Clément Rieux",
      ctaExperience: "Ver mi trayectoria",
      ctaContact: "Contactarme",
      domainsTitle: "Mis áreas",
    },
    expertise: {
      title: "Especialidades",
      intro: "Lo que sé hacer y cómo trabajo.",
      inShort: "En resumen",
      toolbox: "Herramientas",
      certificationsTitle: "Certificaciones de Anthropic",
      verify: "Verificar",
    },
    experience: {
      title: "Trayectoria",
      intro:
        "Data scientist desde 2019, primero como consultor y ahora en plantilla en EDF. Formado en economía en la Toulouse School of Economics.",
      work: "Experiencia profesional",
      education: "Formación",
      skills: "Competencias",
      languages: "Idiomas",
      present: "actualidad",
      skillGroups: [
        { label: "Programación", items: ["Python", "R", "SQL"] },
        {
          label: "Datos",
          items: [
            "pandas",
            "Polars",
            "NumPy",
            "scikit-learn",
            "PySpark",
            "Oracle",
            "Hive",
            "PostgreSQL",
          ],
        },
        {
          label: "Modelización",
          items: [
            "Series temporales",
            "Clasificación",
            "NLP",
            "RAG",
            "Machine learning",
            "Deep learning",
            "Aprendizaje por refuerzo",
            "Econometría",
          ],
        },
        {
          label: "Producción",
          items: ["Pipelines", "Datamarts", "R Shiny", "Docker", "AWS", "GCP", "Git", "CI"],
        },
        {
          label: "Agentes de IA",
          items: [
            "Claude API",
            "Claude Code",
            "Codex",
            "MCP",
            "Skills de agente",
            "LLM locales (Ollama, MLX)",
          ],
        },
      ],
      spokenLanguages: ["Francés: lengua materna", "Inglés: fluido", "Español: intermedio"],
    },
    contact: {
      title: "Contacto",
      intro:
        "Tanto si está contratando como si tiene un proyecto en mente, el email es la forma más rápida de contactarme. Suelo responder en pocos días.",
      availability: "Abierto a hablar de un puesto fijo o de un proyecto freelance.",
      emailLabel: "Email",
    },
    notFound: {
      title: "Página no encontrada",
      text: "Esta página no existe o se ha movido.",
      back: "Volver a la página de inicio",
    },
  },
} satisfies Record<Lang, UI>;
