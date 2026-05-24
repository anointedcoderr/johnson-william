import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionEyebrow, SectionTitle } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Client Approach",
  description:
    "How the firm works with clients: communication standards, confidentiality, case preparation, and transparency.",
};

const blocks = [
  {
    title: "How the firm works",
    body: "The firm receives each matter with a careful first review. Facts are gathered. Documents are organised. Realistic options are outlined before any action is taken. The work moves at the pace the situation requires, not faster.",
  },
  {
    title: "Communication standards",
    body: "Clients are reached at the moments that matter. Significant developments are explained in plain terms. Email, telephone, and in person meetings are used as appropriate. Response times are committed to in writing during engagement.",
  },
  {
    title: "Confidentiality",
    body: "Personal information is handled with discretion. Records are stored securely. Only those working on the matter have access. Confidentiality is maintained as the law allows, before, during, and after the engagement.",
  },
  {
    title: "Case preparation",
    body: "Preparation is the foundation of every result. Documents are reviewed in detail. Timelines and facts are arranged. Arguments are tested before they leave the office. Surprises are minimised by careful work in advance.",
  },
  {
    title: "Transparency",
    body: "Costs, timelines, and risks are explained openly. Estimates are given where possible. Significant changes are flagged early. Clients are partners in decisions that affect the direction of the matter.",
  },
  {
    title: "Client expectations",
    body: "Clients are asked to share information openly, respond to questions in a timely way, and reach out when something changes. A clear partnership, on both sides, produces the strongest result.",
  },
];

export default function ClientApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="Client Approach"
        title="Representation Built on Trust, Privacy, and Preparation"
        description="A clear view of how the firm works alongside clients across every stage of a legal matter."
        crumbs={[{ label: "Home", href: "/" }, { label: "Client Approach" }]}
      />

      <Section tone="white" size="md">
        <Container>
          <div className="grid gap-12 md:grid-cols-12">
            {blocks.map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.04} className="md:col-span-6">
                <article className="border-t border-border pt-7">
                  <p className="font-serif text-[13px] text-gold">0{i + 1}</p>
                  <h3 className="mt-4 font-serif text-[24px] leading-[1.25] text-navy md:text-[26px]">
                    {b.title}
                  </h3>
                  <p className="mt-5 text-[15px] leading-[1.85] text-muted md:text-[16px]">
                    {b.body}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="ivory" size="md">
        <Container>
          <div className="max-w-3xl">
            <SectionEyebrow>Disclaimer</SectionEyebrow>
            <SectionTitle size="md">A Note on This Page</SectionTitle>
            <p className="mt-6 text-[15px] leading-[1.85] text-muted md:text-[16px]">
              The content on this page describes the firm&apos;s general approach to client work. It is
              not a guarantee of a particular outcome. Past results do not predict future results,
              and every legal matter is decided on its own facts. For advice on a specific
              situation, a private consultation is the appropriate next step.
            </p>
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
