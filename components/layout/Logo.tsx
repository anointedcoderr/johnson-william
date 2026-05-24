import Link from "next/link";
import { firm } from "@/data/firm";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const isLight = tone === "light";
  const mainColor = isLight ? "#F8F5EF" : "#0B1F33";
  const subColor = isLight ? "rgba(248,245,239,0.65)" : "#6B7280";
  const borderColor = isLight ? "rgba(248,245,239,0.4)" : "rgba(11,31,51,0.4)";

  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3"
      aria-label={`${firm.firmName} home`}
    >
      <span
        style={{ color: mainColor, borderColor }}
        className="flex h-9 w-9 items-center justify-center border font-serif text-[13px] tracking-[0.05em] transition-colors group-hover:!border-gold"
      >
        JLG
      </span>
      <span className="flex flex-col leading-tight">
        <span style={{ color: mainColor }} className="font-serif text-[17px]">
          {firm.shortName}
        </span>
        <span
          style={{ color: subColor }}
          className="text-[10px] font-medium uppercase tracking-widest2"
        >
          Attorneys at Law
        </span>
      </span>
    </Link>
  );
}
