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
import ServicesRightSideContentDutch from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentDutch";
import ISIMARKImage from "../../assets/servicesImages/ISIMARKUpdated.jpg";
import BISCertificateImage from "../../assets/bisfmpageimage/biscertificate.png";
import BISFMProductTable from "@/pages/BISFMProductTable/BISFMProductTable.jsx";
import FooterDutch from "@/components/manual/Footer/FooterDutch";
import ServiceAuthorDutch from "@/components/manual/ServiceAuthor/ServiceAuthorDutch";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const BISFMDutch = () => {
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
      <FooterDutch />
      <ScrollToTopButton />
    </div>
  );
};

export default BISFMDutch;

const MetaTags = () => {
  const title =
    "BIS FMCS Certificering | Certificeringsregeling voor Buitenlandse Fabrikanten | Sun Certifications";
  const description =
    "Expert BIS FMCS certificeringsdiensten voor buitenlandse fabrikanten. Krijg ISI Mark certificering voor export naar India. Betrouwbare BIS Certificeringen sinds 2013. ✓ Snelle Verwerking ✓ Expert Begeleiding";
  const keywords =
    "BIS Certificaat voor buitenlandse fabrikanten, BIS Licentie, ISI Mark";
  const canonicalUrl =
    "https://bis-certifications.com/nl/gids-voor-bis-certificering-voor-buitenlandse-fabrikanten-indiaas-bis";
  const author = "Dhruv Aggarwal";
  const publisher = "Sun Certifications India";
  const ogTitle =
    "BIS FMCS Certificering | Certificeringsregeling voor Buitenlandse Fabrikanten";
  const ogDescription =
    "Expert BIS FMCS certificeringsdiensten voor buitenlandse fabrikanten. Krijg ISI Mark certificering voor export naar India. ✓ Snelle Verwerking ✓ Expert Begeleiding";

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
        name: "BIS Mark (ISI Licentie) voor Buitenlandse Fabrikanten",
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
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    BIS Mark (ISI Licentie) voor Buitenlandse Fabrikanten
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
              Gecertificeerde Expertise
            </span>
          </div>

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              Indiaas BIS Certificering
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            voor buitenlandse fabrikanten
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            Buitenlandse fabrikanten hebben ISI mark nodig voor export naar
            India. Dekking van 600+ verplichte producten en 20.000+ vrijwillige
            producten.
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
                Bekijk Diensten
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

    // BISFM (FMCS - Foreign Manufacturers)
    if (
      path.includes(
        "/nl/gids-voor-bis-certificering-voor-buitenlandse-fabrikanten-indiaas-bis"
      )
    )
      return "BIS Mark (ISI Licentie) voor Buitenlandse Fabrikanten - Nederlandse Pagina";
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
        description: "Controleer of uw e-mailformaat correct is",
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
        description: "Telefoonnummer moet (8-15 cijfers) bevatten",
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
          "Bedankt voor het contact met ons. Ons team neemt binnenkort contact met u op.",
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
          errorMessage || "Mislukt om contactformuliergegevens in te dienen!",
        description:
          "Er is iets misgegaan. Controleer uw gegevens en probeer opnieuw.",
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

      <div className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
        Maak een Afspraak
      </div>

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
            placeholder="Telefoonnummer *"
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
              <span>Maak Afspraak</span>
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
    overview: "Overzicht",
    standardization: "Standaardisatie",
    representation: "Representatie",
    document: "Document",
    process: "Proces",
    costing: "Kosten",
    surveillance: "Toezicht",
    facilitator: "Facilitator",
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
        <ServicesRightSideContentDutch />
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
            Volledige informatie over Indiaas BIS certificering onder FMCS
            Regeling
          </h1>

          <h2 className="service-left-content-heading-three">
            Wat is Indiaas BIS?
          </h2>

          <p className="service-left-content-paragraph">
            Het Bureau of Indian Standards (BIS) is India's nationale
            normeninstituut onder het Ministerie van Consumentenzaken, Voedsel
            en Openbare Distributie. Opgericht onder de BIS Act 1986, en herzien
            in 2016, speelt BIS een cruciale rol in standaardisatie, markering
            en kwaliteitscertificering van goederen. Het streeft ernaar de
            kwaliteit, veiligheid en betrouwbaarheid van producten die aan
            Indiase consumenten worden aangeboden te waarborgen.
          </p>

          <p className="service-left-content-paragraph">
            BIS opereert via verschillende regelingen die productcertificering,
            keurmerken voor sieraden, testdiensten en trainingsprogramma's
            omvatten. Een van de meest internationaal significante kaders is
            echter het Foreign Manufacturers Certification Scheme (FMCS).
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
        <ServiceAuthorDutch />
      </div>
    </div>
  );
};

