import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { LegalPage } from "@/components/ui/LegalPage";
import { firm } from "@/data/firm";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${firm.firmName}. How information is collected, used, and protected.`,
};

const blocks = [
  {
    heading: "Information We Collect",
    paragraphs: [
      "When you contact the firm through the website, by email, by telephone, or in person, we may collect personal information such as your name, email address, telephone number, and the details you share about your legal matter.",
    ],
  },
  {
    heading: "How Information Is Used",
    paragraphs: [
      "Information is used to respond to your inquiry, to arrange a consultation, and where you become a client, to provide legal services. It may also be used for record keeping and to meet professional obligations.",
    ],
  },
  {
    heading: "Contact Form Submissions",
    paragraphs: [
      "Submissions through the contact and consultation forms are received in confidence. Submissions do not, by themselves, create a lawyer client relationship. A formal relationship begins after a conflict check and a signed retainer.",
    ],
  },
  {
    heading: "Cookies",
    paragraphs: [
      "The website may use basic cookies and similar technologies to support functionality and to understand how the site is used. You can disable cookies in your browser, although some features may not work as expected.",
    ],
  },
  {
    heading: "Data Protection",
    paragraphs: [
      "Reasonable steps are taken to protect personal information against loss, theft, and unauthorised access, disclosure, or modification. Records are stored using appropriate safeguards.",
    ],
  },
  {
    heading: "Third Party Services",
    paragraphs: [
      "The website may rely on third party services for hosting, analytics, fonts, and forms. These services may process limited technical information to deliver the requested feature.",
    ],
  },
  {
    heading: "Your Rights",
    paragraphs: [
      "You may request access to, correction of, or deletion of personal information held by the firm, subject to legal and professional obligations. Requests can be sent using the contact details below.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      `Questions about this privacy policy can be sent to ${firm.email} or directed to ${firm.firmName} at the address listed on the contact page.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        description="An overview of how information is collected, used, and protected when you interact with the firm online."
        crumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />
      <LegalPage blocks={blocks} />
    </>
  );
}
