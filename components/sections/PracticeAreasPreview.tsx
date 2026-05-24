import Link from "next/link";
import { practiceAreas } from "@/data/practiceAreas";
import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow, SectionTitle } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowIcon } from "@/components/ui/Button";

export function PracticeAreasPreview() {
  return (
    <Section tone="ivory">
      <Container>
        <div className="grid gap-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <SectionEyebrow>Practice Areas</SectionEyebrow>
            <SectionTitle>Legal Services Built Around Your Needs</SectionTitle>
          </div>
          <div className="md:col-span-5">
            <p className="text-[16px] leading-[1.8] text-muted md:text-[17px]">
              From personal legal matters to business related concerns, the firm provides practical
              guidance, careful preparation, and strong representation.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area, i) => (
            <FadeIn key={area.slug} delay={i * 0.05}>
              <Link
                href={`/practice-areas/${area.slug}`}
                className="group flex h-full flex-col bg-warm p-9 transition-colors duration-300 hover:bg-ivory"
              >
                <span className="font-serif text-[13px] text-gold">0{i + 1}</span>
                <h3 className="mt-6 font-serif text-[22px] leading-[1.25] text-navy">
                  {area.title}
                </h3>
                <p className="mt-4 text-[15px] leading-[1.75] text-muted">{area.summary}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-widest2 text-navy group-hover:text-gold transition-colors">
                  Learn More <ArrowIcon />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
