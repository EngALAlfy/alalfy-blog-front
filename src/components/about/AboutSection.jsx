import React from 'react';
import AboutIntro from './AboutIntro';
import FeaturesSection from './FeaturesSection';
import VideoBox from './VideoBox';

const AboutSection = () => {
  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <span className="section-badge">
          <i className="bi bi-info-circle"></i> About Us
        </span>
        
        <AboutIntro />
        <FeaturesSection />
      </div>
    </section>
  );
};

export default AboutSection;
