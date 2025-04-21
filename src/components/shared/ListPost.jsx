import React from 'react';
import Link from "next/link";

const ListPost = ({ 
  image, 
  category, 
  title, 
  readTime, 
  date,
  link
}) => {
  return (
    <article className="list-post">
      <div className="post-img">
        <img src={image} alt={title} className="img-fluid" loading="lazy"/>
      </div>
      <div className="post-content">
        <div className="category-meta">
          <span className="post-category">{category}</span>
        </div>
        <h3 className="title">
          <Link href={link}>{title}</Link>
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