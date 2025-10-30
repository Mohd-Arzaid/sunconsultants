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
} from "@/components/ui/table";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ServiceContentRight from "@/components/manual/ServicesRightSideContent/CDSCOContentRight";
import { Check, Search, SlashIcon } from "lucide-react";
import Footer from "@/common/Footer";
import ScrollToTopButton from "@/components/common/ScrollToTop";
import ServiceContactForm from "@/common/ServiceContactForm";
import PropTypes from "prop-types";
import Services from "@/components/manual/Services";
import AboutAuthor from "@/components/common/AboutAuthor";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link, useNavigate } from "react-router-dom";

export const BISCertification = () => {
  return (
    <>
      <Helmet>
        <title>BIS Certification Types, Process, Documents, Fee</title>
        <meta
          name="description"
          content="BIS certification refers to the process of obtaining a quality standard certificate from the Bureau of Indian Standards (BIS) for manufacturing and selling various products in India."
        />
        <meta
          name="keywords"
          content="BIS Certification, BIS Certification Process, BIS Registration, BIS Registration Process, BIS Certification Scheme, Product Certification Scheme, Mandatory Certification Scheme, BIS Mandatory Products List, ISI Mark, BIS FMCS, BIS Hallmarking Scheme, Eco Mark Scheme, BIS Certification Consultant, ISI Certification Consultant, BIS ISI Mark Consultant, What is BIS Certification, BIS Certification Download, BIS Certification Cost, India BIS Certification, BIS Certification Full Form, BIS Certification India, Indian BIS Certification, BIS Certification Means, BIS Certification Check, BIS License Online in India, BIS Certification Online, BIS Certificate, BIS Certificate Online."
        />
        <meta name="author" content="Sun Certifications India" />
        <meta
          name="publisher"
          content="Dhruv Aggarwal, Head of Operations at Sun Certification India"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="BIS Certification Types, Process, Documents, Fee"
        />
        <meta
          property="og:description"
          content="BIS certification refers to the process of obtaining a quality standard certificate from the Bureau of Indian Standards (BIS) for manufacturing and selling various products in India."
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
          content="BIS Certification Types, Process, Documents, Fee"
        />
        <meta
          name="twitter:description"
          content="BIS certification refers to the process of obtaining a quality standard certificate from the Bureau of Indian Standards (BIS) for manufacturing and selling various products in India."
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
          href="https://bis-certifications.com/ar/ma-huwa-shahadat-bis-bis-alhind"
          hrefLang="ar"
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
    "schemes",
    "process",
    "documents",
    "cost",
    "air",
    "conclusion",
    "faqs",
  ];

  // Create a mapping for section names
  const getSectionDisplayName = (section) => {
    const sectionNames = {
      overview: "OVERVIEW",
      schemes: "SCHEMES",
      process: "PROCESS",
      documents: "DOCUMENTS",
      cost: "COST",
      air: "AIR",
      conclusion: "CONCLUSION",
      faqs: "FAQS",
    };
    return sectionNames[section] || section.toUpperCase();
  };

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
      className={`sticky top-0 md:top-[44px] z-[50] transition-colors duration-300 w-full h-auto md:h-20 ${
        isSticky ? "bg-white/70 backdrop-blur-lg" : "bg-[#B9DEEB]"
      }`}
    >
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center justify-between px-4 h-20">
        <div className="text-base font-semibold font-geist tracking-wider uppercase text-blue-900">
          {getSectionDisplayName(activeSection.toLowerCase())}
        </div>
        <button
          ref={toggleButtonRef}
          onClick={toggleMobileMenu}
          className="p-2 rounded-md hover:bg-blue-100 transition-colors"
          aria-label="Toggle Menu"
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
                className={`px-4 py-3 cursor-pointer transition-colors ${
                  item === activeSection.toLowerCase()
                    ? "bg-blue-50 text-blue-900 font-semibold"
                    : "text-blue-950 hover:bg-blue-50"
                }`}
              >
                <div className="font-geist tracking-wider uppercase">
                  {getSectionDisplayName(item)}
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
              className={`text-base font-semibold font-geist tracking-wider uppercase transition-colors duration-300 ${
                item === activeSection.toLowerCase()
                  ? "text-blue-900"
                  : "text-blue-950 group-hover:text-blue-900"
              }`}
            >
              {getSectionDisplayName(item)}
            </div>
            <div
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 transition-transform duration-300 ${
                item === activeSection.toLowerCase()
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
        {/* Overview Section */}
        <OverviewSection />
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/* Schemes Section */}
        <SchemesSection />
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/* Process Section */}
        <ProcessSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        {/* Documents Section */}
        <DocumentsSection />
        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <CostSection />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

        <AIRSection />
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
            className={`flex items-start gap-2 ${
              clickableRoutes[index]
                ? "cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200"
                : ""
            }`}
            onClick={() => handlePointClick(index)}
          >
            <div className="bg-green-500/10 p-2 rounded-full">
              <Check size={12} className="text-[#020817]" />
            </div>
            <p
              className={`font-geist text-sm md:text-lg tracking-wide text-left max-w-full leading-normal ${
                clickableRoutes[index]
                  ? "text-[#1d4ed8] hover:text-[#1e40af] hover:underline"
                  : "text-[#42434d]"
              }`}
            >
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
  return (
    <section id="overview" className="flex flex-col scroll-mt-20">
      {/* Overview */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          OVERVIEW
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <h1 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
        BIS Certification for Manufacturers and Importers in India
      </h1>

      <img
        src="/services-main-images/IndianBisCertification.png"
        alt="Indian BIS Certification"
        title="BIS Certificate for Indian manufactures"
        className="w-full h-auto rounded-lg shadow-md"
      />

      <h2 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Introduction: Why BIS Certification Matters
      </h2>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Take for instance, a manufacturer from Germany who has invented a unique
        electronic device and is planning to sell it in the fast paced Indian
        Market. The device is unique, and safe and has also gained approvals in
        Europe. However, when the device is brought to the port in India, the
        customs officers hold the device. The question is, "Why?" The answer is,
        the device is supposed to have a BIS certification, which is a crucial
        part to sell electronic products in India.
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Many global and Indian manufacturers deal with the same instances every
        year. For Indian consumers, the BIS mark on a product is not just a
        logo, it is a mark of trust that the product has been tested for
        quality, safety, and reliability. For a business, it is the gateway to
        one of the largest markets in the entire world.
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        This article will answer all the queries on BIS certification, its
        necessity, processes, benefits, schemes, costs, and the system and its
        navigation available to both foreign and domestic manufacturers.
      </p>

      <h2 className="mt-[24px] md:mt-[32px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        What is BIS Certification for Manufacturers and Importers?
      </h2>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        BIS Certification is a quality assurance and safety certification
        provided by the Bureau of Indian Standards (BIS), the national
        certification body of India under the Ministry of Consumer Affairs. The
        BIS certification ensures that a product conforms to the Indian
        Standards (IS) in regard to performance, safety, and quality.
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        When a product fulfills these quality standards requirements, the Bureau
        of Indian Standards issues a BIS license or BIS certificate, signifying
        the product is eligible to bear the ISI mark (for domestic schemes) or a
        CRS mark with a unique registration number (under BIS Compulsory
        Registration Scheme).
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        For many Indian manufacturers and importers securing BIS certification
        is a must. It covers a wide range of products including electrical
        appliances, cement and steel products, package drinking water,
        electronics like mobile phones, LED lights, power banks, precious metal
        jewelry (through hallmarking) and many more. The manufacturers and
        importers of these mandatory products cannot legally sell or distribute
        goods in India without BIS recognition.
      </p>

      <h2 className="mt-[24px] md:mt-[32px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        A Brief History of BIS in India
      </h2>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The Bureau of Indian Standards (BIS) was formed in 1986 taking over the
        Indian Standards Institution (ISI) which was formed in 1947. BIS is now
        considered to be a quality guardian for standards in India and has
        aligned their practices to international levels and made the necessary
        amendments for the Indian conditions.
      </p>

      <h3 className="mt-[20px] md:mt-[24px] font-semibold font-geist text-[16px] md:text-[18px] text-[#131316]">
        Remarkable Milestones
      </h3>

      <div className="mt-[16px] md:mt-[24px]">
        <PointsListTwo
          points={[
            "In 1947 the ISI was founded to support quality control systems after the country gained independence.",
            "In 1955 the ISI mark was awarded, becoming one of the most famous quality symbols in India.",
            "In 1986, the BIS Act was passed, replacing ISI with the Bureau of Indian Standards.",
            "In 2016 and 2018, further amendments enriched the BIS's responsibilities, making hallmarking and product certification more thorough.",
          ]}
          heading=""
        />
      </div>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Currently, BIS guarantees the safety, reliability, and standardization
        of thousands of tools and machinery for Indian users across multiple
        industries.
      </p>

      <h2 className="mt-[24px] md:mt-[32px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Why is BIS Certification mandatory in India?
      </h2>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The Indian market is enormous, ever-changing, and sensitive to price
        shifts. However, this openness also leaves the market exposed to cheap
        and unsafe goods. In this context, BIS certification acts as a
        protective barrier.
      </p>

      <div className="mt-[16px] md:mt-[24px]">
        <PointsListTwo
          points={[
            "Consumer Safety - protects people from potential accidents, health issues, and deceit.",
            "Market Regulation - ensures that non-conforming products do not enter the Indian market.",
            "Trust and Confidence - bolsters consumer belief in local and international products.",
            "Global Alignment - assists foreign companies in aligning with India's regulatory structure.",
            "Fair Competition - every market participant, irrespective of size, is assured of competing purely on quality.",
          ]}
          heading=""
        />
      </div>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        BIS certification for packaged drinking water is an example of where
        lacking certification could pose health issues. Other equally lacking
        standards of product certification for heaters, toasters, and other
        electric appliances can lead to fires. Therefore, by having a BIS
        certification, the government makes sure these challenges are addressed.
      </p>
    </section>
  );
};

