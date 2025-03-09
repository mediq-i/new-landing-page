import Link from "next/link";
import { AnimateWrapper } from "@/helpers/animations/animateWrapper";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function BlogHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 pl-24 bg-[url(/images/blog-hero-bg.png)] bg-cover">
      <div className="px-6 md:px-12 bg-blue-shade/70 max-w-2xl py-8 rounded-xl">
        <AnimateWrapper variant="fadeIn" className="max-w-2xl">
          <span className="inline-block py-1 text-purple-shade mb-4">
            MEDICAL PRACTICE
          </span>

          <h1 className="text-2xl md:text-3xl font-semibold text-white mb-6">
            Health Care Through the Back Door: The Dangers of Nurse Visits
          </h1>

          <p className="text-gray-300 text-lg mb-8">
            Whether you're a seasoned copywriter or a beginner, Rapid
            Copywriting is the perfect tool to help you take your copywriting
            skill.
          </p>

          <div className="flex items-center gap-2 mb-8">
            <span className="text-white">By HANS DUYFELT</span>
            <span className="text-gray-400">•</span>
            <span className="text-white">May 12, 2022</span>
          </div>

          <Button
            variant="secondary"
            className="bg-primary text-sm rounded-full text-white hover:bg-primary/90 py-5 w-[180px]"
            asChild
          >
            <Link href="/blog">
              Read More <ChevronRight color="#fff" />
            </Link>
          </Button>
        </AnimateWrapper>
      </div>
    </section>
  );
}
