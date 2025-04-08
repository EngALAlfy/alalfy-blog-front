import React from 'react';

const InfoCard = ({ icon, title, content, delay = 100 }) => {
  return (
    <div className="col-lg-4" data-aos="fade-up" data-aos-delay={delay}>
      <div className="info-card">
        <div className="icon-box">
          <i className={`bi bi-${icon}`}></i>
        </div>
        <h3>{title}</h3>
        <p dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default InfoCard;
