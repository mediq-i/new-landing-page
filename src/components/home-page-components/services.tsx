import Link from "next/link";
import {
  StaggerWrapper,
  StaggerItem,
} from "@/helpers/animations/staggerWrapper";
import { AnimateWrapper } from "@/helpers/animations/animateWrapper";
import { Doctor, Hospital, Medicine } from "../icons";
import { LaptopMinimalCheck, ChevronRight } from "lucide-react";

const services = [
  {
    icon: <Doctor />,
    title: "Chat with Doctor",
    description: "Chat or video call your doctor for fast diagnose",
    link: "/services/chat",
    text: "See Doctor",
  },
  {
    icon: <Medicine />,
    title: "Health Shop",
    description: "Browse millions of medicine to ensure your health",
    link: "/services/shop",
    text: "Browse Shop",
  },
  {
    icon: <Hospital />,
    title: "Emergency Services",
    description: "Book hospital appointment without traffic and queue",
    link: "/services/emergency",
    text: "Book Appointment",
  },
  {
    icon: <LaptopMinimalCheck color="#181b80" size={32} />,
    title: "Medical Appointment",
    description: "Book check-up and choose your desired health check",
    link: "/services/appointment",
    text: "Book Check-up",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <AnimateWrapper variant="fadeIn" duration={0.8}>
          <div className="text-left mb-10 pl-2">
            <span className="text-primary font-semibold text-lg">Services</span>
            <h2 className="text-3xl text-accent-text md:text-[40px] font-semibold mt-2">
              We are here to help
            </h2>
            <p className="text-muted-foreground mt-4">
              Choose from dozens of services to ensure your health and life.
            </p>
          </div>
        </AnimateWrapper>

        <StaggerWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <Link
                href={service.link}
                className="block p-6 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <div className="mb-4">
                  {/* <service.icon className={`w-8 h-8 ${service.color}`} /> */}
                  {service.icon}
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {service.description}
                </p>
                <span className="text-sm text-primary font-medium inline-flex items-center">
                  {service.text}
                  <ChevronRight color="#181b80" strokeWidth={3} />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerWrapper>
      </div>
    </section>
  );
}
