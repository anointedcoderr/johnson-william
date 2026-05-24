import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type SectionProps = HTMLAttributes<HTMLElement> & {
  tone?: "ivory" | "white" | "navy" | "dark";
  size?: "sm" | "md" | "lg";
};

export function Section({
  className,
  tone = "ivory",
  size = "lg",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative",
        tone === "ivory" && "bg-ivory text-charcoal",
        tone === "white" && "bg-warm text-charcoal",
        tone === "navy" && "bg-navy text-ivory",
        tone === "dark" && "bg-dark text-ivory",
        size === "sm" && "py-14 md:py-16",
        size === "md" && "py-20 md:py-24",
        size === "lg" && "py-24 md:py-32",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}

export function SectionEyebrow({
  children,
  tone = "default",
}: {
  children: React.ReactNode;
  tone?: "default" | "light";
}) {
  return (
    <p
      className={cn(
        "mb-5 inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-widest2",
        tone === "default" ? "text-gold" : "text-gold-soft",
      )}
    >
      <span className="gold-rule" />
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  className,
  size = "lg",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "md" | "lg";
}) {
  return (
    <h2
      className={cn(
        "font-serif font-normal text-navy",
        size === "lg" && "text-[30px] leading-[1.15] md:text-[40px]",
        size === "md" && "text-[26px] leading-[1.2] md:text-[34px]",
        className,
      )}
    >
      {children}
    </h2>
  );
}
