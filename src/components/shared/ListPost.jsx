import React from 'react';

const ListPost = ({ 
  image, 
  category, 
  title, 
  readTime, 
  date 
}) => {
  return (
    <article className="list-post">
      <div className="post-img">
        <img src={image} alt="" className="img-fluid" loading="lazy"/>
      </div>
      <div className="post-content">
        <div className="category-meta">
          <span className="post-category">{category}</span>
        </div>
        <h3 className="title">
          <a href="blog-details.html">{title}</a>
        </h3>
        <div className="post-meta">
          <span className="read-time">{readTime}</span>
          <span className="post-date">{date}</span>
        </div>
      </div>
    </article>
  );
};

export default ListPost;