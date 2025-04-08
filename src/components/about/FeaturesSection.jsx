import React from 'react';
import FeatureBox from './FeatureBox';

const FeaturesSection = () => {
  const features = [
    {
      icon: 'bullseye',
      title: 'At vero eos',
      description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.',
      delay: 200
    },
    {
      icon: 'person-check',
      title: 'Sed ut perspiciatis',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.',
      delay: 300
    },
    {
      icon: 'clipboard-data',
      title: 'Nemo enim ipsam',
      description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.',
      delay: 400
    }
  ];

  return (
    <div className="row features-boxes gy-4 mt-3">
      {features.map((feature, index) => (
        <FeatureBox
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          delay={feature.delay}
        />
      ))}
    </div>
  );
};

export default FeaturesSection;
