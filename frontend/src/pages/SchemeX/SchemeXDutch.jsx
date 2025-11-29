/* eslint-disable react/prop-types */
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Check, Search, SlashIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect, useMemo } from "react";

import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";
import ScrollToTopButton from "@/components/common/ScrollToTop";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// Contact Form Import
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { ClockLoader } from "react-spinners";
import axios from "axios";
import BISImage from "../../assets/images/BIS.jpg";
import BISCRS from "../../assets/images/BISCRS.jpg";
import PlasticWasteManagement from "../../assets/images/PlasticWasteManagement.jpg";
import EPRCertificate from "../../assets/images/EPRCertificate.jpg";
import LMPC from "../../assets/images/LMPC.jpg";
import ISIMark from "../../assets/images/ISIMark.jpg";
import { BoxReveal } from "@/components/magicui/box-reveal";
import FooterDutch from "@/components/manual/Footer/FooterDutch";
import ServicesRightSideContentDutch from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentDutch";
import ServiceAuthorDutch from "@/components/manual/ServiceAuthor/ServiceAuthorDutch";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const SchemeXDutch = () => {
  return (
    <div className="relative">
      {/* Scheme X Meta Tags */}
      <SchemeXMetaTags />
      {/* Scheme X Breadcrumb */}
      <SchemeXBreadcrumb />
      {/* Scheme X Hero Section */}
      <SchemeXHero />
      {/* Scheme X Index Section */}
      <SchemeXIndex />
      {/* Scheme X Main Content Section */}
      <SchemeXMainContent />
      {/* Footer Section */}
      <FooterDutch />
      {/* Scroll To Top Button Section */}
      <ScrollToTopButton />
    </div>
  );
};

export default SchemeXDutch;

const SchemeXMetaTags = () => {
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: window.location.origin + "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Indian Bis Certification Under Scheme-X",
        item: window.location.href,
      },
    ],
  };
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>
        BIS Scheme X Certificering | Veiligheid van Machines en Elektrische
        Apparatuur
      </title>
      <meta
        name="description"
        content="BIS Scheme X-certificering is vereist om de kwaliteit en veiligheid van laagspanningschakelkasten, bedieningsapparatuur, machines en elektrische apparatuur te waarborgen."
      />
      <meta
        name="keywords"
        content="Scheme X, BIS Scheme X, BIS Scheme X Certificering, Scheme X Certificering, machinecertificering, certificering van elektrische apparatuur"
      />

      <meta name="author" content="Dhruv Aggarwal" />
      <meta name="publisher" content="Sun Certifications India" />
      <meta name="robots" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href={window.location.href} />

      {/* Open Graph Meta Tags */}
      <meta
        property="og:title"
        content="BIS Scheme X Certificering | Veiligheid van Machines en Elektrische Apparatuur"
      />
      <meta
        property="og:description"
        content="BIS Scheme X-certificering is vereist om de kwaliteit en veiligheid van laagspanningschakelkasten, bedieningsapparatuur, machines en elektrische apparatuur te waarborgen."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />

      {/* Twitter Meta Tags */}
      <meta
        name="twitter:title"
        content="BIS Scheme X Certificering | Veiligheid van Machines en Elektrische Apparatuur"
      />
      <meta
        name="twitter:description"
        content="BIS Scheme X-certificering is vereist om de kwaliteit en veiligheid van laagspanningschakelkasten, bedieningsapparatuur, machines en elektrische apparatuur te waarborgen."
      />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Breadcrumb Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbStructuredData)}
      </script>
    </Helmet>
  );
};
const SchemeXBreadcrumb = () => {
  return (
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
                  Indiase BIS-certificering onder Scheme-X
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const SchemeXHero = () => {
  return (
    <main className="relative pt-[60px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]">
      {/* Background gradient */}
      <div className="hidden md:block absolute inset-0 rounded-bl-full z-10 transform translate-x-1/2 custom-radial-gradient-cdsco"></div>

      {/* Decorative elements */}
      <div
        className="absolute top-[20%] z-[10] right-[15%] w-[20px] h-[20px] rounded-full bg-[#1A8781]/30 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-[84rem] gap-[40px] md:gap-[90px] flex flex-col md:flex-row items-center justify-center h-full w-full mx-auto px-4 md:px-0">
        {/* Left Side */}
        <div className="relative flex flex-col gap-6 md:gap-8 w-full md:w-[533px] items-start">
          <div className="inline-flex items-center">
            <div className="h-[3px] w-[40px] bg-[#1A8781] mr-4"></div>
            <span className="text-[#1A8781] font-poppins text-sm font-medium tracking-wider uppercase">
              Gecertificeerde Expertise
            </span>
          </div>

          <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              BIS Scheme X Certificering
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            BIS Scheme X-certificering omvat Machines, Elektrische Apparatuur en
            Componentassemblages, en Sub-assemblages onder de Omnibus Technische
            Verordening (OTR).
          </p>

          <div className="flex items-center -mt-2">
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
                Diensten Bekijken
              </span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <SchemeXHeroContactForm />
      </div>
    </main>
  );
};

const SchemeXHeroContactForm = () => {
  const [loading, setLoading] = useState(false);

  // Function to get page name based on URL
  const getPageName = () => {
    const path = window.location.pathname;
    // Service pages
    if (path.includes("/nl/indiaas-bis-certificaat-volgens-schema-x"))
      return "Scheme X Dutch";
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    productName: "",
    message: "",
    pageUrl: window.location.href,
    pageName: getPageName(),
  });

  const { fullName, email, phoneNumber, companyName, productName, message } =
    formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // console.log("Form Data:", formData);

    // Full name validation
    const nameRegex = /^[a-zA-Z\s.'-]{2,50}$/;
    if (!nameRegex.test(fullName)) {
      toast({
        variant: "destructive",
        title: "Voer een geldige volledige naam in.",
        description: "Naam mag alleen letters en spaties bevatten.",
      });
      setLoading(false);
      return;
    }

    // Email validation - allow any domain
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "Voer een geldig e-mailadres in.",
        description: "Controleer of het e-mailformaat correct is",
      });
      setLoading(false);
      return;
    }

    // Phone number validation
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "Voer een geldig telefoonnummer in",
        description: "Telefoonnummer moet (8-15 cijfers) zijn",
      });
      setLoading(false);
      return;
    }

    //  console.log(BASE_URL);
    try {
      const response = await axios.post(
        `${BASE_URL}/appointment/submit-appointment`,
        formData
      );

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast({
        title: "Contactformulier succesvol ingediend!",
        description:
          "Bedankt voor het contacteren. Ons team zal binnenkort contact met u opnemen.",
      });

      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        companyName: "",
        productName: "",
        message: "",
        pageUrl: window.location.href,
        pageName: getPageName(),
      });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Er is iets misgegaan";
      toast({
        variant: "destructive",
        title:
          errorMessage || "Mislukt om contactformulierdetails in te dienen!",
        description:
          "Er is iets misgegaan. Controleer uw gegevens en probeer het opnieuw.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="z-20 w-full md:w-[580px] h-auto md:h-[435px] flex flex-col">
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-poppins font-semibold text-[18px] md:text-[20px] text-[#008080]">
          Neem Contact Op
        </span>
        <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
      </div>

      <h3 className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
        Maak een Afspraak
      </h3>

      <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
        Wilt u contact opnemen met ons team en een gesprek inplannen?
        <span className="text-black"> Probeer Nu</span>
      </p>

      <form onSubmit={handleFormSubmit} className="flex flex-col mt-5 gap-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <Input
            disabled={loading}
            required
            type="text"
            name="fullName"
            value={fullName}
            onChange={handleOnChange}
            placeholder="Volledige Naam *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="E-mailadres *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <Input
            disabled={loading}
            required
            type="tel"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleOnChange}
            placeholder="Contactnummer *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="companyName"
            value={companyName}
            onChange={handleOnChange}
            placeholder="Bedrijfsnaam *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <Input
            disabled={loading}
            required
            type="text"
            name="productName"
            value={productName}
            onChange={handleOnChange}
            placeholder="Productnaam *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="message"
            value={message}
            onChange={handleOnChange}
            placeholder="Vereiste Certificering*"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />
        </div>

        <Button
          disabled={loading}
          type="submit"
          className="disabled:opacity-100 mt-1 w-[218px] h-[50px] md:h-[60px] bg-[#1A8781] hover:bg-[#1A8781]/90 rounded-[5px] text-[15px] md:text-[15px] font-poppins tracking-wide leading-[28px] shadow-elegant transition-all duration-300 hover:translate-y-[-2px]"
        >
          {loading ? (
            <div className="flex gap-3 items-center justify-center">
              <ClockLoader size={22} color="#fff" />
              <span>Verzenden</span>
            </div>
          ) : (
            <div className="flex gap-3 items-center justify-center">
              <span>Afspraak Maken</span>
            </div>
          )}
        </Button>
      </form>
    </div>
  );
};

