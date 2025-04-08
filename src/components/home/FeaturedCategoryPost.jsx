import React from 'react';

const FeaturedCategoryPost = ({ 
  image, 
  category, 
  authorImg, 
  authorName, 
  date, 
  title 
}) => {
  return (
    <article className="featured-post">
      <div className="post-img">
        <img src={image} alt="" className="img-fluid" loading="lazy"/>
      </div>
      <div className="post-content">
        <div className="category-meta">
          <span className="post-category">{category}</span>
          <div className="author-meta">
            <img src={authorImg} alt="" className="author-img"/>
            <span className="author-name">{authorName}</span>
            <span className="post-date">{date}</span>
          </div>
        </div>
        <h2 className="title">
          <a href="blog-details.html">{title}</a>
        </h2>
      </div>
    </article>
  );
};

export default FeaturedCategoryPost;