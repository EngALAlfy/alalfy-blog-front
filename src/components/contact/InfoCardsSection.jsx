import React from 'react';
import InfoCard from './InfoCard';

const InfoCardsSection = () => {
  const infoCards = [
    {
      icon: 'geo-alt',
      title: 'Our Address',
      content: 'Cairo, EG',
      delay: 100
    },
    {
      icon: 'telephone',
      title: 'Contact Number',
      content: 'Mobile: +20 11 53263 994<br/>Email: islam@alalfy.com',
      delay: 200
    },
    {
      icon: 'clock',
      title: 'Opening Hour',
      content: 'Sunday - Saturday: 18:00 - 23:00',
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
