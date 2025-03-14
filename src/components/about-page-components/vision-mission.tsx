import Image from "next/image";
import { AnimateWrapper } from "@/helpers/animations/animateWrapper";
import {
  StaggerWrapper,
  StaggerItem,
} from "@/helpers/animations/staggerWrapper";

export default function VisionMission() {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Vision Section */}
          <AnimateWrapper variant="slideRight" className="space-y-6">
            <StaggerWrapper className="space-y-6">
              <StaggerItem>
                <span className="text-primary font-medium">Our Vision</span>
                <h2 className="text-3xl md:text-4xl font-semibold text-accent-text mt-2">
                  Access to High-quality, Compassionate, and Equitable
                  Healthcare Services
                </h2>
              </StaggerItem>

              <StaggerItem>
                <p className="text-accent-text-2">
                  By embodying these principles and working collaboratively,
                  healthcare professionals strive to realize a vision of
                  healthcare that is patient-centered, equitable, innovative,
                  and compassionate, ultimately improving the health and
                  well-being of individuals and communities worldwide.
                </p>
              </StaggerItem>

              <StaggerItem>
                <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/about-vision-img.png"
                    alt="Doctor consulting with patient"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </StaggerItem>
            </StaggerWrapper>
          </AnimateWrapper>

          {/* Mission Section */}
          <AnimateWrapper variant="slideLeft" className="space-y-6">
            <StaggerWrapper className="space-y-6">
              <StaggerItem>
                <span className="text-primary font-medium">Our Mission</span>
                <h2 className="text-3xl md:text-4xl font-semibold text-accent-text mt-2">
                  Provide Comprehensive and Evidence-based Care to Individuals
                  and Communities
                </h2>
              </StaggerItem>

              <StaggerItem>
                <p className="text-accent-text-2">
                  Overall, the mission of healthcare professionals is grounded
                  in a commitment to service, excellence, and compassion. By
                  upholding these values and principles, healthcare
                  professionals contribute to the well-being of individuals and
                  communities, working towards a healthier and more equitable
                  world.
                </p>
              </StaggerItem>

              <StaggerItem>
                <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/about-doctors.png"
                    alt="Medical team in surgical attire"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </StaggerItem>
            </StaggerWrapper>
          </AnimateWrapper>
        </div>
      </div>
    </section>
  );
}
