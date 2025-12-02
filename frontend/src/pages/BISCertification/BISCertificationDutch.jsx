import { Separator } from "@/components/ui/separator";
import { useState, useEffect, useRef, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, SlashIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link, useLocation } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ServicesRightSideContentDutch from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentDutch";
import ServiceAuthorDutch from "@/components/manual/ServiceAuthor/ServiceAuthorDutch";
import { ISIMarkAndBISCommonTableDutch } from "../ISIMarkAndBISCommonTable/ISIMarkAndBISCommonTableDutch";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { ClockLoader } from "react-spinners";
import { BoxReveal } from "@/components/magicui/box-reveal";
import FooterDutch from "@/components/manual/Footer/FooterDutch";
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
const BISImage = "/services-images/BIS.jpg";
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";

const BISCertificationDutch = () => {
  return (
    <div className="relative w-full">
      <BISCertificationMetaTags />
      <BISCertificationBreadcrumb />
      <BISCertificationHero />
      <BISCertificationIndex />
      <BISCertificationContent />
      <BISCertificationFaq />
      <ISIMarkAndBISCommonTableDutch />
      <LanguageSelector />
      <div id="services">
        <BISCertificationServices />
      </div>
      <FooterDutch />
    </div>
  );
};

export default BISCertificationDutch;

