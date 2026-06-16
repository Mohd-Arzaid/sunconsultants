import { createServer } from "http";
import { existsSync } from "fs";
import { mkdirSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import puppeteer from "puppeteer";
import sirv from "sirv";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "dist");
const PORT = 45678;
const ROUTE = "/what-is-bis-certificate-indian-bis";
const OUTPUT_DIR = join(DIST, "what-is-bis-certificate-indian-bis");
const OUTPUT_FILE = join(OUTPUT_DIR, "index.html");

const SYSTEM_CHROME_PATHS = [
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  process.env.LOCALAPPDATA
    ? join(process.env.LOCALAPPDATA, "Google", "Chrome", "Application", "chrome.exe")
    : null,
].filter(Boolean);

function getLaunchOptions() {
  const systemChrome = SYSTEM_CHROME_PATHS.find((path) => existsSync(path));
  if (systemChrome) {
    return {
      headless: true,
      executablePath: systemChrome,
    };
  }

  return {
    headless: true,
    channel: "chrome",
    ...(process.platform === "linux" ? { args: ["--no-sandbox"] } : {}),
  };
}

const serve = sirv(DIST, { single: true });
const server = createServer((req, res) => {
  serve(req, res);
});

async function prerender() {
  await new Promise((resolve) => server.listen(PORT, resolve));
  console.log(`Serving dist at http://localhost:${PORT}`);

  const browser = await puppeteer.launch(getLaunchOptions());

  try {
    const page = await browser.newPage();
    await page.goto(`http://localhost:${PORT}${ROUTE}`, {
      waitUntil: "networkidle0",
      timeout: 120000,
    });

    await page.waitForSelector("#product-table", { timeout: 60000 });
    await page.waitForFunction(
      () =>
        document.getElementById("biscertification-faq-schema") &&
        document.getElementById("bis-certification-rating-schema"),
      { timeout: 60000 }
    );

    const html = await page.evaluate(
      () => "<!DOCTYPE html>\n" + document.documentElement.outerHTML
    );

    mkdirSync(OUTPUT_DIR, { recursive: true });
    writeFileSync(OUTPUT_FILE, html, "utf8");
    console.log(`Prerendered ${ROUTE} -> ${OUTPUT_FILE}`);
  } finally {
    await browser.close();
    server.close();
  }
}

prerender().catch((err) => {
  console.error(err);
  process.exit(1);
});
