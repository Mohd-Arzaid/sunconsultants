import { Helmet } from "react-helmet-async";

/**
 * Global Schema.org Organization Schema with AggregateRating
 * This adds star rating to Google search results
 */
const OrganizationSchema = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sun Certifications India",
    url: "https://bis-certifications.com",
    logo: "https://bis-certifications.com/company-logo/company-logo.webp",
    description:
      "Sun Certifications was founded in 2016, and for more than a decade, we have been assisting companies to comply with various kinds of Indian certifications like BIS certificate for Indian manufacturers, BIS certification for foreign/global manufacturers, BIS Scheme X certification, LMPC certificate, EPR certificate, WPC certificate, etc.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "M-15, Phase 1, Badli Industrial Estate",
      addressLocality: "Delhi",
      addressRegion: "Delhi",
      postalCode: "110042",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8010505057",
      contactType: "customer service",
      email: "suncertificationsindia@gmail.com",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "58042",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [
      "https://www.linkedin.com/company/sun-certifications-india/",
      "https://www.instagram.com/suncertificationsindia",
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};

export default OrganizationSchema;
