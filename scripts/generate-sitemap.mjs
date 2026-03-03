import { promises as fs } from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const blogsDir = path.join(projectRoot, "src", "blogs");
const outputPath = path.join(projectRoot, "public", "sitemap.xml");

const staticRoutes = ["/", "/music", "/blogs"];

const toIsoDate = (date) => date.toISOString().slice(0, 10);

const normalizeBaseUrl = (rawUrl) => rawUrl.replace(/\/+$/, "");

const loadBaseUrl = async () => {
  if (process.env.SITE_URL) {
    return normalizeBaseUrl(process.env.SITE_URL);
  }

  return "https://kytonie.me";
};

const getBlogSlugs = async () => {
  const entries = await fs.readdir(blogsDir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => entry.name.replace(/\.md$/, ""))
    .sort((a, b) => a.localeCompare(b));
};

const buildUrlSet = (baseUrl, slugs) => {
  const today = toIsoDate(new Date());
  const routes = [...staticRoutes, ...slugs.map((slug) => `/blogs/${slug}`)];

  const urls = routes
    .map(
      (route) =>
        `  <url>\n    <loc>${baseUrl}${route}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
};

const main = async () => {
  const baseUrl = await loadBaseUrl();
  const blogSlugs = await getBlogSlugs();
  const xml = buildUrlSet(baseUrl, blogSlugs);

  await fs.writeFile(outputPath, xml, "utf8");
  console.log(`sitemap generated at ${outputPath}`);
};

main().catch((error) => {
  console.error("failed to generate sitemap", error);
  process.exitCode = 1;
});
