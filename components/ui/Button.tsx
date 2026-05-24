import Link from "next/link";
import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "ghost" | "gold";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[2px] font-medium text-[15px] leading-none transition-colors duration-200 ease-out-soft px-7 py-4 disabled:opacity-60 disabled:pointer-events-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy text-ivory hover:bg-[#0E2640] focus-visible:bg-[#0E2640]",
  outline:
    "border border-navy/40 text-navy hover:border-navy hover:bg-navy hover:text-ivory",
  ghost:
    "text-navy hover:text-gold",
  gold:
    "bg-gold text-warm hover:bg-[#9A7A4A]",
};

type CommonProps = {
  variant?: Variant;
  className?: string;
  children?: React.ReactNode;
};

type LinkProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

type BtnProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export function Button(props: LinkProps | BtnProps) {
  const { variant = "primary", className } = props;
  const cls = cn(base, variants[variant], className);

  if (props.href !== undefined) {
    const { variant: _v, className: _c, href, children, ...rest } = props as LinkProps;
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, className: _c, children, ...rest } = props as BtnProps;
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-[14px] w-[14px]", className)}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}
