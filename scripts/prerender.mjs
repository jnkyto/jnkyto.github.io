import { promises as fs } from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import express from "express";
import puppeteer from "puppeteer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const buildDir = path.join(projectRoot, "build");

const main = async () => {
  // Read sitemap.xml to get routes
  const sitemapPath = path.join(buildDir, "sitemap.xml");
  let sitemapContent;
  try {
    sitemapContent = await fs.readFile(sitemapPath, "utf-8");
  } catch (e) {
    console.error(e);
    // If not in build, check public (vite copies public to build)
    sitemapContent = await fs.readFile(
      path.join(projectRoot, "public", "sitemap.xml"),
      "utf-8",
    );
  }

  const urls = [...sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g)].map(
    (m) => m[1],
  );
  // Extract paths from URLs (e.g., https://kytonie.me/blogs -> /blogs)
  const routes = urls.map((url) => new URL(url).pathname);

  // Read pristine index.html into memory so we don't serve the modified one
  const pristineIndexPath = path.join(buildDir, "index.html");
  const pristineIndexHtml = await fs.readFile(pristineIndexPath, "utf-8");

  // Start Express server for SPA
  const app = express();
  // Don't serve index.html automatically from the static folder
  app.use(express.static(buildDir, { index: false }));
  app.use((req, res) => {
    res.send(pristineIndexHtml);
  });

  const server = app.listen(0);
  const port = server.address().port;
  console.log(`Express server listening on port ${port}`);

  // Launch Puppeteer
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  // Prerender each route
  for (const route of routes) {
    console.log(`Prerendering ${route}...`);
    await page.goto(`http://localhost:${port}${route}`, {
      waitUntil: "networkidle0",
    });

    // Ensure React has hydrated and rendered. Networkidle0 usually covers this,
    // but just in case, wait for a root element to not be empty
    await page.waitForSelector("#root > *", { timeout: 10000 }).catch(() => {});

    // Clean up duplicate SEO tags (keep the last/deepest one injected by Helmet)
    // await page.evaluate(() => {
    //   const tags = Array.from(document.head.querySelectorAll("meta[name], meta[property], title"));
    //   const seen = new Set();
    //   for (let i = tags.length - 1; i >= 0; i--) {
    //     const tag = tags[i];
    //     // Don't deduplicate generic meta tags that shouldn't be unique like keywords (if you had multiples, though here we just use one)
    //     // Wait, name/property are unique enough for SEO tags.
    //     const key = tag.tagName === "TITLE" ? "title" : (tag.getAttribute("name") || tag.getAttribute("property"));
    //     if (seen.has(key)) {
    //       tag.remove();
    //     } else {
    //       seen.add(key);
    //     }
    //   }
    // });

    let html = await page.content();

    // Remove the localhost URL from dynamically injected links (like modulepreload)
    html = html.replace(new RegExp(`http://localhost:${port}`, "g"), "");

    // 5. Save HTML
    const filePath =
      route === "/" ? "index.html" : `${route.substring(1)}/index.html`;
    const fullPath = path.join(buildDir, filePath);

    await fs.mkdir(path.dirname(fullPath), { recursive: true });
    await fs.writeFile(fullPath, html, "utf-8");
  }

  await browser.close();
  server.close();
  console.log("Prerendering complete!");
};

main().catch((error) => {
  console.error("Failed to prerender", error);
  process.exitCode = 1;
});
