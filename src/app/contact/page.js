import React from 'react';
import PageTitle from '../../components/shared/PageTitle';
import ContactSection from '../../components/contact/ContactSection';

export const metadata = {
    title: 'Contact Us - Alalfy Tech Blog',
    description: 'Have a question, collaboration idea, or feedback? Reach out to Alalfy Tech and let’s connect.',
};

export default function ContactPage() {
    const breadcrumbItems = [
        { label: 'Home', href: '/', icon: 'house' },
        { label: 'Pages', href: '#' },
        { label: 'Contact', active: true }
    ];

    return (
        <main className="main">
            <PageTitle
                title="Contact"
                description="Whether you have a project in mind, want to collaborate, or simply wish to share feedback — I’d love to hear from you. Alalfy Tech is built on connection, so feel free to reach out anytime."
                breadcrumbItems={breadcrumbItems}
            />

            <ContactSection />
        </main>
    );
}
