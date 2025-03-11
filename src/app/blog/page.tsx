import { BlogHero, BlogPosts } from "@/components/blog-page-components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mediq-i | Blog",
  description: "Mediq-i Medical Articles",
  keywords:
    "doctor appointment, medical booking, healthcare, online doctor appointment scheduling",
};

export default function BlogPage() {
  return (
    <main>
      <BlogHero />
      <BlogPosts />
    </main>
  );
}
