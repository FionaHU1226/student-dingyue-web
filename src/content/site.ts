export type LinkItem = { label: string; href: string };

export const site = {
  name: "Dingyue Zhang",
  tagline: "Psychology × Education × Business — building human-centered learning experiences.",
  /** Shown on badges — “Education:” before NYU for quick scanning */
  location: "Education: NYU · New York, NY",
  contact: {
    email: "zhangdingyue1115@sina.com",
    phone: "+86 138 0136 1233",
  },
  nav: [
    { label: "Personal", href: "#personal" },
    { label: "Playground", href: "#play" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Blog", href: "#blog" },
    { label: "Research", href: "#research" },
    { label: "Contact", href: "#contact" },
  ] satisfies LinkItem[],
  highlights: [
    {
      label: "Education",
      title: "NYU — Applied Psychology (M.A.)",
      detail: "GPA 3.872/4.00 • expected May 2027",
    },
    {
      label: "Athletics",
      title: "Former Chinese National Alpine Ski Team",
      detail: "World Championships & World Junior Championships (2023)",
    },
    {
      label: "Experience",
      title: "Marketing + education programming",
      detail:
        "Adidas TERREX, a contemporary art museum, and sports media — brands, audiences, and learning moments.",
    },
  ],
  portfolio: [
    {
      label: "Research",
      title: "Adolescent Justice (Developmental Science) — Translation & Commentary",
      blurb:
        "A reader-friendly translation plus notes connecting developmental psychology and policy.",
      tags: ["Developmental psych", "Science communication", "Education systems"],
    },
    {
      label: "Programs",
      title: "Museum public education programs",
      blurb:
        "Designed and supported visitor-facing learning experiences and exhibition interpretation.",
      tags: ["Learning design", "Audience research", "Facilitation"],
    },
    {
      label: "Media",
      title: "Sports media & attention",
      blurb:
        "Observed how storytelling and framing shape cognition and audience engagement in media.",
      tags: ["Media psychology", "Behavior", "Analytics mindset"],
    },
  ],
  researchWriting: [
    {
      title: "Rethinking Adolescents’ Justice through Developmental Science (OPUSzines)",
      meta: "Spring 2026 • NYU student psychology publication",
      blurb:
        "Uses developmental psychology and neuroscience to analyze adolescent decision-making, plus real-world cases on how systems shape outcomes.",
      image:
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=900&q=80",
    },
  ],
  now: [
    "Exploring child & adolescent mental health and evidence-based learning design.",
    "Building a portfolio of mini explainers: “psych concepts, but practical.”",
    "Open to research assistant roles and education/psych/business cross-over projects.",
  ],
  blog: [
    {
      date: "Apr 2026",
      title: "Mini explainer: why adolescent decisions are not “small adult” decisions",
      excerpt:
        "A friendly note on developmental windows, context, and what educators can do in real classrooms.",
      tag: "Development",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    },
    {
      date: "Mar 2026",
      title: "Curiosity-first tours: what I learned from museum public education",
      excerpt:
        "How pacing, questions, and sensory anchors change whether visitors stay engaged (and remember).",
      tag: "Education",
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=900&q=80",
    },
    {
      date: "Feb 2026",
      title: "From training logs to learning habits",
      excerpt:
        "What elite sport taught me about feedback loops, recovery, and translating discipline into study design.",
      tag: "Performance",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80",
    },
  ],
  skillsCardImage:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  languagesCardImage:
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
} as const;

