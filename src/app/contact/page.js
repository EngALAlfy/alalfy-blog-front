import React from 'react';
import PageTitle from '../../components/shared/PageTitle';
import ContactSection from '../../components/contact/ContactSection';

export const metadata = {
  title: 'Contact Us - Alalfy Blog',
  description: 'Get in touch with us for any inquiries or feedback.',
};

export default function ContactPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/', icon: 'house' },
    { label: 'Category', href: '#' },
    { label: 'Contact', active: true }
  ];

  return (
    <main className="main">
      <PageTitle 
        title="Contact" 
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        breadcrumbItems={breadcrumbItems}
      />
      
      <ContactSection />
    </main>
  );
}
