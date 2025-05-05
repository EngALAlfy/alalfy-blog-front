import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import FeaturedCategoryPost from './FeaturedCategoryPost';
import ListPost from '../shared/ListPost';

const CategorySection = ({posts}) => {
  // Check if posts data exists and has items
  if (!posts || !Array.isArray(posts) || posts.length === 0) {
    return (
      <section id="category-section" className="category-section section">
        <SectionTitle 
          title="Category Section" 
          description="Category Section" 
        />
        <div className="container">
          <div className="text-center">
            <p>Loading categories posts...</p>
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
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  // Get the first 3 posts for the featured display
  const featuredPosts = posts.slice(0, 3);

  // Get remaining posts for the list display
  const remainingPosts = posts.slice(3 , 9);

  return (
    <section id="category-section" className="category-section section">
      <SectionTitle 
        title="Category Section" 
        description="Explore Posts by Category" 
      />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        {/* Featured Posts */}
        <div className="row gy-4 mb-4">
          {featuredPosts.map((featuredPost, index) => {
            if (!featuredPost) return null;
            return (
              <div key={featuredPost.category?.id} className="col-lg-4">
                <FeaturedCategoryPost 
                  image={featuredPost.banner || '/img/blog/placeholder.webp'}
                  category={featuredPost.category?.name}
                  authorImg={featuredPost.author?.avatar || '/img/person/default-avatar.webp'}
                  authorName={featuredPost.author?.name || 'Anonymous'}
                  date={formatDate(featuredPost.created_at)}
                  title={featuredPost.title}
                  link={`/${featuredPost.slug}`}
                />
              </div>
            );
          })}
        </div>

        {/* List Posts */}
        <div className="row">
            {
                remainingPosts.map(post => (
                    <div key={post.id} className="col-xl-4 col-lg-6">
                        <ListPost
                            image={post.banner || '/img/blog/placeholder.webp'}
                            category={post.category?.name}
                            title={post.title}
                            readTime={`${Math.ceil(post.short_description?.length / 200) || 2} mins read`}
                            date={formatDate(post.created_at)}
                            link={`/${post.slug}`}
                        />
                    </div>
                ))
            }
        </div>
      </div>
    </section>
  );
};

export default CategorySection;