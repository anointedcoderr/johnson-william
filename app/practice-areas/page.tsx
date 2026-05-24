import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionEyebrow, SectionTitle } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ArrowIcon } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { practiceAreas } from "@/data/practiceAreas";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Overview of practice areas, including family, immigration, criminal defence, real estate, business, and estate planning.",
};

export default function PracticeAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Practice Areas"
        title="Legal Services Built Around Your Needs"
        description="From personal legal matters to business related concerns, the firm provides practical guidance, careful preparation, and strong representation."
        crumbs={[{ label: "Home", href: "/" }, { label: "Practice Areas" }]}
      />

      <Section tone="ivory" size="md">
        <Container>
          <div className="max-w-3xl">
            <SectionEyebrow>What We Handle</SectionEyebrow>
            <SectionTitle>A Considered Set of Practice Areas</SectionTitle>
            <p className="mt-6 text-[17px] leading-[1.8] text-muted">
              Each area is supported by careful documentation, patient research, and a steady focus
              on client outcomes. Select an area to read about who it is for, the issues handled,
              and how the firm assists.
            </p>
          </div>

          <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-2">
            {practiceAreas.map((area, i) => (
              <FadeIn key={area.slug} delay={i * 0.04}>
                <Link
                  href={`/practice-areas/${area.slug}`}
                  className="group flex h-full flex-col bg-warm p-10 transition-colors duration-300 hover:bg-ivory"
                >
                  <p className="font-serif text-[13px] text-gold">0{i + 1}</p>
                  <h3 className="mt-6 font-serif text-[26px] leading-[1.25] text-navy">
                    {area.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.8] text-muted">{area.summary}</p>
                  <ul className="mt-6 grid grid-cols-1 gap-y-2 text-[14px] text-charcoal/80 sm:grid-cols-2">
                    {area.problemsHandled.slice(0, 4).map((p) => (
                      <li key={p} className="flex items-center gap-2">
                        <span className="h-px w-3 bg-gold" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-8 inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-widest2 text-navy group-hover:text-gold transition-colors">
                    Read More <ArrowIcon />
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
