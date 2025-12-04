import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { MailPlus, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState, useMemo } from "react";

// FAQ questions with their corresponding routes
// Moved outside component to prevent recreation on every render
const faqQuestions = [
  // Question 1
  {
    question: "How to check BIS certification?",
    path: "/check-bis-certification",
  },
  // Question 2
  {
    question: "How to get BIS certification?",
    path: "/get-bis-certification",
  },
  // Question 3
  {
    question: "How to check BIS certification online?",
    path: "/check-bis-certification-online",
  },
  // Question 4
  {
    question: "How much does BIS certification cost?",
    path: "/bis-certification-cost",
  },
  // Question 5
  {
    question: "How to get BIS certification in India?",
    path: "/get-bis-certification-in-india",
  },
  // Question 6
  {
    question: "How to apply BIS certification?",
    path: "/apply-bis-certification",
  },
  // Question 7
  {
    question: "How to verify BIS certification?",
    path: "/verify-bis-certification",
  },
  // Question 8
  {
    question: "Download BIS Certificate Online",
    path: "/download-bis-certificate-online",
  },
  // Question 9
  {
    question: "How to Import without bis certificate?",
    path: "/import-without-bis-certificate",
  },
  // Question 10
  {
    question: "Can importer apply for BIS Certificate in India?",
    path: "/importer-apply-for-bis-certificate-in-india",
  },
  // Question 11
  {
    question: "Who can issue BIS Certificate in India?",
    path: "/issue-bis-certificate",
  },
  // Question 12
  {
    question: "Who can get BIS Certificate in India?",
    path: "/get-bis-certificate",
  },
  // Question 13
  {
    question: "Can a Trader get BIS Certificate in India?",
    path: "/trader-get-bis-certificate",
  },
  // Question 14
  {
    question: "Who can apply for BIS Certificate in India?",
    path: "/apply-bis-certificate",
  },
  // Question 15
  {
    question: "How to Get BIS Certificate in India?",
    path: "/how-to-get-bis-certificate",
  },
  // Question 16
  {
    question: "How to check BIS certificate online?",
    path: "/how-to-check-bis-certificate-online",
  },
  // Question 17
  {
    question: "How to download BIS certificate from manakonline?",
    path: "/download-bis-certificate-manakonline",
  },
  // Question 18
  {
    question: "How to download BIS Certificate?",
    path: "/how-to-download-bis-certificate",
  },
  // Question 19
  {
    question: "how to get BIS Certificate for import?",
    path: "/bis-certificate-import",
  },
  // Question 20
  {
    question: "How to get BIS certificate for import in india?",
    path: "/bis-certificate-for-import-in-india",
  },
  // Question 21
  {
    question: "BIS Certificate who can apply?",
    path: "/bis-certificate-who-can-apply",
  },
  // Question 22
  {
    question: "BIS certificate for import cost?",
    path: "/bis-certificate-for-import-cost",
  },
  // Question 23
  {
    question: "BIS certificate vs ISO certificate?",
    path: "/bis-certificate-vs-iso-certificate",
  },
  // Question 24
  {
    question: "Can BIS Hallmark Be Fake?",
    path: "/can-bis-hallmark-be-fake",
  },
  // Question 25
  {
    question: "Difference between BIS and ISI?",
    path: "/bis-isi-difference",
  },
  // Question 26
  {
    question: "Difference between BIS and ISO?",
    path: "/bis-and-iso-difference",
  },
  // Question 27
  {
    question: "BIS vs ISI?",
    path: "/bis-vs-isi",
  },
  // Question 28
  {
    question: "BIS vs ISO?",
    path: "/bis-vs-iso",
  },
  // Question 29
  {
    question: "Can Foreign Companies Get BIS Certification?",
    path: "/can-foreign-companies-get-bis-certification",
  },
];

