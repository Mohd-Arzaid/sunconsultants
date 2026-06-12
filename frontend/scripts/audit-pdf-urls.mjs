import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const dataPath = path.join(rootDir, "src/data/notificationsData.js");
const pdfDir = path.join(rootDir, "public/pdf");

const SKIPPED_URL = "/pdf/sun-certification-countersunk-flat-head-screws.pdf";

const MANUAL_MAP = {
  "sun-certification-aluminium-alloy-forging-stock-and-forgings.pdf":
    "bis-qco-for-aluminium-alloy-forging-stock-and-forgings-alloy-24345-for-aerospace-applications.pdf",
  "sun-certification-countersunk-flat-head-screws-common-head-style-with-type-h-or-type-z-cross-recess-product-grade-a-part-1-steel-screws-of-property-class-4.8.pdf":
    "bis-qco-for-countersunk-flat-head-screws-common-head-style-with-type-h-or-type-z-cross-recess-product-grade-a-part-1-steel-screws-of-property-class-48.pdf",
  "sun-certification-hdpe-pp-woven-sacks-for-packaging-fertilizers.pdf":
    "bis-qco-for-hdpepp-woven-sacks-for-packaging-fertilizers.pdf",
  "sun-certification-hdpe-pp-woven-sacks-for-packaging-of-25-kg-polymer-materials.pdf":
    "bis-qco-for-hdpepp-woven-sacks-for-packaging-of-25-kg-polymer-materials.pdf",
  "sun-certification-primary-aluminum-ingots-for-remelting.pdf":
    "bis-qco-for-primary-aluminium-ingots-for-remelting.pdf",
  "sun-certification-electrical-appliances-for-skin-and-hair-care.pdf":
    "bis-qco-for-electrical-appliances-for-skin-or-hair-care.pdf",
  "sun-certification-water-meter-and-accessories.pdf":
    "bis-qco-for-bis-notification-water-meter-and-accessories.pdf",
  "sun-certification-dental-bib-napkins.pdf":
    "bis-qco-for-dental-bibnapkins.pdf",
  "sun-certification-electric-cable-for-photovoltaic-1.pdf":
    "bis-qco-for-electric-cable-for-photovoltaic.pdf",
};

function mapUrl(url) {
  if (url === SKIPPED_URL) return url;

  const filename = url.replace("/pdf/", "");
  if (MANUAL_MAP[filename]) {
    return `/pdf/${MANUAL_MAP[filename]}`;
  }
  if (filename.startsWith("sun-certification-")) {
    return `/pdf/${filename.replace("sun-certification-", "bis-qco-for-")}`;
  }
  return url;
}

const content = fs.readFileSync(dataPath, "utf8");
const urls = [...content.matchAll(/"\/pdf\/[^"]+\.pdf"/g)].map((m) =>
  m[0].slice(1, -1)
);
const pdfFiles = new Set(
  fs.readdirSync(pdfDir).filter((f) => f.endsWith(".pdf"))
);

const ok = [];
const skipped = [];
const broken = [];

for (const url of urls) {
  if (url === SKIPPED_URL) {
    skipped.push(url);
    continue;
  }

  const filename = url.replace("/pdf/", "");
  if (pdfFiles.has(filename)) {
    ok.push(url);
  } else {
    broken.push({ url, expectedFile: filename });
  }
}

console.log(`Total pdfUrls: ${urls.length}`);
console.log(`OK (file exists): ${ok.length}`);
console.log(`Skipped (id 45): ${skipped.length}`);
console.log(`Broken: ${broken.length}`);

if (broken.length > 0) {
  console.log("\nBroken URLs:");
  broken.forEach(({ url, expectedFile }) => {
    console.log(`  ${url}`);
    console.log(`    missing file: ${expectedFile}`);
  });
  process.exit(1);
}

if (ok.length !== 141 || skipped.length !== 1) {
  console.error(
    `\nUnexpected counts. Expected 141 OK and 1 skipped, got ${ok.length} OK and ${skipped.length} skipped.`
  );
  process.exit(1);
}

console.log("\nAll pdfUrl entries verified successfully.");
