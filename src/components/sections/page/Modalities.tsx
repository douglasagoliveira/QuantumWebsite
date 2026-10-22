import { useState } from "react";
import { cn } from "@/utils/cn";
import { MODALITIES } from "@/data/electrical";
import { LineReveal, Reveal } from "@/components/Reveal";
import { IconArrowUpRight, IconPlus } from "@/components/Icons";

/* ─────────────────────────────────────────────────────────────
   FOLD 02 — Quantum's two operational modalities
   Editorial fixed-image showcase, same interaction language as
   the homepage capabilities fold.
   ───────────────────────────────────────────────────────────── */
export default function Modalities() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [open, setOpen] = useState<number | null>(0);
  const [activeImage, setActiveImage] = useState<number>(0);

  return (
    <section
      id="modalities"
      aria-labelledby="modalities-title"
      className="relative scroll-mt-24 overflow-hidden bg-q-white lg:scroll-mt-28"
      onMouseLeave={() => setActiveImage(open ?? 0)}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="u-grid-paper absolute inset-0 opacity-35" />
        <div
          className="absolute -left-40 top-32 h-[520px] w-[520px] rounded-full opacity-50 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(175,219,218,0.42) 0%, rgba(175,219,218,0) 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-28 lg:px-14 lg:py-32">
        <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-12 lg:gap-y-16">
          {/* ── Sticky editorial column ──────────────────────── */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <h2
                id="modalities-title"
                className="u-h2 text-[clamp(2rem,4.4vw,3.4rem)] text-q-navy"
              >
                <LineReveal>Design and</LineReveal>
                <LineReveal delay={90}>constructional —</LineReveal>
                <LineReveal delay={180}>
                  one partnership<span className="text-q-teal">.</span>
                </LineReveal>
              </h2>

              <Reveal delay={220}>
                <p className="u-pretty mt-7 max-w-[52ch] text-[15.5px] leading-[1.75] text-q-slate">
                  We operate across two strategic modalities: in Design,
                  integrating all systems in partnership with electrical
                  consultants, from inception; and in Constructional, auditing
                  existing plans to implement engineering enhancements,
                  optimisations, and seamless on-site integration without scope
                  gaps.
                </p>
              </Reveal>

              <Reveal delay={300} className="mt-8 lg:mt-10">
                <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-[10px] bg-q-navy-900/10 shadow-[0_24px_50px_-20px_rgba(8,41,74,0.22)] ring-1 ring-q-navy/12 sm:rounded-[12px]">
                  {MODALITIES.map((m, i) => {
                    const isActive = activeImage === i;
                    return (
                      <div
                        key={m.id}
                        aria-hidden={!isActive}
                        className={cn(
                          "absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
                          isActive
                            ? "z-10 scale-100 opacity-100"
                            : "pointer-events-none z-0 scale-105 opacity-0",
                        )}
                      >
                        <img
                          src={m.image}
                          alt={m.imageAlt}
                          loading={i === 0 ? "eager" : "lazy"}
                          decoding="async"
                          className="h-full w-full object-cover"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-q-navy-900/85 via-q-navy-900/20 to-transparent" />
                      </div>
                    );
                  })}

                  <div className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] ring-1 ring-inset ring-white/18" />

                  <div className="absolute right-3.5 top-3.5 z-20 flex items-center gap-2 rounded-full border border-white/18 bg-q-navy-900/65 px-3 py-1.5 backdrop-blur-md">
                    <div className="flex items-center gap-1.5" aria-hidden="true">
                      {MODALITIES.map((m, i) => (
                        <button
                          key={m.id}
                          type="button"
                          aria-label={`Show modality ${m.index}: ${m.title}`}
                          onClick={() => {
                            setActiveImage(i);
                            setOpen(i);
                          }}
                          className={cn(
                            "h-1.5 cursor-pointer rounded-full transition-all duration-500",
                            activeImage === i
                              ? "w-5 bg-q-teal shadow-[0_0_8px_rgba(0,179,166,0.6)]"
                              : "w-1.5 bg-white/40 hover:bg-white/70",
                          )}
                        />
                      ))}
                    </div>
                    <span className="u-tabular u-eyebrow text-[10px] font-bold tracking-wider text-white/95">
                      {MODALITIES[activeImage].index} / 02
                    </span>
                  </div>

                  <div className="absolute inset-x-3.5 bottom-3.5 z-20">
                    <div className="rounded-[8px] border border-white/14 bg-q-navy-900/80 p-3.5 shadow-lg backdrop-blur-md">
                      <div className="flex items-center justify-between gap-3">
                        <span className="u-eyebrow text-[10px] font-bold uppercase tracking-widest text-q-teal">
                          {MODALITIES[activeImage].index} · Modality
                        </span>
                        <span className="text-[11px] font-semibold text-white/60">
                          {MODALITIES[activeImage].specs[0]?.v}
                        </span>
                      </div>
                      <p className="mt-1 truncate text-[14px] font-semibold text-white sm:text-[15px]">
                        {MODALITIES[activeImage].title}
                      </p>
                      <p className="mt-0.5 truncate text-[12px] text-white/75">
                        {MODALITIES[activeImage].subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={360} className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                <span className="u-eyebrow text-q-navy/38">Delivered across</span>
                {["Power infrastructure", "KNX / DALI", "Architectural lighting", "Electronic security"].map(
                  (t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-q-navy/72"
                    >
                      <span aria-hidden className="block h-1 w-1 rotate-45 bg-q-teal/60" />
                      {t}
                    </span>
                  ),
                )}
              </Reveal>
            </div>
          </div>

          {/* ── Interactive index ────────────────────────────── */}
          <div className="lg:col-span-7">
            <div className="relative border-t border-q-navy/12">
              {MODALITIES.map((m, i) => {
                const isOpen = open === i;
                const isHovered = hovered === i;
                const isCurrent = activeImage === i;
                return (
                  <article
                    key={m.id}
                    className={cn(
                      "group relative border-b border-q-navy/12 transition-colors duration-500",
                      isHovered ? "bg-q-shell" : isCurrent ? "bg-q-shell/60" : "bg-transparent",
                    )}
                    onMouseEnter={() => {
                      setHovered(i);
                      setActiveImage(i);
                    }}
                    onMouseLeave={() => setHovered((h) => (h === i ? null : h))}
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "absolute left-0 top-0 h-full w-[2px] origin-top bg-q-teal transition-transform duration-700",
                        isHovered || isCurrent || isOpen ? "scale-y-100" : "scale-y-0",
                      )}
                      style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                    />

                    <button
                      type="button"
                      onClick={() => {
                        setOpen(isOpen ? null : i);
                        setActiveImage(i);
                      }}
                      aria-expanded={isOpen}
                      aria-controls={`modality-panel-${m.id}`}
                      className="flex w-full items-start gap-5 px-4 py-8 text-left transition-[padding] duration-500 hover:px-6 sm:gap-7 sm:py-10"
                      style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                    >
                      <span
                        className={cn(
                          "u-eyebrow u-tabular mt-2 w-8 shrink-0 transition-colors duration-500",
                          isHovered || isCurrent || isOpen ? "text-q-teal" : "text-q-navy/38",
                        )}
                      >
                        {m.index}
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block">
                          <span
                            className={cn(
                              "block text-[clamp(1.4rem,2.8vw,2rem)] font-bold leading-[1.08] tracking-[-0.025em] transition-[transform,color] duration-700",
                              isHovered || isCurrent || isOpen
                                ? "translate-x-1.5 text-q-navy"
                                : "translate-x-0 text-q-navy/88",
                            )}
                            style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                          >
                            {m.title}
                          </span>
                          <span className="mt-2 block font-mono text-[10.5px] uppercase tracking-[0.14em] text-q-teal-600/85">
                            {m.subtitle}
                          </span>
                        </span>
                        <span
                          className={cn(
                            "mt-3 block max-w-[62ch] text-[14.5px] leading-relaxed text-q-slate transition-opacity duration-500",
                            isOpen ? "opacity-100" : "opacity-75",
                          )}
                        >
                          {m.paragraphs[0]}
                        </span>
                      </span>

                      <span
                        className={cn(
                          "mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-700",
                          isOpen
                            ? "rotate-45 border-q-teal bg-q-teal text-white"
                            : "border-q-navy/20 text-q-navy/60 group-hover:border-q-teal group-hover:text-q-teal",
                        )}
                        style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                      >
                        <IconPlus className="h-4 w-4" />
                      </span>
                    </button>

                    <div
                      id={`modality-panel-${m.id}`}
                      className={cn(
                        "grid overflow-hidden transition-[grid-template-rows,opacity] duration-700",
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                      )}
                      style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                    >
                      <div className="min-h-0">
                        <div className="px-4 pb-9 pl-[52px] sm:px-6 sm:pl-[62px]">
                          <div className="space-y-3">
                            {m.paragraphs.slice(1).map((p) => (
                              <p
                                key={p}
                                className="u-pretty max-w-[66ch] text-[14px] leading-[1.72] text-q-slate"
                              >
                                {p}
                              </p>
                            ))}
                          </div>

                          <dl className="mb-6 mt-6 flex flex-wrap gap-x-8 gap-y-3 border-y border-q-navy/10 py-4">
                            {m.specs.map((s) => (
                              <div key={s.k} className="flex items-baseline gap-2.5">
                                <dt className="u-eyebrow text-q-navy/42">{s.k}</dt>
                                <dd className="u-tabular text-[13px] font-semibold text-q-navy">
                                  {s.v}
                                </dd>
                              </div>
                            ))}
                          </dl>

                          <ul className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                            {m.deliverables.map((d, di) => (
                              <li
                                key={d}
                                className="flex items-start gap-3 text-[13.5px] font-medium leading-snug text-q-slate"
                                style={{ transitionDelay: `${di * 55}ms` }}
                              >
                                <span className="mt-[7px] block h-px w-3.5 shrink-0 bg-q-teal" />
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <Reveal delay={120} className="mt-9 flex flex-wrap items-center justify-between gap-5">
              <p className="u-eyebrow text-q-navy/40">
                Design &amp; constructional
              </p>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 border-b border-q-navy/25 pb-1.5 text-[14px] font-semibold text-q-navy transition-colors duration-500 hover:border-q-teal hover:text-q-teal-600"
              >
                Call now for a quote
                <IconArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
