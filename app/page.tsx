import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { PracticeAreasPreview } from "@/components/sections/PracticeAreasPreview";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Process } from "@/components/sections/Process";
import { ClientApproach } from "@/components/sections/ClientApproach";
import { FAQPreview } from "@/components/sections/FAQPreview";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <PracticeAreasPreview />
      <AboutPreview />
      <WhyChoose />
      <Process />
      <ClientApproach />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}
