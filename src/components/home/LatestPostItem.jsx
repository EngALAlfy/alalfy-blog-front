import React from 'react';

const LatestPostItem = ({ 
  image, 
  category, 
  title, 
  authorImg,
  authorName,
  date,
  dateTime
}) => {
  return (
    <article>
      <div className="post-img">
        <img src={image} alt="" className="img-fluid"/>
      </div>

      <p className="post-category">{category}</p>

      <h2 className="title">
        <a href="blog-details.html">{title}</a>
      </h2>

      <div className="d-flex align-items-center">
        <img src={authorImg} alt="" className="img-fluid post-author-img flex-shrink-0"/>
        <div className="post-meta">
          <p className="post-author">{authorName}</p>
          <p className="post-date">
            <time dateTime={dateTime}>{date}</time>
          </p>
        </div>
      </div>
    </article>
  );
};

export default LatestPostItem;