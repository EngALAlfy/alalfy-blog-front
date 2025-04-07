import Image from "next/image";
import { formatDate, calculateReadingTime } from "@/lib/utils";

/**
 * PostHeader component for displaying the header of a blog post
 * @param {Object} props - Component props
 * @param {Object} props.post - Post data
 */
export default function PostHeader({ post }) {
  if (!post) return null;
  
  const { title, coverImage, publishedAt, author, content } = post;
  const readingTime = calculateReadingTime(content);
  
  return (
    <div className="mb-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
      
      <div className="flex items-center space-x-4 mb-6">
        {author && author.avatar && (
          <div className="relative h-10 w-10 rounded-full overflow-hidden">
            <Image
              src={author.avatar}
              alt={author.name}
              fill
              className="object-cover"
            />
          </div>
        )}
        
        <div>
          {author && (
            <p className="font-medium">{author.name}</p>
          )}
          
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={publishedAt}>
              {formatDate(publishedAt)}
            </time>
            <span className="mx-2">•</span>
            <span>{readingTime} min read</span>
          </div>
        </div>
      </div>
      
      {coverImage && (
        <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
          <Image
            src={coverImage}
            alt={title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
}