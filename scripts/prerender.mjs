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

  // Start Express server for SPA
  const app = express();
  app.use(express.static(buildDir));
  app.use((req, res) => {
    res.sendFile(path.join(buildDir, "index.html"));
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

    const html = await page.content();

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
