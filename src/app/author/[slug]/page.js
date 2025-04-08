import React from 'react';
import PageTitle from '../../../components/shared/PageTitle';
import AuthorProfileSection from "../../../components/author/AuthorProfileSection";

export const metadata = {
    title: 'Author - Alalfy Blog',
    description: 'Learn more about our company, mission, and values.',
};

// Function to fetch author data by slug
async function getAuthorBySlug(slug) {
    // This is a placeholder - implement your actual data fetching here
    // For example, you might fetch from an API or database
    return {
        name: 'John Doe',
        slug: slug,
        image: '/img/person/person-f-4.webp',
        role: 'Senior Writer',
        bio: 'Short author bio that appears on cards',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        expertiseAreas: ['Technology', 'Science', 'Programming'],
        socialLinks: [
            { platform: 'Facebook', url: 'https://facebook.com/johndoe' ,icon: 'facebook' },
            { platform: 'Twitter', url: 'https://twitter.com/johndoe', icon: 'twitter' },
            { platform: 'LinkedIn', url: 'https://linkedin.com/in/johndoe', icon: 'linkedin' },
            { platform: 'Instagram', url: 'https://instagram.com/johndoe', icon: 'instagram' },
        ],
        stats: [
            { label: 'Posts', value: 120 },
            { label: 'Followers', value: 1500 },
            { label: 'Likes', value: 3000 }
        ],
        featuredArticles: [
            {
                id: 1,
                title: 'Getting Started with React',
                slug: 'getting-started-with-react',
                excerpt: 'Learn the basics of React and how to build your first component',
                image: '/img/blog/blog-post-1.webp',
                date: '2023-05-15'
            },
            {
                id: 2,
                title: 'Advanced JavaScript Techniques',
                slug: 'advanced-javascript-techniques',
                excerpt: 'Discover advanced patterns and techniques in modern JavaScript',
                image: '/img/blog/blog-post-2.webp',
                date: '2023-06-22'
            }
        ],
        email: 'john.doe@example.com',
        location: 'New York, USA'
    };
}

export default async function AuthorPage({params}) {
    const { slug } =  await params;
    const author = await getAuthorBySlug(slug);

    const breadcrumbItems = [
        {label: 'Home', href: '/', icon: 'house'},
        {label: 'Category', href: '#'},
        {label: 'Author', active: true}
    ];

    return (
        <main className="main">
            <PageTitle
                title={`Author: ${author.name}`}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                breadcrumbItems={breadcrumbItems}
            />

            <AuthorProfileSection author={author} />
        </main>
    );
}