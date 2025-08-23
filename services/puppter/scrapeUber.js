import fetch from "node-fetch";
import * as cheerio from "cheerio";
import fs from "fs";

const url = "https://www.uber.com/in/en/";

(async () => {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115 Safari/537.36",
      "Accept":
        "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    },
  });

  const html = await res.text();
  const $ = cheerio.load(html);

  // Collect Uber's CSS links
  const cssLinks = [];
  $("link[rel='stylesheet']").each((_, el) => {
    const href = $(el).attr("href");
    if (href) cssLinks.push(href.startsWith("http") ? href : new URL(href, url).href);
  });

  // Fetch and merge all CSS into one block
  let cssContent = "";
  for (const link of cssLinks) {
    try {
      const cssRes = await fetch(link);
      const cssText = await cssRes.text();
      cssContent += `\n/* ${link} */\n${cssText}\n`;
    } catch (err) {
      console.error("⚠️ Failed to fetch CSS:", link, err.message);
    }
  }

  // Extract main content text (h1-h6, p, a, button)
  let content = "";
  $("main *").each((_, el) => {
    const tag = el.tagName?.toLowerCase();
    const text = $(el).text().trim();
    if (!text) return;

    if (tag.startsWith("h")) {
      const level = tag.replace("h", "");
      content += `<h${level}>${text}</h${level}>\n`;
    } else if (tag === "p") {
      content += `<p>${text}</p>\n`;
    } else if (tag === "a") {
      const href = $(el).attr("href") || "#";
      content += `<p><a href="${href}">${text}</a></p>\n`;
    } else if (tag === "button") {
      content += `<p><button>${text}</button></p>\n`;
    }
  });

  // Wrap into full HTML with Uber’s CSS
  const finalHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Uber Homepage Extract</title>
  <style>
    ${cssContent}
  </style>
</head>
<body>
  <h1>Uber Homepage Extract</h1>
  ${content}
</body>
</html>
`;

  fs.writeFileSync("uber_homepage.html", finalHTML, "utf-8");
  console.log("✅ Uber homepage text + CSS saved to uber_homepage.html");
})();