const SchemeXIndex = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const stickyRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const SECTIONS = useMemo(
    () => ["overview", "process", "documents", "conclusion"],
    []
  );

  const MENU_ITEMS = {
    overview: "Overzicht",
    process: "Proces",
    documents: "Documenten",
    conclusion: "Conclusie",
  };

  const handleItemClick = (item) => {
    const element = document.getElementById(
      item.toLowerCase().replace(/\s+/g, "-")
    );
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

  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 200; // Offset for header

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const section = SECTIONS[i];
        const element = document.getElementById(section);

        if (element) {
          const offsetTop = element.offsetTop;

          if (scrollPosition >= offsetTop) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    handleScrollSpy(); // Initial check

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [SECTIONS]);

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
          {MENU_ITEMS[activeSection]}
        </div>
        <button
          ref={toggleButtonRef}
          onClick={toggleMobileMenu}
          className="p-2 rounded-md hover:bg-blue-100 transition-colors"
          aria-label="Menu toggelen"
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
                  item === activeSection
                    ? "bg-blue-50 text-blue-900 font-semibold"
                    : "text-blue-950 hover:bg-blue-50"
                }`}
              >
                <div className="font-geist tracking-wider uppercase">
                  {MENU_ITEMS[item]}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between px-12 h-full max-w-[88rem] mx-auto">
        {SECTIONS.map((item) => (
          <div
            key={item}
            onClick={() => handleItemClick(item)}
            className="relative cursor-pointer group whitespace-nowrap px-2"
          >
            <div
              className={`text-base font-semibold font-geist tracking-wider uppercase transition-colors duration-300 ${
                item === activeSection
                  ? "text-blue-900"
                  : "text-blue-950 group-hover:text-blue-900"
              }`}
            >
              {MENU_ITEMS[item]}
            </div>
            <div
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 transition-transform duration-300 ${
                item === activeSection
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

const SchemeXMainContent = () => {
  return (
    <div>
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}
          <SchemeXMainContentLeft />
          {/* Right Side */}
          <ServicesRightSideContentDutch />
        </div>
      </div>
      <SchemeXServiceFaq />
      <SchemeXProductTable />
      <div id="services">
        <Services />
      </div>
    </div>
  );
};

export const Services = () => {
  return (
    <div className="pt-6 md:pt-12 pb-12  md:pb-16  overflow-x-hidden ">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
              Onze Diensten
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                India's Beste Certificaat Consultant
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
                src={BISImage}
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS Mark (ISI Licentie) voor Buitenlandse Fabrikanten
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
              CDSCO Registratie Certificering
            </p>
          </Link>

          <Link
            to="/what-is-crs-bis-or-crs-registration"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={BISCRS}
                alt="BISCRS Logo"
                title="BISCRS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS (CRS) Registratie
            </p>
          </Link>

          <Link
            to="/epr-certificate-for-plastic-waste-management-pwm"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={PlasticWasteManagement}
                alt="Plastic Waste Management Logo"
                title="Plastic Waste Management Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Plastic Afvalbeheer
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-epr-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={EPRCertificate}
                alt="EPR Certificate Logo"
                title="EPR Certificate Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              EPR Certificaat certificeringen
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-lmpc-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={LMPC}
                alt="LMPC Logo"
                title="LMPC Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              LMPC Certificaat certificeringen
            </p>
          </Link>

          <Link
            to="/what-is-bis-certificate-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={BISImage}
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS Registratie Certificaat
            </p>
          </Link>

          <Link
            to="/a-guide-to-bis-certification-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={ISIMark}
                alt="ISI Mark Logo"
                title="ISI Mark Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              ISI MARK (BIS) voor Indiase Fabrikanten
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

const SchemeXProductTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const table2Ref = useRef(null);
  const table3Ref = useRef(null);

  return (
    <div className="w-full pb-12">
      <div className="max-w-[88rem] mx-auto px-4 md:px-12">
        <div className="flex flex-col gap-2 mt-6">
          <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none">
            Veiligheidsnorm per Product
          </h2>

          <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-none mb-6">
            Beschrijving van Machines en Elektrische Apparatuur
          </p>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder={"Zoeken op beschrijving of HS-code..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 pl-12 text-base font-geist text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1A8781] focus:border-transparent transition-shadow hover:shadow-md"
          />
        </div>
      </div>

      <div ref={table2Ref}>
        <TypeBTable tableRef={table2Ref} searchQuery={searchQuery} />
      </div>
      <div ref={table3Ref}>
        <TypeCTable searchQuery={searchQuery} />
      </div>
    </div>
  );
};

const productDataTableThird = [
  {
    id: 1,
    description:
      "Alle typen pompen voor het verwerken van vloeistoffen, vloeistoftliften",
    hsCode: "841340, 841350, 841360, 841370, 841381, 841382, 841391 en 841392",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 2,
    description: "Alle typen compressoren",
    hsCode:
      "841430, 841440, 84148011, 84148090, 84149011,84149019, 84149040 en 84149090",
    indianStandard:
      "Artikel 16 van IS 17093:2019\nArtikel 6.6 van IS 12258:1987",
    title:
      "Technische leveringsvoorwaarden voor reciprocerende luchtcompressoren voor algemeen en industrieel gebruik\nTechnische leveringsvoorwaarde voor lucht-schroefcompressoren (Olie-overstroomd) voor algemeen en industrieel gebruik",
  },
  {
    id: 3,
    description:
      "Alle typen machines voor de behandeling van materialen door een proces dat een temperatuurverandering inhoudt",
    hsCode:
      "841932, 841939, 841940, 841950, 841960, 841981, 841989 en 84199090",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 4,
    description: "of zuiveringsmachines voor vloeistof en gas",
    hsCode: "842122, 842129, 842131, 842139, 842191 en 842199",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 5,
    description:
      "Alle typen machines voor vullen, sluiten, sealen, etiketteren flessen, verpakken of inpakken",
    hsCode: "842220, 842230, 842240 en 842290",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 6,
    description: "Alle typen kranen",
    hsCode:
      "842611, 842612, 842619, 842620, 842630, 842641, 842649, 842691 en 84269990",
    indianStandard:
      "Artikel 66.1, 66.1.1, 66.1.2, 66.1.3, 66.2, 66.2.1, 66.2.2, 66.3, 66.4, 66.5 en 66.6 van IS 3177:2020\nArtikel 8.1, 8.2, 8.3 & 45 van IS 4573:2020\nIS/ISO 15442:2012",
    title:
      "Elektrische Overhead Reizende Kranen en Gantry Kranen voor alle Toepassingen Code van Praktijk\nSpecificatie voor Aangedreven Mobiele Kranen\nKranen - Veiligheidseisen voor laadkranen",
  },
  {
    id: 7,
    description: "Alle typen machines voor de bouw",
    hsCode: "8429, 843010, 843020, 843031, 843039, 843041",
    indianStandard:
      "IS 17055 (Deel 7): 2020\nIS 17055 (Deel 8): 2020\nIS 17055 (Deel 12): 2020",
    title:
      "Aardverzetmachines Veiligheid Deel 7 Schraapmachines\nAardverzetmachines Eisen voor Grader\nAardverzetmachines Veiligheid Deel 12 Weginvullers",
  },
  {
    id: 8,
    description: "Alle typen weefmachines (getouwen)",
    hsCode: "8446, 844811, 844819, 844842 en 844849",
    indianStandard: "IS 17361 (Deel 6) : 2020 / ISO 11111 (Deel 6) : 2005",
    title: "Textielmachines Veiligheidseisen Deel 6 Stofproductiemachines",
  },
  {
    id: 9,
    description: "Alle typen machines voor borduurwerk.",
    hsCode: "84479020 en 844859",
    indianStandard: "IS 17361 (Deel 1): 2020 / ISO 11111 (Deel 1) : 2016",
    title: "Textielmachines Veiligheidseisen Deel 1 Algemene Eisen",
  },
  {
    id: 10,
    description: "Alle typen metaalsnijmachines",
    hsCode: "8456, 8457, 8458, 8459, 8460, 8461 en 846693",
    indianStandard:
      "IS 17277 (Deel 1): 2019\nISO 16092-1 : 2017\nIS 17259: 2020\nISO 28881 : 2013\nIS 17258: 2019\nISO 23125 : 2015\nIS 17254:2019\nISO 16093 : 2017\nIS 17253 (Deel 1): 2019\nISO 16090-1 : 2017",
    title:
      "Machinegereedschappen Veiligheid Persen Deel 1 Algemene Veiligheidseisen\nMachinegereedschappen Veiligheid Elektro-Ontladingsmachines\nMachinegereedschappen Veiligheid Draaibanken\nMachinegereedschappen Veiligheid Zaagmachines voor Koud Metaal\nMachinegereedschappen Veiligheid Bewerkingscentra, Frezen, Transfermachines Deel 1 Veiligheidseisen",
  },
  {
    id: 11,
    description:
      "Alle typen machinegereedschappen voor het bewerken van steen, keramiek, beton, asbestcement of vergelijkbaar mineraalglas",
    hsCode: "8464 en 84669100",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 12,
    description:
      "Alle typen machines voor het bewerken van rubber en kunststoffen",
    hsCode: "8477",
    indianStandard: "IS/ISO 20430: 2020",
    title:
      "Kunststoffen en Rubbermachines - Spuitgietmachines - Veiligheidseisen",
  },
  {
    id: 13,
    description:
      "Alle typen machines inclusief de machines voor openbare werken & Bouw en de machines & mechanische apparaten met individuele functies, niet gespecificeerd",
    hsCode: "84791000, 84798999 en 84799090",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 14,
    description:
      "Alle typen tandwielen en tandheugels, getande wielen, kettingtandwielen, transmissie-elementen bal of rol schroeven, tandwielkasten en snelheidsveranderaars, inclusief koppelomvormers En (of)hun assemblages /sub-assemblages /componenten",
    hsCode: "84834000 en 84839000",
    indianStandard: "-",
    title: "-",
  },
  {
    id: 15,
    description:
      "Alle typen roterende elektrische machines zoals Generator, enz. Bouw en de machines & mechanische apparaten met individuele functies, niet gespecificeerd",
    hsCode: "8501 en 8503",
    indianStandard:
      "Artikel 4.7, 4.8 en 4.12 van sectie 2,\nartikel 7.4 van Sectie 3, artikel 8.6 van Sectie 4,\nArtikel 9.4 van sectie 5 van IS 5422:1996\nArtikel 11, 21, 22, 23, 25 en 26 van IS 13364\n(Deel 1): 1992\nArtikel 11, 21, 22 23 25 en 26 van IS 13364\n(Deel 2): 1992",
    title:
      "Turbine type generatie\nAC-generatoren aangedreven door reciprocerende interne\nverbrandingsmotoren - Specificatie: Deel 1\nalternatoren met een nominaal vermogen tot 20 kVA\nAC-generatoren aangedreven door reciprocerende interne\nverbrandingsmotoren - Specificatie: Deel 2\nalternatoren met een nominaal vermogen boven 20 kVA en tot 1250 kVA",
  },
  {
    id: 16,
    description: "Alle typen Dieselmotoren",
    hsCode: "8502 en 8503",
    indianStandard:
      "Artikel 5,6,7,8, 9 & 10 van IS/ISO 8528 (Deel 2) : 2018\nArtikel 6 & 10 van IS/ISO 8528 (Deel 3)\nArtikel 4, 5.5, 7.3.5, 7.3.7 & 7.4 van IS/ISO 8528 (Deel 4): 2005\nArtikel 12, 13, 14, 15 van IS/ISO 8528-5: 2018\nArtikel 6.4 van IS/ISO 8528 (Deel 8): 2016\nArtikel 9.1 van IS/ISO 8528 (Deel 12): 1997",
    title:
      "Reciprocerende Interne Verbrandingsmotor Aangedreven Wisselstroom Genererende Sets : Deel 2 Motoren\nReciprocerende interne verbrandingsmotor aangedreven wisselstroom genererende sets: Deel 3 wisselstroom generatoren voor genererende sets\nReciprocerende interne verbrandingsmotor aangedreven wisselstroom genererende sets: Deel 4 bedieningsapparatuur en schakelapparatuur\nReciprocerende Interne Verbrandingsmotor Aangedreven Wisselstroom Genererende Sets Deel 5 Genererende Sets\nReciprocerende interne verbrandingsmotor aangedreven wisselstroom genererende sets: Deel 8\nReciprocerende interne verbrandingsmotor aangedreven wisselstroom genererende sets: Deel 12 noodstroomvoorziening voor veiligheid",
  },
  {
    id: 17,
    description: "Alle typen Transformatoren",
    hsCode: "850421, 850422, 850423, 850431, 850432, 850433, 850434 en 850490.",
    indianStandard:
      "IS/IEC 61558-2-4 : 2009\nIS/IEC 61558-2-6 : 1997\nIS/IEC 61558-2-7 : 2007\nArtikel 5.6 & Art 10 van IS 2026 (Deel 1)\nArtikel 7.5, 7.6, 7.7 van IS 2026 (Deel 6)",
    title:
      "Veiligheid van Transformatoren, Reactoren, Voedingen en Vergelijkbare Producten voor Voedingsspanningen tot 1100 V Deel 2-4: Bijzondere Eisen en Tests voor Isolatiotransformatoren en Voedingen die Insluiten\nVeiligheid van vermogens transformatoren, voedingsunits en vergelijkbaar: Deel 2 bijzondere eis: Sec 6 veiligheid isolatietransformatoren voor algemeen gebruik\nVeiligheid van vermogens transformatoren, voedings reactoren en vergelijkbare producten: Deel 2-7 bijzondere eisen en tests voor transformatoren en voedingen voor speelgoed\nVermogenstransformatoren: Deel 1 algemeen\nVermogenstransformatoren: Deel 6 reactoren",
  },
  {
    id: 18,
    description: "Alle typen Vermogenschakelaar Omvormers",
    hsCode: "850440",
    indianStandard: "IS 16539-1-1:2017/ IEC 60146-1-1: 2009",
    title:
      "Artikel 7 van Halfgeleider Omvormers Deel 1 Algemene Eisen en Lijngecommuteerde Omvormers Sectie 1 Specificatie van basis eisen",
  },
  {
    id: 19,
    description:
      "Alle typen schakel- en bedieningsapparatuur die werken op spanningen niet hoger dan 1000 volt en (of) hun assemblages /sub-assemblages /componenten",
    hsCode: "8536, 8537 en 8538",
    indianStandard: "Artikel 8 van IS/IEC 61439 (Deel 3): 2012",
    title:
      "Laagspannings schakel- en bedieningsapparatuur assemblages: Deel 3 verdeelborden bedoeld om te worden bediend door gewone personen (DBO)",
  },
  {
    id: 20,
    description:
      "Alle typen schakel- en bedieningsapparatuur die werken op spanningen hoger dan 1000 volt en (of) hun assemblages /sub-assemblages /componenten",
    hsCode: "8535, 8537 en 8538",
    indianStandard: "-",
    title: "-",
  },
];

const TypeCTable = ({ searchQuery }) => {
  // Filter data based on search query
  const filteredData = productDataTableThird.filter((item) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      item.description.toLowerCase().includes(query) ||
      item.hsCode.toLowerCase().includes(query) ||
      item.indianStandard.toLowerCase().includes(query) ||
      item.title.toLowerCase().includes(query)
    );
  });

  return (
    <div className="max-w-[88rem] mx-auto px-4 md:px-12 mt-12">
      <p className="font-geist font-bold text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-none mb-6">
        TYPE C (Veiligheidsnormen voor machines die gedetailleerde veiligheids
        eisen behandelen voor een bepaalde machine of groep machines)
      </p>

      <div className="rounded-md border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[80px] border-r border-gray-300">
                Vol. Nr.
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                Beschrijving van Machines en Elektrische Apparatuur
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                HS Code
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                Indiase Norm/Specifieke Artikel van Indiase Norm
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                Titel van Indiase Norm
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                    {item.id}
                  </TableCell>
                  <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                    {item.description}
                  </TableCell>
                  <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                    {item.hsCode}
                  </TableCell>
                  <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                    {item.indianStandard.split("\n").map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </TableCell>
                  <TableCell className="font-geist text-base md:text-lg text-left">
                    {item.title.split("\n").map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center py-8 font-geist text-gray-500"
                >
                  Geen resultaten gevonden voor &quot;{searchQuery}&quot;
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

const productDataTableSecond = [
  {
    id: 1,
    isNumber: "IS 16504 (Deel 1):2019/IEC 60204-1:2016",
    title:
      "Veiligheid van Machines Elektrische Apparatuur van Machines Deel 1 Algemene Eisen",
  },
  {
    id: 2,
    isNumber: "IS 16504 (Deel 11) : 2020 /IEC 60204-11 : 2018",
    title:
      "Veiligheid van Machines - Elektrische Apparatuur van Machines Deel 11 Eisen voor Apparatuur voor Spanningen boven 1 000 V AC of 1 500 V DC en niet overschrijdend 36 kV",
  },
  {
    id: 3,
    isNumber: "IS/IEC 61508 (Deel 1): 2010",
    title:
      "Functionele Veiligheid van Elektrisch-Elektronisch-Programmeerbare Elektronische Veiligheidsgerelateerde Systemen Deel 1- Algemene Eisen",
  },
  {
    id: 4,
    isNumber: "IS/IEC 60529 : 2001",
    title: "Graad van Bescherming Verschaft door Behuizingen (IP Code)",
  },
  {
    id: 5,
    isNumber: "IS 16806 (Deel 1) : 2018/ ISO 29042-1 : 2008",
    title:
      "Veiligheid van machines - Evaluatie van de emissie van luchtgedragen gevaarlijke stoffen - Deel 1: Selectie van testmethoden",
  },
  {
    id: 6,
    isNumber: "IS 16806 (Deel 2) : 2018/ ISO 29042-2 : 2009",
    title:
      "Veiligheid van Machines Evaluatie van de Emissie van Luchtgedragen Gevaarlijke Stoffen Deel 2 Tracer Gas Methode voor de Meting van de Emissiesnelheid van een Gegeven Vervuiler",
  },
  {
    id: 7,
    isNumber: "IS 16806 (Deel 3) : 2018/ ISO 29042-3 : 2009",
    title:
      "Veiligheid van machines - Evaluatie van de emissie van luchtgedragen gevaarlijke stoffen - Deel 3: Testbankmethode voor de meting van de emissiesnelheid van een gegeven vervuiler",
  },
  {
    id: 8,
    isNumber: "IS 16806 (Deel 4) : 2018/ ISO 29042-4 : 2009",
    title:
      "Veiligheid van machines - Evaluatie van de emissie van luchtgedragen gevaarlijke stoffen - Deel 4: Tracermethode voor de meting van de opvang efficiëntie van een uitlaatsysteem",
  },
  {
    id: 9,
    isNumber: "IS 16806 (Deel 5) : 2018/ ISO 29042-5 : 2010",
    title:
      "Veiligheid van machines - Evaluatie van de emissie van luchtgedragen gevaarlijke stoffen - Deel 5: Testbankmethode voor de meting van de scheidingsefficiëntie door massa van luchtzuiveringssystemen met niet-geleid uitlaat",
  },
  {
    id: 10,
    isNumber: "IS 16806 (Deel 6) : 2018/ ISO 29042-6 : 2010",
    title:
      "Veiligheid van machines - Evaluatie van de emissie van luchtgedragen gevaarlijke stoffen - Deel 6 : Testbankmethode voor de meting van de scheidingsefficiëntie door massa van luchtzuiveringssystemen met geleid uitlaat",
  },
  {
    id: 11,
    isNumber: "IS 16806 (Deel 7) : 2018/ ISO 29042-7 : 2010",
    title:
      "Veiligheid van machines - Evaluatie van de emissie van luchtgedragen gevaarlijke stoffen - Deel 7: Testbankmethode voor de meting van de vervuilerconcentratieparameter",
  },
  {
    id: 12,
    isNumber: "IS 16806 (Deel 8) : 2018/ ISO 29042-8 : 2011",
    title:
      "Veiligheid van machines - Evaluatie van de emissie van luchtgedragen gevaarlijke stoffen - Deel 8: Kamer methode voor de meting van de vervuilerconcentratieparameter",
  },
  {
    id: 13,
    isNumber: "IS 16806 (Deel 9) : 2018/ ISO 29042-9 : 2011",
    title:
      "Veiligheid van machines - Evaluatie van de emissie van luchtgedragen gevaarlijke stoffen - Deel 9: Ontsmettingsindex",
  },
  {
    id: 14,
    isNumber: "IS 10481:2020/ ISO 4413:2010",
    title:
      "Hydraulische Vloeistofkracht- Algemene Regels en Veiligheidseisen voor Systemen en hun Componenten",
  },
  {
    id: 15,
    isNumber: "IS 12725:2021/ ISO 4414:2010",
    title:
      "Pneumatische Vloeistofkracht- Algemene Regels en Veiligheidseisen voor Systemen en hun Componenten",
  },
  {
    id: 16,
    isNumber: "IS ISO 3457 : 2003",
    title: "Aardverzetmachines - Beschermingen - Definities en Eisen",
  },
  {
    id: 17,
    isNumber: "IS 16501 : 2017/IEC 62061 : 2005",
    title:
      "Veiligheid van Machines-Functionele Veiligheid van Veiligheidsgerelateerde Elektrische Elektronische en Programmeerbare Elektronische Besturingssystemen",
  },
  {
    id: 18,
    isNumber: "IS 16502 (Deel 2) : 2017/ IEC 61496-2 : 2013",
    title:
      "Veiligheid van Machines - Elektrogevoelige Beschermingsapparatuur Deel 2 Bijzondere Eisen voor Apparatuur met Actieve Opto-Elektronische Beschermingsapparaten AOPD's",
  },
  {
    id: 19,
    isNumber: "IS 16503 (Deel 3) : 2017/ IEC 61310-3 : 2007",
    title:
      "Veiligheid van Machines- Aanduiding Markering en Bediening Deel 3 Eisen voor de Locatie en Bediening van Bedieningsorganen",
  },
  {
    id: 20,
    isNumber: "IS 16504 (Deel 32) : 2017/IEC 60204-32 : 2008",
    title:
      "Veiligheid van Machines-Elektrische Apparatuur van Machines Deel 32 Eisen voor Hijsmachines",
  },
  {
    id: 21,
    isNumber: "IS 16503 (Deel 1) : 2017/ IEC 61310-1 : 2007",
    title:
      "Veiligheid van Machines - Aanduiding Markering en Bediening Deel 1 Eisen voor Visuele Akoestische en Haptische Signalen",
  },
  {
    id: 22,
    isNumber: "IS 16594 (Deel 1) : 2017/ IEC 61496-1 : 2012",
    title:
      "Veiligheid van Machines - Elektrogevoelige Beschermingsapparatuur Deel 1 Algemene Eisen en Tests",
  },
  {
    id: 23,
    isNumber: "IS 16936 : 2018/ IEC TR 62513: 2008",
    title:
      "Veiligheid van Machines Richtlijnen voor het Gebruik van Communicatiesystemen in Veiligheidsgerelateerde Toepassingen",
  },
  {
    id: 24,
    isNumber: "IS 16503 (Deel 2) : 2017/ IEC 61310-2 : 2007",
    title:
      "Veiligheid van Machines - Aanduiding Markering en Bediening Deel 2 Eisen voor Markering",
  },
  {
    id: 25,
    isNumber: "IS 16807: 2020/",
    title: "Veiligheid van Machines Brandpreventie en Brandbeveiliging",
  },
  {
    id: 26,
    isNumber: "IS 16808 : 2018/ ISO 14159 : 2002",
    title:
      "Veiligheid van Machines Hygiëne Eisen voor het Ontwerp van Machines",
  },
  {
    id: 27,
    isNumber: "IS 16809 ( Deel 1) : 2018/ ISO 14122-1 : 2016",
    title:
      "Veiligheid van Machines Permanente Middelen van Toegang tot Machines Deel 1 Keuze van Vaste Middelen en Algemene Eisen voor Toegang",
  },
  {
    id: 28,
    isNumber: "IS 16809 (Deel 2) : 2018/ ISO 14122-2 : 2016",
    title:
      "Veiligheid van Machines Permanente Middelen van Toegang tot Machines Deel 2 Werkplatforms en Looppaden",
  },
  {
    id: 29,
    isNumber: "IS 16809 (Deel 3) : 2018/ ISO 14122-3 : 2016",
    title:
      "Veiligheid van Machines Permanente Middelen van Toegang tot Machines Deel 3 Trappen Trapladders en Leuningen",
  },
  {
    id: 30,
    isNumber: "IS 16809 (Deel 4) : 2018/ ISO 14122-4 : 2016",
    title:
      "Veiligheid van Machines Permanente Middelen van Toegang tot Machines Deel 4 Vaste Ladders",
  },
  {
    id: 31,
    isNumber: "IS 16810 (Deel 1) : 2018/ ISO 13849-1 : 2015",
    title:
      "Veiligheid van Machines Veiligheidsgerelateerde Onderdelen van Besturingssystemen Deel 1 Algemene Principes voor Ontwerp",
  },
  {
    id: 32,
    isNumber: "IS 16810 (Deel 2) : 2018/ ISO 13849-2 : 2012",
    title:
      "Veiligheid van Machines Veiligheidsgerelateerde Onderdelen van Besturingssystemen Deel 2 Validatie",
  },
  {
    id: 33,
    isNumber: "IS 16811: 2018/ 14120 : 2015",
    title:
      "Veiligheid van Machines Beschermingen Algemene Eisen voor het Ontwerp en de Constructie van Vaste en Verplaatsbare Beschermingen",
  },
  {
    id: 34,
    isNumber: "IS 16812 : 2018/ ISO 14119 : 2013",
    title:
      "Veiligheid van Machines Vergrendelingsinrichtingen Geassocieerd met Beschermingen Principes voor Ontwerp en Selectie",
  },
  {
    id: 35,
    isNumber: "IS 16813 : 2019/ ISO 14118 : 2017",
    title: "Veiligheid van Machines Voorkoming van Onverwachte Start",
  },
  {
    id: 36,
    isNumber: "IS 16814 : 2021/ ISO 13857: 2019",
    title:
      "Veiligheid van Machines Veiligheidsafstanden om Gevarenzones te Voorkomen die Worden Bereikt door Boven- en Benedenleden",
  },
  {
    id: 37,
    isNumber: "IS 16815 : 2019/ ISO 13855: 2010",
    title:
      "Veiligheid van Machines Positionering van Beschermingen met Betrekking tot de Aanpak Snelheden van Delen van het Menselijk Lichaam",
  },
  {
    id: 38,
    isNumber: "IS 16816 : 2019/ ISO 13854 : 2017",
    title:
      "Veiligheid van Machines Minimale Spleten om Verpletteren van Delen van het Menselijk Lichaam te Voorkomen",
  },
  {
    id: 39,
    isNumber: "IS 16817: 2020/ ISO 13851 : 2019",
    title:
      "Veiligheid van Machines Tweehand Bedieningsinrichtingen Principes voor Ontwerp en Selectie",
  },
  {
    id: 40,
    isNumber: "IS 16818 : 2018/ ISO 13850 : 2015",
    title: "Veiligheid van Machines Noodstopfunctie Principes voor Ontwerp",
  },
  {
    id: 41,
    isNumber: "IS 16912 : 2018/ ISO 21469 : 2006",
    title:
      "Veiligheid van Machines Smeermiddelen met Incidentele Product -- Contact Hygiëne Eisen",
  },
  {
    id: 42,
    isNumber: "IS 16834 (Deel 1) : 2018/ ISO 14123-1 : 2015",
    title:
      "Veiligheid van machines - Vermindering van risico's voor de gezondheid als gevolg van gevaarlijke stoffen die worden uitgestoten door machines - Deel 1: Principes en specificaties voor machinefabrikanten",
  },
  {
    id: 43,
    isNumber: "IS 16834 (Deel 2) : 2018/ ISO 14123-2 : 2015",
    title:
      "Veiligheid van machines - Vermindering van risico's voor de gezondheid als gevolg van gevaarlijke stoffen die worden uitgestoten door machines - Deel 2: Methodologie die leidt tot verificatieprocedures",
  },
  {
    id: 44,
    isNumber: "IS 16835 (Deel 1) : 2018/ ISO 13856-1 : 2013",
    title:
      "Veiligheid van machines - Drukgevoelige beschermingsinrichtingen - Deel 1: Algemene principes voor ontwerp en testen van drukgevoelige matten en drukgevoelige vloeren",
  },
  {
    id: 45,
    isNumber: "IS 16835 (Deel 2) : 2018/ ISO 13856-2 : 2013",
    title:
      "Veiligheid van machines - Drukgevoelige beschermingsinrichtingen - Deel 2: Algemene principes voor ontwerp en testen van drukgevoelige randen en drukgevoelige staven",
  },
  {
    id: 46,
    isNumber: "IS 16835 (Deel 3) : 2018/ ISO 13856-3 : 2013",
    title:
      "Veiligheid van machines - Drukgevoelige beschermingsinrichtingen - Deel 3: Algemene principes voor ontwerp en testen van drukgevoelige bumpers, platen, draden en vergelijkbare inrichtingen.",
  },
  {
    id: 47,
    isNumber: "IS 16569: 2018/ ISO 11429:1996",
    title:
      "Ergonomie- Systeem van Auditieve en Visuele Gevaren en Informatiesignalen",
  },
  {
    id: 48,
    isNumber: "IS 16563 (Deel 2) : 2017/ ISO 9355-2:1999",
    title:
      "Ergonomische Eisen voor het Ontwerp van Beeldschermen en Bedieningsactuatoren Deel 2 Beeldschermen",
  },
  {
    id: 49,
    isNumber: "IS 16563 (Deel 3) 2017 / ISO 9355-3:2006",
    title:
      "Ergonomische Eisen voor het Ontwerp van Beeldschermen en Bedieningsactuatoren Deel 3 Bedieningsactuatoren",
  },
  {
    id: 50,
    isNumber: "IS 16572 : 2017/ ISO 14738 : 2002",
    title:
      "Veiligheid van Machines - Antropometrische Eisen voor het Ontwerp van Werkstations bij Machines",
  },
  {
    id: 51,
    isNumber: "IS 16562 ( Deel 1) : 2017/ ISO 15536-1 : 2005",
    title:
      "Ergonomie - Computer Mannequins en Lichaamssjablonen Deel 1 Algemene Eisen",
  },
  {
    id: 52,
    isNumber: "IS 16569:2018/ ISO 11429: 1996",
    title:
      "Ergonomie - Systeem van auditieve en visuele gevaren en informatie signalen",
  },
  {
    id: 53,
    isNumber: "IS 15296 : 2017/ ISO 11161: 2007",
    title:
      "Industriële Automatiseringssystemen - Veiligheid van Geïntegreerde Productiesystemen - Basis Eisen",
  },
];
const TypeBTable = ({ tableRef, searchQuery }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Filter data based on search query
  const filteredData = productDataTableSecond.filter((item) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      item.isNumber.toLowerCase().includes(query) ||
      item.title.toLowerCase().includes(query)
    );
  });

  // Reset to first page when search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const scrollToTableTop = () => {
    if (tableRef?.current) {
      tableRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setTimeout(() => scrollToTableTop(), 100);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setTimeout(() => scrollToTableTop(), 100);
    }
  };

  return (
    <div className="max-w-[88rem] mx-auto px-4 md:px-12 mt-12">
      <p className="font-geist font-bold text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-none mb-6">
        TYPE B (Generieke Veiligheidsnormen die één veiligheidsaspect of meer
        dan één type beschermingsmiddel behandelen dat kan worden gebruikt over
        een breed scala aan machines)
      </p>

      <div className="rounded-md border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[80px] border-r border-gray-300">
                Vol.Nr.
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg border-r border-gray-300">
                IS Nummer
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                Titel
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.length > 0 ? (
              currentItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                    {item.id}
                  </TableCell>
                  <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                    {item.isNumber}
                  </TableCell>
                  <TableCell className="font-geist text-base md:text-lg text-left">
                    {item.title}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={3}
                  className="text-center py-8 font-geist text-gray-500"
                >
                  Geen resultaten gevonden voor &quot;{searchQuery}&quot;
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {totalPages > 1 && (
        <div className="flex justify-end items-center mt-6">
          <div className="flex items-center">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Vorige
            </button>
            <span className="px-4 py-2 font-geist text-sm">
              Pagina {currentPage} van {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Volgende
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const SchemeXServiceFaq = () => {
  const faqData = [
    {
      question: "1. Wat is Scheme X onder BIS-certificering?",
      answer:
        "Scheme X is een conformiteitsbeoordelingsschema dat is ingevoerd door de Indiase BIS voor machines en elektrische apparatuur. Het zorgt voor naleving van strenge veiligheids- en technische normen zoals gespecificeerd in de Omnibus Technische Verordening.",
    },
    {
      question: "2. Verschilt Scheme X van de ISI-mark certificering?",
      answer:
        "Ja. De ISI-mark is over het algemeen voor consumentengoederen en basis productnaleving, terwijl Scheme X van toepassing is op complexe en industrieelwaardige producten die geavanceerde testen en certificering vereisen via een BIS-certificaat of BIS-licentie.",
    },
    {
      question: "3. Wie moet een Scheme X-certificering aanvragen?",
      answer:
        "Fabrikanten en importeurs van machines en elektrische apparatuur die zijn vermeld onder de Omnibus Technische Verordening moeten Scheme X aanvragen en een geldig BIS-certificaat verkrijgen om hun producten legaal te verkopen of te distribueren in India. Wereldwijde fabrikanten of buitenlandse fabrikanten die producten in India willen verkopen, moeten ook aan deze regelingen voldoen.",
    },
    {
      question: "4. Wat is de kosten van BIS Scheme X-certificering?",
      answer:
        "De kosten van Scheme X omvatten aanvraagkosten, certificeringskosten, technische bestandsbeoordelingskosten, fabrieksinspectiekosten en producttestkosten. Gemiddeld begint het bij ₹2.000 voor de aanvraag en kan het hoger zijn afhankelijk van de productcomplexiteit. Voor meer details neem contact op via admin@bis-certifications.com.",
    },
    {
      question:
        "5. Hoe lang duurt het om een BIS-licentie onder Scheme X te krijgen?",
      answer:
        "De tijdlijn varieert afhankelijk van documentatie, testvereisten en fabrieksinspecties. Meestal duurt het 4–6 weken vanaf de datum van succesvolle BIS-registratie en indiening van de aanvraag voor Indiase fabrikanten en 60-90 dagen voor buitenlandse fabrikanten.",
    },
    {
      question:
        "6. Kunnen MSME's ook een BIS-certificaat aanvragen onder Scheme X?",
      answer:
        "Absoluut. De Indiase BIS moedigt MSME's aan om een BIS-licentie of certificaat van conformiteit aan te vragen onder Scheme X om de kwaliteit, naleving en concurrentiekracht in de industriële sector te verbeteren.",
    },
    {
      question:
        "7. Is BIS-certificering onder Scheme X verplicht voor exporten?",
      answer:
        "Nee. Producten die uitsluitend voor export zijn geproduceerd, zijn vrijgesteld onder de Omnibus Technische Verordening. Producten die voor de Indiase markt zijn bedoeld, moeten echter worden gecertificeerd onder Scheme X.",
    },
    {
      question:
        "8. Wat is de geldigheidsduur van de BIS-licentie onder Scheme X?",
      answer:
        "Een BIS-licentie onder Scheme X is over het algemeen 3-6 jaar geldig en moet dienovereenkomstig worden vernieuwd. Vernieuwing omvat betaling van de jaarlijkse BIS-certificeringskosten en kan herbeoordeling vereisen afhankelijk van wijzigingen in het productbereik of normen.",
    },
    {
      question:
        "9. Kunnen buitenlandse fabrikanten Scheme X-certificering aanvragen?",
      answer:
        "Ja, buitenlandse fabrikanten kunnen Scheme X-certificering aanvragen via een geautoriseerde Indiase vertegenwoordiger. De Indiase BIS vereist een fabrieksinspectie, die 3 dagen kan duren voor buitenlandse aanvragers, samen met standaard BIS-registratie en testprocessen.",
    },
    {
      question: "10. Wat is een Technisch Bestand en waarom is het vereist?",
      answer:
        "Een Technisch Bestand is een gedetailleerd conformiteitsdossier dat vereist is onder Scheme X. Het omvat fabricageprocessen, productdetails, testrapporten en kwaliteitscontrole documenten. Het ondersteunt de conformiteit van het product aan relevante Indiase Normen tijdens het BIS-certificeringsproces.",
    },
    {
      question:
        "11. Hoe is Scheme X gerelateerd aan de Omnibus Technische Verordening?",
      answer:
        "De Omnibus Technische Verordening verplicht het gebruik van Scheme X voor specifieke categorieën machines en elektrische apparatuur in India. Producten die onder de verordening zijn vermeld, moeten worden gecertificeerd onder Scheme X om een geldig BIS-certificaat of BIS-licentie te verkrijgen.",
    },
    {
      question:
        "12. Kan een BIS-certificaat onder Scheme X worden ingetrokken?",
      answer:
        "Ja. De Indiase BIS kan een BIS-licentie of certificaat onder Scheme X schorsen of intrekken als non-conformiteit wordt geconstateerd tijdens surveillance of als het product niet voldoet aan de vereiste Indiase Normen.",
    },
    {
      question:
        "13. Wat is het verschil tussen BIS-licentie en BIS-certificaat onder Scheme X?",
      answer:
        "Een BIS-licentie wordt doorgaans uitgegeven aan Indiase fabrikanten, terwijl een BIS-certificaat van conformiteit (CoC) vaak wordt uitgegeven aan buitenlandse fabrikanten of voor specifieke gevallen. Beide dienen hetzelfde doel—het waarborgen van productconformiteit onder Scheme X.",
    },
    {
      question:
        "14. Is de ISI-mark toegestaan voor producten gecertificeerd onder Scheme X?",
      answer:
        "Nee. Producten onder Scheme X dragen niet de ISI-mark. In plaats daarvan tonen ze de relevante BIS-standaardmark weer zoals gereguleerd door de Indiase BIS.",
    },
    {
      question: "Hoe weet ik of mijn machine Scheme X-certificering vereist?",
      answer:
        "Controleer de officiële lijst in de Omnibus Technische Verordening of raadpleeg een BIS-consultant om te verifiëren of uw machine onder de verplichte Scheme X-certificeringsvereisten valt.",
    },
  ];

  return (
    <section
      id="faqs"
      className="my-2 scroll-mt-20"
      aria-label="Veelgestelde Vragen"
    >
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h4 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          Veelgestelde Vragen
        </h4>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          Kan het antwoord dat u zoekt niet vinden?{" "}
          <a
            href="/contact"
            className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4 hover:text-[#1A8781] transition-colors"
          >
            Neem contact met ons op!
          </a>
        </p>

        <div className="w-full max-w-[1104px] mt-[16px] md:mt-[24px] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

const SchemeXMainContentLeft = () => {
  return (
    <div className="flex-1">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        {/* Overview Section */}
        <SchemeXMainContentLeftOverviewSection />

        {/* Divider */}
        <div className="service-left-content-divider" />

        {/* Process Section */}
        <SchemeXMainContentLeftProcessSection />

        {/* Divider */}
        <div className="service-left-content-divider" />

        {/* Documents Section */}
        <SchemeXMainContentLeftDocumentsSection />

        {/* Divider */}
        <div className="service-left-content-divider" />

        {/* Conclusion Section */}
        <SchemeXMainContentLeftConclusionSection />

        {/* Divider */}
        <div className="service-left-content-divider" />

        <ServiceAuthorDutch />
      </div>
    </div>
  );
};

const SchemeXMainContentLeftConclusionSection = () => {
  return (
    <div id="conclusion" className="flex flex-col scroll-mt-20">
      {/* Conclusion */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Conclusie</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">Conclusie</h2>

      <p className="service-left-content-paragraph">
        De BIS Scheme-X Certificering blijft essentieel om de veiligheid,
        betrouwbaarheid en kwaliteit van laagspanningschakelkasten en
        bedieningsapparatuur, Machines en elektrische apparatuur te handhaven.
        Voor de fabrikanten van machinegereedschappen die van toepassing zijn op
        het verwerken van steen, keramiek, beton, asfalterend cement en
        mineraalglas is BIS Scheme-X certificering verplicht.
      </p>

      <p className="service-left-content-paragraph">
        Door aan deze verplichtingen te voldoen, garanderen fabrikanten product
        conformiteit, vergroten consumentenvertrouwen, evenals hun
        geloofwaardigheid op de markt. Scheme-X zorgt ervoor dat de productie zo
        soepel mogelijk verloopt, wereldwijde veiligheidsnormen worden nageleefd
        en de erkende merken een positieve reputatie opbouwen.
      </p>
    </div>
  );
};

const SchemeXMainContentLeftDocumentsSection = () => {
  return (
    <div id="documents" className="flex flex-col scroll-mt-20">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Documenten</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Belangrijke Documenten Vereist voor BIS Scheme X Certificering
      </h2>

      <p className="service-left-content-paragraph">
        Om het BIS-certificeringsproces te stroomlijnen, moeten fabrikanten de
        volgende documenten verzamelen en indienen tijdens de registratiefase:
      </p>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                Vol. Nr.
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                Vereist Document
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                Details
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                1.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Naam en Adres (Fabriek & Kantoor)
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Volledige wettelijke naam en fysieke adressen van de
                fabricagesite en kantoor
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                2.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                PAN en GST Informatie
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Permanent Rekeningnummer (PAN) en GST-registratiedetails
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                3.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Contactgegevens
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                E-mailadres, mobiel nummer en vaste lijn voor officiële
                communicatie
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                4.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Management Details
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Namen, rollen en ID's van belangrijke executives en
                geautoriseerde ondertekenaar
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                5.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Productbeschrijving
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Details van machines en apparatuur gedekt onder het Eerste
                Schema van de Omnibus Technische Verordening
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                6.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Productclassificatie
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Specifiek type, model en variëteit waarvoor de BIS-licentie
                wordt aangevraagd
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                7.
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d] font-medium">
                Technisch bestand
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Alle technische details met betrekking tot het product en
                details over de productiefaciliteit.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 className="service-left-content-heading-three">
        Geldigheidsduur en Vernieuwingsproces van Scheme-X Certificaat:
      </h3>

      <PointsListWithoutHeading
        points={[
          "Licentie Geldigheidsduur en Vernieuwing: BIS Licenties onder Scheme-X worden uitgegeven voor een periode van 3 tot 6 jaar voor continue productie. Zodra de periode is verstreken, kan de licentie voor dezelfde duur worden vernieuwd door indiening van een vernieuwingsaanvraag, de vereiste vergoeding en nalevingsdocumenten.",
          "Certificaat van Conformiteit (CoC): Een CoC wordt uitgegeven voor Eenmalige productie, en is van toepassing op zowel binnenlandse als buitenlandse fabrikanten. Aangezien het alleen van toepassing is op een enkel batch, heeft een CoC geen vernieuwingsoptie.",
          "Rapport van Producttests: Wanneer testrapporten worden opgesteld in het laboratorium van de fabrikant, verifiëren de BIS-functionarissen deze tijdens de fabrieksinspectie door getuige te zijn van testen. Als testen worden uitgevoerd in onderaannemingsfaciliteiten, worden die faciliteiten ook geïnspecteerd en goedgekeurd door BIS.",
          "Beoordeling van Aanvraag voor Vernieuwing: Voor ononderbroken geldigheid moet een fabrikant blijven voldoen aan de bepalingen van Scheme-X. Volgens Regelgeving 8 van de BIS Conformiteitsbeoordelingsregelingen verwerkt het Bureau of Indian Standards de aanvraag voor vernieuwing in formulier VIII. Vernieuwing vindt alleen plaats nadat bevredigende naleving is geverifieerd.",
        ]}
      />
    </div>
  );
};

const SchemeXMainContentLeftProcessSection = () => {
  return (
    <div id="process" className="flex flex-col scroll-mt-20">
      {/* Process */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Proces</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Stappen om Gecertificeerd te Worden onder BIS Scheme-X
      </h2>

      <p className="service-left-content-paragraph">
        Het uitgeven van BIS Certificaat onder Scheme-X is een systematische
        activiteit bedoeld om ervoor te zorgen dat de fabrikant de toepasselijke
        veiligheid, kwaliteit en nalevingsnormen heeft vervuld. Het proces is
        als volgt:
      </p>

      <PointsListWithoutHeading
        points={[
          "Bereik Verifiëren: Bepaal of uw product binnen het bereik van Scheme-X valt en of het voldoet aan BIS-veiligheidseisen. Controleer de relevante Indiase Normen en technische schema om te bepalen of u kunt voldoen.",
          "De Vereiste Documenten Voorbereiden: Fabrikanten moeten de volgende documenten verzamelen en regelen: Geregistreerde Bedrijfs certificaten, Basis van ontwerpdocumenten, Fabriek en Processtroom documenten, Service Test Rapporten (indien van toepassing), Kwaliteitsborging en Controle Documenten.",
          "Het Technisch Bestand Opbouwen: Een technisch bestand is een onmisbaar onderdeel voor de claim voor verlenging van een certificaat. Het moet bevatten: Technische Specificaties van het Product, Methoden en Technieken Informatie, Naleving en Test Documenten, Beperking en het Bedoelde doel van het product, Kwaliteitsborgingsdocumentatie, Grondstoffen traceerbaarheid, onderaanneming traceerbaarheid, en de rest van het bewijs, Naleving van de normen binnen het gedefinieerde bereik.",
          "Het Aanvraagformulier: Het aanvraagformulier kan elektronisch worden ingediend op de BIS-website op de aangewezen plaats. Betaling van de aanvraagkosten is verplicht. De rest van de documenten die de aanvraag verifiëren moet worden opgenomen voor een juiste beoordeling.",
          "Fabriek Inspectie: Voor binnenlandse fabrikanten: Inspectie wordt uitgevoerd over een periode van maximaal 2 dagen. Voor buitenlandse fabrikanten: Inspectie wordt uitgevoerd over een periode van maximaal 3 dagen (extra dagen kunnen ontstaan door extra verzoeken).",
          "Testen van Productmonsters: Monster testen worden uitgevoerd op de site van de fabrikant of in uitbesteed BIS-goedgekeurde laboratoria (uitbesteden van testen is toegestaan). De testen demonstreren de vervulling van de relevante Indiase normen.",
          "Uitgifte van Certificering: Als een product aan alle voorwaarden voldoet, verleent BIS elke product een Licentie of een Certificaat van Conformiteit (CoC). De BIS Standaard Mark mag vrij worden gebruikt door de fabrikant op alle gecertificeerde producten.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Dit bestand dient als het technische en statistische bewijs van de
        productclaim die voldoet aan veiligheids trace normen.
      </p>

      <p className="service-left-content-paragraph">
        Tijdens de inspectieperiode worden van de BIS-functionarissen verwacht
        dat ze: Het technische bestand analyseren, De manieren van fabricage
        evalueren samen met ondersteunende kwaliteitsborgingssystemen, De testen
        van het product observeren, Non-conformiteit vaststellen (indien
        aanwezig) en remedie stappen geven. Een gedetailleerd rapport van de
        audit wordt verstrekt aan de aanvrager na het bezoek.
      </p>

      <p className="service-left-content-paragraph">
        Deze strategie handhaaft naleving van BIS Standaard en is een erkenning
        van Indiase en internationale naleving, waardoor de industrie
        consumentenvertrouwen opbouwt in veiligheid en kwaliteit.
      </p>

      <h2 className="service-left-content-heading-three">
        Procedure voor Binnenlandse Fabrikanten
      </h2>

      <p className="service-left-content-paragraph">
        Binnenlandse fabrikanten volgen een directe aanpak door de BIS Licentie
        onder Scheme-X te verkrijgen. De directe stappen om te volgen zijn:
      </p>

      <PointsListWithoutHeading
        points={[
          "Documentatie: Alle documenten met betrekking tot het schema moeten worden verzameld en voorbereid.",
          "Uitvoering van de Aanvraag: De aanvraag moet worden ingediend samen met de relevante kosten.",
          "Onderzoek van de Aanvraag: Elke ingediende aanvraag is onderworpen aan controle en een daaropvolgend stel vragen wordt gegenereerd door BIS.",
          "Aanstellen van Auditors: Auditors worden benoemd door BIS maar de genomineerde persoon is onderworpen aan de betaling van de auditkosten.",
          "Fabriek Audit: Een onderzoek en survey audit wordt onsite uitgevoerd en relevante monsters worden verzameld.",
          "Monster Evaluatie: De monsters worden geëvalueerd in een BIS-erkend laboratorium. De aanvrager betaalt alle BIS-erkende laboratorium testkosten.",
          "Betaling van Licentie- & Markering Kosten: De vereiste betalingen worden uitgevoerd aan BIS.",
          "Verlening van Licentie: Het certificaat dat toestemming verleent om de BIS Mark te gebruiken wordt toegekend door BIS.",
        ]}
      />

      <p className="service-left-content-paragraph">
        <strong>Typische Tijdlijn:</strong> Dicht bij 90 werkdagen (volgens BIS
        praktijk) zijn nodig. Dit is voorzien dat er geen belangrijke
        non-conformiteiten zijn.
      </p>

      <h2 className="service-left-content-heading-three">
        Procedure voor Buitenlandse Fabrikanten
      </h2>

      <p className="service-left-content-paragraph">
        In tegenstelling tot binnenlandse fabrikanten, moeten buitenlandse
        fabrikanten die een BIS certificaat aanvragen onder Scheme-X voldoen aan
        een strengere proces en extra stappen. De procedure wordt als volgt
        uitgediept.
      </p>

      <PointsListWithoutHeading
        points={[
          "Voorbereiding van Documentatie: Bedrijfs geregistreerd, het product en fabrieksindeling, testrapporten, en de geassocieerde kwaliteitsmanagement documenten moeten allemaal in de geconfigureerde map staan om te voldoen.",
          "Indiening van de Aanvraag: De aanvraag, de vereiste vergoeding en alle aanvraagmaterialen moeten worden ingediend via de BIS online portal.",
          "Registratie van Aanvraag en Controle: De aanvraag wordt geregistreerd door BIS en een controle van de documenten wordt uitgevoerd. Eventuele problemen die BIS kan hebben moeten tijdig worden opgelost door de aanvrager.",
          "Auditor Toewijzing en Betaling: BIS's auditors verantwoordelijk voor fabrieksinspecties worden toegewezen aan de aanvrager voor de audit. De aanvrager moet de vastgestelde kosten voor de uitgevoerde audit betalen, zoals bepaald door de toepasselijke wetgeving.",
          "Audit Voorbereiding: Buitenlandse fabrikanten zijn verantwoordelijk voor logistieke regelingen voor de audit zoals Visum uitgifte, vliegtickets, en hotelreserveringen voor BIS-functionarissen worden geregeld en betaald.",
          "Fabriek Audit & Monster Selectie: BIS-functionarissen voeren een fabrieksaudit uit die 3 dagen duurt (meer dagen kunnen worden toegevoegd als meer aanvragen nodig zijn).",
          "Product Testen: Geselecteerde monsters worden doorgestuurd naar een BIS geaccrediteerd laboratorium voor testen. In sommige gevallen wordt testen uitbesteed aan andere testlaboratoria en dus wordt de betaling afgehandeld via het primaire testlaboratorium.",
          "Betaling van Markering & Licentie Kosten: Na succesvolle audit en testresultaten, moet de fabrikant de vereiste markering vergoeding en licentiekosten betalen aan BIS.",
          "Verlening van Licentie: BIS geeft de Licentie/Certificaat van Conformiteit (CoC) uit zodra alle voorwaarden volledig zijn nageleefd. BIS staat de fabrikant dan toe de gebruikte BIS Standaard Mark op andere gecertificeerde producten te plaatsen, zodra naleving is bevestigd.",
        ]}
      />

      <p className="service-left-content-paragraph">
        De audit omvat: Evaluatie van de kwaliteitsborgingssystemen en de
        werkstromen in de fabricageprocessen, Beoordeling van de naleving en de
        technische documentatie, Onafhankelijke monster selectie voor testen.
      </p>

      <p className="service-left-content-paragraph">
        Het gehele proces duurt, gebaseerd op de praktijken van BIS, ongeveer
        6-7 maanden.
      </p>

      <h3 className="service-left-content-heading-three">
        Belangrijke Extra Wijzigingen voor Buitenlandse Fabrikanten:
      </h3>

      <PointsListWithoutHeading
        points={[
          "Classificatie FMCS: Alle buitenlandse fabrikanten worden geclassificeerd als 'Grootschalig' onder het Foreign Manufacturers Certification Scheme. Deze classificatie is ongeacht de schaal van de uitgevoerde operaties.",
          "Geautoriseerde Indiase Vertegenwoordiger (AIR): Elke buitenlandse fabrikant is verplicht een Geautoriseerde Indiase Vertegenwoordiger (AIR) aan te wijzen. De AIR is het primaire contactpunt voor de buitenlandse aanvrager en BIS, verantwoordelijk voor naleving, samenwerking en het onderhoud van de BIS-licentie.",
          "Fabriek Audits: Fabriek audits voor buitenlandse fabrikanten zijn uitgebreid en duren meestal 3 dagen. Ook meer dagen zijn vereist in het geval van meerdere productaanvragen.",
        ]}
      />
    </div>
  );
};

const SchemeXMainContentLeftOverviewSection = () => {
  // Download function for table data
  const downloadTableData = () => {
    const link = document.createElement("a");
    link.href = "/pdf/schemeXproduct.pdf";
    link.download = "SchemeXproduct.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="overview" className="flex flex-col scroll-mt-20">
      {/* Overview */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Overzicht</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Inleiding tot BIS Scheme X Certificering
      </h2>

      <p className="service-left-content-paragraph">
        Het Bureau of Indian Standards, of BIS kortom, rolde &ldquo;Scheme
        X&rdquo; uit op 16 maart 2022, gericht op het verbeteren van naleving
        van productveiligheid en kwaliteit in India. Indiase en buitenlandse
        fabrikanten kunnen een BIS-certificaat aanvragen voor Machine en
        Elektrische apparatuur, componenten Zoals assemblages, sub-assemblages
        en, en Gereedschappen gespecificeerd in Schema-II van Scheme-X en
        certificering verkrijgen vóór export, verkoop, of distributie in India.
      </p>

      <p className="service-left-content-paragraph">
        Onder Scheme X kunnen de fabrikanten een BIS Licentie of een Certificaat
        van Conformiteit (CoC) aanvragen voor laagspannings schakelgear en
        bedieningsgear, machines, en elektrische apparatuur. Zodra de
        fabrikanten zijn gecertificeerd, mogen ze de BIS Standaard mark
        gebruiken, wat aangeeft dat hun producten voldoen aan de normen
        vastgelegd in India.
      </p>

      <p className="service-left-content-paragraph">
        De certificering, terwijl het het product en naleving met de Indiase
        Normen en Overheidsregelingen bevordert, helpt het vertrouwen en
        vertrouwen van de consumenten in de gecertificeerde producten op te
        bouwen.
      </p>

      <h2 className="service-left-content-heading-three">
        Wat is Scheme X Certificering?
      </h2>

      <p className="service-left-content-paragraph">
        Scheme X is een productcertificeringsschema ontwikkeld onder de BIS
        Conformiteitsbeoordelingsregelingen, 2018 en later vereenvoudigd onder
        de BIS Conformiteitsbeoordeling (Wijzigings) Regelingen, 2022.
      </p>

      <p className="service-left-content-paragraph">
        Het hoofddoel is om de Indiase veiligheids- en kwaliteitsnormen te
        brengen naar globale normen, vooral met betrekking tot de industriële
        machines en elektrische apparatuur. De producten gefabriceerd in of
        geïmporteerd naar India onder dit schema zijn onderworpen aan strenge
        controle en beoordeling om technische, veiligheids, evenals prestatie
        normen te bewijzen.
      </p>

      <p className="service-left-content-paragraph">
        Bepalingen onder het oorspronkelijke bereik van Scheme X Certificering
        zijn herzien en uitgebreid met de nieuw uitgegeven Machines en
        Elektrische Apparatuur Veiligheid (Omnibus Technische Verordening) Orde,
        2024, die onder de jurisdictie valt van het Ministerie van Zware
        Industrieën en is in werking gesteld door de BIS. De orde treedt in
        werking op 1 september 2026, en omvat een breed spectrum van machines en
        elektrische apparatuur zoals pompen voor het verwerken van vloeistoffen,
        compressoren, kranen, roterende elektrische machines, transformatoren,
        en schakelgear en bedieningsgear.
      </p>

      <p className="service-left-content-paragraph">
        Assemblages, sub-assemblages en componenten van dergelijke machines of
        apparatuur maken ook deel uit van het certificeringsbereik volgens
        Sectie 16 van de Bureau of Indian Standards Wet, 2016.
      </p>

      <p className="service-left-content-paragraph">
        Bovendien, onder de 1989 CMVR Regels (Constructie en Fabrikage van Klep
        Regeling), Bowser en andere typen constructieapparatuur onder de
        jurisdictie van Scheme X, wordt ervoor gezorgd dat de markt niet wordt
        blootgesteld aan apparatuur die ontbreekt aan de vereiste veiligheid en
        technische normen.
      </p>

      <h2 className="service-left-content-heading-three">
        Omnibus Technische Verordening (OTR)
      </h2>

      <p className="service-left-content-paragraph">
        Het Ministerie van Zware Industrieën publiceerde de &ldquo;Omnibus
        Technische Verordening over Veiligheidsorders (Machines en Elektrische
        apparatuur Veiligheid)&rdquo; via E-Gazette notificatie van 28 augustus
        2024. Deze innovatieve verordening is bedoeld om te verbeteren -
        veiligheid, kwaliteit en naleving van machines, elektrische apparatuur
        en hun assemblages, sub assemblages en componenten, onder Scheme X van
        de BIS Regeling, 2016.
      </p>

      <p className="service-left-content-paragraph">
        Onder de OTR zijn alle categorieën machines en elektrische apparatuur,
        en al hun onderdelen en componenten opgenomen. Echter, een paar
        categorieën zijn specifiek uitgesloten:
      </p>

      <PointsListWithoutHeading
        points={[
          "Elke machine en componenten die deel uitmaken van een andere orde onder Sectie 16 die is uitgegeven onder de Bureau of Indian Standards Wet, 2016.",
          "Gefabriceerde binnenlandse goederen en artikelen die alleen bedoeld zijn voor export.",
          "Constructiemachines en apparatuur die onder de CMVR Regels, 1989 vallen, voorgeschreven door het Ministerie van Wegenvervoer en autosnelwegen (MoRTH).",
        ]}
      />

      <p className="service-left-content-paragraph">
        Deze uitzonderingen zijn gemaakt om naleving te vergemakkelijken en
        onnodige duplicatie van regelgeving te vermijden om het gemak van
        zakendoen te bevorderen.
      </p>

      <p className="service-left-content-paragraph">
        De Omnibus Technische Verordening, 2024 omvat alle machines en
        elektrische apparatuur, inclusief laagspannings schakelgear en
        bedieningsgear genotificeerd door het Ministerie van Zware Industrieën,
        zullen worden behandeld onder de Scheme X kader van BIS Certificering.
        De Orde zal in werking treden op 1 september 2026 zodat de fabrikanten
        en importeurs genoeg tijd hebben om hun operaties aan te passen aan de
        uitgegeven Orders.
      </p>

      <h2 className="service-left-content-heading-three">
        BIS Certificering onder de Omnibus Technische Verordening
      </h2>

      <p className="service-left-content-paragraph">
        Volgens de OTR 2024 moeten fabrikanten, evenals importeurs, van machines
        en elektrische apparatuur die pompen, pompen, compressoren omvatten,
        centrifuges, kranen, transformatoren, en schakelgears een BIS
        Certificering aanvragen onder Scheme X.
      </p>

      <p className="service-left-content-paragraph">
        Onder Scheme X kunnen fabrikanten kiezen om aan te vragen voor:
      </p>

      <PointsListWithoutHeading
        points={[
          "Een BIS Licentie, of",
          "Een Certificaat van Conformiteit (CoC)",
        ]}
      />

      <p className="service-left-content-paragraph">
        Producten met de BIS Standaard Mark die een Mark van Conformiteit is die
        certificeert en verzekert de gebruikers dat het product veilig is,
        betrouwbaar, en van goede kwaliteit. Het is ook een mark van vertrouwen
        en echt goede prestaties.
      </p>

      <h3 className="service-left-content-heading-three">
        Speciale Notitie voor MSME's
      </h3>

      <p className="service-left-content-paragraph">
        Net als bij veel andere sectoren, moeten Micro, Klein, en Middelgrote
        Ondernemingen (MSME's) ook voldoen aan Scheme X en BIS Certificering
        verkrijgen voor hun machines en elektrische apparatuur. Hoewel het kan
        lijken dat naleving van de regelgevende vereisten uitdagend kan zijn, is
        het Scheme X certificaat een waarde toevoeging en voordeel voor MSME's
        om de volgende redenen:
      </p>

      <PointsListWithoutHeading
        points={[
          "Bewijst naleving van wettelijke en andere vereiste verplichtingen vastgesteld door de overheid.",
          "Verhoogt de reputatie van het product en consumentenvertrouwen.",
          "Versnelt toegang tot een grotere binnenlandse en buitenlandse markt.",
          "Verbeterd de positie van de MSME wereldwijd met betrekking tot concurrentiekracht, veiligheid, en kwaliteit.",
        ]}
      />

      <h3 className="service-left-content-heading-three">BIS Scheme X Logo</h3>

      <p className="service-left-content-paragraph">
        De BIS standaard mark van Scheme X vormt een kwaliteitsmark en een
        principe van vertrouwen. Het Logo bevat:
      </p>

      <PointsListWithoutHeading
        points={[
          "het standaardnummer wordt weergegeven in het bovenste deel van het logo; en",
          "het licentienummer weergegeven in het onderste deel van het Logo in het formaat: CM/L-XXXXXXXXXX",
        ]}
      />

      <p className="service-left-content-paragraph">
        Deze mark geeft aan dat een BIS Licentie succesvol is uitgegeven aan de
        fabrikant. Het geeft de fabrikant het recht om de BIS Mark te plaatsen
        en verzekert de consumenten dat het product authentiek en veilig is.
      </p>

      <div className="flex justify-center mt-[20px] md:mt-[26px]">
        <img
          src="/services-images/scheme-x-logo.png"
          alt="BIS Scheme X logo"
          title="BIS Scheme X Certificering"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <h3 className="service-left-content-heading-three">
        Juridische Implicaties
      </h3>

      <p className="service-left-content-paragraph">
        BIS Standaard Mark is een mark van vertrouwen en kwaliteit. De mark is
        alleen beschikbaar na een geldig contract op zijn plaats is. Alleen een
        geldig contract staat de eigenaar toe om de mark te gebruiken. Het
        gebruik van de mark zonder een geldig contract is een overtreding onder
        de Indiase constitutie en is gelijk aan het hebben van een juridische
        mark. De eigenaar van de mark wordt onder zware beperkingen geplaatst
        voor het gebruik van de licentie CM/L-XXXXXXXXXX voor producten die geen
        BIS-certificering hebben.
      </p>

      <p className="service-left-content-paragraph">
        Het volgt dat elke producent verplicht is om:
      </p>

      <PointsListWithoutHeading
        points={[
          "Een geldige BIS Licentie onder Scheme X verkrijgen.",
          "Voldoen aan de relevante eisen van Indiase Normen; en",
          "De producten correct voorzien van het goedgekeurde BIS Logo.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Dit regelgevend kader is uitgebreid om de belangen van consumenten en
        zakenmensen te beschermen, en een markt te bevorderen die benadrukt
        veiligheid, openheid, en vertrouwen.
      </p>

      <h2 className="service-left-content-heading-three">
        Belangrijke Verschillen Tussen Scheme-I en Scheme-X
      </h2>

      <h3 className="service-left-content-heading-three">Scheme-I</h3>

      <PointsListWithoutHeading
        points={[
          "Omvat een bredere categorie consumentenproducten zoals elektronica, huishoudelijke apparaten, en zelfs industriële producten.",
          "Producten uitgegeven een certificaat onder dit schema moeten de Standaard ISI Mark hebben.",
          "Betreft zowel binnenlandse als buitenlandse fabrikanten.",
          "Omvat fabrieksaudits en monster testen om kwaliteit en naleving van Indiase Normen te bepalen.",
        ]}
      />

      <h3 className="service-left-content-heading-three">Scheme-X</h3>

      <PointsListWithoutHeading
        points={[
          "Behandelt hoogrisico industriële en veiligheids kritische engineering producten, die elektrische apparatuur, machines, en industriële systemen van aanzienlijke plicht omvatten.",
          "De certificering is van grotere strengheid dan Scheme-I. Het omvat geavanceerde technische rapportage, nalevingscontrole, en uitgebreide certificeringsaudits.",
          "Scheme-X neigt duurder te zijn dan Scheme-I vanwege de extra nalevingsdocumentatie.",
          "Elk bedrijf dat handelt in elektrische apparatuur of industriële machines is verplicht om certificering te verkrijgen onder Scheme-X.",
        ]}
      />

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                Kenmerk
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                ISI Mark
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                Scheme X
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                Beheerd door
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Indiase BIS
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Indiase BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                Certificering Type
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                BIS licentie
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                BIS certificaat / BIS licentie
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                Doel Producten
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Consumentengoederen
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Machines & elektrische apparatuur
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                Gebruikte Mark
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                ISI mark
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                BIS standaard mark (onder Scheme X)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d] font-medium">
                Nalevingsniveau
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Indiase standaard naleving
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                Hoogwaardige technische en veiligheids naleving
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 className="service-left-content-heading-three">
        Producten Gedekt door Scheme-X
      </h3>

      <p className="service-left-content-paragraph">
        Scheme-X dekt producten met het hoogste risico voor veiligheid en
        prestaties, inclusief:
      </p>

      <PointsListWithoutHeading
        points={[
          "Elektrische Apparatuur: Industriële transformatoren, voedingsunits, en dergelijke, laagspannings schakelgear en bedieningsgear, plus andere hoogspanningsapparaten.",
          "Zware Machines: Hydraulische persen, industriële kranen, geautomatiseerde machinegereedschappen, en gespecialiseerde apparatuur voor grootschalige industrieën.",
          "Levenskritische Apparatuur: Brandblussers, drukvaten, nood elektrisch systemen, en andere apparaten en systemen voor levensveiligheid.",
          "Gespecialiseerde Consumenten & Industriële Elektronica: Medischwaardige elektronische apparaten en apparatuur die geavanceerde beschermingsmaatregelen incorporeren.",
        ]}
      />

      {/* Scheme X Product Table 20 */}
      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                Serienummer
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider">
                Beschrijving van Machines en Elektrische Apparatuur
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                HS Code
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                1
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-scheme-x-certification-for-pumps-and-liquid-elevators"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle typen Pompen voor het verwerken van vloeistoffen,
                  vloeistoftliften en (of)hun assemblages /sub-assemblages
                  /componenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                841340, 841350, 841360, 841370, 841381, 841382, 841391 en 841392
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                2
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-scheme-x-certification-for-compressors"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle typen compressoren en( of)hun assemblages
                  /sub-assemblages /componenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                841430, 841440, 84148011, 84148090, 84149011, 84149019, 84149040
                en 84149090
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                3
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-scheme-x-certification-for-heat-treatment-equipment"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle typen machines voor behandeling van materialen door een
                  proces dat een temperatuurverandering inhoudt en( of)hun
                  assemblages /sub-assemblages /componenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                841932, 841939, 841940, 841950, 841960, 841981, 841989 en
                84199090
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                4
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-scheme-x-certification-for-centrifuges-and-filtering-or-purifying-machinery"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle typen centrifuges, filterende of zuiverende machines voor
                  vloeistof en gas en( of)hun assemblages /sub-assemblages
                  /componenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                842111, 842112, 842119, 84212110, 84212190, 842122, 842129,
                842131, 842139, 842191 en 842199
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                5
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-scheme-x-certification-for-packing-machinery"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle typen machines voor vullen, sluiten, sealen, etiketteren
                  flessen, verpakken of inpakken en( of)hun
                  assemblages/sub-assemblages/componenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                842220, 842230, 842240 en 842290
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                6
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-scheme-x-certification-for-cranes"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle typen kranen en (of) hun assemblages
                  /sub-assemblages/componenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                842611, 842612, 842619, 842620, 842630, 842641, 842649, 842691
                en 84269990
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                7
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-scheme-x-certification-for-construction-machinery"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle typen machines voor constructie, grondverzet, Mijnbouw en
                  (of)hun assemblages /sub-assemblages/componenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8429, 843010, 843020, 843031, 843039, 843041, 843049, 843050,
                843141, 843142, 843143 en 843149
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                8
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-scheme-x-certification-for-weaving-machines-looms"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle typen weefmachines (getouwen) en (of)hun
                  assemblages/sub-assemblages / componenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8446, 844811, 844819, 844842 en 844849
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                9
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-scheme-x-certification-for-embroidery-machinery"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle typen machines voor borduurwerk en( of)hun assemblages
                  /sub-assemblages /componenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                84479020 en 844859
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                10
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-scheme-x-certification-for-metal-cutting-machine-tools"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle typen metaalsnijmachine gereedschappen gedekt onder de
                  kop 8456 tot 8461 en( of)hun assemblages
                  /sub-assemblages/componenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8456, 8457, 8458, 8459, 8460, 8461 en 846693
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                11
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-scheme-x-certification-for-machine-tools"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle typen machinegereedschappen voor het bewerken van steen,
                  keramiek, beton, asbestcement of vergelijkbaar mineraalglas en
                  (of)hun assemblages /sub-assemblages /componenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8464 en 84669100
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                12
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-scheme-x-certification-for-rubber-and-plastics-machinery"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle typen machines voor het bewerken van rubber en
                  kunststoffen en( of) hun assemblages /sub-assemblages
                  /componenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8477
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                13
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-scheme-x-certification-for-public-works-and-mechanical-appliances"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle typen Machines inclusief de machines voor openbare werken
                  & bouw en de machines & mechanische apparaten met individuele
                  functies, niet gespecificeerd Of opgenomen elders in Hoofdstuk
                  84 en( of)hun assemblages/sub-assemblages /componenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                84791000, 84798999 en 84799090
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                14
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-scheme-x-certification-for-gears-gearing-and-transmission-elements"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle typen tandwielen en tandheugels, getande wielen,
                  kettingtandwielen, transmissie-elementen bal of rol schroeven,
                  tandwielkasten en snelheidsveranderaars, inclusief
                  koppelomvormers En (of)hun assemblages /sub-assemblages
                  /componenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                84834000 en 84839000
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                15
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-scheme-x-certification-for-rotary-electrical-machines"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle typen Roaterende elektrische machines zoals Generator,
                  enz. en (of) hun assemblages /sub-assemblages /componenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8501 en 8503
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                16
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-scheme-x-certification-for-diesel-generators"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle typen Dieselmotoren en (of)hun assemblages
                  /sub-assemblages /componenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8502 en 8503
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                17
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-scheme-x-certification-for-transformers"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle typen Transformatoren en (of)hun assemblages
                  /sub-assemblages /componenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                850421, 850422, 850423, 850431, 850432, 850433, 850434 en 850490
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                18
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-scheme-x-certification-for-power-semiconductor-converters"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle typen Vermogenschakelaar Omvormer en (of)hun assemblages
                  /sub-assemblages /componenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                850440
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                19
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-scheme-x-certification-for-switchgear-and-controlgear-equipment-up-to-1000-volts"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle typen schakel- en bedieningsapparatuur die werken op
                  spanningen niet hoger dan 1000 volt en (of)hun assemblages
                  /sub-assemblages /componenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8536, 8537 en 8538
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                20
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                <Link
                  to="/bis-scheme-x-certification-for-switchgear-and-controlgear-equipment-above-1000-volts"
                  className="text-[#1A8781] hover:text-[#156d68] hover:underline transition-colors duration-200"
                >
                  Alle typen schakel- en bedieningsapparatuur die werken op
                  spanningen hoger dan 1000 volt en (of) hun assemblages
                  /sub-assemblages /componenten
                </Link>
              </TableCell>
              <TableCell className="px-6 py-4 text-sm md:text-base font-geist text-[#42434d]">
                8535, 8537 en 8538
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        {/* Heading and Description */}
        <div className="mb-6">
          <h3 className="text-[20px] md:text-[24px] font-roboto font-bold text-[#131316] mb-2">
            Veiligheidsnorm per Product
          </h3>
          <p className="mt-[12px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
            Beschrijving van Machines en Elektrische Apparatuur
          </p>
        </div>

        <div className="flex justify-end mb-4">
          <button
            onClick={downloadTableData}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A8781] text-white rounded-lg font-geist text-sm md:text-base hover:bg-[#156d68] transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 md:h-5 md:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            PDF Downloaden
          </button>
        </div>
      </div>

      <h2 className="service-left-content-heading-three">
        Veiligheidsnormen Onder BIS Scheme - X
      </h2>

      <p className="service-left-content-paragraph">
        Meer dan alleen een wettelijke noodzaak, biedt de BIS Scheme - X
        Certificering een belofte van veiligheid, kwaliteit, en betrouwbaarheid.
        Deze Certificering, die strikte naleving van nationale en internationale
        normen inhoudt, zorgt ervoor dat de machines en elektrische apparatuur
        aangeboden aan gebruikers veilig, milieuvriendelijk, en technisch solide
        zijn.
      </p>

      <p className="service-left-content-paragraph">
        Om te certificeren onder Scheme - X, moeten fabrikanten voldoen aan de
        volgende grote veiligheidscomponenten:
      </p>

      <PointsListWithoutHeading
        points={[
          "Elektrische Veiligheid: Naleving van de toepasselijke IEC en Indiase Normen. Certificering beschermt tegen kortsluiting, elektrische schokken, isolatiebreuk, verlies in beschermende aarde, ontbranding van omliggende brandbare materialen, en brand.",
          "Mechanische Veiligheid: Beoordeling van de structurele integriteit van de machine en de integriteit van bewegende delen en nieuwe materialen. Zorgt ervoor dat apparatuur veilig wordt onderworpen aan mechanische stress, slijtage, en operationele gevaren.",
          "Brandveiligheid: Het gebruik van materialen die zijn ontworpen en geconstrueerd met brandbestendig materiaal. Naleving van normen voor vlampropagatie prestaties om de risico's geassocieerd met brand te beheersen.",
          "Milieu Naleving: Het gebruik van gecontroleerde stroom en milieuvriendelijke materialen in de productie van apparatuur. Moedigt fabrikanten aan om de milieu-impact van hun apparatuur te verminderen.",
          "Kwaliteitsmanagement: Dominante en autonome controle op de productieprocessen om de vooraf ingestelde normen en normen te handhaven. Focus op regulering van fabrieksomstandigheden, inclusief procesaudits, en continue naleving.",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        Regelgevende Normen Onder Scheme-X
      </h2>

      <p className="service-left-content-paragraph">
        Fabrikanten zijn verplicht om te voldoen aan de Relevante Indiase Normen
        die zijn afgestemd op de Internationale Normen, inclusief:
      </p>

      <h3 className="service-left-content-heading-three">Type A Normen:</h3>

      <PointsListWithoutHeading
        points={[
          "IS 16819:2018 / ISO 12100:2010 – Veiligheid van Machines: Algemene Principes voor het Ontwerp, Risicobeoordeling, en Risicovermindering.",
        ]}
      />

      <h3 className="service-left-content-heading-three">Type B Normen:</h3>

      <PointsListWithoutHeading
        points={[
          "Beschreven in het Tweede Schema van de Omnibus Technische Verordening (OTR) Orde, 2024.",
        ]}
      />

      <h3 className="service-left-content-heading-three">Type C Normen:</h3>

      <PointsListWithoutHeading
        points={["Beschreven in het Derde Schema van de OTR Orde, 2024."]}
      />

      <h3 className="service-left-content-heading-three">
        IS/IEC 60947 Serie:
      </h3>

      <PointsListWithoutHeading
        points={[
          "Dekken laagspannings schakel- en bedieningsapparatuur in meerdere delen en secties.",
        ]}
      />
    </div>
  );
};

const PointsListWithoutHeading = ({ points }) => {
  return (
    <div className="mt-[18px] md:mt-[18px]">
      <ul className="flex flex-col gap-3 list-none">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="bg-green-500/10 p-1.5 rounded-full flex-shrink-0 flex items-center justify-center min-w-[24px] min-h-[24px] mt-0.5">
              <Check size={12} className="text-[#020817]" />
            </div>
            <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose flex-1">
              {point}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
