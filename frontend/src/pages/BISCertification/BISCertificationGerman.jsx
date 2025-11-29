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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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

const BISCertificationGerman = () => {
  return (
    <div className="relative w-full">
      <BISCertificationMetaTags />
      <BISCertificationBreadcrumb />
      <BISCertificationHero />
      <BISCertificationIndex />
      <BISCertificationContent />
      <BISCertificationFaq />
      <ISIMarkAndBISCommonTableGerman />
      <div id="services">
        <BISCertificationServices />
      </div>
      <FooterGerman />
    </div>
  );
};

export default BISCertificationGerman;

const BISCertificationMetaTags = () => {
  const title = "BIS-Zertifizierung: Arten, Prozess, Dokumente, Gebühren";
  const description =
    "Die BIS-Zertifizierung stellt sicher, dass Produkte den indischen Normen entsprechen und sicher, zuverlässig und qualitativ hochwertig sind.";
  const keywords =
    "BIS Zertifizierung, BIS Registrierung, ISI Zeichen, BIS Verfahren, BIS Kosten, Indische Normen, BIS Indien, BIS Lizenz";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Leiter Operations bei Sun Certification India";

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
                    <Link to="/">Startseite</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    BIS-Zertifizierung in Indien für Importeure und Hersteller
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
      aria-label="BIS Zertifizierung Hero"
    >
      <div className="hidden md:block absolute inset-0 rounded-bl-full z-10 transform translate-x-1/2 custom-radial-gradient-cdsco"></div>

      <div
        className="absolute top-[20%] z-[10] right-[15%] w-[20px] h-[20px] rounded-full bg-[#1A8781]/30 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-[84rem] gap-[40px] md:gap-[90px] flex flex-col md:flex-row items-center justify-center h-full w-full mx-auto px-4 md:px-0">
        <article className="relative flex flex-col gap-6 md:gap-8 w-full md:w-[533px] items-start">
          <div className="inline-flex items-center">
            <div className="h-[3px] w-[40px] bg-[#1A8781] mr-4"></div>
            <span className="text-[#1A8781] font-poppins text-sm font-medium tracking-wider uppercase">
              Zertifizierte Expertise
            </span>
          </div>

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              BIS-Zertifizierung Indien
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            für Importeure und Hersteller
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            Die BIS-Zertifizierung stellt Qualität und Sicherheit von Produkten
            in Indien sicher. Sie ist für viele Produkte verpflichtend und
            erfordert Prüfungen, Dokumentation und Freigaben.
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
                Dienstleistungen ansehen
              </span>
            </div>
          </nav>
        </article>

        <BISCertificationContactForm />
      </div>
    </section>
  );
};

