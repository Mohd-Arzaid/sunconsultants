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

const FurnitureQCOAmendmentOrder = () => {
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

export default FurnitureQCOAmendmentOrder;

const MetaTags = () => {
  const title = "Furniture QCO Amendment Order 2026 - BIS Certification Update";
  const websiteUrl =
    "https://bis-certifications.com/ministry-updates/furniture-qco-2026";
  const metaDescription =
    "The Ministry has issued the Furniture (Quality Control) Amendment Order, 2026. Stay updated on BIS certification requirements and compliance for furniture manufacturers and importers.";
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={websiteUrl} />
      <meta name="twitter:title" content={title} />
      <link rel="canonical" href={websiteUrl} />
    </Helmet>
  );
};

const BreadcrumbContent = () => (
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
                  Furniture QCO Amendment Order 2026
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  </div>
);

const MainContent = () => (
  <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
    <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
      <MainContentLeft />
      <ServicesRightSideContentEng />
    </div>
  </div>
);

const MainContentLeft = () => (
  <div className="flex-1 overflow-y-auto pt-2 px-2 -mt-2 -mx-2">
    <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075]">
      <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
        Furniture QCO Amendment Order 2026
      </h1>
      <div className="mb-6">
        <img
          src="/ministryUpdatesBlogsImages/FurnitureQCOAmendment2026.png"
          title="Furniture QCO Amendment Order 2026"
          alt="Furniture Quality Control Order Amendment 2026 - BIS Certification"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <p className="text-gray-600 text-base font-geist mb-4">
        The Ministry of Consumer Affairs, Food and Public Distribution has
        issued the Furniture (Quality Control) Amendment Order, 2026. This
        amendment updates the regulatory framework for furniture products under
        the BIS certification scheme and affects manufacturers, importers, and
        traders dealing in furniture items covered under the relevant Indian
        Standards.
      </p>
      <p className="text-gray-600 text-base font-geist mb-4">
        Under this amendment, furniture products specified in the order are
        required to conform to the applicable Indian Standards and bear the
        BIS Standard Mark. Manufacturers and importers must ensure that their
        products meet the prescribed IS standards and obtain the BIS licence
        (ISI Mark) before manufacturing, selling, or importing the covered
        furniture products into India.
      </p>
      <div className="h-px w-full bg-gray-300 my-6" />
      <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
        What This Means for Manufacturers and Importers
      </h2>
      <p className="text-gray-600 text-base font-geist mb-4">
        Furniture products covered under the Furniture QCO Amendment Order 2026
        must be certified under the BIS Conformity Assessment Scheme.
        Stakeholders should check the effective date and the list of furniture
        products and IS standards included. Importers must ensure that products
        are BIS certified before import.
      </p>
      <ServiceAuthorEng />
    </div>
  </div>
);

const Services = () => (
  <div className="pt-6 md:pt-8 pb-12 md:pb-16 overflow-x-hidden">
    <div className="max-w-[80rem] w-full mx-auto">
      <div className="flex flex-col items-center justify-center">
        <BoxReveal boxColor="#B6B4DF" duration={0.5}>
          <h2 className="text-[30px] md:text-[48px] font-bold font-geist text-center text-[#1E1E1E]">
            Our Services
          </h2>
        </BoxReveal>
        <BoxReveal boxColor="#B6B4DF" duration={0.5}>
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
            <img src="/services-images/BIS.jpg" alt="BIS Logo" className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain" />
          </div>
          <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist font-semibold text-black">
            BIS Mark (ISI License) for Foreign Manufacture
          </p>
        </Link>
        <Link
          to="/what-is-crs-bis-or-crs-registration"
          className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
        >
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
            <img src="/services-images/BISCRS.jpg" alt="BISCRS" className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain" />
          </div>
          <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist font-semibold text-black">
            BIS (CRS) Registration
          </p>
        </Link>
        <Link
          to="/what-is-bis-certificate-indian-bis"
          className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
        >
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
            <img src="/services-images/BIS.jpg" alt="BIS" className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain" />
          </div>
          <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist font-semibold text-black">
            BIS Registration Certificate
          </p>
        </Link>
        <Link
          to="/a-guide-to-bis-certification-indian-bis"
          className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
        >
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
            <img src="/services-images/ISIMark.jpg" alt="ISI Mark" className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain" />
          </div>
          <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist font-semibold text-black">
            ISI MARK (BIS) for Indian Manufactures
          </p>
        </Link>
      </div>
    </div>
  </div>
);
