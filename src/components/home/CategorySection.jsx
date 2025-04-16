import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import FeaturedCategoryPost from './FeaturedCategoryPost';
import ListPost from '../shared/ListPost';

const CategorySection = ({categories}) => {
  // Check if categories data exists and has items
  if (!categories || !Array.isArray(categories) || categories.length === 0) {
    return (
      <section id="category-section" className="category-section section">
        <SectionTitle 
          title="Category Section" 
          description="Category Section" 
        />
        <div className="container">
          <div className="text-center">
            <p>Loading categories...</p>
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

  // Get the first 3 categories with posts for featured display
  const featuredCategories = categories.slice(0, 3).filter(category => 
    category.posts && category.posts.length > 0
  );

  // Get remaining categories with posts for list display
  const remainingCategories = categories.slice(3).filter(category => 
    category.posts && category.posts.length > 0
  );
  
  return (
    <section id="category-section" className="category-section section">
      <SectionTitle 
        title="Category Section" 
        description="Explore Posts by Category" 
      />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        {/* Featured Posts */}
        <div className="row gy-4 mb-4">
          {featuredCategories.map((category, index) => {
            // Get the first post from each category for featured display
            const featuredPost = category.posts[0];
            if (!featuredPost) return null;
            
            return (
              <div key={category.id} className="col-lg-4">
                <FeaturedCategoryPost 
                  image={featuredPost.banner || '/img/blog/placeholder.webp'}
                  category={category.name}
                  authorImg={featuredPost.author?.avatar || '/img/person/default-avatar.webp'}
                  authorName={featuredPost.author?.name || 'Anonymous'}
                  date={formatDate(featuredPost.created_at)}
                  title={featuredPost.title}
                  link={`/blog/${featuredPost.id}`}
                />
              </div>
            );
          })}
        </div>

        {/* List Posts */}
        <div className="row">
          {categories.flatMap(category => 
            // Skip the first post if it was used in featured section
            // Take up to 2 posts from each category for list display
            category.posts?.slice(featuredCategories.includes(category) ? 1 : 0, 3).map(post => (
              <div key={post.id} className="col-xl-4 col-lg-6">
                <ListPost 
                  image={post.banner || '/img/blog/placeholder.webp'}
                  category={category.name}
                  title={post.title}
                  readTime={`${Math.ceil(post.short_description?.length / 200) || 2} mins read`}
                  date={formatDate(post.created_at)}
                  link={`/blog/${post.id}`}
                />
              </div>
            ))
          ).slice(0, 6)} {/* Limit to 6 list posts total */}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;