const BISCertificationMetaTags = () => {
  const title = "BIS Certificering Typen, Proces, Documenten, Kosten";
  const description =
    "BIS certificering verwijst naar het proces van het verkrijgen van een kwaliteitsstandaardcertificaat van het Bureau of Indian Standards (BIS) voor het produceren en verkopen van diverse producten in India.";
  const keywords =
    "BIS Certificering, BIS Certificeringsproces, BIS Registratie, BIS Registratieproces, BIS Certificeringsschema, Productcertificeringsschema, Verplicht Certificeringsschema, BIS Verplichte Productenlijst, ISI Mark, BIS FMCS, BIS Hallmarking Schema, Eco Mark Schema, BIS Certificeringsconsulent, ISI Certificeringsconsulent, BIS ISI Mark Consulent, Wat is BIS Certificering, BIS Certificering Download, BIS Certificeringskosten, India BIS Certificering, BIS Certificering Volledige Vorm, BIS Certificering India, Indiase BIS Certificering, BIS Certificering Betekent, BIS Certificering Controle, BIS Licentie Online in India, BIS Certificering Online, BIS Certificaat, BIS Certificaat Online.";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Hoofd van Operations bij Sun Certification India";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Sun Certifications India" />
      <meta property="og:type" content="article" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

const BISCertificationBreadcrumb = () => {
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
                    BIS Certificering India voor Importeurs en Fabrikanten
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

const BISCertificationHero = () => {
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
              Gecertificeerde Expertise
            </span>
          </div>

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              BIS Certificering India
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            voor Importeurs en Fabrikanten
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            BIS certificering waarborgt productkwaliteit en veiligheid in India.
            Het is verplicht voor vele producten en vereist testen, documentatie
            en goedkeuring.
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
                Bekijk Diensten
              </span>
            </div>
          </nav>
        </article>

        {/* Right Side */}
        <BISCertificationContactForm />
      </div>
    </section>
  );
};

const BISCertificationContactForm = () => {
  const [loading, setLoading] = useState(false);

  // Function to get page name based on URL
  const getPageName = () => {
    const path = window.location.pathname;
    // Service pages
    if (path.includes("/nl/wat-is-het-bis-certificaat-indiaas-bis"))
      return "BIS Certification Dutch";
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
        error.response?.data?.message || "Something went wrong";
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

const BISCertificationIndex = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const stickyRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const SECTIONS = useMemo(
    () => [
      "overview",
      "schemes",
      "process",
      "documents",
      "cost",
      "air",
      "conclusion",
      "faqs",
    ],
    []
  );

  const MENU_ITEMS = {
    overview: "Overzicht",
    schemes: "Schema's",
    process: "Proces",
    documents: "Documenten",
    cost: "Kosten",
    air: "AIR",
    conclusion: "Conclusie",
    faqs: "FAQ's",
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
          aria-label="Menu schakelen"
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

const BISCertificationContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side */}
        <BISCertificationContentLeft />
        {/* Right Side */}
        <ServicesRightSideContentDutch />
      </div>
    </div>
  );
};

const BISCertificationContentLeft = () => {
  return (
    <div className="flex-1">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        <OverviewSection />
        <div className="service-left-content-divider" />
        <SchemesSection />
        <div className="service-left-content-divider" />
        <ProcessSection />
        <div className="service-left-content-divider" />
        <DocumentsSection />
        <div className="service-left-content-divider" />
        <CostSection />
        <div className="service-left-content-divider" />
        <AIRSection />
        <div className="service-left-content-divider" />
        <ConclusionSection />
        <div className="service-left-content-divider" />
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
      <h1 className="service-left-content-heading-two">
        BIS ISI Mark Certificering voor Indiase Fabrikanten
      </h1>

      <div className="flex justify-center mt-[20px] md:mt-[26px]">
        <img
          src="/services-main-images/IndianBisCertification.png"
          alt="Indiase BIS Certificering"
          title="BIS Certificaat voor Indiase fabrikanten"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <h2 className="service-left-content-heading-three">
        Introductie: Waarom BIS Certificering Belangrijk Is
      </h2>

      <p className="service-left-content-paragraph">
        Neem bijvoorbeeld een fabrikant uit Duitsland die een uniek elektronisch
        apparaat heeft uitgevonden en van plan is het te verkopen op de snel
        veranderende Indiase markt. Het apparaat is uniek en veilig en heeft ook
        goedkeuringen gekregen in Europa. Wanneer het apparaat echter naar de
        haven in India wordt gebracht, houden de douaneambtenaren het apparaat
        vast. De vraag is: "Waarom?" Het antwoord is dat het apparaat een BIS
        certificering moet hebben, wat cruciaal is om elektronische producten in
        India te verkopen.
      </p>

      <p className="service-left-content-paragraph">
        Veel wereldwijde en Indiase fabrikanten krijgen elk jaar te maken met
        dezelfde situaties. Voor Indiase consumenten is het BIS merk op een
        product niet alleen een logo, het is een teken van vertrouwen dat het
        product is getest op kwaliteit, veiligheid en betrouwbaarheid. Voor een
        bedrijf is het de toegangspoort tot een van de grootste markten ter
        wereld.
      </p>

      <p className="service-left-content-paragraph">
        Dit artikel beantwoordt alle vragen over BIS certificering, de noodzaak,
        processen, voordelen, schema's, kosten en het systeem en de navigatie
        beschikbaar voor zowel buitenlandse als binnenlandse fabrikanten.
      </p>

      <h2 className="service-left-content-heading-three">
        Wat is BIS Certificering voor Fabrikanten en Importeurs?
      </h2>

      <p className="service-left-content-paragraph">
        BIS Certificering is een kwaliteitsborging en veiligheidscertificering
        verstrekt door het Bureau of Indian Standards (BIS), de nationale
        certificeringsinstantie van India onder het Ministerie van
        Consumentenaangelegenheden. De BIS certificering zorgt ervoor dat een
        product voldoet aan de Indiase Standaarden (IS) met betrekking tot
        prestaties, veiligheid en kwaliteit.
      </p>
      <p className="service-left-content-paragraph">
        Wanneer een product aan deze kwaliteitsstandaardvereisten voldoet, geeft
        het Bureau of Indian Standards een BIS licentie of BIS certificaat af,
        wat betekent dat het product gerechtigd is om het ISI merk te dragen
        (voor binnenlandse schema's) of een CRS merk met een uniek
        registratienummer (onder het BIS Verplichte Registratieschema).
      </p>
      <p className="service-left-content-paragraph">
        Voor veel Indiase fabrikanten en importeurs is het verkrijgen van BIS
        certificering een must. Het dekt een breed scala aan producten,
        waaronder elektrische apparaten, cement- en staalproducten, verpakt
        drinkwater, elektronica zoals mobiele telefoons, LED-verlichting, power
        banks, edelmetaal sieraden (via keurmerken) en nog veel meer. De
        fabrikanten en importeurs van deze verplichte producten kunnen legaal
        geen goederen verkopen of distribueren in India zonder BIS erkenning.
      </p>

      <h2 className="service-left-content-heading-three">
        Een Korte Geschiedenis van BIS in India
      </h2>

      <p className="service-left-content-paragraph">
        Het Bureau of Indian Standards (BIS) werd opgericht in 1986 en nam het
        Indian Standards Institution (ISI) over, dat in 1947 werd opgericht. BIS
        wordt nu beschouwd als een kwaliteitsbewaker voor standaarden in India
        en heeft hun praktijken afgestemd op internationale niveaus en de
        noodzakelijke wijzigingen aangebracht voor de Indiase omstandigheden.
      </p>

      <h3 className="service-left-content-heading-three">
        Opmerkelijke Mijlpalen
      </h3>

      <PointsListWithoutHeading
        points={[
          "In 1947 werd het ISI opgericht om kwaliteitscontrolesystemen te ondersteunen nadat het land onafhankelijkheid had gekregen.",
          "In 1955 werd het ISI merk toegekend, waardoor het een van de beroemdste kwaliteitssymbolen in India werd.",
          "In 1986 werd de BIS-wet aangenomen, waarbij ISI werd vervangen door het Bureau of Indian Standards.",
          "In 2016 en 2018 hebben verdere wijzigingen de verantwoordelijkheden van BIS verrijkt, waardoor keurmerken en productcertificering grondiger werden.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Momenteel garandeert BIS de veiligheid, betrouwbaarheid en
        standaardisatie van duizenden gereedschappen en machines voor Indiase
        gebruikers in meerdere industrieën.
      </p>

      <h2 className="service-left-content-heading-three">
        Waarom is BIS Certificering verplicht in India?
      </h2>
      <p className="service-left-content-paragraph">
        De Indiase markt is enorm, voortdurend veranderend en gevoelig voor
        prijs verschuivingen. Deze openheid laat de markt echter ook blootstaan
        aan goedkope en onveilige goederen. In deze context fungeert BIS
        certificering als een beschermende barrière.
      </p>
      <PointsListWithoutHeading
        points={[
          "Consumentenveiligheid - beschermt mensen tegen potentiële ongevallen, gezondheidsproblemen en bedrog.",
          "Marktregulering - zorgt ervoor dat niet-conforme producten niet de Indiase markt binnenkomen.",
          "Vertrouwen en Zelfvertrouwen - versterkt het consumentengeloof in lokale en internationale producten.",
          "Wereldwijde Afstemming - helpt buitenlandse bedrijven bij het afstemmen op de regelgevingsstructuur van India.",
          "Eerlijke Concurrentie - elke marktdeelnemer, ongeacht de grootte, is verzekerd van concurrentie puur op kwaliteit.",
        ]}
      />
      <p className="service-left-content-paragraph">
        BIS certificering voor verpakt drinkwater is een voorbeeld waarbij
        gebrek aan certificering gezondheidsproblemen kan veroorzaken. Andere
        evenzeer ontbrekende standaarden van productcertificering voor
        verwarmers, broodroosters en andere elektrische apparaten kunnen branden
        veroorzaken. Daarom zorgt de regering door het hebben van een BIS
        certificering ervoor dat deze uitdagingen worden aangepakt.
      </p>
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

      <h2 className="service-left-content-heading-two">
        BIS Certificeringsproces
      </h2>

      <p className="service-left-content-paragraph">
        Het BIS certificeringsproces volgt een gestructureerde flow:
      </p>

      <PointsListWithoutHeading
        points={[
          "Relevante Standaard Identificeren: Selecteer toepasselijke Indiase Standaard (IS).",
          "Aanvraag Indienen: Dien in bij BIS en voeg relevante documenten bij.",
          "Producttesten: Testen uitgevoerd in goedgekeurde BIS-laboratoria.",
          "Fabrieksinspectie: Faciliteiten worden geïnspecteerd door BIS-functionarissen.",
          "BIS Licentie: certificaat wordt toegekend na succesvolle beoordelingsevaluatie.",
          "Toezicht: aanhoudende naleving samen met licentiewijzigingen is de nieuwe norm.",
        ]}
      />
    </div>
  );
};

const DocumentsSection = () => {
  return (
    <div id="documents" className="flex flex-col scroll-mt-20">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Documenten</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Documenten Vereist voor BIS Certificering
      </h2>

      <p className="service-left-content-paragraph">
        Een sterk documentatiepakket zorgt voor een soepele verwerking.
        Belangrijke vereisten zijn onder meer:
      </p>

      <PointsListWithoutHeading
        points={[
          "Bedrijfslicentie of bedrijfsregistratiedocumenten.",
          "Productieproces flowdiagram.",
          "Lijst van machines en apparatuur.",
          "Productdetails en technische specificaties.",
          "Testrapporten van BIS-erkende laboratoria.",
          "Kwaliteitscontrole handboek.",
          "Handelsmerk certificaat.",
        ]}
      />

      <h3 className="service-left-content-heading-three mt-5">
        Voor buitenlandse fabrikanten:
      </h3>

      <PointsListWithoutHeading
        points={[
          "Aanstelling van een Geautoriseerde Indiase Vertegenwoordiger (AIR).",
          "Bewijs van vertegenwoordiging en identiteitsdocumenten.",
        ]}
      />
    </div>
  );
};

const CostSection = () => {
  return (
    <div id="cost" className="flex flex-col scroll-mt-20">
      {/* Cost */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Kosten</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        BIS Certificeringskosten
      </h2>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                Kostencomponent
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                Details
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Aanvraagkosten
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Eenmalige, niet-terugbetaalbare kosten afhankelijk van
                producttype
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Testkosten
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Gebaseerd op complexiteit; betaald aan BIS-erkende laboratoria
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Jaarlijkse Licentiekosten
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Jaarlijks betaald om BIS licentie te behouden
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Inspectie/Fabrieksauditkosten
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                In rekening gebracht als BIS-functionarissen fabriek bezoeken
                (binnenlandse of internationale reis extra)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Advieskosten (indien van toepassing)
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Optioneel, voor end-to-end nalevingshulp van adviseurs
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

const AIRSection = () => {
  return (
    <div id="air" className="flex flex-col scroll-mt-20">
      {/* AIR */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">AIR</span>
        <Separator className="service-left-content-separator" />
      </div>
      <h2 className="service-left-content-heading-two">
        Rol van Geautoriseerde Indiase Vertegenwoordiger (AIR)
      </h2>

      <p className="service-left-content-paragraph">
        Voor buitenlandse fabrikanten is de Geautoriseerde Indiase
        Vertegenwoordiger (AIR) kritiek.
      </p>

      <PointsListWithoutHeading
        points={[
          "Behandelt alle communicatie met BIS.",
          "Verzamelt en dient documenten in, en vergemakkelijkt vervolgens het inspectieproces.",
          "Zorgt voor naleving met betrekking tot certificering, voor en na.",
          "Moet een Indiase burger zijn of een organisatie met een geregistreerd lokaal adres.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Zonder een AIR is het verkrijgen van BIS certificering voor buitenlandse
        bedrijven onmogelijk.
      </p>
    </div>
  );
};

const ConclusionSection = () => {
  return (
    <div id="conclusion" className="flex flex-col scroll-mt-20">
      {/* Conclusion */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Conclusie</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">Conclusie</h2>

      <p className="service-left-content-paragraph">
        Het hebben van een BIS certificering is een noodzaak voor het doen van
        zaken in India. Het is niet langer een optionele certificering in het
        bedrijfsleven. Het is cruciaal voor zakelijk succes en het opbouwen van
        vertrouwen. BIS is essentieel voor veiligheid en succes in India. Voor
        fabrikanten en importeurs biedt het een gemakkelijke en veilige
        zakelijke opzetomgeving. Juridische problemen en boetes zijn niet langer
        een zorg. Met een BIS merk is consumentenvertrouwen gegarandeerd.
      </p>

      <p className="service-left-content-paragraph">
        India is een van de grootste groeiende economieën ter wereld en toegang
        krijgen om daar te verkopen kan een exporteur helpen groeien. Of u nu
        een fabrikant in India of in het buitenland bent, de BIS licentie is
        nodig om producten te produceren of te verkopen op de Indiase markt. Het
        is vereist en het opent zakelijke vooruitzichten met de groeiende
        bevolking van India. Het is een investering in veiligheid,
        consumentenvertrouwen, merkreputatie, geloofwaardigheid en
        langetermijngroei.
      </p>
    </div>
  );
};

const SchemesSection = () => {
  return (
    <div id="schemes" className="flex flex-col scroll-mt-20">
      {/* Schemes */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Schema's</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        BIS Certificeringsschema's
      </h2>

      <p className="service-left-content-paragraph">
        BIS heeft talrijke certificeringsschema's ontworpen voor diverse
        industrieën en producttypen. Elk is ontworpen om te voldoen aan de
        specifieke behoeften van de industrie en het product.
      </p>

      <PointsListWithoutHeading
        points={[
          "FMCS – Buitenlandse Fabrikanten Certificeringsschema",
          "ISI Mark Schema (Binnenlandse Fabrikanten)",
          "Schema X onder Indiase BIS",
          "CRS – Verplicht Registratieschema",
          "Hallmarking Schema (Sieraden & Edelmetalen)",
          "Eco Mark Certificering",
          "Management Systemen Certificeringsschema (MSCS)",
          "LRS (Laboratorium Erkenningsschema)",
        ]}
        linkMap={{
          "FMCS – Buitenlandse Fabrikanten Certificeringsschema":
            "a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis",
          "ISI Mark Schema (Binnenlandse Fabrikanten)":
            "a-guide-to-bis-certification-indian-bis",
          "Schema X onder Indiase BIS":
            "indian-bis-certification-under-scheme-x",
          "CRS – Verplicht Registratieschema":
            "what-is-crs-bis-or-crs-registration",
        }}
      />

      <h3 className="service-left-content-heading-three">
        ISI Mark Schema (Binnenlandse Fabrikanten)
      </h3>

      <p className="service-left-content-paragraph">
        Voor Indiase fabrikanten is het verkrijgen van een BIS licentie een
        vereiste om legale verkoop van hun producten binnen het land te
        waarborgen. Deze certificering wordt uitgegeven door het Bureau of
        Indian Standards (BIS) om te certificeren dat Indiase Standaarden worden
        nageleefd met betrekking tot kwaliteit, veiligheid en
        prestatiebenchmarks voor de producten. Dit omvat fabriek audits,
        producttesten en nalevingscontroles met de BIS-parameters. Zodra het
        product is goedgekeurd, mogen de fabrikanten het ISI merk op het product
        aanbrengen. Dit merk is een handelsmerk voor de fabrikant en helpt de
        klant een authentiek, ISI-gecertificeerd product te identificeren.
      </p>

      <p className="service-left-content-paragraph">
        Ongeacht of het voor elektronica, staal, cement, plastic of
        bouwmaterialen is, het verkrijgen van een BIS certificaat is essentieel
        voor toegang tot de markt. In tegenstelling tot het verkrijgen van
        consumentenvertrouwen, versterkt een BIS certificaat de reputatie van
        Indiase fabrikanten, stelt het hen in staat deel te nemen aan
        overheidscontracten en opent het een reeks andere zakelijke kansen.
        Belangrijker nog, het ontbreken van BIS certificering kan schadelijke
        gevolgen hebben, variërend van juridische boetes en
        productterugroepacties tot een volledig verkoopverbod in India. Daarom
        is BIS naleving meer dan een wettelijke vereiste, het is een gerichte
        strategie voor het uitbreiden en behouden van consumentenvertrouwen.
      </p>

      <p className="service-left-content-paragraph">
        Voor Indiase fabrikanten is het ISI merk schema het meest prestigieuze
        merk. Onder het schema zijn Indiase fabrikanten verplicht om hun
        producten te laten testen bij BIS-erkende testfaciliteiten. Productie
        locaties zijn onderworpen aan inspectie en testen. Nalevende producten
        krijgen goedkeuring om het ISI merk te gebruiken. Het is een overtreding
        om producten zoals cement, LPG cilinders, elektrische kabels, verpakt
        drinkwater en meer te leveren zonder het ISI merk.
      </p>

      <h3 className="service-left-content-heading-three">
        FMCS – Buitenlandse Fabrikanten Certificeringsschema
      </h3>

      <p className="service-left-content-paragraph">
        Het Buitenlandse Fabrikanten Certificeringsschema (FMCS) is een schema
        ontwikkeld door het Bureau of Indian Standards voor buitenlandse
        bedrijven die de Indiase markt willen betreden. Dit schema garandeert de
        veiligheid, kwaliteit en prestatieborging van de in het buitenland
        geproduceerde producten die voldoen aan de vereiste Indiase normen.
        Volgens FMCS moeten buitenlandse bedrijven die producten in India willen
        verkopen eerst een Bureau of Indian Standards certificaat of licentie
        verkrijgen. Net als Indiase fabrikanten moeten ook buitenlandse
        fabrikanten een BIS licentie verkrijgen om het ISI merk op hun product
        te gebruiken. Het gewenste ISI merk wordt gegeven na uitgebreide
        evaluatie die fabrieks- en rigoureuze productmonster testen tegen de
        Indiase Standaarden omvat.
      </p>

      <p className="service-left-content-paragraph">
        Een buitenlandse fabrikant moet een Geautoriseerde Indiase
        Vertegenwoordiger (AIR) aanstellen, die verantwoordelijk is voor
        communicatie en coördinatie, als eerste contactpunt met het Bureau of
        Indian Standards (BIS) voor het schema. Het omvat het indienen van een
        aanvraag, diepgaande nalevingsevaluatie en het op zich nemen van alle
        noodzakelijke verplichtingen om binnen de deadlines naleving te
        bereiken. Als gevolg van het volgen van de FMCS-richtlijnen kunnen
        buitenlandse bedrijven de Indiase markt betreden en goodwill verwerven
        bij de klanten. Elk product met een ISI merk toont een hoog niveau van
        kwaliteit, veiligheid en betrouwbaarheid in India.
      </p>

      <p className="service-left-content-paragraph">
        Geen buitenlandse producten die onder de gereguleerde categorieën
        vallen, zijn toegestaan om India binnen te komen zonder de FMCS
        certificering.
      </p>

      <h3 className="service-left-content-heading-three">
        Schema X (Omnibus Technische Regeling)
      </h3>

      <p className="service-left-content-paragraph">
        Schema X, of de Omnibus Technische Regeling, is nog een BIS
        certificeringsschema ontworpen door het Bureau of Indian Standards om te
        helpen de nalevingsprocedures van industrieën in mechanische en
        elektrische domeinen te vereenvoudigen. In tegenstelling tot de andere
        certificeringsschema's richt Schema X zich op het verminderen van
        documentatie, beoordelingen en goedkeuringen terwijl ervoor wordt
        gezorgd dat producten voldoen aan de Indiase Standaarden. De producten
        met het standaardmerk zijn van uitzonderlijke kwaliteit en veiligheid en
        kunnen worden verkocht na het ondergaan van type-testen,
        fabrieksinspecties en eenvoudige certificering van verplichte vereisten.
      </p>

      <p className="service-left-content-paragraph">
        Schema X dekt zware machines en elektrische apparatuur veiligheids
        richtlijnen voor producten zoals pompen, kranen, transformatoren,
        gereedschapsmachines en andere zware engineeringproducten. Dit zijn de
        meest relevante industrieën en alle waar betrouwbaarheid en veiligheid
        een noodzaak is. Schema X is handig omdat het de tijd en kosten van de
        complexe BIS certificering verkort. Het streeft ernaar het
        nalevingsproces te stroomlijnen om snellere vrijgave voor marketing en
        verbeterde reputatie te faciliteren zonder de kwaliteits- en
        veiligheidsnormen in gevaar te brengen. De blijvende en traditionele
        reputatie van het Bureau of Indian Standards maakt gemakkelijkere
        internationale handel mogelijk, onmisbaar voor bedrijven om nalevings
        vereisten te halen en concurrentievermogen te verhogen.
      </p>

      <p className="service-left-content-paragraph">
        BIS Schema X is verplicht om toegang te krijgen tot de Indiase zware
        machine-industrie. Dit nieuwe schema is belangrijk voor verbeterde
        marktconcurrentie, innovatie en naleving van regelgeving die worden
        gestroomlijnd door deze vereenvoudigde maar robuuste structuur.
      </p>

      <h3 className="service-left-content-heading-three">
        Verplicht Registratieschema (CRS)
      </h3>

      <p className="service-left-content-paragraph">
        Het Bureau of Indian Standards (BIS) heeft een BIS certificerings
        programma ontwikkeld genaamd het Verplichte Registratieschema (CRS)
        gericht op het reguleren van IT- en elektronische producten in India.
        Het richt zich op het beoordelen van de veiligheid en kwaliteit van
        hoog-risico producten zoals LED-verlichting, mobiele telefoons, laptops,
        power banks en andere consumentenelektronica tegen Indiase Standaarden.
        CRS geeft, in tegenstelling tot het ISI-schema, geen ISI merk uit, maar
        gecertificeerde producten, in overeenstemming met het schema, dragen een
        CRS merk met een uniek registratienummer. Alle elektronische en IT
        producten moeten worden getest in de BIS-erkende laboratoria en formeel
        worden geregistreerd bij BIS CRS, gebruikt om naleving te waarborgen
        voordat ze kunnen worden verkocht of geïmporteerd in India.
      </p>

      <p className="service-left-content-paragraph">
        Dit schema is essentieel voor het beschermen van Indiase consumenten
        tegen onveilige, ondermaatse of vervalste elektronica, vooral in het
        geval van de snelgroeiende digitale markt. Zowel Indiase als
        buitenlandse fabrikanten moeten CRS-certificering verkrijgen. De
        buitenlandse bedrijven moeten een Geautoriseerde Indiase
        Vertegenwoordiger AIR aanstellen om naleving te waarborgen. De BIS werkt
        continu de lijst van producten bij die onder de CRS vallen om nieuwe
        producten en technologieën en opkomende veiligheidsproblemen op te
        nemen. Voor fabrikanten is het verkrijgen van BIS-registratie onder CRS
        een toegevoegde voordeel omdat het helpt bij regelgevingsnaleving en het
        ook verhoogt klantvertrouwen, bedrijfsreputatie en markttoegang in de
        elektronica-industrie in India.
      </p>

      <h3 className="service-left-content-heading-three">Hallmarking Schema</h3>

      <p className="service-left-content-paragraph">
        In India is het keurmerken van goud- en zilversieraden verplicht onder
        het Hallmarking Schema en gereguleerd door het Bureau of Indian
        Standards (BIS) dat de zuiverheid en echtheid van de sieraden
        garandeert. Edelmetaalartikelen worden getest bij BIS-goedgekeurde
        Assay- en Hallmarking Centres (AHC) en worden vervolgens gestempeld met
        keurmerktekens. Dit proces wordt alleen voltooid als de artikelen
        voldoen aan de Indiase Standaarden die aan het begin zijn uiteengezet.
        Juweliers moeten eerst een BIS-licentie verkrijgen die hen in staat
        stelt keurmerksieraden te verkopen. Dit is de enige manier om dit legaal
        te doen. De juwelier is verplicht om producttesten te ondergaan en te
        voltooien, BIS-audits en continue nalevingsmonitoring om
        keurmerksieraden te verkopen. Het proces beschermt uiteindelijk de
        consument en waarborgt de zuiverheid, het gewicht en de kwaliteit en
        beperkt wanpraktijken en fraude in de sieradenmarkt.
      </p>

      <p className="service-left-content-paragraph">
        Voor Indiase consumenten zijn goud en zilver niet alleen sieraden maar
        ook belangrijke investeringen, wat vertrouwen en transparantie
        essentieel maakt. Het keurmerken van sieraden is een teken van zekerheid
        voor de gewone burger in het land dat elk sieraad dat te koop is
        uitgebreid is getest tegen verschillende nationale normen en eerlijke
        handelspraktijken. Juweliers kunnen hun geloofwaardigheid en
        marktreputatie tonen door sieraden te keurmerken. Het niet kunnen
        voldoen aan de gestelde regels brengt straf met zich mee die opschorting
        van licentie kan omvatten. Voor keurmerken onder BIS dient het als een
        vervulling van principe-gebaseerde en juridische verplichtingen. Dit
        verhoogt niet alleen de consumententevredenheid maar versterkt ook de
        Indiase sieradenmarkt als geheel. Dit geldt ook voor kleinere retailers
        en grootschalige fabrikanten.
      </p>

      <h3 className="service-left-content-heading-three">
        Eco Mark Certificering
      </h3>

      <p className="service-left-content-paragraph">
        Het Eco Mark is een innovatie-gerichte erkenningsschema gemaakt door het
        Bureau of Indian Standards (BIS) gericht op de bevordering van
        milieuvriendelijke goederen. In tegenstelling tot de traditionele
        certificering die zich prominent richt op veiligheids- en
        kwaliteitsparameters, wordt het Eco Mark toegekend aan goederen die
        voldoen aan Indiase Standaarden en die ten minste enige verminderde mate
        van de nadelige milieueffecten tonen tijdens een of meer van de
        verschillende fasen van de levenscyclus van de goederen. Eco Mark
        certificering wordt alleen toegekend na aanzienlijke testen en het
        bewijzen van criteria - naleving die emissieniveaus, niet-toxiciteit, de
        snelheid van biodegrade, recyclecapaciteit en algehele interacties met
        het systeem omvat. Eco Mark, net als het ISI merk, is een embleem van
        zekerheid van de overheid dat de status van een certificeringsmerk heeft
        gekregen, zij het met meer uitgesproken doelen van milieuvriendelijke
        duurzaamheid.
      </p>

      <p className="service-left-content-paragraph">
        De BIS-licentie met Eco Mark certificeert dat een bedrijf zich
        bezighoudt met verantwoorde productie en geeft om het milieu. Het
        waarborgt naleving van de wet en creëert een concurrentievoordeel met
        beschermende consumenten en duurzaamheid-gerichte bedrijven. Eco Mark
        helpt de industrie om groene praktijken te vertrouwen en aan te nemen en
        de consumenten om te vertrouwen dat de producten die ze kopen veilig en
        milieuvriendelijk verantwoordelijk zijn. Eco Mark ondersteunt India's
        visie voor verbeterde kwaliteitsbescherming met milieubescherming onder
        BIS.
      </p>

      <h3 className="service-left-content-heading-three">
        Management Systemen Certificeringsschema (MSCS)
      </h3>

      <p className="service-left-content-paragraph">
        Het Management Systemen Certificeringsschema (MSCS) geïnitieerd door het
        Bureau of Indian Standards (BIS) is een stapsgewijze procedure die
        betrokken bedrijven evalueert en erkent voor de implementatie van
        internationaal geaccepteerde en erkende managementsystemen.
        MSCS-framework bestaat uit ISO-standaarden zoals ISO 9001
        Kwaliteitsbeheer, ISO 14001 Milieu Beheer, ISO 45001 Arbeidsgezondheids-
        en Veiligheidsmanagementsysteem en anderen. MSCS certificeert het
        bedrijf voor de juridische operaties, consistentie en continue
        verbetering van de operaties. Gecertificeerde bedrijven doorlopen
        talrijke beoordelingen en audits die hen helpen vertrouwen op te bouwen
        bij klanten, regelgevers en stakeholders, wat de garantie van
        veiligheid, kwaliteit en duurzaamheid versterkt.
      </p>

      <p className="service-left-content-paragraph">
        BIS is het nationale standaardorganisatie van India en is de
        certificeringsinstantie voor het verbeteren van de reputatie en
        geloofwaardigheid van de organisatie binnen en buiten India. MSCS
        bevordert naast verantwoordelijkheid door periodieke supervisie en
        hercertificering ook een bedrijf om actief openbare programma's te
        ondersteunen zoals Make in India en Atmanirbhar Bharat. Naast juridische
        verplichting helpt het schema ook bij het cultiveren van een cultuur van
        integriteit, efficiëntie en eerlijke handel. MSCS moedigt de handel en
        investeringen door de gecertificeerde bedrijven aan en BIS speelt een
        cruciale rol in de ontwikkeling van het kwaliteitsecosysteem van het
        land.
      </p>

      <h3 className="service-left-content-heading-three">
        LRS – Laboratorium Erkenningsschema
      </h3>

      <p className="service-left-content-paragraph">
        Onder het Bureau of Indian Standards (BIS) is het Laboratorium
        Erkenningsschema (LRS) een integraal onderdeel van een systeem dat de
        betrouwbaarheid en algehele bekwaamheid garandeert van laboratoria die
        producten testen en certificeren voor BIS-goedkeuring. Dergelijke
        laboratoria worden kritisch beoordeeld op diverse kenmerken, waaronder
        technische kennis, kwaliteit van de beroepsbevolking, infrastructuur en
        de algehele bekwaamheid en tevredenheid van het laboratorium met de
        ISO/IEC 17025-standaard. Deze laboratoria, eenmaal goedgekeurd, zijn
        toegestaan om testen uit te voeren op het product waarvoor conformiteit
        beoordeling wordt gedaan als onderdeel van verschillende
        BIS-certificeringsprogramma's zoals het ISI Mark Schema en het
        Verplichte Registratieschema (CRS). Het is duidelijk dat voor
        fabrikanten, met name voor importeurs en exporteurs, de rapporten
        verkregen van een LRS-goedgekeurd laboratorium een kritieke vereiste
        zijn om een BIS-certificaat te behalen dat een wettelijke vereiste is
        voor bepaalde producten.
      </p>

      <p className="service-left-content-paragraph">
        De LRS versterkt India's verzekeringssystemen door billijkheid te
        handhaven in testresultaten en ervoor te zorgen dat alle resultaten
        consistent zijn en wereldwijd gebenchmarkt, terwijl alleen betrouwbare
        en solide laboratoria worden geaccrediteerd. Om integriteit en
        transparantie te handhaven, voert BIS regelmatig audits,
        bekwaamheidstesten en toezicht uit op erkende schematische laboratoria.
        Erkenning van deze certificering stelt BIS in staat vertrouwen te
        verbeteren van consumenten terwijl het certificeringsproces efficiënter
        wordt gemaakt voor industrieën, aangezien alleen veilige, nalevende en
        hoogwaardige producten worden aangeboden op de Indiase markt. Voor
        organisaties die BIS willen ontvangen certificering, is samenwerking met
        LRS-goedgekeurde laboratoria het meest essentieel om naleving en
        markttoegang te bereiken.
      </p>

      <h3 className="service-left-content-heading-three">
        Producten die BIS Certificering Vereisen
      </h3>

      <p className="service-left-content-paragraph">
        BIS certificering is van toepassing op een breed scala aan producten.
        Voorbeelden zijn onder meer:
      </p>

      <PointsListWithoutHeading
        points={[
          "Elektrisch & Elektronica – LED-verlichting, mobiele telefoons, adapters, laptops.",
          "Bouwmaterialen – Cement, stalen staven, structurele producten.",
          "Consumentengoederen – Verpakt drinkwater, kookgas cilinders.",
          "Sieraden & Edelmetalen – Goud- en zilverartikelen onder keurmerken.",
          "Industriële Uitrusting – Pompen, transformatoren, gereedschapsmachines.",
        ]}
      />

      <p className="service-left-content-paragraph">
        De lijst blijft groeien naarmate nieuwe risico's en technologieën
        opkomen.
      </p>

      <h3 className="service-left-content-heading-three">
        Voordelen van BIS Certificering
      </h3>

      <p className="service-left-content-paragraph">
        Voor bedrijven biedt het BIS-certificaat veel meer dan alleen naleving
        van de wet.
      </p>

      <PointsListWithoutHeading
        points={[
          "Juridische naleving: geen boetes, geen verboden, geen inbeslagname.",
          "Markttoegang: nodig voor het verkopen van gereguleerde producten in India.",
          "Consumentenvertrouwen: opbouwt met het goed erkende ISI merk als bewijs.",
          "Concurrentievoordeel: aangezien gecertificeerde bedrijven zich gemakkelijk onderscheiden van niet-gecertificeerde concurrenten.",
          "Exportfacilitatie: veel internationale kopers begrijpen en waarderen BIS certificering.",
          "Deelname aan Aanbestedingen: veel overheidsprojecten kennen contracten toe voor goederen die BIS-gecertificeerd zijn.",
        ]}
      />
    </div>
  );
};

const BISCertificationFaq = () => {
  const faqData = [
    {
      question: "Wat is BIS certificering in India?",
      answer:
        "BIS certificering is een kwaliteitsborgingscertificering uitgegeven door het Bureau of Indian Standards (BIS) om ervoor te zorgen dat producten voldoen aan Indiase standaarden voor veiligheid, prestaties en kwaliteit. Het is verplicht voor verschillende productcategorieën en helpt bij consumentenbescherming en regelgevingsnaleving.",
    },
    {
      question: "Waarom heb ik een BIS certificaat nodig?",
      answer:
        "Een BIS certificaat is essentieel om legaal bepaalde producten te produceren, importeren, distribueren of verkopen in India. Het verzekert consumenten dat het product voldoet aan de veiligheids- en kwaliteitsrichtlijnen van Indiase standaarden.",
    },
    {
      question: "Wat is het ISI merk onder BIS certificering?",
      answer:
        "Het ISI merk is een certificeringssymbool verstrekt onder het BIS certificeringsschema. Het geeft aan dat een product voldoet aan Indiase standaarden en is gecertificeerd door het Indiase BIS door middel van correcte testen en registratie.",
    },
    {
      question: "Wie geeft BIS licenties uit in India?",
      answer:
        "BIS licenties worden uitgegeven door het Bureau of Indian Standards (Indiase BIS), de nationale standaardorganisatie onder het Ministerie van Consumentenaangelegenheden, Voedsel en Openbare Distributie.",
    },
    {
      question: "Wat zijn de verschillende soorten BIS certificeringsschema's?",
      answer:
        "De belangrijkste BIS certificeringsschema's omvatten het ISI merk schema, Verplicht Registratieschema (CRS), Buitenlandse Fabrikanten Certificeringsschema (FMCS), Hallmarking voor sieraden, Eco Mark certificering, en wat is Schema X voor industriële machines.",
    },
    {
      question: "Wat is Schema X onder BIS certificering?",
      answer:
        "Schema X is een vereenvoudigd BIS certificeringsproces van toepassing op industriële producten zoals pompen, transformatoren, gereedschapsmachines en kranen. Het zorgt voor snellere goedkeuring zonder in te boeten op naleving van Indiase standaarden.",
    },
    {
      question: "Welke producten vereisen BIS certificering in India?",
      answer:
        "Producten zoals elektrische apparaten, elektronica, keukengerei, cement, staal, goudsieraden, mobiele telefoons en transformatoren vereisen BIS certificering volgens het Indiase BIS-mandaat.",
    },
    {
      question: "Is BIS registratie verplicht voor alle producten?",
      answer:
        "Nee, BIS registratie is alleen verplicht voor producten die in het verplichte certificeringsschema staan. Er is echter ook vrijwillige BIS certificering beschikbaar om productgeloofwaardigheid te vergroten.",
    },
    {
      question: "Hoe lang is een BIS licentie geldig?",
      answer:
        "Een BIS licentie is meestal geldig voor een tot twee jaar en moet vóór het verstrijken worden vernieuwd om het ISI merk te blijven gebruiken of de BIS registratiestatus te behouden.",
    },
    {
      question: "Wat zijn de stappen om BIS certificering te krijgen in India?",
      answer:
        "Het BIS certificeringsproces omvat het identificeren van toepasselijke Indiase standaarden, het indienen van een aanvraag, producttesten, fabrieksinspectie en het uitgeven van een BIS certificaat na goedkeuring.",
    },
    {
      question: "Kunnen buitenlandse fabrikanten een BIS licentie aanvragen?",
      answer:
        "Ja, onder het Buitenlandse Fabrikanten Certificeringsschema (FMCS) kunnen buitenlandse bedrijven een BIS licentie aanvragen om producten in India te verkopen. Ze moeten een Geautoriseerde Indiase Vertegenwoordiger (AIR) aanstellen.",
    },
    {
      question: "Wat is de rol van de AIR in BIS certificering?",
      answer:
        "Een AIR (Geautoriseerde Indiase Vertegenwoordiger) fungeert als liaison tussen de buitenlandse fabrikant en het Indiase BIS. Ze zijn verantwoordelijk voor documentatie, communicatie en naleving van BIS certificeringsvereisten.",
    },
    {
      question: "Hoe kan ik online BIS registratie aanvragen?",
      answer:
        "U kunt online BIS registratie aanvragen via de officiële BIS-portal. Het proces omvat formulierindiening, het uploaden van documenten, testrapporten en betaling van kosten.",
    },
    {
      question: "Welke documenten zijn vereist voor een BIS certificaat?",
      answer:
        "Benodigde documenten zijn onder meer bedrijfslicentie, productspecificaties, productieproces, laboratoriumtestrapporten, fabriekslayout, kwaliteitshandboek en autorisatieformulieren (voor buitenlandse fabrikanten).",
    },
    {
      question: "Hoeveel kost BIS certificering in India?",
      answer:
        "De kosten van BIS certificering zijn afhankelijk van het producttype, testvereisten, schematype (ISI, CRS, FMCS) en of de aanvrager binnenlands of buitenlands is. Kosten omvatten aanvraagkosten, testkosten en inspectiekosten.",
    },
    {
      question:
        "Is het ISI merk verplicht voor alle BIS-gecertificeerde producten?",
      answer:
        "Nee, alleen producten onder het ISI schema zijn verplicht om het ISI merk te dragen. Producten onder CRS of Hallmarking schema's volgen verschillende labelingsprotocollen volgens BIS registratienormen.",
    },
    {
      question:
        "Kan ik BIS certificering krijgen voor milieuvriendelijke producten?",
      answer:
        "Ja, producten die voldoen aan milieustandaarden kunnen BIS certificering krijgen onder het Eco Mark schema, dat zorgt voor naleving van Indiase standaarden voor milieuveiligheid.",
    },
    {
      question:
        "Wat is het verschil tussen BIS certificering en BIS registratie?",
      answer:
        "BIS certificering verwijst meestal naar de goedkeuring onder ISI, FMCS of Hallmarking schema's, terwijl BIS registratie vaak wordt geassocieerd met het CRS schema voor elektronische producten.",
    },
    {
      question: "Wat is het Verplichte Registratieschema (CRS)?",
      answer:
        "CRS is een BIS registratieprogramma voor IT- en elektronische goederen zoals LED-verlichting, mobiele telefoons en power banks. Het zorgt ervoor dat producten voldoen aan veiligheidsgerelateerde Indiase standaarden.",
    },
    {
      question: "Betekenen ISI merk en BIS certificaat hetzelfde?",
      answer:
        "Niet precies. Het ISI merk is het symbool verleend aan gecertificeerde producten onder het BIS certificeringsschema. Een BIS certificaat is het juridische document uitgegeven aan de fabrikant.",
    },
    {
      question: "Kan één BIS licentie meerdere producten dekken?",
      answer:
        "Nee, een aparte BIS licentie is vereist voor elk producttype en elke productielocatie, zelfs als de producten vergelijkbaar zijn.",
    },
    {
      question:
        "Wat gebeurt er als ik producten verkoop zonder BIS certificering?",
      answer:
        "Het verkopen van producten die BIS certificering vereisen zonder een geldige BIS licentie is illegaal in India en kan leiden tot boetes, productterugroepacties of verboden.",
    },
    {
      question: "Hoe lang duurt het om BIS certificering te krijgen?",
      answer:
        "Het BIS certificeringsproces duurt meestal 30 tot 90 dagen, afhankelijk van het producttype, testvereisten en of de aanvrager binnenlands of buitenlands is.",
    },
    {
      question: "Wordt BIS certificering wereldwijd geaccepteerd?",
      answer:
        "Hoewel BIS certificering specifiek is voor India, verhoogt het de wereldwijde geloofwaardigheid door naleving van strenge Indiase standaarden te tonen. Sommige BIS-gecertificeerde producten worden ook geaccepteerd onder wederzijdse erkenningsovereenkomsten.",
    },
    {
      question: "Hoe vaak moet ik mijn BIS licentie vernieuwen?",
      answer:
        "BIS licenties moeten jaarlijks of tweejaarlijks worden vernieuwd. Fabrikanten moeten naleving van Indiase standaarden behouden en toezichtscontroles doorstaan om hun BIS certificaat te vernieuwen.",
    },
  ];

  return (
    <section
      id="faqs"
      className="my-2 scroll-mt-20"
      aria-label="Veel Gestelde Vragen"
    >
      <div className="max-w-[88rem] mx-auto px-4 pt-5 pb-9 md:pb-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          FAQ's – BIS Certificering in India
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
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                  <h3>
                    <span className="mr-2 font-semibold">{index + 1}.</span>
                    {faq.question}
                  </h3>
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

const LanguageSelector = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const languages = [
    {
      code: "en",
      name: "English",
      flag: "https://flagcdn.com/w320/gb.png",
      path: "/what-is-bis-certificate-indian-bis",
    },
    {
      code: "zh",
      name: "Chinese",
      flag: "https://flagcdn.com/w320/cn.png",
      path: "/zh/bis-zheng-shu-shi-shen-me-yin-du-bis",
    },
    {
      code: "de",
      name: "German",
      flag: "https://flagcdn.com/w320/de.png",
      path: "/de/was-ist-das-bis-zertifikat-indisches-bis",
    },
    // {
    //   code: "nl",
    //   name: "Dutch",
    //   flag: "https://flagcdn.com/w320/nl.png",
    //   path: "/nl/wat-is-het-bis-certificaat-indiaas-bis",
    // },
    {
      code: "ja",
      name: "Japanese",
      flag: "https://flagcdn.com/w320/jp.png",
      path: "/ja/bis-shomeisho-toha-nani-ka-indo-no-bis",
    },
    {
      code: "ko",
      name: "Korean",
      flag: "https://flagcdn.com/w320/kr.png",
      path: "/ko/bis-jeungmyeongseo-ga-mueos-indo-bis",
    },
    {
      code: "fr",
      name: "French",
      flag: "https://flagcdn.com/w320/fr.png",
      path: "/fr/quest-ce-que-le-certificat-bis-indien",
    },
    {
      code: "es",
      name: "Spanish",
      flag: "https://flagcdn.com/w320/es.png",
      path: "/es/que-es-el-certificado-bis-bis-indio",
    },
    {
      code: "th",
      name: "Thai",
      flag: "https://flagcdn.com/w320/th.png",
      path: "/th/bis-certificate-khue-a-rai-bis-india",
    },
    {
      code: "id",
      name: "Indonesian",
      flag: "https://flagcdn.com/w320/id.png",
      path: "/id/apa-itu-sertifikat-bis-bis-india",
    },
    {
      code: "it",
      name: "Italian",
      flag: "https://flagcdn.com/w320/it.png",
      path: "/it/cose-il-certificato-bis-indiano",
    },
    {
      code: "ar",
      name: "Arabic",
      flag: "https://flagcdn.com/w320/sa.png",
      path: "/ar/ma-huwa-shahadat-bis-bis-alhind",
    },
    {
      code: "vi",
      name: "Vietnamese",
      flag: "https://flagcdn.com/w320/vn.png",
      path: "/vi/chung-chi-bis-la-gi-bis-an-do",
    },
  ];

  const currentLanguage = languages.find((lang) => lang.path === currentPath);

  return (
    <div className=" bg-white">
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          {/* Heading */}
          <div className="flex flex-col items-center">
            <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
              View This Page in Your Language
            </p>
          </div>

          {/* Language Flags Grid */}
          <div className="w-full max-w-[1400px]">
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
              {languages.map((language) => {
                const isActive = currentPath === language.path;
                return (
                  <Link
                    key={language.code}
                    to={language.path}
                    className="group relative flex flex-col items-center justify-center transition-all duration-300"
                  >
                    {/* Flag */}
                    <div
                      className={`w-[42px] h-[28px] md:w-[64px] md:h-[42px] transition-transform duration-300 flex items-center justify-center ${
                        isActive ? "scale-110" : "group-hover:scale-110"
                      }`}
                    >
                      <img
                        src={language.flag}
                        alt={`${language.name} flag`}
                        className="w-full h-full object-cover rounded-sm border border-neutral-500"
                      />
                    </div>
                    {/* Active Indicator */}
                    {isActive && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#1A8781] rounded-full border-2 border-white"></div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BISCertificationServices = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12  md:pb-16  overflow-x-hidden ">
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
                India's Beste Certificaat Consulent
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
              Plasticafvalbeheer
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
                src={ISIMarkImage}
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

const PointsListWithoutHeading = ({ points, linkMap }) => {
  return (
    <div className="mt-[18px] md:mt-[18px]">
      <ul className="flex flex-col gap-3 list-none">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="bg-green-500/10 p-1.5 rounded-full flex-shrink-0 flex items-center justify-center min-w-[24px] min-h-[24px] mt-0.5">
              <Check size={12} className="text-[#020817]" />
            </div>
            {linkMap && linkMap[point] ? (
              <Link
                to={`/${linkMap[point]}`}
                className="font-geist text-sm md:text-lg text-[#0b6b67] hover:text-[#084c49] underline underline-offset-4 tracking-wide text-left max-w-full leading-loose flex-1"
              >
                {point}
              </Link>
            ) : (
              <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose flex-1">
                {point}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
