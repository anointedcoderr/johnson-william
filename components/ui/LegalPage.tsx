import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

type Block = { heading: string; paragraphs: string[]; list?: string[] };

export function LegalPage({ blocks }: { blocks: Block[] }) {
  return (
    <Section tone="white" size="md">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="space-y-14">
            {blocks.map((b) => (
              <section key={b.heading}>
                <h2 className="font-serif text-[24px] leading-[1.3] text-navy md:text-[28px]">
                  {b.heading}
                </h2>
                <div className="mt-5 space-y-4 text-[16px] leading-[1.85] text-charcoal/85 md:text-[17px]">
                  {b.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  {b.list && (
                    <ul className="ml-1 space-y-2 pt-1">
                      {b.list.map((l) => (
                        <li key={l} className="flex items-start gap-3">
                          <span className="mt-3 inline-block h-px w-4 shrink-0 bg-gold" />
                          {l}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
