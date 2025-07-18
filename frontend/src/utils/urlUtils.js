/**
 * Converts a title to a URL-friendly slug
 * @param {string} title - The title to convert
 * @returns {string} The URL-friendly slug
 */
export const getUrlSlug = (title) => {
  // Remove common prefixes like "BIS certification for", "BIS Notification for", etc.
  let cleanTitle = title
    .replace(/^BIS\s+(certification|notification)\s+for\s+/i, "") // Remove "BIS certification for" or "BIS Notification for"
    .replace(/^QCO\s+notification\s+for\s+/i, "") // Remove "QCO notification for"
    .trim();

  // Convert to kebab-case
  return cleanTitle
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special characters except spaces and hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .trim(); // Remove leading/trailing spaces
};

/**
 * Generates a notification detail URL
 * @param {string} title - The notification title
 * @param {boolean} isLegacyRoute - Whether to use legacy route format
 * @returns {string} The full URL path
 */
export const getNotificationDetailUrl = (title, isLegacyRoute = false) => {
  const slug = getUrlSlug(title);
  if (isLegacyRoute) {
    return `/latest-notification/bis-certificate-for-${slug}`;
  }
  return `/bis-qco-updates/bis-certificate-for-${slug}`;
};

/**
 * Generates a canonical URL for a notification
 * @param {string} title - The notification title
 * @param {string} baseUrl - The base URL of the site
 * @param {boolean} isLegacyRoute - Whether to use legacy route format
 * @returns {string} The full canonical URL
 */
export const getNotificationCanonicalUrl = (
  title,
  baseUrl = "https://bis-certifications.com",
  isLegacyRoute = false
) => {
  return `${baseUrl}${getNotificationDetailUrl(title, isLegacyRoute)}`;
};
