import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow, SectionTitle } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

const points = [
  {
    title: "Clear communication",
    body: "Steady updates and plain language from the first conversation through resolution.",
  },
  {
    title: "Attention to detail",
    body: "Sensitive details are handled with care and reviewed with discipline.",
  },
  {
    title: "Practical strategy",
    body: "Workable plans, not confusion. Every step has a reason and a purpose.",
  },
  {
    title: "Professional preparation",
    body: "Documents, evidence, and arguments are prepared with discipline and depth.",
  },
  {
    title: "Direct, respectful support",
    body: "Honest answers, careful listening, and a calm presence at every stage.",
  },
  {
    title: "Strict confidentiality",
    body: "Personal information is treated with discretion at every step of the engagement.",
  },
];

export function WhyChoose() {
  return (
    <Section tone="navy">
      <Container>
        <div className="max-w-2xl">
          <SectionEyebrow tone="light">Why Clients Choose</SectionEyebrow>
          <SectionTitle className="text-ivory">
            Why Clients Choose This Firm
          </SectionTitle>
          <p className="mt-6 text-[17px] leading-[1.8] text-ivory/70">
            Six standards that shape how every matter is handled, from the first call to the final
            document.
          </p>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {points.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.04}>
              <div className="border-t border-ivory/15 pt-7">
                <p className="font-serif text-[13px] text-gold-soft">0{i + 1}</p>
                <h3 className="mt-4 font-serif text-[22px] text-ivory">{p.title}</h3>
                <p className="mt-4 text-[15px] leading-[1.8] text-ivory/65">{p.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
