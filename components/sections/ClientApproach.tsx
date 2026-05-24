import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow, SectionTitle } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function ClientApproach() {
  return (
    <Section tone="white" size="md">
      <Container>
        <div className="grid items-start gap-14 md:grid-cols-12 md:gap-16">
          <FadeIn className="md:col-span-5">
            <SectionEyebrow>Client Approach</SectionEyebrow>
            <SectionTitle>Representation Built on Trust, Privacy, and Preparation</SectionTitle>
          </FadeIn>
          <FadeIn delay={0.05} className="md:col-span-7">
            <div className="space-y-5 text-[16px] leading-[1.85] text-charcoal/85 md:text-[17px]">
              <p>
                Every legal matter deserves careful attention. The firm focuses on understanding the
                facts, explaining the risks, and guiding clients with honesty, discretion, and
                professionalism.
              </p>
              <p>
                Clients are kept informed at the moments that matter. Strategy is explained in plain
                terms. Costs are discussed openly. The aim is steady progress on real outcomes, not
                noise around the work.
              </p>
            </div>
            <div className="mt-9">
              <Button href="/client-approach" variant="outline">
                Read About the Approach
              </Button>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
