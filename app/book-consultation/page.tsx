import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionEyebrow, SectionTitle } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { firm } from "@/data/firm";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description: `Request a private consultation with ${firm.firmName}. Confidential, careful, and focused on practical legal guidance.`,
};

const consultationSteps = [
  {
    title: "Send your request",
    body: "Share a short summary using the form. Any details you provide are received in confidence.",
  },
  {
    title: "A private response",
    body: "The firm responds to confirm receipt, ask a few preliminary questions, and arrange a time.",
  },
  {
    title: "Your consultation",
    body: "We discuss the facts, review the legal options, and outline a clear next step.",
  },
];

export default function BookConsultationPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a Consultation"
        title="A Private Conversation About Your Legal Matter"
        description="Share what happened, ask your questions, and get clear direction on the next step. Submissions are received in confidence."
        crumbs={[{ label: "Home", href: "/" }, { label: "Book a Consultation" }]}
      />

      <Section tone="ivory" size="md">
        <Container>
          <div className="grid gap-14 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <SectionEyebrow>What to Expect</SectionEyebrow>
              <SectionTitle size="md">A Careful First Conversation</SectionTitle>
              <p className="mt-6 text-[16px] leading-[1.85] text-muted md:text-[17px]">
                The consultation is a time to be heard and to receive practical answers. It usually
                lasts between thirty and sixty minutes. Some matters can be resolved in this single
                conversation. Others lead to a careful next step.
              </p>

              <ol className="mt-10 space-y-7">
                {consultationSteps.map((s, i) => (
                  <li key={s.title} className="border-t border-border pt-6">
                    <p className="font-serif text-[13px] text-gold">0{i + 1}</p>
                    <p className="mt-3 font-serif text-[20px] text-navy">{s.title}</p>
                    <p className="mt-2 text-[15px] leading-[1.75] text-muted">{s.body}</p>
                  </li>
                ))}
              </ol>

              <div className="mt-10 border-t border-border pt-6 text-[14px] leading-[1.7] text-muted">
                <p className="text-[12px] font-medium uppercase tracking-widest2 text-navy/60 mb-2">
                  Confidentiality
                </p>
                Information shared through this form is treated with discretion. Submissions do not,
                by themselves, create a lawyer client relationship.
              </div>
            </div>
            <div className="md:col-span-7">
              <ConsultationForm />
              <div className="mt-8 grid gap-6 border border-border bg-warm p-7 sm:grid-cols-3">
                <ContactItem label="Phone" value={firm.phone} />
                <ContactItem label="Email" value={firm.email} />
                <ContactItem label="Office" value={firm.address.city} />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function ContactItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] font-medium uppercase tracking-widest2 text-gold">{label}</p>
      <p className="mt-2 text-[15px] text-navy">{value}</p>
    </div>
  );
}
