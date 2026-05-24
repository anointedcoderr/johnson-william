import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { LegalPage } from "@/components/ui/LegalPage";
import { firm } from "@/data/firm";

export const metadata: Metadata = {
  title: "Terms and Legal Disclaimer",
  description: `Terms of use and legal disclaimer for ${firm.firmName}.`,
};

const blocks = [
  {
    heading: "General Information Only",
    paragraphs: [
      "The information on this website is provided for general information purposes only. It is not intended to be, and should not be relied on as, legal advice for any specific situation.",
    ],
  },
  {
    heading: "No Legal Advice",
    paragraphs: [
      "Reading content on the website, downloading a resource, or sending a message does not by itself create a lawyer client relationship. Legal advice can only be given after a private consultation, a conflict check, and a signed retainer.",
    ],
  },
  {
    heading: "No Lawyer Client Relationship Through the Website",
    paragraphs: [
      "Submitting information through the contact or consultation forms does not, by itself, form a lawyer client relationship. Until the firm confirms representation in writing, no such relationship exists.",
    ],
  },
  {
    heading: "No Guarantee of Representation",
    paragraphs: [
      "Contacting the firm does not guarantee that the firm will take on a matter. Whether the firm accepts a matter depends on availability, conflicts, and the nature of the issue.",
    ],
  },
  {
    heading: "Past Results",
    paragraphs: [
      "Past results do not guarantee future outcomes. Every legal matter turns on its own facts, applicable law, and circumstances.",
    ],
  },
  {
    heading: "Jurisdiction",
    paragraphs: [
      "The firm is authorised to practise in the jurisdictions noted on the attorney profile page. Information on the website is not intended as a solicitation in any place where the firm is not authorised to practise.",
    ],
  },
  {
    heading: "External Links",
    paragraphs: [
      "The website may include links to outside resources. These links are provided for convenience. The firm does not control external content and is not responsible for materials on linked websites.",
    ],
  },
  {
    heading: "Use of the Website",
    paragraphs: [
      "By using this website, you agree to use it for lawful purposes only and to refrain from any action that could damage, disable, or impair access for others.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      `For questions about these terms, contact the firm at ${firm.email}.`,
    ],
  },
];

export default function LegalDisclaimerPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms"
        title="Terms and Legal Disclaimer"
        description="Important information about the use of this website and the limits of the content found on it."
        crumbs={[{ label: "Home", href: "/" }, { label: "Terms and Legal Disclaimer" }]}
      />
      <LegalPage blocks={blocks} />
    </>
  );
}
