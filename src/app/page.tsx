import {
  AboutSection,
  ServicesSection,
} from "@/components/home-page-components";
import MainHeader from "@/components/main-header";

export default function Home() {
  return (
    <>
      <MainHeader />
      <AboutSection />
      <ServicesSection />
    </>
  );
}
