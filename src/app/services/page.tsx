import { ServicesHero } from "@/components/services-page-components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mediq-i | Services",
  description: "Services we offer you",
  keywords:
    "doctor appointment, medical booking, healthcare, online doctor appointment scheduling",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      {/* Add other services page components here */}
    </main>
  );
}
