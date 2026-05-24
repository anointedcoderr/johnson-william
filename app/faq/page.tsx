import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionEyebrow, SectionTitle } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { faqGroups } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about consultations, fees, confidentiality, documents, and communication.",
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions, Answered Plainly"
        description="A grouped set of common questions about working with the firm, from first contact through resolution."
        crumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      />

      <Section tone="ivory" size="md">
        <Container>
          <div className="space-y-20">
            {faqGroups.map((group) => (
              <div key={group.title} className="grid gap-12 md:grid-cols-12 md:gap-20">
                <div className="md:col-span-4">
                  <SectionEyebrow>Topic</SectionEyebrow>
                  <SectionTitle size="md">{group.title}</SectionTitle>
                </div>
                <div className="md:col-span-8">
                  <FAQAccordion items={group.items} />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
