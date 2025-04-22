import React from 'react';
import Link from "next/link";

const FeaturedCategoryPost = ({ 
  image, 
  category, 
  authorImg, 
  authorName, 
  date, 
  title,
  link
}) => {
  return (
    <article className="featured-post">
      <div className="post-img">
        <img src={image} alt={title} className="img-fluid" loading="lazy"/>
      </div>
      <div className="post-content">
        <div className="category-meta">
          <span className="post-category">{category}</span>
          <div className="author-meta">
            <img src={authorImg} alt={authorName} className="author-img"/>
            <span className="author-name">{authorName}</span>
            <span className="post-date">{date}</span>
          </div>
        </div>
        <h2 className="title">
          <Link href={link}>{title}</Link>
        </h2>
      </div>
    </article>
  );
};

export default FeaturedCategoryPost;