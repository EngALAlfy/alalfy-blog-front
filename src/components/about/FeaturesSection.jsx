import React from 'react';
import FeatureBox from './FeatureBox';

const FeaturesSection = () => {
  const features = [
    {
      icon: 'bullseye',
      title: 'Tech with Purpose',
      description: 'We break down complex topics and tools into clear, practical insights to help developers and entrepreneurs build smarter.',
      delay: 200
    },
    {
      icon: 'person-check',
      title: 'Real Experience',
      description: 'Content based on real-world projects, experiments, and lessons learned — not just theory or recycled tutorials.',
      delay: 300
    },
    {
      icon: 'clipboard-data',
      title: 'Actionable Content',
      description: 'From code snippets to system architecture, each post is designed to give you something useful you can apply today.',
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
