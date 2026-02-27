import "./Blogs.css";
import { FormattedMessage } from "react-intl";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllBlogPosts, BlogMetadata } from "../util/blogLoader";

const Blogs: React.FC = () => {
  const [posts, setPosts] = useState<BlogMetadata[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const fetchedPosts = await fetchAllBlogPosts();
      setPosts(fetchedPosts);
      setLoading(false);
    };

    loadPosts().then(() => null);
  }, []);

  return (
    <div className={"blogs_container"}>
      <div className={"blogs_root"}>
        {loading ? (
          <div className="blogs_loading">
            <p>
              <FormattedMessage id={"loading"} defaultMessage="Loading..." />
            </p>
          </div>
        ) : posts.length === 0 ? (
          <div className="blogs_empty">
            <h3>
              <FormattedMessage
                id={"nothing.here"}
                defaultMessage="Nothing here"
              />
            </h3>
          </div>
        ) : (
          <div className="blogs_list">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blogs/${post.slug}`}
                className="blog_card"
              >
                <article>
                  <h2 className="blog_card_title">{post.title}</h2>
                  <div className="blog_card_meta">
                    <span className="blog_card_date">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="blog_card_author">
                      <FormattedMessage
                        id={"blogs.author"}
                        defaultMessage="Author:"
                      />{" "}
                      {post.author}
                    </span>
                  </div>
                  <p className="blog_card_excerpt">{post.excerpt}</p>
                  <span className="blog_card_read_more">
                    <FormattedMessage id={"blogs.read"} defaultMessage="Read" />
                    {" →"}
                  </span>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
