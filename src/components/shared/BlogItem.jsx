import React from 'react';
import Link from 'next/link';

const BlogItem = ({ 
  featured = false, 
  image, 
  date, 
  category, 
  title, 
  link, 
  delay = 0 
}) => {
  return (
    <article 
      className={`blog-item ${featured ? 'featured' : ''}`} 
      data-aos="fade-up" 
      data-aos-delay={delay}
    >
      <img src={image} alt="Blog Image" className="img-fluid"/>
      <div className="blog-content">
        <div className="post-meta">
          <span className="date">{date}</span>
          <span className="category">{category}</span>
        </div>
        {featured ? (
          <h2 className="post-title">
            <a href={link} title={title}>{title}</a>
          </h2>
        ) : (
          <h3 className="post-title">
            <a href={link} title={title}>{title}</a>
          </h3>
        )}
      </div>
    </article>
  );
};

export default BlogItem;