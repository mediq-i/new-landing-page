import Link from "next/link";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityDocument } from "next-sanity";

const POSTS_QUERY = `*[
    _type == "post"
    && defined(slug.current)
  ]|order(publishedAt desc)[0...12]{
    _id, title, slug, author, publishedAt, image
  }`;

const builder = imageUrlBuilder(client);

const urlFor = (source: any) =>
  builder.image(source).width(380).height(240).url();

const options = { next: { revalidate: 30 } };

export default async function SanityBlogPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      <ul className="flex flex-col gap-y-6">
        {posts.map((post) => {
          const postImageUrl = post.image ? urlFor(post.image) : null;

          return (
            <li key={post._id} className="hover:underline">
              <Link href={`/${post.slug.current}`} className="block space-y-3">
                {postImageUrl && (
                  <img
                    src={postImageUrl}
                    alt={post.title}
                    className="aspect-video rounded-xl object-cover"
                    width="550"
                    height="310"
                  />
                )}
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-gray-600">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
