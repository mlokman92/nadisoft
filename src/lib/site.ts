// Single source of truth for all Nadisoft site content.
// Transcribed from the Nadisoft Tech PLT Corporate Profile 2026–2030 blueprint.
// Pages compose this data; they should not hard-code copy that lives here.

import type { IconName } from "@/components/icons";

export type NavItem = { label: string; href: string };

export const company = {
  name: "Nadisoft",
  legalName: "Nadisoft Tech PLT",
  llpNo: "202604001087 (LLP0046318-LGN)",
  incorporation: "05 May 2026",
  coreOperations: "Software Development, IT Solutions & Digital Services",
  brandTagline: "Technology Forward",
  headline: "Technology Forward. Nation Ready.",
  oneLiner: "A digital execution partner for Malaysia's next growth era.",
  profileTitle: "Corporate Profile 2026–2030",
  footerMotto: "Proudly rooted in Johor, built for the world.",
  description:
    "Nadisoft is a Johor-based technology company delivering innovative digital solutions that drive progress, efficiency, and growth for businesses.",
  address: {
    line1: "11, Jalan Padi 10, Bandar Baru UDA",
    line2: "81200 Johor Bahru, Johor",
    region: "Johor, Malaysia",
  },
  phone: "+60 11-14419690",
  phoneHref: "tel:+601114419690",
  email: "info@nadisoft.com",
  emailHref: "mailto:info@nadisoft.com",
  website: "nadisoft.com.my",
  websiteHref: "https://nadisoft.com.my",
} as const;

export const founders = [
  "Mohd Hafiz Bin Mohd Lizan",
  "Mohd Nasharudin Bin Misri",
  "Muhamad Lokman Bin Ar'Azmi",
] as const;

// Organisations whose logos appear in the homepage "trusted by" carousel.
// Assets live in public/logos/.
export const partners: { name: string; file: string }[] = [
  { name: "Kementerian Kesihatan Malaysia (KKM)", file: "KKM.svg" },
  { name: "DESA", file: "DESA.svg" },
  { name: "Pharmaniaga", file: "PHARMANIAGA.svg" },
  { name: "Jabatan Kerja Raya (JKR)", file: "JKR.svg" },
];

export const nav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "Technology", href: "/technology" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Contact", href: "/contact" },
];

// ── Vision & Mission ─────────────────────────────────────────────
export const visionMission = {
  partnerLabel: "The Digital Execution Partner",
  manifesto: "Build practical technology that creates measurable national impact.",
  vision: {
    title: "Vision 2030",
    body: "To become one of Malaysia's most trusted digital transformation companies powering smart industries, connected communities, and intelligent operations across Southeast Asia.",
  },
  mission: {
    title: "Mission Statement",
    body: "Deliver technology solutions that simplify operations, strengthen governance, improve citizen experiences, and accelerate digital growth for organizations of every scale.",
  },
  closingQuote: "Technology that moves organizations and communities forward.",
  closingBody:
    "Malaysia's digital transition requires secure, scalable, and localized implementation. Nadisoft positions itself not merely as a software vendor, but as the execution partner helping organizations transition into a smarter, connected, and operationally intelligent economy.",
} as const;

// ── Core capability highlights (used on home) ────────────────────
export const capabilities: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "layers",
    title: "Modular Architecture",
    body: "Operationally practical systems designed for district and municipal deployment.",
  },
  {
    icon: "cloud",
    title: "AI-Ready Infrastructure",
    body: "Secure, cloud-scalable platforms with predictive analytics built in.",
  },
  {
    icon: "shield",
    title: "Secure by Design",
    body: "Built with integrity, reliability, and accountability for public and private sectors.",
  },
  {
    icon: "mapPin",
    title: "Deeply Localized",
    body: "Engineered for Malaysian workflows, constraints, and immediate deployment.",
  },
];

// ── Three Core Business Pillars ──────────────────────────────────
export type Pillar = {
  id: string;
  number: string;
  name: string;
  tagline: string;
  icon: IconName;
  summary: string;
  detailHeading: string;
  detailIntro: string;
  features: { icon: IconName; title: string; body?: string }[];
  closing: string;
};

