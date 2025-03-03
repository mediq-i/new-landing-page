import {
  AboutSection,
  ServicesSection,
  ArticlesSection,
} from "@/components/home-page-components";
import MainHeader from "@/components/main-header";
import { ContactSection } from "@/components/partials";

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
