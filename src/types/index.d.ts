/**
 * Blog post type definition
 */
export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  publishedAt: string;
  updatedAt?: string;
  author?: Author;
  readingTime?: number;
  tags?: string[];
}

/**
 * Author type definition
 */
export interface Author {
  id: string;
  name: string;
  avatar?: string;
  bio?: string;
}