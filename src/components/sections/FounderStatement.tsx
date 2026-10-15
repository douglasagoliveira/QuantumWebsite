import { cn } from "@/utils/cn";
import { CONTACT } from "@/data/content";
import { LineReveal, Reveal } from "@/components/Reveal";
import {
  IconArrowRight,
  IconCheck,
  IconMail,
  IconPhone,
  IconShield,
  IconBolt,
  IconClock,
} from "@/components/Icons";

/* ─────────────────────────────────────────────────────────────
   FOLD 05.5 — Founder's Statement & Executive Commitment
   Placed directly before the Final CTA / Contact Form
   ───────────────────────────────────────────────────────────── */

const FOUNDER_COMMITMENTS = [
  {
    icon: IconShield,
    title: "Single Point of Accountability",
    desc: "One engineering team across pre-construction, installation, and automation. No subcontractor finger-pointing.",
  },
  {
    icon: IconBolt,
    title: "Engineered, Never Decorated",
    desc: "AS/NZS 3000 compliance, precise load schedules, and photometric design locked before walls are closed.",
  },
  {
    icon: IconClock,
    title: "Long-Term Handover Partnership",
    desc: "Active post-handover support and direct line to the director throughout your build's entire lifecycle.",
  },
];

export default function FounderStatement() {
  return (
    <section
      id="founder"
      aria-labelledby="founder-title"
      className="relative scroll-mt-24 overflow-hidden bg-q-shell lg:scroll-mt-28"
    >
      {/* faint architectural grid + ambient corner glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="u-grid-paper absolute inset-0 opacity-45" />
        <div className="absolute inset-x-0 top-0 h-px bg-q-navy/10" />
        <div
          className="absolute -left-32 top-20 h-[560px] w-[560px] rounded-full opacity-40 blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgba(0,179,166,0.18) 0%, rgba(0,179,166,0) 70%)",
          }}
        />
        <div
          className="absolute right-[-10%] bottom-10 h-[520px] w-[520px] rounded-full opacity-35 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(13,62,105,0.12) 0%, rgba(13,62,105,0) 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-28 lg:px-14 lg:py-36">
        {/* ── Section Header ───────────────────────────────── */}
        <div className="mb-14 border-b border-q-navy/12 pb-8 lg:mb-18">
          <h2
            id="founder-title"
            className="u-h2 text-[clamp(2.1rem,4.6vw,3.6rem)] text-q-navy"
          >
            <LineReveal>The standard behind</LineReveal>
            <LineReveal delay={90}>every switch, scene</LineReveal>
            <LineReveal delay={180}>
              and circuit<span className="text-q-teal">.</span>
            </LineReveal>
          </h2>
        </div>

        {/* ── Main Editorial Grid ──────────────────────────── */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          {/* ── Left Column: Executive Profile Card ─────────── */}
          <div className="lg:col-span-5 xl:col-span-4">
            <Reveal delay={120}>
              <div className="relative overflow-hidden rounded-[14px] border border-q-navy/12 bg-white p-6 shadow-[0_24px_55px_-24px_rgba(8,41,74,0.14)] ring-1 ring-q-navy/5 sm:p-7">
                {/* Director Portrait with architectural accents */}
                <div className="relative mx-auto aspect-[4/4.6] w-full overflow-hidden rounded-[10px] bg-q-navy-900/10 shadow-sm ring-1 ring-q-navy/10">
                  <img
                    src="/geovani-percurandi.jpg"
                    alt="Geovani Percurandi - Managing Director at Quantum Electrical & Technological Services"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-103"
                  />
                  {/* Subtle inner ambient ring */}
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/18" />

                  {/* Live accountability status badge */}
                  <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2 rounded-full border border-white/20 bg-q-navy-900/75 px-3 py-1 backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-q-teal opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-q-teal" />
                    </span>
                    <span className="u-eyebrow text-[9.5px] font-semibold text-white/90">
                      ON-SITE EXECUTIVE
                    </span>
                  </div>
                </div>

                {/* Identity & Role */}
                <div className="mt-6 border-b border-q-navy/10 pb-5">
                  <h3 className="text-[20px] font-bold tracking-tight text-q-navy sm:text-[22px]">
                    {CONTACT.director}
                  </h3>
                  <p className="mt-0.5 text-[13.5px] font-semibold text-q-teal-600">
                    {CONTACT.directorRole} · Electrical Engineer
                  </p>
                  <p className="mt-1 text-[13px] text-q-slate/80">
                    Quantum Electrical & Technological Services
                  </p>
                </div>

                {/* Direct Contact Channels */}
                <div className="mt-5 space-y-2.5">
                  <a
                    href={CONTACT.phoneHref}
                    className="group flex items-center justify-between rounded-[8px] border border-q-navy/10 bg-q-shell/60 px-3.5 py-2.5 text-[13px] font-medium text-q-navy transition-all duration-300 hover:border-q-teal hover:bg-white hover:text-q-teal-600"
                  >
                    <span className="flex items-center gap-2.5">
                      <IconPhone className="h-4 w-4 text-q-teal" />
                      <span>{CONTACT.phoneDisplay}</span>
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-q-slate/60 group-hover:text-q-teal">
                      Direct Line
                    </span>
                  </a>

                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="group flex items-center justify-between rounded-[8px] border border-q-navy/10 bg-q-shell/60 px-3.5 py-2.5 text-[13px] font-medium text-q-navy transition-all duration-300 hover:border-q-teal hover:bg-white hover:text-q-teal-600"
                  >
                    <span className="flex items-center gap-2.5">
                      <IconMail className="h-4 w-4 text-q-teal" />
                      <span>{CONTACT.email}</span>
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-q-slate/60 group-hover:text-q-teal">
                      Inquiries
                    </span>
                  </a>
                </div>

                {/* Core Commitments Pill List */}
                <div className="mt-6 border-t border-q-navy/10 pt-5">
                  <span className="u-eyebrow text-[10px] text-q-navy/45">
                    EXECUTIVE PILLARS
                  </span>
                  <ul className="mt-3.5 space-y-3">
                    {FOUNDER_COMMITMENTS.map((c) => {
                      const Icon = c.icon;
                      return (
                        <li key={c.title} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-q-teal/10 text-q-teal">
                            <Icon className="h-3.5 w-3.5" />
                          </span>
                          <div className="min-w-0">
                            <p className="text-[13px] font-bold text-q-navy">
                              {c.title}
                            </p>
                            <p className="text-[12px] leading-relaxed text-q-slate/85">
                              {c.desc}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ── Right Column: The Letter & Manifesto ────────── */}
          <div className="lg:col-span-7 xl:col-span-8">
            <Reveal delay={200}>
              <div className="relative rounded-[16px] border border-q-navy/12 bg-white/95 p-7 shadow-[0_24px_55px_-24px_rgba(8,41,74,0.12)] backdrop-blur-sm sm:p-10 lg:p-12">
                {/* Large architectural watermark quote mark */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-6 top-6 select-none font-serif text-[120px] font-black leading-none text-q-navy/[0.04] sm:right-10 sm:top-8 sm:text-[160px]"
                >
                  “
                </div>

                {/* Quote Badge */}
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-q-teal text-white shadow-sm">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                    </svg>
                  </span>
                  <div>
                    <span className="u-eyebrow block text-[10.5px] font-bold text-q-teal">
                      MANAGING DIRECTOR’S MEMORANDUM
                    </span>
                    <span className="text-[12.5px] font-medium text-q-slate/75">
                      Sydney, Australia
                    </span>
                  </div>
                </div>

                {/* The Letter Content */}
                <div className="relative mt-8 space-y-6 text-[16px] leading-[1.8] text-q-slate sm:text-[17px]">
                  {/* Paragraph 1 */}
                  <p className="u-pretty">
                    Ever since I graduated and began working as an engineer, I
                    witnessed firsthand the deep frustration of clients across
                    Sydney: I saw budgets blown apart by a lack of early electrical
                    planning, builds halted by mid-construction wiring changes,
                    and an architect's refined design compromised simply because
                    the installer didn't understand smart system infrastructure.
                  </p>

                  {/* Accented Key Callout Quote */}
                  <blockquote className="my-7 rounded-r-[10px] border-l-4 border-q-teal bg-q-shell/90 p-5 shadow-xs sm:p-6">
                    <p className="text-[16.5px] font-bold leading-snug tracking-tight text-q-navy sm:text-[18.5px]">
                      “We don't just pull cables; we deliver the exact engineered
                      solution your project demands, protected against budget
                      traps and timeline surprises.”
                    </p>
                  </blockquote>

                  {/* Paragraph 2 */}
                  <p className="u-pretty">
                    Quantum was born to eliminate that friction and serve as the
                    single point of accountability the industry was missing. We
                    embraced the challenge of mastering the most complex emerging
                    technologies from high-end lighting control, security
                    integration, to commercial-grade sports lighting. We don't
                    just pull cables; we deliver the exact engineered solution
                    your project demands, protected against budget traps and
                    timeline surprises. We stand alongside our partners before,
                    during, and long after handover, building relationships rooted
                    in long-term trust. That is the true heart of Quantum."
                  </p>
                </div>

                {/* Sign-off & Direct Connection Footer */}
                <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-q-navy/10 pt-7">
                  <div>
                    <h4 className="text-[18px] font-bold tracking-tight text-q-navy">
                      Geovani Percurandi
                    </h4>
                    <p className="text-[13px] font-medium text-q-slate">
                      Managing Director at Quantum Electrical & Technological Services
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-2.5 rounded-[4px] bg-q-navy px-5 py-3 text-[13.5px] font-bold text-white transition-all duration-300 hover:bg-q-teal hover:text-q-navy-900"
                  >
                    <span>Engage directly with our team</span>
                    <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