export const pillars: Pillar[] = [
  {
    id: "government",
    number: "I",
    name: "Government Digital Systems",
    tagline: "Secure, scalable platforms for agencies and municipalities.",
    icon: "building",
    summary:
      "Modernizing public service infrastructure with secure, localized platforms for agencies and municipalities.",
    detailHeading: "Modernizing public service infrastructure",
    detailIntro:
      "A Smart District Core connecting the systems that run modern public service — built for secure, localized implementation across Malaysian public sector workflows.",
    features: [
      { icon: "users", title: "Citizen Service Platforms" },
      { icon: "document", title: "Digital Forms & Workflows" },
      { icon: "idCard", title: "Internal Officer Management" },
      { icon: "dashboard", title: "Data Dashboards & Analytics" },
      { icon: "network", title: "Smart District Systems" },
      { icon: "chat", title: "Public Engagement Platforms" },
    ],
    closing:
      "Delivering secure, localized implementation for Malaysian public sector workflows.",
  },
  {
    id: "enterprise",
    number: "II",
    name: "Enterprise & Industry Solutions",
    tagline: "Operational systems for efficiency, automation, and data visibility.",
    icon: "gears",
    summary:
      "Operational systems for efficiency, automation, and data visibility across industry sectors.",
    detailHeading: "Operational efficiency & data visibility",
    detailIntro:
      "ERP-lite operational platforms that scale from a single workshop to national fleets — serving engineering, manufacturing, automotive, utilities, healthcare, facilities, and logistics.",
    features: [
      { icon: "gears", title: "ERP-lite Operational Systems" },
      { icon: "wrench", title: "Maintenance Management & Workforce Coordination" },
      { icon: "gauge", title: "Asset Monitoring Systems" },
      { icon: "chart", title: "Predictive Analytics & AI Reporting" },
    ],
    closing:
      "Automated workflows scaling from single workshops to national fleets.",
  },
  {
    id: "community",
    number: "III",
    name: "Smart Community Platforms",
    tagline: "Technology designed for digital accessibility and local coordination.",
    icon: "globe",
    summary:
      "Technology designed for digital accessibility and local coordination that bridges the digital divide.",
    detailHeading: "Bridging the digital divide",
    detailIntro:
      "Creating ecosystems where rural initiatives, local businesses, and municipal governance intersect seamlessly.",
    features: [
      { icon: "sprout", title: "Transform", body: "Rural transformation and inclusive digital accessibility." },
      { icon: "network", title: "Connect", body: "Smart local governance and community engagement." },
      { icon: "rocket", title: "Empower", body: "SME empowerment systems and economic participation platforms." },
    ],
    closing:
      "Bridging the digital divide by creating ecosystems where rural initiatives, local businesses, and municipal governance intersect seamlessly.",
  },
];

// Industries served by Pillar II
export const industries = [
  "Engineering",
  "Manufacturing",
  "Automotive",
  "Utilities",
  "Healthcare",
  "Facilities",
  "Logistics",
] as const;

export const pillarsClosing =
  "Cross-sector capability improves resilience, allowing innovations in one sector to scale into others.";

// ── Flagship Platform Ecosystem ──────────────────────────────────
export type Product = {
  id: string;
  name: string;
  category: string;
  icon: IconName;
  audience: string;
  features: string[];
  value: string;
};

export const products: Product[] = [
  {
    id: "desa-plus",
    name: "DESA+",
    category: "Rural Transformation",
    icon: "sprout",
    audience: "District councils, rural communities.",
    features: [
      "Issue management",
      "Digital announcements",
      "Local economic tracking",
      "AI reporting",
    ],
    value: "Supports inclusive digital economy and smart community goals.",
  },
  {
    id: "roda-plus",
    name: "roda+",
    category: "Automotive OS",
    icon: "car",
    audience: "Workshops, fleets, service centers.",
    features: [
      "Service scheduling",
      "Inventory monitoring",
      "AI diagnostic integration",
    ],
    value:
      "Standardizes and automates Malaysia's fragmented automotive maintenance sector.",
  },
  {
    id: "karen-plus",
    name: "Karen+",
    category: "Smart Electrical Maintenance",
    icon: "bolt",
    audience: "Residential, SMEs, facility managers.",
    features: [
      "Technician dispatching",
      "Emergency coordination",
      "Subscription management",
    ],
    value: "Captures growing demand for preventive maintenance services.",
  },
];

// ── Technology Foundation ────────────────────────────────────────
export const techFoundation = {
  topLayer: {
    title: "AI-Ready Architecture",
    label: "Top Layer",
    points: [
      "Integrated predictive reporting frameworks.",
      "Intelligent workflows and smart automation layers.",
      "Future-state design for AI copilots in enterprise operations.",
    ],
  },
  baseLayer: {
    title: "Execution-Focused Engineering",
    label: "Base Layer",
    points: [
      "Grounded in real operational use cases.",
      "Built for affordable scalability and practical deployment.",
      "Deeply localized for Malaysian workflows and constraints.",
    ],
  },
  closing:
    "Unlike niche software vendors, we build practical infrastructure designed to evolve seamlessly into AI-assisted operations.",
} as const;

