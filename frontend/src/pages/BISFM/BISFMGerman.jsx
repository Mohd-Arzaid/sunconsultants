import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Check, SlashIcon } from "lucide-react";
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
import { BoxReveal } from "@/components/magicui/box-reveal";
import FooterEng from "@/components/manual/Footer/FooterEng";
import ServiceAuthorEng from "@/components/manual/ServiceAuthor/ServiceAuthorEng";
import ServicesRightSideContentGerman from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentGerman";
import ISIMARKImage from "../../assets/servicesImages/ISIMARKUpdated.jpg";
import BISCertificateImage from "../../assets/bisfmpageimage/biscertificate.png";
import BISFMProductTable from "@/pages/BISFMProductTable/BISFMProductTable.jsx";
import ServiceAuthorGerman from "@/components/manual/ServiceAuthor/ServiceAuthorGerman";
import FooterGerman from "@/components/manual/Footer/FooterGerman";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const BISFMGerman = () => {
  return (
    <div className="relative">
      <MetaTags />
      <BreadcrumbContent />
      <HeroSection />
      <IndexSection />
      <MainContent />
      <ServiceFaq />
      <div id="product-table">
        <BISFMProductTable />
      </div>
      <div id="services">
        <Services />
      </div>
      <FooterGerman />
      <ScrollToTopButton />
    </div>
  );
};

export default BISFMGerman;

const MetaTags = () => {
  const title =
    "BIS FMCS Zertifizierung | Zertifizierungsschema für ausländische Hersteller | Sun Certifications";
  const description =
    "Experten-BIS-FMCS-Zertifizierungsdienstleistungen für ausländische Hersteller. Erhalten Sie die ISI-Mark-Zertifizierung für Exporte nach Indien. Vertrauenswürdige BIS-Zertifizierungen seit 2013. ✓ Schnelle Bearbeitung ✓ Expertenberatung";
  const keywords =
    "BIS-Zertifikat für ausländische Hersteller, BIS-Lizenz, ISI-Mark";
  const canonicalUrl =
    "https://bis-certifications.com/de/leitfaden-zur-bis-zertifizierung-fuer-auslaendische-hersteller-indisches-bis";
  const author = "Dhruv Aggarwal";
  const publisher = "Sun Certifications India";
  const ogTitle =
    "BIS FMCS Zertifizierung | Zertifizierungsschema für ausländische Hersteller";
  const ogDescription =
    "Experten-BIS-FMCS-Zertifizierungsdienstleistungen für ausländische Hersteller. Erhalten Sie die ISI-Mark-Zertifizierung für Exporte nach Indien. ✓ Schnelle Bearbeitung ✓ Expertenberatung";

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
        name: "BIS-Mark (ISI-Lizenz) für ausländische Hersteller",
        item: canonicalUrl,
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
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={canonicalUrl} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
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
                    <Link to="/">Startseite</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    BIS-Mark (ISI-Lizenz) für ausländische Hersteller
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

const HeroSection = () => {
  return (
    <div className="relative pt-[60px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]">
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
              Zertifizierte Expertise
            </span>
          </div>

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              Indische BIS-Zertifizierung
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            für ausländische Hersteller
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            Ausländische Hersteller benötigen das ISI-Mark für Exporte nach
            Indien. Umfasst über 600 obligatorische Produkte und über 20.000
            freiwillige Produkte.
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
                Dienstleistungen anzeigen
              </span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <ContactUsForm />
      </div>
    </div>
  );
};

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);

  // Function to get page name based on URL
  const getPageName = () => {
    const path = window.location.pathname;

    if (
      path.includes(
        "/de/leitfaden-zur-bis-zertifizierung-fuer-auslaendische-hersteller-indisches-bis"
      )
    )
      return "BISFM German für ausländische Hersteller - Deutsche Seite";
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
        title: "Bitte geben Sie einen gültigen vollständigen Namen ein.",
        description:
          "Der Name sollte nur Buchstaben und Leerzeichen enthalten.",
      });
      setLoading(false);
      return;
    }

    // Email validation - allow any domain
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        description: "Überprüfen Sie, ob Ihr E-Mail-Format korrekt ist",
      });
      setLoading(false);
      return;
    }

    // Phone number validation
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "Bitte geben Sie eine gültige Telefonnummer ein",
        description: "Die Telefonnummer muss (8-15 Ziffern) enthalten",
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
        title: "Kontaktformular erfolgreich übermittelt!",
        description:
          "Vielen Dank für Ihre Kontaktaufnahme. Unser Team wird sich in Kürze bei Ihnen melden.",
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
        error.response?.data?.message || "Something went wrong";
      toast({
        variant: "destructive",
        title:
          errorMessage || "Fehler beim Übermitteln der Kontaktformulardaten!",
        description:
          "Etwas ist schief gelaufen. Bitte überprüfen Sie Ihre Angaben und versuchen Sie es erneut.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="z-20 w-full md:w-[580px] h-auto md:h-[435px] flex flex-col">
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-poppins font-semibold text-[18px] md:text-[20px] text-[#008080]">
          Kontaktieren Sie uns
        </span>
        <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
      </div>

      <h3 className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
        Termin vereinbaren
      </h3>

      <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
        Möchten Sie unser Team kontaktieren und einen Anruf vereinbaren?
        <span className="text-black"> Jetzt versuchen</span>
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
            placeholder="Vollständiger Name *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="E-Mail-Adresse *"
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
            placeholder="Kontaktnummer *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="companyName"
            value={companyName}
            onChange={handleOnChange}
            placeholder="Firmenname *"
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
            placeholder="Produktname *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="message"
            value={message}
            onChange={handleOnChange}
            placeholder="Erforderliche Zertifizierung*"
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
              <span>Wird gesendet</span>
            </div>
          ) : (
            <div className="flex gap-3 items-center justify-center">
              <span>Termin vereinbaren</span>
            </div>
          )}
        </Button>
      </form>
    </div>
  );
};

