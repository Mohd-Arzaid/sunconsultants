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

const ROUTE_SEO = {
  "/": {
    title: "BIS Certification Consultants in India | ISI Mark, FMCS, CRS, EPR",
    description:
      "Sun Certifications is one of the top BIS Certification Consultant in Delhi, India, one stop solutions for all kinds of Technical Certification & Regulatory Compliances, including BIS Registration, ISI Certification, WPC Approval, EPR Registration and more.",
    canonical: `${PRODUCTION_ORIGIN}/`,
  },
  "/what-is-bis-certificate-indian-bis": {
    title: "BIS Certification in India | Types, Process, Documents & Fees",
    description:
      "Complete BIS certification guide for Indian & foreign manufacturers: ISI mark, FMCS, CRS, Scheme X, required documents, fees, step-by-step process & expert consultant support in India.",
    canonical: `${PRODUCTION_ORIGIN}/what-is-bis-certificate-indian-bis`,
  },
  "/a-guide-to-bis-certification-indian-bis": {
    title: "BIS ISI Mark Certification Process, Documents, Fee",
    description:
      "ISI mark certification issued by the Bureau of Indian Standards is given to products undergoing stringent testing and inspection to meet the required standards and compliances",
    canonical: `${PRODUCTION_ORIGIN}/a-guide-to-bis-certification-indian-bis`,
  },
  "/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis": {
    title: "BIS FMCS | BIS Certification for Foreign Manufacturers",
    description:
      "The Bureau of Indian Standards offers the Foreign Manufacturers Certification Scheme (FMCS) for foreign manufacturers to get BIS certification for selling products in India.",
    canonical: `${PRODUCTION_ORIGIN}/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis`,
  },
  "/what-is-crs-bis-or-crs-registration": {
    title: "BIS Registration - Compulsory Registration Scheme (CRS)",
    description:
      "BIS registration is getting a license from the BIS for Electronic and IT Products that conforms with the applicable Indian Standards under CRS scheme.",
    canonical: `${PRODUCTION_ORIGIN}/what-is-crs-bis-or-crs-registration`,
  },
  "/indian-bis-certification-under-scheme-x": {
    title: "BIS Scheme X Certification | Machinery & Electrical Equipment Safety",
    description:
      "BIS Scheme X Certification is required to ensure quality and safety of low voltage switchgear, control gear, machinery, and electrical equipment.",
    canonical: `${PRODUCTION_ORIGIN}/indian-bis-certification-under-scheme-x`,
  },
};

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
    waitSelectors: ["#product-table", "footer"],
    waitIds: ["biscertification-faq-schema", "bis-certification-rating-schema"],
  },
  {
    route: "/a-guide-to-bis-certification-indian-bis",
    outDir: "a-guide-to-bis-certification-indian-bis",
    waitSelectors: ["#product-table", "footer"],
    waitIds: ["isimark-faq-schema", "isimark-rating-schema"],
  },
  {
    route: "/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis",
    outDir: "a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis",
    waitSelectors: ["#product-table", "footer"],
    waitIds: ["bisfm-faq-schema", "bis-fmcs-rating-schema"],
  },
  {
    route: "/what-is-crs-bis-or-crs-registration",
    outDir: "what-is-crs-bis-or-crs-registration",
    waitSelectors: [".product-table-section", "footer"],
    waitIds: ["crs-faq-schema", "bis-crs-rating-schema"],
  },
  {
    route: "/indian-bis-certification-under-scheme-x",
    outDir: "indian-bis-certification-under-scheme-x",
    waitSelectors: ["#faqs", "footer"],
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

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function stripDuplicateSeoTags(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>/gi, "")
    .replace(/<meta[^>]+name=["']description["'][^>]*>/gi, "")
    .replace(/<meta[^>]+property=["']og:title["'][^>]*>/gi, "")
    .replace(/<meta[^>]+property=["']og:description["'][^>]*>/gi, "")
    .replace(/<meta[^>]+property=["']og:url["'][^>]*>/gi, "")
    .replace(/<meta[^>]+name=["']twitter:title["'][^>]*>/gi, "")
    .replace(/<meta[^>]+name=["']twitter:description["'][^>]*>/gi, "")
    .replace(/<link[^>]+rel=["']canonical["'][^>]*>/gi, "");
}

function buildSeoBlock({ title, description, canonical }) {
  const safeTitle = escapeHtml(title);
  const safeDescription = escapeHtml(description);
  const safeCanonical = escapeHtml(canonical);

  return [
    `<title>${safeTitle}</title>`,
    `<meta name="description" content="${safeDescription}" />`,
    `<link rel="canonical" href="${safeCanonical}" />`,
    `<meta property="og:title" content="${safeTitle}" />`,
    `<meta property="og:description" content="${safeDescription}" />`,
    `<meta property="og:url" content="${safeCanonical}" />`,
    `<meta name="twitter:title" content="${safeTitle}" />`,
    `<meta name="twitter:description" content="${safeDescription}" />`,
  ].join("\n    ");
}

function injectSeoMetaTags(html, seo) {
  if (!seo) {
    return html;
  }

  let output = stripDuplicateSeoTags(html);
  const seoBlock = buildSeoBlock(seo);

  if (/<head[^>]*>/i.test(output)) {
    output = output.replace(/<head([^>]*)>/i, `<head$1>\n    ${seoBlock}`);
    return output;
  }

  throw new Error("Could not find <head> tag while injecting SEO metadata.");
}

function validatePrerenderedHtml(html, route) {
  const descriptionMatches = html.match(/<meta[^>]+name=["']description["'][^>]*>/gi);

  if (!descriptionMatches?.length) {
    throw new Error(`Missing meta description in prerender output for ${route}`);
  }

  if (descriptionMatches.length > 1) {
    throw new Error(
      `Expected one meta description for ${route}, found ${descriptionMatches.length}`
    );
  }

  const descriptionTag = descriptionMatches[0];
  const contentMatch = descriptionTag.match(/content=["']([^"']*)["']/i);

  if (!contentMatch?.[1]?.trim()) {
    throw new Error(`Empty meta description content in prerender output for ${route}`);
  }

  if (!/<title>[\s\S]*?<\/title>/i.test(html)) {
    throw new Error(`Missing <title> in prerender output for ${route}`);
  }

  if (!/<link[^>]+rel=["']canonical["'][^>]*>/i.test(html)) {
    throw new Error(`Missing canonical link in prerender output for ${route}`);
  }
}

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
    html = html.replaceAll(`http://localhost:${PORT}`, PRODUCTION_ORIGIN);
    html = injectSeoMetaTags(html, ROUTE_SEO[route]);
    validatePrerenderedHtml(html, route);

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
