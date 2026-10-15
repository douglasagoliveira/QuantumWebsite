import { CONTACT, FOOTER_COLUMNS, NAV } from "@/data/content";
import { IconArrowRight, IconMail, IconPhone, IconPin } from "@/components/Icons";

/* ─────────────────────────────────────────────────────────────
   FOOTER — brand-navy bookend, aligned to the 12-col grid
   ───────────────────────────────────────────────────────────── */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-q-navy-900 text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="u-grid-paper-dark absolute inset-0 opacity-60" />
        <div
          className="animate-breathe absolute -bottom-40 left-1/4 h-[520px] w-[520px] rounded-full blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgba(0,179,166,0.26) 0%, rgba(0,179,166,0) 70%)",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-q-teal/45" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        {/* ── Top ──────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-x-16 gap-y-14 py-16 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-4">
            <div className="flex items-center">
              <img
                src="/logo-branco-quantum-2026-hor.png"
                alt="Quantum Electrical Solutions"
                width={4348}
                height={1158}
                loading="lazy"
                decoding="async"
                className="h-11 w-auto"
              />
            </div>
            <p className="u-pretty mt-7 max-w-[38ch] text-[14.5px] leading-[1.72] text-q-teal-100/68">
              Specialists in electrical and automation works — power infrastructure,
              architectural lighting and high-end control, delivered under a single
              point of accountability across Sydney.
            </p>

            <ul className="mt-9 space-y-0 border-t border-q-teal-100/14">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="group flex items-center gap-4 border-b border-q-teal-100/14 py-4 transition-[padding] duration-500 hover:pl-2"
                  style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                >
                  <IconPhone className="h-[18px] w-[18px] shrink-0 text-q-teal" />
                  <span className="u-tabular flex-1 text-[16px] font-bold tracking-[-0.015em] text-white">
                    {CONTACT.phoneDisplay}
                  </span>
                  <IconArrowRight className="h-4 w-4 shrink-0 text-q-teal-100/35 transition-transform duration-500 group-hover:translate-x-1 group-hover:text-q-teal" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="group flex items-center gap-4 border-b border-q-teal-100/14 py-4 transition-[padding] duration-500 hover:pl-2"
                  style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                >
                  <IconMail className="h-[18px] w-[18px] shrink-0 text-q-teal" />
                  <span className="flex-1 truncate text-[15px] font-semibold text-white/88 transition-colors duration-500 group-hover:text-white">
                    {CONTACT.email}
                  </span>
                  <IconArrowRight className="h-4 w-4 shrink-0 text-q-teal-100/35 transition-transform duration-500 group-hover:translate-x-1 group-hover:text-q-teal" />
                </a>
              </li>
              <li className="flex items-center gap-4 border-b border-q-teal-100/14 py-4">
                <IconPin className="h-[18px] w-[18px] shrink-0 text-q-teal" />
                <span className="flex-1 text-[14px] font-medium leading-snug text-q-teal-100/72">
                  {CONTACT.region}
                </span>
              </li>
            </ul>
          </div>

          {/* link columns */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-12 sm:grid-cols-3 lg:col-span-6">
            {FOOTER_COLUMNS.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="u-eyebrow mb-6 text-q-teal">{col.title}</h3>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#top"
                        className="group inline-flex items-center gap-2 text-[13.5px] font-medium leading-snug text-q-teal-100/62 transition-colors duration-400 hover:text-white"
                      >
                        <span className="block h-px w-0 bg-q-teal transition-[width] duration-500 group-hover:w-3" style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }} />
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          {/* page nav */}
          <div className="lg:col-span-2">
            <h3 className="u-eyebrow mb-6 text-q-teal">On this page</h3>
            <ul className="space-y-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-[13.5px] font-medium text-q-teal-100/62 transition-colors duration-400 hover:text-white"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#top"
              className="group mt-10 inline-flex items-center gap-3 border border-q-teal-100/22 px-4 py-3 text-[12.5px] font-semibold text-white transition-colors duration-500 hover:border-q-teal hover:bg-q-teal hover:text-q-navy-900"
              style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
            >
              Back to top
              <IconArrowRight className="h-4 w-4 -rotate-90 transition-transform duration-500 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* ── Ghost wordmark ───────────────────────────────── */}
        <div aria-hidden className="relative select-none overflow-hidden">
          <span
            className="block whitespace-nowrap text-center font-extrabold uppercase leading-[0.78] tracking-[-0.05em] text-transparent"
            style={{
              fontSize: "clamp(4.5rem, 19.5vw, 19rem)",
              WebkitTextStroke: "1px rgba(175,219,218,0.17)",
            }}
          >
            Quantum
          </span>
        </div>

        {/* ── Bottom bar ───────────────────────────────────── */}
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t border-q-teal-100/14 py-7">
          <p className="u-eyebrow text-[9.5px] text-q-teal-100/42">
            © {year} Quantum Electrical &amp; Technological Services
          </p>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
            {["Licensed electrical contractor · NSW", "AS/NZS 3000", "Fully insured"].map(
              (t) => (
                <span key={t} className="u-eyebrow text-[9.5px] text-q-teal-100/42">
                  {t}
                </span>
              ),
            )}
          </div>
          <p className="u-eyebrow text-[9.5px] text-q-teal-100/32">
            Sydney · Australia
          </p>
        </div>
      </div>
    </footer>
  );
}
