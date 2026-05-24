import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionEyebrow, SectionTitle } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/Button";
import { firm } from "@/data/firm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${firm.firmName} to ask a question, request a consultation, or learn about office hours and location.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Reach the Office"
        description="The firm receives messages by form, telephone, and email. Submissions are treated with discretion."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <Section tone="ivory" size="md">
        <Container>
          <div className="grid gap-14 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <SectionEyebrow>Office</SectionEyebrow>
              <SectionTitle size="md">Where to Find Us</SectionTitle>
              <div className="mt-8 space-y-7">
                <Block label="Phone" lines={[firm.phone]} />
                <Block label="Email" lines={[firm.email]} />
                <Block
                  label="Address"
                  lines={[firm.address.line1, firm.address.line2, firm.address.city, firm.address.postal]}
                />
                <Block
                  label="Office Hours"
                  lines={firm.officeHours.map((o) => `${o.day} | ${o.hours}`)}
                />
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="/book-consultation" variant="primary">
                  Book a Consultation
                </Button>
                <Button href={`tel:${firm.phone.replace(/\s/g, "")}`} variant="outline">
                  Call the Office
                </Button>
              </div>
              <p className="mt-10 max-w-md text-[13px] leading-[1.7] text-muted">
                Messages sent to the firm are treated with care. Contacting the firm does not, by
                itself, create a lawyer client relationship.
              </p>
            </div>

            <div className="md:col-span-7">
              <ContactForm />
              <div className="mt-10 border border-border bg-warm">
                <div className="aspect-[16/9] w-full bg-navy/95 flex items-center justify-center text-center text-ivory">
                  <div className="px-6">
                    <p className="text-[11px] uppercase tracking-widest2 text-gold-soft">
                      Map Placeholder
                    </p>
                    <p className="mt-3 font-serif text-[22px]">{firm.address.city}</p>
                    <p className="mt-2 text-[14px] text-ivory/65">
                      Embed the office map here when the address is confirmed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function Block({ label, lines }: { label: string; lines: string[] }) {
  return (
    <div>
      <p className="text-[12px] font-medium uppercase tracking-widest2 text-gold">{label}</p>
      <div className="mt-3 space-y-1 text-[16px] leading-[1.7] text-charcoal/85">
        {lines.map((l, i) => (
          <p key={i}>{l}</p>
        ))}
      </div>
    </div>
  );
}
