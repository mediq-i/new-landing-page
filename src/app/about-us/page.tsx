import {
  AboutHero,
  VisionMission,
  FaqSection,
} from "@/components/about-page-components";
import { ContactSection } from "@/components/partials";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <VisionMission />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