const BISCertificationContactForm = () => {
  const [loading, setLoading] = useState(false);

  const getPageName = () => {
    const path = window.location.pathname;
    if (path.includes("/de/was-ist-das-bis-zertifikat-indisches-bis"))
      return "BIS Zertifizierung - Deutsche Seite";
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

    const nameRegex = /^[a-zA-Z\s.'-]{2,50}$/;
    if (!nameRegex.test(fullName)) {
      toast({
        variant: "destructive",
        title: "Bitte einen gültigen vollständigen Namen eingeben.",
        description: "Der Name darf nur Buchstaben und Leerzeichen enthalten.",
      });
      setLoading(false);
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "Bitte eine gültige E-Mail-Adresse eingeben.",
        description: "Prüfen Sie das Format Ihrer E-Mail-Adresse.",
      });
      setLoading(false);
      return;
    }

    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "Bitte eine gültige Telefonnummer eingeben.",
        description: "Telefonnummer muss 8–15 Ziffern haben.",
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
          "Vielen Dank für Ihre Anfrage. Unser Team meldet sich in Kürze.",
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
        error.response?.data?.message || "Etwas ist schiefgelaufen";
      toast({
        variant: "destructive",
        title: errorMessage || "Absenden des Formulars fehlgeschlagen!",
        description:
          "Bitte prüfen Sie Ihre Angaben und versuchen Sie es erneut.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="z-20 w-full md:w-[580px] h-auto md:h-[435px] flex flex-col">
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-poppins font-semibold text-[18px] md:text-[20px] text-[#008080]">
          Kontakt
        </span>
        <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
      </div>

      <h3 className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
        Termin vereinbaren
      </h3>

      <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
        Möchten Sie unser Team kontaktieren und einen Anruf planen?
        <span className="text-black"> Jetzt anfragen</span>
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
            placeholder="Telefonnummer *"
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
            placeholder="Benötigte Zertifizierung *"
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
              <span>Termin buchen</span>
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
    overview: "Überblick",
    schemes: "Programme",
    process: "Prozess",
    documents: "Dokumente",
    cost: "Kosten",
    air: "AIR",
    conclusion: "Fazit",
    faqs: "FAQs",
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
      <div className="md:hidden flex items-center justify-between px-4 h-20">
        <div className="text-base font-semibold font-geist tracking-wider uppercase text-blue-900">
          {MENU_ITEMS[activeSection]}
        </div>
        <button
          ref={toggleButtonRef}
          onClick={toggleMobileMenu}
          className="p-2 rounded-md hover:bg-blue-100 transition-colors"
          aria-label="Menü umschalten"
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
        <BISCertificationContentLeft />
        <ServicesRightSideContentGerman />
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
        <ServiceAuthorGerman />
      </div>
    </div>
  );
};

const OverviewSection = () => {
  return (
    <div id="overview" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Überblick</span>
        <Separator className="service-left-content-separator" />
      </div>
      <h1 className="service-left-content-heading-two">
        BIS ISI-Mark-Zertifizierung für indische Hersteller
      </h1>

      <div className="flex justify-center mt-[20px] md:mt-[26px]">
        <img
          src="/services-main-images/IndianBisCertification.png"
          alt="Indische BIS-Zertifizierung"
          title="BIS-Zertifikat für indische Hersteller"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <h2 className="service-left-content-heading-three">
        Einführung: Warum die BIS-Zertifizierung wichtig ist
      </h2>

      <p className="service-left-content-paragraph">
        Stellen Sie sich einen Hersteller aus Deutschland vor, der ein
        einzigartiges elektronisches Gerät entwickelt hat und es auf dem
        dynamischen indischen Markt verkaufen möchte. Obwohl das Gerät sicher
        ist und bereits europäische Zulassungen hat, wird es am indischen Hafen
        aufgehalten. Warum? Weil für das Produkt eine BIS-Zertifizierung
        erforderlich ist, die für den Verkauf vieler Elektronikprodukte in
        Indien entscheidend ist.
      </p>

      <p className="service-left-content-paragraph">
        Viele internationale und indische Hersteller stehen jedes Jahr vor
        ähnlichen Situationen. Für Verbraucher steht das BIS-Zeichen nicht nur
        für ein Logo, sondern für Vertrauen: Das Produkt wurde auf Qualität,
        Sicherheit und Zuverlässigkeit geprüft. Für Unternehmen ist es das Tor
        zu einem der größten Märkte der Welt.
      </p>

      <p className="service-left-content-paragraph">
        Dieser Leitfaden beantwortet alle Fragen zur BIS-Zertifizierung:
        Notwendigkeit, Prozesse, Vorteile, Programme, Kosten und praktische
        Navigation für ausländische und inländische Hersteller.
      </p>

      <h2 className="service-left-content-heading-three">
        Was ist die BIS-Zertifizierung für Hersteller und Importeure?
      </h2>

      <p className="service-left-content-paragraph">
        Die BIS-Zertifizierung ist eine Qualitäts- und
        Sicherheitszertifizierung, die vom Bureau of Indian Standards (BIS), der
        nationalen Normungsorganisation Indiens, vergeben wird. Sie stellt
        sicher, dass ein Produkt in Leistung, Sicherheit und Qualität den
        indischen Normen (IS) entspricht.
      </p>
      <p className="service-left-content-paragraph">
        Erfüllt ein Produkt diese Anforderungen, stellt das BIS eine Lizenz bzw.
        ein Zertifikat aus. Produkte dürfen das ISI-Zeichen (für inländische
        Programme) oder unter dem CRS-Programm eine Registrierungsnummer tragen.
      </p>
      <p className="service-left-content-paragraph">
        Für viele Hersteller und Importeure ist die BIS-Zertifizierung
        verpflichtend. Sie deckt zahlreiche Produktgruppen ab: Elektrogeräte,
        Baustoffe, verpacktes Trinkwasser, Elektronik wie Mobiltelefone,
        LED-Leuchten, Powerbanks sowie Schmuck (über Hallmarking) und mehr. Ohne
        BIS-Anerkennung dürfen diese Produkte in Indien nicht verkauft oder
        vertrieben werden.
      </p>

      <h2 className="service-left-content-heading-three">
        Kurzer Überblick zur BIS in Indien
      </h2>

      <p className="service-left-content-paragraph">
        Das Bureau of Indian Standards (BIS) wurde 1986 gegründet und löste die
        1947 ins Leben gerufene Indian Standards Institution (ISI) ab. Heute
        agiert es als Qualitätswächter der Normenlandschaft in Indien, angepasst
        an internationale Best Practices und indische Rahmenbedingungen.
      </p>

      <h3 className="service-left-content-heading-three">Meilensteine</h3>

      <PointsListWithoutHeading
        points={[
          "1947: Gründung der ISI zur Unterstützung von Qualitätskontrollen nach der Unabhängigkeit.",
          "1955: Einführung des ISI-Zeichens – eines der bekanntesten Qualitätssymbole Indiens.",
          "1986: BIS-Gesetz verabschiedet – ISI wird vom Bureau of Indian Standards abgelöst.",
          "2016/2018: Erweiterung der Zuständigkeiten des BIS, u. a. Hallmarking und Produktschemata.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Heute stellt das BIS die Sicherheit, Zuverlässigkeit und
        Standardisierung tausender Produkte für Anwender in ganz Indien sicher.
      </p>

      <h2 className="service-left-content-heading-three">
        Warum ist die BIS-Zertifizierung in Indien verpflichtend?
      </h2>
      <p className="service-left-content-paragraph">
        Der indische Markt ist riesig, dynamisch und preissensibel. Diese
        Offenheit macht ihn zugleich anfällig für minderwertige und unsichere
        Waren. Hier fungiert die BIS-Zertifizierung als Schutzmechanismus.
      </p>
      <PointsListWithoutHeading
        points={[
          "Verbrauchersicherheit – Schutz vor Unfällen, Gesundheitsrisiken und Täuschung.",
          "Marktregulierung – verhindert das Eindringen nicht konformer Produkte.",
          "Vertrauen – stärkt die Glaubwürdigkeit nationaler und internationaler Produkte.",
          "Globale Ausrichtung – hilft ausländischen Unternehmen bei der Anpassung an Indiens Regularien.",
          "Fairer Wettbewerb – Qualität als gemeinsamer Maßstab für alle Marktteilnehmer.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Beispielsweise ist die BIS-Zertifizierung für abgefülltes Trinkwasser
        essenziell, um Gesundheitsrisiken zu vermeiden. Ebenso verhindern
        Standards für Heizgeräte und Toaster Brände. Mit der BIS-Zertifizierung
        adressiert die Regierung diese Risiken.
      </p>
    </div>
  );
};

const ProcessSection = () => {
  return (
    <div id="process" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Prozess</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Ablauf der BIS-Zertifizierung
      </h2>

      <p className="service-left-content-paragraph">
        Der Prozess der BIS-Zertifizierung folgt einem strukturierten Ablauf:
      </p>

      <PointsListWithoutHeading
        points={[
          "Relevante Norm identifizieren: Auswahl der anwendbaren IS (Indian Standard).",
          "Antragstellung: Einreichung bei BIS inkl. erforderlicher Unterlagen.",
          "Produktprüfung: Tests in BIS-anerkannten Laboren.",
          "Werksinspektion: Prüfung der Fertigungsstätte durch BIS-Beamte.",
          "BIS-Lizenz: Erteilung nach erfolgreicher Bewertung.",
          "Überwachung: Laufende Konformität und Lizenzpflege.",
        ]}
      />
    </div>
  );
};

const DocumentsSection = () => {
  return (
    <div id="documents" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Dokumente</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Erforderliche Unterlagen für die BIS-Zertifizierung
      </h2>

      <p className="service-left-content-paragraph">
        Eine vollständige Dokumentation sorgt für einen reibungslosen Ablauf.
        Wichtig sind:
      </p>

      <PointsListWithoutHeading
        points={[
          "Gewerbeanmeldung oder Handelsregisterauszug.",
          "Flussdiagramm des Fertigungsprozesses.",
          "Liste der Maschinen und Anlagen.",
          "Produktangaben und technische Spezifikationen.",
          "Prüfberichte aus BIS-anerkannten Laboren.",
          "Qualitätskontrollhandbuch.",
          "Marken-/Warenzeichenurkunde.",
        ]}
      />

      <h3 className="service-left-content-heading-three mt-5">
        Für ausländische Hersteller:
      </h3>

      <PointsListWithoutHeading
        points={[
          "Benennung eines Autorisierten Indischen Vertreters (AIR).",
          "Nachweise zur Bevollmächtigung und Identitätsdokumente.",
        ]}
      />
    </div>
  );
};

const CostSection = () => {
  return (
    <div id="cost" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Kosten</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Kosten der BIS-Zertifizierung
      </h2>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                Kostenposition
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                Details
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Antragsgebühr
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Einmalige, nicht erstattungsfähige Gebühr abhängig vom
                Produkttyp
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Prüfkosten
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Je nach Komplexität; zahlbar an BIS-anerkannte Labore
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Jährliche Lizenzgebühr
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Jährlich zur Aufrechterhaltung der BIS-Lizenz
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Inspektions-/Auditgebühren
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Bei Werksbesuchen durch BIS (inkl. ggf. internationaler
                Reisekosten)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Beratungskosten (optional)
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Optional für End-to-End-Compliance-Unterstützung
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
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">AIR</span>
        <Separator className="service-left-content-separator" />
      </div>
      <h2 className="service-left-content-heading-two">
        Rolle des Autorisierten Indischen Vertreters (AIR)
      </h2>

      <p className="service-left-content-paragraph">
        Für ausländische Hersteller ist der Autorisierte Indische Vertreter
        (AIR) entscheidend.
      </p>

      <PointsListWithoutHeading
        points={[
          "Kommuniziert mit dem BIS.",
          "Sammelt und reicht Unterlagen ein, unterstützt den Inspektionsprozess.",
          "Sichert die Compliance vor, während und nach der Zertifizierung.",
          "Muss indischer Staatsbürger oder eine Organisation mit registrierter Adresse in Indien sein.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Ohne AIR ist die Erlangung einer BIS-Zertifizierung für ausländische
        Unternehmen nicht möglich.
      </p>
    </div>
  );
};

const ConclusionSection = () => {
  return (
    <div id="conclusion" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Fazit</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">Fazit</h2>

      <p className="service-left-content-paragraph">
        Die BIS-Zertifizierung ist für die Geschäftstätigkeit in Indien
        unerlässlich. Sie ist nicht mehr optional, sondern entscheidend für
        Erfolg und Vertrauen. Für Hersteller und Importeure schafft sie ein
        sicheres, gesetzeskonformes Umfeld und minimiert Rechtsrisiken. Mit dem
        BIS‑Zeichen ist das Vertrauen der Verbraucher gewährleistet.
      </p>

      <p className="service-left-content-paragraph">
        Indien ist eine der am schnellsten wachsenden Volkswirtschaften. Der
        Marktzugang eröffnet enormes Wachstumspotenzial. Unabhängig davon, ob
        Sie in Indien oder im Ausland produzieren – die BIS‑Lizenz ist
        notwendig, um Produkte in Indien herzustellen oder zu verkaufen. Sie ist
        eine Investition in Sicherheit, Vertrauen, Reputation, Glaubwürdigkeit
        und nachhaltiges Wachstum.
      </p>
    </div>
  );
};

const SchemesSection = () => {
  return (
    <div id="schemes" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Programme</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        BIS-Zertifizierungsprogramme
      </h2>

      <p className="service-left-content-paragraph">
        Das BIS bietet verschiedene Zertifizierungsprogramme für Branchen und
        Produkttypen mit jeweils spezifischem Fokus.
      </p>

      <PointsListWithoutHeading
        points={[
          "FMCS – Foreign Manufacturers Certification Scheme",
          "ISI‑Markenprogramm (inländische Hersteller)",
          "Scheme X unter dem indischen BIS",
          "CRS – Compulsory Registration Scheme",
          "Hallmarking (Schmuck & Edelmetalle)",
          "Eco Mark Zertifizierung",
          "MSCS – Management Systems Certification Scheme",
          "LRS – Lab Recognition Scheme",
        ]}
        linkMap={{
          "FMCS – Foreign Manufacturers Certification Scheme":
            "a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis",
          "ISI‑Markenprogramm (inländische Hersteller)":
            "a-guide-to-bis-certification-indian-bis",
          "Scheme X unter dem indischen BIS":
            "indian-bis-certification-under-scheme-x",
          "CRS – Compulsory Registration Scheme":
            "what-is-crs-bis-or-crs-registration",
        }}
      />

      <h3 className="service-left-content-heading-three">
        ISI‑Markenprogramm (inländische Hersteller)
      </h3>

      <p className="service-left-content-paragraph">
        Für indische Hersteller ist eine BIS‑Lizenz Voraussetzung, um Produkte
        rechtmäßig im Land zu verkaufen. Sie bescheinigt die Erfüllung der
        relevanten indischen Normen hinsichtlich Qualität, Sicherheit und
        Leistung. Dazu gehören Werksaudits, Produktprüfungen und
        Konformitätsbewertungen. Nach erfolgreicher Prüfung dürfen Produkte das
        ISI‑Zeichen tragen.
      </p>

      <p className="service-left-content-paragraph">
        Ob Elektronik, Stahl, Zement, Kunststoff oder Baumaterialien – die
        BIS‑Zertifizierung ist essenziell für den Marktzugang. Sie stärkt das
        Vertrauen, verbessert die Reputation, erleichtert die Teilnahme an
        Ausschreibungen und eröffnet neue Geschäftschancen. Fehlende
        BIS‑Konformität kann dagegen zu Bußgeldern, Rückrufen oder
        Verkaufsverboten führen.
      </p>

      <h3 className="service-left-content-heading-three">
        FMCS – Foreign Manufacturers Certification Scheme
      </h3>

      <p className="service-left-content-paragraph">
        Das FMCS richtet sich an ausländische Hersteller, die Produkte in Indien
        vertreiben möchten. Es stellt sicher, dass im Ausland gefertigte
        Produkte die indischen Normen erfüllen. Wie bei inländischen Herstellern
        ist eine BIS‑Lizenz nötig, um das ISI‑Zeichen zu verwenden. Die Vergabe
        erfolgt nach Werksinspektion und strengen Produkttests.
      </p>

      <p className="service-left-content-paragraph">
        Ausländische Hersteller müssen einen Autorisierten Indischen Vertreter
        (AIR) benennen, der die Kommunikation mit dem BIS führt, Anträge
        einreicht und Fristen sowie Verpflichtungen steuert.
      </p>

      <h3 className="service-left-content-heading-three">Scheme X</h3>

      <p className="service-left-content-paragraph">
        Scheme X (Omnibus Technical Regulation) vereinfacht die
        Konformitätsbewertung insbesondere für mechanische und elektrische
        Industrien, reduziert Dokumentation und Durchlaufzeiten und
        gewährleistet zugleich die Einhaltung der indischen Normen.
      </p>

      <p className="service-left-content-paragraph">
        Abgedeckte Produkte sind u. a. Pumpen, Krane, Transformatoren,
        Werkzeugmaschinen und weitere Maschinenbauprodukte. Ziel ist schnellere
        Markteinführung bei gleichbleibender Sicherheit und Qualität.
      </p>

      <h3 className="service-left-content-heading-three">
        Compulsory Registration Scheme (CRS)
      </h3>

      <p className="service-left-content-paragraph">
        Das CRS reguliert IT‑ und Elektronikprodukte (z. B. LED‑Leuchten,
        Mobiltelefone, Laptops, Powerbanks). Im Gegensatz zum ISI‑Programm
        erhalten Produkte keine ISI‑Marke, sondern eine
        BIS‑Registrierungsnummer. Tests erfolgen in BIS‑anerkannten Laboren,
        danach erfolgt die Registrierung.
      </p>

      <h3 className="service-left-content-heading-three">Hallmarking</h3>

      <p className="service-left-content-paragraph">
        Für Gold‑ und Silberschmuck ist Hallmarking in Indien verpflichtend. Die
        Prüfung erfolgt in BIS‑zugelassenen Assaying & Hallmarking Centres
        (AHC). Händler benötigen eine BIS‑Lizenz und unterliegen Prüfungen und
        Audits.
      </p>

      <h3 className="service-left-content-heading-three">Eco Mark</h3>

      <p className="service-left-content-paragraph">
        Eco Mark kennzeichnet Produkte, die Umweltkriterien erfüllen (z. B.
        Emissionen, Toxizität, Recyclingfähigkeit). Es fördert nachhaltige
        Produktion und stärkt das Vertrauen von Verbrauchern und
        Geschäftspartnern.
      </p>

      <h3 className="service-left-content-heading-three">
        MSCS – Management Systems Certification Scheme
      </h3>

      <p className="service-left-content-paragraph">
        MSCS zertifiziert Managementsysteme (z. B. ISO 9001, ISO 14001, ISO
        45001) und stärkt Reputation, Compliance und kontinuierliche
        Verbesserung. Regelmäßige Audits sorgen für Nachhaltigkeit und
        Glaubwürdigkeit.
      </p>

      <h3 className="service-left-content-heading-three">
        LRS – Lab Recognition Scheme
      </h3>

      <p className="service-left-content-paragraph">
        LRS stellt die Kompetenz von Prüflaboren sicher (u. a. nach ISO/IEC
        17025). Nur Berichte anerkannter Labore werden für BIS‑Zertifizierungen
        akzeptiert. Regelmäßige Überprüfungen sichern Qualität und
        Vergleichbarkeit.
      </p>

      <h3 className="service-left-content-heading-three">
        Produkte mit BIS‑Pflicht
      </h3>

      <p className="service-left-content-paragraph">Beispiele:</p>

      <PointsListWithoutHeading
        points={[
          "Elektrik & Elektronik – LED‑Leuchten, Mobiltelefone, Netzteile, Laptops.",
          "Baumaterialien – Zement, Stahlstäbe, Strukturprodukte.",
          "Konsumgüter – Abgefülltes Trinkwasser, Flüssiggasflaschen.",
          "Schmuck & Edelmetalle – Gold‑ und Silberartikel (Hallmarking).",
          "Industrielle Ausrüstung – Pumpen, Transformatoren, Werkzeugmaschinen.",
        ]}
      />

      <h3 className="service-left-content-heading-three">Vorteile</h3>

      <PointsListWithoutHeading
        points={[
          "Gesetzeskonformität: keine Bußgelder, keine Verbote, keine Beschlagnahmen.",
          "Marktzugang: Voraussetzung für den Vertrieb regulierter Produkte.",
          "Verbrauchervertrauen: ISI‑Zeichen als anerkanntes Qualitätsmerkmal.",
          "Wettbewerbsvorteil: klare Abgrenzung gegenüber nicht zertifizierten Anbietern.",
          "Exportförderung: internationale Abnehmer erkennen BIS oft an.",
          "Ausschreibungen: öffentliche Projekte verlangen häufig BIS‑konforme Produkte.",
        ]}
      />
    </div>
  );
};

const BISCertificationFaq = () => {
  const faqData = [
    {
      question: "Was ist die BIS‑Zertifizierung in Indien?",
      answer:
        "Die BIS‑Zertifizierung ist eine Qualitätszertifizierung des Bureau of Indian Standards (BIS). Sie stellt sicher, dass Produkte die indischen Normen für Sicherheit, Leistung und Qualität erfüllen.",
    },
    {
      question: "Warum benötige ich ein BIS‑Zertifikat?",
      answer:
        "Es ist erforderlich, um bestimmte Produkte in Indien herzustellen, zu importieren, zu vertreiben oder zu verkaufen. Es schafft Vertrauen und gewährleistet gesetzliche Konformität.",
    },
    {
      question: "Was bedeutet das ISI‑Zeichen?",
      answer:
        "Das ISI‑Zeichen kennzeichnet Produkte, die unter den BIS‑Programmen zertifiziert wurden und die einschlägigen indischen Normen erfüllen.",
    },
    {
      question: "Wer erteilt BIS‑Lizenzen?",
      answer:
        "Das Bureau of Indian Standards (BIS), die nationale Normungsorganisation unter dem Verbraucherschutzministerium.",
    },
    {
      question: "Welche BIS‑Programme gibt es?",
      answer:
        "Wichtige Programme sind: ISI‑Marke, Compulsory Registration Scheme (CRS), Foreign Manufacturers Certification Scheme (FMCS), Hallmarking, Eco Mark und Scheme X.",
    },
    {
      question: "Welche Produkte benötigen eine BIS‑Zertifizierung?",
      answer:
        "Unter anderem Elektrogeräte, Elektronik, Zement, Stahl, Schmuck, Mobiltelefone und Transformatoren – gemäß der indischen Regulierung.",
    },
    {
      question: "Wie lange ist eine BIS‑Lizenz gültig?",
      answer: "In der Regel 1–2 Jahre; sie muss vor Ablauf verlängert werden.",
    },
    {
      question: "Wie läuft die BIS‑Zertifizierung ab?",
      answer:
        "Norm wählen, Antrag stellen, Produktprüfungen, Werksinspektion, Zertifikatserteilung und laufende Überwachung.",
    },
    {
      question: "Können ausländische Hersteller eine BIS‑Lizenz beantragen?",
      answer:
        "Ja, über das FMCS. Es ist die Benennung eines Autorisierten Indischen Vertreters (AIR) erforderlich.",
    },
    {
      question: "Welche Dokumente sind nötig?",
      answer:
        "Unternehmensunterlagen, Produktspezifikationen, Prozessfluss, Prüfberichte, Werkslayout, Qualitätsunterlagen; für Ausländer zusätzlich AIR‑Vollmachten.",
    },
    {
      question: "Was kostet die BIS‑Zertifizierung?",
      answer:
        "Abhängig von Produkttyp, Prüfaufwand, Programm (ISI, CRS, FMCS) und Herkunft (inländisch/ausländisch): Antragsgebühren, Prüfkosten, Inspektionskosten etc.",
    },
  ];

  return (
    <section
      id="faqs"
      className="my-2 scroll-mt-20"
      aria-label="Häufige Fragen"
    >
      <div className="max-w-[88rem] mx-auto px-4 pt-5 pb-9 md:pb-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          FAQs – BIS‑Zertifizierung in Indien
        </h2>

        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          Nicht fündig geworden?{" "}
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

const BISCertificationServices = () => {
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
                Indiens bester Zertifizierungs‑Berater
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
              BIS‑Zeichen (ISI‑Lizenz) für ausländische Hersteller
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
              CDSCO Registrierung & Zertifizierung
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
                alt="Plastic Waste Management Logo"
                title="Plastic Waste Management Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Kunststoffabfall‑Management (EPR)
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
              EPR‑Zertifikat
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
              LMPC‑Zertifikat
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
              BIS‑Registrierungszertifikat
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
              ISI‑Marke (BIS) für indische Hersteller
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
