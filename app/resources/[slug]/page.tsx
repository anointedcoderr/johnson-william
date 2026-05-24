import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { resources, getResource } from "@/data/resources";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ArrowIcon } from "@/components/ui/Button";
import { FinalCTA } from "@/components/sections/FinalCTA";

export function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getResource(slug);
  if (!article) return { title: "Article" };
  return { title: article.title, description: article.excerpt };
}

export default async function ResourceArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getResource(slug);
  if (!article) notFound();

  const related = resources.filter((r) => r.slug !== slug).slice(0, 2);

  return (
    <>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        description={article.excerpt}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: article.title },
        ]}
      />

      <Section tone="white" size="md">
        <Container>
          <div className="mx-auto max-w-2xl">
            <div className="flex items-center gap-4 text-[13px] text-muted">
              <span>{article.date}</span>
              <span className="h-px w-6 bg-border" />
              <span>{article.readTime}</span>
            </div>
            <div className="mt-10 space-y-7 text-[17px] leading-[1.85] text-charcoal/90 md:text-[18px]">
              {article.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-14 border-t border-border pt-8 text-[14px] text-muted">
              The content here is general information and not legal advice. For guidance on a
              specific matter, contact the firm for a private consultation.
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="ivory" size="md">
        <Container>
          <p className="text-[12px] font-medium uppercase tracking-widest2 text-gold">
            Continue Reading
          </p>
          <div className="mt-8 grid gap-px border border-border bg-border md:grid-cols-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/resources/${r.slug}`}
                className="group bg-warm p-8 transition-colors hover:bg-ivory"
              >
                <p className="text-[12px] uppercase tracking-widest2 text-gold">{r.category}</p>
                <h3 className="mt-4 font-serif text-[22px] leading-[1.3] text-navy">
                  {r.title}
                </h3>
                <span className="mt-5 inline-flex items-center gap-2 text-[12px] uppercase tracking-widest2 text-navy group-hover:text-gold transition-colors">
                  Read Article <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
