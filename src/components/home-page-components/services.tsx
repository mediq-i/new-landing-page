import Link from "next/link";
import {
  StaggerWrapper,
  StaggerItem,
} from "@/helpers/animations/staggerWrapper";
import { Doctor, Hospital, Medicine } from "../icons";
import { LaptopMinimalCheck } from "lucide-react";

const services = [
  {
    icon: <Doctor />,
    title: "Chat with Doctor",
    description: "Chat or video call your doctor for fast diagnose",
    link: "/services/chat",
    color: "text-primary",
  },
  {
    icon: <Medicine />,
    title: "Health Shop",
    description: "Browse millions of medicine to ensure your health",
    link: "/services/shop",
    color: "text-primary",
  },
  {
    icon: <Hospital />,
    title: "Emergency Services",
    description: "Book hospital appointment without traffic and queue",
    link: "/services/emergency",
    color: "text-primary",
  },
  {
    icon: <LaptopMinimalCheck color="#635BFF" />,
    title: "Medical Appointment",
    description: "Book check-up and choose your desired health check",
    link: "/services/appointment",
    color: "text-primary",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-medium">Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            We are here to help
          </h2>
          <p className="text-muted-foreground mt-4">
            Choose from dozens of services to ensure your health and life.
          </p>
        </div>

        <StaggerWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
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
                  See More →
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerWrapper>
      </div>
    </section>
  );
}