const IndexSection = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const stickyRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const SECTIONS = useMemo(
    () => [
      "overview",
      "standardization",
      "representation",
      "document",
      "process",
      "costing",
      "surveillance",
      "facilitator",
    ],
    []
  );

  const MENU_ITEMS = {
    overview: "Übersicht",
    standardization: "Standardisierung",
    representation: "Vertretung",
    document: "Dokumente",
    process: "Prozess",
    costing: "Kosten",
    surveillance: "Überwachung",
    facilitator: "Vermittler",
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
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 200;

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
    handleScrollSpy();

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
          aria-label="Toggle menu"
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

const MainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side */}
        <MainContentLeft />
        {/* Right Side */}
        <ServicesRightSideContentGerman />
      </div>
    </div>
  );
};

const MainContentLeft = () => {
  return (
    <div className="flex-1">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        <div className="flex flex-col gap-2">
          <h1 className="service-left-content-heading-two">
            Vollständige Informationen zur indischen BIS-Zertifizierung nach dem
            FMCS-Schema
          </h1>

          <h2 className="service-left-content-heading-three">
            Was ist das indische BIS?
          </h2>

          <p className="service-left-content-paragraph">
            Das Bureau of Indian Standards (BIS) ist Indiens nationale
            Normungsorganisation unter dem Ministerium für
            Verbraucherangelegenheiten, Lebensmittel und öffentliche Verteilung.
            Gegründet unter dem BIS-Gesetz von 1986 und überarbeitet im Jahr
            2016, spielt BIS eine zentrale Rolle bei der Standardisierung,
            Kennzeichnung und Qualitätszertifizierung von Waren. Es zielt darauf
            ab, die Qualität, Sicherheit und Zuverlässigkeit der indischen
            Verbrauchern angebotenen Produkte zu gewährleisten.
          </p>

          <p className="service-left-content-paragraph">
            BIS arbeitet über verschiedene Schemata, die Produktzertifizierung,
            Stempelung für Schmuck, Prüfdienstleistungen und Schulungsprogramme
            umfassen. Eines seiner international bedeutendsten Rahmenwerke ist
            jedoch das Zertifizierungsschema für ausländische Hersteller (FMCS).
          </p>
        </div>

        <OverviewSection />
        <div className="service-left-content-divider" />
        <StandardizationSection />
        <div className="service-left-content-divider" />
        <RepresentationSection />
        <div className="service-left-content-divider" />
        <DocumentSection />
        <div className="service-left-content-divider" />
        <ProcessSection />
        <div className="service-left-content-divider" />
        <CostingSection />
        <div className="service-left-content-divider" />
        <SurveillanceSection />
        <div className="service-left-content-divider" />
        <FacilitatorSection />
        <ServiceAuthorGerman />
      </div>
    </div>
  );
};

