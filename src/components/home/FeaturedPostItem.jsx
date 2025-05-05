import React from 'react';
import Link from "next/link";

const FeaturedPostItem = ({ 
  image, 
  author, 
  date, 
  commentCount, 
  title, 
  content,
   link
}) => {
  return (
    <div className="swiper-slide">
      <div className="blog-post-item">
        <img src={image} alt={title}/>
        <div className="blog-post-content">
          <div className="post-meta">
            <span><i className="bi bi-person"></i> {author}</span>
            <span><i className="bi bi-clock"></i> {date}</span>
            <span><i className="bi bi-chat-dots"></i> {commentCount} Comments</span>
          </div>
          <h2><Link href={link}>{title}</Link></h2>
          <p>{content}</p>
          <Link href={link} className="read-more">Read More <i className="bi bi-arrow-left"></i></Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPostItem;