import BlogHero from "@/components/home/BlogHero";
import FeaturedPosts from "@/components/home/FeaturedPosts";
import CategorySection from "@/components/home/CategorySection";
import CallToAction from "@/components/home/CallToAction";
import LatestPosts from "@/components/home/LatestPosts";
import NewsletterSection from "@/components/home/NewsletterSection";

export const revalidate = 3600; // Revalidate this page every hour

export default async function Home() {
  return (
      <main className="main">
        <BlogHero />
        <FeaturedPosts />
        <CategorySection />
        <CallToAction />
        <LatestPosts />
        <NewsletterSection />
      </main>
  );
}