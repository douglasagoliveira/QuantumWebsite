import React, { useEffect, useRef, useState, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CONTACT } from "@/data/content";
import { prefersReducedMotion } from "@/hooks/useMotion";
import { IconArrowRight, IconPhone } from "@/components/Icons";

/* ─────────────────────────────────────────────────────────────
   PROJECTS — Bento Editorial with In-Card Carousel & Dynamic Spotlight
   Each card contains all project portfolio photos with elegant carousel controls.
   Clicking any project expands it into the primary 2x2 Spotlight stage.
   ───────────────────────────────────────────────────────────── */

export type ProjectCategory = "all" | "sports" | "residential" | "commercial";

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  subtitle?: string;
  category: ProjectCategory;
  tag: string;
  location: string;
  spec: string;
  images: string[];
}

export const ALL_PROJECTS: ProjectItem[] = [
  {
    id: "berowra-tennis",
    index: "01",
    title: "Berowra Tennis Courts",
    category: "sports",
    tag: "Sports Lighting",
    location: "Berowra, Sydney NSW",
    spec: "1000W LED Floodlighting · Club Level Competition",
    images: [
      "/portfolio-home-quantum/berowra-tennis-quantum-services-sports-lighting.webp",
      "/portfolio-home-quantum/berowra-tennis-quantum-electrical-services-sports-lighting.webp",
      "/portfolio-home-quantum/berowra-tennis-quantum-sports-lighting.webp",
    ],
  },
  {
    id: "melita-stadium",
    index: "02",
    title: "Melita Stadium",
    category: "sports",
    tag: "Sports Lighting",
    location: "Chester Hill, Sydney",
    spec: "200 Lux Uniformity · Grandstand & Pitch Infrastructure",
    images: [
      "/portfolio-home-quantum/melita-stadium-quantum-service-sports-lighting.webp",
      "/portfolio-home-quantum/melita-stadium-quantum-electrical-and-technological-services.webp",
      "/portfolio-home-quantum/melita-stadium-quantum-sports-lighting.webp",
    ],
  },
  {
    id: "lynches-road",
    index: "03",
    title: "Lynches Road Netball Courts",
    category: "sports",
    tag: "Sports Lighting",
    location: "Armidale, NSW",
    spec: "Multi-Court Staged Control · Council Approved",
    images: [
      "/portfolio-home-quantum/lynches-road-netball-courts-sports-lighting-quantum-electrical.webp",
      "/portfolio-home-quantum/lynches-road-netball-courts-sports-lighting.webp",
      "/portfolio-home-quantum/lynches-road-netball-courts-sports-lighting-quantum-services.webp",
      "/portfolio-home-quantum/lynches-road-netball-courts-sports-lighting-quantum.webp",
    ],
  },
  {
    id: "sky-house",
    index: "04",
    title: "Sky House",
    subtitle: "The Rocks",
    category: "residential",
    tag: "Residential Automation",
    location: "The Rocks, Sydney Harbour",
    spec: "Dynalite Multi-Zone · Curved Architectural LED Cove",
    images: [
      "/portfolio-home-quantum/sky-house-the-rocks-quantum-electrical-services.webp",
      "/portfolio-home-quantum/sky-house-the-rocks-quantum-electrical-services-3.webp",
      "/portfolio-home-quantum/sky-house-the-rocks-quantum-electrical-services-5.webp",
      "/portfolio-home-quantum/sky-house-the-rocks-quantum-electrical-services-2.webp",
      "/portfolio-home-quantum/sky-house-the-rocks-quantum-electrical-services-4.webp",
      "/portfolio-home-quantum/sky-house-the-rocks-quantum-electrical-services-7.webp",
    ],
  },
  {
    id: "rockdale-sports",
    index: "05",
    title: "Rockdale Sports Complex",
    category: "sports",
    tag: "Sports Lighting",
    location: "Rockdale, Sydney",
    spec: "Spill Glare Shielding · High-Mast Dual Rig",
    images: [
      "/portfolio-home-quantum/sports-lighting-quantum-rockdale.webp",
      "/portfolio-home-quantum/rockdale-after.webp",
      "/portfolio-home-quantum/sports-lighting-quantum-rockdale-before_1-1.webp",
      "/portfolio-home-quantum/sports-lighting-quantum-rockdale-before-light_1.webp",
    ],
  },
  {
    id: "the-eveleigh",
    index: "06",
    title: "The Eveleigh",
    subtitle: "by The Grounds",
    category: "commercial",
    tag: "Hospitality & Commercial",
    location: "South Eveleigh, Sydney",
    spec: "Heritage Industrial Fit-out · DMX Theatrical Lighting",
    images: [
      "/portfolio-home-quantum/the-eveleigh-by-the-grounds-quantum-service-1.webp",
      "/portfolio-home-quantum/the-eveleigh-quantum-electrical-and-technological-services.webp",
      "/portfolio-home-quantum/the-eveleigh-quantum-services-coffee.webp",
      "/portfolio-home-quantum/the-eveleigh-quantum-electrical-technological-services.jpg",
    ],
  },
  {
    id: "palas",
    index: "07",
    title: "Palas Commercial",
    category: "commercial",
    tag: "Commercial & Architectural",
    location: "Surry Hills, Sydney",
    spec: "Warehouse Conversion · Architectural Cable Reticulation",
    images: [
      "/portfolio-home-quantum/palas-quantum-electrical-services.webp",
      "/portfolio-home-quantum/palas-quantum-electrical-services-2.webp",
      "/portfolio-home-quantum/palas-quantum-electrical-services-3.webp",
    ],
  },
];

