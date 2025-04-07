import { getPosts, getFeaturedPosts } from "@/lib/api";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostList from "@/components/PostList";
import Link from "next/link";

export const revalidate = 3600; // Revalidate this page every hour

export default async function Home() {
  // Fetch featured posts and recent posts
  const featuredPosts = await getFeaturedPosts(3);
  const recentPosts = await getPosts(6);

  return (
      <>
        <Header />
        <main>
          <section className="bg-gray-50 dark:bg-gray-900 py-12">
            <Container>
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                  Discover the latest articles, tutorials, and insights
                </p>
              </div>
            </Container>
          </section>

          {featuredPosts.length > 0 && (
              <section>
                <Container>
                  <h2 className="text-2xl font-bold mb-6">Featured Posts</h2>
                  <PostList posts={featuredPosts} showFeatured={true} />
                </Container>
              </section>
          )}

          <section className="mt-12">
            <Container>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Recent Posts</h2>
                <Link
                    href="/blog"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  View all posts →
                </Link>
              </div>
              <PostList posts={recentPosts} />
            </Container>
          </section>
        </main>
        <Footer />
      </>
  );
}