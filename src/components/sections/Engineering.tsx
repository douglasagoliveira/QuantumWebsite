import { useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import { AUDIENCES, CONTACT, METRICS } from "@/data/content";
import { Eyebrow, LineReveal, Reveal } from "@/components/Reveal";
import { useCountUp, useInView } from "@/hooks/useMotion";
import {
  IconArchitect,
  IconArrowUpRight,
  IconBolt,
  IconBuilder,
  IconClock,
  IconDoc,
  IconGauge,
  IconLayers,
  IconOwner,
  IconShield,
} from "@/components/Icons";
import FleetDispatchCanvas from "./FleetDispatchCanvas";

/* ─────────────────────────────────────────────────────────────
   FOLD 04 — Engineering differentials & operational rigour
   ───────────────────────────────────────────────────────────── */

const PROCESS = [
  {
    step: "01",
    title: "Pre-construction",
    body: "We price and programme against a finished drawing set, before the contract is signed and while changes are still free.",
    k: "Week −6",
  },
  {
    step: "02",
    title: "Design & documentation",
    body: "Load schedules, switchboard schedules, lighting layout, control topology and set-out drawings issued to site.",
    k: "Week −3",
  },
  {
    step: "03",
    title: "Execution in the field",
    body: "Rough-in, fit-off and containment sequenced against the builder's programme. Every hour and material logged live in SimPRO.",
    k: "On site",
  },
  {
    step: "04",
    title: "Commission & hand over",
    body: "Scenes programmed, lux levels verified, AS/NZS 3000 testing completed, as-builts and a maintenance plan issued.",
    k: "Handover",
  },
];

const POINT_ICONS = [IconDoc, IconGauge, IconShield, IconClock, IconLayers, IconBolt];

function Metric({
  value,
  suffix,
  label,
  sub,
  run,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  sub: string;
  run: boolean;
  index: number;
}) {
  const n = useCountUp(value, run, 1300 + index * 160);
  return (
    <div className="group relative px-6 py-9 transition-colors duration-500 hover:bg-q-shell/70 sm:px-8 lg:py-11">
      <span
        aria-hidden
        className="absolute left-0 top-1/2 h-0 w-px origin-center bg-q-teal transition-[height] duration-700 group-hover:h-1/2"
        style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
      />
      <div className="u-eyebrow mb-5 text-q-navy/40">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="u-tabular flex items-baseline gap-0.5 font-mono text-[clamp(2.6rem,5.6vw,4.1rem)] font-medium leading-none tracking-[-0.045em] text-q-navy">
        {n}
        <span className="text-q-teal">{suffix}</span>
      </div>
      <div className="mt-4 text-[15px] font-semibold leading-tight tracking-[-0.015em] text-q-ink">
        {label}
      </div>
      <div className="mt-1.5 max-w-[26ch] text-[12.5px] leading-relaxed text-q-slate/80">
        {sub}
      </div>
    </div>
  );
}

export default function Engineering() {
  const [aud, setAud] = useState(0);
  const leftColRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [pill, setPill] = useState({ left: 0, width: 0 });
  const [tabsOffset, setTabsOffset] = useState(0);

  const { ref: metricsRef, inView: metricsIn } = useInView<HTMLDivElement>(
    "0px 0px -18% 0px",
    0.25,
  );
  const { ref: processRef, inView: processIn } = useInView<HTMLDivElement>(
    "0px 0px -12% 0px",
    0.2,
  );

  useLayoutEffect(() => {
    const el = tabRefs.current[aud];
    if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth });
  }, [aud]);

  useLayoutEffect(() => {
    const update = () => {
      if (typeof window !== "undefined" && window.innerWidth >= 1024) {
        if (tabsRef.current && leftColRef.current) {
          const leftRect = leftColRef.current.getBoundingClientRect();
          const tabsRect = tabsRef.current.getBoundingClientRect();
          setTabsOffset(Math.round(tabsRect.bottom - leftRect.top));
        }
      } else {
        setTabsOffset(0);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const active = AUDIENCES[aud];
  const AudienceIcon =
    active.icon === "builder" ? IconBuilder : active.icon === "architect" ? IconArchitect : IconOwner;

  return (
    <section
      id="engineering"
      aria-labelledby="engineering-title"
      className="relative scroll-mt-24 overflow-hidden bg-q-white lg:scroll-mt-28"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-56 top-1/3 h-[620px] w-[620px] rounded-full opacity-45 blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgba(175,219,218,0.5) 0%, rgba(175,219,218,0) 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        {/* ── Statement ────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-x-16 gap-y-12 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-8">
            <h2
              id="engineering-title"
              className="u-display text-[clamp(2.3rem,6.4vw,5.2rem)] text-q-navy"
            >
              <LineReveal>Mid-build variations</LineReveal>
              <LineReveal delay={90}>are never</LineReveal>
              <LineReveal delay={180}>
                <span className="relative inline-block">
                  accidental
                  <span
                    aria-hidden
                    className="absolute -bottom-1 left-0 h-[3px] w-full origin-left bg-q-teal"
                  />
                </span>
                <span className="text-q-teal">.</span>
              </LineReveal>
            </h2>
            <Reveal delay={240}>
              <p className="u-pretty mt-9 max-w-[58ch] text-[17px] leading-[1.72] text-q-slate">
                They are the downstream cost of late electrical integration — a
                lighting scheme that arrives after the ceiling is closed, an
                automation scope discovered after the cabling is pulled. Choosing
                Quantum is not only an electrical decision. It is project
                governance.
              </p>
            </Reveal>
          </div>

          {/* pull quote */}
          <Reveal delay={300} className="lg:col-span-4 lg:pt-3">
            <figure className="relative border-l-2 border-q-teal pl-7">
              <span
                aria-hidden
                className="absolute -left-[9px] -top-1 block h-4 w-4 rotate-45 border-l-2 border-t-2 border-q-teal bg-q-white"
              />
              <blockquote className="text-[16.5px] font-medium italic leading-[1.65] tracking-[-0.012em] text-q-navy">
                &ldquo;We approach each project as a unique opportunity. Our pride
                shows in the results our clients live with every day.&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3.5 border-t border-q-navy/12 pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-q-navy-100 font-mono text-[13px] font-semibold text-q-navy">
                  GP
                </span>
                <span>
                  <span className="block text-[14px] font-bold tracking-[-0.01em] text-q-ink">
                    {CONTACT.director}
                  </span>
                  <span className="u-eyebrow mt-1 block text-[9px] text-q-slate/70">
                    {CONTACT.directorRole}
                  </span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* ── Metrics band ─────────────────────────────────── */}
        <div
          ref={metricsRef}
          className="grid grid-cols-1 border-y border-q-navy/12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {METRICS.map((m, i) => (
            <div
              key={m.label}
              className={cn(
                "border-q-navy/12",
                [
                  "",
                  "sm:border-l",
                  "border-t lg:border-t-0 lg:border-l",
                  "border-t sm:border-l lg:border-t-0 lg:border-l",
                ][i],
              )}
            >
              <Metric {...m} run={metricsIn} index={i} />
            </div>
          ))}
        </div>

        {/* ── Process rail ─────────────────────────────────── */}
        <div ref={processRef} className="py-16 lg:py-24">
          <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <h3 className="u-h2 text-[clamp(1.5rem,2.6vw,2.05rem)] text-q-navy">
              How the scope gets locked
            </h3>
            <span className="u-eyebrow text-q-navy/42">04 stages · one contractor</span>
          </Reveal>

          <ol className="relative grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
            {/* the drawing line */}
            <span
              aria-hidden
              className="absolute left-0 top-[13px] hidden h-px bg-q-navy/12 lg:block"
              style={{ width: "100%" }}
            >
              <span
                className="absolute inset-y-0 left-0 bg-q-teal transition-[width] duration-[1600ms]"
                style={{
                  width: processIn ? "100%" : "0%",
                  transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
                }}
              />
            </span>

            {PROCESS.map((p, i) => (
              <Reveal
                as="li"
                key={p.step}
                delay={i * 110}
                className="group relative pr-8 lg:pr-10"
              >
                <span
                  className={cn(
                    "relative z-10 mb-6 flex h-[26px] w-[26px] items-center justify-center rounded-full border bg-q-white transition-all duration-700 group-hover:scale-110",
                    processIn ? "border-q-teal" : "border-q-navy/22",
                  )}
                  style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                >
                  <span
                    className={cn(
                      "block h-[7px] w-[7px] rounded-full transition-colors duration-700",
                      processIn ? "bg-q-teal" : "bg-q-navy/25",
                    )}
                  />
                </span>
                <div className="flex items-baseline gap-3">
                  <span className="u-eyebrow u-tabular text-q-teal-600">{p.step}</span>
                  <span className="u-eyebrow text-q-navy/38">{p.k}</span>
                </div>
                <h4 className="mt-3 text-[19px] font-bold leading-tight tracking-[-0.02em] text-q-navy">
                  {p.title}
                </h4>
                <p className="u-pretty mt-2.5 max-w-[38ch] text-[13.5px] leading-relaxed text-q-slate/88">
                  {p.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* ── Audience switcher ────────────────────────────── */}
        <div className="border-t border-q-navy/12 py-16 lg:py-24">
          <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-12">
            {/* sticky left */}
            <div ref={leftColRef} className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <Eyebrow tone="teal">Who we deliver for</Eyebrow>

                <div
                  ref={tabsRef}
                  className="relative mt-8 flex flex-wrap gap-1 border-b border-q-navy/12 pb-1"
                  role="tablist"
                  aria-label="Audience"
                >
                  <span
                    aria-hidden
                    className="absolute bottom-0 h-[2px] bg-q-teal transition-[left,width] duration-[620ms]"
                    style={{
                      left: pill.left,
                      width: pill.width,
                      transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
                    }}
                  />
                  {AUDIENCES.map((a, i) => (
                    <button
                      key={a.id}
                      ref={(el) => {
                        tabRefs.current[i] = el;
                      }}
                      type="button"
                      role="tab"
                      aria-selected={aud === i}
                      aria-controls={`aud-panel-${a.id}`}
                      onClick={() => setAud(i)}
                      className={cn(
                        "relative px-4 py-3 text-[14px] font-semibold tracking-[-0.012em] transition-colors duration-500 sm:text-[15px]",
                        aud === i ? "text-q-navy" : "text-q-navy/45 hover:text-q-navy/75",
                      )}
                    >
                      {a.label}
                    </button>
                  ))}
                </div>

                <div className="relative mt-8 min-h-[135px]">
                  {AUDIENCES.map((a, i) => {
                    const Icon =
                      a.icon === "builder"
                        ? IconBuilder
                        : a.icon === "architect"
                          ? IconArchitect
                          : IconOwner;
                    return (
                      <div
                        key={a.id}
                        className={cn(
                          "transition-all duration-[620ms]",
                          aud === i
                            ? "relative translate-y-0 opacity-100"
                            : "pointer-events-none absolute inset-0 translate-y-3 opacity-0",
                        )}
                        style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                      >
                        <Icon className="h-10 w-10 text-q-teal-600" strokeWidth={0.9} />
                        <h3 className="u-h2 mt-4 max-w-[18ch] text-[clamp(1.55rem,2.8vw,2.25rem)] leading-[1.18] text-q-navy">
                          {a.headline}
                        </h3>
                      </div>
                    );
                  })}
                </div>

                {/* Quantum Rapid Response Fleet Canvas */}
                <div className="mt-7">
                  <FleetDispatchCanvas aud={aud} />
                </div>
              </div>
            </div>

            {/* points */}
            <div
              className="lg:col-span-7 lg:pt-[97px]"
              style={tabsOffset > 0 ? { paddingTop: `${tabsOffset}px` } : undefined}
            >
              <div
                id={`aud-panel-${active.id}`}
                role="tabpanel"
                aria-labelledby={active.id}
                className="border-t border-q-navy/12"
              >
                {active.points.map((p, i) => {
                  const Icon = POINT_ICONS[(aud * 3 + i) % POINT_ICONS.length];
                  return (
                    <div
                      key={p.title}
                      className="group relative flex items-start gap-6 border-b border-q-navy/12 py-8 transition-[background-color,padding] duration-500 hover:bg-q-shell hover:px-5 sm:gap-8"
                      style={{
                        transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
                        animation: `pointIn 560ms cubic-bezier(0.22,1,0.36,1) ${i * 90}ms both`,
                      }}
                    >
                      <span
                        aria-hidden
                        className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-q-teal transition-transform duration-700 group-hover:scale-y-100"
                        style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                      />
                      <Icon
                        className="mt-0.5 h-8 w-8 shrink-0 text-q-navy/38 transition-colors duration-500 group-hover:text-q-teal-600"
                        strokeWidth={0.9}
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline gap-4">
                          <span className="u-eyebrow u-tabular text-q-navy/32">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <h4 className="text-[18px] font-bold leading-tight tracking-[-0.022em] text-q-navy sm:text-[19.5px]">
                            {p.title}
                          </h4>
                        </div>
                        <p className="u-pretty mt-3 max-w-[62ch] text-[14.5px] leading-[1.7] text-q-slate">
                          {p.body}
                        </p>
                      </div>
                      <AudienceIcon
                        className="hidden h-5 w-5 shrink-0 self-center text-q-navy/12 transition-all duration-500 group-hover:text-q-teal/60 lg:block"
                        strokeWidth={0.9}
                      />
                    </div>
                  );
                })}
              </div>

              <Reveal delay={120} className="mt-10 flex flex-wrap items-center justify-between gap-6">
                <p className="max-w-[40ch] text-[13.5px] leading-relaxed text-q-slate/85">
                  Whichever side of the drawing you sit on, the conversation starts
                  in the same place — before the scope is fixed.
                </p>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2.5 bg-q-navy px-6 py-3.5 text-[14px] font-bold text-white transition-colors duration-500 hover:bg-q-teal hover:text-q-navy-900"
                  style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                >
                  Book a pre-construction consult
                  <IconArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pointIn {
          from { opacity: 0; transform: translate3d(0, 14px, 0); }
          to   { opacity: 1; transform: translate3d(0, 0, 0); }
        }
      `}</style>
    </section>
  );
}
