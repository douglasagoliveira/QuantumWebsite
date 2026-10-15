import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { useInView } from "@/hooks/useMotion";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "span" | "p" | "figure";
};

/** Opacity + 26px translate reveal, fired once on scroll-in. */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", inView && "reveal-in", className)}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

type LineRevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

/** Line-mask reveal: the text slides up from behind a clipping edge. */
export function LineReveal({ children, delay = 0, className }: LineRevealProps) {
  const { ref, inView } = useInView<HTMLSpanElement>("0px 0px -6% 0px", 0.2);
  return (
    <span ref={ref} className={cn("line-mask", className)}>
      <span
        className={cn("line-inner", inView && "line-in")}
        style={{ ["--reveal-delay" as string]: `${delay}ms` }}
      >
        {children}
      </span>
    </span>
  );
}

/** Small technical label with a leading index rule. */
export function Eyebrow({
  children,
  tone = "navy",
  className,
}: {
  children: ReactNode;
  tone?: "navy" | "teal" | "light";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "u-eyebrow inline-flex items-center gap-2.5",
        tone === "navy" && "text-q-navy",
        tone === "teal" && "text-q-teal-600",
        tone === "light" && "text-q-teal-100",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "block h-px w-6 shrink-0",
          tone === "light" ? "bg-q-teal-100/60" : "bg-current opacity-45",
        )}
      />
      {children}
    </span>
  );
}
