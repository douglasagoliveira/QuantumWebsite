import { useState } from "react";
import { cn } from "@/utils/cn";
import { CONTACT } from "@/data/content";
import { CAPABILITIES } from "@/data/electrical";
import { Eyebrow, LineReveal, Reveal } from "@/components/Reveal";
import {
  IconArrowUpRight,
  IconBolt,
  IconClock,
  IconDoc,
  IconPhone,
} from "@/components/Icons";

/* ─────────────────────────────────────────────────────────────
   FOLD 03 — Key capabilities & deliverables
   Controlled dark stage between two light editorial folds.
   ───────────────────────────────────────────────────────────── */

const ICONS = { doc: IconDoc, bolt: IconBolt, clock: IconClock } as const;

export default function Capabilities() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-title"
      className="relative scroll-mt-24 overflow-hidden bg-q-navy-900 text-white lg:scroll-mt-28"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="u-grid-paper-dark absolute inset-0 opacity-60" />
        <div
          className="animate-breathe absolute -right-32 top-0 h-[560px] w-[560px] rounded-full blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgba(0,179,166,0.22) 0%, rgba(0,179,166,0) 70%)",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-q-teal/40" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-q-teal/20" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
        <div className="grid grid-cols-1 gap-x-16 gap-y-14 lg:grid-cols-12">
          {/* ── Statement ────────────────────────────────────── */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <Eyebrow tone="light">Across both modalities</Eyebrow>
              </Reveal>

              <h2
                id="capabilities-title"
                className="u-h2 mt-6 text-[clamp(2.05rem,4.6vw,3.5rem)] text-white"
              >
                <LineReveal>Key capabilities</LineReveal>
                <LineReveal delay={90}>&amp; deliverables</LineReveal>
                <LineReveal delay={180}>
                  <span className="text-q-teal-100/55">across both</span>
                </LineReveal>
                <LineReveal delay={270}>
                  modalities<span className="text-q-teal">.</span>
                </LineReveal>
              </h2>

              <Reveal delay={260}>
                <p className="u-pretty mt-7 max-w-[46ch] text-[15.5px] leading-[1.78] text-q-teal-100/70">
                  From the first concept drawing through to practical completion,
                  the same engineering team carries the documentation, the grid
                  connection and the compliance evidence.
                </p>
              </Reveal>

              <Reveal delay={340} className="mt-9">
                <a
                  href={CONTACT.phoneHref}
                  className="group inline-flex items-center gap-3 border border-q-teal-100/28 px-5 py-3.5 text-[13.5px] font-bold text-white transition-colors duration-500 hover:border-q-teal hover:bg-q-teal hover:text-q-navy-900"
                  style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                >
                  <IconPhone className="h-4 w-4" />
                  Call now for a quote
                  <IconArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Reveal>

              <Reveal delay={400} className="mt-10 flex items-center gap-5 border-t border-white/12 pt-5">
                <span className="u-tabular font-mono text-[26px] leading-none text-q-teal">
                  03
                </span>
                <p className="max-w-[26ch] text-[12.5px] leading-relaxed text-q-teal-100/55">
                  deliverables carried under one contractor licence.
                </p>
              </Reveal>
            </div>
          </div>

          {/* ── Deliverable rows ─────────────────────────────── */}
          <div className="lg:col-span-7">
            <div className="border-t border-white/12">
              {CAPABILITIES.map((c, i) => {
                const Icon = ICONS[c.icon];
                const on = hovered === i;
                return (
                  <Reveal key={c.id} delay={i * 90}>
                    <article
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => setHovered((h) => (h === i ? null : h))}
                      className={cn(
                        "group relative border-b border-white/12 transition-colors duration-500",
                        on && "bg-white/[0.045]",
                      )}
                    >
                      <span
                        aria-hidden
                        className={cn(
                          "absolute left-0 top-0 h-full w-[2px] origin-top bg-q-teal transition-transform duration-700",
                          on ? "scale-y-100" : "scale-y-0",
                        )}
                        style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                      />

                      <div
                        className={cn(
                          "flex items-start gap-5 py-8 transition-[padding] duration-500 sm:gap-7 sm:py-9",
                          on ? "pl-5" : "pl-0",
                        )}
                        style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                      >
                        <span
                          className={cn(
                            "flex h-11 w-11 shrink-0 items-center justify-center rounded-[4px] border transition-all duration-500",
                            on
                              ? "border-q-teal bg-q-teal text-q-navy-900"
                              : "border-white/18 text-q-teal-100/75",
                          )}
                          style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                        >
                          <Icon className="h-5 w-5" strokeWidth={1} />
                        </span>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-baseline gap-4">
                            <span className="u-eyebrow u-tabular text-white/32">
                              {c.index}
                            </span>
                            <h3 className="text-[clamp(1.1rem,2.1vw,1.4rem)] font-bold leading-[1.2] tracking-[-0.022em] text-white">
                              {c.title}
                            </h3>
                          </div>
                          <p className="u-pretty mt-3 max-w-[62ch] text-[14px] leading-[1.72] text-q-teal-100/62">
                            {c.body}
                          </p>
                        </div>

                        <span className="u-eyebrow hidden shrink-0 pt-2 text-q-teal/70 sm:block">
                          {c.meta}
                        </span>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={160} className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <span className="u-eyebrow text-white/32">
                Contractor licence 478965C · Master security licence 000109137
              </span>
              <a
                href="#installations"
                className="group inline-flex items-center gap-2.5 border-b border-q-teal-100/30 pb-1.5 text-[13px] font-semibold text-q-teal-100 transition-colors duration-500 hover:border-q-teal hover:text-white"
              >
                Electrical services · Installations
                <IconArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
