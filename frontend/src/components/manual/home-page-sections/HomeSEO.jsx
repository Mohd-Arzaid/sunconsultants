import { Helmet } from "react-helmet-async";

const HomeSEO = () => {
  return (
    <Helmet>
      <title>
        BIS Certification Consultants in India | ISI Mark, FMCS, CRS, EPR
      </title>
      <meta
        name="description"
        content="
     Sun Certifications is one of the top BIS Certification Consultant in Delhi, India, one stop solutions for all kinds of Technical Certification & Regulatory Compliances, including BIS Registration, ISI Certification, WPC Approval, EPR Registration and more.
          "
      />
      <meta
        name="keywords"
        content="BIS certification, CDSCO, LMPC certificate, EPR certificate, FMCS license, PESO license, ISI mark, BIS registration"
      />
      <meta name="author" content="Sun Certifications India" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph Tags */}
      <meta
        property="og:title"
        content=" Sun Certifications was founded in 2013, and for more than a decade, we have been assisting companies to comply with various kinds of Indian certifications like BIS certificate for Indian manufacturers, BIS certification for foreign/global manufacturers, BIS Scheme X certification, LMPC certificate, EPR certificate, WPC certificate, etc.
          "
      />
      <meta
        property="og:description"
        content="Sun Certifications is the best BIS certification Certifications in India. We provide comprehensive certification services for Indian and foreign manufacturers."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:site_name" content="Sun Certifications India" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@CertificationsSun" />
      <meta
        name="twitter:title"
        content="BIS Certification| FMCS | ISI Mark | LMPC | EPR | CDSCO"
      />

      <meta
        name="twitter:description"
        content="Sun Certifications was founded in 2013, and for more than a decade, we have been assisting companies to comply with various kinds of Indian certifications like BIS certificate for Indian manufacturers, BIS certification for foreign/global manufacturers, BIS Scheme X certification, LMPC certificate, EPR certificate, WPC certificate, etc.
          "
      />

      {/* Canonical URL */}
      <link rel="canonical" href={window.location.href} />
      <meta name="robots" content="index, follow" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Sun Certifications India",
          url: "https://bis-certifications.com",
          logo: "https://bis-certifications.com/company-logo/company-logo.webp",
          description:
            "Sun Certifications was founded in 2013, and for more than a decade, we have been assisting companies to comply with various kinds of Indian certifications like BIS certificate for Indian manufacturers, BIS certification for foreign/global manufacturers, BIS Scheme X certification, LMPC certificate, EPR certificate, WPC certificate, etc.",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "505, PLOT NO-E-1,2,3, AGGARWAL MILLENNIUM TOWER-1 PITAMPURA",
            addressLocality: "NETAJI SUBHASH PLACE WEST DELHI",
            addressRegion: "DELHI",
            postalCode: "110034",
            addressCountry: "IN",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-8010505057",
            contactType: "customer service",
            email: "info@sunconsultants.co.in",
          },
          sameAs: ["https://twitter.com/CertificationsSun"],
        })}
      </script>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Certification Services",
          provider: {
            "@type": "Organization",
            name: "Sun Certifications India",
          },
          areaServed: {
            "@type": "Country",
            name: "India",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Certification Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "BIS Certification",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "CDSCO Registration",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "LMPC Certificate",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "EPR Certificate",
                },
              },
            ],
          },
        })}
      </script>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is BIS Certification?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "BIS Certification is a mandatory certification for products sold in India...",
              },
            },
          ],
        })}
      </script>
    </Helmet>
  );
};

export default HomeSEO;
