import type { Metadata } from "next";
import {
  AboutSection,
  ServicesSection,
  ArticlesSection,
} from "@/components/home-page-components";
import MainHeader from "@/components/main-header";
import { ContactSection } from "@/components/partials";

export const metadata: Metadata = {
  title: "Mediq-i | Your Health, Our Priority",
  description: "Welcome to Mediq-i",
  keywords:
    "doctor appointment, medical booking, healthcare, online doctor appointment scheduling",
};

export default function Home() {
  return (
    <>
      <MainHeader />
      <AboutSection />
      <ServicesSection />
      <ArticlesSection />
      <ContactSection />
    </>
  );
}
