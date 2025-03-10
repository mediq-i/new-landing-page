import {
  AboutHero,
  VisionMission,
  FaqSection,
} from "@/components/about-page-components";
import { ContactSection } from "@/components/partials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mediq-i | About Us",
  description: "Learn more about us",
  keywords:
    "doctor appointment, medical booking, healthcare, online doctor appointment scheduling",
};

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
