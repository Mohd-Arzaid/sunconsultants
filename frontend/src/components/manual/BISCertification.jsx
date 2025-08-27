import { Separator } from "@/components/ui/separator";
import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ServiceContentRight from "@/components/manual/CDSCOContentRight";
import { Check, Search, SlashIcon } from "lucide-react";
import Footer from "@/common/Footer";
import ScrollToTopButton from "../common/ScrollToTop";
import ServiceContactForm from "@/common/ServiceContactForm";
import PropTypes from "prop-types";
import Services from "./Services";
import AboutAuthor from "../common/AboutAuthor";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { Link, useNavigate } from "react-router-dom";

export const BISCertification = () => {
  return (
    <>
      <Helmet>
        <title>
          BIS Certification Services | ISI Mark | BIS License | Sun
          Certifications And Engineers
        </title>
        <meta
          name="description"
          content="Expert BIS certification services for Indian and foreign manufacturers. Get ISI Mark, BIS License, and compliance solutions. Trusted since 2013."
        />
        <meta
          name="keywords"
          content="BIS certification, ISI Mark, BIS License"
        />
        <meta name="author" content="Sun Certifications India" />
        <meta name="publisher" content="Dhruv Aggarwal, Head of Operations at Sun Certification India" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="BIS Certification Services | ISI Mark | BIS License"
        />
        <meta
          property="og:description"
          content="Expert BIS certification services for Indian and foreign manufacturers. Get ISI Mark, BIS License, and compliance solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:locale" content="en_IN" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CertificationsSun" />
        <meta
          name="twitter:title"
          content="BIS Certification Services | ISI Mark | BIS License"
        />
        <meta
          name="twitter:description"
          content="Expert BIS certification services for Indian and foreign manufacturers."
        />
        {/* Canonical URL */}
        <link rel="canonical" href={window.location.href} />

        {/* Hreflang Links for International Pages */}
        <link
          rel="alternate"
          href="https://bis-certifications.com/what-is-bis-certificate-indian-bis"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://bis-certifications.com/it/cose-il-certificato-bis-indiano"
          hrefLang="it"
        />
        <link
          rel="alternate"
          href="https://bis-certifications.com/fr/quest-ce-que-le-certificat-bis-indien"
          hrefLang="fr"
        />
        <link
          rel="alternate"
          href="https://bis-certifications.com/de/was-ist-das-bis-zertifikat-indisches-bis"
          hrefLang="de"
        />
        <link
          rel="alternate"
          href="https://bis-certifications.com/nl/wat-is-het-bis-certificaat-indiaas-bis"
          hrefLang="nl"
        />
        <link
          rel="alternate"
          href="https://bis-certifications.com/ja/bis-shomeisho-toha-nani-ka-indo-no-bis"
          hrefLang="ja"
        />
        <link
          rel="alternate"
          href="https://bis-certifications.com/ko/bis-jeungmyeongseo-ga-mueos-indo-bis"
          hrefLang="ko"
        />
        <link
          rel="alternate"
          href="https://bis-certifications.com/id/apa-itu-sertifikat-bis-bis-india"
          hrefLang="id"
        />
        <link
          rel="alternate"
          href="https://bis-certifications.com/th/bis-certificate-khue-a-rai-bis-india"
          hrefLang="th"
        />
        <link
          rel="alternate"
          href="https://bis-certifications.com/vi/chung-chi-bis-la-gi-bis-an-do"
          hrefLang="vi"
        />
        <link
          rel="alternate"
          href="https://bis-certifications.com/es/que-es-el-certificado-bis-bis-indio"
          hrefLang="es"
        />
        <link
          rel="alternate"
          href="https://bis-certifications.com/what-is-bis-certificate-indian-bis"
          hrefLang="x-default"
        />

        <meta name="robots" content="index, follow" />
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "BIS Certification",
            provider: {
              "@type": "Organization",
              name: "Sun Certifications India",
              url: window.location.href,
              logo: "https://suncertifications.com/logo.png",
            },
            areaServed: {
              "@type": "Country",
              name: "India",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "BIS Certification Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "ISI Mark Certification",
                    description:
                      "ISI Mark certification for Indian manufacturers",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "BIS License for Foreign Manufacturers",
                    description:
                      "BIS License certification for foreign manufacturers",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "BIS Registration Certificate",
                    description: "BIS Registration certification for products",
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
                  text: "BIS Certification ensures product quality and safety in India. It is mandatory for many products and requires testing, documentation, and approval.",
                },
              },
            ],
          })}
        </script>

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
                name: "BIS Certification India for Importers and Manufacturers",
                item: "https://bis-certifications.com/what-is-bis-certificate-indian-bis",
              },
            ],
          })}
        </script>
      </Helmet>

      <main className="relative w-full">
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
                    <BreadcrumbPage>
                      BIS Certification India for Importers and Manufacturers
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </div>

        <BISCHero />
        <BISCIndex />
        <BISCContent />
        <Footer />
        <ScrollToTopButton />
      </main>
    </>
  );
};

