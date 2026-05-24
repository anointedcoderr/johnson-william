import { Container } from "@/components/ui/Container";

const items = [
  "Confidential Consultations",
  "Clear Legal Strategy",
  "Client Focused Representation",
  "Professional Legal Guidance",
];

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-warm">
      <Container className="py-7">
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:gap-x-14">
          {items.map((label) => (
            <li
              key={label}
              className="text-[12px] font-medium uppercase tracking-widest2 text-navy/70"
            >
              {label}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
