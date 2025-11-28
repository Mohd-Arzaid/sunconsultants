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
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ServicesRightSideContentGerman from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentGerman";
import ServiceAuthorGerman from "@/components/manual/ServiceAuthor/ServiceAuthorGerman";
import { ISIMarkAndBISCommonTableGerman } from "../ISIMarkAndBISCommonTable/ISIMarkAndBISCommonTableGerman";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { ClockLoader } from "react-spinners";
import { BoxReveal } from "@/components/magicui/box-reveal";
import FooterGerman from "@/components/manual/Footer/FooterGerman";
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
const BISImage = "/services-images/BIS.jpg";
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";

const ISIMarkGerman = () => {
  return (
    <div className="relative w-full">
      <ISIMarkMetaTags />
      <ISIMarkBreadcrumb />
      <ISIMarkHero />
      <ISIMarkIndex />
      <ISIMarkContent />
      <ISIMarkFaq />
      <div id="product-table">
        <ISIMarkAndBISCommonTableGerman />
      </div>
      <div id="services">
        <ISIMarkServices />
      </div>
      <FooterGerman />
    </div>
  );
};

export default ISIMarkGerman;

const ISIMarkMetaTags = () => {
  const title = "BIS ISI Mark Zertifizierungsprozess, Dokumente, Gebühren";
  const description =
    "Die vom Bureau of Indian Standards ausgestellte ISI-Mark-Zertifizierung wird Produkten verliehen, die strenge Tests und Inspektionen durchlaufen, um die erforderlichen Standards und Vorschriften zu erfüllen";
  const keywords =
    "ISI Mark, ISI Mark Zertifizierung, ISI Mark Zertifikat, ISI Zertifizierung, ISI Zertifikat, ISI Mark Registrierung, ISI Lizenz, BIS ISI Mark, BIS ISI Mark Zertifizierung";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";

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

const ISIMarkBreadcrumb = () => {
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
                    BIS ISI Mark Zertifizierungsprozess, Dokumente, Gebühren
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

const ISIMarkHero = () => {
  return (
    <section className="relative pt-[60px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]">
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
              BIS-Zertifizierung für
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            Indische Hersteller
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            Im Rahmen der Vision "Make in India" hilft die BIS-Zertifizierung
            Herstellern dabei, Produktsicherheit, Qualität und Compliance zu
            gewährleisten. Zertifizieren Sie sich und wachsen Sie Ihre Marke mit
            Vertrauen.
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
        <ISIMarkContactForm />
      </div>
    </section>
  );
};

const ISIMarkContactForm = () => {
  const [loading, setLoading] = useState(false);

  // Function to get page name based on URL
  const getPageName = () => {
    const path = window.location.pathname;
    // Service pages
    if (path.includes("/de/bis-isi-mark-zertifizierung"))
      return "ISI Mark - German Page";
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
        description: "Die Telefonnummer sollte (8-15 Ziffern) enthalten",
      });
      setLoading(false);
      return;
    }

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
        error.response?.data?.message || "Etwas ist schief gelaufen";
      toast({
        variant: "destructive",
        title:
          errorMessage || "Fehler beim Übermitteln der Kontaktformulardetails!",
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
              <span>Senden</span>
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

const ISIMarkIndex = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const stickyRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const SECTIONS = useMemo(
    () => ["overview", "requirement", "documents", "conclusion", "faqs"],
    []
  );

  const MENU_ITEMS = {
    overview: "Übersicht",
    requirement: "Anforderungen",
    documents: "Dokumente",
    conclusion: "Fazit",
    faqs: "FAQs",
  };

  const handleItemClick = (item) => {
    const element = document.getElementById(item);
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

const ISIMarkContent = () => {
  return (
    <>
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}
          <ISIMarkContentLeft />
          {/* Right Side */}
          <ServicesRightSideContentGerman />
        </div>
      </div>
    </>
  );
};

const ISIMarkContentLeft = () => {
  return (
    <div className="flex-1">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        <OverviewSection />
        <div className="service-left-content-divider" />
        <RequirementSection />
        <div className="service-left-content-divider" />
        <DocumentsSection />
        <div className="service-left-content-divider" />
        <ConclusionSection />
        <div className="service-left-content-divider" />
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
      <h1 className="service-left-content-heading-two">
        BIS ISI Mark Zertifizierung für Indische Hersteller
      </h1>
      <div className="flex justify-center mt-[20px] md:mt-[26px]">
        <img
          src="/services-main-images/BIS-Certification-for-Indian-Manufacturers.png"
          alt="Indian Bis Certification Schemes"
          title="BIS License Scheme"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <p className="service-left-content-paragraph">
        In den aktuellen Marktdynamiken hat der Ruf einer Marke im heutigen
        Markt erhebliche Bedeutung, insbesondere das Vertrauen der Verbraucher.
        Jeder Verbraucher möchte die Gewissheit über die Sicherheit und
        Zuverlässigkeit eines Produkts sowie über die während der Herstellung
        ergriffenen Qualitätskontrollmaßnahmen. Das Bureau of Indian Standards
        befasst sich mit diesen Problemen und Bedenken und stellt
        Qualitätsbenchmarks für in Indien verkaufte Produkte sicher. Die ISI
        Mark-Zertifizierung ist eines der renommiertesten Zertifikate, die unter
        BIS vergeben werden.
      </p>
      <p className="service-left-content-paragraph">
        Für inländische Hersteller ist die Erlangung einer BIS ISI Mark
        Zertifizierung nicht nur eine Frage des Erhalts des
        Konformitätszertifikats, sondern auch des Erlangens von Marktakzeptanz,
        Markenvertrauen und Rechtsschutz. Das ISI-Markenzeichen ist weltweit
        anerkannt und stärkt die Glaubwürdigkeit in Indien, wenn es um die
        Herstellung von Elektrogeräten, Baumaterialien, Chemikalien oder
        Haushaltswaren geht.
      </p>
      <p className="service-left-content-paragraph">
        Dieser Artikel zielt darauf ab, die BIS ISI Mark Zertifizierung für
        inländische Hersteller zu untersuchen, mit speziellem Fokus auf
        Bedeutung, Anforderungen, Vorteile und den gesamten Prozess des
        Zertifikatserwerbs.
      </p>
      <h2 className="service-left-content-heading-three">
        Verständnis von BIS und dessen Rolle
      </h2>
      <p className="service-left-content-paragraph">
        Das Bureau of Indian Standards (BIS) ist eine nationale
        Standardisierungs- und Zertifizierungsstelle in Indien unter dem
        Ministerium für Verbraucherangelegenheiten und Öffentlichkeit. Als
        Regulierungsbehörde legt es Qualitätsstandards fest und erhält sie in
        verschiedenen Branchen aufrecht, wie im BIS-Gesetz von 1986
        vorgeschrieben.
      </p>
      <p className="service-left-content-paragraph">
        BIS fungiert als Prüfstelle Dritter, die überprüft, ob ein Produkt den
        spezifischen indischen Standards entspricht. Die BIS-Zertifizierung
        bietet dem Hersteller nicht nur eine gesetzliche Anforderung, sondern
        auch ein Vertrauens- und Glaubwürdigkeitszeichen von den Kunden.{" "}
      </p>
      <h2 className="service-left-content-heading-three">
        Was ist ein ISI-Markenzeichen?
      </h2>
      <p className="service-left-content-paragraph">
        Die ISI-Markenzieichen-Zertifizierung (Indian Standards Institute
        Markenzieichen) ist das älteste und am meisten anerkannte
        Markenzieichen-Zertifikat des Bureau of Indian Standards (BIS) in
        Indien. Die ISI-Zertifizierung konzentriert sich auf die Bestätigung,
        dass ein Produkt die grundlegenden Anforderungen der Qualitätsstandards
        erfüllt, die von BIS in Bezug auf Sicherheit, Qualität, Leistung und
        Zuverlässigkeit festgelegt wurden.{" "}
      </p>
      <p className="service-left-content-paragraph">
        Produkte, die das ISI-Markenzeichen tragen, haben umfassende Labortests
        und Werksinspektionen durchlaufen. Es garantiert, dass ordnungsgemäße
        Qualitätskontrollverfahren während der Produktionsphasen implementiert
        und befolgt werden. Verbraucher sind in der Lage, sichere und
        zuverlässige Produkte zu erhalten und zu verwenden, die mit dem
        ISI-Markenzeichen gekennzeichnet sind. Das ISI-Markenzeichen ist ein
        Instrument für Vertrauen zwischen dem Verbraucher und dem Hersteller,
        und dieses Markenzeichen geht über den Standard hinaus.
      </p>
      <p className="service-left-content-paragraph">
        Einige Beispiele für Produkte, für die eine obligatorische
        ISI-Zertifizierung erforderlich ist, sind wie folgt:{" "}
      </p>
      <PointsListWithoutHeading
        points={[
          "Elektrogeräte aller Art (Bügeleisen, Heizgeräte, Elektrokabel, Kühlschränke, Klimaanlagen)",
          "Zement und Stahl, UPVC-Rohre, Kunststoffschuhe und andere Kunststoffprodukte",
          "Düngemittel, Chemikalien und Säuren",
          "Sicherheitshelme und Brillen sowie einige Arten von Kinderspielzeug",
        ]}
      />
      <p className="service-left-content-paragraph">
        Es gibt mehr als 650 Produkte, die eine obligatorische
        BIS-Zertifizierung benötigen, um das Standardzeichen (ISI Mark) unter
        System I Anhang I des Bureau of Indian Standards zu verwenden. Produkte,
        die unter dem obligatorischen Zertifizierungssystem gehalten werden,
        können ohne ISI-Markenzeichen nicht hergestellt, importiert oder auf dem
        indischen Markt verkauft werden. Die Liste der obligatorischen Produkte
        kann über diesen{" "}
        <a
          href="#product-table"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("product-table")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className="text-blue-900 font-semibold hover:text-[#1A8781] uppercase transition-colors cursor-pointer"
        >
          Produktlistenlink
        </a>{" "}
        aufgerufen werden.{" "}
      </p>
      <h2 className="service-left-content-heading-three">
        Was ist der Unterschied zwischen BIS-Zertifizierung und
        ISI-Markenzeichen?
      </h2>
      <p className="service-left-content-paragraph">
        Obwohl oft verwechselt und als Synonyme verwendet, haben
        BIS-Zertifizierung und ISI-Markenzeichen spezifische Definitionen und
        Zwecke:
      </p>
      <p className="service-left-content-paragraph">
        <strong>BIS-Zertifizierung :</strong> Der Prozess der Genehmigung eines
        Produkts nach der Sicherstellung, dass es den erforderlichen indischen
        Standards entspricht. Es ist der Rahmen, unter dem
        Konformitätsbewertungen verwaltet werden.
      </p>

      <p className="service-left-content-paragraph">
        <strong>ISI-Markenzeichen :</strong> Das Qualitätssymbol oder das
        Standardzeichen, das einem Produkt nach Erhalt der BIS-Zertifizierung
        verliehen wird. Es zeigt an, dass das Produkt vollständig zertifiziert
        wurde und die erforderlichen indischen Standards erfüllt.
      </p>
      <p className="service-left-content-paragraph">
        Auf diese Weise stellt ISI das physische zertifizierbare Engagement dar,
        während BIS-Zertifizierung den benötigten administrativen Rahmen bietet.{" "}
      </p>

      <h2 className="service-left-content-heading-three">
        Warum ist die BIS ISI-Markenzieichen-Zertifizierung für Hersteller
        wichtig?
      </h2>

      <p className="service-left-content-paragraph">
        Die BIS ISI-Markenzieichen-Zertifizierung hat einen bedeutenden Wert für
        inländische Hersteller, wie z.B.:
      </p>

      <p className="service-left-content-paragraph">
        <strong>1. Qualitätssicherung:</strong> Das ISI-Markenzeichen bedeutet,
        dass es strenge Tests und Inspektionen bestanden hat und somit die
        festgelegten höchsten Qualitätsstandards aufrechterhält. Dies wiederum
        erhöht die Zuverlässigkeit und Verlässlichkeit des Produkts und
        minimiert die Chancen von Mängeln.
      </p>

      <p className="service-left-content-paragraph">
        <strong>2. Vertrauen der Verbraucher:</strong> Produkte, die mit dem
        ISI-Markenzeichen gekennzeichnet sind, werden allgemein als sicher und
        wirksam angesehen. Dies trägt zur Markenloyalität und somit zu einer
        robusten und renommierten Marke bei.
      </p>

      <p className="service-left-content-paragraph">
        <strong>3. Marktzugang:</strong> Der indische Markt hat eine Fülle von
        Artikeln, die streng verboten sind, wenn man kein gültiges
        ISI-Zertifikat besitzt. In solchen Fällen dient das ISI-Markenzeichen
        als Zugangstor zur Erleichterung des Verkaufs.
      </p>

      <p className="service-left-content-paragraph">
        <strong>4. Marktzulassung erlangen:</strong> In einer hochkompetitiven
        Umgebung werden ISI-zertifizierte Produkte als positiv angesehen und
        haben somit einen höheren Wettbewerbsvorteil gegenüber nicht
        zertifizierten.
      </p>

      <p className="service-left-content-paragraph">
        <strong>5. Regulatorische Compliance:</strong> BIS-Standards sind so,
        dass ein Hersteller, dessen Produkte solchen Standards entsprechen,
        einen reibungslosen, ungehinderten Betrieb ohne rechtliche Komplexität
        hat.
      </p>

      <p className="service-left-content-paragraph">
        <strong>6. Exportförderung:</strong> Produkte, die ISI-zertifiziert sind
        und somit einen starken Markenruf besitzen, werden wahrscheinlicher von
        ausländischen Märkten begünstigt aufgrund der Wahrnehmung, dass sie
        hochwertig sind und globale Standards erfüllen.
      </p>

      <p className="service-left-content-paragraph">
        <strong>7. Sicherheit der Verbraucher:</strong> Jedes Produkt mit
        ISI-Zertifizierung garantiert die Sicherheit der Verbraucher vor jeder
        potenziellen Gefahr, Unfällen oder schlechter Produktleistung.
      </p>

      <p className="service-left-content-paragraph">
        <strong>8. Qualitätskontrolle:</strong> Die Notwendigkeit, konstant
        Prüfungen und Kontrollen durchzuführen, garantiert, dass die Hersteller
        konstante Qualität für alle produzierten Chargen erreichen können.
      </p>
    </div>
  );
};

const RequirementSection = () => {
  return (
    <div id="requirement" className="flex flex-col scroll-mt-20">
      {/* Requirement */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">
          Anforderungen
        </span>
        <Separator className="service-left-content-separator" />
      </div>
      <h2 className="service-left-content-heading-two">
        Grundlegende Anforderungen für die BIS ISI Mark Zertifizierung
      </h2>
      <p className="service-left-content-paragraph">
        Um die BIS-Zertifizierung zu erhalten, müssen inländische Hersteller die
        folgenden Hauptverpflichtungen erfüllen.
      </p>
      <PointsListWithoutHeading
        points={[
          "Es muss Einhaltung der Indian Standard Specification (ISS) bestehen.",
          "Eine Lizenz wird nur an Hersteller ausgestellt und gewährt, nicht an Händler oder Einzelhändler.",
          "Es besteht die Notwendigkeit, separate Anträge für jede Werksstandort für die Zertifizierung einzureichen.",
          "Werke müssen qualifiziertes Personal und hauseigene Testlabors besitzen.",
          "Alle Produktionsmodi müssen in derselben Produktionseinheit von Rohstoff bis zur finalen Verpackung durchgeführt werden (Outsourcing muss vorher von BIS genehmigt werden).",
          "Technische Anleitung wird in Produkthandbüchern bereitgestellt, die Standards für Inspektion, Tests und notwendige Dokumentation detaillieren.",
        ]}
      />
      <h2 className="service-left-content-heading-three">
        Prozess der BIS ISI Zertifizierung für Inländische Hersteller
      </h2>
      <p className="service-left-content-paragraph">
        Die Sicherung der BIS-Zertifizierung ist ein mehrstufiger Prozess. Es
        gibt zwei Hauptverfahren, um den BIS-Zertifizierungsprozess anzugehen:
        Normalverfahren und Vereinfachtes Verfahren.{" "}
      </p>
      <h3 className="service-left-content-heading-three">
        1. Normalverfahren (60-65 Tage)
      </h3>
      <PointsListWithoutHeading
        points={[
          "Der Hersteller richtet hauseigene Labors ein und bringt die Produkte in Übereinstimmung mit den indischen Standards.",
          "Antrag zusammen mit der erforderlichen Dokumentation wird eingereicht.",
          "Werksinspektion durch BIS-Beamte.",
          "Tests von Produkten in BIS-genehmigten Labors.",
          "Lizenz wird erteilt, wenn alle Bedingungen erfüllt sind.",
        ]}
      />

      <h3 className="service-left-content-heading-three">
        2. Vereinfachtes Verfahren (35-40 Tage)
      </h3>
      <PointsListWithoutHeading
        points={[
          "Hersteller reicht Dokumente vorgetesteter Produkte von Labors ein, die von BIS anerkannt sind.",
          "Antrag zusammen mit der Gebühr wird eingereicht.",
          "Dokumentenprüfung und Werksinspektion.",
          "Endtests und Lizenzvergabe in einem Zeitraum von 35-40 Tagen.",
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
        <span className="service-left-content-index-heading">
          Erforderliche Dokumente
        </span>
        <Separator className="service-left-content-separator" />
      </div>
      <h2 className="service-left-content-heading-two">
        Dokumente, die für die ISI Mark Zertifizierung erforderlich sind
      </h2>
      <p className="service-left-content-paragraph">
        Die folgenden Dokumente müssen von den Herstellern vorgelegt werden:
      </p>
      <PointsListWithoutHeading
        points={[
          "1. Ausgefülltes Antragsformular (Formular V oder VI je nach System)",
          "2. Handelsregistrierungszertifikat (z.B. Udyam Registrierung, MSME, GST Zertifikat)",
          "3. Werkslizenz oder Gemeindehandelslizenz",
          "4. Liste der Fertigungsmaschinen",
          "5. Fertigungsprozess-Flussdiagramm",
          "6. Grundriss des Fertigungsgebäudes",
          "7. Details des hauseigenen Qualitätskontrollpersonals",
          "8. Details der Testausrüstung",
          "9. Vereinbarung der technischen Zusammenarbeit (falls zutreffend)",
          "10. Vollmacht/Autorisierungsschreiben",
          "11. Markenname-Autorisierungsschreiben (falls unter einer anderen Marke beantragt)",
          "12. Testbericht von einem BIS-genehmigten Labor",
          "13. Rechnung der Rohstoffbeschaffung",
          "14. Fotografien von Produkt und Verpackung",
          "15. Konformitätserklärung zu Standards",
          "16. Verpflichtung bezüglich Nicht-Standard-Produkten",
        ]}
      />
      <h3 className="service-left-content-heading-three">
        Vorteile der BIS ISI Mark Zertifizierung
      </h3>
      <p className="service-left-content-paragraph">
        Für indische Hersteller bietet die Erlangung der BIS ISI Mark
        Zertifizierung spezifische Vorteile:
      </p>
      <PointsListWithoutHeading
        points={[
          "Länderweite Genehmigung: Hersteller haben die Erlaubnis, zertifizierte Produkte im ganzen Land zu verkaufen.",
          "Strafen vermeiden: Die Einhaltung von BIS-Standards vermeidet hohe Geldstrafen und rechtliche Probleme.",
          "Erhöhte Umsätze: Die Nachfrage ist höher für zertifizierte Produkte.",
          "Exportpotenzial: Bestimmte ausländische Märkte identifizieren ISI als einen Exzellenzstandard.",
          "Fokus auf Qualität: Ein zertifiziertes Unternehmen zeigt Engagement für die Prinzipien qualitativer Produktion.",
        ]}
      />

      <h3 className="service-left-content-heading-three">
        {" "}
        Rücknahme der BIS-Lizenz{" "}
      </h3>
      <p className="service-left-content-paragraph">
        Die Lizenz zur Zertifizierung ist das alleinige Eigentum der BIS-Behörde
        und kann eine solche Lizenz aufheben, wenn:
      </p>
      <PointsListWithoutHeading
        points={[
          "Es gibt einen Rückgang in der Qualität der zertifizierten Produkte.",
          "Es gibt einen unsachgemäßen Gebrauch des ISI-Markenzeichens durch die Hersteller.",
          "Der Hersteller folgt einem bestimmten Aspekt der Lizenz nicht.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Gemäß Regulation 11 des BIS (Konformitätsbewertung) Regulations, 2018,
        besteht kein Zweifel, dass die Lizenz ausgesetzt oder gekündigt werden
        kann wegen Nichterfüllung der festgelegten Vorschriften.
      </p>
    </div>
  );
};

const ConclusionSection = () => {
  return (
    <div id="conclusion" className="flex flex-col scroll-mt-20">
      {/* Conclusion */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Fazit</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">Fazit</h2>

      <p className="service-left-content-paragraph">
        Für die BIS ISI Mark Zertifizierung gilt wiederum, dass es mehr als nur
        bürokratische Schritte für Hersteller in Indien hat. Es hilft beim
        Aufbau eines positiven Rufs und beim Erreichen nachhaltigen Wachstums im
        Geschäft. Wenn die BIS-Standards eingehalten werden, gibt es
        zertifizierte Gewissheit, dass die Produkte zuverlässig und
        verkaufsbereit sind.
      </p>

      <p className="service-left-content-paragraph">
        Zusammenfassend ist das ISI-Markenzeichen mehr als nur gesetzliche
        Compliance geworden, es ist zu einem Zeichen der Gewissheit in einer
        Geschäftsumgebung geworden, in der Vertrauen schwer zu finden ist. Es
        ist ein Zeichen von Wettbewerbsfähigkeit auf dem Markt zusammen mit
        Compliance zu Vorschriften.
      </p>

      <p className="service-left-content-paragraph">
        Egal, ob Sie Elektronikprodukte, Bauelemente oder andere Produkte zum
        Verkauf herstellen, die BIS ISI-Zertifizierung stellt sicher, dass Ihre
        Produkte mit Indiens höchsten Qualitätsstandards übereinstimmen und
        gleichzeitig Ihr Ansehen sowie Ihre Verbraucher schützen.
      </p>
    </div>
  );
};

const ISIMarkFaq = () => {
  const faqData = [
    {
      question: "Was ist die BIS-Zertifizierung und warum ist sie wichtig?",
      answer:
        "Die BIS-Zertifizierung wird vom Bureau of Indian Standards ausgestellt, um sicherzustellen, dass Produkte indischen Sicherheits- und Qualitätsstandards entsprechen. Sie ist wichtig für gesetzliche Compliance, Verbrauchervertrauen und Marktakzeptanz.",
    },
    {
      question:
        "Was ist der Unterschied zwischen BIS-Lizenz und ISI-Markenzeichen?",
      answer:
        "Die BIS-Lizenz ist ein rechtliches Dokument, das einen Hersteller ermächtigt, das ISI-Markenzeichen zu verwenden. Das ISI-Markenzeichen ist das sichtbare Label auf Produkten, das die BIS-Zertifizierung anzeigt.",
    },
    {
      question: "Wie lange dauert es, die BIS-Zertifizierung zu erhalten?",
      answer:
        "Typischerweise 6-10 Wochen je nach Produkttyp, Testanforderungen und Audit-Ergebnissen",
    },
    {
      question: "Wie lange ist die Gültigkeitsdauer einer BIS-Lizenz?",
      answer:
        "Normalerweise 1 bis 2 Jahre, danach muss sie erneuert werden. Die Erneuerung sollte mindestens 30 Tage vor Ablauf eingeleitet werden.",
    },
    {
      question: "Wie hoch sind die Kosten für die BIS-Zertifizierung?",
      answer:
        "Die Kosten variieren, können aber zwischen ₹25.000 und ₹100.000+ liegen, einschließlich Tests, Audit und Lizenzgebühren.",
    },
    {
      question: "Ist die BIS-Zertifizierung für alle Produkte obligatorisch?",
      answer:
        "Nein. Sie ist nur für Produkte obligatorisch, die unter System 1 der BIS-Zertifizierung aufgeführt sind.",
    },
    {
      question:
        "Wie kann ich den richtigen IS-Standard für mein Produkt finden?",
      answer:
        "Besuchen Sie die BIS-Website oder konsultieren Sie mit BIS-anerkannten Testlabors und Beratern, um den anwendbaren Standard zu identifizieren.",
    },
    {
      question:
        "Können ausländische Hersteller eine BIS-Zertifizierung beantragen?",
      answer:
        "Ja. Über das Foreign Manufacturers Certification Scheme (FMCS) können Übersee-Unternehmen BIS-Lizenzen für die Verwendung des ISI-Markenzeichens erhalten.",
    },
    {
      question: "Was passiert, wenn mein Produkt beim BIS-Test scheitert?",
      answer:
        "Sie müssen die Probleme korrigieren und erneut zum Test einreichen. Anträge können ausgesetzt werden, bis erfolgreiche Compliance nachgewiesen wird.",
    },
    {
      question: "Wird die BIS-Zertifizierung für Exporte benötigt?",
      answer:
        "Während nicht immer obligatorisch für Exporte, erhöht die BIS-Zertifizierung die Glaubwürdigkeit und kann internationale Käufer oder Regulierungsbehörden zufriedenstellen.",
    },
  ];

  return (
    <section
      id="faqs"
      className="my-2 scroll-mt-20"
      aria-label="Häufig gestellte Fragen"
    >
      <div className="max-w-[88rem] mx-auto px-4 pt-5 pb-9 md:pb-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          Häufig gestellte Fragen
        </h2>

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

const ISIMarkServices = () => {
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
                src={BISImage}
                alt="BIS Logo"
                title="BIS Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS Mark (ISI Lizenz) für Ausländische Hersteller
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
              CDSCO-Registrierungszertifizierung
            </p>
          </Link>

          <Link
            to="/what-is-crs-bis-or-crs-registration"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={BISCRS}
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
                src={PlasticWasteManagement}
                alt="PlasticWasteManagement"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Kunststoffabfall-Management
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-epr-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={EPRCertificate}
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
                src={LMPC}
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
                src={BISImage}
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
                src={ISIMarkImage}
                alt="ISIMark"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              ISI MARK (BIS) für Indische Hersteller
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
