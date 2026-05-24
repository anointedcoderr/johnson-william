import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button, ArrowIcon } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <Section tone="dark" size="md">
      <Container className="relative">
        <div className="grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="mb-5 inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-widest2 text-gold-soft">
              <span className="inline-block h-px w-10 bg-gold-soft" />
              Begin
            </p>
            <h2 className="font-serif text-[32px] leading-[1.15] text-ivory md:text-[44px]">
              Speak With a Lawyer About Your Matter
            </h2>
            <p className="mt-6 max-w-xl text-[17px] leading-[1.8] text-ivory/70">
              Share what happened, ask your questions, and get clear direction on the next step.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Button href="/book-consultation" variant="gold" className="px-8 py-5">
              Book a Consultation
              <ArrowIcon />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