const Faqs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter FAQs based on search term
  const filteredFaqQuestions = useMemo(() => {
    if (!searchTerm.trim()) return faqQuestions;

    return faqQuestions.filter((faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, faqQuestions]);

  return (
    <>
      <FaqsMetaTags />
      <div className="bg-white">
        {/* Hero Section */}
        <div className="bg-white pt-10">
          <div className="max-w-[88rem] mx-auto px-4 md:px-12">
            <h1 className="text-4xl md:text-5xl font-geist font-semibold text-neutral-800 text-center tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="mt-3 max-w-3xl mx-auto text-lg text-center md:text-xl text-neutral-500 font-geist leading-relaxed">
              {/* Find answers to the most common questions about BIS certification,
              application processes, verification, and more. Click on any
              question to learn more. */}
              We&apos;ve compiled answers to the most frequently asked questions
              about BIS certification. Whether you&apos;re looking to understand
              the application process, verify a certificate, or learn about
              costs and requirements, you&apos;ll find detailed information
              below.
            </p>

            {/* Search Bar */}
            <div className="mt-8 max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent font-geist text-neutral-700 placeholder-neutral-400"
                />
              </div>
              {searchTerm && (
                <p className="mt-2 text-neutral-500 font-geist text-center">
                  {filteredFaqQuestions.length} results found
                </p>
              )}
            </div>
          </div>
        </div>

        {/* FAQs Content */}
        <div className="max-w-[88rem] mx-auto px-4 md:px-12 pt-8 md:pt-10 pb-12">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            {/* <div className="mb-10 md:mb-12">
              <p className="text-lg md:text-xl text-center text-neutral-600 font-geist leading-relaxed">
                We&apos;ve compiled answers to the most frequently asked
                questions about BIS certification. Whether you&apos;re looking
                to understand the application process, verify a certificate, or
                learn about costs and requirements, you&apos;ll find detailed
                information below.
              </p>
            </div> */}

            {/* FAQs List */}
            <div className="mb-10 md:mb-12">
              <div className="flex justify-between items-center mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl font-geist font-semibold text-neutral-800">
                  Common Questions About BIS Certification
                </h2>
              </div>
              <div className="space-y-4">
                {filteredFaqQuestions.map((faq, index) => (
                  <Link
                    key={index}
                    to={faq.path}
                    className="block bg-white border border-neutral-200 rounded-lg p-5 md:p-6 hover:border-neutral-400 hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-neutral-700 mr-4 mt-3 shrink-0 group-hover:bg-neutral-900 transition-colors duration-200"></span>
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-geist font-medium text-neutral-800 group-hover:text-neutral-900 transition-colors duration-200 leading-relaxed">
                          {faq.question}
                        </h3>
                      </div>
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 text-neutral-400 group-hover:text-neutral-600 group-hover:translate-x-1 transition-all duration-200 shrink-0 mt-1"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12 md:mt-16 p-8 md:p-12 bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-lg border border-neutral-200">
              <h3 className="text-xl md:text-2xl font-geist font-semibold text-neutral-800 mb-4">
                Still Have Questions?
              </h3>
              <p className="text-base md:text-lg text-neutral-600 font-geist leading-relaxed mb-6">
                Can&apos;t find the answer you&apos;re looking for? Our
                certification experts are here to help you with any questions
                about BIS certification.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-neutral-800 text-white font-geist font-medium rounded-lg hover:bg-neutral-700 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Faqs;

const FaqsMetaTags = () => {
  const title =
    "BIS Certification FAQs - Frequently Asked Questions | Sun Certifications India";
  const description =
    "Find answers to the most common questions about BIS certification, application processes, verification, costs, and requirements. Get expert guidance on BIS certification FAQs.";
  const keywords =
    "BIS certification FAQs, BIS certificate questions, BIS certification process, BIS certificate verification, BIS certification cost, BIS certificate application, BIS certification requirements, BIS certificate online, BIS certification India";
  const canonicalUrl = "https://bis-certifications.com/faqs";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";
  const ogTitle = "BIS Certification FAQs - Frequently Asked Questions";
  const ogDescription =
    "Get answers to common BIS certification questions. Learn about application processes, verification, costs, and requirements for BIS certification in India.";
  const twitterTitle = "BIS Certification FAQs - Your Questions Answered";
  const twitterDescription =
    "Find comprehensive answers to frequently asked questions about BIS certification, application processes, and requirements.";

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://bis-certifications.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "FAQs",
        item: canonicalUrl,
      },
    ],
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How to check BIS certification?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To verify a BIS approval, you'll need either the ISI license number (CM/L) for products under the ISI Scheme or the Registration number (R-number) for products under the CRS scheme, together with the brand and the exact model/variant. Go to bis.gov.in, open the verification section, and search by CM/L or R-number. A valid listing shows the licensee/manufacturer, brand, model, Indian Standard (IS), and the current status.",
        },
      },
      {
        "@type": "Question",
        name: "How to get BIS certification?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To get BIS certification, you need to apply through the BIS portal, submit required documents including test reports, undergo product testing at BIS-approved laboratories, complete factory inspection, and obtain the certificate upon approval. The process involves identifying the applicable Indian Standard (IS), preparing documentation, selecting a BIS-recognized laboratory for testing, and completing the application process.",
        },
      },
      {
        "@type": "Question",
        name: "How to check BIS certification online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can check BIS certification online through the BIS portal (bis.gov.in or manakonline.bis.gov.in) using the certificate number, CM/L number, or R-number. Simply enter the details on the verification page to view the certificate status, licensee/manufacturer information, brand, model, Indian Standard (IS), and current validity status.",
        },
      },
      {
        "@type": "Question",
        name: "How much does BIS certification cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BIS certification cost depends on the scheme (ISI vs CRS), the product standard, and the number of models/variants. Costs include laboratory testing fees, application/processing fees, marking or registration charges, audits/surveillance fees (for ISI), sample logistics, and optional professional support. Testing is usually the biggest cost driver, varying with safety and EMC scope, number of samples, and any re-tests. Always obtain a written quotation aligned to your exact IS standard and model list.",
        },
      },
      {
        "@type": "Question",
        name: "How to get BIS certification in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To get BIS certification in India, you need to apply through the BIS portal, submit required documents, undergo product testing at BIS-approved labs, and complete the factory inspection. The process typically takes 30-90 days depending on the product category. Begin by identifying the applicable Indian Standard (IS) and confirming whether your product falls under the ISI Scheme or the Compulsory Registration Scheme (CRS).",
        },
      },
      {
        "@type": "Question",
        name: "How to apply BIS certification?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To apply for BIS certification, register on the BIS portal, select your product category, submit the application form with required documents, arrange product testing at BIS-approved labs, and schedule factory inspection. Prepare a complete dossier including drawings/specs, BOM, safety-critical components, user manuals, declarations, quality system evidence, and labeling artwork that correctly references the IS.",
        },
      },
      {
        "@type": "Question",
        name: "How to verify BIS certification?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can verify BIS certification by checking the certificate number, CM/L number, or R-number on the BIS portal (manakonline.bis.gov.in). The verification will show certificate validity, product details, manufacturer information, brand, model, Indian Standard (IS) reference, and current status. Cross-check packaging/labeling with the database entry to ensure the model string, brand, and IS reference match exactly.",
        },
      },
      {
        "@type": "Question",
        name: "Download BIS Certificate Online",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can download BIS Certificate by logging into the BIS portal (manakonline.bis.gov.in) with your credentials, accessing your certificate section, and downloading the PDF. Navigate to your certificates section, select the certificate you want to download, and click the download button to get the PDF version. You can also request a copy from BIS if needed.",
        },
      },
      {
        "@type": "Question",
        name: "How to Import without bis certificate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Importing products without BIS certificate is not allowed for products under mandatory BIS certification. Such imports may be rejected at customs, and penalties may apply. It's mandatory to obtain BIS certification before importing covered products to India. Products under the Compulsory Registration Scheme (CRS) or ISI Scheme require valid BIS certification for import clearance.",
        },
      },
      {
        "@type": "Question",
        name: "Can importer apply for BIS Certificate in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, importers can apply for BIS Certificate in India on behalf of foreign manufacturers. The importer acts as an authorized representative (Authorized Indian Representative - AIR) and must submit all required documents and complete the certification process. For overseas manufacturers, appointing an AIR is mandatory to liaise with BIS, receive communications, and ensure compliance in India.",
        },
      },
      {
        "@type": "Question",
        name: "Who can issue BIS Certificate in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BIS (Bureau of Indian Standards) is the authorized body that issues BIS Certificates in India. BIS is the national standards body responsible for product certification and quality assurance under the BIS Act, 2016. BIS issues certificates under various schemes including the ISI Scheme (with CM/L number) and the Compulsory Registration Scheme (CRS) with R-number for electronics/IT products.",
        },
      },
      {
        "@type": "Question",
        name: "Who can get BIS Certificate in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Manufacturers (both Indian and foreign), importers, and authorized representatives can get BIS Certificate in India. The applicant must have a valid business registration and meet the requirements for the specific product category. Foreign manufacturers need to appoint an Authorized Indian Representative (AIR) to obtain certification for products imported into India.",
        },
      },
      {
        "@type": "Question",
        name: "Can a Trader get BIS Certificate in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Traders typically cannot directly get BIS Certificate as it is issued to manufacturers. However, traders can act as authorized representatives (Authorized Indian Representative - AIR) for foreign manufacturers to obtain BIS certification for imported products. The certificate is issued in the name of the manufacturer, with the trader acting as the AIR for compliance purposes.",
        },
      },
      {
        "@type": "Question",
        name: "Who can apply for BIS Certificate in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Manufacturers (both Indian and foreign), importers, and authorized representatives can apply for BIS Certificate in India. The applicant must have a valid business registration and meet the requirements for the specific product category. Foreign manufacturers must appoint an Authorized Indian Representative (AIR) to apply on their behalf.",
        },
      },
      {
        "@type": "Question",
        name: "How to Get BIS Certificate in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To get BIS Certificate in India, identify the applicable Indian Standard (IS) for your product, prepare required documentation, select a BIS-recognized laboratory for testing, submit the application through the BIS portal, complete factory inspection (for ISI Scheme), and obtain the certificate upon approval. The process involves testing, documentation, application submission, and compliance with marking requirements.",
        },
      },
      {
        "@type": "Question",
        name: "How to check BIS certificate online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can check BIS certificate online through the BIS portal (bis.gov.in or manakonline.bis.gov.in) using the certificate number, CM/L number, or R-number. Enter the details on the verification page to view the certificate status, licensee/manufacturer information, brand, model, Indian Standard (IS) reference, and current validity. The online verification helps confirm the authenticity of the certificate.",
        },
      },
      {
        "@type": "Question",
        name: "How to download BIS certificate from manakonline?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To download BIS certificate from manakonline, log in to your account on manakonline.bis.gov.in, navigate to your certificates section, select the certificate you want to download, and click the download button to get the PDF version. You need valid login credentials to access your certificate dashboard and download the official certificate document.",
        },
      },
      {
        "@type": "Question",
        name: "How to download BIS Certificate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can download BIS Certificate by logging into the BIS portal (manakonline.bis.gov.in) with your credentials, accessing your certificate section, and downloading the PDF. Navigate to the certificates section, select the specific certificate, and download the official PDF document. You can also request a physical copy from BIS if needed for official purposes.",
        },
      },
      {
        "@type": "Question",
        name: "how to get BIS Certificate for import?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To get BIS Certificate for import, foreign manufacturers need to apply through the BIS portal, submit product samples for testing, complete factory inspection, and obtain the certificate before importing products to India. Importers can also apply on behalf of foreign manufacturers by acting as an Authorized Indian Representative (AIR). The certificate must be obtained before customs clearance.",
        },
      },
      {
        "@type": "Question",
        name: "How to get BIS certificate for import in india?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To get BIS certificate for import in India, foreign manufacturers must identify the applicable Indian Standard (IS), appoint an Authorized Indian Representative (AIR), prepare documentation, conduct product testing at BIS-recognized labs, submit application through the BIS portal, complete factory inspection (for ISI Scheme), and obtain the certificate. The certificate is mandatory before importing covered products to India.",
        },
      },
      {
        "@type": "Question",
        name: "BIS Certificate who can apply?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Manufacturers (both Indian and foreign), importers, and authorized representatives can apply for BIS Certificate. Indian manufacturers can apply directly, while foreign manufacturers must appoint an Authorized Indian Representative (AIR) to apply on their behalf. The applicant must have valid business registration and meet product-specific requirements for the certification scheme.",
        },
      },
      {
        "@type": "Question",
        name: "BIS certificate for import cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BIS certificate for import cost includes laboratory testing fees, application/processing fees, marking or registration charges, factory audit fees (for ISI Scheme), sample logistics, and professional support fees. Costs vary based on product category, testing requirements, number of models/variants, and certification scheme. Foreign manufacturers should also account for AIR fees and additional documentation costs.",
        },
      },
      {
        "@type": "Question",
        name: "BIS certificate vs ISO certificate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BIS certificate is mandatory for specific products sold in India and ensures compliance with Indian standards (IS). ISO certificate is voluntary and indicates adherence to international quality management standards (ISO 9001, etc.). BIS is product-specific certification required by law, while ISO is organization-wide quality management system certification. Both serve different purposes and are not interchangeable.",
        },
      },
      {
        "@type": "Question",
        name: "Can BIS Hallmark Be Fake?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BIS Hallmark can be fake if not obtained through proper channels. To verify authenticity, check the hallmark on the BIS portal using the registration number. Genuine BIS hallmarks are registered and verifiable through official BIS systems. Always verify through the official BIS portal and cross-check the hallmark details with the database to ensure authenticity and avoid counterfeit products.",
        },
      },
      {
        "@type": "Question",
        name: "Difference between BIS and ISI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BIS is the Bureau of Indian Standards, the certifying body and organization. ISI mark is the certification mark issued by BIS for products meeting Indian standards. BIS is the organization responsible for certification, while ISI is the mark displayed on certified products. The ISI mark with the CM/L number indicates that the product has been certified by BIS under the ISI Scheme.",
        },
      },
      {
        "@type": "Question",
        name: "Difference between BIS and ISO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BIS certificate is mandatory for specific products sold in India and ensures compliance with Indian standards (IS). ISO certificate is voluntary and indicates adherence to international quality management standards. BIS is product-specific certification required by law for certain products, while ISO is organization-wide quality management system certification. BIS focuses on product compliance, while ISO focuses on process quality management.",
        },
      },
      {
        "@type": "Question",
        name: "BIS vs ISI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BIS (Bureau of Indian Standards) is the organization that issues certifications, while ISI (Indian Standards Institute) mark is the certification mark displayed on products certified by BIS. BIS is the certifying body, and ISI mark is the visual indicator on products showing they meet Indian standards. The ISI mark with CM/L number confirms BIS certification under the ISI Scheme.",
        },
      },
      {
        "@type": "Question",
        name: "BIS vs ISO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BIS certificate is mandatory for specific products in India and ensures product compliance with Indian standards. ISO certificate is voluntary and certifies quality management systems. BIS is product-specific and legally required, while ISO is organization-wide and optional. BIS focuses on product safety and standards compliance, whereas ISO focuses on quality management processes and continuous improvement.",
        },
      },
      {
        "@type": "Question",
        name: "Can Foreign Companies Get BIS Certification?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, foreign companies can get BIS Certification. Foreign manufacturers can apply directly or through an Authorized Indian Representative (AIR). The process includes identifying the applicable Indian Standard (IS), product testing at BIS-recognized laboratories, factory inspection, compliance with Indian standards, and obtaining the certificate. Foreign entities must appoint an AIR to liaise with BIS and ensure compliance in India.",
        },
      },
    ],
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Sun Certifications India" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://bis-certifications.com/hero-image/hero-image.webp"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <meta
        name="twitter:image"
        content="https://bis-certifications.com/hero-image/hero-image.webp"
      />
      <link rel="canonical" href={canonicalUrl} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
    </Helmet>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="relative ">
        <div className="w-full max-w-[768px] px-4 pb-12  pt-8 md:pt-10 md:pb-16 mx-auto">
          <div className="text-center font-geist text-3xl md:text-[48px] text-[#181818] leading-tight md:leading-[48px] font-semibold">
            Want to know more?
          </div>

          <div className="text-center mt-[16px] text-base md:text-[20px] leading-normal md:leading-[28px] font-geist text-[#52525b]">
            Email us at{" "}
            <a
              href="mailto:admin@bis-certifications.com"
              className="font-medium font-geist text-[#27272a] leading-[28px] underline underline-offset-4 hover:text-[#1A8781] transition-colors duration-200"
            >
              admin@bis-certifications.com
            </a>{" "}
            or use one of the options below. We usually get back within 24
            hours.
          </div>

          <div className="flex items-center my-6 md:my-[30px]">
            <div className="h-px w-full bg-neutral-300  grow"></div>
            <span className="text-neutral-600 block px-4  font-geist text-center text-lg md:text-xl">
              or
            </span>
            <div className="h-px w-full bg-neutral-300 grow"></div>
          </div>

          <div className="flex justify-center w-full">
            <div className="flex gap-6 flex-wrap items-center justify-center">
              <a
                href="https://wa.me/918766262463"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="size-7 text-neutral-600 hover:text-neutral-900 transition-colors"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                </svg>
                <span className="sr-only">WhatsApp</span>
              </a>

              <a href="tel:+918010505057" rel="noreferrer noopener">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="size-7 text-neutral-600 hover:text-neutral-900 transition-colors"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM19 12h2c0-4.9-4-8.9-9-8.9v2c3.9 0 7 3.1 7 6.9zm-4 0h2c0-2.8-2.2-5-5-5v2c1.7 0 3 1.3 3 3z"></path>
                </svg>
                <span className="sr-only">Call</span>
              </a>

              <a
                href="https://www.linkedin.com/company/sun-consultants-engineers/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="size-7 text-neutral-600 hover:text-neutral-900 transition-colors"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#b9deeb] pt-10 md:pt-16 pb-6">
        <div className="max-w-[88rem] mx-auto px-4 md:px-12">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-0 md:h-[360px] ">
            {/* Company Logo */}
            <div className="flex flex-col gap-[20px] md:gap-[25px]">
              <div
                className=" selection:bg-emerald-600 flex md:space-x-2.5 
                 text-2xl font-bold text-center text-neutral-600"
              >
                <img
                  src="/company-logo/company-logo.webp"
                  alt="Sun Certifications India logo"
                  title="Sun Certifications India logo"
                  className="hidden md:block w-10 h-10 md:w-12 md:h-12"
                />
                <Link to="/" className="text-center">
                  <div className="font-roboto text-black uppercase tracking-wide leading-normal text-[14px] md:text-xl font-bold">
                    Sun Certifications India
                  </div>
                  <p className="text-foreground/90 text-[10px] md:text-[13px] leading-none uppercase font-normal">
                    Simplifying Certifications
                  </p>
                </Link>
              </div>

              <div className="flex flex-col gap-[15px]">
                <div className="text-neutral-900 text-base md:text-lg  font-geist font-medium">
                  Subscribe to our newsletter
                </div>

                <div className="relative">
                  <input
                    className="w-full bg-[white] disabled:cursor-not-allowed rounded focus:outline-none focus:outline-transparent ring-1 ring-inset focus:ring-2 focus:ring-inset 
                  text-sm md:text-base py-2 px-3 h-9 text-neutral-700
                  ring-neutral-300
                  placeholder:text-neutral-400
                  focus:ring-neutral-700
                  pr-24 
                  border border-[#7eafd9]
                  "
                    placeholder="enter your email"
                  />
                  <button className="flex items-center justify-center h-7 px-2 py-1.5 gap-x-1 text-[13px] md:text-[15px] whitespace-nowrap font-medium font-geist border rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 absolute right-1 top-1 border-none bg-white">
                    <div className="text-[#2a5075]">Notify me</div>
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:flex md:gap-[50px] gap-6 ">
              <div className="flex   w-full md:w-[240px] flex-col gap-[15px]">
                <span className="text-neutral-900 text-[16px] md:text-[18px] font-geist font-medium">
                  Address
                </span>

                <div className="flex flex-col transition-colors gap-[10px]">
                  <span className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base">
                    Delhi M-15, Phase-1, Badli Industrial Estate, Delhi-110042
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-[15px]">
                <span className="text-neutral-900 text-[16px] md:text-[18px] font-geist font-medium">
                  Our Services
                </span>

                <div className="flex flex-col transition-colors gap-[10px]">
                  <Link
                    to="/services/tec"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    TEC
                  </Link>
                  <Link
                    to="/services/isi-mark-indian"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    ISI MARK
                  </Link>
                  <Link
                    to="/services/ce-certification"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    CE CERTIFICATION
                  </Link>
                  <Link
                    to="/services/epr-registration"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    EPR
                  </Link>
                  <Link
                    to="/services/rohs"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    ROHS
                  </Link>

                  <Link
                    to="/services/wpc"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    WPC
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-[15px]">
                <span className="text-neutral-900 text-[16px] md:text-[18px] font-geist font-medium">
                  Company
                </span>
                <div className="flex flex-col transition-colors gap-[10px]">
                  <Link
                    to="/about"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    About
                  </Link>
                  <Link
                    to="/contact"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="/faqs"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    FAQ&apos;s
                  </Link>
                  <Link
                    to="/sitemap"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    Sitemap
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-[15px]">
                <span className="text-neutral-900 text-[16px] md:text-[18px] font-geist font-medium">
                  News & Notifications
                </span>

                <div className="flex flex-col transition-colors gap-[10px]">
                  <Link
                    to="/latest-notifications"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    Blogs
                  </Link>
                  <Link
                    to="/latest-notifications"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    Latest Updates
                  </Link>
                  <Link
                    to="/ministry-updates"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    Ministry Updates
                  </Link>
                  <Link
                    to="/webinar"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    Webinar Updates
                  </Link>
                  <Link
                    to="/international-audits"
                    className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                  >
                    Gallery
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border border-[#7eafd9] mt-8 md:mt-0"></div>
          <div className="flex flex-col md:flex-row  items-center mt-6 md:mt-4 mb-4 gap-4 md:gap-0 md:justify-between">
            <div className="flex gap-3 flex-wrap items-center justify-center">
              <a
                href="https://www.linkedin.com/company/sun-certifications-india/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInLogoIcon className="h-5 w-6 md:h-6 md:w-8 text-[#2a5075] duration-200 hover:-translate-y-2 cursor-pointer" />
              </a>

              <a
                href="mailto:admin@bis-certifications.com?body=Hello"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MailPlus className="h-5 w-6 md:h-6 md:w-8 text-[#2a5075] duration-200 hover:-translate-y-2 cursor-pointer" />
              </a>

              <a
                href="https://www.instagram.com/suncertificationsindia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramLogoIcon className="h-5 w-6 md:h-6 md:w-8 text-[#2a5075] duration-200 hover:-translate-y-2 cursor-pointer" />
              </a>
            </div>

            <button
              className="flex items-center justify-center h-9 px-4 py-2 gap-x-1 rounded-full border border-[#7eafd9] bg-gray-50 hover:bg-[#E3EFF4] transition-all duration-200 
"
            >
              <span className="text-[13px] md:text-[15px] text-[#2a5075] font-geist leading-[20px] font-medium">
                English (US)
              </span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="shrink-0 !size-3 md:!size-4 text-[#2a5075]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
              </svg>
            </button>

            <span className="text-[#2a5075] font-geist text-[13px] md:text-base text-center">
              Copyright © 2025 Sun Certifications India. All Rights Reserved.
            </span>

            <div className="md:hidden flex items-center gap-2">
              <Link
                to="/privacy-policy"
                className="text-[#2a5075] font-geist text-[13px] md:text-base hover:underline"
              >
                Privacy Policy
              </Link>
              <div className="size-1.5 md:size-2 shrink-0 rounded-full bg-[#7eafd9]"></div>
              <Link
                to="/terms-and-conditions"
                className="text-[#2a5075] font-geist text-[13px] md:text-base hover:underline"
              >
                Terms of Service
              </Link>
            </div>

            <div className="hidden md:block size-2 shrink-0 rounded-full bg-[#7eafd9]"></div>

            <Link
              to="/privacy-policy"
              className="hidden md:block text-[#2a5075] font-geist hover:underline"
            >
              Privacy Policy
            </Link>

            <div className="hidden md:block size-2 shrink-0 rounded-full bg-[#7eafd9]"></div>

            <Link
              to="/terms-and-conditions"
              className="hidden md:block text-[#2a5075] font-geist hover:underline"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