const OverviewSection = () => {
  return (
    <div id="overview" className="flex flex-col scroll-mt-20">
      {/* Overview */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Overzicht</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Wat is BIS certificaat onder FMCS?
      </h2>

      <p className="service-left-content-paragraph">
        Geïntroduceerd in het jaar 2000, is FMCS een mechanisme waarmee
        buitenlandse fabrikanten een BIS licentie kunnen krijgen om het ISI
        merkteken op hun producten te gebruiken, wat overeenstemming met Indiase
        normen aangeeft. Het certificeringsproces FMCS stelt buitenlandse
        entiteiten in staat om hun producten legaal te verkopen in India zonder
        een lokale productie-eenheid op te richten.
      </p>

      <p className="service-left-content-paragraph">
        Momenteel opereren meer dan 1.650 buitenlandse fabrikanten in India
        onder het BIS certificeringssysteem via FMCS.{" "}
      </p>

      <h2 className="service-left-content-heading-three">
        Waarom is BIS Certificering Cruciaal?
      </h2>

      <p className="service-left-content-paragraph">
        Het verkrijgen van een BIS certificaat is meer dan een wettelijke
        vereiste—het is een toegangspoort tot India's enorme consumentenmarkt.
        Hier zijn enkele belangrijke redenen waarom het essentieel is:
      </p>

      <PointsListWithoutHeading
        points={[
          "Wettelijke Naleving: Producten moeten voldoen aan relevante Indiase normen.",
          "Merk Geloofwaardigheid: Het ISI merkteken dient als bewijs van kwaliteit en verhoogt het consumentenvertrouwen.",
          "Douane Vrijgave: Zonder een geldige BIS licentie kunnen producten worden afgewezen bij de douane.",
          "Markt Toegang: Helpt buitenlandse merken naadloze toegang en wijdverbreide acceptatie in India te krijgen.",
          "Risico Mitigatie: Zorgt ervoor dat producten veilig zijn, waardoor mogelijke terugroepacties en aansprakelijkheidsproblemen worden vermeden.",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        Bereik van Producten Gedekt in BIS
      </h2>

      <p className="service-left-content-paragraph">
        BIS heeft meer dan 600 producten opgenomen onder verplichte
        certificering, en meer dan 20.000 items komen in aanmerking voor
        vrijwillige BIS certificering. Deze omvatten een breed scala aan
        industrieën:
      </p>

      <PointsListWithoutHeading
        points={[
          "Elektronica & IT hardware",
          "Automotive onderdelen",
          "Huishoudelijke apparaten",
          "Staalproducten",
          "Cement en bouwmaterialen etc.",
        ]}
      />

      <p className="service-left-content-paragraph">
        De groeiende lijst geeft de toenemende reikwijdte en relevantie van BIS
        certificering in de wereldhandel aan.
      </p>

      <h2 className="service-left-content-heading-three">
        Doelstellingen of voordelen van BIS Certificering voor Buitenlandse
        Fabrikanten onder FMCS
      </h2>

      <p className="service-left-content-paragraph">
        Het FMCS en BIS certificeringsregime beoogt:
      </p>

      <PointsListWithoutHeading
        points={[
          "Gebruik van het ISI merkteken zonder geldige BIS licentie is strafbaar bij wet.",
          "Gecertificeerde producten moeten zowel het ISI logo als het CM/L nummer (Certificate of Manufacturing License) tonen.",
          "Overtreders kunnen productverboden, boetes of zelfs strafrechtelijke vervolging krijgen.",
          "Vertrouwen opbouwen tussen consumenten en geïmporteerde merken.",
          "Eerlijke handel en een gelijk speelveld faciliteren.",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        Belangrijkste Kenmerken van BIS certificaat voor buitenlandse
        fabrikanten
      </h2>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                KENMERK
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                BESCHRIJVING
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Toepasbaarheid
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Alleen buitenlandse fabrikanten
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Markering
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                ISI merkteken + CM/L nummer
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Audit Vereiste
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Verplichte fabrieksinspectie
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Testen
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Uitgevoerd in BIS-goedgekeurde Indiase laboratoria
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Geldigheid
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                BIS licentie geldig voor 1-2 jaar
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Verlenging
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Vereist bij vervaldatum of productupdates
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                AIR (Geautoriseerde Indiase Vertegenwoordiger)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Moet worden aangesteld om contact te onderhouden met BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Prestatie Bankgarantie
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Vereist van RBI-goedgekeurde Indiase bank
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
          Standaardisatie
        </span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Wat is Indiaas BIS en Waarom is het Belangrijk?
      </h2>

      <p className="service-left-content-paragraph">
        Het Indiaas BIS is het keurmerk van kwaliteit en veiligheid uitgegeven
        door het Bureau of Indian Standards (BIS). Tegenwoordig wordt het ISI
        merkteken uitsluitend gebruikt om producten aan te duiden die voldoen
        aan Indiase normen onder het officiële BIS certificeringsregime.
      </p>

      <p className="service-left-content-paragraph">
        Om het Indiaas BIS of ISI merkteken te dragen, moet een product een
        rigoureus BIS certificeringsproces doorlopen, inclusief
        laboratoriumtests, fabrieksinspectie, documentatieaudits en
        nalevingscontroles met Indiase BIS richtlijnen.
      </p>

      <p className="service-left-content-paragraph">
        Wettelijke Status van de BIS certificering in India
      </p>

      <p className="service-left-content-paragraph">
        BIS licentie is niet alleen een marketinginstrument—het is een
        wettelijke vereiste voor alle producten die onder het verplichte BIS
        certificeringsregime vallen.{" "}
      </p>

      <h3 className="service-left-content-heading-three">
        Volgens de BIS Act, 2016:
      </h3>

      <PointsListWithoutHeading
        points={[
          "Gebruik van het ISI merkteken zonder geldige BIS licentie is strafbaar bij wet.",
          "Gecertificeerde producten moeten zowel het ISI logo als het CM/L nummer (Certificate of Manufacturing License) tonen.",
          "Overtreders kunnen productverboden, boetes of zelfs strafrechtelijke vervolging krijgen.",
        ]}
      />

      <img
        src={ISIMARKImage}
        alt="ISI Mark logo"
        title="ISI Mark logo"
        className="w-full max-w-[300px] h-auto rounded-lg shadow-sm my-6 mx-auto border border-gray-200 hover:shadow-md transition-shadow duration-300"
      />

      <p className="service-left-content-heading-three">
        Het ISI logo bestaat typisch uit:
      </p>

      <PointsListWithoutHeading
        points={[
          'De gestileerde letters "ISI" binnen een rechthoek met afgeronde hoeken',
          "Het CM/L nummer weergegeven onder of naast het merkteken",
          "Het referentie Indiase normcode nummer (bijv. IS 302 voor elektrische apparaten)",
        ]}
      />

      <p className="service-left-content-heading-three">Plaatsing moet zijn:</p>

      <PointsListWithoutHeading
        points={[
          "Permanent en duidelijk zichtbaar op het product",
          "Op de verpakking indien niet mogelijk op het product",
          "Op gebruikershandleidingen in sommige productcategorieën",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        Productcategorieën die BIS Certificaat Vereisen
      </h2>

      <p className="service-left-content-paragraph">
        Meer dan 600 producten vereisen het ISI merkteken onder het verplichte
        registratieregime in India. Voorbeelden zijn:
      </p>

      {/* Table for Product Categories Requiring BIS Certificate */}
      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                PRODUCTCATEGORIE
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                IS CODE
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                STATUS
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Elektrische Apparaten
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 302
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Verplicht
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Staal & IJzer
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 2062
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Verplicht
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Voedselcontainers
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 10146
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Verplicht
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Helmen
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 4151
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Verplicht
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Cement
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 1489
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Verplicht
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <p className="service-left-content-paragraph">
        Elke categorie vereist naleving van de corresponderende Indiase norm,
        die wordt getest tijdens het BIS certificeringsproces, de volledige
        lijst van de producten kan worden bereikt door{" "}
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
          Hier Klikken
        </span>
      </p>

      <h2 className="service-left-content-heading-three">
        Indiaas BIS vs. Andere Wereldwijde Certificeringen
      </h2>

      <p className="service-left-content-paragraph">
        Laten we het ISI merkteken vergelijken met andere internationale
        symbolen:
      </p>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                MERKTEKEN
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                LAND
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                VERPLICHT?
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                FOCUS
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
                Productveiligheid en kwaliteit
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
                Ja (voor specifieke categorieën)
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Gezondheid, veiligheid, milieu
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                UL
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                VS
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Nee
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Veiligheidsnormen (vrijwillig)
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
                Veiligheid elektrische goederen
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <p className="service-left-content-paragraph">
        In tegenstelling tot UL (vrijwillig) of CE (regiospecifiek), is het ISI
        merkteken onder het BIS registratieregime zowel verplicht als lokaal
        gehandhaafd.
      </p>

      <h2 className="service-left-content-heading-three">
        Is BIS Certificering of BIS Licentie Verplicht voor Import naar India?
      </h2>

      <p className="service-left-content-paragraph">
        Verplichte Aard van BIS Certificaat
      </p>

      <p className="service-left-content-paragraph">
        De Indiase regering heeft het verplicht gemaakt voor bepaalde producten
        om te worden gecertificeerd door het Bureau of Indian Standards (BIS)
        voordat ze kunnen worden geïmporteerd, verkocht of gedistribueerd op de
        Indiase markt. Deze verplichting komt voort uit:
      </p>

      <PointsListWithoutHeading
        points={[
          "Consumentenbeschermingsdoelen",
          "Harmonisatie met Indiase normen",
          "Nationale veiligheidsvoorschriften",
        ]}
      />

      <p className="service-left-content-paragraph">
        Als een product onder de verplichte vereiste van Indiaas BIS valt, moet
        het een BIS certificaat hebben en het ISI merkteken dragen voordat het
        kan worden vrijgegeven bij de Indiase douane.
      </p>

      <h2 className="service-left-content-heading-three">
        Is BIS Certificering Alleen Vereist voor Importen?
      </h2>

      <p className="service-left-content-paragraph">
        Nee. BIS certificering is verplicht voor:
      </p>

      <PointsListWithoutHeading
        points={[
          "Binnenlandse fabrikanten die gereguleerde producten produceren",
          "Buitenlandse fabrikanten die gereguleerde producten naar India exporteren",
        ]}
      />

      <p className="service-left-content-paragraph">
        Of u zich nu in India of in het buitenland bevindt, als uw product op de
        verplichte lijst staat, moet het een BIS licentie hebben en het ISI
        merkteken dragen.
      </p>

      <p className="service-left-content-paragraph">
        De Indiase douane gebruikt nu geavanceerde datasystemen om niet-conforme
        zendingen automatisch te markeren. Alle goederen onder gereguleerde
        categorieën worden gescand op de aanwezigheid van een geldig BIS
        certificaat.
      </p>

      <p className="service-left-content-paragraph">
        Uitzonderingen op BIS Certificering
      </p>

      <p className="service-left-content-paragraph">
        BIS certificering is in de meeste gevallen verplicht, maar
        uitzonderingen kunnen worden verleend onder specifieke scenario's:
      </p>

      <PointsListWithoutHeading
        points={[
          "Voor R&D prototypes of sample testing",
          "Voor persoonlijke importen van beperkte hoeveelheid",
        ]}
      />

      <p className="service-left-content-paragraph">
        Deze zijn echter zeldzaam en vereisen formele vrijstellingsbrieven van
        BIS of gerelateerde ministeries.
      </p>

      <h2 className="service-left-content-heading-three">
        Hoe Weet U Of Uw Product BIS Certificaat of BIS Licentie Vereist?
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
          Klik Hier
        </span>
        Klik hier om te controleren of uw product valt onder het verplichte
        Indiaas BIS certificeringsregime.
      </p>
    </div>
  );
};

const RepresentationSection = () => {
  return (
    <div id="representation" className="flex flex-col scroll-mt-20">
      {/* Representation */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">
          Representatie
        </span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        Rol van Geautoriseerde Indiase Vertegenwoordiger (AIR) in BIS
        Certificering
      </h2>

      <h3 className="service-left-content-heading-three">
        Wat is een Geautoriseerde Indiase Vertegenwoordiger (AIR)?
      </h3>

      <p className="service-left-content-paragraph">
        Een Geautoriseerde Indiase Vertegenwoordiger (AIR) is een cruciale
        tussenpersoon aangesteld door een buitenlandse fabrikant die BIS
        certificering zoekt onder het FMCS registratieregime. De AIR dient als
        officiële liaison tussen het Bureau of Indian Standards (BIS) en de
        fabrikant, waardoor soepele communicatie, documentafhandeling en
        coördinatie van het certificeringsproces worden gewaarborgd.
      </p>

      <h3 className="service-left-content-heading-three">
        Wettelijke Vereiste voor AIR Aanstelling
      </h3>

      <p className="service-left-content-paragraph">
        Volgens BIS richtlijnen moet elke buitenlandse fabrikant die geen
        geregistreerd kantoor in India heeft, een AIR aanstellen. Deze vereiste
        zorgt ervoor dat BIS een betrouwbaar, toegankelijk contactpunt heeft
        binnen de Indiase jurisdictie.
      </p>

      <h3 className="service-left-content-heading-three">
        Belangrijkste Verantwoordelijkheden van de AIR
      </h3>

      <p className="service-left-content-paragraph">
        De rol van de AIR omvat het gehele BIS certificeringsproces, van
        documentatie en aanvraagindiening tot auditcoördinatie en
        post-certificeringsnaleving:
      </p>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Verantwoordelijkheid
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                Beschrijving
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Communicatie
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Dient als contactpunt met BIS functionarissen en afdelingen
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Aanvraag Ondersteuning
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Helpt bij het invullen van formulieren, samenstellen van
                documenten en indienen van de aanvraag
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Audit Coördinatie
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Coördineert fabrieksinspectieschema's en beantwoordt auditor
                vragen
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Nalevingsmonitoring
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Zorgt ervoor dat alle test- en certificeringsactiviteiten
                voldoen aan BIS normen
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Verlengingsbeheer
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Beheert BIS licentieverlenging, documentupdates en betalingen
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 className="service-left-content-heading-three">
        Geschiktheidscriteria om een AIR te Worden
      </h3>

      <p className="service-left-content-paragraph">
        Om als AIR te dienen, moet een individu of organisatie:
      </p>

      <PointsListWithoutHeading
        points={[
          "Een Indiase burger zijn of een legaal geregistreerde bedrijfsentiteit in India",
          "Een fysiek adres in India hebben met een geldige postcode",
          "In staat zijn om vloeiend te communiceren in Engels en lokale talen",
          "Het certificeringsregime, BIS documentatieprotocollen en regelgevingsverwachtingen begrijpen",
          "In staat zijn om audits en correspondentie snel te beantwoorden namens de buitenlandse fabrikant",
        ]}
      />

      <h3 className="service-left-content-heading-three">
        Waarom de AIR Rol Cruciaal is
      </h3>

      <p className="service-left-content-paragraph">
        De AIR zorgt voor continuïteit en verantwoording gedurende het gehele
        BIS certificeringsproces. Zonder een AIR:
      </p>

      <PointsListWithoutHeading
        points={[
          "Heeft BIS geen jurisdictie om op te treden tegen een niet-nalevende buitenlandse fabrikant",
          "Kunnen tijdgevoelige vragen en auditschema's worden vertraagd",
          "Kan het certificeringsproces vastlopen, worden ingetrokken of afgewezen",
        ]}
      />

      <p className="service-left-content-paragraph">
        Een proactieve en ervaren AIR verhoogt de kans op succesvolle BIS
        certificering aanzienlijk.
      </p>
    </div>
  );
};

const DocumentSection = () => {
  return (
    <div id="document" className="flex flex-col scroll-mt-20">
      {/* Document */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Document</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        Documentatie Vereist voor BIS Certificering onder FMCS
      </h2>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Documenttype
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                Doel
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                FMCS Aanvraagformulier
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Officiële aanvraag voor certificering
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Lijst van Productieapparatuur
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Toont productiecapaciteiten
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Lijst van Grondstoffen
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Zorgt voor kwaliteit van inputmaterialen
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Lijst van Testapparatuur
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Evalueert test- en nalevingsbereidheid
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Kalibratiecertificaten
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Bewijst nauwkeurigheid van testapparatuur
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Fabrieksindeling & Processtroom
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Helpt auditors productiestadia begrijpen
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Testcertificaten
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Bewijst kwaliteit van grondstoffen en eindproduct
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Kwaliteitscontroleprofiel
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Verifieert personeelskwalificaties en SOP's
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Betalingsbewijs
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Valideert kostenindiening aan BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Prestatie Bankgarantie
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Dient als financiële garantie voor BIS
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 className="service-left-content-heading-three">
        Gedetailleerde Uitsplitsing van Elk Document Vereist voor Indiaas BIS
        Certificering
      </h3>

      <div className="service-left-content-heading-three">
        1. FMCS Aanvraagformulier
      </div>

      <p className="service-left-content-paragraph">
        Dit document bevat algemene details over de buitenlandse fabrikant,
        inclusief:
      </p>

      <PointsListWithoutHeading
        points={[
          "Productdetails (type, categorie, model)",
          "Beoogde Indiase Norm",
          "Contactgegevens van fabriek en AIR",
          "Productiecapaciteit en testbereik",
        ]}
      />

      <div className="service-left-content-heading-three">
        2. Lijst van Productieapparatuur
      </div>

      <PointsListWithoutHeading
        points={[
          "Machinenaam en merk",
          "Productiecapaciteit",
          "Contactgegevens van fabriek en AIR",
          "Onderhoudsrecords (indien van toepassing)",
        ]}
      />

      <div className="service-left-content-heading-three">
        3. Lijst van Grondstoffen
      </div>

      <PointsListWithoutHeading
        points={[
          "Bron van inkoop",
          "Kwaliteiten en specificaties",
          "Testprotocol (indien aanwezig)",
        ]}
      />

      <div className="service-left-content-heading-three">
        4. Lijst van Testapparatuur
      </div>

      <PointsListWithoutHeading
        points={[
          "Apparatuurnaam en fabrikant",
          "Naleving van testparameters in Indiase Norm",
          "Locatie binnen de fabriek",
        ]}
      />

      <div className="service-left-content-heading-three">
        5. Kalibratiecertificaten
      </div>

      <PointsListWithoutHeading
        points={[
          "Datum van laatste kalibratie",
          "Geldigheidsperiode",
          "Certificaatnummer",
        ]}
      />

      <div className="service-left-content-heading-three">
        6. Fabrieksindeling & Processtroomdiagram
      </div>

      <PointsListWithoutHeading
        points={[
          "In- en uitgangspunten",
          "Testlaboratoriumgebieden",
          "QC controlepunten",
          "Opslag- en verpakkingssecties",
        ]}
      />

      <div className="service-left-content-heading-three">
        7. Prestatie Bankgarantie
      </div>

      <p className="service-left-content-paragraph">
        Uitgegeven door een RBI-goedgekeurde Indiase bank, dekt de Prestatie
        Bankgarantie (PBG) aansprakelijkheid in geval van niet-naleving. Dit
        document moet:
      </p>

      <PointsListWithoutHeading
        points={[
          "Op officieel bankbriefpapier staan",
          "Garantieperiode en bedrag aangeven",
          "Ondertekend en verzegeld zijn",
        ]}
      />

      <div className="service-left-content-heading-three">
        Veelvoorkomende documentatiefouten om te vermijden bij het aanvragen van
        BIS certificaat of Indiaas BIS.
      </div>

      <PointsListWithoutHeading
        points={[
          "Mismatch tussen formuliergegevens en fabrieksrealiteit",
          "Indienen van verlopen kalibratierapporten",
          "Ontbrekend BIS kostenbewijs",
          "Onvolledige of vage processtromen",
          "Naamgeving inconsistenties tussen documenten",
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
        <span className="service-left-content-index-heading">Proces</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        Stap-voor-Stap BIS Certificeringsproces Onder FMCS
      </h2>

      <h3 className="service-left-content-heading-three">
        Overzicht van het BIS Certificeringstraject
      </h3>

      <p className="service-left-content-paragraph">
        Het BIS certificeringsproces onder het Foreign Manufacturers
        Certification Scheme (FMCS) is methodisch, gestructureerd en meervoudig
        gefaseerd. Het zorgt ervoor dat producten voldoen aan toepasselijke
        Indiase normen, productieprocessen robuust zijn en testen nauwkeurig
        zijn.
      </p>

      <h3 className="service-left-content-heading-three">
        Stap-voor-Stap BIS Licentie Proces Samenvattingstabel
      </h3>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Stap
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                Beschrijving
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                1
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Aanvraag Indiening bij BIS FMCD
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                2
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Documentatie Scrutiny en Initiële Beoordeling
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                3
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Vraag Oplossing & Verduidelijking Indiening
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                4
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Nominatie van BIS Technische Auditor
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                5
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Fabrieksaudit Planning & Coördinatie via AIR
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                6
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Fabrieksinspectie & Monsterverzegeling door BIS Auditor
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                7
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Interne Producttesten (indien van toepassing)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                8
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Testen van Verzegelde Monsters in BIS-Goedgekeurde Laboratoria
                in India
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                9
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Beoordeling van Testrapporten & Audit Bevindingen
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                10
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Uitgifte van BIS Licentie en Gebruik van ISI Merkteken
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <img
        src={BISCertificateImage}
        alt="Sample of BIS certificate for FMCS"
        title="Sample of BIS certificate for FMCS"
        className="w-full h-auto rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 my-8 mx-auto"
      />

      <h3 className="service-left-content-heading-three">
        Tijdsbestek om BIS Certificaat te Verkrijgen
      </h3>

      <p className="service-left-content-heading-three">
        Typische Duur van Aanvraag tot Certificaat
      </p>

      <p className="service-left-content-paragraph">
        Het BIS certificeringsproces onder FMCS duurt over het algemeen ongeveer
        120 werkdagen (ongeveer 3-4 maanden) vanaf de datum van correcte
        aanvraagindiening. Vertragingen treden vaak op wanneer documenten
        onduidelijk zijn of als de fabriek niet auditklaar is.
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
        BIS Certificeringskostenstructuur Uitgelegd
      </h2>

      <h3 className="service-left-content-heading-three">
        Overzicht van BIS Certificeringskosten
      </h3>

      <p className="service-left-content-paragraph">
        Het verkrijgen van een BIS certificaat onder het Foreign Manufacturers
        Certification Scheme (FMCS) omvat verschillende soorten kosten. Deze
        dekken alles van aanvraagindiening en audits tot producttesten en
        merkteken gebruik.
      </p>

      <p className="service-left-content-paragraph">
        Buitenlandse fabrikanten moeten adequaat budgetteren om tijdige
        betalingen te waarborgen, omdat het niet betalen kan leiden tot
        afwijzing van BIS certificering halverwege.
      </p>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Kosten Categorie
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                Beschrijving
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Aanvraagkosten (INR 1000)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Betaald tijdens indiening van het FMCS aanvraagformulier voor
                het verkrijgen van Indiaas BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Auditkosten (INR 7000)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Dekken BIS auditor reizen, man-dag tarieven en gerelateerde
                kosten
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Producttestkosten (Per product)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Voor testen van verzegelde monsters in BIS-erkende laboratoria
                in India
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Licentiekosten (INR 1000)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Eenmalige kosten betaald bij toekenning van BIS certificaat
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Markeeringskosten (Per product)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Jaarlijkse kosten voor gebruik van het ISI merkteken op
                gecertificeerde producten
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Prestatie Bankgarantie (USD 10.000)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Financiële garantie gestort via Indiase bank om naleving te
                waarborgen
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
        <span className="service-left-content-index-heading">Toezicht</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        Post BIS Certificering Toezicht en Nalevingsvereisten
      </h2>

      <p className="service-left-content-paragraph">
        Zodra een BIS certificaat is verleend, eindigt de verantwoordelijkheid
        daar niet. De BIS certificering omvat een continu toezicht- en
        nalevingssysteem om continue naleving van Indiase normen te waarborgen.
        Deze post-certificeringsfase is cruciaal voor het behouden van uw BIS
        licentie, het behouden van het recht om het ISI merkteken te gebruiken,
        en het vermijden van wettelijke boetes of schorsingen.
      </p>

      <p className="service-left-content-paragraph">
        Belangrijkste Toezichtscomponenten na het verkrijgen van BIS certificaat
        Markt Toezicht: Willekeurige productmonsters uit de Indiase markt voor
        onafhankelijke laboratoriumtests, als het monster faalt wordt het BIS
        certificaat opgeschort. Dit wordt tweemaal per jaar gedaan.
      </p>
    </div>
  );
};

const FacilitatorSection = () => {
  return (
    <div id="facilitator" className="flex flex-col scroll-mt-20">
      {/* Facilitator */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Facilitator</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        Waarom Kiezen voor een BIS Certificeringsconsultant?
      </h2>

      <p className="service-left-content-paragraph">
        De BIS certificering onder het FMCS registratieregime is ingewikkeld,
        zeer technisch en tijdgevoelig. Hoewel het mogelijk is om certificering
        onafhankelijk na te streven, vertrouwen de meeste succesvolle
        buitenlandse fabrikanten op BIS consultants om het traject te
        stroomlijnen en risico's te minimaliseren.
      </p>

      <h3 className="service-left-content-heading-three">
        Wat Doet een BIS Consultant?
      </h3>

      <p className="service-left-content-paragraph">
        Een BIS certificeringsconsultant biedt end-to-end begeleiding bij elke
        stap van het proces. Hun kernverantwoordelijkheden omvatten:
      </p>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Taak
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                Beschrijving
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Documentatie
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Bereidt, beoordeelt en formatteert alle vereiste documenten
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Aanvraag Ondersteuning
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Dient uw BIS aanvraag in en volgt deze op
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Audit Voorbereiding
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Begeleidt fabrieksteams om auditbereidheid te waarborgen
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Monster Coördinatie
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Beheert verzegeling en verzending van monsters naar India
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Test Ondersteuning
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Onderhoudt contact met laboratoria en helpt resultaten
                interpreteren
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Verlenging & Toezicht
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Beheert licentieverlengingen en nalevingscontroles
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <p className="service-left-content-paragraph">
        Ze fungeren als uw strategische partner, vaak ook als uw Geautoriseerde
        Indiase Vertegenwoordiger (AIR).
      </p>
    </div>
  );
};

export const ServiceFaq = () => {
  const faqs = [
    {
      question:
        "Wat is BIS certificering en waarom is het belangrijk voor buitenlandse fabrikanten om Indiaas BIS te verkrijgen?",
      answer:
        "BIS certificering is een regelgevingsproces uitgevoerd door het Bureau of Indian Standards om ervoor te zorgen dat producten voldoen aan Indiase normen. Het is essentieel voor buitenlandse fabrikanten om markttoegang, douanevrijgave en consumentenvertrouwen in India te verkrijgen.",
    },
    {
      question: "Wat vertegenwoordigt het ISI merkteken?",
      answer:
        "Het ISI merkteken geeft overeenstemming met een specifieke Indiase Norm aan. Het is verplicht voor producten onder de BIS certificering en moet worden afgedrukt op verpakkingen en producten.",
    },
    {
      question: "Is BIS certificering verplicht voor alle importen naar India?",
      answer:
        "Nee. BIS certificering is verplicht voor producten die onder het verplichte Indiase BIS certificeringsregime vallen. Vrijwillige certificering is echter beschikbaar voor andere producten.",
    },
    {
      question: "Wie kan BIS certificering aanvragen onder FMCS?",
      answer:
        "Alleen daadwerkelijke buitenlandse fabrikanten (niet importeurs of handelaren) kunnen aanvragen. Een Geautoriseerde Indiase Vertegenwoordiger (AIR) is verplicht om hen in India te vertegenwoordigen.",
    },
    {
      question: "Hoe lang duurt het om een BIS certificaat te krijgen?",
      answer:
        "Het gemiddelde BIS certificeringsproces onder FMCS duurt 120 dagen, afhankelijk van documentgereedheid, auditschema's en testomlooptijden.",
    },
    {
      question:
        "Wat zijn de belangrijkste kosten verbonden aan BIS certificering?",
      answer:
        "Kosten omvatten aanvraagkosten, auditkosten, laboratoriumtestkosten, licentie- en markeeringskosten, en een Prestatie Bankgarantie (PBG) van een RBI-goedgekeurde Indiase bank.",
    },
    {
      question: "Kan de BIS licentie worden verlengd?",
      answer:
        "Ja. De BIS licentie is over het algemeen geldig voor 1-2 jaar en kan worden verlengd bij het voldoen aan nalevings- en documentupdatevereisten.",
    },
    {
      question:
        "Wat gebeurt er als het product faalt tijdens BIS laboratoriumtests?",
      answer:
        "Als een product faalt, kan BIS corrigerende maatregelen en hertesten toestaan. Aanhoudende mislukking kan resulteren in afwijzing van de aanvraag.",
    },
    {
      question:
        "Is het noodzakelijk om een BIS certificeringsconsultant in te huren?",
      answer:
        "Het is niet verplicht maar zeer aanbevolen. Een consultant helpt vertragingen te verminderen, naleving te beheren en goedkeuringskansen te verbeteren door volledige afstemming met BIS protocollen te waarborgen.",
    },
    {
      question: "Kan een BIS licentie worden opgeschort of geannuleerd?",
      answer:
        "Ja. BIS kan een licentie opschorten of annuleren voor niet-naleving, productfalen, misbruik van het ISI logo of auditdiscrepanties.",
    },
    {
      question:
        "Welke documenten zijn nodig voor het BIS certificeringsproces?",
      answer:
        "Documenten omvatten het FMCS aanvraagformulier, testrapporten, apparatuurlijsten, kalibratiecertificaten, fabrieksindeling, AIR aanstellingsbrief en bewijs van betaling.",
    },
    {
      question: "Kan één AIR meerdere BIS aanvragen vertegenwoordigen?",
      answer:
        "Ja, mits ze voor elk project geautoriseerd zijn en de capaciteit hebben om documentatie, audits en communicatie voor elke certificering af te handelen.",
    },
    {
      question: "Wat is de rol van een Prestatie Bankgarantie?",
      answer:
        "Een PBG verzekert BIS dat de fabrikant zal voldoen aan Indiase normen. Het is terugbetaalbaar bij licentieannulering en verplicht voor alle FMCS aanvragen die Indiaas BIS verkrijgen.",
    },
    {
      question: "Wordt BIS certificering erkend buiten India?",
      answer:
        "Hoewel het BIS certificaat een Indiase norm is, wordt het gerespecteerd in handelscontexten in veel regio's die Indiase naleving accepteren, vooral in Azië en Afrika.",
    },
    {
      question: "Hoe weet ik of mijn product BIS certificering vereist?",
      answer:
        "Controleer de bijgewerkte lijst op de officiële BIS website of raadpleeg een BIS consultant om te verifiëren of uw product onder verplichte certificering valt.",
    },
  ];

  return (
    <section
      id="faqs"
      className="my-2  scroll-mt-20"
      aria-label="Veelgestelde Vragen"
    >
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          Veelgestelde Vragen
        </h2>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          Kunt u het antwoord dat u zoekt niet vinden?{" "}
          <a
            href="/contact"
            className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4 hover:text-[#1A8781] transition-colors"
          >
            Neem contact met ons op!
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
            <div className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
              Onze Diensten
            </div>
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
                src="/services-images/BIS.jpg"
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
                alt="CDSCO"
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
                src="/services-images/BISCRS.jpg"
                alt="BISCRS"
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
                src="/services-images/PlasticWasteManagement.jpg"
                alt="PlasticWasteManagement"
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
                src="/services-images/EPRCertificate.jpg"
                alt="EPRCertificate"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              EPR Certificaat Certificeringen
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
              LMPC Certificaat Certificeringen
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
              BIS Registratie Certificaat
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
              ISI MARK (BIS) voor Indiase Fabrikanten
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