// ── Strategic Alignment Matrix ───────────────────────────────────
export const strategicAlignment = {
  capabilities: [
    "Modular Architecture & Operational Practicality",
    "AI-Ready Infrastructure & Cloud Scalability",
  ],
  rows: [
    {
      mandate: "Government Modernization",
      cells: [
        "Government-compatible systems designed for district and municipal deployment.",
        "Secure, cloud-hosted citizen portals with predictive public service analytics.",
      ],
    },
    {
      mandate: "SME/Enterprise Digitization",
      cells: [
        "Accessible, ERP-lite operational platforms for local businesses.",
        "Automated workflows scaling from single workshops to national fleets.",
      ],
    },
    {
      mandate: "Smart Infrastructure",
      cells: [
        "Smart community platforms connecting rural areas to central grids.",
        "Predictive analytics for maintenance, logistics, and electrical grids.",
      ],
    },
  ],
  closing:
    "Nadisoft aligns directly with national priorities by building technology that is scalable, secure, and ready for immediate deployment.",
} as const;

// ── Malaysia's Digital Acceleration ──────────────────────────────
export const digitalAcceleration = {
  intro:
    "Malaysia is entering a critical modernization window driven by MyDIGITAL, RMK13, and Industry 4.0 initiatives. The government mandates deeper digital economy contribution and wider public service digitalization by 2030.",
  initiatives: [
    "Nationwide 5G expansion & Cloud infrastructure growth",
    "Johor-Singapore economic integration (JS-SEZ)",
    "Smart government & public service modernization",
    "Digital SME transformation & Rural agendas",
    "National AI adoption initiatives",
  ],
} as const;

// ── Johor Strategic Advantage ────────────────────────────────────
export const johorAdvantage = {
  intro:
    "Located in one of Malaysia's fastest-growing digital and industrial regions, Nadisoft leverages its proximity to regional economic engines.",
  points: [
    {
      icon: "network",
      title: "JS-SEZ Ecosystem",
      body: "Immediate proximity to the Johor-Singapore Special Economic Zone.",
    },
    {
      icon: "cloud",
      title: "Digital Infrastructure",
      body: "Benefiting from rapid local data center and cloud investments.",
    },
    {
      icon: "gears",
      title: "Industrial Growth Corridor",
      body: "Embedded within expanding manufacturing and engineering sectors.",
    },
    {
      icon: "globe",
      title: "Singapore Accessibility",
      body: "Direct access to international business networks and capital.",
    },
  ] as { icon: IconName; title: string; body: string }[],
} as const;

// ── Core Corporate Values ────────────────────────────────────────
export const values: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "shield",
    title: "Trust",
    body: "Building systems with integrity, reliability, and accountability.",
  },
  {
    icon: "network",
    title: "Connectivity & Scalability",
    body: "Designing systems to grow across industries and regions.",
  },
  {
    icon: "lightbulb",
    title: "Innovation",
    body: "Creating future-ready platforms with measurable impact.",
  },
  {
    icon: "gears",
    title: "Practicality",
    body: "Ensuring technology solves real operational problems.",
  },
  {
    icon: "chart",
    title: "Nation Building",
    body: "Supporting Malaysia's long-term digital transformation agenda.",
  },
];

// ── 2026–2030 Growth Roadmap ─────────────────────────────────────
export type RoadmapPhase = {
  phase: string;
  title: string;
  period: string;
  items: string[];
};

export const roadmap: RoadmapPhase[] = [
  {
    phase: "Phase 1",
    title: "Foundation Expansion",
    period: "2026",
    items: [
      "Strengthen product ecosystem.",
      "Secure pilot deployments.",
      "Build strategic partnerships.",
      "Expand government engagement.",
    ],
  },
  {
    phase: "Phase 2",
    title: "Regional Scaling",
    period: "2027–2028",
    items: [
      "Multi-state deployments.",
      "Enterprise SaaS expansion.",
      "AI integration rollout.",
      "Managed services growth.",
    ],
  },
  {
    phase: "Phase 3",
    title: "National Ecosystem",
    period: "2029–2030",
    items: [
      "Smart city participation.",
      "National-scale infrastructure partnerships.",
      "Advanced AI operations systems.",
      "ASEAN market exploration.",
    ],
  },
];

// ── Quick stats (used on home / about) ───────────────────────────
export const stats: { value: string; label: string }[] = [
  { value: "3", label: "Core business pillars" },
  { value: "3", label: "Flagship platforms" },
  { value: "2030", label: "National vision horizon" },
  { value: "Johor", label: "Rooted in the JS-SEZ" },
];
