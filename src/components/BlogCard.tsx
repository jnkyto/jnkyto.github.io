import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { BlogMetadata } from "../util/blogLoader";

interface BlogCardProps {
  post: BlogMetadata;
}

const BlogCard = ({ post }: BlogCardProps) => (
  <Link to={`/blogs/${post.slug}`} className="blog_card">
    <article>
      <h2 className="blog_card_title">{post.title}</h2>
      <div className="blog_card_meta">
        <span className="blog_card_date">
          {new Date(post.date).toLocaleDateString()}
        </span>
        <span className="blog_card_author">
          <FormattedMessage id={"blogs.author"} defaultMessage="Author:" />{" "}
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
);

export default BlogCard;
