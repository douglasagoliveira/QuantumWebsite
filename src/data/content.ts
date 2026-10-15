import dusk from "@/assets/house-dusk.jpg";
import arch from "@/assets/house-arch.jpg";
import glow from "@/assets/house-glow.jpg";

export const CONTACT = {
  phoneDisplay: "0406 025 213",
  phoneHref: "tel:+61406025213",
  email: "info@quantumelec.net",
  region: "Sydney · New South Wales · Australia",
  director: "Geovani Percurandi",
  directorRole: "Managing Director",
} as const;

export const NAV = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Lighting Effect", href: "#lighting" },
  { label: "Engineering", href: "#engineering" },
  { label: "Sectors", href: "#sectors" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

/* ── Fold 02 — Pillars ─────────────────────────────────────── */
export type Pillar = {
  id: string;
  index: string;
  title: string;
  tagline: string;
  body: string;
  image: string;
  specs: { k: string; v: string }[];
  deliverables: string[];
};

export const PILLARS: Pillar[] = [
  {
    id: "design",
    index: "01",
    title: "Design & Construction",
    tagline: "Pre-construction electrical design",
    body: "We join the drawing set before a single conduit is bent — coordinating services, load schedules and set-out with your architect and builder so the electrical scope is priced, programmed and locked while it is still cheap to change.",
    image:
      "https://images.pexels.com/photos/13752246/pexels-photo-13752246.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
    specs: [
      { k: "Stage", v: "Pre-construction" },
      { k: "Std", v: "AS/NZS 3000" },
      { k: "Output", v: "Fixed lump sum" },
    ],
    deliverables: [
      "Load schedules & demand calculation",
      "Switchboard and riser coordination",
      "Set-out drawings issued to site",
      "New builds, granny flats & renovations",
    ],
  },
  {
    id: "automation",
    index: "02",
    title: "Automation & Architectural Lighting",
    tagline: "Dynalite · C-Bus · DALI-2 · Philips Hue",
    body: "Luminous architecture engineered, not decorated. Concealed sources, correct beam angles, CRI 97 where the material demands it, and a control layer that lets the client run the whole house from one engraved keypad.",
    image:
      "https://images.pexels.com/photos/6032422/pexels-photo-6032422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
    specs: [
      { k: "Protocols", v: "DALI-2 / C-Bus" },
      { k: "Temp", v: "2200K–4000K" },
      { k: "CRI", v: "≥ 95" },
    ],
    deliverables: [
      "Photometric & lighting layout design",
      "Scene programming and commissioning",
      "Tunable-white circadian schedules",
      "Facade, cove, joinery & landscape lighting",
    ],
  },
  {
    id: "security",
    index: "03",
    title: "Security & Infrastructure",
    tagline: "The backbone behind the finish",
    body: "Earthing, UPS, data reticulation, IP video and monitoring — the unglamorous infrastructure that decides whether a building still works properly in ten years. Built, documented and maintained by the same team.",
    image:
      "https://images.pexels.com/photos/28265032/pexels-photo-28265032.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200",
    specs: [
      { k: "Uptime", v: "24/7 call-out" },
      { k: "CCTV", v: "IP / ONVIF" },
      { k: "Power", v: "UPS + earthing" },
    ],
    deliverables: [
      "Switchboard upgrades & main boards",
      "Structured cabling and wireless APs",
      "CCTV, intercom and access control",
      "Fault finding, testing & maintenance",
    ],
  },
];

/* ── Fold 03 — The Lighting Effect ─────────────────────────── */
export type SceneKey = "off" | "arch" | "glow";

export type ImageSource = string | { src: string };

export const SCENES: {
  id: SceneKey;
  level: number;
  label: string;
  sub: string;
  code: string;
  image: ImageSource;
  note: string;
  kelvin: string;
}[] = [
  {
    id: "off",
    level: 0,
    label: "Lights Off",
    sub: "Dusk · no project",
    code: "SC-00",
    image: dusk,
    note: "Blue hour on an ordinary house. Glass goes black, materials flatten, the landscape disappears. This is what a residence looks like when lighting was never designed.",
    kelvin: "— K",
  },
  {
    id: "arch",
    level: 56,
    label: "Facade & Garden",
    sub: "Facade + landscape",
    code: "SC-01",
    image: arch,
    note: "Concealed 2700K tape grazes the soffit and the timber brise-soleil; narrow-beam uplights read the sandstone and board-formed concrete; 2200K well-lights lift the lomandra and the angophora canopy.",
    kelvin: "2200–3000 K",
  },
  {
    id: "glow",
    level: 100,
    label: "Full Scene",
    sub: "Full glow · circadian",
    code: "SC-02",
    image: glow,
    note: "Every layer on and balanced: warm interior at 2700K through the full-height glass, facade grazing, landscape, and the pool turned into a mirror. One keypad, one touch, 900 milliseconds.",
    kelvin: "2700 K",
  },
];

export type Hotspot = {
  id: string;
  x: number;
  y: number;
  minLevel: number;
  title: string;
  code: string;
  body: string;
  meta: string[];
};

export const HOTSPOTS: Hotspot[] = [
  {
    id: "hs-dali",
    x: 50,
    y: 13,
    minLevel: 25,
    title: "Concealed soffit tape",
    code: "DALI-2 · 24V",
    body: "Recessed 24V tunable-white tape in a fabricated aluminium channel with a diffuser and a shadow gap, so the source is never visible — only the wash down the timber battens.",
    meta: ["2700K", "CRI 97", "Broadcast group 04"],
  },
  {
    id: "hs-facade",
    x: 76,
    y: 45,
    minLevel: 25,
    title: "Sandstone blade wall",
    code: "GRAZE · 3000K",
    body: "Two 4° grazing optics set 180mm off the face pull every saw mark and bedding joint out of the stone. Specified from a mock-up panel on site before the order was placed.",
    meta: ["4° optic", "IP66", "Mock-up approved"],
  },
  {
    id: "hs-landscape",
    x: 17,
    y: 63,
    minLevel: 25,
    title: "Landscape uplighting",
    code: "WELL · 2200K",
    body: "350mA stainless well-lights buried flush into the bluestone, aimed through the lomandra and into the angophora canopy. Amber 2200K so the planting reads warm against the blue hour.",
    meta: ["2W LED", "IP67", "Flush-set"],
  },
  {
    id: "hs-circadian",
    x: 41,
    y: 57,
    minLevel: 70,
    title: "Circadian interior scene",
    code: "TUNABLE · 2700→4000K",
    body: "Interior layers follow the solar arc — 4000K and 70% at 07:00 for the kitchen, drifting to 2700K and 25% after sunset, then 2200K night-path lighting at 1% for the corridor.",
    meta: ["Solar schedule", "DALI-2 DT8", "Scene 'EVENING'"],
  },
  {
    id: "hs-pool",
    x: 62,
    y: 84,
    minLevel: 70,
    title: "Reflection pool",
    code: "12V · UNDERWATER",
    body: "Low-voltage underwater fittings on a separate DALI sub-loop so the pool can run teal on its own, dim to 8% for a dinner scene, or go dark while the facade stays lit.",
    meta: ["12V SELV", "Independent loop", "8% dim floor"],
  },
];

export const LIGHTING_FACTS = [
  { k: "Control", v: "DALI-2 / Dynalite" },
  { k: "Keypads", v: "1 per zone" },
  { k: "Commission", v: "900 ms scene fade" },
  { k: "Site", v: "Mosman, Sydney NSW" },
];

/* ── Fold 04 — Engineering rigour ──────────────────────────── */
export const METRICS = [
  { value: 0, suffix: "", label: "Mid-build variations", sub: "Scope locked pre-construction" },
  { value: 24, suffix: "/7", label: "Emergency call-out", sub: "Fault response across Sydney" },
  { value: 100, suffix: "%", label: "AS/NZS 3000 compliant", sub: "Tested, tagged & documented" },
  { value: 1, suffix: "", label: "Point of accountability", sub: "Power, light & automation" },
];

export type Audience = {
  id: string;
  label: string;
  headline: string;
  icon: "builder" | "architect" | "owner";
  points: { title: string; body: string }[];
};

export const AUDIENCES: Audience[] = [
  {
    id: "builders",
    label: "For Builders",
    headline: "Protect the margin, hold the program",
    icon: "builder",
    points: [
      {
        title: "Fast, reliable installation",
        body: "Crews on site when the programme says they are — rough-in, fit-off and commission sequenced around your trades, not around ours.",
      },
      {
        title: "Real-time field execution via SimPRO",
        body: "Every labour hour, material and variation logged live, so your PM sees progress and cost the same day it happens.",
      },
      {
        title: "Scalable systems",
        body: "Switchboards, risers and data designed for the building you are delivering and the one the client will want in ten years.",
      },
    ],
  },
  {
    id: "architects",
    label: "For Architects",
    headline: "Discreet, design-friendly installation",
    icon: "architect",
    points: [
      {
        title: "Source concealed, effect delivered",
        body: "Shadow gaps, recessed channels and joinery-integrated profiles. You should see the light, never the fitting.",
      },
      {
        title: "Future-proof electrical planning",
        body: "Spare ways, spare data, EV and solar readiness routed now — flexibility for technologies that have not shipped yet.",
      },
      {
        title: "Green building compliance",
        body: "High-performance, low-energy systems that satisfy NatHERS and green-star intent without diluting the design.",
      },
    ],
  },
  {
    id: "owners",
    label: "For Owners",
    headline: "One keypad, one call, one accountable team",
    icon: "owner",
    points: [
      {
        title: "Budget certainty",
        body: "A fixed lump sum agreed against a finished drawing set — no surprises discovered halfway through the fit-out.",
      },
      {
        title: "A house that runs itself",
        body: "Scenes for morning, dinner, away and night-path. Lighting, climate, blinds, audio and security from a single engraved plate.",
      },
      {
        title: "Maintenance that answers",
        body: "24/7 call-out, documented as-builts and a maintenance plan for the equipment housing after handover.",
      },
    ],
  },
];

/* ── Fold 05 — Sectors ─────────────────────────────────────── */
export type Sector = {
  id: string;
  label: string;
  index: string;
  headline: string;
  body: string;
  image: string;
  credit: string;
  stats: { k: string; v: string }[];
  services: string[];
};

export const SECTORS: Sector[] = [
  {
    id: "residential",
    label: "Residential",
    index: "R-01",
    headline: "Homes that behave like one system",
    body: "New builds, renovations and granny flats across Sydney's north shore and eastern suburbs — from a full rewire and switchboard upgrade to a complete Dynalite house with landscape and pool lighting.",
    image:
      "https://images.pexels.com/photos/8134808/pexels-photo-8134808.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1400",
    credit: "Mosman · Private residence",
    stats: [
      { k: "Typical scope", v: "Full automation" },
      { k: "Lighting", v: "2200–4000K" },
      { k: "Handover", v: "Keypad + app" },
    ],
    services: [
      "House & apartment rewiring",
      "Kitchen and bathroom renovations",
      "Home automation · Philips Dynalite · Hue",
      "Safety switches & exhaust/rangehood",
      "Garden, facade and pool lighting",
      "TV, antenna and data points",
    ],
  },
  {
    id: "commercial",
    label: "Commercial",
    index: "C-02",
    headline: "Fit-outs delivered on programme",
    body: "Offices, retail and hospitality where the electrical scope sits inside somebody else's critical path. We coordinate with the builder's programme, work out of hours when the tenancy demands it, and hand over documented.",
    image:
      "https://images.pexels.com/photos/10339605/pexels-photo-10339605.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1400",
    credit: "Sydney CBD · Commercial fit-out",
    stats: [
      { k: "Delivery", v: "On programme" },
      { k: "Works", v: "Out of hours" },
      { k: "Docs", v: "As-built issued" },
    ],
    services: [
      "Distribution boards & main switchboards",
      "General and specialty lighting",
      "Emergency lighting & monitoring",
      "Lighting control · C-Bus maintenance",
      "Structured cabling & wireless APs",
      "Equipment housing maintenance",
    ],
  },
  {
    id: "industrial",
    label: "Industrial",
    index: "I-03",
    headline: "Infrastructure that keeps running",
    body: "Motor start and control, UPS, low-voltage systems and data-centre maintenance. Complex sites where downtime is the real cost — diagnosed properly, repaired properly, then put on a maintenance schedule.",
    image:
      "https://images.pexels.com/photos/25537595/pexels-photo-25537595.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1400",
    credit: "Western Sydney · Substation & UPS",
    stats: [
      { k: "Response", v: "24/7 call-out" },
      { k: "Systems", v: "LV + UPS" },
      { k: "Cycle", v: "Planned maintenance" },
    ],
    services: [
      "Motor start and control",
      "UPS systems · maintenance & upgrades",
      "Data centre maintenance",
      "Electrical low-voltage systems",
      "Fault diagnosis & finding",
      "Switchboard upgrades & earthing",
    ],
  },
  {
    id: "projects",
    label: "Special Projects",
    index: "P-04",
    headline: "Sports lighting is our signature",
    body: "Floodlit courts, ovals and clubs — photometric design to the competition standard, lux-verified on the field, and commissioned with a spill-light study so the neighbours do not inherit your training session.",
    image:
      "https://images.pexels.com/photos/28827841/pexels-photo-28827841.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1400",
    credit: "Sydney · Floodlit sporting facility",
    stats: [
      { k: "Design", v: "Photometric" },
      { k: "Verified", v: "Lux on field" },
      { k: "Control", v: "Zoned scenes" },
    ],
    services: [
      "Sports & floodlighting design",
      "Lux-level compliance verification",
      "Spill-light and glare studies",
      "Pole, cabling and control infrastructure",
      "Staged zoning for training vs match",
      "Long-term maintenance contracts",
    ],
  },
];

export const EXPERTISE_MARQUEE = [
  "Sports Lighting",
  "Switchboard Upgrades",
  "Philips Dynalite",
  "C-Bus",
  "DALI-2",
  "Emergency Lighting",
  "UPS Systems",
  "Data Cabling",
  "CCTV & IP Cameras",
  "Motor Start & Control",
  "LED Upgrades",
  "Fault Finding",
  "Granny Flats",
  "New Builds",
  "Safety Switches",
  "Home Automation",
];

/* ── Fold 06 — Contact / Footer ────────────────────────────── */
export const PROJECT_TYPES = [
  "New build residence",
  "Renovation / extension",
  "Architectural lighting design",
  "Home automation retrofit",
  "Commercial fit-out",
  "Industrial / infrastructure",
  "Sports lighting",
  "Maintenance & call-out",
];

export const FOOTER_COLUMNS = [
  {
    title: "Services",
    links: [
      "Electrical services",
      "Architectural lighting",
      "Home automation",
      "Sports lighting",
      "Maintenance",
      "Security & CCTV",
    ],
  },
  {
    title: "Company",
    links: [
      "About Quantum",
      "Our process",
      "Projects",
      "Journal",
      "Careers",
      "Contact",
    ],
  },
  {
    title: "Coverage",
    links: [
      "Sydney CBD",
      "North Shore",
      "Eastern Suburbs",
      "Northern Beaches",
      "Inner West",
      "Greater Western Sydney",
    ],
  },
];
