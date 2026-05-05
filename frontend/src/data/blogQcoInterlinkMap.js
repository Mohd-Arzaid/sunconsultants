/**
 * Blog <-> QCO notification interlink mapping.
 *
 * Single source of truth for bi-directional links between product Blog pages
 * and their corresponding QCO Notification pages (rendered by
 * `NotificationDetail.jsx` at `/bis-qco-updates/:notificationName`).
 *
 * Each entry represents ONE product and contains:
 *   - productName       : display name used in the anchor text
 *   - isNumber          : IS standard number (optional, shown in parentheses)
 *   - blogUrl           : route to the Blog page
 *   - qcoUrl            : route to the QCO notification page
 *   - qcoMatchKey       : exact value of `notification.subHeading` in
 *                         notificationsData.js (used by NotificationDetail
 *                         to look up the correct blog link). Trim whitespace.
 *
 * Add a new pair here to instantly enable a bi-directional interlink.
 */

export const interlinkPairs = [
  // ===== Furniture (IS 17631 - 17636) =====
  {
    productName: "Work Chairs",
    isNumber: "IS 17631",
    blogUrl: "/blogs/isi-products/work-chairs-is-17631",
    qcoUrl: "/bis-qco-updates/bis-certificate-for-work-chairs",
    qcoMatchKey: "Work Chairs",
  },
  {
    productName: "Chairs and Stools",
    isNumber: "IS 17632",
    blogUrl: "/blogs/isi-products/chairs-and-stools-is-17632",
    qcoUrl: "/bis-qco-updates/bis-certificate-for-chairs-and-stools",
    qcoMatchKey: "General purpose chairs and stools",
  },
  {
    productName: "Tables and Desks",
    isNumber: "IS 17633",
    blogUrl: "/blogs/isi-products/tables-&-desks-is-17633",
    qcoUrl: "/bis-qco-updates/bis-certificate-for-tables-and-desks",
    qcoMatchKey: "Tables and desks",
  },
  {
    productName: "Storage Units",
    isNumber: "IS 17634",
    blogUrl: "/blogs/isi-products/storage-unit-is-17634",
    qcoUrl: "/bis-qco-updates/bis-certificate-for-storage-units",
    qcoMatchKey: "Storage units",
  },
  {
    productName: "Beds",
    isNumber: "IS 17635",
    blogUrl: "/blogs/isi-products/beds-is-17635",
    qcoUrl: "/bis-qco-updates/bis-certificate-for-beds",
    qcoMatchKey: "Beds",
  },
  {
    productName: "Bunk Beds",
    isNumber: "IS 17636",
    blogUrl: "/blogs/isi-products/bunk-beds-is-17636",
    qcoUrl: "/bis-qco-updates/bis-certificate-for-bunk-beds",
    qcoMatchKey: "Bunk beds",
  },

  // ===== Electrical / Solar =====
  {
    productName: "Electric Fence Energizers",
    isNumber: "IS 302-2-76",
    blogUrl: "/blogs/isi-products/electric-fence-energizers-is-302-2-76",
    qcoUrl: "/bis-qco-updates/bis-certificate-for-electric-fence-energizers",
    qcoMatchKey: "Electric Fence Energizers",
  },
  {
    productName: "Storage Water Tank",
    isNumber: "IS 16542",
    blogUrl: "/blogs/isi-products/solar-water-heating-systems-is-16542",
    qcoUrl: "/bis-qco-updates/bis-certificate-for-storage-water-tank",
    qcoMatchKey: "Storage Water Tank",
  },
  {
    productName: "Solar Flat Plate Collector",
    isNumber: "IS 12933",
    blogUrl: "/blogs/isi-products/solar-flat-plate-collector-is-12933",
    qcoUrl: "/bis-qco-updates/bis-certificate-for-solar-flat-plate-collector",
    qcoMatchKey: "Solar Flat Plate Collector",
  },

  // ===== Fibre / Ropes / Webbing =====
  {
    productName: "Flat Woven Webbing Slings",
    isNumber: "IS 15041",
    blogUrl: "/blogs/isi-products/flat-woven-webbing-slings-is-15041",
    qcoUrl: "/bis-qco-updates/bis-certificate-for-flat-woven-webbing-slings",
    qcoMatchKey: "Flat woven webbing slings",
  },
  {
    productName: "Manila Ropes",
    isNumber: "IS 1084",
    blogUrl: "/blogs/isi-products/manila-ropes-is-1084",
    qcoUrl: "/bis-qco-updates/bis-certificate-for-textiles-manila-ropes",
    qcoMatchKey: "Textiles — Manila Ropes",
  },
  {
    productName: "Fibre Ropes (Polyester)",
    isNumber: "IS 17609",
    blogUrl: "/blogs/isi-products/fibre-ropes-polyster-is-17609",
    qcoUrl: "/bis-qco-updates/bis-certificate-for-fibre-ropes-polyester",
    qcoMatchKey: "Fibre Ropes — Polyester",
  },
  {
    productName: "Composite Synthetic Fibre Ropes",
    isNumber: "IS 14928",
    blogUrl: "/blogs/isi-products/compsite-synthetic-fibre-ropes-is-14928",
    qcoUrl: "/bis-qco-updates/bis-certificate-for-synthetic-fibre-ropes",
    qcoMatchKey: "Synthetic Fibre Ropes",
  },
  {
    productName: "Mixed Polyolefin Fibre Ropes",
    isNumber: "IS 14929",
    blogUrl: "/blogs/isi-products/mixed-polylefin-fibre-ropes-is-14929:2022",
    qcoUrl: "/bis-qco-updates/bis-certificate-for-mixed-polyolefin-fibre-ropes",
    qcoMatchKey: "Mixed Polyolefin Fibre Ropes",
  },
  {
    productName: "Steel Wire Ropes",
    isNumber: "IS 1804",
    blogUrl: "/blogs/isi-products/steel-wire-ropes-is-1804",
    qcoUrl: "/bis-qco-updates/bis-certificate-for-steel-wire-ropes-fibre-main-cores",
    qcoMatchKey: "Steel wire ropes – Fibre main cores",
  },
  {
    productName: "Fibre Ropes (Polyamide)",
    isNumber: "IS 4572",
    blogUrl: "/blogs/isi-products/fibre-ropes-polyamide-is-4572",
    qcoUrl: "/bis-qco-updates/bis-certificate-for-fibre-ropes-polyamide",
    qcoMatchKey:
      "Fibre Ropes — Polyamide — 3-, 4-, 8- and 12- Strand Ropes.",
  },
  {
    productName: "Fibre Ropes (Polyethylene)",
    isNumber: "IS 8674",
    blogUrl: "/blogs/isi-products/fibre-ropes-polyethylene-8674",
    qcoUrl: "/bis-qco-updates/bis-certificate-for-fibre-ropes-polyethylene",
    qcoMatchKey: "Fibre Ropes Polyethylene",
  },

  // ===== Hand Tools (Wrenches / Pliers) =====
  {
    productName: "Chain Pipe Wrenches",
    isNumber: "IS 4123",
    blogUrl: "/blogs/isi-products/chain-pipe-wrenches-is-4123",
    qcoUrl: "/bis-qco-updates/bis-certificate-for-chain-pipe-wrenches",
    qcoMatchKey: "Chain Pipe Wrenches",
  },
  {
    productName: "Single-Ended Open-Jaw Adjustable Wrenches",
    isNumber: "IS 6149",
    blogUrl: "/blogs/isi-products/adjustable-wrenches-is-6149",
    qcoUrl:
      "/bis-qco-updates/bis-certificate-for-single-ended-open-jaw-adjustable-wrenches",
    qcoMatchKey: "Open-jaw Adjustable Wrenches.",
  },
  {
    productName: "Open-Jaw Wrenches",
    isNumber: "IS 2028",
    blogUrl: "/blogs/isi-products/open-jaw-wrenches-is-2028",
    qcoUrl: "/bis-qco-updates/bis-certificate-for-open-jaw-wrenches",
    qcoMatchKey: "Open-Jaw Wrenches",
  },
  {
    productName: "Ring Wrenches",
    isNumber: "IS 2029",
    blogUrl: "/blogs/isi-products/ring-wrenches-is-2029",
    qcoUrl: "/bis-qco-updates/bis-certificate-for-ring-wrenches",
    qcoMatchKey: "Ring Wrenches",
  },
  {
    productName: "Pipe Wrenches",
    isNumber: "IS 4003",
    blogUrl: "/blogs/isi-products/pipe-wrenches-is-4003",
    qcoUrl: "/bis-qco-updates/bis-certificate-for-pipe-wrenches-general-purpose",
    qcoMatchKey: "Pipe Wrenches – Heavy Duty",
  },
  {
    productName: "Combination Side Cutting Pliers",
    isNumber: "IS 3650",
    blogUrl: "/blogs/isi-products/combination-side-cutting-pliers-is-3650",
    qcoUrl: "/bis-qco-updates/bis-certificate-for-combination-side-cutting-pliers",
    qcoMatchKey: "Combination Side Cutting Pliers",
  },
  {
    productName: "Cross-recessed Countersunk Head Wood Screws",
    isNumber: "IS 18509",
    blogUrl: "/blogs/isi-products/cross-recessed-countersunk-head-wood-screws",
    qcoUrl:
      "/bis-qco-updates/bis-certificate-for-cross-recessed-countersunk-head-wood-screws-specification",
    qcoMatchKey: "Cross-recessed Countersunk Head Wood Screws – Specification",
  },
  {
    productName: "Drywall Screws",
    isNumber: "IS 18507:2024",
    blogUrl: "/blogs/isi-products/drywall-screws-is-18507",
    qcoUrl:
      "/bis-qco-updates/bis-certificate-for-drywall-screws-specification",
    qcoMatchKey: "Drywall Screws – Specification",
  },
  {
    productName: "Chipboard Screws – Specification",
    isNumber: "IS 18508:2024",
    blogUrl: "/blogs/isi-products/chipboard-screws-is-18508",
    qcoUrl:
      "/bis-qco-updates/bis-certificate-for-chipboard-screws-specification",
    qcoMatchKey: "Chipboard Screws – Specification",
  },
  {
    productName: "Raised Countersunk Head Screws",
    isNumber: "IS 7486:2018",
    blogUrl: "/blogs/isi-products/raised-countersunk-head-screws-is-7486",
    qcoUrl:
      "/bis-qco-updates/bis-certificate-for-raised-countersunk-head-screws-common-head-style-with-type-h-or-type-z-cross-recess-product-grade-a",
    qcoMatchKey:
      "Raised countersunk head screws (Common Head Style) with type H or type Z cross recess – Product grade A.",
  },
  {
    productName:
      "Pan Head Screws With Type H or Type Z Cross Recess – Product Grade A",
    isNumber: "IS 7483:2018",
    blogUrl: "/blogs/isi-products/pan-head-screws-is-7483",
    qcoUrl:
      "/bis-qco-updates/bis-certificate-for-pan-head-screws-with-type-h-or-type-z-cross-recess-product-grade-a",
    qcoMatchKey:
      "Pan Head Screws With Type H or Type Z Cross Recess – Product Grade A.",
  },
  {
    productName:
      "Cross Recessed Tapping Screw Part 3 Raised Countersunk Oval Head",
    isNumber: "IS 18480 (Part 3):2023",
    blogUrl: "/blogs/isi-products/tapping-screws-oval-head-is-18480-part-3",
    qcoUrl:
      "/bis-qco-updates/bis-certificate-for-cross-recessed-tapping-screw-part-3-raised-countersunk-oval-head",
    qcoMatchKey: "Cross Recessed Tapping Screw Part 3 Raised Countersunk Oval Head",
  },
];

/**
 * Lookup maps (derived from interlinkPairs).
 *
 * blogToQco: indexed by blogUrl -> pair object.
 * qcoByKey : indexed by qcoMatchKey (normalized) -> pair object.
 */

const normalizeKey = (str) =>
  (str || "").trim().toLowerCase().replace(/\s+/g, " ");

export const blogToQco = interlinkPairs.reduce((acc, p) => {
  acc[p.blogUrl] = p;
  return acc;
}, {});

export const qcoByMatchKey = interlinkPairs.reduce((acc, p) => {
  acc[normalizeKey(p.qcoMatchKey)] = p;
  return acc;
}, {});

/**
 * Look up the interlink pair for a notification based on its subHeading.
 * The subHeading is trimmed/lowercased to handle minor whitespace or case
 * variations in the notification data.
 */
export const getPairForNotification = (subHeading) =>
  qcoByMatchKey[normalizeKey(subHeading)] || null;

/**
 * Look up the interlink pair for a blog based on its route path.
 */
export const getPairForBlog = (blogUrl) => blogToQco[blogUrl] || null;
