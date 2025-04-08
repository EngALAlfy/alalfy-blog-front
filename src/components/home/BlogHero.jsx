import React from 'react';
import BlogItem from '../shared/BlogItem';

const BlogHero = ({ posts }) => {
  // This would normally use the posts prop, but for now we'll use static content
  return (
    <section id="blog-hero" className="blog-hero section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="blog-grid">
          {/* Featured Post (Large) */}
          <BlogItem 
            featured
            image="/img/blog/blog-post-3.webp"
            date="Apr. 14th, 2025"
            category="Technology"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            link="blog-details.html"
            delay={0}
          />

          {/* Regular Posts */}
          <BlogItem 
            image="/img/blog/blog-post-portrait-1.webp"
            date="Apr. 14th, 2025"
            category="Security"
            title="Sed do eiusmod tempor incididunt ut labore"
            link="blog-details.html"
            delay={100}
          />

          <BlogItem 
            image="/img/blog/blog-post-9.webp"
            date="Apr. 14th, 2025"
            category="Career"
            title="Ut enim ad minim veniam, quis nostrud exercitation"
            link="blog-details.html"
            delay={200}
          />

          <BlogItem 
            image="/img/blog/blog-post-7.webp"
            date="Apr. 14th, 2025"
            category="Cloud"
            title="Adipiscing elit, sed do eiusmod tempor incididunt"
            link="blog-details.html"
            delay={300}
          />

          <BlogItem 
            image="/img/blog/blog-post-6.webp"
            date="Apr. 14th, 2025"
            category="Programming"
            title="Excepteur sint occaecat cupidatat non proident"
            link="blog-details.html"
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default BlogHero;