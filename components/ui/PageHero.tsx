import { Container } from "./Container";
import { SectionEyebrow } from "./Section";
import { cn } from "@/lib/utils";

type Crumb = { label: string; href?: string };

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
  align?: "left" | "center";
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-ivory">
      <div className="absolute inset-0 opacity-[0.06]" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(176,141,87,0.35), transparent 45%), radial-gradient(circle at 80% 80%, rgba(176,141,87,0.18), transparent 55%)",
          }}
        />
      </div>
      <Container
        className={cn(
          "relative z-10 pt-32 pb-20 md:pt-40 md:pb-28",
          align === "center" && "text-center",
        )}
      >
        {crumbs && (
          <nav
            aria-label="Breadcrumb"
            className={cn(
              "mb-8 text-[12px] uppercase tracking-widest2 text-ivory/55",
              align === "center" && "justify-center",
            )}
          >
            <ol className={cn("flex flex-wrap items-center gap-2", align === "center" && "justify-center")}>
              {crumbs.map((c, i) => (
                <li key={i} className="flex items-center gap-2">
                  {c.href ? (
                    <a href={c.href} className="hover:text-gold transition-colors">
                      {c.label}
                    </a>
                  ) : (
                    <span>{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && <span className="text-ivory/30">/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && (
          <div className={align === "center" ? "flex justify-center" : ""}>
            <SectionEyebrow tone="light">{eyebrow}</SectionEyebrow>
          </div>
        )}
        <h1
          className={cn(
            "font-serif font-normal text-ivory",
            "text-[38px] leading-[1.1] md:text-[56px]",
            align === "center" ? "mx-auto max-w-3xl" : "max-w-3xl",
          )}
        >
          {title}
        </h1>
        {description && (
          <p
            className={cn(
              "mt-6 text-[17px] leading-[1.75] text-ivory/75 md:text-[18px]",
              align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl",
            )}
          >
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
