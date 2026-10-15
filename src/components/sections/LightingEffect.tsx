import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import { HOTSPOTS, LIGHTING_FACTS, SCENES } from "@/data/content";
import { LineReveal, Reveal } from "@/components/Reveal";
import { useLiveInView, prefersReducedMotion } from "@/hooks/useMotion";
import { IconPower, IconLayers, IconLamp } from "@/components/Icons";

/* ─────────────────────────────────────────────────────────────
   FOLD 03 — THE LIGHTING EFFECT
   Continuous dimmer through three photographic states, with a
   theater-mode veil that dims everything outside the fold.
   ───────────────────────────────────────────────────────────── */

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

/** Layer opacity curves — arch fades in from 18%, glow from 60%. */
const archOpacity = (l: number) => clamp01((l - 18) / 34);
const glowOpacity = (l: number) => clamp01((l - 60) / 32);
const bloomOpacity = (l: number) => clamp01((l - 45) / 55) * 0.5;

function nearestScene(level: number) {
  return SCENES.reduce((best, s) =>
    Math.abs(s.level - level) < Math.abs(best.level - level) ? s : best,
  );
}

export default function LightingEffect() {
  const [level, setLevel] = useState(0);
  const [activeSpot, setActiveSpot] = useState<string | null>(null);
  const [pinned, setPinned] = useState<string | null>(null);

  const rafRef = useRef<number | null>(null);
  const levelRef = useRef(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const { ref: sectionRef, inView } = useLiveInView<HTMLDivElement>();

  /** Single writer for the dimmer value — keeps ref and state in lockstep. */
  const applyLevel = useCallback((v: number) => {
    levelRef.current = v;
    setLevel(v);
  }, []);

  /* ── Dimmer tween ─────────────────────────────────────────── */
  const stopTween = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
  }, []);

  const animateTo = useCallback(
    (target: number, duration = 950) => {
      stopTween();
      if (prefersReducedMotion()) {
        applyLevel(target);
        return;
      }
      const from = levelRef.current;
      if (Math.abs(target - from) < 0.5) {
        applyLevel(target);
        return;
      }
      let t0 = 0;
      const step = (t: number) => {
        if (!t0) t0 = t;
        const p = Math.min(1, (t - t0) / duration);
        const e = 1 - Math.pow(1 - p, 5); // easeOutQuint ≈ cubic-bezier(.22,1,.36,1)
        applyLevel(from + (target - from) * e);
        if (p < 1) rafRef.current = requestAnimationFrame(step);
        else rafRef.current = null;
      };
      rafRef.current = requestAnimationFrame(step);
    },
    [stopTween, applyLevel],
  );

  useEffect(() => stopTween, [stopTween]);

  /* Lights out once the fold scrolls away — restores the white page. */
  useEffect(() => {
    if (inView) return;
    const id = window.setTimeout(() => {
      if (levelRef.current > 0) animateTo(0, 700);
    }, 340);
    return () => window.clearTimeout(id);
  }, [inView, animateTo]);

  /* Keyboard: arrow keys nudge the dimmer when the stage is focused. */
  const onStageKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      stopTween();
      applyLevel(Math.min(100, Math.round(levelRef.current + 6)));
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      stopTween();
      applyLevel(Math.max(0, Math.round(levelRef.current - 6)));
    }
  };

  const scene = nearestScene(level);
  const rounded = Math.round(level);
  const theater = inView && level > 3;
  const zones = Math.round((level / 100) * 14);

  return (
    <>
      {/* ── Theater-mode veil: dims everything OUTSIDE the fold ── */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none fixed inset-0 z-[45] transition-opacity duration-[700ms]",
          theater ? "opacity-100" : "opacity-0",
        )}
        style={{
          transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
          background:
            "radial-gradient(82% 66% at 50% 50%, rgba(4,17,30,0) 0%, rgba(4,17,30,0.42) 74%, rgba(3,12,23,0.82) 100%)",
        }}
      />

      <section
        id="lighting"
        ref={sectionRef}
        aria-labelledby="lighting-title"
        className={cn(
          "relative z-[46] scroll-mt-24 overflow-hidden transition-[background-color] duration-[700ms] lg:scroll-mt-28",
          theater ? "bg-q-navy-900" : "bg-q-white",
        )}
        style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
      >
        {/* ambient surface treatment */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className={cn(
              "u-grid-paper absolute inset-0 transition-opacity duration-[700ms]",
              theater ? "opacity-0" : "opacity-60",
            )}
          />
          <div
            className={cn(
              "absolute inset-0 transition-opacity duration-[700ms]",
              theater ? "opacity-100" : "opacity-0",
            )}
            style={{
              background:
                "radial-gradient(90% 60% at 50% 42%, rgba(255,180,94,0.13) 0%, rgba(8,41,74,0) 62%)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
          {/* ── Statement ────────────────────────────────────── */}
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2
                id="lighting-title"
                className={cn(
                  "u-h2 text-[clamp(2.2rem,5.6vw,4.4rem)] transition-colors duration-[700ms]",
                  theater ? "text-white" : "text-q-navy",
                )}
              >
                <LineReveal>Same house.</LineReveal>
                <LineReveal delay={90}>
                  <span className={theater ? "text-q-teal-100/45" : "text-q-navy/40"}>
                    Same blue hour.
                  </span>
                </LineReveal>
                <LineReveal delay={180}>
                  Different discipline<span className="text-q-teal">.</span>
                </LineReveal>
              </h2>
            </div>
            <Reveal
              delay={200}
              className="lg:col-span-5 lg:pt-4"
            >
              <p
                className={cn(
                  "u-pretty max-w-[50ch] text-[15.5px] leading-[1.75] transition-colors duration-[700ms]",
                  theater ? "text-q-teal-100/72" : "text-q-slate",
                )}
              >
                Every residence on a Sydney street goes dark at 6pm. The ones that
                stop people walking past were lit deliberately — layer by layer,
                scene by scene, on a control system somebody commissioned. Move
                the dimmer and watch a house come alive.
              </p>
            </Reveal>
          </div>

          {/* ── Stage ────────────────────────────────────────── */}
          <div className="mt-12 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-12 lg:gap-8">
            {/* image */}
            <div className="lg:col-span-9">
              <div
                ref={stageRef}
                tabIndex={0}
                role="group"
                aria-label="Interactive lighting demonstration of a Sydney residence. Use the dimmer or arrow keys to change the scene."
                onKeyDown={onStageKey}
                className="relative aspect-[16/10] w-full overflow-hidden rounded-[6px] bg-q-dusk ring-1 ring-q-navy/15 shadow-[0_40px_110px_-50px_rgba(8,41,74,0.85)] sm:aspect-[16/9]"
              >
                {/* photographic layers */}
                {SCENES.map((s, i) => {
                  const op =
                    i === 0 ? 1 : i === 1 ? archOpacity(level) : glowOpacity(level);
                  const imgSrc = typeof s.image === "string" ? s.image : s.image.src;
                  return (
                    <img
                      key={s.id}
                      src={imgSrc}
                      alt={
                        i === 0
                          ? "Contemporary coastal Sydney residence at blue hour with every light off"
                          : i === 1
                            ? "The same residence with warm architectural facade grazing and landscape uplighting"
                            : "The same residence fully lit, warm interior glowing through floor-to-ceiling glass"
                      }
                      decoding="async"
                      className="u-kenburns absolute inset-0 h-full w-full select-none object-cover"
                      style={{ opacity: op, zIndex: i + 1 }}
                      draggable={false}
                    />
                  );
                })}

                {/* warm bloom — breathes once the scene is lit */}
                <div
                  aria-hidden
                  className="animate-breathe absolute inset-0 z-[4] mix-blend-screen"
                  style={{
                    opacity: bloomOpacity(level),
                    background:
                      "radial-gradient(58% 46% at 44% 62%, rgba(255,180,94,0.55) 0%, rgba(255,154,60,0.16) 46%, transparent 74%)",
                  }}
                />

                {/* dusk lift — keeps the unlit state honest */}
                <div
                  aria-hidden
                  className="absolute inset-0 z-[4]"
                  style={{
                    opacity: clamp01(1 - level / 26) * 0.32,
                    background:
                      "linear-gradient(180deg, rgba(22,40,60,0.55) 0%, rgba(10,25,42,0.25) 55%, rgba(8,20,34,0.6) 100%)",
                  }}
                />

                {/* frame vignette + grain */}
                <div
                  aria-hidden
                  className="absolute inset-0 z-[5] shadow-[inset_0_0_140px_rgba(3,12,23,0.62)]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 z-[5] opacity-[0.16] mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
                  }}
                />

                {/* ── HUD readout, top-left ───────────────────── */}
                <div className="absolute left-4 top-4 z-[8] flex items-stretch gap-px overflow-hidden rounded-[4px] bg-q-navy-900/62 backdrop-blur-md ring-1 ring-white/12 sm:left-5 sm:top-5">
                  {[
                    { k: "Scene", v: scene.code },
                    { k: "Level", v: `${String(rounded).padStart(3, "0")}%` },
                    { k: "Temp", v: scene.kelvin },
                  ].map((r) => (
                    <div key={r.k} className="px-3 py-2.5 sm:px-4">
                      <div className="u-eyebrow text-[8.5px] text-q-teal-100/52">{r.k}</div>
                      <div className="u-tabular mt-1.5 font-mono text-[13px] font-medium text-white sm:text-[15px]">
                        {r.v}
                      </div>
                    </div>
                  ))}
                </div>

                {/* ── Zone bar, top-right ─────────────────────── */}
                <div className="absolute right-4 top-4 z-[8] hidden items-center gap-2.5 rounded-[4px] bg-q-navy-900/62 px-3.5 py-3 backdrop-blur-md ring-1 ring-white/12 sm:flex sm:right-5 sm:top-5">
                  <span className="u-eyebrow text-[8.5px] text-q-teal-100/52">Zones</span>
                  <span className="flex items-end gap-[3px]">
                    {Array.from({ length: 14 }).map((_, i) => (
                      <span
                        key={i}
                        className="block w-[3px] rounded-[1px] transition-[height,background-color,box-shadow] duration-300"
                        style={{
                          height: i < zones ? 6 + (i % 4) * 3 : 5,
                          backgroundColor:
                            i < zones ? "var(--color-q-2700k)" : "rgba(255,255,255,0.16)",
                          boxShadow:
                            i < zones ? "0 0 8px rgba(255,180,94,0.75)" : "none",
                          transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
                        }}
                      />
                    ))}
                  </span>
                </div>

                {/* ── Hotspots ────────────────────────────────── */}
                <div className="absolute inset-0 z-[9]">
                  {HOTSPOTS.map((h) => {
                    const on = level >= h.minLevel;
                    const isActive = pinned === h.id || activeSpot === h.id;
                    const below = h.y > 50;
                    const alignRight = h.x > 70;
                    const alignLeft = h.x < 26;
                    return (
                      <div
                        key={h.id}
                        className="absolute"
                        style={{
                          left: `${h.x}%`,
                          top: `${h.y}%`,
                          transform: "translate(-50%, -50%)",
                          zIndex: isActive ? 40 : 10,
                        }}
                      >
                        <button
                          type="button"
                          tabIndex={on ? 0 : -1}
                          aria-expanded={isActive}
                          aria-label={`${h.title} — ${h.code}`}
                          onMouseEnter={() => setActiveSpot(h.id)}
                          onMouseLeave={() => setActiveSpot((s) => (s === h.id ? null : s))}
                          onFocus={() => setActiveSpot(h.id)}
                          onBlur={() => setActiveSpot((s) => (s === h.id ? null : s))}
                          onClick={() => setPinned((p) => (p === h.id ? null : h.id))}
                          className={cn(
                            "group relative flex h-7 w-7 items-center justify-center rounded-full transition-all duration-500",
                            on
                              ? "pointer-events-auto scale-100 opacity-100"
                              : "pointer-events-none scale-50 opacity-0",
                          )}
                          style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                        >
                          <span
                            className={cn(
                              "absolute inset-0 rounded-full ring-1 transition-all duration-500",
                              isActive
                                ? "bg-q-2700k/28 ring-q-2700k"
                                : "bg-white/12 ring-white/45 group-hover:ring-q-2700k group-hover:bg-q-2700k/18",
                            )}
                          />
                          {on && (
                            <span
                              className="animate-halo absolute inset-0 rounded-full"
                              style={{
                                background:
                                  "radial-gradient(circle, rgba(255,180,94,0.5) 0%, rgba(255,180,94,0) 68%)",
                              }}
                            />
                          )}
                          <span
                            className={cn(
                              "relative block h-1.5 w-1.5 rounded-full transition-colors duration-500",
                              isActive ? "bg-white" : "bg-q-2700k",
                            )}
                            style={{ boxShadow: "0 0 10px rgba(255,180,94,0.95)" }}
                          />
                        </button>

                        {/* detail card */}
                        <div
                          className={cn(
                            "pointer-events-none absolute z-20 w-[248px] origin-center rounded-[5px] bg-q-navy-900/94 p-4 ring-1 ring-q-teal-100/20 backdrop-blur-md transition-all duration-500 sm:w-[286px]",
                            below ? "bottom-[calc(100%+14px)]" : "top-[calc(100%+14px)]",
                            alignRight
                              ? "right-[-14px]"
                              : alignLeft
                                ? "left-[-14px]"
                                : "left-1/2 -translate-x-1/2",
                            isActive
                              ? "translate-y-0 scale-100 opacity-100"
                              : cn(
                                  "scale-[0.94] opacity-0",
                                  below ? "translate-y-2" : "-translate-y-2",
                                  !alignRight && !alignLeft && "-translate-x-1/2",
                                ),
                          )}
                          style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                        >
                          <div className="mb-2 flex items-center justify-between gap-3">
                            <span className="u-eyebrow text-q-teal">{h.code}</span>
                            <span className="u-eyebrow text-q-teal-100/40">{h.id}</span>
                          </div>
                          <p className="text-[15px] font-bold leading-tight tracking-[-0.02em] text-white">
                            {h.title}
                          </p>
                          <p className="mt-2 text-[12.5px] leading-relaxed text-q-teal-100/72">
                            {h.body}
                          </p>
                          <div className="mt-3 flex flex-wrap gap-1.5 border-t border-white/10 pt-3">
                            {h.meta.map((m) => (
                              <span
                                key={m}
                                className="u-eyebrow u-tabular rounded-[2px] bg-white/8 px-2 py-1 text-[8.5px] text-q-teal-100/80"
                              >
                                {m}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* ── Hint when everything is off ─────────────── */}
                <div
                  className={cn(
                    "absolute inset-x-0 bottom-0 z-[8] flex items-center justify-center gap-3 bg-gradient-to-t from-q-navy-900/88 via-q-navy-900/40 to-transparent px-5 pb-6 pt-16 transition-all duration-700",
                    level < 20
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-4 opacity-0",
                  )}
                  style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                >
                  <IconLayers className="h-4 w-4 shrink-0 text-q-teal" />
                  <p className="text-center text-[12.5px] font-medium text-white/80 sm:text-[13.5px]">
                    <span className="text-white">Lights off.</span> Raise the dimmer to reveal{" "}
                    <span className="u-tabular text-q-teal">{HOTSPOTS.length}</span>{" "}
                    technical annotations on this build.
                  </p>
                </div>
              </div>

              {/* scene narrative under the stage */}
              <div
                className={cn(
                  "mt-5 flex flex-wrap items-start justify-between gap-x-10 gap-y-4 border-t pt-5 transition-colors duration-[700ms]",
                  theater ? "border-white/14" : "border-q-navy/12",
                )}
              >
                <p
                  key={scene.id}
                  className={cn(
                    "u-pretty max-w-[68ch] text-[14px] leading-relaxed transition-colors duration-[700ms]",
                    theater ? "text-q-teal-100/78" : "text-q-slate",
                  )}
                  style={{ animation: "noteIn 620ms cubic-bezier(0.22,1,0.36,1) both" }}
                >
                  {scene.note}
                </p>
                <p
                  className={cn(
                    "u-eyebrow shrink-0 transition-colors duration-[700ms]",
                    theater ? "text-q-teal-100/45" : "text-q-navy/40",
                  )}
                >
                  {scene.label} — {scene.sub}
                </p>
              </div>
            </div>

            {/* ── Luxury keypad ──────────────────────────────── */}
            <div className="lg:col-span-3">
              <div className="rounded-[6px] bg-q-navy-900 p-5 shadow-[0_44px_100px_-46px_rgba(8,41,74,0.9)] ring-1 ring-white/12 sm:p-6">
                <div className="mb-6 flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2.5">
                    <IconLamp className="h-4 w-4 text-q-teal" />
                    <span className="u-eyebrow text-white/72">Scene keypad</span>
                  </div>
                  <span className="flex items-center gap-1.5">
                    <span
                      className="block h-1.5 w-1.5 rounded-full transition-colors duration-500"
                      style={{
                        backgroundColor: level > 3 ? "#00B3A6" : "rgba(255,255,255,0.2)",
                        boxShadow: level > 3 ? "0 0 9px rgba(0,179,166,0.9)" : "none",
                      }}
                    />
                    <span className="u-eyebrow text-[8.5px] text-white/38">Link</span>
                  </span>
                </div>

                {/* scene buttons */}
                <div className="space-y-2">
                  {SCENES.map((s) => {
                    const on = scene.id === s.id;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => {
                          setPinned(null);
                          animateTo(s.level);
                        }}
                        aria-pressed={on}
                        className={cn(
                          "group relative flex w-full items-center gap-3.5 overflow-hidden rounded-[4px] border px-3.5 py-3 text-left transition-all duration-500",
                          on
                            ? "border-q-teal/70 bg-q-teal/12"
                            : "border-white/12 bg-white/[0.025] hover:border-white/28 hover:bg-white/[0.06]",
                        )}
                        style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                      >
                        <span
                          className={cn(
                            "absolute inset-y-0 left-0 w-[2px] origin-top bg-q-teal transition-transform duration-500",
                            on ? "scale-y-100" : "scale-y-0",
                          )}
                        />
                        <span
                          className={cn(
                            "block h-2 w-2 shrink-0 rounded-full transition-all duration-500",
                            on ? "bg-q-teal" : "bg-white/18 group-hover:bg-white/35",
                          )}
                          style={{ boxShadow: on ? "0 0 10px rgba(0,179,166,0.95)" : "none" }}
                        />
                        <span className="min-w-0 flex-1">
                          <span
                            className={cn(
                              "block text-[13.5px] font-semibold leading-tight tracking-[-0.01em] transition-colors duration-500",
                              on ? "text-white" : "text-white/72",
                            )}
                          >
                            {s.label}
                          </span>
                          <span className="u-eyebrow mt-1 block text-[8.5px] text-white/38">
                            {s.code} · {s.sub}
                          </span>
                        </span>
                        <span className="u-tabular font-mono text-[11px] text-white/45">
                          {String(s.level).padStart(3, "0")}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* dimmer */}
                <div className="mt-7 border-t border-white/10 pt-6">
                  <div className="mb-4 flex items-end justify-between gap-3">
                    <label
                      htmlFor="q-dimmer"
                      className="u-eyebrow text-white/55"
                    >
                      Master dimmer
                    </label>
                    <span className="u-tabular font-mono text-[26px] font-medium leading-none tracking-[-0.02em] text-white">
                      {String(rounded).padStart(3, "0")}
                      <span className="text-[14px] text-q-teal">%</span>
                    </span>
                  </div>

                  <div className="relative h-8">
                    {/* track */}
                    <div className="absolute inset-x-0 top-1/2 h-[8px] -translate-y-1/2 overflow-hidden rounded-[2px] bg-white/10 ring-1 ring-inset ring-black/40">
                      <div
                        className="h-full rounded-[2px]"
                        style={{
                          width: `${level}%`,
                          background:
                            "linear-gradient(90deg, #16283C 0%, #FF9A3C 42%, #FFB45E 72%, #FFD9A0 100%)",
                          boxShadow: level > 4 ? "0 0 18px rgba(255,180,94,0.65)" : "none",
                        }}
                      />
                    </div>
                    {/* detents */}
                    <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2">
                      {SCENES.map((s) => (
                        <span
                          key={s.id}
                          className="absolute top-1/2 h-[14px] w-px -translate-y-1/2 bg-white/28"
                          style={{ left: `${s.level}%` }}
                        />
                      ))}
                    </div>
                    <input
                      id="q-dimmer"
                      type="range"
                      min={0}
                      max={100}
                      step={1}
                      value={rounded}
                      onChange={(e) => {
                        stopTween();
                        setPinned(null);
                        applyLevel(Number(e.target.value));
                      }}
                      aria-valuetext={`${rounded} percent — ${scene.label}`}
                      className="u-range absolute inset-x-0 top-1/2 h-8 w-full -translate-y-1/2"
                    />
                  </div>

                  <div className="mt-2 flex justify-between">
                    <span className="u-eyebrow text-[8.5px] text-white/28">Off</span>
                    <span className="u-eyebrow text-[8.5px] text-white/28">Full glow</span>
                  </div>
                </div>

                {/* master rocker */}
                <button
                  type="button"
                  onClick={() => {
                    setPinned(null);
                    setActiveSpot(null);
                    animateTo(level > 50 ? 0 : 100);
                  }}
                  className={cn(
                    "group mt-7 flex w-full items-center justify-between gap-3 rounded-[4px] border px-4 py-3.5 transition-all duration-500",
                    level > 50
                      ? "border-q-2700k/55 bg-q-2700k/14 text-q-3000k hover:bg-q-2700k/22"
                      : "border-white/14 bg-white/[0.03] text-white/78 hover:border-white/32 hover:bg-white/[0.07]",
                  )}
                  style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                >
                  <span className="u-eyebrow">
                    {level > 50 ? "Turn lights off" : "Turn everything on"}
                  </span>
                  <IconPower
                    className={cn(
                      "h-[18px] w-[18px] transition-transform duration-500 group-hover:scale-110",
                      level > 50 ? "text-q-2700k" : "text-q-teal",
                    )}
                  />
                </button>

                {/* spec table */}
                <dl className="mt-6 space-y-2.5 border-t border-white/10 pt-5">
                  {LIGHTING_FACTS.slice(0, 3).map((f) => (
                    <div key={f.k} className="flex items-baseline justify-between gap-4">
                      <dt className="u-eyebrow text-[8.5px] text-white/38">{f.k}</dt>
                      <dd className="u-tabular font-mono text-[11.5px] text-q-teal-100/85">
                        {f.v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <Reveal delay={140}>
                <p
                  className={cn(
                    "mt-5 text-[12.5px] leading-relaxed transition-colors duration-[700ms]",
                    theater ? "text-q-teal-100/52" : "text-q-slate/72",
                  )}
                >
                  This mirrors a real DALI-2 keypad. On site, the same engraved
                  plate goes on the client&rsquo;s wall — no app required, no
                  cloud dependency, and it still works during an outage.
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes noteIn {
            from { opacity: 0; transform: translate3d(0, 8px, 0); }
            to   { opacity: 1; transform: translate3d(0, 0, 0); }
          }
        `}</style>
      </section>
    </>
  );
}
