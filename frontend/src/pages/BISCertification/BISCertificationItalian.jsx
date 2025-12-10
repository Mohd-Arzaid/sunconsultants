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
import ServicesRightSideContentItalian from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentItalian";
import ServiceAuthorItalian from "@/components/manual/ServiceAuthor/ServiceAuthorItalian";
import { ISIMarkAndBISCommonTableItalian } from "../ISIMarkAndBISCommonTable/ISIMarkAndBISCommonTableItalian";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { ClockLoader } from "react-spinners";
import { BoxReveal } from "@/components/magicui/box-reveal";
import FooterItalian from "@/components/manual/Footer/FooterItalian";
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
const BISImage = "/services-images/BIS.jpg";
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";

const BISCertificationItalian = () => {
  return (
    <div className="relative w-full">
      <BISCertificationMetaTags />
      <BISCertificationBreadcrumb />
      <BISCertificationHero />
      <BISCertificationIndex />
      <BISCertificationContent />
      <BISCertificationFaq />
      <ISIMarkAndBISCommonTableItalian />
      <LanguageSelector />
      <div id="services">
        <BISCertificationServices />
      </div>
      <FooterItalian />
    </div>
  );
};

export default BISCertificationItalian;

const BISCertificationMetaTags = () => {
  const title = "Tipi, Processo, Documenti e Costi della Certificazione BIS";
  const description =
    "La certificazione BIS si riferisce al processo di ottenimento di un certificato di standard di qualità dal Bureau of Indian Standards (BIS) per produrre e vendere vari prodotti in India.";
  const keywords =
    "Certificazione BIS, Processo di Certificazione BIS, Registrazione BIS, Processo di Registrazione BIS, Schema di Certificazione BIS, Schema di Certificazione del Prodotto, Schema di Certificazione Obbligatorio, Elenco Prodotti Obbligatori BIS, Marchio ISI, BIS FMCS, Schema Hallmarking BIS, Schema Eco Mark, Consulente Certificazione BIS, Consulente Certificazione ISI, Consulente Marchio ISI BIS, Cos'è la Certificazione BIS, Download Certificazione BIS, Costo Certificazione BIS, Certificazione BIS India, Forma Completa Certificazione BIS, Certificazione BIS India, Certificazione BIS Indiana, Significato Certificazione BIS, Verifica Certificazione BIS, Licenza BIS Online in India, Certificazione BIS Online, Certificato BIS, Certificato BIS Online.";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Capo delle Operazioni presso Sun Certification India";

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
                    <Link to="/">Casa</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Certificazione BIS India per Importatori e Produttori
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
              Competenza Certificata
            </span>
          </div>

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              Certificazione BIS India
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            per Importatori e Produttori
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            La certificazione BIS garantisce qualità e sicurezza dei prodotti in
            India. È obbligatoria per molti prodotti e richiede test,
            documentazione e approvazione.
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
                Visualizza Servizi
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
    if (path.includes("/it/cose-il-certificato-bis-indiano"))
      return "Certificazione BIS - Pagina Italiana";
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
        title: "Inserisci un nome completo valido.",
        description: "Il nome deve contenere solo lettere e spazi.",
      });
      setLoading(false);
      return;
    }

    // Email validation - allow any domain
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "Inserisci un indirizzo email valido.",
        description: "Controlla se il formato della tua email è corretto",
      });
      setLoading(false);
      return;
    }

    // Phone number validation
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "Inserisci un numero di telefono valido",
        description: "Il numero di telefono deve contenere (8-15 cifre)",
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
        title: "Modulo di contatto inviato con successo!",
        description:
          "Grazie per averci contattato. Il nostro team ti contatterà a breve.",
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
          errorMessage ||
          "Impossibile inviare i dettagli del modulo di contatto!",
        description:
          "Qualcosa è andato storto. Controlla i tuoi dettagli e riprova.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="z-20 w-full md:w-[580px] h-auto md:h-[435px] flex flex-col">
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-poppins font-semibold text-[18px] md:text-[20px] text-[#008080]">
          Contattaci
        </span>
        <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
      </div>

      <div className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
        Prenota un Appuntamento
      </div>

      <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
        Vuoi contattare il nostro team e programmare una chiamata?
        <span className="text-black"> Prova Ora</span>
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
            placeholder="Nome Completo *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Indirizzo Email *"
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
            placeholder="Numero di Contatto *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="companyName"
            value={companyName}
            onChange={handleOnChange}
            placeholder="Nome Azienda *"
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
            placeholder="Nome Prodotto *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="message"
            value={message}
            onChange={handleOnChange}
            placeholder="Certificazione Richiesta*"
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
              <span>Sending</span>
            </div>
          ) : (
            <div className="flex gap-3 items-center justify-center">
              <span>Book Appointment</span>
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
    overview: "Panoramica",
    schemes: "Schemi",
    process: "Processo",
    documents: "Documenti",
    cost: "Costo",
    air: "AIR",
    conclusion: "Conclusione",
    faqs: "Domande Frequenti",
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

const BISCertificationContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side */}
        <BISCertificationContentLeft />
        {/* Right Side */}
        <ServicesRightSideContentItalian />
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
        <ServiceAuthorItalian />
      </div>
    </div>
  );
};

