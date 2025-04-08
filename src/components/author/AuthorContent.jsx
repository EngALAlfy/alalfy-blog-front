import React from 'react';
import ArticleCard from './ArticleCard';

const AuthorContent = ({ about, expertiseAreas, featuredArticles }) => {
  return (
    <div className="author-content" data-aos="fade-up" data-aos-delay="200">
      <div className="content-header">
        <h3>About Me</h3>
      </div>
      <div className="content-body">
        <p>{about}</p>

        <div className="expertise-areas">
          <h4>Areas of Expertise</h4>
          <div className="tags">
            {expertiseAreas.map((area, index) => (
              <span key={index}>{area}</span>
            ))}
          </div>
        </div>

        <div className="featured-articles mt-5">
          <h4>Featured Articles</h4>
          <div className="row g-4">
            {featuredArticles.map((article, index) => (
              <div 
                key={index} 
                className="col-md-6" 
                data-aos="fade-up" 
                data-aos-delay={300 + (index * 100)}
              >
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorContent;
