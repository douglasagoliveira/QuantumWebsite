/* ─────────────────────────────────────────────────────────────
   Electrical Services page content
   Source: quantumelectricalsolutions.com.au/electrical-instalations/
   Copy is kept faithful to the published page (AU spelling).
   ───────────────────────────────────────────────────────────── */

export const ELECTRICAL_PAGE = {
  title: "Electrical Services — Quantum Electrical & Technological Services",
  description:
    "Quantum Electrical Solutions has redefined electrical service delivery by evolving from basic site installation into a constructional and design engineering partnership.",
  eyebrow: "Electrical services",
  eyebrowSub: "Sydney · Australia",
  headline: ["Integrated", "electrical", "engineering"],
  subline: "Frictionless constructional and design",
  lead:
    "Quantum Electrical Solutions has redefined electrical service delivery by evolving from basic site installation into a constructional and design engineering partnership. Operating from early conceptual stages through to practical completion, we eliminate the need for makeshift plaster modifications, costly contract variations, and schedule blowouts.",
  ctaPrimary: "Call now for a quote",
  ctaSecondary: "View installations",
  media: {
    primary:
      "/portfolio-home-quantum/sky-house-the-rocks-quantum-electrical-services-7.webp",
    primaryAlt:
      "Sky House at The Rocks — warm architectural cove lighting over a stone kitchen island",
    secondary:
      "/portfolio-home-quantum/the-eveleigh-by-the-grounds-quantum-service-1.webp",
    secondaryAlt:
      "The Eveleigh by The Grounds — layered decorative lighting over a heritage dining room",
    credit: "Sky House · The Rocks",
    creditSub: "Dynalite multi-zone · Curved architectural LED cove",
    place: "Sydney · New South Wales",
  },
  facts: [
    { k: "Contractor licence", v: "478965C" },
    { k: "Master security licence", v: "000109137" },
    { k: "Availability", v: "24/7" },
  ],
} as const;

/* ── Fold 02 — Two operational modalities ──────────────────── */
export type Modality = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
  specs: { k: string; v: string }[];
  deliverables: string[];
};

export const MODALITIES: Modality[] = [
  {
    id: "design",
    index: "01",
    title: "Design Modality",
    subtitle: "Conceptual & planning phase",
    image:
      "/portfolio-home-quantum/sky-house-the-rocks-quantum-electrical-services-5.webp",
    imageAlt:
      "Sky House interior with layered cove lighting and full-height harbour glazing",
    paragraphs: [
      "In direct partnership with electrical consultants and designers, we develop the complete integration of all systems (power infrastructure, KNX/DALI automation, architectural lighting, and electronic security).",
      "We ensure the architect's aesthetic vision is 100% technically viable before construction begins, accurately sizing plant rooms, vertical shafts, and concealed infrastructure paths with zero room for error.",
      "We guarantee full regulatory compliance with NSW DBP Act 2020 Regulated Designs and Sustainable Buildings SEPP (SB SEPP) requirements.",
    ],
    specs: [
      { k: "Stage", v: "Conceptual & planning" },
      { k: "Std", v: "NSW DBP Act 2020" },
      { k: "Draft", v: "SB SEPP" },
    ],
    deliverables: [
      "Complete integration of all systems",
      "Plant room, shaft and concealed path sizing",
      "NSW DBP Act 2020 Regulated Designs",
      "Sustainable Buildings SEPP (SB SEPP)",
    ],
  },
  {
    id: "constructional",
    index: "02",
    title: "Constructional Modality",
    subtitle: "Analysis, optimisation & execution",
    image:
      "/portfolio-home-quantum/melita-stadium-quantum-electrical-and-technological-services.webp",
    imageAlt:
      "Melita Stadium — floodlit pitch and grandstand infrastructure at night",
    paragraphs: [
      "For projects already designed by third-party engineering or architectural firms, our engineering team performs a thorough audit of existing specifications and drawings.",
      "We identify opportunities for value engineering, efficiency improvements, and the resolution of scope gaps that would otherwise trigger expensive contract variations during construction.",
      "We assume the Single Point of Responsibility on site, physically integrating all electrical, automation, and security disciplines under our Contractor Licence (#478965C) and Master Security Licence (#000109137).",
    ],
    specs: [
      { k: "Stage", v: "Audit & execution" },
      { k: "Licence", v: "478965C" },
      { k: "Security", v: "000109137" },
    ],
    deliverables: [
      "Thorough audit of specifications and drawings",
      "Value engineering and efficiency improvements",
      "Resolution of scope gaps before construction",
      "Single Point of Responsibility on site",
    ],
  },
];