const OverviewSection = () => {
  return (
    <div id="overview" className="flex flex-col scroll-mt-20">
      {/* Overview */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Panoramica</span>
        <Separator className="service-left-content-separator" />
      </div>
      <h1 className="service-left-content-heading-two">
        Certificazione Marchio ISI BIS per Produttori Indiani
      </h1>

      <div className="flex justify-center mt-[20px] md:mt-[26px]">
        <img
          src="/services-main-images/IndianBisCertification.png"
          alt="Certificazione BIS Indiana"
          title="Certificato BIS per produttori indiani"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <h2 className="service-left-content-heading-three">
        Introduzione: Perché la Certificazione BIS è Importante
      </h2>

      <p className="service-left-content-paragraph">
        Prendiamo ad esempio, un produttore tedesco che ha inventato un
        dispositivo elettronico unico e sta pianificando di venderlo nel mercato
        indiano veloce. Il dispositivo è unico, sicuro e ha anche ottenuto
        approvazioni in Europa. Tuttavia, quando il dispositivo viene portato al
        porto in India, i funzionari doganali trattengono il dispositivo. La
        domanda è: "Perché?" La risposta è, il dispositivo dovrebbe avere una
        certificazione BIS, che è una parte cruciale per vendere prodotti
        elettronici in India.
      </p>

      <p className="service-left-content-paragraph">
        Molti produttori globali e indiani si confrontano con le stesse
        situazioni ogni anno. Per i consumatori indiani, il marchio BIS su un
        prodotto non è solo un logo, è un segno di fiducia che il prodotto è
        stato testato per qualità, sicurezza e affidabilità. Per un'azienda, è
        il gateway per uno dei mercati più grandi al mondo.
      </p>

      <p className="service-left-content-paragraph">
        Questo articolo risponderà a tutte le domande sulla certificazione BIS,
        la sua necessità, processi, benefici, schemi, costi, e il sistema e la
        sua navigazione disponibile sia per produttori stranieri che nazionali.
      </p>

      <h2 className="service-left-content-heading-three">
        Cos'è la Certificazione BIS per Produttori e Importatori?
      </h2>

      <p className="service-left-content-paragraph">
        La Certificazione BIS è una certificazione di garanzia della qualità e
        sicurezza fornita dal Bureau of Indian Standards (BIS), l'ente nazionale
        di certificazione dell'India sotto il Ministero degli Affari dei
        Consumatori. La certificazione BIS garantisce che un prodotto sia
        conforme agli Standard Indiani (IS) per quanto riguarda prestazioni,
        sicurezza e qualità.
      </p>
      <p className="service-left-content-paragraph">
        Quando un prodotto soddisfa questi requisiti di standard di qualità, il
        Bureau of Indian Standards emette una licenza BIS o un certificato BIS,
        indicando che il prodotto è idoneo a portare il marchio ISI (per schemi
        nazionali) o un marchio CRS con un numero di registrazione unico (sotto
        lo Schema BIS di Registrazione Obbligatoria).
      </p>
      <p className="service-left-content-paragraph">
        Per molti produttori e importatori indiani ottenere la certificazione
        BIS è obbligatorio. Copre un'ampia gamma di prodotti inclusi apparecchi
        elettrici, prodotti in cemento e acciaio, acqua potabile confezionata,
        elettronica come telefoni cellulari, luci LED, power bank, gioielli in
        metallo prezioso (attraverso hallmarking) e molti altri. I produttori e
        gli importatori di questi prodotti obbligatori non possono legalmente
        vendere o distribuire merci in India senza il riconoscimento BIS.
      </p>

      <h2 className="service-left-content-heading-three">
        Una Breve Storia del BIS in India
      </h2>

      <p className="service-left-content-paragraph">
        Il Bureau of Indian Standards (BIS) fu formato nel 1986 prendendo il
        posto dell'Indian Standards Institution (ISI) che fu formato nel 1947.
        Il BIS è ora considerato un guardiano della qualità per gli standard in
        India e ha allineato le sue pratiche ai livelli internazionali e ha
        fatto gli emendamenti necessari per le condizioni indiane.
      </p>

      <div className="service-left-content-heading-three">
        Traguardi Importanti
      </div>

      <PointsListWithoutHeading
        points={[
          "Nel 1947 l'ISI fu fondato per supportare sistemi di controllo qualità dopo che il paese ottenne l'indipendenza.",
          "Nel 1955 il marchio ISI fu assegnato, diventando uno dei simboli di qualità più famosi in India.",
          "Nel 1986, la legge BIS fu approvata, sostituendo l'ISI con il Bureau of Indian Standards.",
          "Nel 2016 e 2018, ulteriori emendamenti arricchirono le responsabilità del BIS, rendendo l'hallmarking e la certificazione dei prodotti più approfonditi.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Attualmente, il BIS garantisce la sicurezza, affidabilità e
        standardizzazione di migliaia di strumenti e macchinari per utenti
        indiani in più industrie.
      </p>

      <h2 className="service-left-content-heading-three">
        Perché la Certificazione BIS è obbligatoria in India?
      </h2>
      <p className="service-left-content-paragraph">
        Il mercato indiano è enorme, in continua evoluzione e sensibile agli
        spostamenti di prezzo. Tuttavia, questa apertura espone anche il mercato
        a merci economiche e non sicure. In questo contesto, la certificazione
        BIS funge da barriera protettiva.
      </p>
      <PointsListWithoutHeading
        points={[
          "Sicurezza del Consumatore - protegge le persone da potenziali incidenti, problemi di salute e inganni.",
          "Regolamentazione del Mercato - garantisce che prodotti non conformi non entrino nel mercato indiano.",
          "Fiducia e Confidenza - rafforza la fiducia del consumatore nei prodotti locali e internazionali.",
          "Allineamento Globale - aiuta le aziende straniere ad allinearsi con la struttura normativa dell'India.",
          "Concorrenza Equa - ogni partecipante al mercato, indipendentemente dalle dimensioni, è assicurato di competere puramente sulla qualità.",
        ]}
      />
      <p className="service-left-content-paragraph">
        La certificazione BIS per l'acqua potabile confezionata è un esempio di
        dove la mancanza di certificazione potrebbe causare problemi di salute.
        Altri standard altrettanto carenti di certificazione del prodotto per
        riscaldatori, tostapane e altri apparecchi elettrici possono portare a
        incendi. Pertanto, avendo una certificazione BIS, il governo si assicura
        che queste sfide siano affrontate.
      </p>
    </div>
  );
};

const ProcessSection = () => {
  return (
    <div id="process" className="flex flex-col scroll-mt-20">
      {/* Process */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Processo</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Processo di Certificazione BIS
      </h2>

      <p className="service-left-content-paragraph">
        Il processo di certificazione BIS segue un flusso strutturato:
      </p>

      <PointsListWithoutHeading
        points={[
          "Identificare lo Standard Rilevante: Selezionare lo Standard Indiano (IS) applicabile.",
          "Invio dell'Applicazione: Presentare al BIS e allegare eventuali documenti pertinenti.",
          "Test del Prodotto: I test vengono effettuati in laboratori BIS approvati.",
          "Ispezione della Fabbrica: Le strutture vengono ispezionate dagli ufficiali BIS.",
          "Licenza BIS: il certificato viene assegnato per una valutazione di valutazione riuscita.",
          "Sorveglianza: la conformità sostenuta insieme ai cambiamenti di licenza è la nuova norma.",
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
        <span className="service-left-content-index-heading">Documenti</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Documenti Richiesti per la Certificazione BIS
      </h2>

      <p className="service-left-content-paragraph">
        Un pacchetto di documentazione solido garantisce un'elaborazione fluida.
        Requisiti chiave includono:
      </p>

      <PointsListWithoutHeading
        points={[
          "Licenza aziendale o documenti di registrazione dell'azienda.",
          "Diagramma di flusso del processo di produzione.",
          "Elenco di macchinari e attrezzature.",
          "Dettagli del prodotto e specifiche tecniche.",
          "Rapporti di test da laboratori riconosciuti BIS.",
          "Manuale di controllo qualità.",
          "Certificato di marchio.",
        ]}
      />

      <h3 className="service-left-content-heading-three mt-5">
        Per i produttori stranieri:
      </h3>

      <PointsListWithoutHeading
        points={[
          "Nomina di un Rappresentante Indiano Autorizzato (AIR).",
          "Prova di rappresentanza e documenti di identità.",
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
        <span className="service-left-content-index-heading">Costo</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Costo della Certificazione BIS
      </h2>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                Componente Costo
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                Dettagli
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Tassa di Applicazione
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Tassa una tantum, non rimborsabile a seconda del tipo di
                prodotto
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Spese di Test
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Basate sulla complessità; pagate a laboratori riconosciuti BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Tassa di Licenza Annuale
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Pagata annualmente per mantenere la licenza BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Spese di Ispezione/Revisione Fabbrica
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Addebitate se i funzionari BIS visitano la fabbrica (viaggi
                nazionali o internazionali extra)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Spese di Consulenza (se applicabile)
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Opzionale, per assistenza alla conformità end-to-end da
                consulenti
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
        Ruolo del Rappresentante Indiano Autorizzato (AIR)
      </h2>

      <p className="service-left-content-paragraph">
        Per i produttori stranieri, il Rappresentante Indiano Autorizzato (AIR)
        è critico.
      </p>

      <PointsListWithoutHeading
        points={[
          "Gestisce tutta la comunicazione con il BIS.",
          "Raccoglie e presenta documenti, quindi facilita il processo di ispezione.",
          "Garantisce la conformità riguardo alla certificazione, prima e dopo.",
          "Deve essere un cittadino indiano o un'organizzazione con un indirizzo locale registrato.",
        ]}
      />

      <p className="service-left-content-paragraph">
        In assenza di un AIR, ottenere la certificazione BIS per aziende
        straniere è impossibile.
      </p>
    </div>
  );
};

const ConclusionSection = () => {
  return (
    <div id="conclusion" className="flex flex-col scroll-mt-20">
      {/* Conclusion */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Conclusione</span>
        <Separator className="service-left-content-separator" />
      </div>

      <div className="service-left-content-heading-two">Conclusione</div>

      <p className="service-left-content-paragraph">
        Avere una certificazione BIS è una necessità per fare affari in India.
        Non è più una certificazione opzionale nel business. È cruciale per il
        successo aziendale e la costruzione della fiducia. Il BIS è essenziale
        per la sicurezza e il successo in India. Per produttori e importatori,
        offre un ambiente di configurazione aziendale facile e sicuro. Problemi
        legali e multe non sono più una preoccupazione. Con un marchio BIS, la
        fiducia del consumatore è garantita.
      </p>

      <p className="service-left-content-paragraph">
        L'India è una delle più grandi economie in crescita al mondo e ottenere
        l'accesso per vendere lì può aiutare un esportatore a crescere. Non
        importa se sei un produttore in India o all'estero, la licenza BIS è
        necessaria per produrre o vendere prodotti nel mercato indiano. È
        richiesta, e sblocca prospettive di business con la popolazione in
        crescita dell'India. È un investimento in sicurezza, fiducia del
        consumatore, reputazione del brand, credibilità e crescita a lungo
        termine.
      </p>
    </div>
  );
};

const SchemesSection = () => {
  return (
    <div id="schemes" className="flex flex-col scroll-mt-20">
      {/* Schemes */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Schemi</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Schemi di Certificazione BIS
      </h2>

      <p className="service-left-content-paragraph">
        Il BIS ha numerosi schemi di certificazione progettati per varie
        industrie e tipi di prodotti. Ogni schema è progettato per soddisfare le
        esigenze particolari dell'industria e del prodotto.
      </p>

      <PointsListWithoutHeading
        points={[
          "FMCS – Schema di Certificazione Produttori Stranieri",
          "Schema Marchio ISI (Produttori Nazionali)",
          "Schema X sotto BIS Indiano",
          "CRS – Schema di Registrazione Obbligatoria",
          "Schema Hallmarking (Gioielleria & Metalli Preziosi)",
          "Certificazione Eco Mark",
          "Schema di Certificazione Sistemi di Gestione (MSCS)",
          "LRS (Schema di Riconoscimento Laboratori)",
        ]}
        linkMap={{
          "FMCS – Schema di Certificazione Produttori Stranieri":
            "a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis",
          "Schema Marchio ISI (Produttori Nazionali)":
            "a-guide-to-bis-certification-indian-bis",
          "Schema X sotto BIS Indiano":
            "indian-bis-certification-under-scheme-x",
          "CRS – Schema di Registrazione Obbligatoria":
            "what-is-crs-bis-or-crs-registration",
        }}
      />

      <h3 className="service-left-content-heading-three">
        Schema Marchio ISI (Produttori Nazionali)
      </h3>

      <p className="service-left-content-paragraph">
        Per i produttori indiani, ottenere una licenza BIS è un prerequisito per
        garantire vendite legali dei loro prodotti all'interno del paese. Questa
        certificazione è rilasciata dal Bureau of Indian Standards (BIS) per
        certificare la soddisfazione degli Standard Indiani relativi a parametri
        di qualità, sicurezza e prestazioni per i prodotti. Questo include audit
        di fabbrica, test dei prodotti e controlli di conformità con i parametri
        BIS. Una volta che il prodotto è passato, ai produttori è permesso di
        mettere il marchio ISI sul prodotto. Questo marchio è un marchio
        commerciale per il produttore e aiuta il cliente a identificare un
        prodotto genuino certificato ISI.
      </p>

      <p className="service-left-content-paragraph">
        Indipendentemente dal fatto che sia per elettronica, acciaio, cemento,
        plastica o materiali da costruzione, ottenere un certificato BIS è
        essenziale per ottenere l'accesso al mercato. A differenza di guadagnare
        la fiducia del consumatore, un certificato BIS migliora la reputazione
        dei produttori indiani, permette loro di partecipare a contratti
        governativi e apre una serie di altre opportunità di business.
        Soprattutto, l'assenza di certificazione BIS può avere ripercussioni
        dannose, che vanno da multe legali e richiamo del prodotto a un divieto
        completo di vendita in India. Pertanto, la conformità BIS è più di un
        requisito legale, è una strategia mirata per espandere e mantenere la
        fiducia del consumatore.
      </p>

      <p className="service-left-content-paragraph">
        Per i produttori indiani, lo schema marchio ISI è il marchio più
        prestigioso. Sotto lo schema, i produttori indiani sono tenuti a far
        testare i loro prodotti presso strutture di test riconosciute BIS. I
        siti di produzione sono soggetti a ispezione e test. I prodotti conformi
        ricevono l'approvazione per utilizzare il marchio ISI. È un reato
        fornire prodotti come cemento, bombole GPL, cavi elettrici, acqua
        potabile confezionata e altro ancora, senza il marchio ISI.
      </p>

      <h3 className="service-left-content-heading-three">
        FMCS – Schema di Certificazione Produttori Stranieri
      </h3>

      <p className="service-left-content-paragraph">
        Lo Schema di Certificazione Produttori Stranieri (FMCS) è uno schema
        sviluppato dal Bureau of Indian Standards per aziende straniere che
        desiderano entrare nel Mercato Indiano. Questo schema garantisce la
        sicurezza, qualità e garanzia di prestazioni dei prodotti fabbricati
        all'estero conformi agli standard indiani richiesti. Secondo FMCS, le
        aziende straniere che desiderano vendere prodotti in India devono prima
        acquisire un certificato del Bureau of Indian Standards o una licenza.
        Come i produttori indiani, anche i produttori stranieri sono tenuti a
        ottenere una licenza BIS per utilizzare il marchio ISI sul loro
        prodotto. Il desiderabile marchio ISI viene dato dopo una valutazione
        estensiva che include test di fabbrica e campioni di prodotto rigorosi
        contro gli Standard Indiani.
      </p>

      <p className="service-left-content-paragraph">
        Un produttore straniero è tenuto a nominare un Rappresentante Indiano
        Autorizzato (AIR), che è responsabile della comunicazione e
        coordinamento, come primo punto di contatto con il Bureau of Indian
        Standards (BIS) per lo schema. Include la presentazione di una domanda,
        valutazione approfondita della conformità e l'assunzione di tutti gli
        obblighi necessari per raggiungere la conformità entro i termini. Come
        risultato del seguire le linee guida FMCS, le aziende straniere sono in
        grado di entrare nel mercato indiano, così come acquisire goodwill con i
        clienti. Qualsiasi prodotto con un marchio ISI mostra un alto livello di
        qualità, sicurezza e garanzia di affidabilità in India.
      </p>

      <p className="service-left-content-paragraph">
        Nessun prodotto straniero che rientra nelle categorie regolamentate è
        permesso entrare in India senza la certificazione FMCS.
      </p>

      <h3 className="service-left-content-heading-three">
        Schema X (Regolamento Tecnico Omnibus)
      </h3>

      <p className="service-left-content-paragraph">
        Lo Schema X, o il Regolamento Tecnico Omnibus, è un altro Schema di
        certificazione BIS progettato dal Bureau of Indian Standards per aiutare
        a semplificare le procedure di conformità delle industrie nei domini
        meccanici e elettrici. A differenza degli altri schemi di
        certificazione, lo Schema X si concentra sulla riduzione della
        documentazione, valutazioni e approvazioni mentre garantisce che i
        prodotti aderiscano agli Standard Indiani. I prodotti con il marchio
        standard sono di qualità e sicurezza eccezionali e possono essere
        venduti dopo aver subito test di tipo, ispezioni di fabbrica e semplice
        certificazione dei requisiti obbligatori.
      </p>

      <p className="service-left-content-paragraph">
        Lo schema X copre le linee guida di sicurezza per macchinari pesanti e
        attrezzature elettriche per prodotti come pompe, gru, trasformatori,
        macchine utensili e altri prodotti di ingegneria pesante. Queste sono le
        industrie più pertinenti e tutte dove affidabilità e sicurezza sono una
        necessità. Lo Schema X è conveniente in quanto riduce i tempi e i costi
        della complessa certificazione BIS. Mira a semplificare il processo di
        conformità per facilitare autorizzazioni più rapide per il marketing e
        una reputazione migliorata senza compromettere gli standard di qualità e
        sicurezza. La reputazione duratura e tradizionale del Bureau of Indian
        Standards permette un più facile commercio internazionale,
        indispensabile per le aziende per soddisfare i requisiti di conformità e
        aumentare la competitività.
      </p>

      <p className="service-left-content-paragraph">
        Lo Schema X BIS è obbligatorio per accedere all'industria delle macchine
        pesanti indiane. Questo nuovo schema è importante per una migliore
        concorrenza di mercato, innovazione e conformità alle normative che sono
        semplificate attraverso questa struttura semplificata ma robusta.
      </p>

      <h3 className="service-left-content-heading-three">
        Schema di Registrazione Obbligatoria (CRS)
      </h3>

      <p className="service-left-content-paragraph">
        Il Bureau of Indian Standards (BIS) ha sviluppato un programma di
        certificazione BIS chiamato Schema di Registrazione Obbligatoria (CRS)
        mirato a regolamentare i prodotti IT ed elettronici in India. Si
        concentra sulla valutazione della sicurezza e qualità di prodotti ad
        alto rischio come luci LED, telefoni cellulari, laptop, power bank e
        altri elettronica di consumo contro gli Standard Indiani. Il CRS, in
        contrasto con lo schema ISI, non emette un marchio ISI, ma i prodotti
        certificati, in conformità con lo schema, portano un marchio CRS con un
        numero di registrazione unico. Tutti i prodotti elettronici e IT devono
        essere testati nei laboratori riconosciuti BIS e formalmente registrati
        con BIS CRS, utilizzato per garantire la conformità prima che possano
        essere venduti o importati in India.
      </p>

      <p className="service-left-content-paragraph">
        Questo schema è essenziale per proteggere i consumatori indiani da
        elettronica non sicura, di qualità inferiore o contraffatta, in
        particolare nel caso del mercato digitale in rapida crescita. Sia i
        produttori indiani che stranieri devono acquisire la certificazione CRS.
        Le aziende straniere devono nominare un Rappresentante Indiano
        Autorizzato AIR per garantire la conformità. Il BIS aggiorna
        continuamente l'elenco dei prodotti coperti dal CRS per includere nuovi
        prodotti e tecnologie e problemi di sicurezza emergenti. Per i
        produttori, ottenere la registrazione BIS sotto CRS è un vantaggio
        aggiuntivo poiché aiuta nella conformità normativa e aumenta anche la
        fiducia del cliente, la reputazione dell'azienda e l'accesso al mercato
        nell'industria elettronica in India.
      </p>

      <h3 className="service-left-content-heading-three">Schema Hallmarking</h3>

      <p className="service-left-content-paragraph">
        In India, l'hallmarking di gioielli d'oro e argento è obbligatorio sotto
        lo Schema Hallmarking e regolamentato dal Bureau of Indian Standards
        (BIS) che garantisce la purezza e autenticità dei gioielli. Gli articoli
        in Metalli Preziosi sono testati presso Centri di Assaggio e Hallmarking
        (AHC) approvati BIS e sono quindi timbrati con segni di hallmark. Questo
        processo viene completato solo se gli articoli soddisfano gli Standard
        Indiani stabiliti all'inizio. I gioiellieri devono prima acquisire una
        licenza BIS che permette loro di vendere gioielli hallmarked. Questo è
        l'unico modo per farlo legalmente. Il gioielliere è obbligato a
        sottoporsi e completare test del prodotto, audit BIS e monitoraggio
        continuo della conformità per vendere gioielli hallmarked. Il processo,
        alla fine, protegge il consumatore e garantisce la purezza, peso e
        qualità e limita malpractice così come frodi nel mercato dei gioielli.
      </p>

      <p className="service-left-content-paragraph">
        Per i consumatori indiani, oro e argento non sono solo ornamenti ma
        anche investimenti importanti, il che rende la fiducia e la trasparenza
        essenziali. La gioielleria hallmarking è un segno di garanzia per il
        cittadino comune nel paese che ogni pezzo di gioielleria in vendita ha
        superato test estensivi contro vari parametri di riferimento nazionali e
        pratiche di commercio equo. I gioiellieri possono mostrare la loro
        credibilità e reputazione di mercato attraverso l'hallmarking dei
        gioielli. L'incapacità di conformarsi alle regole stabilite porta
        punizioni che possono includere la sospensione della licenza. Per
        l'hallmarking sotto BIS, serve come adempimento di obblighi basati su
        principi e legali. Questo non solo aumenta la soddisfazione del
        consumatore ma anche migliora il mercato dei gioielli indiano nel suo
        insieme. Questo vale anche per i rivenditori più piccoli così come per i
        produttori su larga scala.
      </p>

      <h3 className="service-left-content-heading-three">
        Certificazione Eco Mark
      </h3>

      <p className="service-left-content-paragraph">
        L'Eco Mark è uno schema di riconoscimento centrato sull'innovazione
        creato dal Bureau of Indian Standards (BIS) mirato alla promozione di
        beni eco-compatibili. A differenza della certificazione tradizionale che
        si concentra prevalentemente su parametri di sicurezza e qualità, l'Eco
        Mark è assegnato a beni che conformi agli Standard Indiani e che
        mostrano almeno un livello ridotto di impatto ambientale avverso durante
        uno o più delle varie fasi del ciclo di vita dei beni. La certificazione
        Eco Mark viene assegnata solo dopo test considerevoli e la dimostrazione
        di criteri - conformità che include livelli di emissione, non-tossicità,
        il tasso di biodegradazione, capacità di riciclaggio e interazioni
        complessive con il sistema. L'Eco Mark, proprio come il marchio ISI, è
        un emblema di garanzia dal governo a cui è stato concesso lo status di
        marchio di certificazione, sebbene con obiettivi più pronunciati di
        sostenibilità ambientale.
      </p>

      <p className="service-left-content-paragraph">
        La licenza BIS con Eco Mark certifica che un'azienda si impegna nella
        produzione responsabile e si preoccupa dell'ambiente. Garantisce la
        conformità con la legge e crea un vantaggio competitivo con consumatori
        protettivi e aziende orientate alla sostenibilità. L'Eco Mark aiuta
        l'industria a fidarsi e adottare pratiche verdi e per i consumatori a
        fidarsi che i prodotti che acquistano siano sicuri e ambientalmente
        responsabili. L'Eco Mark supporta la visione dell'India per una
        protezione della qualità migliorata con protezione ambientale sotto BIS.
      </p>

      <h3 className="service-left-content-heading-three">
        Schema di Certificazione Sistemi di Gestione (MSCS)
      </h3>

      <p className="service-left-content-paragraph">
        Lo Schema di Certificazione Sistemi di Gestione (MSCS) avviato dal
        Bureau of Indian Standards (BIS) è una procedura stepwise che valuta e
        riconosce le aziende interessate per l'implementazione di sistemi di
        gestione accettati e riconosciuti a livello internazionale. Il framework
        MSCS consiste di Standard ISO come ISO 9001 Gestione della Qualità, ISO
        14001 Gestione dell'Ambiente, ISO 45001 Sistema di Gestione della Salute
        e Sicurezza sul Lavoro e altri. MSCS certifica l'azienda per le
        operazioni legali, consistenza e miglioramento continuo delle
        operazioni. Le aziende certificate attraversano numerose valutazioni e
        audit che aiutano a costruire fiducia tra i clienti, regolatori e
        stakeholder che rafforza la garanzia di sicurezza, qualità e
        sostenibilità.
      </p>

      <p className="service-left-content-paragraph">
        Il BIS è l'ente nazionale di standardizzazione dell'India ed è l'ente di
        certificazione per il miglioramento della reputazione e credibilità
        dell'organizzazione a livello nazionale e fuori dall'India. MSCS oltre a
        promuovere la responsabilità attraverso supervisione periodica e
        ricertificazione libera anche un business per supportare attivamente
        programmi guidati dal pubblico come Make in India e Atmanirbhar Bharat.
        Oltre all'obbligo legale, lo schema aiuta anche a coltivare una cultura
        di integrità, efficienza e commercio equo. MSCS incoraggia il commercio
        e l'investimento da parte delle aziende certificate e il BIS svolge un
        ruolo cruciale nello sviluppo dell'ecosistema di qualità del paese.
      </p>

      <h3 className="service-left-content-heading-three">
        LRS – Schema di Riconoscimento Laboratori
      </h3>

      <p className="service-left-content-paragraph">
        Sotto il Bureau of Indian Standards (BIS), lo Schema di Riconoscimento
        Laboratori (LRS) è una parte integrale di un sistema che garantisce
        l'affidabilità e la competenza complessiva dei laboratori che testano e
        certificano prodotti per l'approvazione BIS. Tali laboratori sono
        criticamente valutati su vari attributi che includono conoscenza
        tecnica, qualità della forza lavoro, infrastruttura e la competenza
        complessiva e soddisfazione del laboratorio con lo standard ISO/ IEC
        17025. Questi laboratori, una volta approvati, sono autorizzati a
        eseguire test sul prodotto per cui la valutazione di conformità viene
        fatta come parte di vari programmi di certificazione BIS come lo Schema
        Marchio ISI e lo Schema di Registrazione Obbligatoria (CRS). È chiaro
        che per i produttori, in particolare per importatori ed esportatori, i
        rapporti ottenuti da un laboratorio approvato LRS sono un requisito
        critico per ottenere un certificato BIS che è un requisito legale per
        determinati prodotti.
      </p>

      <p className="service-left-content-paragraph">
        L'LRS sta potenziando i sistemi di garanzia dell'India mantenendo
        l'equità nei risultati dei test e garantendo che tutti i risultati siano
        consistenti e globalmente comparati, mentre accredita solo laboratori
        affidabili e solidi. Per mantenere l'integrità e la trasparenza, il BIS
        esegue audit regolari, test di competenza e sorveglianza di laboratori
        schematici riconosciuti. Il riconoscimento di questa certificazione
        permette al BIS di migliorare la fiducia dei consumatori mentre rende il
        processo di certificazione più efficiente per le industrie, poiché solo
        prodotti sicuri, conformi e di alta qualità saranno offerti nel mercato
        indiano. Per le organizzazioni che mirano a ricevere la certificazione
        BIS, la collaborazione con laboratori approvati LRS è la più essenziale
        per raggiungere la conformità e l'accesso al mercato.
      </p>

      <h3 className="service-left-content-heading-three">
        Prodotti che Richiedono Certificazione BIS
      </h3>

      <p className="service-left-content-paragraph">
        La certificazione BIS si applica a un'ampia varietà di prodotti. Esempi
        includono:
      </p>

      <PointsListWithoutHeading
        points={[
          "Elettrico & Elettronico – Luci LED, telefoni cellulari, adattatori, laptop.",
          "Materiali da Costruzione – Cemento, barre d'acciaio, prodotti strutturali.",
          "Beni di Consumo – Acqua potabile confezionata, bombole gas da cucina.",
          "Gioielleria & Metalli Preziosi – Articoli in oro e argento sotto hallmarking.",
          "Attrezzature Industriali – Pompe, trasformatori, macchine utensili.",
        ]}
      />

      <p className="service-left-content-paragraph">
        L'elenco continua a crescere man mano che emergono nuovi rischi e
        tecnologie.
      </p>

      <h3 className="service-left-content-heading-three">
        Benefici della Certificazione BIS
      </h3>

      <p className="service-left-content-paragraph">
        Per le aziende, il certificato BIS offre molto più della mera conformità
        con la legge.
      </p>

      <PointsListWithoutHeading
        points={[
          "Conformità legale: nessuna multa, nessun divieto, nessun sequestro.",
          "Accesso al mercato: necessario per vendere prodotti regolamentati in India.",
          "Fiducia del consumatore: si costruisce con il ben riconosciuto marchio ISI come segno di prova.",
          "Vantaggio competitivo: poiché le aziende certificate si differenziano facilmente dai concorrenti non certificati.",
          "Facilitazione delle esportazioni: molti acquirenti internazionali comprendono e apprezzano la certificazione BIS.",
          "Partecipazione alle Gare d'Appalto: molti progetti governativi assegnano contratti per beni che sono certificati BIS.",
        ]}
      />
    </div>
  );
};

const BISCertificationFaq = () => {
  const faqData = [
    {
      question: "Cos'è la certificazione BIS in India?",
      answer:
        "La certificazione BIS è una certificazione di garanzia della qualità rilasciata dal Bureau of Indian Standards (BIS) per garantire che i prodotti siano conformi agli standard indiani per sicurezza, prestazioni e qualità. È obbligatoria per varie categorie di prodotti e aiuta nella protezione dei consumatori e nella conformità normativa.",
    },
    {
      question: "Perché ho bisogno di un certificato BIS?",
      answer:
        "Un certificato BIS è essenziale per produrre, importare, distribuire o vendere legalmente determinati prodotti in India. Assicura ai consumatori che il prodotto soddisfa le linee guida di sicurezza e qualità degli standard indiani.",
    },
    {
      question: "Cos'è il marchio ISI sotto la certificazione BIS?",
      answer:
        "Il marchio ISI è un simbolo di certificazione fornito nell'ambito dello schema di certificazione BIS. Indica che un prodotto è conforme agli standard indiani ed è stato certificato dal BIS indiano attraverso test e registrazione adeguati.",
    },
    {
      question: "Chi rilascia le licenze BIS in India?",
      answer:
        "Le licenze BIS sono rilasciate dal Bureau of Indian Standards (BIS indiano), l'ente nazionale di standardizzazione sotto il Ministero degli Affari dei Consumatori, Alimentazione e Distribuzione Pubblica.",
    },
    {
      question: "Quali sono i diversi tipi di schemi di certificazione BIS?",
      answer:
        "I principali schemi di certificazione BIS includono lo schema del marchio ISI, lo Schema di Registrazione Obbligatoria (CRS), lo Schema di Certificazione dei Produttori Stranieri (FMCS), la punzonatura per gioielli, la certificazione Eco Mark e cos'è lo Schema X per macchinari industriali.",
    },
    {
      question: "Cos'è lo Schema X sotto la certificazione BIS?",
      answer:
        "Lo Schema X è un processo di certificazione BIS semplificato applicabile a prodotti industriali come pompe, trasformatori, macchine utensili e gru. Garantisce un'approvazione più rapida senza compromettere la conformità agli standard indiani.",
    },
    {
      question: "Quali prodotti richiedono la certificazione BIS in India?",
      answer:
        "Prodotti come elettrodomestici, elettronica, articoli per la cucina, cemento, acciaio, gioielli d'oro, telefoni cellulari e trasformatori richiedono la certificazione BIS secondo il mandato del BIS indiano.",
    },
    {
      question: "La registrazione BIS è obbligatoria per tutti i prodotti?",
      answer:
        "No, la registrazione BIS è obbligatoria solo per i prodotti elencati nello schema di certificazione obbligatoria. Tuttavia, è disponibile anche la certificazione BIS volontaria per migliorare la credibilità del prodotto.",
    },
    {
      question: "Quanto tempo è valida una licenza BIS?",
      answer:
        "Una licenza BIS è tipicamente valida per uno o due anni e deve essere rinnovata prima della scadenza per continuare a utilizzare il marchio ISI o mantenere lo stato di registrazione BIS.",
    },
    {
      question:
        "Quali sono i passaggi per ottenere la certificazione BIS in India?",
      answer:
        "Il processo di certificazione BIS include l'identificazione degli standard indiani applicabili, la presentazione di una domanda, i test del prodotto, l'ispezione della fabbrica e il rilascio di un certificato BIS dopo l'approvazione.",
    },
    {
      question: "I produttori stranieri possono richiedere una licenza BIS?",
      answer:
        "Sì, nell'ambito dello Schema di Certificazione dei Produttori Stranieri (FMCS), le aziende straniere possono richiedere una licenza BIS per vendere prodotti in India. Devono nominare un Rappresentante Indiano Autorizzato (AIR).",
    },
    {
      question: "Qual è il ruolo dell'AIR nella certificazione BIS?",
      answer:
        "Un AIR (Rappresentante Indiano Autorizzato) funge da collegamento tra il produttore straniero e il BIS indiano. È responsabile della documentazione, della comunicazione e della conformità ai requisiti di certificazione BIS.",
    },
    {
      question: "Come posso richiedere la registrazione BIS online?",
      answer:
        "Puoi richiedere la registrazione BIS online tramite il portale ufficiale BIS. Il processo prevede l'invio di moduli, il caricamento di documenti, rapporti di test e il pagamento delle tasse.",
    },
    {
      question: "Quali documenti sono richiesti per un certificato BIS?",
      answer:
        "I documenti necessari includono licenza commerciale, specifiche del prodotto, processo di produzione, rapporti di test di laboratorio, layout della fabbrica, manuale di qualità e moduli di autorizzazione (per produttori stranieri).",
    },
    {
      question: "Quanto costa la certificazione BIS in India?",
      answer:
        "Il costo della certificazione BIS dipende dal tipo di prodotto, dai requisiti di test, dal tipo di schema (ISI, CRS, FMCS) e dal fatto che il richiedente sia nazionale o straniero. I costi includono tasse di domanda, costi di test e spese di ispezione.",
    },
    {
      question:
        "Il marchio ISI è obbligatorio per tutti i prodotti certificati BIS?",
      answer:
        "No, solo i prodotti sotto lo schema ISI sono tenuti a portare il marchio ISI. I prodotti sotto gli schemi CRS o di punzonatura seguono protocolli di etichettatura diversi secondo le norme di registrazione BIS.",
    },
    {
      question: "Posso ottenere la certificazione BIS per prodotti ecologici?",
      answer:
        "Sì, i prodotti che soddisfano gli standard ambientali possono ottenere la certificazione BIS sotto lo schema Eco Mark, che garantisce la conformità agli standard indiani per la sicurezza ambientale.",
    },
    {
      question:
        "Qual è la differenza tra certificazione BIS e registrazione BIS?",
      answer:
        "La certificazione BIS si riferisce generalmente all'approvazione sotto gli schemi ISI, FMCS o di punzonatura, mentre la registrazione BIS è comunemente associata allo schema CRS per prodotti elettronici.",
    },
    {
      question: "Cos'è lo Schema di Registrazione Obbligatoria (CRS)?",
      answer:
        "Il CRS è un programma di registrazione BIS per beni IT ed elettronici come luci LED, telefoni cellulari e banche di alimentazione. Garantisce la conformità del prodotto agli standard indiani relativi alla sicurezza.",
    },
    {
      question:
        "Il marchio ISI e il certificato BIS significano la stessa cosa?",
      answer:
        "Non esattamente. Il marchio ISI è il simbolo concesso ai prodotti certificati sotto lo schema di certificazione BIS. Un certificato BIS è il documento legale rilasciato al produttore.",
    },
    {
      question: "Una licenza BIS può coprire più prodotti?",
      answer:
        "No, è richiesta una licenza BIS separata per ogni tipo di prodotto e ogni sede di produzione, anche se i prodotti sono simili.",
    },
    {
      question: "Cosa succede se vendo prodotti senza certificazione BIS?",
      answer:
        "Vendere prodotti che richiedono la certificazione BIS senza una licenza BIS valida è illegale in India e può portare a sanzioni, richiami di prodotti o divieti.",
    },
    {
      question: "Quanto tempo ci vuole per ottenere la certificazione BIS?",
      answer:
        "Il processo di certificazione BIS richiede generalmente da 30 a 90 giorni, a seconda del tipo di prodotto, dei requisiti di test e del fatto che il richiedente sia nazionale o straniero.",
    },
    {
      question: "La certificazione BIS è accettata a livello globale?",
      answer:
        "Sebbene la certificazione BIS sia specifica per l'India, migliora la credibilità globale dimostrando la conformità agli standard indiani rigorosi. Alcuni prodotti certificati BIS sono anche accettati sotto accordi di riconoscimento reciproco.",
    },
    {
      question: "Con quale frequenza devo rinnovare la mia licenza BIS?",
      answer:
        "Le licenze BIS devono essere rinnovate annualmente o biennalmente. I produttori devono mantenere la conformità agli standard indiani e superare audit di sorveglianza per rinnovare il loro certificato BIS.",
    },
  ];

  return (
    <section
      id="faqs"
      className="my-2 scroll-mt-20"
      aria-label="Domande Frequenti"
    >
      <div className="max-w-[88rem] mx-auto px-4 pt-5 pb-9 md:pb-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          FAQ – Certificazione BIS in India
        </h2>

        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          Non trovi la risposta che stai cercando?{" "}
          <a
            href="/contact"
            className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4 hover:text-[#1A8781] transition-colors"
          >
            Contattaci!
          </a>
        </p>
        <div className="w-full max-w-[1104px] mt-[16px] md:mt-[24px] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={`faq-${index}-${faq.question
                  .substring(0, 15)
                  .replace(/\s+/g, "-")}`}
                value={`item-${index + 1}`}
              >
                <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                  <div className="flex-1 text-left">
                    <span className="mr-2 font-semibold">{index + 1}.</span>
                    {faq.question}
                  </div>
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

  // Helper function to get country name from flag URL
  const getCountryName = (flagUrl) => {
    const countryMap = {
      cn: "China",
      de: "Germany",
      nl: "Netherlands",
      jp: "Japan",
      kr: "South Korea",
      fr: "France",
      es: "Spain",
      th: "Thailand",
      id: "Indonesia",
      it: "Italy",
      sa: "Saudi Arabia",
      vn: "Vietnam",
      gb: "United Kingdom",
    };
    // Extract country code from URL (e.g., "cn" from "https://flagcdn.com/w320/cn.png")
    const match = flagUrl.match(/\/([a-z]{2})\.png$/);
    const countryCode = match ? match[1] : null;
    return countryMap[countryCode] || "Flag";
  };

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
    {
      code: "nl",
      name: "Dutch",
      flag: "https://flagcdn.com/w320/nl.png",
      path: "/nl/wat-is-het-bis-certificaat-indiaas-bis",
    },
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
    // {
    //   code: "it",
    //   name: "Italian",
    //   flag: "https://flagcdn.com/w320/it.png",
    //   path: "/it/cose-il-certificato-bis-indiano",
    // },
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
                        alt={`${getCountryName(language.flag)} Flag`}
                        title={`${getCountryName(language.flag)} Flag`}
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
            <div className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
              I Nostri Servizi
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                Miglior Consulente Certificati in India
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
              Marchio BIS (Licenza ISI) per Produttori Stranieri
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
              Certificazione Registrazione CDSCO
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
              Registrazione BIS (CRS)
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
              Gestione Rifiuti Plastici
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
              Certificazioni Certificato EPR
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
              Certificazioni Certificato LMPC
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
              Certificato di Registrazione BIS
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
              MARCHIO ISI (BIS) per Produttori Indiani
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
