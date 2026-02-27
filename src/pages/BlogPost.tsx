import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { fetchBlogPost, BlogPost } from "../util/blogLoader";
import "./BlogPost.css";
import { FormattedMessage } from "react-intl";

const BlogPostView: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) {
        setError(true);
        setLoading(false);
        return;
      }

      setLoading(true);
      const fetchedPost = await fetchBlogPost(slug);

      if (fetchedPost) {
        setPost(fetchedPost);
        setError(false);
      } else {
        setError(true);
      }
      setLoading(false);
    };

    loadPost().then(() => null);
  }, [slug]);

  if (loading) {
    return (
      <div className="blog-post-container">
        <div className="blog-post-content">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="blog-post-container">
        <div className="blog-post-content">
          <h1>Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
          <Link to="/blogs" className="back-link">
            ← <FormattedMessage id={"blogs.back"} defaultMessage="Back" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-container">
      <div className="blog-post-content">
        <Link to="/blogs" className="back-link">
          {"← "}
          <FormattedMessage id={"blogs.back"} defaultMessage="Back" />
        </Link>

        <article className="blog-article">
          <header className="blog-header">
            <h1>{post.title}</h1>
            <div className="blog-meta">
              <span className="blog-date">
                {new Date(post.date).toLocaleDateString()}
              </span>
              <span className="blog-author">
                <FormattedMessage
                  id={"blogs.author"}
                  defaultMessage="Author:"
                />{" "}
                {post.author}
              </span>
            </div>
          </header>

          <div className="blog-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPostView;
