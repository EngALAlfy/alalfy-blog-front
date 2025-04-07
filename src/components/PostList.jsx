import PostCard from "./PostCard";

/**
 * PostList component for displaying a grid of blog posts
 * @param {Object} props - Component props
 * @param {Array} props.posts - Array of post data
 * @param {boolean} props.showFeatured - Whether to show the first post as featured
 */
export default function PostList({ posts = [], showFeatured = false }) {
  if (!posts.length) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl font-medium">No posts found</h2>
        <p className="text-gray-500 mt-2">Check back later for new content</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, index) => (
        <PostCard 
          key={post.id || index} 
          post={post} 
          featured={showFeatured && index === 0}
        />
      ))}
    </div>
  );
}
