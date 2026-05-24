import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow, SectionTitle } from "@/components/ui/Section";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function AboutPreview() {
  return (
    <Section tone="white">
      <Container>
        <div className="grid gap-14 md:grid-cols-12 md:gap-20">
          <FadeIn className="md:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-border bg-ivory">
              <div
                className="absolute inset-0"
                aria-hidden="true"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(11,31,51,0.85) 0%, rgba(11,31,51,0.65) 60%, rgba(7,24,39,0.92) 100%), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="relative z-10 flex h-full flex-col justify-end p-9 text-ivory">
                <p className="text-[12px] uppercase tracking-widest2 text-gold-soft">
                  Office of the Firm
                </p>
                <p className="mt-3 font-serif text-[22px] leading-[1.3] text-ivory">
                  A place of focused work, careful preparation, and confidential conversation.
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.05} className="md:col-span-7 md:pl-4">
            <SectionEyebrow>About the Firm</SectionEyebrow>
            <SectionTitle>A Calm, Strategic Approach to Legal Representation</SectionTitle>
            <div className="mt-8 space-y-5 text-[16px] leading-[1.8] text-muted md:text-[17px]">
              <p>
                When people contact a lawyer, they are often dealing with pressure, uncertainty, or
                important decisions. Our role is to bring clarity to the situation, explain the
                legal options, and build a practical path forward.
              </p>
              <p>
                Each matter is approached with attention to detail, discretion, and a steady focus
                on what is in the client&apos;s best interest. The work is quiet, careful, and aimed at
                outcomes that hold up over time.
              </p>
            </div>
            <div className="mt-10">
              <Button href="/attorney-profile" variant="outline">
                Meet the Attorneys
                <ArrowIcon />
              </Button>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
