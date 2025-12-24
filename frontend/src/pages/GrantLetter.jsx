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
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { SlashIcon } from "lucide-react";
import { useState } from "react";

const GrantLetter = () => {
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
                  <BreadcrumbPage>Grant Letter</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>

      {/* Grant Letter Hero */}
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

export default GrantLetter;

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
          BIS Grant Letters & Certifications
        </h1>

        <p className="text-base md:text-lg font-geist text-gray-600 max-w-2xl md:max-w-3xl mx-auto">
          Explore our collection of successful BIS grant letters and license
          documents across various industries, showcasing our expertise in BIS
          certification and compliance services.
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
          Grant Letter Gallery
        </span>
      </h2>

      <p className="text-base md:text-lg text-center font-geist text-gray-600 max-w-xl md:max-w-xl mx-auto leading-relaxed">
        A collection of BIS grant letters and license documents issued across
        various industries and standards
      </p>
    </div>
  );
};

const AuditGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      image: "/Grant-Letter-Img/BISCertificationGrantLetter01.webp",
      alt: "BIS Certificate Grant Letter successfully obtained for Cast aluminium and its alloys - Ingots and castings for general engineering purposes under IS 617:1994 with expert assistance from Sun Certifications India.",
    },
    {
      id: 2,
      image: "/Grant-Letter-Img/BISCertificationGrantLetter02.webp",
      alt: "BIS Certificate Grant Letter successfully obtained for Primary aluminium ingots for remelting for general engineering purpose under IS 2590:1987 with expert assistance from Sun Certifications India.",
    },
    {
      id: 3,
      image: "/Grant-Letter-Img/BISCertificationGrantLetter03.webp",
      alt: "BIS Certification Grant Letter successfully obtained for Cabinet hinges under IS 18297:2023 with expert assistance from Sun Certifications India.",
    },
    {
      id: 4,
      image: "/Grant-Letter-Img/BISCertificationGrantLetter04.webp",
      alt: "BIS Certification Grant Letter successfully obtained for Cabinet hinges under IS 18297:2023 with expert assistance from Sun Certifications India.",
    },
    {
      id: 5,
      image: "/Grant-Letter-Img/BISCertificationGrantLetter05.jpg",
      alt: "BIS License Grant Letter successfully obtained for Safety of Toys Part I Safety Aspects Related to Mechanical and Physical Properties under IS 9873 (Part 1):2018 for foreign manufacturer with expert assistance from Sun Certifications India.",
    },
    {
      id: 6,
      image: "/Grant-Letter-Img/BISCertificationGrantLetter06.jpg",
    },
    {
      id: 7,
      image: "/Grant-Letter-Img/BISCertificationGrantLetter07.webp",
      alt: "BIS Certificate Grant Letter successfully obtained for Safety of Toys Part I Safety Aspects Related to Mechanical and Physical Properties under IS 9873 (Part 1):2018 for foreign manufacturer with expert assistance from Sun Certifications India.",
    },
    {
      id: 8,
      image: "/Grant-Letter-Img/BISCertificationGrantLetter08.webp",
      alt: "BIS Standard Mark Grant Letter successfully obtained for Safety of Toys Part I Safety Aspects Related to Mechanical and Physical Properties under IS 9873 (Part 1):2018 for foreign manufacturer with expert assistance from Sun Certifications India.",
    },
    {
      id: 9,
      image: "/Grant-Letter-Img/BISCertificationGrantLetter09.webp",
      alt: "BIS Grant Letter successfully obtained for Safety of Toys Part I Safety Aspects Related to Mechanical and Physical Properties under IS 9873 (Part 1):2018 for foreign manufacturer with expert assistance from Sun Certifications India.",
    },
    {
      id: 10,
      image: "/Grant-Letter-Img/BISCertificationGrantLetter10.webp",
      alt: "BIS Certification Grant Letter successfully obtained for Cast aluminium and its alloys - Ingots and castings for general engineering purposes under IS 617:1994 for foreign manufacturer with expert assistance from Sun Certifications India.",
    },
    {
      id: 11,
      image: "/Grant-Letter-Img/BISCertificationGrantLetter11.webp",
      alt: "BIS Certification Grant Letter successfully obtained for Wrought aluminium and aluminium alloy bars, rods and sections under IS 733:1983 with expert assistance from Sun Certifications India.",
    },
    {
      id: 12,
      image: "/Grant-Letter-Img/BISCertificationGrantLetter12.webp",
      alt: "BIS Certification Grant Letter successfully obtained for Wrought aluminium and aluminium alloys- Extruded round tube and hollow sections under IS 1285:2002 with expert assistance from Sun Certifications India.",
    },
    {
      id: 13,
      image: "/Grant-Letter-Img/BISCertificationGrantLetter13.webp",
      alt: "BIS Certification Grant Letter successfully obtained for Diesel Engines - NOx Reduction Agent AUS 32 under IS 17042 (Part 1):2018 with expert assistance from Sun Certifications India.",
    },
    {
      id: 14,
      image: "/Grant-Letter-Img/BISCertificationGrantLetter14.webp",
      alt: "BIS Certification Grant Letter successfully obtained for PVC sandal under IS 6721:1972 with expert assistance from Sun Certifications India.",
    },
    {
      id: 15,
      image: "/Grant-Letter-Img/BISCertificationGrantLetter15.webp",
      alt: "BIS License Grant Letter successfully obtained for Sandal and Slippers Specification under IS 6721:2023 with expert assistance from Sun Certifications India.",
    },
    {
      id: 16,
      image: "/Grant-Letter-Img/BISCertificationGrantLetter16.webp",
      alt: "BIS Certification Grant Letter successfully obtained for Safety of Toys Part I Safety Aspects Related to Mechanical and Physical Properties under IS 9873 (Part 1):2018 with expert assistance from Sun Certifications India.",
    },
    {
      id: 17,
      image: "/Grant-Letter-Img/BISCertificationGrantLetter17.webp",
      alt: "BIS Licence Grant Letter successfully obtained for Safety of Toys Part I Safety Aspects Related to Mechanical and Physical Properties under IS 9873 (Part 1):2018 for foreign manufacturer with expert assistance from Sun Certifications India.",
    },
    {
      id: 18,
      image: "/Grant-Letter-Img/BISCertificationGrantLetter18.webp",
      alt: "BIS Certification Grant Letter successfully obtained for Phosphorous Trichloride, pure and Analytical Reagent under IS 4581:1978 with expert assistance from Sun Certifications India.",
    },
    {
      id: 19,
      image: "/Grant-Letter-Img/BISCertificationGrantLetter19.webp",
      alt: "BIS Certification Grant Letter successfully obtained for Phosphorous Pentachloride, Technical under IS 11744:1986 with expert assistance from Sun Certifications India.",
    },
    {
      id: 20,
      image: "/Grant-Letter-Img/BISCertificationGrantLetter20.webp",
      alt: "BIS Certification Grant Letter successfully obtained for Hexagon Head Bolts, Screws and Nuts of Product Grades A and B - Hexagon Head Screws under IS 1364 Part 2:2023 with expert assistance from Sun Certifications India.",
    },
    {
      id: 21,
      image: "/Grant-Letter-Img/BISCertificationGrantLetter21.webp",
      alt: "BIS License Grant Letter successfully obtained for PVC sandal under IS 6721:1972 with expert assistance from Sun Certifications India.",
    },
  ];

  return (
    <div>
      <div className="max-w-[88rem] mx-auto px-4 pb-12 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="group relative mb-4 rounded-2xl cursor-pointer"
              style={{
                opacity: 1,
                filter: "blur(0px)",
                transform: "none",
                boxShadow: "rgba(0,0,0,0.1) 0px 0px 0px 0px",
              }}
              onClick={() => setSelectedImage(item)}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center">
                <img
                  alt={
                    item.alt ||
                    item.description ||
                    `BIS Grant Letter ${item.id}`
                  }
                  title={
                    item.alt ||
                    item.description ||
                    `BIS Grant Letter ${item.id}`
                  }
                  loading="lazy"
                  width="600"
                  height="450"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  decoding="async"
                  className="w-full h-full object-contain transform transition-transform duration-700 md:group-hover:scale-105"
                  src={item.image}
                  style={{ color: "transparent" }}
                />
              </div>

              <div className="flex flex-1 flex-col justify-between py-2 transition-all duration-300 group-hover:px-4">
                <p className="mt-2 max-w-full text-lg font-geist text-neutral-600">
                  {/* {item.description || "BIS Grant Letter and License Document"} */}
                </p>
              </div>
            </div>
          ))}

          {/* Many More Grant Letters Card */}
          <div
            className="group relative mb-4 rounded-2xl"
            style={{
              opacity: 1,
              filter: "blur(0px)",
              transform: "none",
              boxShadow: "rgba(0,0,0,0.1) 0px 0px 0px 0px",
            }}
          >
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
              <div className="text-center p-4">
                <h3 className="text-gray-800 font-geist text-base md:text-lg font-bold mb-1 group-hover:text-[#1A8781] transition-colors duration-300 leading-tight tracking-wide">
                  Many More Grant Letters
                </h3>
                <p className="text-gray-500 font-geist text-xs font-medium uppercase tracking-widest mb-1">
                  Issued Successfully
                </p>
                <p className="text-gray-400 font-geist text-xs italic">
                  Showcasing our extensive BIS certification portfolio
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <Dialog
        open={selectedImage !== null}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-[95vw] max-h-[95vh] w-auto h-auto p-0 bg-transparent border-none">
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.image}
                alt={
                  selectedImage.alt || `BIS Grant Letter ${selectedImage.id}`
                }
                className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
