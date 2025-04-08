import React from 'react';
import PageTitle from '../../components/shared/PageTitle';
import AboutSection from '../../components/about/AboutSection';

export const metadata = {
    title: 'About Us - Alalfy Blog',
    description: 'Learn more about our company, mission, and values.',
};

export default function About() {
  const breadcrumbItems = [
    { label: 'Home', href: '/', icon: 'house' },
    { label: 'Category', href: '#' },
    { label: 'About', active: true }
  ];

  return (
    <main className="main">
      <PageTitle 
        title="About" 
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        breadcrumbItems={breadcrumbItems}
      />
      
      <AboutSection />
    </main>
  );
}
