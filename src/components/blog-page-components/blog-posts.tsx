"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimateWrapper } from "@/helpers/animations/animateWrapper";
import {
  StaggerWrapper,
  StaggerItem,
} from "@/helpers/animations/staggerWrapper";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { articles } from "../partials/data";

// Number of items per page
const ITEMS_PER_PAGE = 6;

export default function BlogPosts() {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);

  // Get current articles
  const getCurrentArticles = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return articles.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return; // Prevent invalid pages
    setCurrentPage(page);

    // Scroll to top of the section
    window.scrollTo({
      top: document.getElementById("blog-posts")?.offsetTop || 0,
      behavior: "smooth",
    });
  };

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
            {getCurrentArticles().map((article) => (
              <StaggerItem key={article.id}>
                <Link href={`/blog/${article.id}`} className="block group">
                  <div className="relative h-[240px] rounded-lg overflow-hidden mb-4">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-block px-2 py-1 bg-transparent text-white border border-white rounded-full text-xs mb-1">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-accent-text mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-accent-text-2 mb-4">{article.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-accent-text-2">
                    <span>By {article.author}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerWrapper>

          {/* Pagination */}
          {totalPages > 1 && (
            <AnimateWrapper variant="fadeIn" delay={0.3}>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(currentPage - 1);
                      }}
                      className={
                        currentPage === 1
                          ? "pointer-events-none opacity-50"
                          : ""
                      }
                    />
                  </PaginationItem>

                  {Array.from({ length: totalPages }).map((_, i) => {
                    const pageNumber = i + 1;

                    // Show first page, last page, current page, and pages around current
                    if (
                      pageNumber === 1 ||
                      pageNumber === totalPages ||
                      (pageNumber >= currentPage - 1 &&
                        pageNumber <= currentPage + 1)
                    ) {
                      return (
                        <PaginationItem key={pageNumber}>
                          <PaginationLink
                            onClick={(e) => {
                              e.preventDefault();
                              handlePageChange(pageNumber);
                            }}
                            isActive={currentPage === pageNumber}
                          >
                            {pageNumber}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    }

                    // Show ellipsis for gaps
                    if (
                      (pageNumber === 2 && currentPage > 3) ||
                      (pageNumber === totalPages - 1 &&
                        currentPage < totalPages - 2)
                    ) {
                      return (
                        <PaginationItem key={`ellipsis-${pageNumber}`}>
                          <PaginationEllipsis />
                        </PaginationItem>
                      );
                    }

                    return null;
                  })}

                  <PaginationItem>
                    <PaginationNext
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(currentPage + 1);
                      }}
                      className={
                        currentPage === totalPages
                          ? "pointer-events-none opacity-50"
                          : ""
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </AnimateWrapper>
          )}
        </AnimateWrapper>
      </div>
    </section>
  );
}