// BISC Product Table Section
const productsData = [
  {
    id: 1,
    isNumber: "IS 12330",
    product: "Sulphate Resisting Portland Cement",
    notificationText:
      "1. Cement (Quality Control) Order, 2003\nS.O. No. 191(E) Dt. 17 Feb 2003",
    notificationLink:
      "https://bis.gov.in/wp-content/uploads/2018/11/S.O.-191E-dated-17.02.2003.pdf",
  },
  {
    id: 2,
    isNumber: "IS 12600",
    product: "Low heat Portland Cement",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 3,
    isNumber: "IS 1489 (Part 1)",
    product: "Portland Pozzolana Cement-Part1 Fly-ash based",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 4,
    isNumber: "IS 1489 (Part 2)",
    product: "Portland Pozzolana Cement-Part 2 Calcined clay based",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 5,
    isNumber: "IS 269",
    product: "Ordinary Portland Cement",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 6,
    isNumber: "IS 3466",
    product: "Masonry Cement",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 7,
    isNumber: "IS 455",
    product: "Portland Slag Cement",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 8,
    isNumber: "IS 6452",
    product: "High Alumina Cement for Structural use",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 9,
    isNumber: "IS 6909",
    product: "Super sulphated cement",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 10,
    isNumber: "IS 8041",
    product: "Rapid hardening Portland cement",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 11,
    isNumber: "IS 8042",
    product: "White Portland Cement",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 12,
    isNumber: "IS 8043",
    product: "Hydrophobic Portland Cement",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 13,
    isNumber: "IS 8229",
    product: "Oil well Cement",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 14,
    isNumber: "IS 16415: 2015",
    product: "Composite Cement- Specification.",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 15,
    isNumber: "IS 16993: 2018",
    product: "Microfine Ordinary Portland Cement- Specification.",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 16,
    isNumber: "IS 15895: 2018",
    product: "High Alumina Refractory Cement.",
    notificationText: "",
    notificationLink: "",
  },

  // Electrical Wires, Cables, Appliances and Protection Devices and Accessories
  {
    id: 17,
    isNumber: "IS 12640 (Part 1)",
    product:
      "Residual current operated circuit breakers for house hold and similar uses-Part 1 Circuit breakers without integral overcurrent protection (RCCBs)",
    notificationText:
      "2. Electrical Wires, Cables, Appliances and Protection Devices and Accessories (Quality Control) Order, 2003 \nS.O. 189(E) dated 17 Feb 2003\nSubsequent Amendments:\nS.O. 165(E) dated 5 Feb 2004,\nS.O. 1172(E) dated 22 Aug 2005,\nS.O. 512(E) dated 18 Feb 2009,\nS.O. 2058(E) dated 7 Aug 2009 &\nS.O. 2604(E) dated 19 Oct 2010",
    notificationLink:
      "https://bis.gov.in/wp-content/uploads/2018/11/S.O.-189E-dated-17.02.2003.pdf",
  },
  {
    id: 18,
    isNumber: "IS 12640 (Part 2)",
    product:
      "Residual current operated circuit breakers for household and similar uses-Part 2 Circuit breakers with integral overcurrent protection(RCVOs)",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 19,
    isNumber: "IS 13010",
    product: "AC watt-hour meters, class 0.5, 1 & 2",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 20,
    isNumber: "IS 13779",
    product: "AC static watt-hour meters, class 1 & 2",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 21,
    isNumber: "IS 14697",
    product:
      "AC static transformer operated watt-hour and VAR-hour meters, class 0.2S & 0.5S",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 22,
    isNumber: "IS 15111 (Part 1 & 2)",
    product:
      "Self Ballasted Lamps for General Lighting Services – Part 1 : Safety Requirements & Part 2 : Performance Requirements",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 23,
    isNumber: "IS 302 (Part 2/Sec 3)",
    product:
      "Safety of household and similar electrical appliances – Electric iron",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 24,
    isNumber: "IS 302 (Part 2/Sec 201)",
    product:
      "Safety of household and similar electrical appliances– Electric immersion water-heaters",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 25,
    isNumber: "IS 302 (Part 2/Sec 202)",
    product:
      "Safety of household and similar electrical appliances –Electric stoves",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 26,
    isNumber: "IS 302 (Part 2/Sec 30)",
    product:
      "Safety of household and similar electrical appliances-Room heaters",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 27,
    isNumber: "IS 3854",
    product: "Switches for domestic and similar purposes",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 28,
    isNumber: "IS 418",
    product: "Tungsten filament general service electric lamps (upto100 W )",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 29,
    isNumber: "IS 694",
    product:
      "PVC insulated cables for working voltages up to and including 1100V",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 30,
    isNumber: "IS 8828",
    product:
      "Electrical Accessories-Circuit breakers for overcurrent protection for household and similar installations",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 31,
    isNumber: "IS 9968 (Part 1)",
    product:
      "Elastomer insulated cables (Part.1): For working voltages up to and including1100 V",
    notificationText: "",
    notificationLink: "",
  },

  // Batteries
  {
    id: 32,
    isNumber: "IS 8144",
    product: "Multi-Purpose dry batteries",
    notificationText: "3. SO 516(E), dated 25th May 1987",
    notificationLink: "",
  },

  // Food & Related Products (De-notified from compulsory BIS certification)
  {
    id: 33,
    isNumber: "IS 15757",
    product: "Follow-up formula –complimentary foods",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 34,
    isNumber: "IS 11536",
    product: "Processed cereal based complementary foods",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 35,
    isNumber: "IS 1165",
    product: "Milk-powder",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 36,
    isNumber: "IS 1166",
    product: "Condensed milk, partly skimmed and skimmed condensed milk",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 37,
    isNumber: "IS 12176",
    product: "Sweetened ultra high temperature treated condensed milk",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 38,
    isNumber: "IS 13334 (Part 1)",
    product: "Skimmed milk-powder, standard grade",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 39,
    isNumber: "IS 13334 (Part 2)",
    product: "Skimmed milk-powder, extra grade",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 40,
    isNumber: "IS 13428",
    product: "Packaged Natural Mineral Water",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 41,
    isNumber: "IS 14433",
    product: "Infant milk substitutes",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 42,
    isNumber: "IS 17945: 2022",
    product: "Food for Special Medical Purpose intended for Infants",
    notificationText: "",
    notificationLink: "",
  },

  // Feeding Bottles
  {
    id: 43,
    isNumber: "IS 14625",
    product: "Plastic Feeding Bottles",
    notificationText:
      "5. The Infant Milk Substitutes, Feeding Bottles and Infant Foods (regulation of production, supply and distribution), Act 1992",
    notificationLink: "",
  },
  {
    id: 44,
    isNumber: "IS 5168",
    product: "Glass Feeding Bottles",
    notificationText: "",
    notificationLink: "",
  },

  // Oil Pressure Stoves
  {
    id: 45,
    isNumber: "IS 10109",
    product: "Oil pressure stove, offset burner type",
    notificationText:
      "6. Oil Pressure Stoves (QC) Order, 1997\nSO 451(E) dated 16 June 1997",
    notificationLink: "",
  },
  {
    id: 46,
    isNumber: "IS 2787",
    product: "Multi-burner oil pressure stoves",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 47,
    isNumber: "IS 1342",
    product: "Oil pressure stoves",
    notificationText: "",
    notificationLink: "",
  },

  // Automobile Accessories
  {
    id: 48,
    isNumber: "IS 13098",
    product: "Automotive vehicles –Tubes for pneumatic tyres",
    notificationText:
      "7. Pneumatic Tyres and Tubes for Automotive Vehicles (Quality Control) Order, 2009\nS.O. No. 2953(E) dated 19-11-2009\nSubsequent Amendments\nS.O. No. 1057 (E) dated 11-05-2010\nS.O. No. 2758 (E) dated 9-11-2010",
    notificationLink: "",
  },
  {
    id: 49,
    isNumber: "IS 15627",
    product:
      "Automotive vehicles– Pneumatic tyres for two and three-wheeled motor vehicles",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 50,
    isNumber: "IS 15633",
    product:
      "Automotive vehicles-Pneumatic tyres for passenger car vehicles– Diagonal and radial ply",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 51,
    isNumber: "IS 15636",
    product:
      "Automotive vehicles- Pneumatic tyres for commercial vehicles-Diagonal and radial ply",
    notificationText: "",
    notificationLink: "",
  },

  // Cylinder, Valves and Regulator
  {
    id: 52,
    isNumber: "IS 14899",
    product: "Liquefied petroleum gas containers for automotive use",
    notificationText:
      "8. Explosive Act, 1884\nGas Cylinder Rules, 2016\nG.S.R. No. 1081(E) Dt. 22-11-2016",
    notificationLink: "",
  },
  {
    id: 53,
    isNumber: "IS 15100",
    product:
      "Multifunction valve assembly for permanently fixed liquefied petroleum gas (LPG) containers for automotive use",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 54,
    isNumber: "IS 3196 (Part 4)",
    product:
      "Welded low carbon steel cylinders exceeding 5 litre Water capacity for low pressure liquefiable gases Part 4 cylinders for toxic and corrosive gases",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 55,
    isNumber: "IS 3196 (Part 1)",
    product:
      "Welded low carbon steel gas cylinder exceeding 5 litre water capacity for low pressure liquefiable gases Part 1 cylinders for liquefied petroleum gas (LPG)",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 56,
    isNumber: "IS 3196 (Part 2)",
    product:
      "Welded low carbon steel gas cylinder exceeding 5-litre water capacity for low pressure liquefiable gases Part 2 cylinders for liquefiable gases other than LPG.",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 57,
    isNumber: "IS 3224",
    product:
      "Valve fittings for compressed gas cylinder excluding liquefied petroleum gas cylinders",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 58,
    isNumber: "IS 3745",
    product: "Yoke Type Valve Connection for Small Medical Gas Cylinders",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 59,
    isNumber: "IS 7142",
    product:
      "Welded low carbon steel cylinders for low pressure liquefiable gases not exceeding 5 litre water capacity",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 60,
    isNumber: "IS 7285 (Part 1)",
    product:
      "Refillable Seamless steel gas cylinders Part1 Normalized steel cylinders",
    notificationText: "",
    notificationLink: "",
  },
  {
    id: 61,
    isNumber: "IS 7285 (Part 2)",
    product:
      "Refillable Seamless steel gas cylinders Part 2 Quenched and tempered steel cylinders with tensile strength less than 1100 MPa (112 kgf/mm2)",
    notificationText: "",
    notificationLink: "",
  },
];

