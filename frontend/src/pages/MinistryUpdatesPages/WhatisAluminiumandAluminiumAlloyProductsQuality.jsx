import ServiceAuthorEng from "@/components/manual/ServiceAuthor/ServiceAuthorEng";
import ServicesRightSideContentEng from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentEng";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "lucide-react";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { Separator } from "@/components/ui/separator";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import FooterEng from "@/components/manual/Footer/FooterEng";

const WhatisAluminiumandAluminiumAlloyProductsQuality = () => {
  return (
    <div className="relative w-full">
      <MetaTags />
      <BreadcrumbContent />
      <MainContent />
      <Services />
      <VideoSection />
      <FooterEng />
    </div>
  );
};

export default WhatisAluminiumandAluminiumAlloyProductsQuality;

const MetaTags = () => {
  const title =
    "BIS Certification for Aluminium and Aluminium Alloy Products | QCO Compliance 2026";
  const ogTitle =
    "BIS Certification for Aluminium and Aluminium Alloy Products | QCO Compliance 2026";
  const twitterTitle =
    "BIS Certification for Aluminium and Aluminium Alloy Products | QCO Compliance 2026";
  const metaDescription =
    "BIS Certificate for Aluminium and Aluminium Alloy Products under the Quality Control Order 2026. Check covered products, IS standards, implementation dates, and compliance requirements.";
  const ogDescription =
    "BIS Certificate for Aluminium and Aluminium Alloy Products under the Quality Control Order 2026. Check covered products, IS standards, implementation dates, and compliance requirements.";
  const twitterDescription =
    "BIS Certificate for Aluminium and Aluminium Alloy Products under the Quality Control Order 2026. Check covered products, IS standards, implementation dates, and compliance requirements.";
  const metaKeywords =
    "BIS certification aluminium products, aluminium QCO 2026, BIS certification aluminium rods, aluminium ISI mark certification";
  const websiteUrl =
    "https://bis-certifications.com/ministry-updates/aluminium-and-aluminium-alloy-products-bis-certification-latest-qco-2026";
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
    </Helmet>
  );
};

const BreadcrumbContent = () => {
  return (
    <div className="absolute md:top-5 top-3 left-0 w-full z-30">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="w-full overflow-x-auto scrollbar-hide font-inter">
          <div className="w-fit min-w-full">
            <Breadcrumb>
              <BreadcrumbList className="flex-nowrap">
                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/ministry-updates">Ministry Updates</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Aluminium & Aluminium Alloy Products QCO 2026
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
    </div>
  );
};

const MainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <MainContentLeft />

        {/* Right Side Content */}
        <ServicesRightSideContentEng />
      </div>
    </div>
  );
};

const MainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4 text-left">
          What is Aluminium and Aluminium Alloy Products Quality Control Order 2026?
        </h1>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Aluminium and Aluminium Alloy Products (Quality Control) Order,
          2026 is a regulatory mandate requiring certain aluminium products to
          conform to specific Indian Standards issued by the Bureau of Indian
          Standards (BIS).
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Under this order:
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Aluminium products must comply with relevant IS standards</li>
          <li>Manufacturers must obtain a BIS licence</li>
          <li>Products must carry the Standard Mark (ISI Mark)</li>
          <li>BIS acts as the certification and enforcement authority</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          The objective of this regulation is to maintain uniform product
          quality, improve consumer safety, and strengthen manufacturing
          standards in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Aluminium Products Covered Under BIS Certification
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Quality Control Order includes multiple aluminium products used
          across engineering, electrical, packaging, aerospace, and construction
          sectors.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Irrigation Aluminium Tubes
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Aluminium alloy tubes for irrigation purposes (welded tubes) – IS
            7092 (Part 1):1992
          </li>
          <li>
            Aluminium alloy tubes for irrigation purposes (extruded tubes) – IS
            7092 (Part 2):1987
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Aluminium Rods and Electrical Products
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            EC grade aluminium rod produced by continuous casting and rolling –
            IS 5484:1997
          </li>
          <li>Wrought aluminium wire for electrical purposes – IS 2067:1975</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Aluminium Packaging and Construction Materials
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Aluminium and aluminium alloy foil for pharmaceutical packaging – IS
            16011:2012
          </li>
          <li>Aluminium composite panels – IS 17682:2021</li>
          <li>Corrugated aluminium sheets – IS 1254:2007</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Aerospace Aluminium Components
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>
            Aluminium alloy forging stock and forgings for aerospace
            applications – IS 7902:2001
          </li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          General Engineering Aluminium Products
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Wrought aluminium and aluminium alloy bars, rods and sections – IS 733:1983</li>
          <li>Aluminium alloy forging stock – IS 734:1975</li>
          <li>Aluminium alloy plates – IS 736:1986</li>
          <li>Aluminium sheets and strips – IS 737:2008</li>
          <li>Aluminium wires – IS 739:1992</li>
          <li>Aluminium rivet stock – IS 740:1977</li>
          <li>Extruded round tubes and hollow sections – IS 1285:2002</li>
        </ul>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Aluminium Products for Utensils and Electrical Applications
        </h3>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Aluminium alloys for manufacture of utensils – IS 21:1992</li>
          <li>
            Aluminium alloy bars, rods, tubes, plates and sheets for electrical
            applications – IS 5082:1998
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          All these products must comply with the respective Indian Standards
          and BIS certification requirements before being sold or distributed in
          India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS Certification Requirements for Aluminium Products
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers and importers must obtain BIS certification under
          Scheme-I of the BIS Conformity Assessment Regulations, 2018.
        </p>

        <p className="text-gray-600 text-base font-geist mb-3">
          Key Compliance Requirements
        </p>

        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Product testing as per applicable Indian Standard</li>
          <li>Testing through BIS recognized laboratories</li>
          <li>Submission of technical documents and manufacturing details</li>
          <li>BIS factory inspection</li>
          <li>Grant of BIS licence</li>
          <li>Mandatory ISI Mark on products</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Without BIS certification, covered aluminium products cannot be
          manufactured, imported, stored, or sold in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Exemptions under Aluminium QCO 2026
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The notification also specifies certain exemptions.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Export-Oriented Products
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Products manufactured exclusively for export are exempt from BIS
          certification.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Research and Development Imports
        </h3>
        <p className="text-gray-600 text-base font-geist mb-3">
          Manufacturers may import up to 200 kg of aluminium products annually
          for research and development without BIS certification.
        </p>

        <p className="text-gray-600 text-base font-geist mb-2">However:</p>
        <ul className="list-disc ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>The products cannot be sold commercially.</li>
          <li>They must be disposed of as scrap.</li>
          <li>
            Proper records must be maintained and submitted to the government.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          These exemptions ensure flexibility for innovation and global trade.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS Certification Process for Aluminium Products
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Businesses dealing in aluminium products must follow the BIS
          certification process to comply with the Quality Control Order.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Step-by-Step Process for BIS License for Aluminium Products
        </h3>
        <ol className="list-decimal ml-6 mb-4 space-y-2 text-gray-600 text-base font-geist">
          <li>Identify the applicable Indian Standard (IS code)</li>
          <li>Conduct product testing in BIS approved labs</li>
          <li>Submit BIS application and required documents</li>
          <li>BIS performs factory inspection</li>
          <li>BIS issues licence and registration</li>
          <li>Manufacturer applies the ISI Mark on product</li>
        </ol>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Aluminium and Aluminium Alloy Products (Quality Control) Order,
          2026 represents an important regulatory step by the Government of
          India to strengthen quality control, product safety, and
          standardization in the aluminium industry. Under this notification,
          manufacturers and importers of specified aluminium products must
          comply with the applicable Indian Standards and obtain BIS
          certification with the ISI Mark before selling or distributing these
          products in the Indian market.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The order covers a wide range of aluminium products used in
          engineering, construction, electrical, packaging, aerospace, and
          industrial applications, ensuring that only products meeting the
          required quality benchmarks are available to consumers. The government
          has also provided phased implementation timelines for large
          enterprises, small enterprises, and micro enterprises, allowing
          businesses sufficient time to align their manufacturing processes with
          BIS requirements.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          Companies involved in the manufacturing or import of aluminium
          products should begin the BIS certification process as early as
          possible to avoid compliance issues, regulatory penalties, or
          disruption in market access. By obtaining BIS certification,
          businesses not only meet legal requirements but also enhance product
          credibility, consumer trust, and competitiveness in the Indian
          market.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          With proper regulatory guidance and professional consultancy support,
          manufacturers can successfully achieve BIS certification for aluminium
          and aluminium alloy products and ensure full compliance with the
          Aluminium QCO 2026.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Frequently Asked Questions (FAQs)
        </h2>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Is BIS certification mandatory for aluminium products?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes. Aluminium products listed under the Aluminium and Aluminium Alloy
          Products (Quality Control) Order, 2026 must obtain BIS certification
          before being sold in India.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Which authority issues BIS certification?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          The Bureau of Indian Standards (BIS) is the certifying and enforcement
          authority.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          Can aluminium products be exported without BIS certification?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Yes. Products manufactured exclusively for export are exempt from BIS
          certification requirements.
        </p>

        <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-2">
          What is the penalty for selling non-BIS aluminium products?
        </h3>
        <p className="text-gray-600 text-base font-geist mb-4">
          Non-compliance can result in penalties under the Bureau of Indian
          Standards Act, 2016, including fines and legal action.
        </p>

        <ServiceAuthorEng />
      </div>

      {/* PDF Viewer Section */}
      <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        <iframe
          src="/pdf/1773716773074.pdf"
          title="Aluminium and Aluminium Alloy Products (Quality Control) Order, 2026 PDF"
          className="w-full h-[800px] bg-white"
          style={{
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          }}
        />
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12  md:pb-16  overflow-x-hidden ">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
              Our Services
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                India's Best Certificate Consultant
              </span>
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
            </div>
          </BoxReveal>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-x-3 md:gap-x-10 px-4 md:px-0 gap-y-12 md:gap-y-24">
          <Link
            to="/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block hover:scale-105 transition-all duration-300"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BIS.jpg"
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS Mark (ISI License) for Foreign Manufacture
            </p>
          </Link>

          <Link
            to="/cdsco-registration-certification"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/CDSCO.jpg"
                alt="CDSCO Logo"
                title="CDSCO Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              CDSCO Registration Certification
            </p>
          </Link>

          <Link
            to="/what-is-crs-bis-or-crs-registration"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BISCRS.jpg"
                alt="BISCRS logo"
                title="BISCRS logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS (CRS) Registration
            </p>
          </Link>

          <Link
            to="/epr-certificate-for-plastic-waste-management-pwm"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/PlasticWasteManagement.jpg"
                alt="PlasticWasteManagement"
                title="PlasticWasteManagement"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Plastic Waste Management
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-epr-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/EPRCertificate.jpg"
                alt="EPRCertificate logo"
                title="EPRCertificate logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              EPR Certificate certifications
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-lmpc-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/LMPC.jpg"
                alt="LMPC logo"
                title="LMPC logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              LMPC Certificate certifications
            </p>
          </Link>

          <Link
            to="/what-is-bis-certificate-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BIS.jpg"
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS Registration Certificate
            </p>
          </Link>

          <Link
            to="/a-guide-to-bis-certification-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/ISIMark.jpg"
                alt="ISIMark logo"
                title="ISIMark logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              ISI MARK (BIS) for Indian Manufactures
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
