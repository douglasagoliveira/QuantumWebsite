import { ELECTRICAL_PROJECTS } from "@/data/electrical";
import { Eyebrow, LineReveal, Reveal } from "@/components/Reveal";
import { IconArrowUpRight } from "@/components/Icons";

/* ─────────────────────────────────────────────────────────────
   FOLD 05 — Some of our projects
   Light gallery: asymmetric editorial frames, serif captions.
   ───────────────────────────────────────────────────────────── */

const SLOTS = [
  "lg:col-span-7",
  "lg:col-span-5 lg:pt-14",
  "lg:col-span-8 lg:col-start-3 lg:pt-4",
];

export default function Work() {
  return (
    <section
      id="projects"
      aria-labelledby="work-title"
      className="relative scroll-mt-24 overflow-hidden bg-q-shell lg:scroll-mt-28"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="u-grid-paper absolute inset-0 opacity-35" />
        <div className="absolute inset-x-0 top-0 h-px bg-q-navy/10" />
        <div
          className="absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full opacity-45 blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgba(175,219,218,0.5) 0%, rgba(175,219,218,0) 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-[36rem]">
            <Reveal>
              <Eyebrow tone="teal">Delivered by Quantum</Eyebrow>
            </Reveal>
            <h2
              id="work-title"
              className="u-h2 mt-6 text-[clamp(2.1rem,4.6vw,3.5rem)] text-q-navy"
            >
              <LineReveal>Some of our</LineReveal>
              <LineReveal delay={90}>
                projects<span className="text-q-teal">.</span>
              </LineReveal>
            </h2>
          </div>

          <Reveal delay={180} className="flex flex-col items-start gap-4 sm:items-end">
            <a
              href="/#projects"
              className="group inline-flex items-center gap-2.5 border-b border-q-navy/25 pb-1.5 text-[13.5px] font-semibold text-q-navy transition-colors duration-500 hover:border-q-teal hover:text-q-teal-600"
            >
              All projects
              <IconArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-12">
          {ELECTRICAL_PROJECTS.map((p, i) => (
            <Reveal
              key={p.id}
              delay={i * 110}
              className={`group ${SLOTS[i] ?? "lg:col-span-6"}`}
            >
              <a href={p.href} className="block">
                <div className="relative overflow-hidden rounded-[12px] bg-q-navy-100 ring-1 ring-q-navy/10">
                  <div className="aspect-[16/11] w-full overflow-hidden">
                    <img
                      src={p.image}
                      alt={`${p.title} — ${p.place}`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-q-navy-900/55 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-[12px] ring-1 ring-inset ring-white/14"
                  />

                  <span className="u-tabular u-eyebrow absolute left-4 top-4 rounded-[3px] border border-white/18 bg-q-navy-900/55 px-2.5 py-1.5 text-[9.5px] text-white/90 backdrop-blur-md">
                    {p.index}
                  </span>

                  <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/22 bg-q-navy-900/45 text-white backdrop-blur-md transition-all duration-500 group-hover:border-q-teal group-hover:bg-q-teal group-hover:text-q-navy-900">
                    <IconArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-q-navy/12 pb-4">
                  <h3 className="font-serif text-[clamp(1.5rem,2.6vw,2rem)] font-normal leading-[1.1] tracking-[-0.01em] text-q-navy transition-colors duration-500 group-hover:text-q-teal-600">
                    {p.title}
                  </h3>
                  <span className="u-eyebrow text-q-navy/40">{p.place}</span>
                </div>
                <p className="mt-3 text-[12.5px] font-medium leading-relaxed text-q-slate/85">
                  {p.spec}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
