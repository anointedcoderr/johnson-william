import Link from "next/link";
import { firm } from "@/data/firm";
import { footerLinks } from "@/data/nav";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-dark text-ivory">
      <Container className="py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-serif text-[22px] text-ivory">{firm.firmName}</p>
            <p className="mt-5 max-w-xs text-[14px] leading-[1.8] text-ivory/65">
              Clear legal guidance, careful preparation, and steady representation for individuals,
              families, and businesses.
            </p>
            <div className="mt-8 space-y-2 text-[14px] text-ivory/70">
              <p>{firm.phone}</p>
              <p>{firm.email}</p>
              <p>{firm.address.line1}</p>
              <p>{firm.address.city}</p>
            </div>
          </div>

          <FooterCol title="Firm" links={footerLinks.firm} />
          <FooterCol title="Practice Areas" links={footerLinks.services} />
          <div className="md:col-span-3">
            <FooterColInline title="Contact" links={footerLinks.contact} />
            <div className="mt-8">
              <FooterColInline title="Legal" links={footerLinks.legal} />
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-ivory/10 pt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-[13px] text-ivory/55">
            &copy; {new Date().getFullYear()} {firm.firmName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] uppercase tracking-widest2 text-ivory/45">
            <span>{firm.rssCredit.label}</span>
            <a
              href={`mailto:${firm.rssCredit.email}`}
              className="hover:text-gold transition-colors normal-case tracking-normal text-[13px]"
            >
              {firm.rssCredit.email}
            </a>
            <a
              href={firm.rssCredit.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors normal-case tracking-normal text-[13px]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="md:col-span-3">
      <p className="text-[12px] font-medium uppercase tracking-widest2 text-gold-soft">
        {title}
      </p>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-[14px] text-ivory/75 hover:text-gold transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterColInline({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-[12px] font-medium uppercase tracking-widest2 text-gold-soft">
        {title}
      </p>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-[14px] text-ivory/75 hover:text-gold transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
