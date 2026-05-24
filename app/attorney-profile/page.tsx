import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionEyebrow, SectionTitle } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { firm } from "@/data/firm";

export const metadata: Metadata = {
  title: "Attorney Profile",
  description: `Profile of ${firm.lawyerName}, principal attorney at ${firm.firmName}.`,
};

const focus = [
  "Bankruptcy",
  "Foreclosure",
  "Pharmaceutical Liability",
  "Wrongful Death",
  "Personal Injury",
  "Truck Accidents",
];

export default function AttorneyProfilePage() {
  return (
    <>
      <PageHero
        eyebrow="Attorney Profile"
        title={firm.lawyerName}
        description={`${firm.attorneyTitle} at ${firm.firmName}. A practice built on careful preparation, steady communication, and a commitment to long term client interests.`}
        crumbs={[{ label: "Home", href: "/" }, { label: "Attorney Profile" }]}
      />

      <Section tone="white" size="md">
        <Container>
          <div className="grid gap-14 md:grid-cols-12 md:gap-20">
            <FadeIn className="md:col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-border bg-ivory">
                <div
                  className="absolute inset-0"
                  aria-hidden="true"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(11,31,51,0.35) 0%, rgba(11,31,51,0.6) 100%), url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                  }}
                />
                <div className="relative z-10 flex h-full flex-col justify-end p-8 text-ivory">
                  <p className="text-[12px] uppercase tracking-widest2 text-gold-soft">
                    Professional Headshot Placeholder
                  </p>
                  <p className="mt-3 font-serif text-[22px] text-ivory">{firm.lawyerName}</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.05} className="md:col-span-7">
              <SectionEyebrow>Profile</SectionEyebrow>
              <SectionTitle>A Considered Approach to Every Matter</SectionTitle>
              <div className="mt-8 space-y-5 text-[16px] leading-[1.85] text-charcoal/85 md:text-[17px]">
                <p>
                  {firm.lawyerName} works with individuals, families, and businesses on matters that
                  require careful attention and steady representation. The practice covers a focused
                  set of areas, each handled with patient preparation.
                </p>
                <p>
                  Clients describe the experience of working with the firm as calm, organised, and
                  respectful. Communication is direct, expectations are set early, and significant
                  developments are explained as they happen.
                </p>
                <p>
                  Outside the practice, time is given to reading, mentoring, and the steady study of
                  legal developments that touch the firm&apos;s areas of work.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/book-consultation" variant="primary">
                  Book a Consultation <ArrowIcon />
                </Button>
                <Button href="/contact" variant="outline">
                  Contact the Office
                </Button>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Section tone="ivory" size="md">
        <Container>
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <SectionEyebrow>Practice Focus</SectionEyebrow>
              <SectionTitle size="md">Areas of Work</SectionTitle>
            </div>
            <div className="md:col-span-8">
              <ul className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
                {focus.map((f) => (
                  <li
                    key={f}
                    className="bg-warm px-6 py-5 font-serif text-[18px] text-navy"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white" size="md">
        <Container>
          <div className="grid gap-12 md:grid-cols-12">
            <ProfileBlock
              title="Education"
              items={[
                "Law degree placeholder",
                "Undergraduate degree placeholder",
                "Additional study placeholder",
              ]}
            />
            <ProfileBlock
              title="Bar Admission"
              items={[
                "Bar admission placeholder",
                "Additional admission placeholder",
              ]}
            />
            <ProfileBlock
              title="Languages"
              items={["English", "Additional language placeholder"]}
            />
            <ProfileBlock
              title="Memberships"
              items={[
                "Bar association placeholder",
                "Section or committee placeholder",
                "Professional society placeholder",
              ]}
            />
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}

function ProfileBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="md:col-span-6">
      <p className="text-[12px] font-medium uppercase tracking-widest2 text-gold">{title}</p>
      <ul className="mt-5 space-y-3 border-t border-border pt-5">
        {items.map((i) => (
          <li
            key={i}
            className="text-[15px] leading-[1.7] text-charcoal/85"
          >
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
