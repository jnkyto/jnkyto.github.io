import "./Blogs.css";
import { FormattedMessage } from "react-intl";
import React, { useEffect, useState } from "react";
import { fetchAllBlogPosts, BlogMetadata } from "../util/blogLoader";
import BlogCard from "../components/BlogCard";
import SEO from "../components/SEO";

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
      <SEO title="Blogs - kytonie.me" />
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
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
