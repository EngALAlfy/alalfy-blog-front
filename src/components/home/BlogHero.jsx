import React from 'react';
import BlogItem from '../shared/BlogItem';
import Link from 'next/link';

const BlogHero = ({ posts }) => {
  // Check if posts data exists and has items
  if (!posts || !Array.isArray(posts) || posts.length === 0) {
    return (
      <section id="blog-hero" className="blog-hero section">
        <div className="container">
          <div className="text-center">
            <p>Loading hero posts...</p>
          </div>
        </div>
      </section>
    );
  }

  // Format date function
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <section id="blog-hero" className="blog-hero section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="blog-grid">
          {/* Featured Post (Large) - First post */}
          {posts[0] && (
            <BlogItem 
              featured
              image={posts[0].banner || '/img/blog/placeholder.webp'}
              date={formatDate(posts[0].created_at)}
              category={posts[0].category?.name || 'Uncategorized'}
              title={posts[0].title}
              link={`/${posts[0].slug}`}
              delay={0}
            />
          )}

          {/* Regular Posts - Remaining posts */}
          {posts.slice(1, 5).map((post, index) => (
            <BlogItem 
              key={post.id}
              image={post.banner || '/img/blog/placeholder.webp'}
              date={formatDate(post.created_at)}
              category={post.category?.name || 'Uncategorized'}
              title={post.title}
              link={`/${post.slug}`}
              delay={(index + 1) * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogHero;