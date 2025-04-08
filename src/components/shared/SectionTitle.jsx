import React from 'react';

const SectionTitle = ({ title, description }) => {
  return (
    <div className="container section-title" data-aos="fade-up">
      <h2>{title}</h2>
      {description && (
        <div>
          {description.includes(' | ') ? (
            <>
              <span>{description.split(' | ')[0]}</span>{' '}
              <span className="description-title">{description.split(' | ')[1]}</span>
            </>
          ) : (
            <span className="description-title">{description}</span>
          )}
        </div>
      )}
    </div>
  );
};

export default SectionTitle;