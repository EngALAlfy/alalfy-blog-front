import React from 'react';

const FeaturedPostItem = ({ 
  image, 
  author, 
  date, 
  commentCount, 
  title, 
  content
}) => {
  return (
    <div className="swiper-slide">
      <div className="blog-post-item">
        <img src={image} alt="Blog Image"/>
        <div className="blog-post-content">
          <div className="post-meta">
            <span><i className="bi bi-person"></i> {author}</span>
            <span><i className="bi bi-clock"></i> {date}</span>
            <span><i className="bi bi-chat-dots"></i> {commentCount} Comments</span>
          </div>
          <h2><a href="#">{title}</a></h2>
          <p>{content}</p>
          <a href="#" className="read-more">Read More <i className="bi bi-arrow-right"></i></a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPostItem;