import Link from "next/link";
import { AnimateWrapper } from "@/helpers/animations/animateWrapper";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function BlogHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 px-3 lg:pl-24 bg-[url(/images/blog-hero-bg.png)] bg-cover object-cover object-center">
      <AnimateWrapper variant="fadeIn" duration={0.6}>
        <div className="px-6 md:px-12 bg-blue-shade/70 w-full md:max-w-2xl py-8 rounded-xl">
          <span className="inline-block py-1 text-purple-shade mb-4">
            MEDICAL PRACTICE
          </span>

          <h1 className="text-2xl md:text-3xl font-semibold text-white mb-6">
            Health Care Through the Back Door: The Dangers of Nurse Visits
          </h1>

          <p className="text-gray-300 text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur
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
        </div>
      </AnimateWrapper>
    </section>
  );
}
