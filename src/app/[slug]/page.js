import { getPostBySlug, getLatestPosts, getAllCategories } from "@/lib/api";
import { notFound } from "next/navigation";
import Link from "next/link";
import CodeHighlighter from "@/components/layout/CodeHighlighter";

export const revalidate = 3600;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  let post = await getPostBySlug(slug);
  post = post?.data;

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found',
    };
  }

  return {
    title: post.title,
    description: post.short_description,
    keywords: post.tags?.map(t => t.name),
    openGraph: {
      title: post.title,
      description: post.short_description,
      images: post.banner ? [{ url: post.banner }] : [],
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  let post = await getPostBySlug(slug);
  post = post?.data;
  
  // Fetch categories and recent posts for sidebar
  const [categories, recentPosts] = await Promise.all([
    getAllCategories(),
    getLatestPosts()
  ]);
  
  if (!post) {
    notFound();
  }

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-EG', {
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  // Calculate reading time (rough estimate)
  const calculateReadingTime = (text) => {
    const wordsPerMinute = 200;
    const wordCount = text?.split(/\s+/)?.length || 0;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readingTime} min read`;
  };

  const readingTime = calculateReadingTime(post.description);

  return (
    <>
      <CodeHighlighter />
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <section id="blog-details" className="blog-details section">
              <div className="container" data-aos="fade-up">
                <article className="article">
                  <div className="hero-img" data-aos="zoom-in">
                    <img 
                      src={post.banner || "/img/blog/placeholder.webp"} 
                      alt={post.title} 
                      className="img-fluid" 
                      loading="lazy" 
                    />
                    <div className="meta-overlay">
                      <div className="meta-categories">
                        <Link href={`/category/${post.category?.slug}`} className="category">
                          {post.category?.name || "Uncategorized"}
                        </Link>
                        <span className="divider">•</span>
                        <span className="reading-time">
                          <i className="bi bi-clock"></i> {readingTime}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="article-content" data-aos="fade-up" data-aos-delay="100">
                    <div className="content-header">
                      <h1 className="title">{post.title}</h1>

                      <div className="author-info">
                        <div className="author-details">
                          <img 
                            src={post.author?.avatar}
                            alt={post.author?.name || "Author"} 
                            className="author-img" 
                          />
                          <div className="info">
                            <h4>{post.author?.name || "Anonymous"}</h4>
                            <span className="role">{post.author?.job || "Author"}</span>
                          </div>
                        </div>
                        <div className="post-meta">
                          <span className="date">
                            <i className="bi bi-calendar3"></i> {formatDate(post.created_at)}
                          </span>
                          <span className="divider">•</span>
                          <span className="comments">
                            <i className="bi bi-chat-text"></i> {post.comments_count || 0} تعليق
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="content">
                      <p className="lead">{post.short_description}</p>
                      <div dangerouslySetInnerHTML={{ __html: `${post.description}` }} />
                    </div>

                    <div className="meta-bottom">
                      <div className="tags-section">
                        <h4>Related Topics</h4>
                        <div className="tags">
                          {post.tags?.map(tag => (
                            <Link href='#' key={tag.id} className="tag">
                              {tag.name}
                            </Link>
                          )) || (
                            <>
                              <Link href="#" className="tag">Web Development</Link>
                              <Link href="#" className="tag">Technology</Link>
                            </>
                          )}
                        </div>
                      </div>

                      {/*<div className="share-section">*/}
                      {/*  <h4>Share Article</h4>*/}
                      {/*  <div className="social-links">*/}
                      {/*    <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>*/}
                      {/*    <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>*/}
                      {/*    <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>*/}
                      {/*    <a href="#" className="copy-link" title="Copy Link"><i className="bi bi-link-45deg"></i></a>*/}
                      {/*  </div>*/}
                      {/*</div>*/}
                    </div>
                  </div>
                </article>
              </div>
            </section>

            {post.author && (
              <section id="blog-author" className="blog-author section">
                <div className="container" data-aos="fade-up">
                  <div className="author-box">
                    <div className="row align-items-center">
                      <div className="col-lg-3 col-md-4 text-center">
                        <img 
                          src={post.author.avatar || "/img/person/default-avatar.webp"} 
                          className="author-img rounded-circle" 
                          alt={post.author.name} 
                          loading="lazy" 
                        />
                        <div className="author-social-links mt-3">
                          {post.author.twitter && (
                            <a href={post.author.twitter} className="twitter"><i className="bi bi-twitter-x"></i></a>
                          )}
                          {post.author.linkedin && (
                            <a href={post.author.linkedin} className="linkedin"><i className="bi bi-linkedin"></i></a>
                          )}
                          {post.author.github && (
                            <a href={post.author.github} className="github"><i className="bi bi-github"></i></a>
                          )}
                          {post.author.facebook && (
                            <a href={post.author.facebook} className="facebook"><i className="bi bi-facebook"></i></a>
                          )}
                          {post.author.instagram && (
                            <a href={post.author.instagram} className="instagram"><i className="bi bi-instagram"></i></a>
                          )}
                        </div>
                      </div>

                      <div className="col-lg-9 col-md-8">
                        <div className="author-content">
                          <h3 className="author-name">{post.author.name}</h3>
                          <span className="author-title">{post.author.role || "Author"}</span>

                          <div className="author-bio mt-3">
                            {post.author.bio || "Author bio not available"}
                          </div>

                          <div className="author-website mt-3">
                            {post.author.website && (
                              <a href={post.author.website} className="website-link">
                                <i className="bi bi-globe"></i>
                                <span>{post.author.website.replace(/^https?:\/\/(www\.)?/, '')}</span>
                              </a>
                            )}
                            <Link href={`/author/${post.author.id}`} className="more-posts">
                              Read More from {post.author.name.split(' ')[0]} <i className="bi bi-arrow-left"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>

          <div className="col-lg-4 sidebar">
            <div className="widgets-container" data-aos="fade-up" data-aos-delay="200">
            
              <div className="categories-widget widget-item">
                <h3 className="widget-title">Categories</h3>
                <ul className="mt-3">
                  {categories?.data?.map(category => (
                    <li key={category.id}>
                      <Link href={`/category/${category.slug}`}>
                        {category.name} <span>({category.posts_count || 0})</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="recent-posts-widget widget-item">
                <h3 className="widget-title">Recent Posts</h3>
                
                {recentPosts?.data?.map(recentPost => (
                  <div key={recentPost.id} className="post-item">
                    <img 
                      src={recentPost.banner || "/img/blog/placeholder.webp"} 
                      alt={recentPost.title} 
                      className="flex-shrink-0" 
                    />
                    <div>
                      <h4>
                        <Link href={`/${recentPost.slug}`}>{recentPost.title}</Link>
                      </h4>
                      <time dateTime={recentPost.created_at}>{formatDate(recentPost.created_at)}</time>
                    </div>
                  </div>
                ))}
              </div>

              <div className="tags-widget widget-item">
                <h3 className="widget-title">Tags</h3>
                <ul>
                  {post.tags?.map(tag => (
                    <li key={tag.id}><Link href={`/tag/${tag.slug}`}>{tag.name}</Link></li>
                  )) || (
                    <>
                      <li><Link href="#">Technology</Link></li>
                      <li><Link href="#">Web</Link></li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}