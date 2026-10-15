import type { SVGProps } from "react";

/**
 * Quantum icon set — uniform 24px grid, 1px hairline stroke,
 * square caps. Drawn to read as engineering-drawing annotation.
 */
type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export function IconBolt(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M13.4 2 4.8 13.2h5.6L10.2 22l8.6-11.2h-5.6L13.4 2Z" />
    </svg>
  );
}

export function IconBuilder(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M2.5 20.5h19" />
      <path d="M5 20.5V9.8l7-5 7 5v10.7" />
      <path d="M9.2 20.5v-6.1h5.6v6.1" />
      <path d="M12 4.8v1.9" />
    </svg>
  );
}

export function IconArchitect(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 2.6 5.2 21.4" />
      <path d="M12 2.6 18.8 21.4" />
      <path d="M8.3 13.4h7.4" />
      <circle cx="12" cy="2.6" r="1.1" />
    </svg>
  );
}

export function IconOwner(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M3.4 10.6 12 3.6l8.6 7" />
      <path d="M5.6 12.4v8h12.8v-8" />
      <path d="M10.2 20.4v-5.2h3.6v5.2" />
    </svg>
  );
}

export function IconLayers(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3 2.8 7.6 12 12.2l9.2-4.6L12 3Z" />
      <path d="m2.8 12.4 9.2 4.6 9.2-4.6" />
      <path d="m2.8 16.9 9.2 4.6 9.2-4.6" />
    </svg>
  );
}

export function IconShield(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 2.6 4.2 5.5v6.2c0 4.6 3.2 8.3 7.8 9.7 4.6-1.4 7.8-5.1 7.8-9.7V5.5L12 2.6Z" />
      <path d="m8.7 11.9 2.3 2.4 4.3-4.6" />
    </svg>
  );
}

export function IconLamp(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M7.6 3.4h8.8l3 7.2H4.6l3-7.2Z" />
      <path d="M12 10.6v4.2" />
      <path d="M9.4 14.8h5.2" />
      <path d="M12 17.6v3" />
      <path d="M2.6 14.2 4 15.6M21.4 14.2 20 15.6" />
    </svg>
  );
}

export function IconClock(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9.2" />
      <path d="M12 6.4V12l3.7 2.3" />
    </svg>
  );
}

export function IconGauge(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M3.4 18.2a9.2 9.2 0 1 1 17.2 0" />
      <path d="m12 13.6 4.2-4" />
      <circle cx="12" cy="14.4" r="1.2" />
    </svg>
  );
}

export function IconDoc(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M5.4 2.8h8.4l4.8 4.8v13.6H5.4V2.8Z" />
      <path d="M13.8 2.8v4.8h4.8" />
      <path d="M8.4 12.6h7.2M8.4 16.2h7.2" />
    </svg>
  );
}

export function IconPhone(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M8.1 3.4H4.9c-.9 0-1.6.8-1.5 1.7.6 8.4 6.5 14.3 14.9 14.9.9.1 1.7-.6 1.7-1.5v-3.2l-4-1.5-1.9 1.9a13.4 13.4 0 0 1-5.6-5.6l1.9-1.9-2.3-4.8Z" />
    </svg>
  );
}

export function IconMail(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="2.8" y="5" width="18.4" height="14" rx="1" />
      <path d="m2.8 6.4 9.2 6.4 9.2-6.4" />
    </svg>
  );
}

export function IconPin(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 21.4s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10.2" r="2.6" />
    </svg>
  );
}

export function IconArrowUpRight(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6.6 17.4 17.4 6.6" />
      <path d="M8.4 6.6h9v9" />
    </svg>
  );
}

export function IconArrowRight(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M3.6 12h16.8" />
      <path d="m14.2 5.8 6.2 6.2-6.2 6.2" />
    </svg>
  );
}

export function IconPlus(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 4.6v14.8M4.6 12h14.8" />
    </svg>
  );
}

export function IconCheck(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m4.6 12.6 4.8 4.8L19.4 6.8" />
    </svg>
  );
}

export function IconPower(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3.2v8.4" />
      <path d="M6.7 6.4a8 8 0 1 0 10.6 0" />
    </svg>
  );
}

/** Quantum logomark — an orbital "Q" over a bolt. */
export function LogoMark(p: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden focusable="false" {...p}>
      <circle cx="20" cy="20" r="18.2" stroke="currentColor" strokeWidth="1.3" opacity="0.42" />
      <ellipse
        cx="20"
        cy="20"
        rx="18.2"
        ry="7.4"
        stroke="currentColor"
        strokeWidth="1.1"
        opacity="0.65"
        transform="rotate(-28 20 20)"
      />
      <path
        d="M21.6 9.4 14.2 21.2h4.9l-1.5 9.4 8.3-12.1h-5l.7-9.1Z"
        fill="currentColor"
      />
    </svg>
  );
}
