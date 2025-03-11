import Link from "next/link";
import { AnimateWrapper } from "@/helpers/animations/animateWrapper";
import {
  StaggerWrapper,
  StaggerItem,
} from "@/helpers/animations/staggerWrapper";

import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText, type SanityDocument } from "next-sanity";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id, title, slug, author, publishedAt, image, body, excerpt
}`;

const builder = imageUrlBuilder(client);

const urlFor = (source: any) =>
  builder.image(source).width(380).height(240).url();

const options = { next: { revalidate: 30 } };

export default async function BlogPosts() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  console.log(posts);

  return (
    <section id="blog-posts" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimateWrapper variant="fadeIn">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-accent-text">
              Blog Posts
            </h2>
          </div>

          <StaggerWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {posts &&
              posts.map((article) => {
                const postImageUrl = article.image
                  ? urlFor(article.image)
                  : null;

                console.log(article.title);

                return (
                  <StaggerItem key={article._id}>
                    <Link
                      href={`/blog/${article.slug.current}`}
                      className="block group"
                    >
                      <div className="relative h-[240px] rounded-lg overflow-hidden mb-4 bg-red-500">
                        <img
                          src={postImageUrl || "/images/placeholder.png"}
                          alt={article.title}
                          className="object-cover w-full transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-accent-text mb-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <div className="prose text-accent-text-2 mb-4  line-clamp-3">
                        {Array.isArray(article.excerpt) ? (
                          <PortableText value={article.excerpt} />
                        ) : Array.isArray(article.body) ? (
                          <PortableText value={article.body} />
                        ) : null}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-accent-text-2">
                        <span>By {article.author}</span>
                        <span>•</span>
                        <span>
                          {new Date(article.publishedAt).toLocaleDateString()}
                        </span>
                      </div>
                    </Link>
                  </StaggerItem>
                );
              })}
          </StaggerWrapper>
        </AnimateWrapper>
      </div>
    </section>
  );
}
