import React from 'react';

const FeatureBox = ({ icon, title, description, delay = 200, link = '#' }) => {
  return (
    <div className="col-lg-4" data-aos="fade-up" data-aos-delay={delay}>
      <div className="feature-box">
        <div className="icon-box">
          <i className={`bi bi-${icon}`}></i>
        </div>
        <h3><a href={link} className="stretched-link">{title}</a></h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureBox;
