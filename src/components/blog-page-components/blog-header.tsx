import Link from "next/link";
import { AnimateWrapper } from "@/helpers/animations/animateWrapper";
import { Button } from "@/components/ui/button";

export default function BlogHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#023047] mix-blend-multiply" />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#023047] via-[#023047]/80 to-transparent"
          style={{
            backgroundImage: `url('/images/blog-hero-bg.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-32">
        <AnimateWrapper variant="fadeIn" className="max-w-2xl">
          <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm mb-4">
            MEDICAL PRACTICE
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            Health Care Through the Back Door: The Dangers of Nurse Visits
          </h1>

          <p className="text-gray-300 text-lg mb-6">
            Whether you're a seasoned copywriter or a beginner, Rapid
            Copywriting is the perfect tool to help you take your copywriting
            skill.
          </p>

          <div className="flex items-center gap-4 mb-8">
            <span className="text-gray-300">By HANS DUYFELT</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-300">May 12, 2022</span>
          </div>

          <Button
            variant="secondary"
            size="lg"
            className="bg-primary text-white hover:bg-primary/90"
            asChild
          >
            <Link href="/blog/health-care-through-back-door">Read More</Link>
          </Button>
        </AnimateWrapper>
      </div>
    </section>
  );
}
