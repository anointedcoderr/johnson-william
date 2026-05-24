import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow, SectionTitle } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

const steps = [
  {
    n: "01",
    title: "Schedule a consultation",
    body: "Reach out by form, telephone, or email. Initial details are received in confidence.",
  },
  {
    n: "02",
    title: "Discuss your legal matter",
    body: "A private conversation about facts, goals, and concerns, with time to ask questions.",
  },
  {
    n: "03",
    title: "Review your options",
    body: "A clear explanation of the legal routes available, with honest risk and timing.",
  },
  {
    n: "04",
    title: "Build the right strategy",
    body: "A workable plan, prepared with care, that fits the situation and the priorities.",
  },
  {
    n: "05",
    title: "Move forward with confidence",
    body: "Steady representation, careful preparation, and clear updates at every stage.",
  },
];

export function Process() {
  return (
    <Section tone="ivory">
      <Container>
        <div className="max-w-3xl">
          <SectionEyebrow>The Process</SectionEyebrow>
          <SectionTitle>What Happens After You Contact Us</SectionTitle>
          <p className="mt-6 text-[17px] leading-[1.8] text-muted">
            A clear, predictable engagement so the path forward is understood from the first
            conversation.
          </p>
        </div>

        <ol className="mt-16 grid gap-x-8 gap-y-10 md:grid-cols-5">
          {steps.map((s, i) => (
            <FadeIn key={s.n} delay={i * 0.05}>
              <li className="relative">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-[13px] text-gold">{s.n}</span>
                  <span className="hidden md:block flex-1 h-px bg-border" />
                </div>
                <h3 className="mt-5 font-serif text-[19px] leading-[1.3] text-navy">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-muted">{s.body}</p>
              </li>
            </FadeIn>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