const FILTER_TABS: { label: string; value: ProjectCategory; count: string }[] = [
  { label: "All Projects", value: "all", count: "07" },
  { label: "Sports Lighting", value: "sports", count: "04" },
  { label: "Residential", value: "residential", count: "01" },
  { label: "Commercial / Hosp.", value: "commercial", count: "02" },
];

// Defined Bento Slot classes for layout stability (12 columns)
const BENTO_SLOT_STYLES = [
  { col: "md:col-span-5", row: "md:row-span-2", height: "md:min-h-[580px]", isFeatured: true },
  { col: "md:col-span-3", row: "md:row-span-1", height: "md:min-h-[280px]", isFeatured: false },
  { col: "md:col-span-4", row: "md:row-span-1", height: "md:min-h-[280px]", isFeatured: false },
  { col: "md:col-span-4", row: "md:row-span-1", height: "md:min-h-[280px]", isFeatured: false, wide: true },
  { col: "md:col-span-3", row: "md:row-span-1", height: "md:min-h-[280px]", isFeatured: false },
  { col: "md:col-span-4", row: "md:row-span-1", height: "md:min-h-[280px]", isFeatured: false },
  { col: "md:col-span-5", row: "md:row-span-1", height: "md:min-h-[280px]", isFeatured: false, wide: true },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("all");
  const [featuredId, setFeaturedId] = useState<string>("berowra-tennis");
  // Track active image index per project: { [projectId]: index }
  const [imageIndices, setImageIndices] = useState<Record<string, number>>({});
  
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0, visible: false, text: "VIEW" });

  // Touch swipe support
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  // Navigate images for a specific project
  const changeImage = (projectId: string, delta: number, total: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setImageIndices((prev) => {
      const current = prev[projectId] ?? 0;
      const next = (current + delta + total) % total;
      return { ...prev, [projectId]: next };
    });
  };

  const setImageDirect = (projectId: string, index: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setImageIndices((prev) => ({ ...prev, [projectId]: index }));
  };

  // Reorder projects so that the featured project occupies Slot 0 (the large 2x2 featured slot)
  const orderedProjects = useMemo(() => {
    const featured = ALL_PROJECTS.find((p) => p.id === featuredId) || ALL_PROJECTS[0];
    const others = ALL_PROJECTS.filter((p) => p.id !== featured.id);
    return [featured, ...others];
  }, [featuredId]);

  // If a category tab is selected and the current featured is not in that category,
  // automatically spotlight the first matching project for a great UX
  const handleTabChange = (tab: ProjectCategory) => {
    setActiveTab(tab);
    if (tab !== "all") {
      const currentFeatured = ALL_PROJECTS.find((p) => p.id === featuredId);
      if (currentFeatured && currentFeatured.category !== tab) {
        const firstMatch = ALL_PROJECTS.find((p) => p.category === tab);
        if (firstMatch) {
          setFeaturedId(firstMatch.id);
        }
      }
    }
  };

  // GSAP Entrance animation
  useEffect(() => {
    if (prefersReducedMotion()) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll<HTMLElement>("[data-project-card]");
      if (!cards || cards.length === 0) return;

      gsap.fromTo(
        cards,
        {
          clipPath: "inset(100% 0 0 0)",
          opacity: 0,
          y: 40,
        },
        {
          clipPath: "inset(0% 0 0 0)",
          opacity: 1,
          y: 0,
          duration: 1.1,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current || sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Custom Cursor Follower
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setCursorPos((prev) => ({
      ...prev,
      x: e.clientX,
      y: e.clientY,
      visible: true,
    }));
  };

  const handleMouseLeave = () => {
    setCursorPos((prev) => ({ ...prev, visible: false }));
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-labelledby="projects-heading"
      className="relative scroll-mt-20 overflow-hidden bg-[#060d17] text-white py-24 sm:py-32"
    >
      {/* ── Background Architectural Accents ─────────────────── */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="u-grid-paper-dark absolute inset-0 opacity-40" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-q-teal/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

        {/* Ambient atmospheric glows */}
        <div
          className="animate-breathe absolute -left-40 top-1/4 h-[600px] w-[600px] rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(0,179,166,0.18) 0%, rgba(0,179,166,0) 70%)",
          }}
        />
        <div
          className="absolute -right-40 bottom-1/4 h-[550px] w-[550px] rounded-full blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgba(13,62,105,0.28) 0%, rgba(13,62,105,0) 70%)",
          }}
        />
      </div>

      {/* ── Floating Cursor Follower (Desktop only) ───────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed z-50 hidden sm:block transition-opacity duration-200"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          opacity: cursorPos.visible ? 1 : 0,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="flex items-center gap-1.5 rounded-full bg-q-teal px-3.5 py-1.5 text-[11px] font-bold tracking-widest text-white shadow-[0_0_20px_rgba(0,179,166,0.6)] backdrop-blur-sm">
          <span>{cursorPos.text}</span>
          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        {/* ── Editorial Header ───────────────────────────────── */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between border-b border-white/10 pb-12 sm:pb-16">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-q-teal shadow-[0_0_8px_#00b3a6] animate-pulse" />
              <span className="font-mono text-[11.5px] font-medium tracking-[0.22em] text-q-teal uppercase">
                SELECTED WORK · 07
              </span>
            </div>
            <h2
              id="projects-heading"
              className="mt-3 text-3xl sm:text-5xl lg:text-[3.5rem] font-light leading-[1.08] tracking-[-0.02em] text-white"
            >
              Some of Our{" "}
              <span className="font-serif italic text-white drop-shadow-sm font-normal">
                Projects
              </span>
            </h2>
            <p className="mt-4 max-w-[54ch] text-[15px] leading-relaxed text-white/65">
              Photometric precision, high-end automation, and infrastructure built to competition and architectural standards. Click any card to expand it as the featured spotlight.
            </p>
          </div>

          {/* ── Interactive Category Filters ─────────────────── */}
          <div className="flex flex-wrap items-center gap-2">
            {FILTER_TABS.map((tab) => {
              const active = activeTab === tab.value;
              return (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => handleTabChange(tab.value)}
                  className={`group relative flex items-center gap-2 rounded-full px-4 py-2 text-[12.5px] font-medium transition-all duration-300 ${
                    active
                      ? "bg-q-teal text-white shadow-[0_0_18px_rgba(0,179,166,0.45)]"
                      : "border border-white/12 bg-white/5 text-white/70 hover:border-white/25 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`font-mono text-[10px] ${
                      active ? "text-white/90" : "text-white/45 group-hover:text-white/70"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Bento Grid Section ─────────────────────────────── */}
        <div
          ref={gridRef}
          className="mt-12 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none md:grid md:grid-cols-12 md:gap-5 md:overflow-visible md:pb-0"
        >
          {orderedProjects.map((p, slotIndex) => {
            const slotStyle = BENTO_SLOT_STYLES[slotIndex];
            const isFeatured = slotStyle.isFeatured;
            const currentImgIndex = imageIndices[p.id] ?? 0;
            const totalImages = p.images.length;
            const currentImg = p.images[currentImgIndex];
            const isMatch = activeTab === "all" || p.category === activeTab;

            return (
              <article
                key={p.id}
                data-project-card
                onClick={() => {
                  if (!isFeatured) {
                    setFeaturedId(p.id);
                  }
                }}
                onMouseEnter={() => {
                  setCursorPos((prev) => ({
                    ...prev,
                    text: isFeatured ? "SLIDE" : "EXPAND",
                  }));
                }}
                onTouchStart={(e) => {
                  touchStartRef.current = {
                    x: e.touches[0].clientX,
                    y: e.touches[0].clientY,
                  };
                }}
                onTouchEnd={(e) => {
                  if (!touchStartRef.current) return;
                  const deltaX = e.changedTouches[0].clientX - touchStartRef.current.x;
                  if (Math.abs(deltaX) > 40) {
                    if (deltaX < 0) changeImage(p.id, 1, totalImages);
                    else changeImage(p.id, -1, totalImages);
                  }
                  touchStartRef.current = null;
                }}
                className={`group relative shrink-0 min-w-[85vw] sm:min-w-[420px] md:min-w-0 snap-center overflow-hidden rounded-[18px] border bg-[#0a1422] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isFeatured
                    ? "border-q-teal/70 ring-1 ring-q-teal/50 shadow-[0_18px_60px_-10px_rgba(0,179,166,0.38)] cursor-default"
                    : "border-white/10 hover:-translate-y-1.5 hover:border-q-teal/80 hover:shadow-[0_16px_50px_-10px_rgba(0,179,166,0.35)] cursor-pointer"
                } ${slotStyle.col} ${slotStyle.row} ${slotStyle.height} ${
                  isMatch
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-25 scale-[0.98] pointer-events-none md:pointer-events-auto"
                }`}
              >
                {/* ── Photo Gallery Container (Crossfade Transition) ── */}
                <div className="absolute inset-0 h-full w-full overflow-hidden pointer-events-none">
                  {p.images.map((imgSrc, imgIdx) => (
                    <img
                      key={imgSrc}
                      src={imgSrc}
                      alt={`${p.title} photo ${imgIdx + 1}`}
                      loading={slotIndex <= 2 ? "eager" : "lazy"}
                      decoding="async"
                      className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        imgIdx === currentImgIndex
                          ? "opacity-100 scale-100 z-10"
                          : "opacity-0 scale-105 z-0"
                      } ${!isFeatured ? "group-hover:scale-105" : ""}`}
                    />
                  ))}
                </div>

                {/* ── Top Story-Style Image Progress Indicators ── */}
                {totalImages > 1 && (
                  <div className="absolute top-3 inset-x-5 z-20 flex gap-1.5 pointer-events-auto">
                    {p.images.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        aria-label={`Go to photo ${i + 1}`}
                        onClick={(e) => setImageDirect(p.id, i, e)}
                        className="group/bar flex-1 py-2"
                      >
                        <span
                          className={`block h-1 rounded-full transition-all duration-300 ${
                            i === currentImgIndex
                              ? "bg-q-teal shadow-[0_0_8px_#00b3a6]"
                              : "bg-white/25 group-hover/bar:bg-white/50"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                )}

                {/* ── Discreet Bottom Gradient ─────────────────── */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent transition-opacity duration-500 group-hover:from-black/95 group-hover:via-black/55"
                />

                {/* ── Card Header: Badges & Photo Counter ──────── */}
                <div className="relative z-10 flex items-center justify-between p-5 sm:p-6 mt-3">
                  <div className="flex items-center gap-2">
                    {isFeatured ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-q-teal/60 bg-black/60 px-3 py-1 font-mono text-[10.5px] font-bold tracking-wider text-q-teal backdrop-blur-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-q-teal animate-pulse" />
                        ACTIVE SPOTLIGHT
                      </span>
                    ) : (
                      <span className="font-mono text-[12px] font-semibold tracking-widest text-white/60 backdrop-blur-sm bg-black/35 px-2.5 py-0.5 rounded-full border border-white/10">
                        {p.index}
                      </span>
                    )}

                    {/* Image Counter Badge */}
                    {totalImages > 1 && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-black/45 px-2.5 py-0.5 font-mono text-[10.5px] text-white/80 backdrop-blur-sm">
                        <svg className="h-3 w-3 text-q-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {currentImgIndex + 1}/{totalImages}
                      </span>
                    )}
                  </div>

                  <span className="rounded-full border border-white/15 bg-black/50 px-3 py-1 text-[11px] font-medium tracking-wide text-white/80 backdrop-blur-md">
                    {p.tag}
                  </span>
                </div>

                {/* ── Carousel Arrows (Interactive Next/Prev) ──── */}
                {totalImages > 1 && (
                  <div className="absolute inset-y-0 inset-x-3 z-20 flex items-center justify-between pointer-events-none">
                    <button
                      type="button"
                      aria-label="Previous image"
                      onClick={(e) => changeImage(p.id, -1, totalImages, e)}
                      className={`pointer-events-auto flex items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-md border border-white/20 transition-all duration-300 hover:bg-q-teal hover:border-q-teal hover:scale-110 shadow-lg ${
                        isFeatured
                          ? "h-11 w-11 opacity-90 hover:opacity-100"
                          : "h-8 w-8 opacity-0 group-hover:opacity-90 hover:!opacity-100"
                      }`}
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    <button
                      type="button"
                      aria-label="Next image"
                      onClick={(e) => changeImage(p.id, 1, totalImages, e)}
                      className={`pointer-events-auto flex items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-md border border-white/20 transition-all duration-300 hover:bg-q-teal hover:border-q-teal hover:scale-110 shadow-lg ${
                        isFeatured
                          ? "h-11 w-11 opacity-90 hover:opacity-100"
                          : "h-8 w-8 opacity-0 group-hover:opacity-90 hover:!opacity-100"
                      }`}
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                )}

                {/* ── Bottom Legend ────────────────────────────── */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-7 flex items-end justify-between gap-4">
                  <div className="max-w-[85%]">
                    <p className="font-mono text-[11px] tracking-wider text-q-teal uppercase font-semibold">
                      {p.location}
                    </p>
                    <h3
                      className={`mt-1 font-serif font-normal leading-tight text-white transition-colors duration-300 group-hover:text-q-teal-100 ${
                        isFeatured
                          ? "text-2xl sm:text-4xl lg:text-[2.6rem]"
                          : "text-xl sm:text-2xl lg:text-[1.8rem]"
                      }`}
                    >
                      {p.title}
                      {p.subtitle && (
                        <span className="block font-sans text-sm sm:text-base font-light text-white/75 mt-0.5">
                          {p.subtitle}
                        </span>
                      )}
                    </h3>
                    <p className="mt-2 line-clamp-1 text-[12px] sm:text-[13px] text-white/65 font-sans tracking-wide">
                      {p.spec}
                    </p>

                    {/* Hint for non-featured cards */}
                    {!isFeatured && (
                      <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-q-teal/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>Click to Spotlight</span>
                        <IconArrowRight className="h-3 w-3" />
                      </span>
                    )}
                  </div>

                  {/* ── Action Indicator ───────────────────────── */}
                  <div
                    aria-hidden
                    className={`flex shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isFeatured
                        ? "h-11 w-11 bg-q-teal text-white shadow-[0_0_20px_rgba(0,179,166,0.6)]"
                        : "h-10 w-10 bg-white/10 text-white group-hover:bg-q-teal group-hover:shadow-[0_0_20px_rgba(0,179,166,0.6)] scale-90 group-hover:scale-100 opacity-60 group-hover:opacity-100"
                    }`}
                  >
                    <IconArrowRight className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </article>
            );
          })}

          {/* ── Card 08: CTA "View All Projects & Consultation" ─ */}
          <article
            data-project-card
            className="group relative shrink-0 min-w-[85vw] sm:min-w-[420px] md:min-w-0 snap-center md:col-span-3 md:row-span-1 md:min-h-[280px] overflow-hidden rounded-[18px] border border-white/12 bg-gradient-to-br from-[#0c1f36] via-[#091729] to-[#060e1a] p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-q-teal/80 hover:shadow-[0_16px_50px_-10px_rgba(0,179,166,0.35)]"
          >
            {/* Fine blueprint grid */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="u-grid-paper-dark absolute inset-0 opacity-50" />
              <div
                className="absolute -right-16 -bottom-16 h-48 w-48 rounded-full blur-[80px]"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0,179,166,0.35) 0%, rgba(0,179,166,0) 70%)",
                }}
              />
            </div>

            <div className="relative z-10">
              <span className="font-mono text-[11px] font-semibold tracking-widest text-q-teal uppercase">
                08 / CASE STUDIES
              </span>
              <h3 className="mt-2 text-xl sm:text-2xl font-light leading-snug text-white">
                Have an upcoming project in{" "}
                <span className="font-serif italic text-white font-normal">blueprint</span> stage?
              </h3>
              <p className="mt-2 text-[12.5px] leading-relaxed text-white/65">
                Lock electrical scope, photometric compliance, and fixed pricing early.
              </p>
            </div>

            <div className="relative z-10 mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <a
                href={CONTACT.phoneHref}
                className="group/btn inline-flex items-center gap-2 text-[13.5px] font-bold text-q-teal transition-colors hover:text-white"
              >
                <IconPhone className="h-4 w-4" />
                <span>Call {CONTACT.phoneDisplay}</span>
              </a>
              <a
                href="#contact"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 group-hover:bg-q-teal group-hover:shadow-[0_0_15px_rgba(0,179,166,0.5)]"
                aria-label="Contact Quantum"
              >
                <IconArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>
          </article>
        </div>

        {/* ── Mobile swipe instruction ───────────────────────── */}
        <div className="mt-6 flex items-center justify-center gap-2 md:hidden text-xs text-white/45 font-mono">
          <span>← Swipe to explore photos & projects →</span>
        </div>
      </div>
    </section>
  );
}
