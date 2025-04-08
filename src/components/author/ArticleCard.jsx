import React from 'react';

const ArticleCard = ({ article }) => {
  const { image, category, title, url, date, comments } = article;
  
  return (
    <article className="article-card">
      <div className="article-img">
        <img src={image} alt={title} className="img-fluid" />
      </div>
      <div className="article-details">
        <div className="post-category">{category}</div>
        <h5><a href={url}>{title}</a></h5>
        <div className="post-meta">
          <span><i className="bi bi-clock"></i> {date}</span>
          <span><i className="bi bi-chat-dots"></i> {comments} Comments</span>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
