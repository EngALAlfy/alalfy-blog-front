import Image from "next/image";
import Link from "next/link";

/**
 * PostCard component for displaying a blog post preview
 * @param {Object} props - Component props
 * @param {Object} props.post - Post data
 * @param {boolean} props.featured - Whether this is a featured post (larger display)
 */
export default function PostCard({ post, featured = false }) {
  if (!post) return null;
  
  const { title, excerpt, slug, coverImage, publishedAt, author } = post;
  
  return (
    <article className={`rounded-lg overflow-hidden shadow-md transition-shadow hover:shadow-lg ${featured ? 'md:col-span-2' : ''}`}>
      <Link href={`/blog/${slug}`}>
        <div className="relative aspect-video w-full">
          <Image
            src={coverImage || '/placeholder-image.jpg'}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className={`font-bold ${featured ? 'text-2xl' : 'text-xl'} mb-2 line-clamp-2`}>
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {excerpt}
          </p>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">
              {new Date(publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </span>
            {author && (
              <span className="font-medium">{author.name}</span>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}