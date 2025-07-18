// SEO Utilities for handling canonical URLs and duplicate content

/**
 * Generate canonical URL for given path
 * @param {string} path - URL path
 * @param {string} domain - Base domain
 * @returns {string} Canonical URL
 */
export const generateCanonicalUrl = (path, domain = 'https://www.bis-certifications.com') => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Ensure HTTPS and www
  return `${domain}/${cleanPath}`;
};

/**
 * Middleware to add canonical headers
 */
export const addCanonicalHeaders = (req, res, next) => {
  const canonicalUrl = generateCanonicalUrl(req.path);
  
  // Add canonical header
  res.set('Link', `<${canonicalUrl}>; rel="canonical"`);
  
  // Add other SEO headers
  res.set('X-Robots-Tag', 'index, follow');
  
  next();
};

/**
 * Redirect non-canonical URLs to canonical version
 */
export const enforceCanonicalUrl = (req, res, next) => {
  const host = req.get('host');
  const protocol = req.protocol;
  const originalUrl = req.originalUrl;
  
  // Define canonical domain
  const canonicalDomain = 'www.bis-certifications.com';
  const canonicalProtocol = 'https';
  
  // Check if redirect is needed
  let needsRedirect = false;
  let redirectUrl = '';
  
  // Force HTTPS
  if (protocol !== canonicalProtocol) {
    needsRedirect = true;
  }
  
  // Force www
  if (host !== canonicalDomain) {
    needsRedirect = true;
  }
  
  if (needsRedirect) {
    redirectUrl = `${canonicalProtocol}://${canonicalDomain}${originalUrl}`;
    return res.redirect(301, redirectUrl);
  }
  
  next();
};

/**
 * Generate sitemap with canonical URLs
 */
export const generateSitemapUrls = (routes) => {
  return routes.map(route => ({
    url: generateCanonicalUrl(route.path),
    lastmod: route.lastmod || new Date().toISOString().split('T')[0],
    changefreq: route.changefreq || 'monthly',
    priority: route.priority || '0.8'
  }));
};

/**
 * PDF file canonical URL generator
 */
export const generatePdfCanonicalUrl = (filename) => {
  const basePath = 'pdf';
  const cleanFilename = filename.replace(/[^a-zA-Z0-9.-]/g, '-').toLowerCase();
  return generateCanonicalUrl(`${basePath}/${cleanFilename}`);
};

/**
 * Robots.txt rules for duplicate content
 */
export const robotsTxtRules = `
User-agent: *
Allow: /

# Canonical URLs only
Disallow: /*?*
Disallow: /http:*
Disallow: /*utm_*

# PDF files - allow indexing
Allow: /pdf/*.pdf

# Sitemap location
Sitemap: https://www.bis-certifications.com/sitemap.xml

# Crawl delay
Crawl-delay: 1
`;

export default {
  generateCanonicalUrl,
  addCanonicalHeaders,
  enforceCanonicalUrl,
  generateSitemapUrls,
  generatePdfCanonicalUrl,
  robotsTxtRules
};