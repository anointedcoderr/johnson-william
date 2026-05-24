import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ArrowIcon } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { resources } from "@/data/resources";

export const metadata: Metadata = {
  title: "Legal Resources",
  description:
    "Practical articles on preparing for a legal matter, working with a lawyer, and avoiding common mistakes.",
};

export default function ResourcesPage() {
  const [first, ...rest] = resources;
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Practical Notes on Working With a Lawyer"
        description="A small library of articles written for clients and prospective clients. Plain language, careful detail, and useful guidance."
        crumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]}
      />

      <Section tone="ivory" size="md">
        <Container>
          <FadeIn>
            <Link
              href={`/resources/${first.slug}`}
              className="group grid gap-10 border border-border bg-warm p-8 transition-colors hover:bg-ivory md:grid-cols-12 md:p-12"
            >
              <div className="md:col-span-5">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy">
                  <div
                    className="absolute inset-0"
                    aria-hidden="true"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(11,31,51,0.6), rgba(7,24,39,0.85)), url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="relative z-10 flex h-full flex-col justify-end p-7 text-ivory">
                    <p className="text-[12px] uppercase tracking-widest2 text-gold-soft">
                      {first.category}
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-7 md:flex md:flex-col md:justify-center">
                <p className="text-[12px] uppercase tracking-widest2 text-gold">
                  Featured Article
                </p>
                <h2 className="mt-5 font-serif text-[28px] leading-[1.2] text-navy md:text-[36px]">
                  {first.title}
                </h2>
                <p className="mt-5 text-[16px] leading-[1.8] text-muted md:text-[17px]">
                  {first.excerpt}
                </p>
                <div className="mt-7 flex items-center gap-4 text-[13px] text-muted">
                  <span>{first.date}</span>
                  <span className="h-px w-6 bg-border" />
                  <span>{first.readTime}</span>
                </div>
                <span className="mt-7 inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-widest2 text-navy group-hover:text-gold transition-colors">
                  Read Article <ArrowIcon />
                </span>
              </div>
            </Link>
          </FadeIn>
        </Container>
      </Section>

      <Section tone="white" size="md">
        <Container>
          <div className="grid gap-px border border-border bg-border md:grid-cols-2">
            {rest.map((r, i) => (
              <FadeIn key={r.slug} delay={i * 0.04}>
                <Link
                  href={`/resources/${r.slug}`}
                  className="group flex h-full flex-col bg-warm p-9 transition-colors hover:bg-ivory"
                >
                  <p className="text-[12px] uppercase tracking-widest2 text-gold">{r.category}</p>
                  <h3 className="mt-5 font-serif text-[22px] leading-[1.3] text-navy md:text-[24px]">
                    {r.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.8] text-muted">{r.excerpt}</p>
                  <div className="mt-6 flex items-center gap-4 text-[12px] text-muted">
                    <span>{r.date}</span>
                    <span className="h-px w-6 bg-border" />
                    <span>{r.readTime}</span>
                  </div>
                  <span className="mt-7 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-widest2 text-navy group-hover:text-gold transition-colors">
                    Read Article <ArrowIcon />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
