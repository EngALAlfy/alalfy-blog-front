import { getPosts } from "@/lib/api";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostList from "@/components/PostList";

export const revalidate = 3600; // Revalidate this page every hour

export const metadata = {
  title: 'Blog Posts',
  description: 'Browse all our blog posts and articles',
};

export default async function BlogIndex() {
  // Fetch all posts with a higher limit
  const posts = await getPosts(20);
  
  return (
    <>
      <Header />
      <main>
        <Container>
          <div className="max-w-3xl mx-auto mb-10">
            <h1 className="text-3xl font-bold mb-4">All Blog Posts</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Browse our collection of articles, tutorials, and insights
            </p>
          </div>
          
          <PostList posts={posts} />
        </Container>
      </main>
      <Footer />
    </>
  );
}