const OverviewSection = () => {
  return (
    <div id="overview" className="flex flex-col scroll-mt-20">
      {/* Overview */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Übersicht</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Was ist ein BIS-Zertifikat unter FMCS?
      </h2>

      <p className="service-left-content-paragraph">
        Im Jahr 2000 eingeführt, ist FMCS ein Mechanismus, durch den
        ausländischen Herstellern eine BIS-Lizenz erteilt werden kann, um das
        ISI-Mark auf ihren Produkten zu verwenden, was die Konformität mit
        indischen Standards anzeigt. Der Zertifizierungsprozess FMCS ermöglicht
        es überseeischen Unternehmen, ihre Produkte legal in Indien zu
        verkaufen, ohne eine lokale Produktionseinheit zu gründen.
      </p>

      <p className="service-left-content-paragraph">
        Derzeit operieren mehr als 1.650 ausländische Hersteller in Indien unter
        dem BIS-Zertifizierungssystem durch FMCS.{" "}
      </p>

      <h2 className="service-left-content-heading-three">
        Warum ist die BIS-Zertifizierung entscheidend?
      </h2>

      <p className="service-left-content-paragraph">
        Die Erlangung eines BIS-Zertifikats ist mehr als eine gesetzliche
        Anforderung—es ist ein Tor zum riesigen indischen Verbrauchermarkt. Hier
        sind einige wichtige Gründe, warum es unerlässlich ist:
      </p>

      <PointsListWithoutHeading
        points={[
          "Rechtliche Compliance: Produkte müssen den relevanten indischen Standards entsprechen.",
          "Markenvertrauen: Das ISI-Mark dient als Qualitätsnachweis und stärkt das Verbrauchervertrauen.",
          "Zollabfertigung: Ohne gültige BIS-Lizenz können Produkte am Zoll abgelehnt werden.",
          "Marktzugang: Hilft ausländischen Marken, nahtlosen Eintritt und breite Akzeptanz in Indien zu erlangen.",
          "Risikominderung: Stellt sicher, dass Produkte sicher sind und vermeidet potenzielle Rückrufe und Haftungsprobleme.",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        Umfang der von BIS abgedeckten Produkte
      </h2>

      <p className="service-left-content-paragraph">
        BIS hat über 600 Produkte unter obligatorischer Zertifizierung
        aufgelistet, und über 20.000 Artikel sind für ein freiwilliges
        BIS-Zertifikat berechtigt. Diese umfassen eine breite Palette von
        Branchen:
      </p>

      <PointsListWithoutHeading
        points={[
          "Elektronik & IT-Hardware",
          "Automobilteile",
          "Haushaltsgeräte",
          "Stahlprodukte",
          "Zement und Baumaterialien usw.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Die wachsende Liste zeigt den zunehmenden Umfang und die Relevanz des
        BIS Zertifikats im globalen Handel.
      </p>

      <h2 className="service-left-content-heading-three">
        Ziele oder Vorteile der BIS-Zertifizierung für ausländische Hersteller
        unter FMCS
      </h2>

      <p className="service-left-content-paragraph">
        Das FMCS- und BIS-Zertifikatsregime zielt darauf ab:
      </p>

      <PointsListWithoutHeading
        points={[
          "Die Verwendung des ISI-Marks ohne gültige BIS-Lizenz ist gesetzlich strafbar.",
          "Zertifizierte Produkte müssen sowohl das ISI-Logo als auch die CM/L-Nummer (Certificate of Manufacturing License) anzeigen.",
          "Verstöße können zu Produktverboten, Geldstrafen oder sogar strafrechtlicher Verfolgung führen.",
          "Vertrauen zwischen Verbrauchern und importierten Marken aufbauen.",
          "Fairen Handel und ein faires Spielfeld fördern.",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        Wichtige Merkmale des BIS-Zertifikats für ausländische Hersteller
      </h2>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                MERKMAL
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                BESCHREIBUNG
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Anwendbarkeit
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Nur ausländische Hersteller
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Kennzeichnung
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                ISI-Mark + CM/L-Nummer
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Prüfanforderung
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Obligatorische Werksinspektion
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Prüfung
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Durchgeführt in BIS-zugelassenen indischen Labors
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Gültigkeit
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                BIS-Lizenz gültig für 1-2 Jahre
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Verlängerung
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Erforderlich bei Ablauf oder Produktaktualisierungen
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                AIR (Autorisierter indischer Vertreter)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Muss ernannt werden, um mit BIS zu kommunizieren
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Leistungsbankgarantie
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Erforderlich von einer RBI-zugelassenen indischen Bank
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

const StandardizationSection = () => {
  return (
    <div id="standardization" className="flex flex-col scroll-mt-20">
      {/* Standardization */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">
          Standardisierung
        </span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Was ist das indische BIS und warum ist es wichtig?
      </h2>

      <p className="service-left-content-paragraph">
        Das indische BIS ist das Gütezeichen für Qualität und Sicherheit, das
        vom Bureau of Indian Standards (BIS) ausgestellt wird. Heute wird das
        ISI-Zeichen ausschließlich zur Kennzeichnung von Produkten verwendet,
        die den indischen Standards unter dem offiziellen
        BIS-Zertifizierungsschema entsprechen.
      </p>

      <p className="service-left-content-paragraph">
        Damit ein Produkt das indische BIS- oder ISI-Zeichen tragen kann, muss
        es ein strenges BIS-Zertifizierungsverfahren durchlaufen, einschließlich
        Labortests, Fabrikinspektionen, Dokumentationsprüfungen und
        Konformitätsprüfungen gemäß den indischen BIS-Richtlinien.
      </p>

      <p className="service-left-content-paragraph">
        Rechtlicher Status der BIS-Zertifizierung in Indien
      </p>

      <p className="service-left-content-paragraph">
        Die BIS-Lizenz ist nicht nur ein Marketinginstrument—sie ist eine
        gesetzliche Anforderung für alle Produkte, die unter das obligatorische
        BIS-Zertifizierungsschema fallen.{" "}
      </p>

      <h3 className="service-left-content-heading-three">
        Gemäß dem BIS-Gesetz von 2016:
      </h3>

      <PointsListWithoutHeading
        points={[
          "Die Verwendung des ISI-Zeichens ohne gültige BIS-Lizenz ist gesetzlich strafbar.",
          "Zertifizierte Produkte müssen sowohl das ISI-Logo als auch die CM/L-Nummer (Certificate of Manufacturing License) anzeigen.",
          "Verstöße können zu Produktverboten, Geldstrafen oder sogar strafrechtlicher Verfolgung führen.",
        ]}
      />

      <img
        src={ISIMARKImage}
        alt="ISI-Zeichen"
        className="w-full max-w-[300px] h-auto rounded-lg shadow-sm my-6 mx-auto border border-gray-200 hover:shadow-md transition-shadow duration-300"
      />

      <p className="service-left-content-heading-three">
        Das ISI-Logo besteht typischerweise aus:
      </p>

      <PointsListWithoutHeading
        points={[
          'Den stilisierten Buchstaben "ISI" in einem Rechteck mit abgerundeten Ecken',
          "Der CM/L-Nummer, die unter oder neben dem Zeichen angezeigt wird",
          "Der Referenznummer des indischen Standardcodes (z. B. IS 302 für Elektrogeräte)",
        ]}
      />

      <p className="service-left-content-heading-three">
        Die Platzierung muss sein:
      </p>

      <PointsListWithoutHeading
        points={[
          "Dauerhaft und deutlich sichtbar auf dem Produkt",
          "Auf der Verpackung, wenn es auf dem Produkt nicht möglich ist",
          "In Bedienungsanleitungen bei einigen Produktkategorien",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        Produktkategorien, die ein BIS-Zertifikat erfordern
      </h2>

      <p className="service-left-content-paragraph">
        Mehr als 600 Produkte erfordern das ISI-Zeichen unter dem
        obligatorischen Registrierungsschema in Indien. Beispiele sind:
      </p>

      {/* Table for Product Categories Requiring BIS Certificate */}
      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                PRODUKTKATEGORIE
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                IS-CODE
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                STATUS
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Elektrogeräte
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 302
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Obligatorisch
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Stahl & Eisen
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 2062
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Obligatorisch
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Lebensmittelbehälter
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 10146
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Obligatorisch
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Helme
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 4151
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Obligatorisch
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Zement
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 1489
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Obligatorisch
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <p className="service-left-content-paragraph">
        Jede Kategorie erfordert die Einhaltung des entsprechenden indischen
        Standards, der während des BIS-Zertifizierungsprozesses getestet wird.
        Die vollständige Liste der Produkte kann durch{" "}
        <span
          className="font-semibold text-gray-950  underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3 cursor-pointer hover:text-[#1A8781]"
          onClick={() => {
            const productTable = document.getElementById("product-table");
            if (productTable) {
              productTable.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
        >
          Hier klicken
        </span>
        erreicht werden.
      </p>

      <h2 className="service-left-content-heading-three">
        Indisches BIS vs. andere globale Zertifizierungen
      </h2>

      <p className="service-left-content-paragraph">
        Vergleichen wir das ISI-Zeichen mit anderen internationalen Symbolen:
      </p>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                ZEICHEN
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                LAND
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                OBLIGATORISCH?
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                FOKUS
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                ISI
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                India
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Ja
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Produktsicherheit und Qualität
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                CE
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                EU
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Ja (für bestimmte Kategorien)
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Gesundheit, Sicherheit, Umwelt
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                UL
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                USA
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Nein
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Sicherheitsstandards (freiwillig)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                CCC
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                China
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Ja
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Sicherheit von Elektrogeräten
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <p className="service-left-content-paragraph">
        Im Gegensatz zu UL (freiwillig) oder CE (regionsspezifisch) ist das
        ISI-Zeichen unter dem BIS-Registrierungsschema sowohl obligatorisch als
        auch lokal durchgesetzt.
      </p>

      <h2 className="service-left-content-heading-three">
        Ist die BIS-Zertifizierung oder BIS-Lizenz für den Import nach Indien
        obligatorisch?
      </h2>

      <p className="service-left-content-paragraph">
        Obligatorischer Charakter des BIS-Zertifikats
      </p>

      <p className="service-left-content-paragraph">
        Die indische Regierung hat es für bestimmte Produkte obligatorisch
        gemacht, vom Bureau of Indian Standards (BIS) zertifiziert zu werden,
        bevor sie in den indischen Markt importiert, verkauft oder vertrieben
        werden können. Diese Verpflichtung ergibt sich aus:
      </p>

      <PointsListWithoutHeading
        points={[
          "Verbraucherschutzzielen",
          "Harmonisierung mit indischen Standards",
          "Nationalen Sicherheitsvorschriften",
        ]}
      />

      <p className="service-left-content-paragraph">
        Wenn ein Produkt unter die obligatorische Anforderung des indischen BIS
        fällt, muss es ein BIS-Zertifikat haben und das ISI-Zeichen tragen,
        bevor es die indischen Zollbehörden passieren kann.
      </p>

      <h2 className="service-left-content-heading-three">
        Ist die BIS-Zertifizierung nur für Importe erforderlich?
      </h2>

      <p className="service-left-content-paragraph">
        Nein. Die BIS-Zertifizierung ist obligatorisch für:
      </p>

      <PointsListWithoutHeading
        points={[
          "Inländische Hersteller, die regulierte Produkte produzieren",
          "Ausländische Hersteller, die regulierte Produkte nach Indien exportieren",
        ]}
      />

      <p className="service-left-content-paragraph">
        Egal, ob Sie sich in Indien oder im Ausland befinden, wenn Ihr Produkt
        auf der obligatorischen Liste steht, muss es eine BIS-Lizenz haben und
        das ISI-Zeichen tragen.
      </p>

      <p className="service-left-content-paragraph">
        Die indischen Zollbehörden verwenden jetzt fortschrittliche
        Datensysteme, um nicht konforme Sendungen automatisch zu kennzeichnen.
        Alle Waren unter regulierten Kategorien werden auf das Vorhandensein
        eines gültigen BIS-Zertifikats gescannt.
      </p>

      <p className="service-left-content-paragraph">
        Ausnahmen von der BIS-Zertifizierung
      </p>

      <p className="service-left-content-paragraph">
        Die BIS-Zertifizierung ist in den meisten Fällen obligatorisch, aber
        Ausnahmen können unter bestimmten Szenarien gewährt werden:
      </p>

      <PointsListWithoutHeading
        points={[
          "Für F&E-Prototypen oder Probetests",
          "Für persönliche Importe in begrenzter Menge",
        ]}
      />

      <p className="service-left-content-paragraph">
        Diese sind jedoch selten und erfordern formelle Ausnahmebriefe vom BIS
        oder verwandten Ministerien.
      </p>

      <h2 className="service-left-content-heading-three">
        Wie können Sie wissen, ob Ihr Produkt ein BIS-Zertifikat oder eine
        BIS-Lizenz benötigt?
      </h2>

      <p className="service-left-content-paragraph">
        <span
          className="font-semibold text-gray-950  underline decoration-gray-950 decoration-2 underline-offset-[0.27em] transition-colors mr-3 cursor-pointer hover:text-[#1A8781]"
          onClick={() => {
            const productTable = document.getElementById("product-table");
            if (productTable) {
              productTable.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
        >
          Hier klicken
        </span>
        Klicken Sie hier, um zu überprüfen, ob Ihr Produkt unter dem
        obligatorischen indischen BIS-Zertifizierungsschema abgedeckt ist.
      </p>
    </div>
  );
};

const RepresentationSection = () => {
  return (
    <div id="representation" className="flex flex-col scroll-mt-20">
      {/* Representation */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Vertretung</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        Rolle des autorisierten indischen Vertreters (AIR) bei der
        BIS-Zertifizierung
      </h2>

      <h3 className="service-left-content-heading-three">
        Was ist ein autorisierter indischer Vertreter (AIR)?
      </h3>

      <p className="service-left-content-paragraph">
        Ein autorisierter indischer Vertreter (AIR) ist ein wichtiger
        Vermittler, der von einem ausländischen Hersteller ernannt wird, der
        eine BIS-Zertifizierung unter dem FMCS-Registrierungsschema anstrebt.
        Der AIR dient als offizieller Verbindungsmann zwischen dem Bureau of
        Indian Standards (BIS) und dem Hersteller und gewährleistet reibungslose
        Kommunikation, Dokumentenbearbeitung und Koordination des
        Zertifizierungsprozesses.
      </p>

      <h3 className="service-left-content-heading-three">
        Rechtliche Anforderung für die Ernennung eines AIR
      </h3>

      <p className="service-left-content-paragraph">
        Gemäß den BIS-Richtlinien muss jeder ausländische Hersteller, der keine
        registrierte Niederlassung in Indien hat, einen AIR ernennen. Diese
        Anforderung stellt sicher, dass das BIS einen zuverlässigen,
        zugänglichen Ansprechpartner innerhalb der indischen Gerichtsbarkeit
        hat.
      </p>

      <h3 className="service-left-content-heading-three">
        Hauptverantwortlichkeiten des AIR
      </h3>

      <p className="service-left-content-paragraph">
        Die Rolle des AIR erstreckt sich über den gesamten
        BIS-Zertifizierungsprozess, von der Dokumentation und Antragseinreichung
        bis zur Auditkoordination und der Einhaltung nach der Zertifizierung:
      </p>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Verantwortlichkeit
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                Beschreibung
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Kommunikation
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Dient als Ansprechpartner für BIS-Beamte und -Abteilungen
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Antragsunterstützung
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Unterstützt beim Ausfüllen von Formularen, Zusammenstellen von
                Dokumenten und Einreichen des Antrags
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Auditkoordination
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Koordiniert Fabrikinspektionspläne und beantwortet
                Prüferanfragen
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Compliance-Überwachung
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Stellt sicher, dass alle Test- und Zertifizierungsaktivitäten
                den BIS-Normen entsprechen
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Verlängerungsverwaltung
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Überwacht die BIS-Lizenzverlängerung,
                Dokumentationsaktualisierungen und Gebührenzahlungen
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 className="service-left-content-heading-three">
        Eignungskriterien, um ein AIR zu werden
      </h3>

      <p className="service-left-content-paragraph">
        Um als AIR zu dienen, muss eine Person oder Organisation:
      </p>

      <PointsListWithoutHeading
        points={[
          "Indischer Staatsbürger oder eine rechtlich registrierte Geschäftseinheit in Indien sein",
          "Eine physische Adresse in Indien mit einer gültigen Postleitzahl haben",
          "In der Lage sein, fließend auf Englisch und lokalen Sprachen zu kommunizieren",
          "Das Zertifizierungsschema, BIS-Dokumentationsprotokolle und regulatorische Erwartungen verstehen",
          "In der Lage sein, Prüfungen und Korrespondenz prompt im Namen des ausländischen Herstellers zu beantworten",
        ]}
      />

      <h3 className="service-left-content-heading-three">
        Warum die AIR-Rolle wichtig ist
      </h3>

      <p className="service-left-content-paragraph">
        Der AIR gewährleistet Kontinuität und Verantwortlichkeit während des
        gesamten BIS-Zertifizierungsprozesses. Ohne einen AIR:
      </p>

      <PointsListWithoutHeading
        points={[
          "Hat das BIS keine Gerichtsbarkeit, gegen einen nicht konformen ausländischen Hersteller vorzugehen",
          "Können zeitkritische Anfragen und Auditpläne verzögert werden",
          "Kann der Zertifizierungsprozess stecken bleiben, widerrufen oder abgelehnt werden",
        ]}
      />

      <p className="service-left-content-paragraph">
        Ein proaktiver und erfahrener AIR erhöht die Erfolgschance einer
        BIS-Zertifizierung erheblich.
      </p>
    </div>
  );
};

const DocumentSection = () => {
  return (
    <div id="document" className="flex flex-col scroll-mt-20">
      {/* Document */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Dokumente</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        Für die BIS-Zertifizierung unter FMCS erforderliche Dokumentation
      </h2>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Dokumenttyp
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                Zweck
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                FMCS-Antragsformular
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Offizieller Antrag auf Zertifizierung
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Liste der Fertigungsausrüstung
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Zeigt Produktionskapazitäten
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Liste der Rohmaterialien
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Gewährleistet die Qualität der Eingabematerialien
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Liste der Prüfausrüstung
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Bewertet die Bereitschaft für Tests und Compliance
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Kalibrierungszertifikate
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Beweist die Genauigkeit der Prüfausrüstung
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Fabriklayout & Prozessablauf
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Hilft Prüfern, die Fertigungsstufen zu verstehen
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Prüfzertifikate
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Beweist die Qualität von Rohmaterialien und Endprodukt
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Qualitätskontrollprofil
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Überprüft Mitarbeiterqualifikationen und SOPs
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Zahlungsnachweis
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Validiert die Gebührenzahlung an das BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Leistungsbankgarantie
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Dient als finanzielle Absicherung für das BIS
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 className="service-left-content-heading-three">
        Detaillierte Aufschlüsselung jedes für die indische BIS-Zertifizierung
        erforderlichen Dokuments
      </h3>

      <h2 className="service-left-content-heading-three">
        1. FMCS-Antragsformular
      </h2>

      <p className="service-left-content-paragraph">
        Dieses Dokument enthält allgemeine Details über den ausländischen
        Hersteller, einschließlich:
      </p>

      <PointsListWithoutHeading
        points={[
          "Produktdetails (Typ, Kategorie, Modell)",
          "Beabsichtigter indischer Standard",
          "Kontaktdaten der Fabrik und des AIR",
          "Fertigungskapazität und Testumfang",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        2. Liste der Fertigungsausrüstung
      </h2>

      <PointsListWithoutHeading
        points={[
          "Maschinenname und Hersteller",
          "Produktionskapazität",
          "Kontaktdaten der Fabrik und des AIR",
          "Wartungsaufzeichnungen (falls zutreffend)",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        3. Liste der Rohmaterialien
      </h2>

      <PointsListWithoutHeading
        points={[
          "Beschaffungsquelle",
          "Güteklassen und Spezifikationen",
          "Testprotokoll (falls vorhanden)",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        4. Liste der Prüfausrüstung
      </h2>

      <PointsListWithoutHeading
        points={[
          "Ausrüstungsname und Hersteller",
          "Einhaltung der Testparameter im indischen Standard",
          "Standort innerhalb der Fabrik",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        5. Kalibrierungszertifikate
      </h2>

      <PointsListWithoutHeading
        points={[
          "Datum der letzten Kalibrierung",
          "Gültigkeitsdauer",
          "Zertifikatsnummer",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        6. Fabriklayout & Prozessablaufdiagramm
      </h2>

      <PointsListWithoutHeading
        points={[
          "Ein- und Ausgangspunkte",
          "Prüflaborbereiche",
          "QC-Kontrollpunkte",
          "Lager- und Verpackungsbereiche",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        7. Leistungsbankgarantie
      </h2>

      <p className="service-left-content-paragraph">
        Ausgestellt von einer von der RBI genehmigten indischen Bank, deckt die
        Leistungsbankgarantie (PBG) die Haftung bei Nichteinhaltung ab. Dieses
        Dokument muss:
      </p>

      <PointsListWithoutHeading
        points={[
          "Auf offiziellem Bankbriefkopf sein",
          "Garantiezeitraum und -betrag angeben",
          "Unterschrieben und versiegelt sein",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        Häufige Dokumentationsfehler, die bei der Beantragung eines
        BIS-Zertifikats oder indischen BIS vermieden werden sollten.
      </h2>

      <PointsListWithoutHeading
        points={[
          "Abweichung zwischen Formulardaten und Fabrikrealität",
          "Einreichung abgelaufener Kalibrierungsberichte",
          "Fehlender BIS-Gebührennachweis",
          "Unvollständige oder vage Prozessabläufe",
          "Namensinkonsistenzen zwischen Dokumenten",
        ]}
      />
    </div>
  );
};

const ProcessSection = () => {
  return (
    <div id="process" className="flex flex-col scroll-mt-20">
      {/* Process */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Prozess</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        Schritt-für-Schritt BIS-Zertifizierungsprozess unter FMCS
      </h2>

      <h3 className="service-left-content-heading-three">
        Überblick über die BIS-Zertifizierungsreise
      </h3>

      <p className="service-left-content-paragraph">
        Der BIS-Zertifizierungsprozess unter dem Foreign Manufacturers
        Certification Scheme (FMCS) ist methodisch, strukturiert und mehrphasig.
        Er stellt sicher, dass Produkte den geltenden indischen Standards
        entsprechen, Fertigungsprozesse robust sind und Tests genau sind.
      </p>

      <h3 className="service-left-content-heading-three">
        Schritt-für-Schritt Prozessübersichtstabelle
      </h3>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Schritt
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                Beschreibung
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                1
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Antragseinreichung beim BIS FMCD
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                2
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Dokumentationsprüfung und erste Überprüfung
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                3
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Anfragebearbeitung & Klärungseinreichung
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                4
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Ernennung des BIS-Technischen Prüfers
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                5
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Fabrikauditplanung & Koordination über AIR
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                6
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Fabrikinspektion & Probenversiegelung durch BIS-Prüfer
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                7
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Interne Produkttests (falls zutreffend)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                8
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Prüfung versiegelter Proben in BIS-genehmigten Labors in Indien
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                9
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Überprüfung der Prüfberichte & Audit-Ergebnisse
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                10
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Ausstellung der BIS-Lizenz und Verwendung des ISI-Zeichens
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <img
        src={BISCertificateImage}
        alt="BIS-Zertifikat Prozessablauf"
        className="w-full h-auto rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 my-8 mx-auto"
      />

      <h3 className="service-left-content-heading-three">
        Zeitrahmen zur Erlangung des BIS-Zertifikats
      </h3>

      <p className="service-left-content-heading-three">
        Typische Dauer vom Antrag bis zum Zertifikat
      </p>

      <p className="service-left-content-paragraph">
        Der BIS-Zertifizierungsprozess unter FMCS dauert in der Regel etwa 120
        Arbeitstage (ca. 3–4 Monate) ab dem Datum der korrekten
        Antragseinreichung. Verzögerungen treten häufig auf, wenn Dokumente
        unklar sind oder die Fabrik nicht auditbereit ist.
      </p>
    </div>
  );
};

const CostingSection = () => {
  return (
    <div id="costing" className="flex flex-col scroll-mt-20">
      {/* Costing */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Kosten</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        BIS-Zertifizierungskostenstruktur erklärt
      </h2>

      <h3 className="service-left-content-heading-three">
        Überblick über die BIS-Zertifizierungskosten
      </h3>

      <p className="service-left-content-paragraph">
        Die Erlangung eines BIS-Zertifikats unter dem Foreign Manufacturers
        Certification Scheme (FMCS) umfasst verschiedene Arten von Kosten. Diese
        decken alles ab, von der Antragseinreichung und Prüfungen bis hin zu
        Produkttests und Zeichenverwendung.
      </p>

      <p className="service-left-content-paragraph">
        Ausländische Hersteller müssen angemessen budgetieren, um rechtzeitige
        Zahlungen sicherzustellen, da Zahlungsausfälle zur Ablehnung der
        BIS-Zertifizierung auf halbem Weg führen können.
      </p>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Kostenkategorie
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                Beschreibung
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Antragsgebühr (INR 1000)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Wird bei der Einreichung des FMCS-Antragsformulars zur Erlangung
                des indischen BIS gezahlt
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Prüfungsgebühren (INR 7000)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Deckt BIS-Prüferreisen, Manntagessätze und damit verbundene
                Ausgaben ab
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Produkttestgebühren (Je nach Produkt)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Für Tests versiegelter Proben in BIS-anerkannten Labors in
                Indien
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Lizenzgebühr (INR 1000)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Einmalige Gebühr, die bei Erteilung des BIS-Zertifikats gezahlt
                wird
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Kennzeichnungsgebühr (Je nach Produkt)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Jährliche Gebühr für die Verwendung des ISI-Zeichens auf
                zertifizierten Produkten
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Leistungsbankgarantie (USD 10.000)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Finanzielle Garantie, die über eine indische Bank hinterlegt
                wird, um Compliance sicherzustellen
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

const SurveillanceSection = () => {
  return (
    <div id="surveillance" className="flex flex-col scroll-mt-20">
      {/* Surveillance */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Überwachung</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        Überwachung und Compliance-Anforderungen nach der BIS-Zertifizierung
      </h2>

      <p className="service-left-content-paragraph">
        Sobald ein BIS-Zertifikat erteilt wurde, endet die Verantwortung nicht
        dort. Die BIS-Zertifizierung umfasst ein kontinuierliches Überwachungs-
        und Compliance- System, um die fortlaufende Einhaltung indischer
        Standards sicherzustellen. Diese Phase nach der Zertifizierung ist
        entscheidend für die Aufrechterhaltung Ihrer BIS-Lizenz, die
        Beibehaltung des Rechts zur Verwendung des ISI-Zeichens und die
        Vermeidung rechtlicher Sanktionen oder Aussetzungen.
      </p>

      <p className="service-left-content-paragraph">
        Wichtige Überwachungskomponenten nach Erhalt des BIS-Zertifikats
        Marktüberwachung: Zufällige Produktprobenahme vom indischen Markt für
        unabhängige Labortests. Wenn die Probe versagt, wird das BIS-Zertifikat
        ausgesetzt. Dies wird zweimal pro Jahr durchgeführt.
      </p>
    </div>
  );
};

const FacilitatorSection = () => {
  return (
    <div id="facilitator" className="flex flex-col scroll-mt-20">
      {/* Facilitator */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Vermittler</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        Warum einen BIS-Zertifizierungsberater wählen?
      </h2>

      <p className="service-left-content-paragraph">
        Die BIS-Zertifizierung unter dem FMCS-Registrierungsschema ist komplex,
        hochtechnisch und zeitkritisch. Während es möglich ist, die
        Zertifizierung unabhängig zu verfolgen, verlassen sich die meisten
        erfolgreichen ausländischen Hersteller auf BIS-Berater, um den Prozess
        zu optimieren und Risiken zu minimieren.
      </p>

      <h3 className="service-left-content-heading-three">
        Was macht ein BIS-Berater?
      </h3>

      <p className="service-left-content-paragraph">
        Ein BIS-Zertifizierungsberater bietet end-to-end Beratung in jedem
        Schritt des Prozesses. Zu ihren Kernverantwortlichkeiten gehören:
      </p>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Aufgabe
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                Beschreibung
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Dokumentation
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Bereitet alle erforderlichen Dokumente vor, überprüft und
                formatiert sie
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Antragsunterstützung
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Reicht Ihren BIS-Antrag ein und verfolgt ihn
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Prüfungsvorbereitung
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Führt Fabrikteams an, um Prüfungsbereitschaft sicherzustellen
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Probenkoordination
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Verwaltet die Versiegelung und den Versand von Proben nach
                Indien
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Testunterstützung
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Steht in Kontakt mit Labors und hilft bei der Interpretation der
                Ergebnisse
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Verlängerung & Überwachung
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Überwacht Lizenzverlängerungen und Compliance-Prüfungen
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <p className="service-left-content-paragraph">
        Sie fungieren als Ihr strategischer Partner und übernehmen oft auch die
        Rolle Ihres autorisierten indischen Vertreters (AIR).
      </p>
    </div>
  );
};

export const ServiceFaq = () => {
  const faqs = [
    {
      question:
        "Was ist die BIS-Zertifizierung und warum ist es wichtig für ausländische Hersteller, das indische BIS zu erhalten?",
      answer:
        "Die BIS-Zertifizierung ist ein regulatorischer Prozess, der vom Bureau of Indian Standards durchgeführt wird, um sicherzustellen, dass Produkte indischen Standards entsprechen. Es ist für ausländische Hersteller unerlässlich, um Marktzugang, Zollabfertigung und Verbrauchervertrauen in Indien zu erlangen.",
    },
    {
      question: "Was bedeutet das ISI-Mark?",
      answer:
        "Das ISI-Mark zeigt die Konformität mit einem spezifischen indischen Standard an. Es ist für Produkte unter der BIS-Zertifizierung obligatorisch und muss auf Verpackungen und Produkten gedruckt werden.",
    },
    {
      question:
        "Ist die BIS-Zertifizierung für alle Importe nach Indien obligatorisch?",
      answer:
        "Nein. Die BIS-Zertifizierung ist für Produkte obligatorisch, die unter dem obligatorischen indischen BIS-Zertifizierungsschema aufgeführt sind. Für andere Produkte ist jedoch eine freiwillige Zertifizierung verfügbar.",
    },
    {
      question: "Wer kann sich unter FMCS für die BIS-Zertifizierung bewerben?",
      answer:
        "Nur tatsächliche ausländische Hersteller (nicht Importeure oder Händler) können sich bewerben. Ein autorisierter indischer Vertreter (AIR) ist obligatorisch, um sie in Indien zu vertreten.",
    },
    {
      question: "Wie lange dauert es, ein BIS-Zertifikat zu erhalten?",
      answer:
        "Der durchschnittliche BIS-Zertifizierungsprozess unter FMCS dauert 120 Tage, abhängig von der Dokumentenbereitschaft, der Prüfungsplanung und den Testbearbeitungszeiten.",
    },
    {
      question: "Was sind die Hauptkosten bei der BIS-Zertifizierung?",
      answer:
        "Die Kosten umfassen Antragsgebühren, Prüfungsgebühren, Labortestgebühren, Lizenz- und Kennzeichnungsgebühren sowie eine Leistungsbankgarantie (PBG) von einer RBI-zugelassenen indischen Bank.",
    },
    {
      question: "Kann die BIS-Lizenz verlängert werden?",
      answer:
        "Ja. Die BIS-Lizenz ist in der Regel 1–2 Jahre gültig und kann bei Erfüllung der Compliance- und Dokumentenaktualisierungsanforderungen verlängert werden.",
    },
    {
      question:
        "Was passiert, wenn das Produkt während der BIS-Labortests versagt?",
      answer:
        "Wenn ein Produkt versagt, kann BIS Korrekturmaßnahmen und erneute Tests zulassen. Anhaltendes Versagen kann zur Ablehnung des Antrags führen.",
    },
    {
      question:
        "Ist es notwendig, einen BIS-Zertifizierungsberater einzustellen?",
      answer:
        "Es ist nicht obligatorisch, aber sehr empfehlenswert. Ein Berater hilft, Verzögerungen zu reduzieren, Compliance zu verwalten und die Genehmigungschancen zu verbessern, indem er eine vollständige Ausrichtung mit BIS-Protokollen sicherstellt.",
    },
    {
      question: "Kann eine BIS-Lizenz ausgesetzt oder gekündigt werden?",
      answer:
        "Ja. BIS kann eine Lizenz wegen Nichteinhaltung, Produktversagen, Missbrauch des ISI-Logos oder Prüfungsabweichungen aussetzen oder kündigen.",
    },
    {
      question:
        "Welche Dokumente werden für den BIS-Zertifizierungsprozess benötigt?",
      answer:
        "Dokumente umfassen das FMCS-Antragsformular, Testberichte, Gerätelisten, Kalibrierungszertifikate, Werkslayout, AIR-Ernennungsschreiben und Nachweis der Gebührenzahlung.",
    },
    {
      question: "Kann ein AIR mehrere BIS-Anträge vertreten?",
      answer:
        "Ja, vorausgesetzt, sie sind für jedes Projekt autorisiert und haben die Kapazität, Dokumentation, Prüfungen und Kommunikation für jede Zertifizierung zu handhaben.",
    },
    {
      question: "Welche Rolle spielt eine Leistungsbankgarantie?",
      answer:
        "Eine PBG versichert BIS, dass der Hersteller indischen Standards entsprechen wird. Sie ist bei Lizenzkündigung erstattungsfähig und obligatorisch für alle FMCS-Anträge, die das indische BIS erhalten.",
    },
    {
      question: "Wird die BIS-Zertifizierung außerhalb Indiens anerkannt?",
      answer:
        "Während das BIS-Zertifikat ein indischer Standard ist, wird es in Handelskontexten in vielen Regionen, die indische Compliance akzeptieren, besonders in Asien und Afrika, respektiert.",
    },
    {
      question:
        "Wie weiß ich, ob mein Produkt eine BIS-Zertifizierung erfordert?",
      answer:
        "Überprüfen Sie die aktualisierte Liste auf der offiziellen BIS-Website oder konsultieren Sie einen BIS-Berater, um zu überprüfen, ob Ihr Produkt unter die obligatorische Zertifizierung fällt.",
    },
  ];

  return (
    <section
      id="faqs"
      className="my-2  scroll-mt-20"
      aria-label="Häufig gestellte Fragen"
    >
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h4 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          Häufig gestellte Fragen
        </h4>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          Finden Sie nicht die Antwort, die Sie suchen?{" "}
          <a
            href="/contact"
            className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4 hover:text-[#1A8781] transition-colors"
          >
            Kontaktieren Sie uns!
          </a>
        </p>

        <div className="w-full max-w-[1104px] mt-[16px] md:mt-[24px] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
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

const Services = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12  md:pb-16  overflow-x-hidden ">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
              Unsere Dienstleistungen
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                Indiens bester Zertifikatsberater
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
              BIS-Marke (ISI-Lizenz) für ausländische Hersteller
            </p>
          </Link>

          <Link
            to="/cdsco-registration-certification"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/CDSCO.jpg"
                alt="CDSCO"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              CDSCO-Registrierungszertifizierung
            </p>
          </Link>

          <Link
            to="/what-is-crs-bis-or-crs-registration"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BISCRS.jpg"
                alt="BISCRS"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS (CRS) Registrierung
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
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Kunststoffabfallmanagement
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-epr-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/EPRCertificate.jpg"
                alt="EPRCertificate"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              EPR-Zertifikatszertifizierungen
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-lmpc-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/LMPC.jpg"
                alt="LMPC"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              LMPC-Zertifikatszertifizierungen
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
              BIS-Registrierungszertifikat
            </p>
          </Link>

          <Link
            to="/a-guide-to-bis-certification-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/ISIMark.jpg"
                alt="ISIMark"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              ISI-MARKE (BIS) für indische Hersteller
            </p>
          </Link>
        </div>
      </div>
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
