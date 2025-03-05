import Link from "next/link";
import { AnimateWrapper } from "@/helpers/animations/animateWrapper";
import {
  StaggerWrapper,
  StaggerItem,
} from "@/helpers/animations/staggerWrapper";
import {
  User,
  ShoppingBag,
  Building2,
  Syringe,
  Home,
  Shield,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    icon: User,
    title: "Chat with Doctor",
    description: "Chat or video call your doctor for fast diagnose",
    link: "/services/chat",
    linkText: "See Doctor",
  },
  {
    icon: ShoppingBag,
    title: "Health Shop",
    description: "Browse millions of medicine to ensure your health",
    link: "/services/shop",
    linkText: "Browse Shop",
  },
  {
    icon: Building2,
    title: "Hospital Appointment",
    description: "Book hospital appointment without hustle and queue",
    link: "/services/hospital",
    linkText: "Book Appointment",
  },
  {
    icon: Syringe,
    title: "Medical Appointment",
    description: "Book check-up and choose your desired health check",
    link: "/services/medical",
    linkText: "Book Check-up",
  },
  {
    icon: Home,
    title: "Home Lab & Vaccine",
    description: "Get lab test or vaccine from home fast and easy",
    link: "/services/lab",
    linkText: "Reserve Vaccine",
  },
  {
    icon: Shield,
    title: "Connect Your Insurance",
    description: "Get insurance benefits directly for our services",
    link: "/services/insurance",
    linkText: "Connect Now",
  },
];

const categories = ["General Services", "Special Services", "Health Support"];

export default function ServicesHero() {
  return (
    <section className="pt-32 pb-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <AnimateWrapper variant="fadeIn">
          <span className="text-primary font-medium">Services</span>
          <h1 className="text-3xl md:text-4xl font-semibold text-accent-text mt-2 mb-4">
            General Service
          </h1>
          <p className="text-accent-text-2 max-w-2xl mb-12">
            Choose Healthcare services encompasses a wide range of medical,
            preventive, diagnostic, therapeutic, and supportive services aimed
            at promoting, maintaining, or restoring health
          </p>
        </AnimateWrapper>

        {/* Categories */}
        <div className="flex flex-wrap gap-8 mb-12 border-b border-gray-200">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`pb-4 text-lg font-medium transition-colors hover:text-primary ${
                index === 0
                  ? "text-primary border-b-2 border-primary -mb-[2px]"
                  : "text-accent-text-2"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <StaggerWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors group">
                <div className="mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-accent-text mb-2">
                  {service.title}
                </h3>
                <p className="text-accent-text-2 mb-4">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-primary font-medium group-hover:underline"
                >
                  {service.linkText}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerWrapper>
      </div>
    </section>
  );
}
