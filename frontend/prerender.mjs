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
const PRODUCTION_ORIGIN = "https://bis-certifications.com";

const ROUTES = [
  {
    route: "/",
    outDir: "home",
    waitSelectors: ["footer"],
    waitIds: [],
  },
  {
    route: "/what-is-bis-certificate-indian-bis",
    outDir: "what-is-bis-certificate-indian-bis",
    waitSelectors: ["#product-table"],
    waitIds: ["biscertification-faq-schema", "bis-certification-rating-schema"],
  },
  {
    route: "/a-guide-to-bis-certification-indian-bis",
    outDir: "a-guide-to-bis-certification-indian-bis",
    waitSelectors: ["#product-table"],
    waitIds: ["isimark-faq-schema", "isimark-rating-schema"],
  },
  {
    route: "/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis",
    outDir: "a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis",
    waitSelectors: ["#product-table"],
    waitIds: ["bisfm-faq-schema", "bis-fmcs-rating-schema"],
  },
  {
    route: "/what-is-crs-bis-or-crs-registration",
    outDir: "what-is-crs-bis-or-crs-registration",
    waitSelectors: [".product-table-section"],
    waitIds: ["crs-faq-schema", "bis-crs-rating-schema"],
  },
  {
    route: "/indian-bis-certification-under-scheme-x",
    outDir: "indian-bis-certification-under-scheme-x",
    waitSelectors: ["#faqs"],
    waitIds: ["bis-scheme-x-rating-schema"],
  },
];

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

async function prerenderRoute(browser, routeConfig) {
  const { route, outDir, waitSelectors, waitIds } = routeConfig;
  const page = await browser.newPage();

  try {
    await page.goto(`http://localhost:${PORT}${route}`, {
      waitUntil: "networkidle0",
      timeout: 120000,
    });

    for (const selector of waitSelectors) {
      await page.waitForSelector(selector, { timeout: 60000 });
    }

    if (waitIds.length) {
      await page.waitForFunction(
        (ids) => ids.every((id) => document.getElementById(id)),
        { timeout: 60000 },
        waitIds
      );
    }

    let html = await page.evaluate(
      () => "<!DOCTYPE html>\n" + document.documentElement.outerHTML
    );
    html = html.replaceAll(
      `http://localhost:${PORT}`,
      PRODUCTION_ORIGIN
    );

    const outputDir = join(DIST, outDir);
    const outputFile = join(outputDir, "index.html");
    mkdirSync(outputDir, { recursive: true });
    writeFileSync(outputFile, html, "utf8");
    console.log(`Prerendered ${route} -> ${outputFile}`);
  } finally {
    await page.close();
  }
}

async function prerender() {
  await new Promise((resolve) => server.listen(PORT, resolve));
  console.log(`Serving dist at http://localhost:${PORT}`);

  const browser = await puppeteer.launch(getLaunchOptions());

  try {
    for (const routeConfig of ROUTES) {
      await prerenderRoute(browser, routeConfig);
    }
  } finally {
    await browser.close();
    server.close();
  }
}

prerender().catch((err) => {
  console.error(err);
  process.exit(1);
});
