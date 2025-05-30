import { getPostBySlug, getPosts } from "@/lib/api";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { notFound } from "next/navigation";

export const revalidate = 3600; // Revalidate this page every hour

// Generate static params for common posts
export async function generateStaticParams() {
  const posts = await getPosts(20); // Pre-render the 20 most recent posts
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params

  const post = await getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found',
    };
  }
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [{ url: post.coverImage }] : [],
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params
  const post = await getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <>
      <Header />
      <main>
        <article>
          <Container className="max-w-4xl mx-auto">
            <div className="prose dark:prose-invert max-w-none">
              {/* 
                In a real implementation, you would render the post content here.
                This could be Markdown, HTML, or a rich text format.
                For example:
              */}
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </Container>
        </article>
      </main>
      <Footer />
    </>
  );
}