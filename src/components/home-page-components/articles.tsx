import Link from "next/link";
import Image from "next/image";
// import { StaggerWrapper, StaggerItem } from "@/helpers/animations/StaggerWrapper"
import { AnimateWrapper } from "@/helpers/animations/animateWrapper";
import {
  StaggerWrapper,
  StaggerItem,
} from "@/helpers/animations/staggerWrapper";
import { ChevronRight } from "lucide-react";
import { articles } from "../partials/data";

export default function ArticlesSection() {
  return (
    <section className="relative py-16">
      {/* Skewed background */}
      <div className="absolute inset-0 bg-[#070B1D] transform -skew-y-3 lg:-skew-y-2 origin-top-right" />

      <div className="relative z-10 px-6 md:px-12 text-white ">
        <div className="max-w-7xl mx-auto pt-4 lg:pt-12">
          <AnimateWrapper variant="slideUp" className="mb-8">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-[#C5C2FF] font-semibold text-lg">
                  Article
                </span>
                <h2 className="text-[40px] font-semibold mt-1 text-white">
                  Read our latest information about health
                </h2>
              </div>
              <Link
                href="/articles"
                className="text-primary hover:text-purple-shade transition-colors"
              >
                <div className="flex items-center">
                  See All Articles
                  <ChevronRight />
                </div>
              </Link>
            </div>
          </AnimateWrapper>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Featured Article */}
            <AnimateWrapper variant="slideRight" delay={0.2}>
              <Link
                href={`/articles/${articles[0].id}`}
                className="block group"
              >
                <div className="rounded-lg overflow-hidden">
                  <div className="relative">
                    <Image
                      src={
                        articles[0].image ||
                        "/images/articles-placeholder-img.png"
                      }
                      alt={articles[0].title}
                      width={600}
                      height={200}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="absolute bottom-0 left-5 inline-block px-3 py-1 bg-transparent text-white border border-white rounded-full text-sm mb-3">
                      {articles[0].category}
                    </span>
                  </div>
                  {/* <div className="p-6 bg-gradient-to-t from-black/80 to-transparent"> */}
                  <div className="pt-6 bg-transparent">
                    <h3 className="font-semibold mb-2 text-white text-2xl">
                      {articles[0].title}
                    </h3>
                    <p className="text-sm text-muted-background">
                      {articles[0].excerpt}
                    </p>
                    <div className="mt-4 text-sm text-gray-400">
                      By &nbsp;
                      <span className="text-white capitalize font-semibold">
                        {articles[0].author}
                      </span>{" "}
                      &nbsp; • &nbsp; {articles[0].date}
                    </div>
                  </div>
                </div>
              </Link>
            </AnimateWrapper>

            {/* Other Articles */}
            <StaggerWrapper className="space-y-6">
              {articles.slice(1, 4).map((article) => (
                <StaggerItem key={article.id}>
                  <Link
                    href={`/articles/${article.id}`}
                    className="flex gap-4 group"
                  >
                    <div className="relative w-32 h-30 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={
                          article.image ||
                          "/images/articles-placeholder-img.png"
                        }
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <span className="absolute bottom-0 left-1 inline-block px-2 py-1 bg-transparent text-white border border-white rounded-full text-xs mb-1">
                        {article.category}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1 text-lg text-white group-hover:underline group:hover:text-scale-105 transition-colors">
                        {article.title}
                      </h3>
                      <div className="mt-4 text-sm text-gray-400">
                        By &nbsp;
                        <span className="text-white capitalize font-semibold">
                          {articles[0].author}
                        </span>{" "}
                        &nbsp; • &nbsp; {articles[0].date}
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
