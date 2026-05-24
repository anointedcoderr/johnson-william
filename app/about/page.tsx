import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionEyebrow, SectionTitle } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { firm } from "@/data/firm";

export const metadata: Metadata = {
  title: "About the Firm",
  description: `Learn about ${firm.firmName}, our legal philosophy, mission, and approach to client representation.`,
};

const values = [
  { title: "Clarity", body: "Plain language, careful explanations, no unnecessary noise." },
  { title: "Discretion", body: "Confidential handling of every detail, every conversation." },
  { title: "Preparation", body: "Disciplined research and documentation before any step is taken." },
  { title: "Integrity", body: "Honest assessment of risk, options, and likely outcomes." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Firm"
        title="Legal Support With Clarity, Discretion, and Purpose"
        description="The firm was built around a simple belief: clients deserve legal guidance that is clear, honest, and carefully prepared."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <Section tone="white" size="lg">
        <Container>
          <div className="grid gap-14 md:grid-cols-12 md:gap-20">
            <FadeIn className="md:col-span-5">
              <SectionEyebrow>Our Story</SectionEyebrow>
              <SectionTitle>A Practice Built on Steady, Careful Work</SectionTitle>
            </FadeIn>
            <FadeIn delay={0.05} className="md:col-span-7">
              <div className="space-y-5 text-[16px] leading-[1.85] text-charcoal/85 md:text-[17px]">
                <p>
                  Whether the matter is personal, commercial, or urgent, the goal is to help each
                  client understand their position and make informed decisions. The work is
                  approached with patience, careful research, and a long view of what the right
                  outcome looks like.
                </p>
                <p>
                  Clients reach out at different moments. Some come with a specific question. Others
                  arrive in the middle of a difficult situation. In every case, the first task is to
                  listen, then to bring order to the facts, and finally to set out the available
                  paths in clear terms.
                </p>
                <p>
                  The firm believes that the strongest legal work is also the quietest. It rests on
                  thorough preparation, fair dealing, and a commitment to do right by the people who
                  have placed their trust in the practice.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Section tone="ivory" size="md">
        <Container>
          <div className="grid gap-14 md:grid-cols-12">
            <div className="md:col-span-5">
              <SectionEyebrow>Philosophy</SectionEyebrow>
              <SectionTitle>Legal Work as a Considered Craft</SectionTitle>
            </div>
            <div className="md:col-span-7">
              <p className="text-[17px] leading-[1.85] text-muted">
                Legal practice rewards calm, careful work. The firm avoids shortcuts, refuses
                pressure tactics, and prepares each matter as though it will be examined by the most
                attentive reader. That standard protects clients and produces results that hold up
                under scrutiny.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white" size="md">
        <Container>
          <div className="grid gap-14 md:grid-cols-12 md:gap-20">
            <div className="md:col-span-5">
              <SectionEyebrow>Mission and Values</SectionEyebrow>
              <SectionTitle>What the Practice Stands For</SectionTitle>
              <p className="mt-6 text-[16px] leading-[1.85] text-muted md:text-[17px]">
                The mission is to make legal services feel measured and human, not transactional.
                Below are the values that guide every engagement.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
                {values.map((v) => (
                  <div key={v.title} className="bg-warm p-7">
                    <p className="font-serif text-[12px] text-gold uppercase tracking-widest2">
                      Value
                    </p>
                    <h3 className="mt-4 font-serif text-[22px] text-navy">{v.title}</h3>
                    <p className="mt-3 text-[15px] leading-[1.8] text-muted">{v.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="ivory" size="md">
        <Container>
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-6">
              <SectionEyebrow>Qualifications</SectionEyebrow>
              <SectionTitle size="md">Education and Admissions</SectionTitle>
              <ul className="mt-8 space-y-4 text-[15px] leading-[1.7] text-charcoal/85">
                <Placeholder label="Law degree placeholder" />
                <Placeholder label="Undergraduate degree placeholder" />
                <Placeholder label="Bar admission placeholder" />
                <Placeholder label="Additional qualifications placeholder" />
              </ul>
            </div>
            <div className="md:col-span-6">
              <SectionEyebrow>Memberships</SectionEyebrow>
              <SectionTitle size="md">Professional Affiliations</SectionTitle>
              <ul className="mt-8 space-y-4 text-[15px] leading-[1.7] text-charcoal/85">
                <Placeholder label="Bar association placeholder" />
                <Placeholder label="Section or committee placeholder" />
                <Placeholder label="Professional society placeholder" />
                <Placeholder label="Pro bono affiliation placeholder" />
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="navy" size="md">
        <Container>
          <div className="grid gap-12 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <SectionEyebrow tone="light">A Personal Note</SectionEyebrow>
              <SectionTitle className="text-ivory">
                Steady Work, Quiet Confidence
              </SectionTitle>
              <p className="mt-6 max-w-xl text-[17px] leading-[1.85] text-ivory/75">
                Legal work, at its best, is patient and unhurried. The aim is to remove confusion,
                stabilise the situation, and let the client make decisions from a place of
                understanding, not anxiety.
              </p>
            </div>
            <div className="md:col-span-5 md:text-right">
              <Button href="/book-consultation" variant="gold">
                Book a Consultation <ArrowIcon />
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}

function Placeholder({ label }: { label: string }) {
  return (
    <li className="flex items-start gap-3 border-l border-gold/40 pl-4 text-muted">
      <span className="font-serif text-[18px] text-navy">{label}</span>
    </li>
  );
}
