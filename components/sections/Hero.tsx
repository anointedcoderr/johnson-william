import { Button, ArrowIcon } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-ivory">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute inset-0 grain"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #08172A 0%, #0B1F33 55%, #071827 100%)",
          }}
        />
        <div
          className="absolute right-[-12%] top-[-10%] h-[640px] w-[640px] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(176,141,87,0.4), transparent 60%)" }}
        />
        <div
          className="absolute left-[-20%] bottom-[-30%] h-[520px] w-[520px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(176,141,87,0.25), transparent 60%)" }}
        />
      </div>
      <Container className="relative grid items-center gap-16 pt-36 pb-24 md:grid-cols-12 md:pt-44 md:pb-32">
        <div className="md:col-span-7">
          <FadeIn>
            <p className="mb-8 inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-widest2 text-gold">
              <span className="inline-block h-px w-10 bg-gold" />
              Attorneys at Law
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h1 className="font-serif text-ivory text-[38px] leading-[1.05] tracking-tight md:text-[56px]">
              Trusted Legal Guidance
              <br />
              When the Outcome Matters
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-7 max-w-xl text-[17px] leading-[1.8] text-ivory/75 md:text-[18px]">
              Legal matters can be stressful. We help individuals, families, and businesses understand
              their options, protect their interests, and move forward with a clear strategy.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/book-consultation" variant="gold">
                Book a Consultation
                <ArrowIcon />
              </Button>
              <Button
                href="/practice-areas"
                variant="ghost"
                className="text-ivory hover:text-gold border border-ivory/20 hover:border-gold"
              >
                View Practice Areas
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={0.25}>
            <div className="mt-14 flex flex-wrap gap-x-10 gap-y-6 border-t border-ivory/10 pt-8">
              <Stat label="Confidential" sub="Consultations" />
              <Stat label="Clear" sub="Legal Strategy" />
              <Stat label="Client Focused" sub="Representation" />
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} className="md:col-span-5">
          <HeroCard />
        </FadeIn>
      </Container>
    </section>
  );
}

function Stat({ label, sub }: { label: string; sub: string }) {
  return (
    <div>
      <p className="font-serif text-[22px] text-ivory">{label}</p>
      <p className="mt-1 text-[12px] uppercase tracking-widest2 text-ivory/55">{sub}</p>
    </div>
  );
}

function HeroCard() {
  return (
    <div className="relative">
      <div className="absolute -inset-3 -z-10 bg-gold/10 blur-2xl" aria-hidden="true" />
      <div className="border border-ivory/15 bg-[#0a1d31]/60 backdrop-blur-sm p-8 md:p-10">
        <div className="flex items-center justify-between border-b border-ivory/10 pb-5">
          <p className="text-[11px] font-medium uppercase tracking-widest2 text-gold">
            Private Consultation
          </p>
          <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
        </div>
        <p className="mt-7 font-serif text-[26px] leading-[1.3] text-ivory">
          A careful conversation about your matter, in confidence, with practical next steps.
        </p>
        <ul className="mt-8 space-y-4 text-[15px] text-ivory/80">
          <li className="flex gap-3">
            <span className="mt-2 inline-block h-[1px] w-5 bg-gold" />
            Discuss the facts and your goals
          </li>
          <li className="flex gap-3">
            <span className="mt-2 inline-block h-[1px] w-5 bg-gold" />
            Review the legal options
          </li>
          <li className="flex gap-3">
            <span className="mt-2 inline-block h-[1px] w-5 bg-gold" />
            Receive a clear path forward
          </li>
        </ul>
        <div className="mt-10 border-t border-ivory/10 pt-6">
          <p className="text-[12px] uppercase tracking-widest2 text-ivory/55">Available</p>
          <p className="mt-2 text-[15px] text-ivory/85">In person, virtual, or by telephone</p>
        </div>
      </div>
    </div>
  );
}
