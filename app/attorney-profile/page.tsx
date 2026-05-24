import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionEyebrow, SectionTitle } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { attorneys, type Attorney } from "@/data/attorneys";
import { firm } from "@/data/firm";

export const metadata: Metadata = {
  title: "Our Attorneys",
  description: `The attorneys of ${firm.firmName}, William C. Johnson, Jr. and William C. Johnson, III, serving clients across Maryland and the District of Columbia.`,
};

export default function AttorneyProfilePage() {
  return (
    <>
      <PageHero
        eyebrow="Our Attorneys"
        title="Meet the Attorneys of The Johnson Law Group"
        description="Two attorneys, a shared commitment to careful preparation, honest counsel, and steady representation for individuals and families."
        crumbs={[{ label: "Home", href: "/" }, { label: "Our Attorneys" }]}
      />

      {attorneys.map((a, i) => (
        <AttorneyBlock key={a.slug} attorney={a} index={i} />
      ))}

      <FinalCTA />
    </>
  );
}

function AttorneyBlock({ attorney, index }: { attorney: Attorney; index: number }) {
  const reversed = index % 2 === 1;
  const tone = index % 2 === 0 ? "white" : "ivory";

  return (
    <Section tone={tone} size="lg">
      <Container>
        <div className="grid gap-14 md:grid-cols-12 md:gap-16 lg:gap-20">
          <FadeIn
            className={`md:col-span-5 ${reversed ? "md:order-2" : ""}`}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-border bg-ivory">
              <img
                src={attorney.image}
                alt={attorney.imageAlt}
                className="absolute inset-0 h-full w-full object-cover object-top"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
            <div className="mt-5 flex items-baseline gap-3 border-t border-border pt-5">
              <span className="text-[12px] font-medium uppercase tracking-widest2 text-gold">
                {attorney.title}
              </span>
            </div>
          </FadeIn>

          <FadeIn
            delay={0.05}
            className={`md:col-span-7 ${reversed ? "md:order-1" : ""}`}
          >
            <SectionEyebrow>Attorney 0{index + 1}</SectionEyebrow>
            <h2
              style={{ color: "#0B1F33" }}
              className="font-serif text-[32px] leading-[1.15] md:text-[44px]"
            >
              {attorney.name}
            </h2>
            <p className="mt-3 text-[14px] font-medium uppercase tracking-widest2 text-muted">
              {attorney.credentials}
            </p>

            <div className="mt-7 space-y-5 text-[15px] leading-[1.85] text-charcoal/85 md:text-[16px]">
              {attorney.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {attorney.highlights && attorney.highlights.length > 0 && (
              <ul className="mt-9 grid gap-3 border-t border-border pt-6 sm:grid-cols-2">
                {attorney.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 text-[14px] leading-[1.6] text-charcoal/85"
                  >
                    <span className="mt-2 inline-block h-px w-4 shrink-0 bg-gold" />
                    {h}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/book-consultation" variant="primary">
                Request a Consultation <ArrowIcon />
              </Button>
              <Button href="/contact" variant="outline">
                Contact the Office
              </Button>
            </div>
          </FadeIn>
        </div>

        <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-3">
          <DetailColumn title="Practice Focus" items={attorney.practiceFocus} />
          <DetailColumn title="Education" items={attorney.education} />
          <DetailColumn title="Admissions" items={attorney.admissions} />
        </div>

        {attorney.memberships && attorney.memberships.length > 0 && (
          <div className="mt-px border-l border-r border-b border-border bg-warm p-7 md:p-9">
            <p className="text-[12px] font-medium uppercase tracking-widest2 text-gold">
              Memberships
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-[15px] text-charcoal/85">
              {attorney.memberships.map((m) => (
                <li key={m} className="flex items-center gap-2">
                  <span className="inline-block h-px w-3 bg-gold" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </Section>
  );
}

function DetailColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-warm p-7 md:p-8">
      <p className="text-[12px] font-medium uppercase tracking-widest2 text-gold">{title}</p>
      <ul className="mt-5 space-y-3 border-t border-border pt-5 text-[14px] leading-[1.7] text-charcoal/85">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