export const BISCProductTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  const filteredProducts = productsData.filter(
    (product) =>
      product.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.isNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section className="w-full pb-12 ">
      <div className="max-w-[88rem] mx-auto px-4 md:px-12">
        <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mb-4">
          Products Under BIS Certification as per Indian Standards
        </h2>

        <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-8">
          The following table lists products that require BIS certification in
          India along with their applicable Indian Standard (IS) numbers. These
          standards ensure quality, safety, and reliability of products in the
          Indian market.
        </p>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search for Products by name or IS number..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 pl-12 text-base font-geist text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1A8781] focus:border-transparent transition-shadow hover:shadow-md"
          />
        </div>

        <div className="rounded-md border bg-white shadow-sm">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[80px] border-r border-gray-300">
                  S.No
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[180px] border-r border-gray-300">
                  IS No.
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                  Product
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                  For Notification Details Please click on the given link
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentProducts.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                    {item.id}
                  </TableCell>
                  <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                    {item.isNumber}
                  </TableCell>
                  <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                    {item.product}
                  </TableCell>
                  <TableCell className="font-geist text-base md:text-lg text-left">
                    {item.notificationText ? (
                      <>
                        {item.notificationText.split("\n").map((line, idx) =>
                          idx === 1 && item.notificationLink ? (
                            <div key={idx}>
                              <a
                                href={item.notificationLink}
                                className="text-blue-600 hover:text-blue-800 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {line}
                              </a>
                            </div>
                          ) : (
                            <div key={idx}>{line}</div>
                          )
                        )}
                      </>
                    ) : (
                      " "
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {totalPages > 1 && (
          <div className="flex justify-between items-center mt-6">
            <div className="font-geist text-sm text-gray-700">
              Showing {indexOfFirstProduct + 1} to{" "}
              {Math.min(indexOfLastProduct, filteredProducts.length)} of{" "}
              {filteredProducts.length} results
            </div>
            <div className="flex items-center">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <span className="px-4 py-2 font-geist text-sm">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// BISC Hero Section
const BISCHero = () => {
  const { t } = useTranslation("BISCertification");

  return (
    <section
      className="relative pt-[60px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]"
      aria-label="BIS Certification Hero"
    >
      {/* Background gradient */}
      <div className="hidden md:block absolute inset-0 rounded-bl-full z-10 transform translate-x-1/2 custom-radial-gradient-cdsco"></div>

      {/* Decorative elements */}
      <div
        className="absolute top-[20%] z-[10] right-[15%] w-[20px] h-[20px] rounded-full bg-[#1A8781]/30 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-[84rem] gap-[40px] md:gap-[90px] flex flex-col md:flex-row items-center justify-center h-full w-full mx-auto px-4 md:px-0">
        {/* Left Side */}
        <article className="relative flex flex-col gap-6 md:gap-8 w-full md:w-[533px] items-start">
          <div className="inline-flex items-center">
            <div className="h-[3px] w-[40px] bg-[#1A8781] mr-4"></div>
            <span className="text-[#1A8781] font-poppins text-sm font-medium tracking-wider uppercase">
              {t("hero.badge")}
            </span>
          </div>

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              {t("hero.title.part1")}
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            {t("hero.title.part2")}
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            {t("hero.description")}
          </p>

          <nav className="flex items-center -mt-2">
            <div
              className="flex items-center cursor-pointer group"
              onClick={() => {
                const servicesSection = document.getElementById("services");
                if (servicesSection) {
                  servicesSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#125E5A]/30 group-hover:border-[#125E5A] transition-all duration-300 mr-3">
                <div className="w-3 h-3 border-t-2 border-r-2 border-[#125E5A] rotate-45 translate-x-[-1px]"></div>
              </div>
              <span className="font-geist text-[#125E5A] text-[18px] font-medium group-hover:translate-x-1 transition-all duration-300">
                {t("hero.viewServices")}
              </span>
            </div>
          </nav>
        </article>

        {/* Right Side */}
        <ServiceContactForm />
      </div>
    </section>
  );
};

// BISC Index Section
const BISCIndex = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("Overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const stickyRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const { t } = useTranslation("BISCertification");

  const SECTIONS = [
    "overview",
    "types",
    "documents",
    "process",
    "cost",
    "role",
    "conclusion",
    "faqs",
  ];

  const handleItemClick = (item) => {
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(item);
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Sticky behavior detection
  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current) {
        const rect = stickyRef.current.getBoundingClientRect();
        setIsSticky(rect.top <= 44);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Active section detection using Intersection Observer
  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        // Filter entries that are intersecting and sort by intersection ratio
        const intersectingEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (intersectingEntries.length > 0) {
          const mostVisibleEntry = intersectingEntries[0];
          const targetId = mostVisibleEntry.target.id;

          // Handle special case for FAQs
          if (targetId === "faqs") {
            setActiveSection("FAQs");
          } else {
            // Capitalize first letter for other sections
            const sectionName =
              targetId.charAt(0).toUpperCase() + targetId.slice(1);
            setActiveSection(sectionName);
          }
        }
      },
      {
        threshold: [0.1, 0.3, 0.5, 0.7, 0.9], // Multiple thresholds for better detection
        rootMargin: "-20% 0px -70% 0px", // Only trigger when section is in the middle portion of viewport
      }
    );

    // Observe all sections
    SECTIONS.forEach((section) => {
      const element = document.getElementById(section.toLowerCase());
      if (element) {
        sectionObserver.observe(element);
      }
    });

    return () => sectionObserver.disconnect();
  }, []);

  return (
    <div
      ref={stickyRef}
      className={`sticky top-0 md:top-[44px] z-[50] transition-colors duration-300 w-full h-auto md:h-20 ${isSticky ? "bg-white/70 backdrop-blur-lg" : "bg-[#B9DEEB]"
        }`}
    >
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center justify-between px-4 h-20">
        <div className="text-base font-semibold font-geist tracking-wider uppercase text-blue-900">
          {t(`navigation.${activeSection.toLowerCase()}`)}
        </div>
        <button
          ref={toggleButtonRef}
          onClick={toggleMobileMenu}
          className="p-2 rounded-md hover:bg-blue-100 transition-colors"
          aria-label={t("navigation.toggleMenu")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 border-t border-gray-200"
        >
          <div className="flex flex-col py-2">
            {SECTIONS.map((item) => (
              <div
                key={item}
                onClick={() => handleItemClick(item)}
                className={`px-4 py-3 cursor-pointer transition-colors ${item === activeSection.toLowerCase()
                  ? "bg-blue-50 text-blue-900 font-semibold"
                  : "text-blue-950 hover:bg-blue-50"
                  }`}
              >
                <div className="font-geist tracking-wider uppercase">
                  {t(`navigation.${item}`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between px-12 h-full max-w-[88rem] mx-auto overflow-x-auto">
        {SECTIONS.map((item) => (
          <div
            key={item}
            onClick={() => handleItemClick(item)}
            className="relative cursor-pointer group whitespace-nowrap px-2"
          >
            <div
              className={`text-base font-semibold font-geist tracking-wider uppercase transition-colors duration-300 ${item === activeSection.toLowerCase()
                ? "text-blue-900"
                : "text-blue-950 group-hover:text-blue-900"
                }`}
            >
              {t(`navigation.${item}`)}
            </div>
            <div
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 transition-transform duration-300 ${item === activeSection.toLowerCase()
                ? "scale-x-100"
                : "scale-x-0 group-hover:scale-x-100"
                }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// BISC Content Section
const BISCContent = () => {
  return (
    <section className="" aria-label="BIS Certification Content">
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}
          <BISCContentLeft />

          {/* Right Side */}
          <ServiceContentRight />
        </div>
      </div>
      <ServiceFaq />
      <div id="product-table">
        <BISCProductTable />
      </div>

      <div id="services">
        <Services />
      </div>
    </section>
  );
};

// BISC FAQs Section
const ServiceFaq = () => {
  const { t } = useTranslation("BISCertification");

  return (
    <section
      id="faqs"
      className="my-2 bg-white scroll-mt-20"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          {t("faqs.title")}
        </h2>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          {t("faqs.subtitle")}{" "}
          <a
            href="/contact"
            className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4 hover:text-[#1A8781] transition-colors"
          >
            {t("faqs.reachOut")}
          </a>
        </p>

        <div className="w-full max-w-[1104px] mt-[16px] md:mt-[24px] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {Object.entries(t("faqs.questions", { returnObjects: true })).map(
              ([key, value]) => (
                <AccordionItem key={key} value={key}>
                  <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                    {value.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                    {value.answer}
                  </AccordionContent>
                </AccordionItem>
              )
            )}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

const BISCContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      <div className="flex flex-col  gap-[20px] md:gap-[40px]">
        {/* Nomination Section */}
        <OverviewSection />
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/* Types Section */}
        <TypesSection />
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/* Documents Section */}
        <DocumentsSection />
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ProcessSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <CostSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <RoleSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <ConclusionSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/* Review Section */}
        <ReviewSection />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <AboutAuthor />
      </div>
    </div>
  );
};

const PointsList = ({ points, heading }) => {
  return (
    <div className="flex flex-col w-full  md:w-[441px]">
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {heading}
      </p>
      <div className="flex flex-col mt-[16px] md:mt-[24px] gap-2">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className="bg-green-500/10 p-2 rounded-full">
              <Check size={12} className="text-[#020817]" />
            </div>
            <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-normal">
              {point}
            </p>
          </li>
        ))}
      </div>
    </div>
  );
};

PointsList.propTypes = {
  points: PropTypes.arrayOf(PropTypes.string).isRequired,
  heading: PropTypes.string.isRequired,
};

const PointsListTwo = ({ points, heading, clickableRoutes = [] }) => {
  const navigate = useNavigate();

  const handlePointClick = (index) => {
    if (clickableRoutes[index]) {
      navigate(`/${clickableRoutes[index]}`);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <p className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {heading}
      </p>
      <div className="flex flex-col mt-[16px] md:mt-[20px] gap-2">
        {points.map((point, index) => (
          <li
            key={index}
            className={`flex items-start gap-2 ${clickableRoutes[index]
              ? 'cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200'
              : ''
              }`}
            onClick={() => handlePointClick(index)}
          >
            <div className="bg-green-500/10 p-2 rounded-full">
              <Check size={12} className="text-[#020817]" />
            </div>
            <p className={`font-geist text-sm md:text-lg tracking-wide text-left max-w-full leading-normal ${clickableRoutes[index]
              ? 'text-[#1d4ed8] hover:text-[#1e40af] hover:underline'
              : 'text-[#42434d]'
              }`}>
              {point}
            </p>
          </li>
        ))}
      </div>
    </div>
  );
};

PointsListTwo.propTypes = {
  points: PropTypes.arrayOf(PropTypes.string).isRequired,
  heading: PropTypes.string.isRequired,
  clickableRoutes: PropTypes.arrayOf(PropTypes.string),
};

const OverviewSection = () => {
  const { t } = useTranslation("BISCertification");

  return (
    <section id="overview" className="flex flex-col scroll-mt-20">
      {/* Overview */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          {t("overview.title")}
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <h1 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
        {t("overview.mainHeading")}
      </h1>

      <h2 className="mt-[12px] md:mt-[16px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("overview.subHeading1")}
      </h2>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("overview.description1")}
      </p>

      <h2 className="mt-[24px] md:mt-[32px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        {t("overview.subHeading2")}
      </h2>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        {t("overview.description2")}
      </p>
    </section>
  );
};

const TypesSection = () => {
  const { t } = useTranslation("BISCertification");

  return (
    <section id="types" className="flex flex-col scroll-mt-20">
      {/* Benefits */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          {t("types.label")}
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>
      {/* Title */}

      <h2 className="mainHeading">{t("types.mainTitle")}</h2>
      <p className="simpleParagraph">{t("types.description")}</p>

      <div className="pointList">
        <PointsListTwo
          points={[
            t("types.certificationTypes.fmcs"),
            t("types.certificationTypes.isiMarkScheme"),
            t("types.certificationTypes.schemeX"),
            t("types.certificationTypes.crs"),
            t("types.certificationTypes.hallmarking"),
            t("types.certificationTypes.ecoMark"),
            t("types.certificationTypes.mscs"),
            t("types.certificationTypes.lrs"),
          ]}
          clickableRoutes={[
            "a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis",
            "a-guide-to-bis-certification-indian-bis",
            "indian-bis-certification-under-scheme-x",
            "what-is-crs-bis-or-crs-registration",
            "", // hallmarking - no link
            "", // ecoMark - no link  
            "", // mscs - no link
            "", // lrs - no link
          ]}
        />
      </div>

      <h2 className="normalHeading">{t("types.fmcs.title")}</h2>

      <p className="simpleParagraph">{t("types.fmcs.description")}</p>

      <h2 className="normalHeading">{t("types.domesticManufacturer.title")}</h2>

      <div className="simpleParagraph">
        {t("types.domesticManufacturer.description")}
      </div>

      <h2 className="normalHeading">{t("types.isiMark.title")}</h2>

      <p className="simpleParagraph">{t("types.isiMark.description")}</p>

      <h2 className="normalHeading">{t("types.schemeX.title")}</h2>

      <p className="simpleParagraph">{t("types.schemeX.description")}</p>

      <h2 className="normalHeading">{t("types.crs.title")}</h2>

      <p className="simpleParagraph">{t("types.crs.description")}</p>

      <h2 className="normalHeading">{t("types.hallmarking.title")}</h2>

      <p className="simpleParagraph">{t("types.hallmarking.description")}</p>

      <h2 className="normalHeading">{t("types.ecoMark.title")}</h2>

      <p className="simpleParagraph">{t("types.ecoMark.description")}</p>

      <h2 className="normalHeading">{t("types.mscs.title")}</h2>

      <p className="simpleParagraph">{t("types.mscs.description")}</p>

      <h2 className="normalHeading">{t("types.lrs.title")}</h2>

      <div className="simpleParagraph">{t("types.lrs.description")}</div>

      <h2 className="normalHeading">{t("types.products.title")}</h2>

      <div className="simpleParagraph">{t("types.products.description")}</div>

      <h2 className="normalHeading">{t("types.benefits.title")}</h2>

      <div className="simpleParagraph">{t("types.benefits.description")}</div>

      <h2 className="normalHeading">{t("types.requiredDocuments.title")}</h2>
      <div className="simpleParagraph">
        {t("types.requiredDocuments.description")}
      </div>
    </section>
  );
};

const DocumentsSection = () => {
  const { t } = useTranslation("BISCertification");

  return (
    <section id="documents" className="flex flex-col scroll-mt-20">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          {t("navigation.documents")}
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <div className="mainHeading">{t("types.requiredDocuments.title")}</div>

      <p className="simpleParagraph">
        {t("types.requiredDocuments.description")}
      </p>
    </section>
  );
};

const ProcessSection = () => {
  const { t } = useTranslation();

  return (
    <section id="process" className="flex flex-col scroll-mt-20">
      {/* Process*/}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          {t("BISCertification:process.title")}
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <h2 className="mainHeading">
        {t("BISCertification:process.mainHeading")}
      </h2>

      <p className="simpleParagraph">
        {t("BISCertification:process.overview")}
      </p>

      <h3 className="normalHeading">
        {t("BISCertification:process.purpose.heading")}
      </h3>
      <p className="simpleParagraph">
        {t("BISCertification:process.purpose.description")}
      </p>

      <h3 className="normalHeading">
        {t("BISCertification:process.identifyStandard.heading")}
      </h3>
      <p className="simpleParagraph">
        {t("BISCertification:process.identifyStandard.description")}
      </p>

      <h3 className="normalHeading">
        {t("BISCertification:process.application.heading")}
      </h3>
      <p className="simpleParagraph">
        {t("BISCertification:process.application.description")}
      </p>
      <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
        <div className="w-full md:w-auto">
          <PointsListTwo
            points={t("BISCertification:process.application.documents.list", {
              returnObjects: true,
            })}
            heading={t(
              "BISCertification:process.application.documents.heading"
            )}
          />
        </div>
      </div>

      <h3 className="normalHeading">
        {t("BISCertification:process.registration.heading")}
      </h3>
      <p className="simpleParagraph">
        {t("BISCertification:process.registration.description")}
      </p>

      <h3 className="normalHeading">
        {t("BISCertification:process.inspection.heading")}
      </h3>
      <p className="simpleParagraph">
        {t("BISCertification:process.inspection.description")}
      </p>

      <h3 className="normalHeading">
        {t("BISCertification:process.grant.heading")}
      </h3>
      <p className="simpleParagraph">
        {t("BISCertification:process.grant.description")}
      </p>
    </section>
  );
};

const CostSection = () => {
  const { t } = useTranslation();

  return (
    <section id="cost" className="flex flex-col scroll-mt-20">
      {/* cost */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          {t("BISCertification:cost.title")}
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <h2 className="mainHeading">{t("BISCertification:cost.mainHeading")}</h2>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                {t("BISCertification:cost.table.headers.component")}
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                {t("BISCertification:cost.table.headers.details")}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            {t("BISCertification:cost.table.rows", { returnObjects: true }).map(
              (row, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                    {row.component}
                  </TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                    {row.details}
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

const RoleSection = () => {
  const { t } = useTranslation();

  return (
    <section id="role" className="flex flex-col scroll-mt-20">
      {/* role */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          {t("BISCertification:role.title")}
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <h2 className="mainHeading">{t("BISCertification:role.mainHeading")}</h2>

      <p className="simpleParagraph">
        {t("BISCertification:role.description")}
      </p>
    </section>
  );
};

const ConclusionSection = () => {
  const { t } = useTranslation("BISCertification");

  return (
    <section id="conclusion" className="flex flex-col scroll-mt-20">
      {/* cost */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          {t("conclusion.title")}
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <h2 className="mainHeading">{t("conclusion.mainHeading")}</h2>

      <p className="simpleParagraph">{t("conclusion.description")}</p>
    </section>
  );
};

const ReviewSection = () => {
  const { t } = useTranslation("BISCertification");

  return (
    <section>
      <span className="font-geist text-[20px] md:text-[25px] font-semibold text-[#131316] tracking-normal">
        {t("review.title")}
      </span>
      <div className="flex flex-col md:flex-row items-start md:items-center mt-2 justify-between gap-4 md:gap-0">
        <div className="flex gap-6">
          <button className="flex cursor-pointer items-center gap-3 font-geist text-sm md:text-lg text-[#42434d] hover:text-blue-600 transition-colors group">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              aria-hidden="true"
              className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group"
            >
              <path
                fillOpacity="0.15"
                strokeWidth="0"
                className="group-hover:text-blue-500 transition-colors duration-200"
                d="M2.75 9.75h3l3-7h.5a2 2 0 0 1 2 2v4l4.002-.011a2 2 0 0 1 1.987 2.233l-.53 4.5a2 2 0 0 1-1.986 1.767l-8.973.011h-3v-7.5Z"
              />
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                className="group-hover:text-blue-500 transition-colors duration-200"
                d="M5.75 9.75h-3v7.5h3m0-7.5 3-7h.5a2 2 0 0 1 2 2v4l4.002-.011a2 2 0 0 1 1.987 2.233l-.53 4.5a2 2 0 0 1-1.986 1.767l-8.973.011m0-7.5v7.5"
              />
            </svg>

            <span>{t("review.helpful")}</span>
          </button>

          <button className="flex cursor-pointer items-center gap-3 font-geist text-sm md:text-lg text-[#42434d] hover:text-red-600 transition-colors group">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              aria-hidden="true"
              className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group"
            >
              <path
                fillOpacity="0.15"
                strokeWidth="0"
                className="group-hover:text-red-500 transition-colors duration-200"
                d="M2.75 10.25h3l3 7h.5a2 2 0 0 0 2-2v-4l4.002.011a2 2 0 0 0 1.987-2.233l-.53-4.5a2 2 0 0 0-1.986-1.767L5.75 2.75h-3v7.5Z"
              />
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                className="group-hover:text-red-500 transition-colors duration-200"
                d="M5.75 10.25h-3v-7.5h3m0 7.5 3 7h.5a2 2 0 0 0 2-2v-4l4.002.011a2 2 0 0 0 1.987-2.233l-.53-4.5a2 2 0 0 0-1.986-1.767L5.75 2.75m0 7.5v-7.5"
              />
            </svg>

            <span>{t("review.notHelpful")}</span>
          </button>
        </div>

        <p className="font-geist text-[14px] md:text-[17px] text-[#5e5f6e] tracking-normal">
          {t("review.lastUpdated")}
        </p>
      </div>
    </section>
  );
};