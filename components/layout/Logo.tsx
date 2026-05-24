import Link from "next/link";
import { firm } from "@/data/firm";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const isLight = tone === "light";
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label={`${firm.firmName} home`}>
      <span
        className={`flex h-9 w-9 items-center justify-center border ${
          isLight ? "border-ivory/40 text-ivory" : "border-navy/40 text-navy"
        } font-serif text-[14px] tracking-[0.05em] transition-colors group-hover:border-gold`}
      >
        JW
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={`font-serif text-[17px] ${isLight ? "text-ivory" : "text-navy"}`}
        >
          {firm.shortName}
        </span>
        <span
          className={`text-[10px] font-medium uppercase tracking-widest2 ${
            isLight ? "text-ivory/60" : "text-muted"
          }`}
        >
          Attorneys at Law
        </span>
      </span>
    </Link>
  );
}
