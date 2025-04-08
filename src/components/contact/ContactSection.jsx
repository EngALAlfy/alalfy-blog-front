import React from 'react';
import InfoCardsSection from './InfoCardsSection';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <InfoCardsSection />
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
