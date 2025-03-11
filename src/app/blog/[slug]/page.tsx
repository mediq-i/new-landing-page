import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import { AnimateWrapper } from "@/helpers/animations/animateWrapper";
import {
  StaggerWrapper,
  StaggerItem,
} from "@/helpers/animations/staggerWrapper";
import { type Article, articles } from "@/components/partials/data";

import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    await params,
    options
  );

  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 md:px-12 bg-[#023047] text-white">
        <div className="max-w-4xl mx-auto">
          <AnimateWrapper variant="fadeIn">
            <Link
              href="/blog"
              className="inline-flex items-center gap-x-3 text-gray-300 hover:text-white mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-8">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>By {post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              </div>
            </div>
          </AnimateWrapper>
        </div>
      </section>

      {/* post Content */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimateWrapper variant="fadeIn" delay={0.2}>
            {/* Featured Image */}
            <div className="relative h-[300px] md:h-[500px] rounded-xl overflow-hidden mb-8">
              {postImageUrl && (
                <img
                  src={postImageUrl || "/images/placeholder.png"}
                  alt={post.title}
                  className="object-cover w-full transition-transform duration-300 group-hover:scale-105"
                />
              )}
            </div>

            {/* post Text */}
            <div className="">
              {Array.isArray(post.excerpt) && (
                <div className="mb-4 text-xl font-bold">
                  <PortableText value={post.excerpt} />
                </div>
              )}

              <div>
                {Array.isArray(post.body) ? (
                  <PortableText value={post.body} />
                ) : (
                  ""
                )}
              </div>

              {Array.isArray(post.quote) && (
                <div className="mb-4 text-lg border-gray-600 pl-2 border-l-4 font-bold mt-4">
                  <PortableText value={post.quote} />
                </div>
              )}
            </div>
          </AnimateWrapper>
        </div>
      </section>

      {/* Related posts */}
      {/* {relatedArticles.length > 0 && (
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
      )} */}
    </main>
  );
}
