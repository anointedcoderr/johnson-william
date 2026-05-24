import { homeFaqs } from "@/data/faqs";
import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow, SectionTitle } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export function FAQPreview() {
  return (
    <Section tone="ivory" size="md">
      <Container>
        <div className="grid gap-14 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-4">
            <SectionEyebrow>FAQ</SectionEyebrow>
            <SectionTitle>Questions Asked Most Often</SectionTitle>
            <p className="mt-6 text-[16px] leading-[1.8] text-muted">
              A short set of answers about consultations, confidentiality, and what to expect after
              first contact.
            </p>
            <div className="mt-8">
              <Button href="/faq" variant="outline">
                See all questions
              </Button>
            </div>
          </div>
          <div className="md:col-span-8">
            <FAQAccordion items={homeFaqs} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
