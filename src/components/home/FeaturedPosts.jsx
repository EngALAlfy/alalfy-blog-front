import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import FeaturedPostItem from './FeaturedPostItem';

const FeaturedPosts = ({ posts }) => {
  // Check if posts data exists and has items
  if (!posts || !Array.isArray(posts) || posts.length === 0) {
    return (
      <section id="featured-posts" className="featured-posts section">
        <SectionTitle 
          title="Featured Posts" 
          description="Check Our | Featured Posts" 
        />
        <div className="container">
          <div className="text-center">
            <p>Loading featured posts...</p>
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
    <section id="featured-posts" className="featured-posts section">
      <SectionTitle 
        title="Featured Posts" 
        description="Check Our | Featured Posts" 
      />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="blog-posts-slider swiper init-swiper">
          <script type="application/json" className="swiper-config">
            {`{
              "loop": true,
              "speed": 800,
              "autoplay": {
                "delay": 5000
              },
              "slidesPerView": 3,
              "spaceBetween": 30,
              "breakpoints": {
                "320": {
                  "slidesPerView": 1,
                  "spaceBetween": 20
                },
                "768": {
                  "slidesPerView": 2,
                  "spaceBetween": 20
                },
                "1200": {
                  "slidesPerView": 3,
                  "spaceBetween": 30
                }
              }
            }`}
          </script>

          <div className="swiper-wrapper">
            {posts.map((post) => (
              <FeaturedPostItem 
                key={post.id}
                image={post.banner || '/img/blog/placeholder.webp'}
                author={post.author?.name || 'Anonymous'}
                date={formatDate(post.created_at)}
                commentCount={post.comments_count || 0}
                title={post.title}
                content={post.short_description}
                link={`/${post.slug}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;