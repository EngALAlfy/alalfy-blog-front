import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import LatestPostItem from './LatestPostItem';

const LatestPosts = ({ posts }) => {
  // Check if posts data exists and has items
  if (!posts || !Array.isArray(posts) || posts.length === 0) {
    return (
      <section id="latest-posts" className="latest-posts section">
        <SectionTitle 
          title="Latest Posts" 
          description="Check Our | Latest Posts" 
        />
        <div className="container">
          <div className="text-center">
            <p>Loading latest posts...</p>
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
    <section id="latest-posts" className="latest-posts section">
      <SectionTitle 
        title="Latest Posts" 
        description="Check Our | Latest Posts" 
      />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {posts.map((post) => (
            <div key={post.id} className="col-lg-4">
              <LatestPostItem 
                image={post.banner || '/img/blog/placeholder.webp'}
                category={post.category?.name || 'Uncategorized'}
                title={post.title}
                authorImg={post.author?.avatar || '/img/person/default-avatar.webp'}
                authorName={post.author?.name || 'Anonymous'}
                date={formatDate(post.created_at)}
                dateTime={post.created_at}
                link={`/${post.slug}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;