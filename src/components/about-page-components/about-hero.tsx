import Image from "next/image";
import { AnimateWrapper } from "@/helpers/animations/animateWrapper";
import {
  StaggerWrapper,
  StaggerItem,
} from "@/helpers/animations/staggerWrapper";

export default function AboutHero() {
  return (
    <section className="relative min-h-screen pt-32 pb-16 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="lg:col-span-11 text-center mb-8">
            <AnimateWrapper variant="fadeIn">
              <h1 className="text-4xl md:text-5xl font-semibold text-accent-text mb-6">
                We're The Professional You Need
              </h1>
              <p className="text-lg md:text-xl font-medium text-accent-text-2 max-w-6xl mx-auto">
                Aims to improve the health and well-being of individuals and
                populations, addressing both physical and mental health needs
                while adhering to ethical standards and promoting equity and
                accessibility in healthcare delivery.
              </p>
            </AnimateWrapper>
          </div>

          {/* Image Grid */}
          <div className="lg:col-span-7">
            <AnimateWrapper variant="slideRight" delay={0.2}>
              <div className="relative h-[400px] md:h-[522px] rounded-xl overflow-hidden">
                <Image
                  src="/images/about-hero1.png"
                  alt="Doctor and nurse discussing in hospital hallway"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  priority
                />
              </div>
            </AnimateWrapper>
          </div>

          {/* Right Column Images */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full">
            <StaggerWrapper className="flex flex-col h-full justify-between gap-6">
              <StaggerItem>
                <div className="relative h-[200px] md:h-[250px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/about-hero2.png"
                    alt="Surgeons performing operation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="relative h-[200px] md:h-[250px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/about-hero3.png"
                    alt="Patient undergoing medical scan"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              </StaggerItem>
            </StaggerWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
