import React from 'react';
import AuthorCard from './AuthorCard';
import AuthorContent from './AuthorContent';

const AuthorProfileSection = ({ author }) => {
  return (
    <section id="author-profile" className="author-profile section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="author-profile-1">
          <div className="row">
            {/* Author Info */}
            <div className="col-lg-4 mb-4 mb-lg-0">
              <AuthorCard author={author} />
            </div>

            {/* Author Content */}
            <div className="col-lg-8">
              <AuthorContent 
                about={author.about}
                expertiseAreas={author.expertiseAreas}
                featuredArticles={author.featuredArticles}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorProfileSection;
