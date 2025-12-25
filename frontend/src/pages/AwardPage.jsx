import Footer from "@/common/Footer";
import Services from "../components/manual/Services";
import AboutContact from "../components/manual/about/AboutContact";
import { Helmet } from "react-helmet-async";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { SlashIcon } from "lucide-react";

const AwardPage = () => {
  return (
    <div className="bg-[#F9F7F2] relative">
      <MetaTags />

      <div className="absolute md:top-5 top-3 left-0 w-full z-30">
        <div className="max-w-[80rem] mx-auto px-4">
          <div className="w-fit font-inter">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>Awards</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>

      {/* Award Hero */}
      <AuditHero />
      <AuditGallery />
      <div id="services-section">
        <Services />
      </div>

      {/* Contact Section */}
      <div className="pt-8 pb-4 md:pt-10 md:pb-6">
        <AboutContact />
      </div>

      <Footer />
    </div>
  );
};

export default AwardPage;

const MetaTags = () => {
  const title =
    "International Audits for BIS Certification — Factory Inspections & Compliance Support";
  const ogTitle =
    "International Audits for BIS Certificate | Sun Certifications India";
  const twitterTitle = "International Audit Excellence for BIS Certification";
  const metaDescription =
    "Professional international audits and factory inspections for BIS certification — ensure compliance with Indian Standards, streamline BIS licence FMCS audits, and ease market access in India";
  const ogDescription =
    "Get expert support for international audits and factory inspections as required under BIS certification schemes. We help manufacturers meet BIS standards, pass audits, and obtain BIS licence or FMCS compliance with ease.";
  const twitterDescription =
    "Need BIS certificate? Our international audit services help you clear factory inspections & compliance checks to get BIS licence or FMCS certification smoothly.";
  const metaKeywords =
    "BIS certification, BIS licence, international audits, factory inspection, BIS audit, BIS compliance, Scheme X, FMCS, BIS registration, BIS certificate, ISI mark, BIS licence audit, Indian Standards compliance";
  const websiteUrl = "https://bis-certifications.com/international-audits";
  const websiteName = "Sun Certifications India";
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      {/* Open Graph Tags */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={websiteUrl} />
      <meta property="og:site_name" content={websiteName} />
      <meta property="og:type" content="article" />
      {/* Twitter Card Tags */}
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <link rel="canonical" href={websiteUrl} />
      {/* JSON-LD Breadcrumb structured data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://bis-certifications.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "International Audit Excellence",
              item: "https://bis-certifications.com/international-audits",
            },
          ],
        })}
      </script>
    </Helmet>
  );
};

const AuditHero = () => {
  const handleScroll = () => {
    const element = document.getElementById("services-section");
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="max-w-[88rem] mx-auto px-4 pt-10 pb-8 md:px-12 md:pt-16 md:pb-12">
      {/* Heading */}
      <div className="text-center mb-6 md:mb-8">
        <h1 className="font-playfair text-3xl md:text-5xl font-bold text-[#1e1e1e] mb-3 md:mb-4">
          Awards & Recognition
        </h1>

        <p className="text-base md:text-lg font-geist text-gray-600 max-w-2xl md:max-w-3xl mx-auto">
          Celebrating our achievements and recognition in the BIS certification
          industry. These awards reflect our commitment to excellence, quality
          service, and outstanding performance in helping clients achieve BIS
          compliance.
        </p>
      </div>

      {/* Button */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-10">
        <button
          onClick={handleScroll}
          className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#1A8781] text-white py-3 px-8 rounded-full shadow-lg hover:bg-[#125E5A] transition-all duration-300 group"
        >
          <span className="font-medium font-geist">Our Services</span>
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30">
            <div className="w-2 h-2 border-t-2 border-r-2 border-white rotate-45"></div>
          </div>
        </button>

        <a href="/contact" className="w-full md:w-auto">
          <button className="w-full md:w-auto flex items-center justify-center gap-3 border-2 border-[#1A8781]/30 text-[#1A8781] py-3 px-8 rounded-full hover:border-[#1A8781] hover:bg-[#1A8781]/5 transition-all duration-300">
            <span className="font-medium font-geist">Contact Us</span>
          </button>
        </a>
      </div>

      <h2 className="text-3xl md:text-4xl text-center mb-4">
        {/* <span className="text-[#0A4394] font-geist font-medium mr-1 ">/</span> */}
        <span className="font-playfair font-bold text-[#1e1e1e]">
          Award Gallery
        </span>
      </h2>

      <p className="text-base md:text-lg text-center font-geist text-gray-600 max-w-xl md:max-w-xl mx-auto leading-relaxed">
        A collection of awards, certificates, and recognition received for our
        excellence in BIS certification services and client satisfaction
      </p>
    </div>
  );
};

const AuditGallery = () => {
  const galleryImages = [
    {
      id: 1,
      image: "/AwardImg/Sun-Certification-Footwear-India-Expo.jpg",
      title: "Sun Certification - Footwear India Expo",
      alt: "Recognition trophy for Sun Certification India for their valuable contribution on BIS certifications at the 17th edition Footwear India Expo Delhi",
      description: "Footwear India Expo",  
    },
    {
      id: 2,
      image: "/AwardImg/Sun-Certification-Agra-Footwear-Conclave.jpg",
      title: "Sun Certification Recognition – Agra Footwear Conclave",
      alt: "Recognition award presented to Sun Certification India for valuable support in understanding BIS certification at the Agra Footwear Conclave.",
      description: "Strategic Partner to the Footwear Industry",
    },
  ];

  return (
    <div className="max-w-[88rem] mx-auto px-4 pb-12 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((item) => (
          <div
            key={item.id}
            className="group relative mb-4 rounded-2xl"
            style={{
              opacity: 1,
              filter: "blur(0px)",
              transform: "none",
              boxShadow: "rgba(0,0,0,0.1) 0px 0px 0px 0px",
            }}
          >
            <div className="aspect-[4/3] overflow-hidden rounded-xl">
              <img
                alt={item.alt || item.description || `Award ${item.id}`}
                title={
                  item.title ||
                  item.alt ||
                  item.description ||
                  `Award ${item.id}`
                }
                loading="lazy"
                width="600"
                height="450"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                decoding="async"
                className="w-full h-full object-cover object-top transform transition-transform duration-700 md:group-hover:scale-110"
                src={item.image}
                style={{ color: "transparent" }}
              />
            </div>

            <div className="flex flex-1 flex-col justify-between py-2 transition-all duration-300 group-hover:px-4">
              {item.description && (
                <p className="mt-2 max-w-full text-lg font-geist text-neutral-600">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
