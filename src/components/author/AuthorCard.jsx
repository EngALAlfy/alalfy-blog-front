import React from 'react';

const AuthorCard = ({ author }) => {
  const { 
    image, 
    name, 
    designation, 
    bio, 
    stats,
    socialLinks 
  } = author;

  return (
    <div className="author-card" data-aos="fade-up">
      <div className="author-image">
        <img src={image} alt={name} className="img-fluid rounded" />
      </div>

      <div className="author-info">
        <h2>{name}</h2>
        <p className="designation">{designation}</p>

        <div className="author-bio">
          {bio}
        </div>

        <div className="author-stats d-flex justify-content-between text-center my-4">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <h4 
                data-purecounter-start="0" 
                data-purecounter-end={stat.value} 
                data-purecounter-duration="1" 
                className="purecounter"
              >
                {stat.value}
              </h4>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.url} className={link.platform}>
              <i className={`bi bi-${link.icon}`}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
