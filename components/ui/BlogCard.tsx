import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  imageAlt: string;
}

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export function BlogCard({ post, className }: BlogCardProps) {
  return (
    <article className={cn("group cursor-pointer", className)}>
      {/* Image */}
      <div className="relative h-64 md:h-72 overflow-hidden rounded-2xl mb-6">
        <Image src={post.image} alt={post.imageAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        {/* Date and Category */}
        <div className="text-sm text-gray-600">
          {post.date} · {post.category}
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 leading-tight">{post.title}</h3>
      </div>
    </article>
  );
}

export default BlogCard;
