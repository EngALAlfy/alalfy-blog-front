import BlogHero from "@/components/home/BlogHero";
import FeaturedPosts from "@/components/home/FeaturedPosts";
import CategorySection from "@/components/home/CategorySection";
import CallToAction from "@/components/home/CallToAction";
import LatestPosts from "@/components/home/LatestPosts";
import NewsletterSection from "@/components/home/NewsletterSection";
import {getHeroPost, getFeaturedPosts, getLatestPosts, getCategoriesPosts} from "@/lib/api";

export const revalidate = 3600; // Revalidate this page every hour

export default async function Home() {
  // Fetch all data in parallel
  const [heroPost, featuredPosts, categoriesPosts, latestPosts] = await Promise.all([
    getHeroPost(),
    getFeaturedPosts(),
    getCategoriesPosts(),
    getLatestPosts()
  ]);

  return (
      <main className="main">
        <BlogHero posts={heroPost?.data} />
        <FeaturedPosts posts={featuredPosts?.data} />
        <CategorySection posts={categoriesPosts?.data} />
        <CallToAction />
        <LatestPosts posts={latestPosts['data']} />
        {/*<NewsletterSection />*/}
      </main>
  );
}