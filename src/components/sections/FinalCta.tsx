import { useId, useState } from "react";
import { cn } from "@/utils/cn";
import { CONTACT, PROJECT_TYPES } from "@/data/content";
import { LineReveal, Reveal } from "@/components/Reveal";
import {
  IconArrowRight,
  IconCheck,
  IconClock,
  IconMail,
  IconPhone,
  IconPin,
} from "@/components/Icons";

/* ─────────────────────────────────────────────────────────────
   FOLD 06 — Final conversion
   ───────────────────────────────────────────────────────────── */

type Form = { name: string; email: string; phone: string; type: string; notes: string };
const EMPTY: Form = { name: "", email: "", phone: "", type: PROJECT_TYPES[0], notes: "" };

export default function FinalCta() {
  const uid = useId();
  const [form, setForm] = useState<Form>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [sent, setSent] = useState<string | null>(null);

  const set = (k: keyof Form) => (v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Partial<Record<keyof Form, string>> = {};
    if (form.name.trim().length < 2) next.name = "Please tell us who we are speaking with.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email))
      next.email = "A valid email address is required.";
    if (form.phone.trim() && form.phone.replace(/\D/g, "").length < 8)
      next.phone = "That phone number looks incomplete.";
    setErrors(next);
    if (Object.keys(next).length) return;
    const ref = `QTM-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 8999)}`;
    setSent(ref);
  };

  const field =
    "w-full rounded-[3px] border bg-q-white px-4 py-3.5 text-[14.5px] font-medium text-q-ink placeholder:text-q-slate/45 transition-[border-color,box-shadow] duration-400 focus:outline-none";

  return (
    <section
      id="contact"
      aria-labelledby="cta-title"
      className="relative scroll-mt-24 overflow-hidden bg-q-white lg:scroll-mt-28"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-q-navy/10" />
        <div
          className="absolute -right-40 -top-24 h-[620px] w-[620px] rounded-full opacity-55 blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgba(175,219,218,0.55) 0%, rgba(175,219,218,0) 70%)",
          }}
        />
        <div className="u-grid-paper absolute inset-0 opacity-35" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
        <div className="grid grid-cols-1 gap-x-16 gap-y-14 lg:grid-cols-12">
          {/* ── Left: statement + direct lines ───────────────── */}
          <div className="lg:col-span-6">
            <h2
              id="cta-title"
              className="u-display text-[clamp(2.4rem,6.2vw,5rem)] text-q-navy"
            >
              <LineReveal>Lock the scope</LineReveal>
              <LineReveal delay={90}>
                <span className="text-q-navy/38">before it</span>
              </LineReveal>
              <LineReveal delay={180}>
                locks you<span className="text-q-teal">.</span>
              </LineReveal>
            </h2>

            <Reveal delay={240}>
              <p className="u-pretty mt-8 max-w-[52ch] text-[16.5px] leading-[1.72] text-q-slate">
                Send us the drawing set — even an incomplete one. We will come back
                with a scoped, priced and programmed electrical package, and a
                straight answer on whether your lighting and automation intent
                survives the budget.
              </p>
            </Reveal>

            <Reveal delay={300} className="mt-12 border-t border-q-navy/12">
              {[
                {
                  Icon: IconPhone,
                  k: "Call the desk",
                  v: CONTACT.phoneDisplay,
                  href: CONTACT.phoneHref,
                  note: "24/7 emergency call-out",
                },
                {
                  Icon: IconMail,
                  k: "Email",
                  v: CONTACT.email,
                  href: `mailto:${CONTACT.email}`,
                  note: "Response within one business day",
                },
                {
                  Icon: IconPin,
                  k: "Coverage",
                  v: "Sydney · New South Wales",
                  href: undefined,
                  note: "CBD, North Shore, Eastern & Northern Beaches",
                },
              ].map(({ Icon, k, v, href, note }) => {
                const inner = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-q-navy/15 text-q-navy transition-all duration-500 group-hover:border-q-teal group-hover:bg-q-teal group-hover:text-white">
                      <Icon className="h-[18px] w-[18px]" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="u-eyebrow block text-q-navy/42">{k}</span>
                      <span className="u-tabular mt-1.5 block truncate text-[17px] font-bold tracking-[-0.02em] text-q-navy transition-colors duration-500 group-hover:text-q-teal-600">
                        {v}
                      </span>
                      <span className="mt-1 block text-[12.5px] font-medium text-q-slate/75">
                        {note}
                      </span>
                    </span>
                    {href && (
                      <IconArrowRight className="h-[18px] w-[18px] shrink-0 text-q-navy/25 transition-all duration-500 group-hover:translate-x-1 group-hover:text-q-teal" />
                    )}
                  </>
                );
                const cls =
                  "group flex items-center gap-5 border-b border-q-navy/12 py-5 transition-[padding,background-color] duration-500 hover:bg-q-shell hover:px-4";
                return href ? (
                  <a
                    key={k}
                    href={href}
                    className={cls}
                    style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={k}
                    className={cls}
                    style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                  >
                    {inner}
                  </div>
                );
              })}
            </Reveal>

            <Reveal delay={360} className="mt-9 flex items-center gap-3.5">
              <IconClock className="h-5 w-5 shrink-0 text-q-teal-600" />
              <p className="text-[13.5px] font-medium text-q-slate">
                Always open — fault finding and emergency works are dispatched the
                same day across Sydney.
              </p>
            </Reveal>
          </div>

          {/* ── Right: enquiry form ──────────────────────────── */}
          <div className="lg:col-span-6">
            <Reveal delay={160}>
              <div className="relative rounded-[6px] border border-q-navy/14 bg-q-shell p-6 shadow-[0_44px_110px_-60px_rgba(8,41,74,0.75)] sm:p-9">
                <span
                  aria-hidden
                  className="absolute -top-px left-8 h-[2px] w-24 bg-q-teal"
                />

                {sent ? (
                  <div className="flex min-h-[520px] flex-col items-start justify-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-q-teal text-white">
                      <IconCheck className="h-7 w-7" />
                    </span>
                    <h3 className="u-h2 mt-8 text-[clamp(1.7rem,3vw,2.3rem)] text-q-navy">
                      Enquiry logged.
                    </h3>
                    <p className="u-pretty mt-4 max-w-[44ch] text-[15px] leading-relaxed text-q-slate">
                      Thank you, {form.name.split(" ")[0]}. Your reference is below —
                      quote it if you call the desk. A pre-construction consult slot
                      will be confirmed by email within one business day.
                    </p>
                    <div className="u-tabular mt-8 w-full border-y border-q-navy/12 py-5">
                      <div className="flex items-baseline justify-between gap-6">
                        <span className="u-eyebrow text-q-navy/42">Reference</span>
                        <span className="font-mono text-[17px] font-medium text-q-navy">
                          {sent}
                        </span>
                      </div>
                      <div className="mt-3 flex items-baseline justify-between gap-6">
                        <span className="u-eyebrow text-q-navy/42">Scope</span>
                        <span className="text-[13.5px] font-semibold text-q-navy">
                          {form.type}
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setSent(null);
                        setForm(EMPTY);
                      }}
                      className="group mt-8 inline-flex items-center gap-2.5 border-b border-q-navy/25 pb-1.5 text-[14px] font-semibold text-q-navy transition-colors duration-500 hover:border-q-teal hover:text-q-teal-600"
                    >
                      Submit another enquiry
                      <IconArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={submit} noValidate>
                    <div className="flex items-baseline justify-between gap-4 border-b border-q-navy/12 pb-5">
                      <h3 className="text-[19px] font-bold tracking-[-0.022em] text-q-navy">
                        Request a pre-construction consult
                      </h3>
                      <span className="u-eyebrow shrink-0 text-q-navy/38">Free</span>
                    </div>

                    <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="sm:col-span-1">
                        <label
                          htmlFor={`${uid}-name`}
                          className="u-eyebrow mb-2.5 block text-q-navy/55"
                        >
                          Name *
                        </label>
                        <input
                          id={`${uid}-name`}
                          value={form.name}
                          onChange={(e) => set("name")(e.target.value)}
                          placeholder="Your full name"
                          aria-invalid={!!errors.name}
                          className={cn(
                            field,
                            errors.name
                              ? "border-[#cf2e2e] focus:shadow-[0_0_0_3px_rgba(207,46,46,0.14)]"
                              : "border-q-navy/18 focus:border-q-teal focus:shadow-[0_0_0_3px_rgba(0,179,166,0.16)]",
                          )}
                        />
                        {errors.name && (
                          <p className="mt-2 text-[12px] font-medium text-[#cf2e2e]">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div className="sm:col-span-1">
                        <label
                          htmlFor={`${uid}-phone`}
                          className="u-eyebrow mb-2.5 block text-q-navy/55"
                        >
                          Phone
                        </label>
                        <input
                          id={`${uid}-phone`}
                          type="tel"
                          value={form.phone}
                          onChange={(e) => set("phone")(e.target.value)}
                          placeholder="04XX XXX XXX"
                          aria-invalid={!!errors.phone}
                          className={cn(
                            field,
                            "u-tabular",
                            errors.phone
                              ? "border-[#cf2e2e] focus:shadow-[0_0_0_3px_rgba(207,46,46,0.14)]"
                              : "border-q-navy/18 focus:border-q-teal focus:shadow-[0_0_0_3px_rgba(0,179,166,0.16)]",
                          )}
                        />
                        {errors.phone && (
                          <p className="mt-2 text-[12px] font-medium text-[#cf2e2e]">
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor={`${uid}-email`}
                          className="u-eyebrow mb-2.5 block text-q-navy/55"
                        >
                          Email *
                        </label>
                        <input
                          id={`${uid}-email`}
                          type="email"
                          value={form.email}
                          onChange={(e) => set("email")(e.target.value)}
                          placeholder="you@studio.com.au"
                          aria-invalid={!!errors.email}
                          className={cn(
                            field,
                            errors.email
                              ? "border-[#cf2e2e] focus:shadow-[0_0_0_3px_rgba(207,46,46,0.14)]"
                              : "border-q-navy/18 focus:border-q-teal focus:shadow-[0_0_0_3px_rgba(0,179,166,0.16)]",
                          )}
                        />
                        {errors.email && (
                          <p className="mt-2 text-[12px] font-medium text-[#cf2e2e]">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div className="sm:col-span-2">
                        <span className="u-eyebrow mb-3 block text-q-navy/55">
                          Project type
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {PROJECT_TYPES.map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => set("type")(t)}
                              aria-pressed={form.type === t}
                              className={cn(
                                "rounded-[3px] border px-3.5 py-2 text-[12.5px] font-semibold tracking-[-0.008em] transition-all duration-400",
                                form.type === t
                                  ? "border-q-teal bg-q-teal text-q-navy-900"
                                  : "border-q-navy/16 bg-q-white text-q-slate hover:border-q-teal/55 hover:text-q-navy",
                              )}
                              style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor={`${uid}-notes`}
                          className="u-eyebrow mb-2.5 block text-q-navy/55"
                        >
                          Scope notes
                        </label>
                        <textarea
                          id={`${uid}-notes`}
                          rows={4}
                          value={form.notes}
                          onChange={(e) => set("notes")(e.target.value)}
                          placeholder="Site address, programme dates, and what the design intends…"
                          className={cn(
                            field,
                            "resize-none border-q-navy/18 focus:border-q-teal focus:shadow-[0_0_0_3px_rgba(0,179,166,0.16)]",
                          )}
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="group mt-8 flex w-full items-center justify-between gap-4 bg-q-navy px-6 py-4.5 text-[15px] font-bold text-white transition-colors duration-500 hover:bg-q-teal hover:text-q-navy-900"
                      style={{
                        paddingTop: 18,
                        paddingBottom: 18,
                        transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
                      }}
                    >
                      Send enquiry
                      <IconArrowRight className="h-[18px] w-[18px] transition-transform duration-500 group-hover:translate-x-1.5" />
                    </button>

                    <p className="mt-4 text-[12px] leading-relaxed text-q-slate/70">
                      We use your details only to prepare and price your scope. No
                      lists, no third parties.
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
