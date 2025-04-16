import BlogHero from "@/components/home/BlogHero";
import FeaturedPosts from "@/components/home/FeaturedPosts";
import CategorySection from "@/components/home/CategorySection";
import CallToAction from "@/components/home/CallToAction";
import LatestPosts from "@/components/home/LatestPosts";
import NewsletterSection from "@/components/home/NewsletterSection";
import { getHeroPost, getFeaturedPosts, getHomeCategories, getLatestPosts } from "@/lib/api";

export const revalidate = 3600; // Revalidate this page every hour

export default async function Home() {
  // Fetch all data in parallel
  const [heroPost, featuredPosts, categories, latestPosts] = await Promise.all([
    getHeroPost(),
    getFeaturedPosts(),
    getHomeCategories(),
    getLatestPosts()
  ]);
  

  return (
      <main className="main">
        <BlogHero posts={heroPost['data']} />
        <FeaturedPosts posts={featuredPosts['data']} />
        <CategorySection categories={categories['data']} />
        <CallToAction />
        <LatestPosts posts={latestPosts['data']} />
        {/*<NewsletterSection />*/}
      </main>
  );
}