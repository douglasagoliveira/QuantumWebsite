import { CONTACT } from "@/data/content";
import { ELECTRICAL_PAGE } from "@/data/electrical";
import { LineReveal, Reveal } from "@/components/Reveal";
import { IconArrowRight, IconArrowUpRight, IconPhone } from "@/components/Icons";

/* ─────────────────────────────────────────────────────────────
   FOLD 01 — Electrical Services hero
   Editorial light stage: oversized display type on the left,
   technical media composition on the right.
   ───────────────────────────────────────────────────────────── */
export default function ServicesHero() {
  const {
    eyebrow,
    eyebrowSub,
    headline,
    subline,
    lead,
    ctaPrimary,
    ctaSecondary,
    media,
    facts,
  } = ELECTRICAL_PAGE;

  return (
    <section
      aria-labelledby="electrical-title"
      className="relative overflow-hidden bg-q-shell"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="u-grid-paper absolute inset-0 opacity-45" />
        <div
          className="absolute -right-40 -top-24 h-[560px] w-[560px] rounded-full opacity-60 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(175,219,218,0.5) 0%, rgba(175,219,218,0) 70%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-px bg-q-navy/10" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:px-14 lg:pb-28 lg:pt-20">
        <div className="grid grid-cols-1 items-start gap-x-16 gap-y-14 lg:grid-cols-12">
          {/* ── Copy ─────────────────────────────────────────── */}
          <div className="lg:col-span-6">
            <Reveal>
              <nav aria-label="Breadcrumb" className="mb-7">
                <ol className="flex items-center gap-2.5">
                  <li>
                    <a
                      href="/"
                      className="u-eyebrow text-[9.5px] text-q-navy/35 transition-colors duration-400 hover:text-q-navy"
                    >
                      Home
                    </a>
                  </li>
                  <li aria-hidden className="h-px w-4 bg-q-navy/22" />
                  <li aria-current="page" className="u-eyebrow text-[9.5px] text-q-navy/60">
                    Electrical services
                  </li>
                </ol>
              </nav>
            </Reveal>

            <Reveal delay={60}>
              <div className="flex flex-wrap items-center gap-3">
                <span className="u-eyebrow text-q-navy/55">{eyebrow}</span>
                <span aria-hidden className="h-px w-6 shrink-0 bg-q-navy/25" />
                <span className="u-eyebrow text-q-teal-600">{eyebrowSub}</span>
              </div>
            </Reveal>

            <h1
              id="electrical-title"
              className="u-display mt-7 text-[clamp(2.5rem,6vw,4.7rem)] text-q-navy"
            >
              <LineReveal>{headline[0]}</LineReveal>
              <LineReveal delay={90}>{headline[1]}</LineReveal>
              <LineReveal delay={180}>
                {headline[2]}
                <span className="text-q-teal">.</span>
              </LineReveal>
            </h1>

            <Reveal delay={240}>
              <p className="mt-6 flex items-start gap-3.5 font-serif text-[clamp(1.4rem,2.8vw,1.95rem)] italic leading-[1.16] tracking-[-0.01em] text-q-navy/62">
                <span
                  aria-hidden
                  className="mt-[0.62em] block h-px w-7 shrink-0 bg-q-teal/70"
                />
                {subline}
              </p>
            </Reveal>

            <Reveal delay={300}>
              <p className="u-pretty mt-7 max-w-[56ch] text-[16px] leading-[1.78] text-q-slate">
                {lead}
              </p>
            </Reveal>

            <Reveal delay={360} className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a
                href={CONTACT.phoneHref}
                className="group inline-flex items-center gap-3 bg-q-navy px-6 py-3.5 text-[14px] font-bold text-white transition-colors duration-500 hover:bg-q-teal hover:text-q-navy-900"
                style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
              >
                <IconPhone className="h-4 w-4" />
                {ctaPrimary}
                <IconArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </a>
              <a
                href="#installations"
                className="group inline-flex items-center gap-2.5 border-b border-q-navy/25 pb-1.5 text-[14px] font-semibold text-q-navy transition-colors duration-500 hover:border-q-teal hover:text-q-teal-600"
              >
                {ctaSecondary}
                <IconArrowRight className="h-4 w-4 rotate-90 transition-transform duration-500 group-hover:translate-y-0.5" />
              </a>
            </Reveal>

            {/* licence / contact facts */}
            <Reveal delay={420} className="mt-11 border-t border-q-navy/12">
              <dl className="grid grid-cols-1 sm:grid-cols-3">
                {facts.map((f) => (
                  <div
                    key={f.k}
                    className={
                      "flex items-baseline justify-between gap-4 border-b border-q-navy/12 py-4 sm:block sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0"
                    }
                  >
                    <dt className="u-eyebrow text-q-navy/40">{f.k}</dt>
                    <dd className="u-tabular mt-0 font-mono text-[15px] font-medium text-q-navy sm:mt-2 sm:text-[16px]">
                      {f.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* ── Media composition ───────────────────────────── */}
          <div className="lg:col-span-6">
            <Reveal delay={220}>
              <div className="mx-auto flex max-w-[32rem] items-start gap-3 lg:ml-auto lg:mr-0 lg:max-w-none lg:gap-4">
                <figure className="relative w-full shrink-0 overflow-hidden rounded-[12px] bg-q-navy-900/10 shadow-[0_30px_70px_-34px_rgba(8,41,74,0.35)] ring-1 ring-q-navy/12 sm:w-[60%]">
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <img
                      src={media.primary}
                      alt={media.primaryAlt}
                      width={500}
                      height={625}
                      fetchPriority="high"
                      decoding="async"
                      className="u-kenburns h-full w-full object-cover"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-q-navy-900/85 via-q-navy-900/12 to-transparent"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/16"
                    />

                    {/* top technical HUD */}
                    <div className="absolute left-3.5 top-3.5 flex items-center gap-2.5 rounded-[3px] border border-white/16 bg-q-navy-900/62 px-3 py-2 backdrop-blur-md">
                      <span className="block h-1.5 w-1.5 rounded-full bg-q-teal shadow-[0_0_8px_rgba(0,179,166,0.75)]" />
                      <span className="u-eyebrow text-[9.5px] text-white/90">
                        {media.place}
                      </span>
                    </div>

                    {/* caption */}
                    <figcaption className="absolute inset-x-3.5 bottom-3.5">
                      <div className="rounded-[8px] border border-white/14 bg-q-navy-900/78 p-4 backdrop-blur-md">
                        <div className="flex items-center justify-between gap-3">
                          <span className="u-eyebrow text-[9.5px] text-q-teal">
                            Delivered by Quantum
                          </span>
                          <span className="u-tabular u-eyebrow text-[9.5px] text-white/55">
                            Lic. 478965C
                          </span>
                        </div>
                        <p className="mt-1.5 text-[15px] font-semibold leading-tight text-white">
                          {media.credit}
                        </p>
                        <p className="mt-1 text-[12px] leading-snug text-white/72">
                          {media.creditSub}
                        </p>
                      </div>
                    </figcaption>
                  </div>
                </figure>

                {/* offset secondary frame */}
                <div className="hidden min-w-0 flex-1 flex-col gap-4 pt-14 sm:flex lg:pt-20">
                  <figure className="relative overflow-hidden rounded-[10px] bg-q-navy-900/10 shadow-[0_24px_50px_-26px_rgba(8,41,74,0.4)] ring-1 ring-q-navy/12">
                    <div className="relative aspect-[3/4] w-full overflow-hidden">
                      <img
                        src={media.secondary}
                        alt={media.secondaryAlt}
                        width={400}
                        height={533}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                      />
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-q-navy-900/75 via-transparent to-transparent"
                      />
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/16"
                      />
                      <div className="absolute inset-x-3 bottom-3">
                        <span className="u-eyebrow block text-[8.5px] text-q-teal">
                          Hospitality &amp; commercial
                        </span>
                        <span className="mt-1.5 block font-serif text-[15px] leading-tight text-white">
                          The Eveleigh
                        </span>
                      </div>
                    </div>
                  </figure>

                  <div className="border-t border-q-navy/12 pt-3.5">
                    <p className="u-eyebrow text-[9px] text-q-navy/38">Stage</p>
                    <p className="mt-1.5 text-[12.5px] font-semibold leading-snug text-q-navy">
                      Concept to practical completion
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={480} className="mt-2 flex items-center justify-between gap-6 lg:mt-0 lg:pl-1">
              <p className="max-w-[30ch] text-[12.5px] leading-relaxed text-q-slate/80">
                Single point of responsibility across electrical, automation and
                security disciplines.
              </p>
              <a
                href="#modalities"
                className="group inline-flex shrink-0 items-center gap-2 border-b border-q-navy/20 pb-1 text-[12.5px] font-semibold text-q-navy transition-colors duration-500 hover:border-q-teal hover:text-q-teal-600"
              >
                Two modalities
                <IconArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
