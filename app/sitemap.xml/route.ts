import { NextResponse } from "next/server";

// Example blog slugs (replace with your real ones)
const blogPosts = ["funny-meme", "ai-meme-generator", "top-5-memes"];

export async function GET() {
  const baseUrl = "https://memeorbitai.com";

  const pages = [
    "",
    ...blogPosts.map((slug) => `blog/${slug}`)
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map((path) => {
        return `
        <url>
          <loc>${baseUrl}/${path}</loc>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
      `;
      })
      .join("")}
  </urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
