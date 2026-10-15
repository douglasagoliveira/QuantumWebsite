import { useState, useRef } from "react";
import { cn } from "@/utils/cn";
import { IconPhone, IconPin } from "@/components/Icons";

/* ─────────────────────────────────────────────────────────────
   FLEET DISPATCH CANVAS — Mobile Field Operations & Telemetry
   The official Quantum service fleet vehicle is the physical proof
   of execution across Greater Sydney. The photo is kept 100% clean,
   unobstructed and prominent, with contextual telemetry elegantly
   anchored in the dock below.
   ───────────────────────────────────────────────────────────── */

const AUDIENCE_FIELD_PROTOCOLS = [
  {
    protocol: "FIELD PROTOCOL 01 · PROGRAMME LOCK",
    tag: "FOR BUILDERS",
    lead: "Sequenced to your programme — rough-in to fit-off",
    desc: "Every van is pre-stocked with heavy containment and cable tray for immediate rough-in. Live hours and materials logged directly in SimPRO.",
    badge: "Zero Trade Clashes",
  },
  {
    protocol: "FIELD PROTOCOL 02 · DESIGN INTEGRITY",
    tag: "FOR ARCHITECTS",
    lead: "Sub-millimetre tooling for joinery & shadow gaps",
    desc: "Equipped with precision profiling tools, finish-protection gear, and DALI-2 bus diagnostic analyzers to protect architectural intent.",
    badge: "Zero Visible Fasteners",
  },
  {
    protocol: "FIELD PROTOCOL 03 · SINGLE ACCOUNTABILITY",
    tag: "FOR OWNERS",
    lead: "Direct Managing Director line & 24/7 emergency call-out",
    desc: "Rapid response fleet operating across Greater Sydney, backed by fully documented as-built drawings and post-handover maintenance.",
    badge: "24/7 Rapid Response",
  },
];

export default function FleetDispatchCanvas({
  aud,
  className,
}: {
  aud: number;
  className?: string;
}) {
  const [tilt, setTilt] = useState({ rotX: 0, rotY: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const active = AUDIENCE_FIELD_PROTOCOLS[aud] || AUDIENCE_FIELD_PROTOCOLS[0];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Gentle tilt: max 3.5 degrees to keep the presentation grounded
    const rotY = ((x / rect.width) - 0.5) * 7;
    const rotX = -((y / rect.height) - 0.5) * 7;

    setTilt({ rotX, rotY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotX: 0, rotY: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative select-none rounded-[22px] border border-q-navy/12 bg-white p-2.5 shadow-[0_16px_40px_-12px_rgba(13,62,105,0.10)] transition-all duration-700 hover:border-q-teal/40 hover:shadow-[0_24px_55px_-12px_rgba(0,179,166,0.18)] sm:p-3",
        className,
      )}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotX}deg) rotateY(${tilt.rotY}deg)`,
        transition: isHovered
          ? "transform 0.12s ease-out, box-shadow 0.5s ease-out, border-color 0.5s ease-out"
          : "transform 0.6s cubic-bezier(0.22,1,0.36,1), box-shadow 0.6s ease-out, border-color 0.5s ease-out",
      }}
    >
      {/* ── 1. The Clean Van Viewport (Hero Presentation) ──────── */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[16px] bg-q-navy-950 sm:aspect-[4/3]">
        {/* Real official Quantum fleet photo — full vehicle visible, 0 clutter */}
        <img
          src="/van-quantum-electrical-and-technological-solutions.jpg"
          alt="Quantum Electrical & Technological Solutions official service fleet van in Sydney (Unit EYI-39C)"
          className="h-full w-full object-cover object-[center_90%] transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
          loading="lazy"
        />

        {/* Ultra-subtle top gradient only in the sky area to ground the status pill */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/45 to-transparent"
        />

        {/* Discreet Floating Status Pill in the sky/tree canopy — well above the vehicle */}
        <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-3">
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-q-navy-950/70 px-3 py-1 text-[10.5px] font-medium tracking-tight text-white backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
              Live Service Fleet
            </span>
            <span className="opacity-40">·</span>
            <span className="text-[10px] text-white/90">Sydney Metro</span>
          </div>

          <div className="rounded-full border border-white/20 bg-q-navy-950/70 px-2.5 py-1 font-mono text-[10px] font-semibold text-white/90 backdrop-blur-md">
            UNIT EYI-39C
          </div>
        </div>
      </div>

      {/* ── 2. Contextual Field Operations Dock (Below Photo) ──── */}
      <div className="mt-3 rounded-[14px] bg-q-shell/50 p-3.5 sm:p-4 border border-q-navy/6 transition-colors duration-500 group-hover:bg-q-shell/80">
        {/* Dynamic audience-synchronized protocol tag */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-q-teal" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-q-teal-600">
              {active.protocol}
            </span>
          </div>
          <span className="rounded bg-q-navy/8 px-2 py-0.5 font-mono text-[9.5px] font-semibold tracking-tight text-q-navy/70">
            {active.badge}
          </span>
        </div>

        {/* Lead commitment text */}
        <h4 className="mt-2 text-[14px] font-bold leading-snug tracking-[-0.015em] text-q-navy sm:text-[14.5px]">
          {active.lead}
        </h4>

        {/* Operational detail */}
        <p className="mt-1.5 text-[12px] leading-relaxed text-q-slate/90">
          {active.desc}
        </p>

        {/* Divider & Direct Contact Bar */}
        <div className="mt-3 flex items-center justify-between border-t border-q-navy/10 pt-2.5">
          <a
            href="tel:0406025213"
            aria-label="Call Quantum Service Fleet directly at 0406 025 213"
            className="group/phone inline-flex items-center gap-1.5 font-mono text-[12px] font-bold text-q-navy transition-colors duration-300 hover:text-q-teal"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-q-teal/15 text-q-teal transition-colors duration-300 group-hover/phone:bg-q-teal group-hover/phone:text-q-navy-950">
              <IconPhone className="h-3 w-3" />
            </span>
            <span>0406 025 213</span>
          </a>

          <div className="inline-flex items-center gap-1 text-[11px] font-medium text-q-navy/55">
            <IconPin className="h-3 w-3 text-q-teal-600" />
            <span>Greater Sydney Coverage</span>
          </div>
        </div>
      </div>
    </div>
  );
}
