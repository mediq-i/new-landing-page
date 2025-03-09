import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import { AnimateWrapper } from "@/helpers/animations/animateWrapper";
import {
  StaggerWrapper,
  StaggerItem,
} from "@/helpers/animations/staggerWrapper";
import { type Article, articles } from "@/components/partials/data";

interface BlogDetailProps {
  article: Article;
}

export default function BlogDetail({ article }: BlogDetailProps) {
  // Get related articles (prioritize same category, then add others, excluding current)
  const getRelatedArticles = () => {
    // First, try to get articles from the same category
    const sameCategory = articles.filter(
      (a) => a.category === article.category && a.id !== article.id
    );

    // If we have 3 or more from the same category, just take the first 3
    if (sameCategory.length >= 3) {
      return sameCategory.slice(0, 3);
    }

    // Otherwise, get other articles (excluding current and those already selected)
    const otherArticles = articles.filter(
      (a) => a.id !== article.id && !sameCategory.some((sc) => sc.id === a.id)
    );

    // Combine same category articles with others to get a total of 3
    return [...sameCategory, ...otherArticles].slice(0, 3);
  };

  const relatedArticles = getRelatedArticles();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 md:px-12 bg-[#023047] text-white">
        <div className="max-w-4xl mx-auto">
          <AnimateWrapper variant="fadeIn">
            <Link
              href="/blog"
              className="inline-flex items-center text-gray-300 hover:text-white mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            {/* <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm mb-4">
              {article.category}
            </span> */}

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-8">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>By {article.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>5 min read</span>
              </div>
            </div>
          </AnimateWrapper>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimateWrapper variant="fadeIn" delay={0.2}>
            {/* Featured Image */}
            <div className="relative h-[300px] md:h-[500px] rounded-xl overflow-hidden mb-12">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
                priority
              />
            </div>

            {/* Article Text */}
            <div className="max-w-none flex flex-col gap-y-2">
              <p className="text-lg text-accent-text-2 mb-6">
                {article.excerpt}
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>

              <h2>The Importance of Healthcare</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
              </p>

              <blockquote>
                "Healthcare is not just about treating diseases, but about
                promoting wellness and preventing illness in the first place."
              </blockquote>

              <h2>Key Considerations</h2>
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur.
              </p>

              <h3>Prevention Strategies</h3>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga.
              </p>

              <h2>Conclusion</h2>
              <p>
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus id quod maxime placeat facere possimus, omnis
                voluptas assumenda est, omnis dolor repellendus.
              </p>
            </div>

            {/* Share Buttons */}
            {/* <div className="flex items-center gap-4 mt-12 pt-8 border-t border-gray-200">
              <span className="font-medium text-accent-text">
                Share this article:
              </span>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full w-10 h-10"
                >
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div> */}
          </AnimateWrapper>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 px-6 md:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <AnimateWrapper variant="fadeIn">
              <h2 className="text-2xl md:text-3xl font-semibold text-accent-text mb-12">
                Read More Articles
              </h2>

              <StaggerWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <StaggerItem key={relatedArticle.id}>
                    <Link
                      href={`/blog/${relatedArticle.id}`}
                      className="block group"
                    >
                      <div className="relative h-[240px] rounded-lg overflow-hidden mb-4">
                        <Image
                          src={relatedArticle.image || "/placeholder.svg"}
                          alt={relatedArticle.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 60vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute bottom-4 left-4">
                          <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                            {relatedArticle.category}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-accent-text mb-2 group-hover:text-primary transition-colors">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-accent-text-2 mb-4">
                        {relatedArticle.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-accent-text-2">
                        <span>By {relatedArticle.author}</span>
                        <span>•</span>
                        <span>{relatedArticle.date}</span>
                      </div>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerWrapper>
            </AnimateWrapper>
          </div>
        </section>
      )}
    </main>
  );
}