const SchemesSection = () => {
  return (
    <section id="schemes" className="flex flex-col scroll-mt-20">
      {/* Schemes */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          SCHEMES
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
        BIS Certification Schemes
      </h2>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        BIS has numerous certification schemes designed for varied industries
        and product types. Each is designed to address the particular needs of
        the industry and the product.
      </p>

      <div className="mt-[16px] md:mt-[24px]">
        <PointsListTwo
          points={[
            "FMCS – Foreign Manufacturers Certification Scheme",
            "ISI Mark Scheme (Domestic Manufacturers)",
            "Scheme X under Indian BIS",
            "CRS – Compulsory Registration Scheme",
            "Hallmarking Scheme (Jewellery & Precious Metals)",
            "Eco Mark Certification",
            "Management Systems Certification Scheme (MSCS)",
            "LRS (Lab Recognition Scheme)",
          ]}
          heading=""
          clickableRoutes={[
            "a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis",
            "bis-isi-mark-certification",
            "indian-bis-certification-under-scheme-x",
            "what-is-crs-bis-or-crs-registration",
            "", // hallmarking - no link
            "", // ecoMark - no link
            "", // mscs - no link
            "", // lrs - no link
          ]}
        />
      </div>

      <h3 className="mt-[24px] md:mt-[32px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        ISI Mark Scheme (Domestic Manufacturers)
      </h3>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        For Indian manufacturers, getting a BIS licence is a prerequisite for
        ensuring legal sales of their products within the country. This
        certification is issued by the Bureau of Indian Standards (BIS) to
        certify satisfaction of Indian Standards pertaining to quality, safety
        and performance benchmarks for the products. This includes factory
        audits, product testing and compliance checks with the BIS parameters.
        Once the product is passed, the manufacturers are allowed to put the ISI
        mark on the product. This mark is a trade mark for the manufacturer and
        helps the customer identify a genuine, ISI certified product.
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Regardless of whether it is for electronics, steel, cement, plastic, or
        construction materials, obtaining a BIS certificate is essential for
        gaining market access. Unlike gaining consumer confidence, a BIS
        certificate enhances the reputation of Indian manufacturers, enables
        them to participate in government contracts, and opens up a host of
        other business opportunities. Most importantly, the absence of BIS
        certification can have damaging repercussions, ranging from legal fines
        and product recall to a complete ban of sale in India. Therefore, BIS
        compliance is more than a legal requirement, it is a targeted strategy
        for expanding and maintaining consumer confidence.
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        For Indian manufacturers, the ISI mark scheme is the most prestigious
        mark. Under the scheme, Indian manufacturers are required to have their
        products tested at BIS recognized testing facilities. Manufacturing
        sites are subject to inspection and testing. Compliant products are
        granted approval to use the ISI mark. It is an offence to supply
        products like cement, LPG cylinders, electrical cables, packaged
        drinking water and more, without the ISI mark.
      </p>

      <h3 className="mt-[24px] md:mt-[32px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        FMCS – Foreign Manufacturers Certification Scheme
      </h3>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The Foreign Manufacturers Certification Scheme (FMCS) is a scheme
        developed by the Bureau of Indian Standards for foreign companies
        wishing to enter the Indian Market. This scheme guarantees the safety,
        quality, and performance assurance of the products manufactured abroad
        complying with the required Indian standards. As per FMCS, foreign
        companies wishing to sell products in India must first acquire a Bureau
        of Indian Standards certificate or a license. Like Indian manufacturers,
        foreign manufacturers are also required to secure a BIS license to use
        ISI mark on their product. The desirable ISI mark is given after
        extensive evaluation that includes factory and rigorous product sample
        testing against the Indian Standards.
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        A foreign manufacturer is required to appoint an Authorized Indian
        Representative (AIR), who is responsible for communication and
        coordination, as the first point of contact with the Bureau of Indian
        Standards (BIS) for the scheme. It includes the filing of an
        application, in depth compliance evaluation, and the assumption of all
        necessary obligations to achieve compliance within the deadlines. As a
        result of following the FMCS guidelines, foreign companies are able to
        enter the Indian market, as well as acquire goodwill with the customers.
        Any product with an ISI mark shows a high level of quality, safety, and
        reliability assurance in India.
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        No foreign products which fall under the regulated categories are
        allowed to enter India without the FMCS certification.
      </p>

      <h3 className="mt-[24px] md:mt-[32px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Scheme X (Omnibus Technical Regulation)
      </h3>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Schome X, or the Omnibus Technical Regulation, is another BIS
        certification Scheme designed by the Bureau of Indian Standards to help
        simplify the compliance procedures of industries in mechanical and
        electrical domains. Unlike the other certification schemes, Scheme X
        focuses on reducing documentation, assessments, and approvals while
        ensuring that products adhere to the Indian Standards. The products with
        the standard mark are of exceptional quality and safety and can be sold
        after undergoing type testing, factory inspections, and simple
        certification of mandatory requirements.
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The scheme X covers heavy machinery and electrical equipment safety
        guidelines for products such as pumps, cranes, transformers, machine
        tools and other heavy engineering products. These are the most pertinent
        industries and all where reliability and safety is a necessity. Scheme X
        is convenient as it shortens the time and costs of the complex BIS
        certification. It aims to streamline the compliance process in order to
        facilitate quicker clearance for marketing and enhanced reputation
        without compromising the quality and safety standards. The enduring and
        traditional reputation of the Bureau of Indian Standards enables easier
        international trade, indispensable for companies to meet compliance
        requirements and boost competitiveness.
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        BIS Scheme X is mandatory to access the Indian heavy machine industry.
        This new scheme is important for improved market competition, innovation
        and compliance to regulations which are streamlined through this
        simplified yet robust structure.
      </p>

      <h3 className="mt-[24px] md:mt-[32px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Compulsory Registration Scheme (CRS)
      </h3>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The Bureau of Indian Standards (BIS) has developed a BIS certification
        program called the Compulsory Registration Scheme (CRS) aimed at
        regulating IT and electronic products in India. It focuses on assessing
        the safety and quality of high-risk products like LED lights, mobile
        phones, laptops, power banks, and other consumer electronics against
        Indian Standards. CRS, in contrast to the ISI scheme, does not issue an
        ISI mark, but certified products, in compliance with the scheme, bear a
        CRS mark with a unique registration number. All electronics and IT
        products need to be tested in the BIS-recognized laboratories and
        formally registered with BIS CRS, used to ensure compliance before they
        can be sold or imported into India.
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        This scheme is essential for protecting Indian consumers from unsafe,
        substandard, or counterfeit electronics, particularly in the case of the
        rapidly growing digital market. Both Indian and foreign manufacturers
        need to acquire CRS certification. The foreign companies must appoint an
        Authorized Indian Representative AIR to ensure compliance. The BIS
        continually updates the list of products covered under the CRS to
        include new products and technologies and emerging safety issues. For
        manufacturers, obtaining BIS registration under CRS is an added
        advantage since it helps in regulatory compliance and it also increases
        customer's trust, company's reputation, and market access in the
        electronics industry in India.
      </p>

      <h3 className="mt-[24px] md:mt-[32px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Hallmarking Scheme
      </h3>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        In India, hallmarking of gold and silver jewellery is compulsory under
        the Hallmarking Scheme and regulated by the Bureau of Indian Standards
        (BIS) which guarantees the purity and genuineness of the jewellery.
        Precious Metal articles are tested at BIS approved Assaying and
        Hallmarking Centres (AHC) and are then stamped with hallmark signs. This
        process is only completed if the articles fulfill the Indian Standards
        laid out at the start. Jewelers must first acquire a BIS license which
        allows them to sell hallmarked jewellery. This is the only way to do so
        legally. The jeweler is obliged to undergo and complete product testing,
        BIS audits, and continuous compliance monitoring to sell hallmarked
        jewellery. The process, in the end, protects the consumer and ensures
        the purity, weight and quality and limits malpractice as well as fraud
        in the jewellery market.
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        For Indian consumers, gold and silver are not just ornaments but also
        major investments, which makes trust and transparency essential. The
        hallmarking jewelry is a mark of assurance for the common citizen in the
        country that every piece of jewelry for sale has gone through extensive
        testing against various national benchmarks and fair trading practices.
        Jewelers can showcase their credibility and market reputation by
        hallmarking jewelry. The inability to comply with the rules set brings
        punishment which can include suspension of license. For hallmarking
        under BIS, it serves as a fulfillment of principle-based and legal
        obligations. This not only increases consumer satisfaction but also
        enhances the Indian jewellery market as a whole. This is also the case
        for smaller retailers as well as larger scale manufacturers.
      </p>

      <h3 className="mt-[24px] md:mt-[32px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Eco Mark Certification
      </h3>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The Eco Mark is an innovation-centered recognition scheme created by the
        Bureau of Indian Standards (BIS) aimed at the promotion of eco-friendly
        goods. Unlike the traditional certification which concerns itself
        prominently with safety and quality parameters, the Eco Mark is awarded
        to goods which conform to Indian Standards and which show at least some
        reduced level of the adverse environmental impact during any one or more
        of the various stages of the life cycle of the goods. Eco Mark
        certification is awarded only after considerable testing and the proving
        of criteria - compliance which includes emission levels, non-toxicity,
        the rate of biodegrade, capacity to recycle and overall interactions
        with the system. Eco Mark, just like the ISI mark, is an emblem of
        assurance from the government which has been granted the status of a
        certification mark, albeit with more pronounced goals of environmental
        sustainability.
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The BIS licence with Eco Mark certifies that a company engages in
        responsible manufacturing and cares about the environment. It ensures
        compliance with the law and creates a competitive advantage with
        protective consumers and sustainability-oriented businesses. Eco Mark
        helps for the industry to trust and adopt green practices and for the
        consumers to trust that the products they buy are safe and
        environmentally responsible. Eco Mark supports India's vision for
        enhanced quality protection with environmental protection under BIS.
      </p>

      <h3 className="mt-[24px] md:mt-[32px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        Management Systems Certification Scheme (MSCS)
      </h3>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The Management Systems Certification Scheme (MSCS) initiated by the
        Bureau of Indian Standards (BIS) is a stepwise procedure which evaluates
        and recognizes concerned firms for the implementation of internationally
        accepted and recognized management systems. MSCS framework consists of
        ISO Standards like ISO 9001 Quality Management, ISO 14001 Environment
        Management, ISO 45001 Occupational Health and Safety Management System
        and others. MSCS certifies the firm for the legal operations,
        consistency, and continuous improvement of the operations. Certified
        firms go through numerous assessments and audits which helps them build
        trust among the customers, regulators, and stakeholders which
        strengthens the guarantee of safety, quality, and sustainability.
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        BIS is the national standards body of India and is the certifying body
        for the enhancement of the organization's reputation and credibility
        domestically and outside India. MSCS besides fostering accountability
        through periodic supervision and recertification also frees up a
        business to actively support public led programs like Make in India and
        Atmanirbhar Bharat. Besides legal obligation, the scheme also helps in
        cultivating a culture of integrity, efficiency and fair trading. MSCS
        encourages the trade and investment by the certified companies and BIS
        plays a crucial part in the development of the quality ecosystem of the
        country.
      </p>

      <h3 className="mt-[24px] md:mt-[32px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
        LRS – Lab Recognition Scheme
      </h3>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Under the Bureau of Indian Standards (BIS), the Lab Recognition Scheme
        (LRS) is an integral part of a system that guarantees the dependability
        and overall competency of laboratories that test and certify products
        for BIS approval. Such labs are critically appraised on diverse
        attributes which include technical knowledge, quality of the workforce,
        infrastructure, and the overall competency and satisfaction of the lab
        with the ISO/ IEC 17025 standard. These labs, once approved, are
        permitted to perform testing on the product for which conformity
        assessment is done as part of various BIS certification programs such as
        the ISI Mark Scheme and the Compulsory Registration Scheme (CRS). It is
        clear that for manufacturers, in particular for importers and exporters,
        the reports obtained from an LRS approved lab are a critical requirement
        to achieve a BIS certificate that is a legal requirement for certain
        products.
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The LRS is empowering India's assurance systems by maintaining equity in
        testing outcomes and ensuring that all outcomes are consistent and
        globally benchmarked, while accrediting only reliable and sound
        laboratories. To uphold integrity and transparency, BIS performs regular
        audits, proficiency tests, and surveillance of recognized schematic
        labs. Recognition of this certification enables BIS to improve trust
        from consumers while making the certification process more efficient for
        industries, as only safe, compliant, and high-quality products will be
        offered in the Indian market. For organizations that aim to receive BIS
        certification, collaboration with LRS-approved labs is the most
        essential to achieve compliance and market access.
      </p>

      <h3 className="mt-[20px] md:mt-[24px] font-semibold font-geist text-[16px] md:text-[18px] text-[#131316]">
        Products That Require BIS Certification
      </h3>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        BIS certification applies to a wide variety of products. Examples
        include:
      </p>

      <div className="mt-[16px] md:mt-[20px]">
        <PointsListTwo
          points={[
            "Electrical & Electronics – LED lights, mobile phones, adapters, laptops.",
            "Construction Materials – Cement, steel bars, structural products.",
            "Consumer Goods – Packaged drinking water, cooking gas cylinders.",
            "Jewelry & Precious Metals – Gold and silver articles under hallmarking.",
            "Industrial Equipment – Pumps, transformers, machine tools.",
          ]}
          heading=""
        />
      </div>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The list continues to grow as new risks and technologies emerge.
      </p>

      <h3 className="mt-[20px] md:mt-[24px] font-semibold font-geist text-[16px] md:text-[18px] text-[#131316]">
        Benefits of BIS Certification
      </h3>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        For companies, the BIS certificate offers much more than mere compliance
        with the law.
      </p>

      <div className="mt-[16px] md:mt-[20px]">
        <PointsListTwo
          points={[
            "Legal compliance: no fines, no bans, no seizure.",
            "Market access: needed for selling regulated products in India.",
            "Consumer trust: builds with the well-recognized ISI mark as a sign of proof.",
            "Competitive advantage: as certified companies easily differentiate from uncertified competitors.",
            "Export facilitation: many international buyers understand and appreciate BIS certification.",
            "Participation in Tenders: many government projects award contracts for goods which are BIS certified.",
          ]}
          heading=""
        />
      </div>
    </section>
  );
};

const ProcessSection = () => {
  return (
    <section id="process" className="flex flex-col scroll-mt-20">
      {/* Process */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          PROCESS
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
        BIS Certification process
      </h2>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        The BIS certification process follows a structured flow:
      </p>

      <div className="mt-[16px] md:mt-[24px]">
        <PointsListTwo
          points={[
            "Identify Relevant Standard: Select applicable Indian Standard (IS).",
            "Application Submission: File with BIS and enclose any pertinent documents.",
            "Product Testing: Testing done in approved BIS labs.",
            "Factory Inspection: Facilities are inspected by BIS officers.",
            "BIS License: certificate is awarded for successful assessment evaluation.",
            "Surveillance: sustained compliance along with license changes is the new norm.",
          ]}
          heading=""
        />
      </div>
    </section>
  );
};

const DocumentsSection = () => {
  return (
    <section id="documents" className="flex flex-col scroll-mt-20">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          DOCUMENTS
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
        Documents Required for BIS Certification
      </h3>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        A strong documentation package ensures smooth processing. Key
        requirements include:
      </p>

      <div className="mt-[16px] md:mt-[24px]">
        <PointsListTwo
          points={[
            "Business license or company registration documents.",
            "Manufacturing process flow chart.",
            "List of machinery and equipment.",
            "Product details and technical specifications.",
            "Test reports from BIS-recognized labs.",
            "Quality control manual.",
            "Trademark certificate.",
          ]}
          heading=""
        />
      </div>

      <h4 className="mt-[20px] md:mt-[24px] font-semibold font-geist text-[16px] md:text-[18px] text-[#131316]">
        For foreign manufacturers:
      </h4>

      <div className="mt-[16px] md:mt-[20px]">
        <PointsListTwo
          points={[
            "Appointment of an Authorized Indian Representative (AIR).",
            "Proof of representation and identity documents.",
          ]}
          heading=""
        />
      </div>
    </section>
  );
};

const CostSection = () => {
  return (
    <section id="cost" className="flex flex-col scroll-mt-20">
      {/* Cost */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          COST
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
        BIS Certification Cost
      </h3>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                Cost Component
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                Details
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Application Fee
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                One-time, non-refundable fee depending on product type
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Testing Charges
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Based on complexity; paid to BIS-recognized labs
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Annual License Fee
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Paid annually to maintain BIS license
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Inspection/Factory Audit Charges
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Charged if BIS officials visit factory (domestic or
                international travel extra)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Consultancy Charges (if applicable)
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Optional, for end-to-end compliance help from consultants
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

const AIRSection = () => {
  return (
    <section id="air" className="flex flex-col scroll-mt-20">
      {/* AIR */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          AIR
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>
      <h3 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
        Role of Authorized Indian Representative (AIR)
      </h3>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        For foreign manufacturers, the Authorized Indian Representative (AIR) is
        critical.
      </p>

      <div className="mt-[16px] md:mt-[24px]">
        <PointsListTwo
          points={[
            "Handles all communication with BIS.",
            "Gathers and submits documents, then facilitates the inspection process.",
            "Ensures compliance regarding certification, before, and after.",
            "Must be an Indian citizen or an organization with a registered local address.",
          ]}
          heading=""
        />
      </div>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        In the absence of an AIR, obtaining BIS certification for foreign
        companies is impossible.
      </p>
    </section>
  );
};

const ConclusionSection = () => {
  return (
    <section id="conclusion" className="flex flex-col scroll-mt-20">
      {/* Conclusion */}
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
          CONCLUSION
        </span>
        <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
      </div>

      <div className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
        Conclusion
      </div>

      <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        Having a BIS certification is a necessity for doing business in India.
        It is no longer an optional certification in business. It is crucial for
        business success and building trust. BIS is essential for safety and
        success in India. For manufacturers and importers, it offers an easy and
        safe business setup environment. Legal issues and fines are no longer a
        concern. With a BIS mark, consumer trust is guaranteed.
      </p>

      <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
        India is one of the biggest growing economies in the world and gaining
        access to sell there can help an exporter grow. No matter if you are a
        manufacturer in India or abroad, the license BIS is needed to
        manufacture or sell products in the Indian market. It's required, and it
        supposedly unlocks business prospects with India's growing population
        ever. It's an investment in safety and consumer bond, and brand
        reputation as well as in credibility and long-term growth.
      </p>
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
