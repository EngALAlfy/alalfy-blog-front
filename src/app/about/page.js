import React from 'react';
import PageTitle from '../../components/shared/PageTitle';
import AboutSection from '../../components/about/AboutSection';

export const metadata = {
    title: 'About Alalfy Dev - Behind the Code & Content',
    description: 'Discover the story behind Alalfy Dev — a blog by Islam Hassan Alalfy, a Flutter and full-stack developer sharing real-world development insights, practical tools, and creative solutions.',
};

export default function About() {
    const breadcrumbItems = [
        { label: 'Home', href: '/', icon: 'house' },
        { label: 'Pages', href: '#' },
        { label: 'About', active: true }
    ];

    return (
        <main className="main">
            <PageTitle
                title="About"
                description="مرحبًا! أنا إسلام حسن الألفي، مطور تطبيقات أندرويد وآيفون باستخدام Flutter، بخلفية هندسية وخبرة واسعة كمطور Full-Stack تشمل Laravel، PHP، Symfony، Node.js وغيرها. أنشأت Alalfy Dev كمنصة لمشاركة المعرفة والخبرة من أرض الواقع — مقالات عملية، دروس مختصرة، وأفكار ملهمة لمطورين وأصحاب مشاريع رقمية. من خلال عملي كمستقل، اكتسبت فهماً عميقاً للتحديات التقنية وسُبل تحويلها إلى حلول واقعية. هدفي هو تقديم محتوى يُحدث فرقاً حقيقياً ويدفع حدود الابتكار."
                breadcrumbItems={breadcrumbItems}
            />

            <AboutSection />
        </main>
    );
}
