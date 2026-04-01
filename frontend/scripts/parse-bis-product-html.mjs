/**
 * One-off: reads pasted BIS page HTML mistakenly saved as productTableData2.js,
 * parses desktop <tbody> rows (skips duplicate .mobile table), writes valid JS export.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputPath = path.join(
  __dirname,
  "../src/data/productTableData/productTableData2.js"
);

const raw = fs.readFileSync(inputPath, "utf8");

const mobileIdx = raw.indexOf('<div class="mobile">');
const slice = mobileIdx >= 0 ? raw.slice(0, mobileIdx) : raw;

const tbodyStart = slice.indexOf("<tbody>");
if (tbodyStart === -1) {
  console.error("No <tbody> found — file may already be structured JSON/JS.");
  process.exit(1);
}
const htmlBlock = slice.slice(tbodyStart);

function decodeEnt(s) {
  return s
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) =>
      String.fromCharCode(parseInt(h, 16))
    );
}

function stripTags(html) {
  if (!html) return "";
  return decodeEnt(html.replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
}

function extractCells(trInner) {
  const cells = [];
  let pos = 0;
  const lower = trInner;
  while (pos < lower.length) {
    const tdIdx = lower.indexOf("<td", pos);
    const thIdx = lower.indexOf("<th", pos);
    let start = -1;
    let closeTag = "</td>";
    if (tdIdx >= 0 && (thIdx < 0 || tdIdx <= thIdx)) {
      start = tdIdx;
      closeTag = "</td>";
    } else if (thIdx >= 0) {
      start = thIdx;
      closeTag = "</th>";
    } else break;
    const gt = trInner.indexOf(">", start);
    if (gt === -1) break;
    const attrs = trInner.slice(start, gt + 1);
    const end = trInner.indexOf(closeTag, gt + 1);
    if (end === -1) break;
    cells.push({ attrs, inner: trInner.slice(gt + 1, end) });
    pos = end + closeTag.length;
  }
  return cells;
}

function getRowspan(attrs) {
  const m = /rowspan\s*=\s*["']?(\d+)/i.exec(attrs);
  return m ? parseInt(m[1], 10) : 1;
}

function getColspan(attrs) {
  const m = /colspan\s*=\s*["']?(\d+)/i.exec(attrs);
  return m ? parseInt(m[1], 10) : 1;
}

function parseNotification(html) {
  if (!html || !stripTags(html)) return null;
  const anchors = [];
  const re = /<a[^>]+href\s*=\s*"([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
  let m;
  while ((m = re.exec(html))) {
    anchors.push({ link: m[1], linkText: stripTags(m[2]).trim() });
  }
  const beforeFirst = html.split(/<a[^>]*\s+href/i)[0];
  let title = stripTags(beforeFirst).replace(/\s+/g, " ").trim();
  if (!title) title = stripTags(html).slice(0, 220).trim();

  if (anchors.length === 0) {
    const t = stripTags(html).trim();
    if (!t) return null;
    return { title: t.slice(0, 300), notificationText: t };
  }
  if (anchors.length === 1) {
    return {
      title: title || anchors[0].linkText,
      link: anchors[0].link,
      linkText: anchors[0].linkText,
    };
  }
  return {
    title: title || anchors[0].linkText,
    link: anchors[0].link,
    linkText: anchors[0].linkText,
    amendments: anchors.slice(1).map((a) => ({
      link: a.link,
      text: a.linkText,
    })),
  };
}

function isDeNotifiedInner(inner) {
  return (
    /rgb\s*\(\s*163\s*,\s*0\s*,\s*0/i.test(inner) ||
    /De-notified/i.test(inner) ||
    /Withdrawal of/i.test(stripTags(inner))
  );
}

function slug(s) {
  return (
    s
      .replace(/[^a-z0-9]+/gi, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 48)
      .toLowerCase() || "sec"
  );
}

const trRe = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
const rows = [];
let pendingNotification = null;
let rowspanLeft = 0;
let productId = 1;
let sectionCounter = 0;

let match;
while ((match = trRe.exec(htmlBlock))) {
  const trInner = match[1];
  const cells = extractCells(trInner);
  if (cells.length === 0) continue;

  if (cells.length === 1 && getColspan(cells[0].attrs) >= 4) {
    const t = stripTags(cells[0].inner).trim();
    if (t) {
      sectionCounter++;
      rows.push({
        id: `section-${slug(t)}-${sectionCounter}`,
        sno: " ",
        isNumber: t,
        product: t,
        isSectionHeader: true,
        sectionTitle: t,
      });
    }
    continue;
  }

  if (cells.length === 2 && getColspan(cells[0].attrs) === 3) {
    const t = stripTags(cells[0].inner).trim();
    if (t) {
      sectionCounter++;
      rows.push({
        id: `section-${slug(t)}-${sectionCounter}`,
        sno: " ",
        isNumber: t,
        product: t,
        isSectionHeader: true,
        sectionTitle: t,
      });
    }
    continue;
  }

  if (cells.length < 3) continue;

  const c0 = stripTags(cells[0].inner).trim();
  const c1 = stripTags(cells[1].inner).trim();
  const c2 = stripTags(cells[2].inner).trim();

  if (!c1 && !c2) continue;

  let notification = null;
  if (cells.length >= 4) {
    const rs = getRowspan(cells[3].attrs);
    notification = parseNotification(cells[3].inner);
    pendingNotification = notification;
    rowspanLeft = Math.max(rs - 1, 0);
  } else {
    notification = pendingNotification;
    if (rowspanLeft > 0) rowspanLeft--;
  }

  const snoRaw = c0.replace(/\s+/g, "");
  const snoNum = parseInt(snoRaw.replace(/\.$/, ""), 10);
  const sno = Number.isFinite(snoNum) ? snoNum : c0 || " ";

  const entry = {
    id: productId++,
    sno,
    isNumber: c1,
    product: c2,
  };
  if (notification && Object.keys(notification).length > 0) {
    entry.notification = notification;
  }
  if (
    isDeNotifiedInner(cells[1].inner) ||
    isDeNotifiedInner(cells[2].inner)
  ) {
    entry.isDeNotified = true;
  }

  rows.push(entry);
}

const header = `// =============================================================================
// BIS compulsory products — parsed from pasted HTML (desktop table only).
// To re-parse: save raw HTML as this file, run: node scripts/parse-bis-product-html.mjs
// =============================================================================

export const productTableData2 = `;

const out = `${header}${JSON.stringify(rows, null, 2)};\n`;
fs.writeFileSync(inputPath, out, "utf8");
console.log("OK: wrote", rows.length, "rows to productTableData2.js");
