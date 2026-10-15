import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { EXPERTISE_MARQUEE, SECTORS } from "@/data/content";
import { Eyebrow, LineReveal, Reveal } from "@/components/Reveal";
import { useLiveInView } from "@/hooks/useMotion";
import { IconArrowUpRight, IconPlus } from "@/components/Icons";

/* ─────────────────────────────────────────────────────────────
   FOLD 05 — Sectors served
   ───────────────────────────────────────────────────────────── */
export default function Sectors() {
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(true);
  const { ref, inView } = useLiveInView<HTMLDivElement>();

  const s = SECTORS[i];

  useEffect(() => {
    if (!auto || !inView) return;
    const id = window.setInterval(() => setI((v) => (v + 1) % SECTORS.length), 7000);
    return () => window.clearInterval(id);
  }, [auto, inView]);

  const pick = (n: number) => {
    setAuto(false);
    setI(n);
  };

  return (
    <section
      id="sectors"
      ref={ref}
      aria-labelledby="sectors-title"
      className="relative scroll-mt-24 overflow-hidden bg-q-shell lg:scroll-mt-28"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="u-grid-paper absolute inset-0 opacity-40" />
        <div
          className="absolute right-[-12%] top-[18%] h-[560px] w-[560px] rounded-full opacity-50 blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgba(0,179,166,0.16) 0%, rgba(0,179,166,0) 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
        {/* ── Heading + sector index ───────────────────────── */}
        <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2
              id="sectors-title"
              className="u-h2 text-[clamp(2.1rem,4.8vw,3.6rem)] text-q-navy"
            >
              <LineReveal>Know-how for</LineReveal>
              <LineReveal delay={90}>varied demands</LineReveal>
              <LineReveal delay={180}>
                <span className="text-q-navy/38">across Sydney</span>
                <span className="text-q-teal">.</span>
              </LineReveal>
            </h2>
            <Reveal delay={220}>
              <p className="u-pretty mt-7 max-w-[48ch] text-[15.5px] leading-[1.75] text-q-slate">
                Whether in residence, commerce or industry, a qualified team and
                committed partners serve the whole of Sydney — from a single
                safety switch to a floodlit sporting facility.
              </p>
            </Reveal>

            {/* sector selector */}
            <Reveal delay={280} className="mt-11 border-t border-q-navy/12">
              {SECTORS.map((sec, n) => {
                const on = n === i;
                return (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => pick(n)}
                    aria-pressed={on}
                    className={cn(
                      "group relative flex w-full items-center gap-5 border-b border-q-navy/12 py-4 text-left transition-[padding,background-color] duration-500",
                      on ? "px-4" : "px-0 hover:px-3 hover:bg-white/70",
                    )}
                    style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "absolute left-0 top-0 h-full w-[2px] origin-top bg-q-teal transition-transform duration-700",
                        on ? "scale-y-100" : "scale-y-0",
                      )}
                      style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                    />
                    <span
                      className={cn(
                        "u-eyebrow u-tabular w-9 shrink-0 transition-colors duration-500",
                        on ? "text-q-teal" : "text-q-navy/35",
                      )}
                    >
                      {sec.index}
                    </span>
                    <span
                      className={cn(
                        "flex-1 text-[17px] font-bold tracking-[-0.02em] transition-colors duration-500 sm:text-[19px]",
                        on ? "text-q-navy" : "text-q-navy/55 group-hover:text-q-navy/85",
                      )}
                    >
                      {sec.label}
                    </span>
                    <span
                      className={cn(
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-500",
                        on
                          ? "rotate-90 border-q-teal bg-q-teal text-white"
                          : "border-q-navy/18 text-q-navy/40 group-hover:border-q-teal group-hover:text-q-teal",
                      )}
                      style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                    >
                      <IconPlus className="h-3.5 w-3.5" />
                    </span>
                    {/* progress hairline for the auto-cycle */}
                    {on && auto && inView && (
                      <span
                        key={`prog-${i}-${auto}`}
                        aria-hidden
                        className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-q-teal/45"
                        style={{ animation: "sectorProg 7s linear both" }}
                      />
                    )}
                  </button>
                );
              })}
            </Reveal>
          </div>

          {/* ── Editorial panel ──────────────────────────────── */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* image stack */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[6px] bg-q-navy-100 ring-1 ring-q-navy/12 sm:aspect-[16/11]">
                {SECTORS.map((sec, n) => (
                  <img
                    key={sec.id}
                    src={sec.image}
                    alt={sec.headline}
                    loading={n === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className={cn(
                      "absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[900ms]",
                      n === i
                        ? "u-kenburns scale-100 opacity-100"
                        : "scale-105 opacity-0",
                    )}
                    style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                  />
                ))}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-q-navy-900/82 via-q-navy-900/12 to-transparent"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 shadow-[inset_0_0_90px_rgba(8,41,74,0.35)]"
                />

                {/* caption bar */}
                <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 p-5 sm:p-7">
                  <div>
                    <span className="u-eyebrow text-q-teal">{s.index}</span>
                    <p
                      key={`cap-${s.id}`}
                      className="mt-2.5 max-w-[30ch] text-[clamp(1.35rem,2.6vw,1.95rem)] font-bold leading-[1.06] tracking-[-0.028em] text-white"
                      style={{ animation: "secIn 640ms cubic-bezier(0.22,1,0.36,1) both" }}
                    >
                      {s.headline}
                    </p>
                  </div>
                  <span className="u-eyebrow shrink-0 text-q-teal-100/60">{s.credit}</span>
                </div>

                {/* index badge */}
                <div className="absolute right-5 top-5 flex items-center gap-2.5 rounded-[3px] bg-q-navy-900/60 px-3 py-2 backdrop-blur-md ring-1 ring-white/14">
                  <span className="u-tabular font-mono text-[12px] text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-3 w-px bg-white/25" />
                  <span className="u-tabular font-mono text-[12px] text-q-teal-100/70">
                    {String(SECTORS.length).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* body + stats */}
              <div className="mt-7 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-12">
                <div className="sm:col-span-7">
                  <p
                    key={`body-${s.id}`}
                    className="u-pretty text-[15px] leading-[1.75] text-q-slate"
                    style={{ animation: "secIn 640ms cubic-bezier(0.22,1,0.36,1) 60ms both" }}
                  >
                    {s.body}
                  </p>

                  <dl className="mt-7 border-t border-q-navy/12">
                    {s.stats.map((st, n2) => (
                      <div
                        key={st.k}
                        className="flex items-baseline justify-between gap-6 border-b border-q-navy/12 py-3"
                        style={{
                          animation: `secIn 560ms cubic-bezier(0.22,1,0.36,1) ${120 + n2 * 70}ms both`,
                        }}
                      >
                        <dt className="u-eyebrow text-q-navy/42">{st.k}</dt>
                        <dd className="u-tabular font-mono text-[12.5px] text-q-navy">
                          {st.v}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="sm:col-span-5">
                  <span className="u-eyebrow mb-4 block text-q-navy/42">
                    Scope we carry
                  </span>
                  <ul className="space-y-0">
                    {s.services.map((svc, n3) => (
                      <li
                        key={svc}
                        className="group flex items-start gap-3 border-b border-q-navy/10 py-2.5 text-[13.5px] font-medium leading-snug text-q-slate transition-colors duration-500 hover:text-q-navy"
                        style={{
                          animation: `secIn 520ms cubic-bezier(0.22,1,0.36,1) ${160 + n3 * 55}ms both`,
                        }}
                      >
                        <span className="mt-[8px] block h-px w-3 shrink-0 bg-q-teal transition-all duration-500 group-hover:w-5" />
                        {svc}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="group mt-7 inline-flex items-center gap-2.5 border-b border-q-navy/25 pb-1.5 text-[14px] font-semibold text-q-navy transition-colors duration-500 hover:border-q-teal hover:text-q-teal-600"
                  >
                    Discuss a {s.label.toLowerCase()} project
                    <IconArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Capability marquee ─────────────────────────────── */}
        <div className="mt-20 border-y border-q-navy/12 py-7 lg:mt-28">
          <div className="mb-5 flex items-center gap-4">
            <Eyebrow tone="teal">Full capability list</Eyebrow>
            <span className="h-px flex-1 bg-q-navy/12" />
            <span className="u-eyebrow hidden text-q-navy/38 sm:block">
              {EXPERTISE_MARQUEE.length} disciplines
            </span>
          </div>

          <div className="group relative flex overflow-hidden">
            {/* Each cell owns its own trailing space, so translateX(-50%)
                lands exactly on one duplicated set — a seamless loop. */}
            <div
              className="animate-marquee flex shrink-0 items-center group-hover:[animation-play-state:paused]"
              style={{ willChange: "transform" }}
            >
              {[...EXPERTISE_MARQUEE, ...EXPERTISE_MARQUEE].map((word, n) => (
                <span key={`${word}-${n}`} className="flex shrink-0 items-center gap-8 pr-8">
                  <span className="text-[clamp(1.1rem,2.1vw,1.6rem)] font-semibold tracking-[-0.02em] text-q-navy/32 transition-colors duration-500 hover:text-q-navy">
                    {word}
                  </span>
                  <span className="block h-1 w-1 shrink-0 rotate-45 bg-q-teal/45" />
                </span>
              ))}
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-q-shell to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-q-shell to-transparent"
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes secIn {
          from { opacity: 0; transform: translate3d(0, 12px, 0); }
          to   { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @keyframes sectorProg {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
}
