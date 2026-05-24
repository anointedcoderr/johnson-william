import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { practiceAreas, getPracticeArea } from "@/data/practiceAreas";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionEyebrow, SectionTitle } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { FadeIn } from "@/components/ui/FadeIn";

export function generateStaticParams() {
  return practiceAreas.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) return { title: "Practice Area" };
  return {
    title: area.title,
    description: area.summary,
  };
}

export default async function PracticeAreaDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) notFound();

  const others = practiceAreas.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={area.title}
        title={area.headline}
        description={area.intro}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Practice Areas", href: "/practice-areas" },
          { label: area.title },
        ]}
      />

      <Section tone="white" size="md">
        <Container>
          <div className="grid gap-14 md:grid-cols-12 md:gap-20">
            <FadeIn className="md:col-span-5">
              <SectionEyebrow>Who This Service Is For</SectionEyebrow>
              <SectionTitle size="md">Clients We Work With</SectionTitle>
            </FadeIn>
            <FadeIn delay={0.05} className="md:col-span-7">
              <ul className="space-y-4">
                {area.whoFor.map((w) => (
                  <li
                    key={w}
                    className="flex items-start gap-4 border-b border-border pb-4 text-[16px] leading-[1.7] text-charcoal/85 md:text-[17px]"
                  >
                    <span className="mt-3 inline-block h-px w-5 shrink-0 bg-gold" />
                    {w}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Section tone="ivory" size="md">
        <Container>
          <div className="grid gap-14 md:grid-cols-12 md:gap-20">
            <div className="md:col-span-5">
              <SectionEyebrow>Problems Handled</SectionEyebrow>
              <SectionTitle size="md">Matters We Take On</SectionTitle>
              <p className="mt-6 text-[16px] leading-[1.8] text-muted md:text-[17px]">
                A focused range of issues within {area.title.toLowerCase()}, prepared with care from
                first review through resolution.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
                {area.problemsHandled.map((p) => (
                  <div key={p} className="bg-warm p-6">
                    <p className="font-serif text-[18px] leading-[1.4] text-navy">{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white" size="md">
        <Container>
          <div className="grid gap-14 md:grid-cols-12 md:gap-20">
            <div className="md:col-span-5">
              <SectionEyebrow>How the Firm Helps</SectionEyebrow>
              <SectionTitle size="md">The Work, in Practice</SectionTitle>
            </div>
            <div className="md:col-span-7">
              <ul className="space-y-5">
                {area.howWeHelp.map((h, i) => (
                  <li key={h} className="flex gap-5 border-b border-border pb-5">
                    <span className="font-serif text-[13px] text-gold pt-1">
                      0{i + 1}
                    </span>
                    <span className="text-[16px] leading-[1.75] text-charcoal/85 md:text-[17px]">
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="navy" size="md">
        <Container>
          <SectionEyebrow tone="light">Process</SectionEyebrow>
          <SectionTitle className="text-ivory">A Clear Path From First Contact</SectionTitle>
          <ol className="mt-12 grid gap-10 md:grid-cols-4">
            {area.process.map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.05}>
                <li className="border-t border-ivory/15 pt-6">
                  <p className="font-serif text-[13px] text-gold-soft">
                    Step 0{i + 1}
                  </p>
                  <p className="mt-4 font-serif text-[22px] text-ivory">{s.step}</p>
                  <p className="mt-3 text-[14px] leading-[1.7] text-ivory/65">{s.detail}</p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="ivory" size="md">
        <Container>
          <div className="grid gap-14 md:grid-cols-12 md:gap-20">
            <div className="md:col-span-5">
              <SectionEyebrow>FAQ</SectionEyebrow>
              <SectionTitle size="md">Common Questions</SectionTitle>
              <p className="mt-6 text-[16px] leading-[1.8] text-muted md:text-[17px]">
                A short set of answers about this practice area. For more, see the full FAQ page or
                reach out for a consultation.
              </p>
              <div className="mt-8">
                <Button href="/faq" variant="outline">See full FAQ</Button>
              </div>
            </div>
            <div className="md:col-span-7">
              <FAQAccordion items={area.faqs} />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white" size="md">
        <Container>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <SectionEyebrow>Other Practice Areas</SectionEyebrow>
              <SectionTitle size="md">Related Services</SectionTitle>
            </div>
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-widest2 text-navy hover:text-gold transition-colors"
            >
              View all <ArrowIcon />
            </Link>
          </div>
          <div className="mt-10 grid gap-px border border-border bg-border md:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/practice-areas/${o.slug}`}
                className="group bg-warm p-8 transition-colors hover:bg-ivory"
              >
                <h3 className="font-serif text-[20px] text-navy">{o.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-muted">{o.summary}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[12px] uppercase tracking-widest2 text-navy group-hover:text-gold transition-colors">
                  Read More <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
