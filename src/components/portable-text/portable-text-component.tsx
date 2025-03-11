import Link from "next/link";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";

// Initialize the image builder
const builder = imageUrlBuilder(client);
const urlFor = (source: any) => builder.image(source);

// Custom components for PortableText
export const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
          <Image
            src={urlFor(value).url() || "/placeholder.svg"}
            alt={value.alt || "Blog image"}
            fill
            className="object-cover"
          />
        </div>
      );
    },
  },
  block: {
    // Heading styles
    h1: ({ children }: any) => (
      <h1 className="text-3xl md:text-4xl font-bold mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl md:text-2xl font-bold mt-6 mb-3">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg md:text-xl font-bold mt-6 mb-3">{children}</h4>
    ),

    // Paragraph styles
    normal: ({ children }: any) => (
      <p className="text-base md:text-lg text-accent-text mb-6 leading-relaxed">
        {children}
      </p>
    ),

    // Blockquote style
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-accent-text-2">
        {children}
      </blockquote>
    ),
  },

  // List styles
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-6 mb-6 text-accent-text space-y-2">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal pl-6 mb-6 text-accent-text space-y-2">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }: any) => (
      <li className="leading-relaxed">{children}</li>
    ),
    number: ({ children }: any) => (
      <li className="leading-relaxed">{children}</li>
    ),
  },

  // Link styles
  marks: {
    link: ({ value, children }: any) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <Link
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="text-primary hover:underline"
        >
          {children}
        </Link>
      );
    },
    strong: ({ children }: any) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }: any) => <em className="italic">{children}</em>,
    code: ({ children }: any) => (
      <code className="bg-gray-100 rounded px-1 py-0.5 font-mono text-sm">
        {children}
      </code>
    ),
  },
};
