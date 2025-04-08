import React from 'react';
import InfoCard from './InfoCard';

const InfoCardsSection = () => {
  const infoCards = [
    {
      icon: 'geo-alt',
      title: 'Our Address',
      content: '2847 Rainbow Road, Springfield, IL 62701, USA',
      delay: 100
    },
    {
      icon: 'telephone',
      title: 'Contact Number',
      content: 'Mobile: +1 (555) 123-4567<br/>Email: info@example.com',
      delay: 200
    },
    {
      icon: 'clock',
      title: 'Opening Hour',
      content: 'Monday - Saturday: 9:00 - 18:00<br/>Sunday: Closed',
      delay: 300
    }
  ];

  return (
    <div className="row gy-4 mb-5">
      {infoCards.map((card, index) => (
        <InfoCard 
          key={index}
          icon={card.icon}
          title={card.title}
          content={card.content}
          delay={card.delay}
        />
      ))}
    </div>
  );
};

export default InfoCardsSection;
