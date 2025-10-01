import React from "react";
import { cn } from "@/lib/utils";
import { BlogCard } from "./BlogCard";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  imageAlt: string;
}

interface BlogSectionProps {
  className?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How Minimalism Impacts User Experience",
    date: "August 14, 2025",
    category: "Web Design",
    image: "/images/farm-footer.webp",
    imageAlt: "Laptop and smartphone showing minimalist website designs",
  },
  {
    id: 2,
    title: "Webflow vs. Traditional Development: What's Right for You?",
    date: "August 14, 2025",
    category: "Web Design",
    image: "/images/farm-footer.webp",
    imageAlt: "Laptop showing Webflow interface with plant in background",
  },
  {
    id: 3,
    title: "How UX Impacts Your Business Bottom Line",
    date: "August 14, 2025",
    category: "Web Design",
    image: "/images/farm-footer.webp",
    imageAlt: "Team working on UX design in modern office environment",
  },
];

export function BlogSection({ className }: BlogSectionProps) {
  return (
    <section className={cn("py-16 md:py-24 bg-[#faf9f7]", className)}>
      <div className="max-w-7xl mx-auto px-4 xl:px-0">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center md:justify-between mb-12">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-8 h-0.5 bg-gray-600 mr-3"></div>
            <span className="text-gray-600 font-medium">Blogs</span>
          </div>
          <h2 className="text-3xl md:text-4xl max-w-2xl lg:text-5xl font-bold text-gray-800 leading-tight">Smart tips straight from our experts diary to your inbox</h2>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