/* ── Fold 03 — Key capabilities across both modalities ────── */
export type Capability = {
  id: string;
  index: string;
  title: string;
  body: string;
  meta: string;
  icon: "doc" | "bolt" | "clock";
};

export const CAPABILITIES: Capability[] = [
  {
    id: "ecert",
    index: "01",
    title: "Digital CCEW lodgement via eCert",
    body:
      "Guaranteed digital submission with Building Commission NSW (BCNSW) for defect-free Occupancy Certificate release.",
    meta: "BCNSW",
    icon: "doc",
  },
  {
    id: "demand",
    index: "02",
    title: "Maximum demand calculations & utility coordination",
    body:
      "ASP Level 2 grid connections and main switchboard (MSB) upgrades coordinated directly with Ausgrid and Endeavour Energy.",
    meta: "ASP Level 2",
    icon: "bolt",
  },
  {
    id: "simpro",
    index: "03",
    title: "Traceable project management via SimPRO",
    body:
      "Live schedule tracking, photo-verified QA, and statutory quality assurance.",
    meta: "SimPRO",
    icon: "clock",
  },
];

/* ── Fold 04 — Electrical services · Installations ────────── */
export const INSTALLATIONS: string[] = [
  "Switchboard upgrades",
  "Power points",
  "Kitchen renovations",
  "Bathroom renovations",
  "Lighting projects",
  "LED lighting upgrade",
  "New builds",
  "Granny flats",
  "Safety switches",
  "Exhaust fans",
  "Rangehoods",
  "Ovens",
  "Cooktops",
  "TV antennas",
  "TV installations",
  "Main switch board",
  "Distribution boards",
  "Cabling & reticulation systems",
  "UPS systems",
  "Electrical low voltage systems",
  "Motor start and control",
  "General & specialty lighting",
  "Emergency lighting & monitoring",
  "Lighting control",
  "Equipment housing",
  "Earthing systems",
  "Pump maintenance",
];

/* ── Fold 05 — Some of our projects ───────────────────────── */
export type ElectricalProject = {
  id: string;
  index: string;
  title: string;
  place: string;
  spec: string;
  image: string;
  href: string;
};

export const ELECTRICAL_PROJECTS: ElectricalProject[] = [
  {
    id: "sky-house",
    index: "01",
    title: "Sky House",
    place: "The Rocks, Sydney Harbour",
    spec: "Dynalite multi-zone · Curved architectural LED cove",
    image:
      "/portfolio-home-quantum/sky-house-the-rocks-quantum-electrical-services-3.webp",
    href: "/#projects",
  },
  {
    id: "eveleigh",
    index: "02",
    title: "The Eveleigh",
    place: "South Eveleigh, Sydney",
    spec: "Heritage industrial fit-out · DMX theatrical lighting",
    image:
      "/portfolio-home-quantum/the-eveleigh-quantum-electrical-technological-services.jpg",
    href: "/#projects",
  },
  {
    id: "palas",
    index: "03",
    title: "Palas Commercial",
    place: "Surry Hills, Sydney",
    spec: "Warehouse conversion · Architectural cable reticulation",
    image: "/portfolio-home-quantum/palas-quantum-electrical-services-2.webp",
    href: "/#projects",
  },
];
