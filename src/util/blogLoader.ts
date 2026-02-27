// Simple frontmatter parser for key: "value" pairs between --- markers.
const parseFrontmatter = (markdown: string) => {
  const delimiter = "---";
  if (!markdown.startsWith(delimiter)) {
    return { data: {}, content: markdown };
  }

  const endIndex = markdown.indexOf(`\n${delimiter}`, delimiter.length);
  if (endIndex === -1) {
    return { data: {}, content: markdown };
  }

  const frontmatterBlock = markdown.slice(delimiter.length, endIndex).trim();
  const content = markdown.slice(endIndex + delimiter.length + 1).trimStart();

  const data: Record<string, string> = {};
  frontmatterBlock.split("\n").forEach((line) => {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) return;
    const key = line.slice(0, separatorIndex).trim();
    const rawValue = line.slice(separatorIndex + 1).trim();
    const value = rawValue.replace(/^"|"$/g, "");
    if (key) data[key] = value;
  });

  return { data, content };
};

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
}

export interface BlogMetadata {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
}

// Auto-discover blog posts from src/blogs
const blogModules = import.meta.glob("../blogs/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const getBlogSlug = (path: string) => {
  const filename = path.split("/").pop() || "";
  return filename.replace(".md", "");
};

const getAllBlogSlugs = () => {
  return Object.keys(blogModules).map(getBlogSlug);
};

const getBlogMarkdownBySlug = (slug: string) => {
  const matchKey = Object.keys(blogModules).find(
    (path) => getBlogSlug(path) === slug,
  );
  return matchKey ? blogModules[matchKey] : null;
};

// Fetch and parse a single blog post
export const fetchBlogPost = async (slug: string): Promise<BlogPost | null> => {
  try {
    const markdown = getBlogMarkdownBySlug(slug);
    if (!markdown) {
      return null;
    }
    const { data, content } = parseFrontmatter(markdown);

    return {
      slug,
      title: data.title || "No Title",
      date: data.date || "",
      author: data.author || "Unknown",
      excerpt: data.excerpt || "",
      content,
    };
  } catch (error) {
    console.error(`Error fetching blog post ${slug}:`, error);
    return null;
  }
};

// Fetch metadata for all blog posts
export const fetchAllBlogPosts = async (): Promise<BlogMetadata[]> => {
  const posts = await Promise.all(
    getAllBlogSlugs().map(async (slug) => {
      const post = await fetchBlogPost(slug);
      if (!post) return null;

      return {
        slug: post.slug,
        title: post.title,
        date: post.date,
        author: post.author,
        excerpt: post.excerpt,
      };
    }),
  );

  // Filter out null posts and sort by date (newest first)
  return posts
    .filter((post): post is BlogMetadata => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
