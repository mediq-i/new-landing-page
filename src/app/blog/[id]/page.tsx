import { notFound } from "next/navigation";
import { articles } from "@/components/partials/data";
import { BlogDetail } from "@/components/blog-page-components";

export function generateStaticParams() {
  return articles.map((article) => ({
    id: article.id,
  }));
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const article = articles.find((article) => article.id === params.id);

  if (!article) {
    notFound();
  }

  return <BlogDetail article={article} />;
}
