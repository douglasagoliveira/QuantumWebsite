import { CONTACT } from "@/data/content";
import { ELECTRICAL_PAGE, INSTALLATIONS } from "@/data/electrical";
import { Eyebrow, LineReveal, Reveal } from "@/components/Reveal";
import { IconArrowUpRight, IconPhone } from "@/components/Icons";

/* ─────────────────────────────────────────────────────────────
   FOLD 04 — Electrical services · Installations
   The full published scope, set as a technical register rather
   than a card grid.
   ───────────────────────────────────────────────────────────── */

const LEFT = INSTALLATIONS.slice(0, 14);
const RIGHT = INSTALLATIONS.slice(14);

function Register({ items, offset }: { items: string[]; offset: number }) {
  return (
    <ul className="border-t border-q-navy/12">
      {items.map((item, i) => (
        <li key={item}>
          <div
            className="group relative flex items-baseline gap-4 border-b border-q-navy/10 py-3 transition-[padding] duration-500 hover:pl-2"
            style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
          >
            <span
              aria-hidden
              className="absolute bottom-0 left-0 h-[1px] w-0 bg-q-teal/60 transition-[width] duration-500 group-hover:w-full"
              style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
            />
            <span className="u-tabular u-eyebrow w-6 shrink-0 text-[9px] text-q-navy/30 transition-colors duration-500 group-hover:text-q-teal-600">
              {String(offset + i + 1).padStart(2, "0")}
            </span>
            <span className="flex-1 text-[13.5px] font-medium leading-snug text-q-slate transition-colors duration-500 group-hover:text-q-navy">
              {item}
            </span>
            <IconArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-q-navy/0 transition-all duration-500 group-hover:text-q-teal" />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function Installations() {
  return (
    <section
      id="installations"
      aria-labelledby="installations-title"
      className="relative scroll-mt-24 overflow-hidden bg-q-white lg:scroll-mt-28"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="u-grid-paper absolute inset-0 opacity-40" />
        <div
          className="absolute -left-48 top-1/3 h-[560px] w-[560px] rounded-full opacity-45 blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgba(0,179,166,0.16) 0%, rgba(0,179,166,0) 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
        <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-12">
          {/* ── Sticky heading ──────────────────────────────── */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <Eyebrow tone="teal">Electrical services</Eyebrow>
              </Reveal>

              <h2
                id="installations-title"
                className="u-display mt-6 text-[clamp(2.3rem,5.4vw,4rem)] text-q-navy"
              >
                <LineReveal>Installations</LineReveal>
              </h2>

              <Reveal delay={120}>
                <p className="mt-5 flex items-baseline gap-4">
                  <span className="u-tabular font-mono text-[clamp(1.7rem,3.4vw,2.4rem)] leading-none text-q-teal-600">
                    {String(INSTALLATIONS.length).padStart(2, "0")}
                  </span>
                  <span className="u-eyebrow text-q-navy/45">listed works</span>
                </p>
              </Reveal>

              <Reveal delay={200}>
                <p className="u-pretty mt-7 max-w-[40ch] text-[15px] leading-[1.78] text-q-slate">
                  Residential, commercial and industrial scope delivered by the
                  same team — from a single power point to main switchboard
                  upgrades and reticulation systems.
                </p>
              </Reveal>

              <Reveal delay={280} className="mt-9 flex flex-col gap-4 border-t border-q-navy/12 pt-7">
                <a
                  href={CONTACT.phoneHref}
                  className="group inline-flex w-fit items-center gap-3 bg-q-navy px-6 py-3.5 text-[14px] font-bold text-white transition-colors duration-500 hover:bg-q-teal hover:text-q-navy-900"
                  style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                >
                  <IconPhone className="h-4 w-4" />
                  Call now for a quote
                </a>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                  <span className="u-eyebrow text-q-navy/38">
                    Licence {ELECTRICAL_PAGE.facts[0].v}
                  </span>
                  <span className="u-eyebrow text-q-navy/38">
                    {ELECTRICAL_PAGE.facts[2].v} emergency call-out
                  </span>
                </div>
              </Reveal>
            </div>
          </div>

          {/* ── Register ────────────────────────────────────── */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 sm:gap-y-0">
              <Reveal>
                <Register items={LEFT} offset={0} />
              </Reveal>
              <Reveal delay={120} className="mt-0">
                <Register items={RIGHT} offset={LEFT.length} />
              </Reveal>
            </div>

            <Reveal delay={160} className="mt-9 flex flex-wrap items-center justify-between gap-5 border-t border-q-navy/12 pt-6">
              <p className="max-w-[42ch] text-[12.5px] leading-relaxed text-q-slate/80">
                Not listed? The register above is the published scope — send the
                drawing set and we will confirm what we can carry.
              </p>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 border-b border-q-navy/25 pb-1.5 text-[14px] font-semibold text-q-navy transition-colors duration-500 hover:border-q-teal hover:text-q-teal-600"
              >
                Discuss your scope
                <IconArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
