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

const ISIMarkItalian = () => {
  return (
    <div className="relative w-full">
      <ISIMarkMetaTags />
      <ISIMarkBreadcrumb />
      <ISIMarkHero />
      <ISIMarkIndex />
      <ISIMarkContent />
      <ISIMarkFaq />
      <div id="product-table">
        <ISIMarkAndBISCommonTableItalian />
      </div>
      <LanguageSelector />
      <div id="services">
        <ISIMarkServices />
      </div>
      <FooterItalian />
    </div>
  );
};

export default ISIMarkItalian;

const ISIMarkMetaTags = () => {
  const title = "Processo di Certificazione BIS ISI Mark, Documenti, Tariffa";
  const description =
    "La certificazione del marchio ISI rilasciata dal Bureau of Indian Standards viene concessa ai prodotti che subiscono rigorosi test e ispezioni per soddisfare gli standard e la conformità richiesti";
  const keywords =
    "Marchio ISI, Certificazione Marchio ISI, Certificato Marchio ISI, Certificazione ISI, Certificato ISI, Registrazione Marchio ISI, Licenza ISI, Marchio BIS ISI, Certificazione Marchio BIS ISI";
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
                    <Link to="/">Casa</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Processo di Certificazione BIS ISI Mark, Documenti, Tariffa
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
              Competenza Certificata
            </span>
          </div>

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              Certificazione BIS per
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            Produttori Indiani
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            Come parte della visione 'Make in India', la certificazione BIS
            aiuta i produttori a garantire sicurezza, qualità e conformità del
            prodotto. Ottieni la certificazione e fai crescere il tuo brand con
            fiducia.
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
                Visualizza Servizi
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
    if (path.includes("/it/certificazione-bis-isi-mark"))
      return "ISI Mark - Italian Page";
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
        error.response?.data?.message || "Qualcosa è andato storto";
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
              <span>Invio</span>
            </div>
          ) : (
            <div className="flex gap-3 items-center justify-center">
              <span>Prenota Appuntamento</span>
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
    overview: "Panoramica",
    requirement: "Requisiti",
    documents: "Documenti",
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

const ISIMarkContent = () => {
  return (
    <>
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}
          <ISIMarkContentLeft />
          {/* Right Side */}
          <ServicesRightSideContentItalian />
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
        Schemi di Certificazione BIS in India
      </h1>
      <div className="flex justify-center mt-[20px] md:mt-[26px]">
        <img
          src="/services-main-images/BIS-Certification-for-Indian-Manufacturers.png"
          alt="Schemi di Certificazione BIS Indiani"
          title="Schema di Licenza BIS"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <p className="service-left-content-paragraph">
        Nelle dinamiche di mercato attuali, la reputazione di un brand nel
        mercato odierno, la fiducia dei consumatori ha un'importanza
        significativa. Ogni consumatore vuole garanzie riguardo alla sicurezza e
        all'affidabilità di un prodotto, insieme ai passaggi di controllo
        qualità intrapresi durante la sua produzione. Il Bureau of Indian
        Standards affronta questi problemi e preoccupazioni garantendo parametri
        di riferimento per la qualità dei prodotti venduti in India. La
        Certificazione del Marchio ISI è uno dei certificati più prestigiosi
        rilasciati sotto BIS.
      </p>
      <p className="service-left-content-paragraph">
        Per i produttori nazionali, ottenere una Certificazione BIS ISI Mark non
        è solo questione di ottenere il certificato di conformità, ma anche di
        ottenere l'accettazione del mercato, la fiducia del brand e la
        protezione legale. Il marchio ISI è riconosciuto universalmente e
        rafforza la credibilità in India quando si tratta della produzione di
        elettrodomestici, materiali da costruzione, prodotti chimici o beni per
        la casa.
      </p>
      <p className="service-left-content-paragraph">
        Questo articolo mira a esplorare la Certificazione BIS ISI Mark per i
        produttori nazionali, concentrandosi specificamente sull'importanza, i
        requisiti, i vantaggi e l'intero processo di acquisizione del
        certificato.
      </p>
      <h2 className="service-left-content-heading-three">
        Comprendere BIS e il Suo Ruolo
      </h2>
      <p className="service-left-content-paragraph">
        Il Bureau of Indian Standards (BIS) è un organismo nazionale di
        standardizzazione e certificazione in India sotto il Ministero degli
        Affari dei Consumatori e Pubblici. Essendo un organismo normativo,
        stabilisce e mantiene standard di qualità e la sua applicazione in varie
        industrie come indicato sotto la Legge BIS del 1986.
      </p>
      <p className="service-left-content-paragraph">
        Il BIS agisce come autorità di verifica di terza parte che verifica se
        un prodotto soddisfa gli standard indiani particolari. La certificazione
        BIS fornisce al produttore non solo un requisito legale, ma anche un
        marchio di approvazione di fiducia e credibilità da parte dei clienti.{" "}
      </p>
      <h2 className="service-left-content-heading-three">
        Cos'è un Marchio ISI?
      </h2>
      <p className="service-left-content-paragraph">
        La certificazione del marchio ISI (marchio dell'Istituto degli Standard
        Indiani) è il marchio di certificazione più antico e riconosciuto del
        Bureau of Indian Standards (BIS) in India. La certificazione ISI si
        concentra sulla conferma che un prodotto soddisfa i requisiti di base
        degli standard di qualità stabiliti da BIS in relazione a sicurezza,
        qualità, prestazioni e affidabilità.{" "}
      </p>
      <p className="service-left-content-paragraph">
        I prodotti che portano il marchio ISI hanno completato test di
        laboratorio approfonditi e ispezioni di fabbrica. Garantisce che le
        procedure di controllo qualità appropriate vengano implementate e
        seguite durante le fasi di produzione. I consumatori sono in grado di
        ottenere e utilizzare prodotti sicuri e affidabili etichettati con il
        marchio ISI. Il marchio ISI è uno strumento per la fiducia tra il
        consumatore e il produttore e questo marchio va oltre lo standard.
      </p>
      <p className="service-left-content-paragraph">
        Alcuni esempi di prodotti per i quali è richiesta la certificazione ISI
        obbligatoria sono i seguenti:{" "}
      </p>
      <PointsListWithoutHeading
        points={[
          "Elettrodomestici di tutti i tipi (Ferri da stiro elettrici, riscaldatori elettrici, fili elettrici, frigoriferi, unità di condizionamento aria)",
          "Cemento e acciaio, tubi UPVC, calzature in plastica e altri prodotti in plastica",
          "Fertilizzanti, prodotti chimici e acidi",
          "Caschi di sicurezza e occhiali, nonché alcuni tipi di giocattoli per bambini",
        ]}
      />
      <p className="service-left-content-paragraph">
        Ci sono più di 650 prodotti che richiedono certificazione BIS
        obbligatoria per utilizzare il marchio standard (Marchio ISI) secondo lo
        Schema I Appendice I del Bureau of Indian Standard. I prodotti mantenuti
        sotto lo schema di certificazione obbligatoria non possono essere
        fabbricati, importati o venduti nel mercato indiano senza il marchio
        ISI. L'elenco dei prodotti obbligatori può essere consultato su questo{" "}
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
          link Elenco Prodotti
        </a>
        .{" "}
      </p>
      <h2 className="service-left-content-heading-three">
        Qual è la Differenza tra Certificazione BIS e Marchio ISI?
      </h2>
      <p className="service-left-content-paragraph">
        Sebbene spesso confusi e usati come sinonimi, Certificazione BIS e
        Marchio ISI hanno definizioni e scopi specifici:
      </p>
      <p className="service-left-content-paragraph">
        <strong>Certificazione BIS :</strong> Il processo di concessione
        dell'approvazione a un prodotto dopo aver assicurato che soddisfi gli
        Standard Indiani richiesti. È il quadro sotto il quale vengono
        amministrate le valutazioni di conformità.
      </p>

      <p className="service-left-content-paragraph">
        <strong>Marchio ISI :</strong> Il simbolo di qualità o il marchio
        standard che viene assegnato a un prodotto dopo l'ottenimento della
        certificazione BIS. Indica che il prodotto è stato completamente
        certificato e soddisfa gli Standard Indiani richiesti.
      </p>
      <p className="service-left-content-paragraph">
        In questo modo, ISI costituisce l'impegno certificabile fisico, mentre
        la certificazione BIS offre il quadro amministrativo necessario.{" "}
      </p>

      <h2 className="service-left-content-heading-three">
        Perché la Certificazione BIS ISI Mark è Importante per i Produttori?
      </h2>

      <p className="service-left-content-paragraph">
        La Certificazione BIS ISI Mark detiene un valore significativo per i
        produttori nazionali, come:
      </p>

      <p className="service-left-content-paragraph">
        <strong>1. Garanzia di Qualità:</strong> Il marchio ISI significa che ha
        superato test rigorosi e ispezioni, mantenendo così gli standard più
        alti di qualità stabiliti. Questo, a sua volta, aumenta l'affidabilità e
        la sicurezza del prodotto riducendo al minimo le possibilità di difetti.
      </p>

      <p className="service-left-content-paragraph">
        <strong>2. Fiducia del Consumatore:</strong> I prodotti etichettati con
        il marchio ISI sono generalmente considerati sicuri ed efficaci. Questo
        contribuisce alla fedeltà al brand, e quindi a un brand più solido e
        prestigioso.
      </p>

      <p className="service-left-content-paragraph">
        <strong>3. Accesso al Mercato:</strong> Il mercato indiano ha un
        'abbondanza di articoli che sono rigorosamente vietati se non si
        possiede un certificato ISI valido. In tali casi, il marchio ISI funge
        da gateway per facilitare le vendite.
      </p>

      <p className="service-left-content-paragraph">
        <strong>4. Ottenere l'Ammissione al Mercato:</strong> In un ambiente
        altamente competitivo, i prodotti certificati ISI sono visti come aventi
        una reputazione positiva, avendo così un vantaggio competitivo più alto
        rispetto ad altri che non sono certificati.
      </p>

      <p className="service-left-content-paragraph">
        <strong>5. Conformità Normativa:</strong> Gli standard BIS sono tali che
        un produttore i cui prodotti si allineano con tali standard ha
        un'operazione fluida, senza ostacoli, libera da complessità legali.
      </p>

      <p className="service-left-content-paragraph">
        <strong>6. Promozione delle Esportazioni:</strong> I prodotti
        certificati ISI e quindi possiedono una forte reputazione del brand
        hanno maggiori probabilità di essere favoriti dai mercati esteri a causa
        della percezione di essere di alta qualità e di soddisfare gli standard
        globali.
      </p>

      <p className="service-left-content-paragraph">
        <strong>7. Sicurezza del Consumatore:</strong> Qualsiasi prodotto con
        certificazione ISI garantisce la sicurezza del consumatore da qualsiasi
        potenziale pericolo, incidenti o scarse prestazioni del prodotto.
      </p>

      <p className="service-left-content-paragraph">
        <strong>8. Controllo Qualità:</strong> La necessità di effettuare esami
        e controlli costanti garantisce che i produttori siano in grado di
        raggiungere una qualità costante per tutti i lotti prodotti.
      </p>
    </div>
  );
};

const RequirementSection = () => {
  return (
    <div id="requirement" className="flex flex-col scroll-mt-20">
      {/* Requirement */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Requisiti</span>
        <Separator className="service-left-content-separator" />
      </div>
      <h2 className="service-left-content-heading-two">
        Requisiti di Base per la Certificazione BIS ISI Mark
      </h2>
      <p className="service-left-content-paragraph">
        Per ottenere la certificazione BIS, i produttori nazionali devono
        soddisfare le seguenti obbligazioni chiave.
      </p>
      <PointsListWithoutHeading
        points={[
          "Deve esserci conformità alla Specifica dello Standard Indiano (ISS).",
          "Una licenza viene rilasciata e concessa solo ai produttori, non ai distributori o ai rivenditori.",
          "C'è bisogno di presentare domande separate per ogni ubicazione di fabbrica per la certificazione.",
          "Le fabbriche devono possedere personale qualificato e laboratori di test interni.",
          "Tutte le modalità di produzione devono essere condotte nella stessa unità di produzione dalle materie prime al packaging finale (L'outsourcing deve essere autorizzato in anticipo da BIS).",
          "La guida tecnica è fornita nei Manuali del Prodotto che dettagliano gli standard per l'ispezione, i test e la documentazione necessaria.",
        ]}
      />
      <h2 className="service-left-content-heading-three">
        Processo di Certificazione BIS ISI per Produttori Nazionali
      </h2>
      <p className="service-left-content-paragraph">
        Ottenere la certificazione BIS è un processo in più fasi. Ci sono due
        procedure principali per affrontare il processo di certificazione BIS:
        Procedura Normale e Procedura Semplificata.{" "}
      </p>
      <div className="service-left-content-heading-three">
        1. Procedura Normale (60-65 Giorni)
      </div>
      <PointsListWithoutHeading
        points={[
          "Il produttore allestisce laboratori interni e porta i prodotti in conformità con gli Standard Indiani.",
          "La domanda insieme alla documentazione richiesta viene presentata.",
          "Ispezione della Fabbrica da parte dei funzionari BIS.",
          "Test dei prodotti nei laboratori approvati BIS.",
          "La licenza viene concessa se tutte le condizioni sono soddisfatte.",
        ]}
      />

      <div className="service-left-content-heading-three">
        2. Procedura Semplificata (35-40 Giorni)
      </div>
      <PointsListWithoutHeading
        points={[
          "Il produttore presenta documenti di prodotti pre-testati da laboratori riconosciuti da BIS.",
          "La domanda insieme alla tariffa viene presentata.",
          "Esame dei documenti e ispezione della fabbrica.",
          "Test finale e concessione della licenza in un periodo di 35-40 giorni.",
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
          Documenti Richiesti
        </span>
        <Separator className="service-left-content-separator" />
      </div>
      <h2 className="service-left-content-heading-two">
        Documenti Richiesti per la Certificazione del Marchio ISI
      </h2>
      <p className="service-left-content-paragraph">
        I seguenti documenti devono essere presentati dai Produttori:
      </p>
      <PointsListWithoutHeading
        points={[
          "1. Modulo di Domanda Completato (Modulo V o VI a seconda dello schema)",
          "2. Certificato di Registrazione Aziendale (ad es., Registrazione Udyam, MSME, Certificato GST)",
          "3. Licenza di Fabbrica o Licenza Commerciale Municipale",
          "4. Elenco delle Macchine di Produzione",
          "5. Diagramma di Flusso del Processo di Produzione",
          "6. Piano di Layout dei Locali di Produzione",
          "7. Dettagli del Personale di Controllo Qualità Interno",
          "8. Dettagli delle Attrezzature di Test",
          "9. Accordo di Collaborazione Tecnica (se applicabile)",
          "10. Procura/Lettera di Autorizzazione",
          "11. Lettera di Autorizzazione del Nome del Brand (se si applica con un brand diverso)",
          "12. Rapporto di Test da laboratorio approvato BIS",
          "13. Fattura di Approvvigionamento Materie Prime",
          "14. Fotografie del Prodotto e dell'Imballaggio",
          "15. Dichiarazione di Conformità agli Standard",
          "16. Impegno Riguardo ai Prodotti Non Standard",
        ]}
      />
      <h3 className="service-left-content-heading-three">
        Vantaggi della Certificazione BIS ISI Mark
      </h3>
      <p className="service-left-content-paragraph">
        Per i produttori indiani, ottenere la Certificazione BIS ISI Mark
        fornisce vantaggi specifici:
      </p>
      <PointsListWithoutHeading
        points={[
          "Autorizzazione Nazionale: I produttori hanno il permesso di vendere i prodotti certificati in tutto il paese.",
          "Evitare Sanzioni: Rispettare gli standard BIS evita multe pesanti e problemi legali.",
          "Entrate Aumentate: La domanda è più alta per i prodotti che sono certificati.",
          "Potenziale di Esportazione: Alcuni mercati esteri identificano ISI come uno standard di eccellenza.",
          "Focus sulla Qualità: Un'azienda certificata mostra impegno verso i principi della produzione di qualità.",
        ]}
      />

      <h3 className="service-left-content-heading-three">
        {" "}
        Revoca della Licenza BIS{" "}
      </h3>
      <p className="service-left-content-paragraph">
        La licenza per certificare è di esclusiva proprietà dell'autorità BIS e
        può cancellare tale licenza se:
      </p>
      <PointsListWithoutHeading
        points={[
          "C'è un declino nella qualità dei prodotti che sono stati certificati.",
          "C'è un uso improprio del marchio ISI da parte dei produttori.",
          "Il produttore non segue un certo aspetto della licenza.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Secondo il Regolamento 11 dei Regolamenti BIS (Valutazione della
        Conformità), 2018, non c'è dubbio che la licenza possa essere sospesa o
        cancellata per mancato rispetto dei regolamenti notati.
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

      <h2 className="service-left-content-heading-two">Conclusione</h2>

      <p className="service-left-content-paragraph">
        Per la Certificazione BIS ISI Mark, ancora una volta, non c'è dubbio che
        abbia più di semplici passaggi burocratici per i produttori in India.
        Aiuta nell'stabilire una reputazione positiva e nel raggiungere una
        crescita sostenibile negli affari. Se gli standard BIS vengono
        rispettati, allora c'è la massima garanzia certificata che i prodotti
        siano affidabili e pronti per la vendita.
      </p>

      <p className="service-left-content-paragraph">
        In conclusione, il marchio ISI è diventato più di una semplice
        conformità legale, è diventato un marchio di garanzia in un ambiente
        aziendale dove la fiducia è difficile da trovare. È un segno di
        competitività nel mercato insieme alla conformità alle normative.
      </p>

      <p className="service-left-content-paragraph">
        Indipendentemente dal fatto che tu produca prodotti elettronici,
        elementi edilizi o qualsiasi altro prodotto in vendita, la
        Certificazione BIS ISI assicura che i tuoi prodotti siano allineati con
        gli standard di prima qualità dell'India salvaguardando la tua
        reputazione così come i tuoi consumatori.
      </p>
    </div>
  );
};

const ISIMarkFaq = () => {
  const faqData = [
    {
      question: "Cos'è la certificazione BIS e perché è importante?",
      answer:
        "La certificazione BIS viene rilasciata dal Bureau of Indian Standards per garantire che i prodotti siano conformi agli standard di sicurezza e qualità indiani. È fondamentale per la conformità legale, la fiducia dei consumatori e l'accettazione del mercato.",
    },
    {
      question: "Qual è la differenza tra licenza BIS e marchio ISI?",
      answer:
        "La licenza BIS è un documento legale che autorizza un produttore a utilizzare il marchio ISI. Il marchio ISI è l'etichetta visibile sui prodotti che indica la certificazione BIS.",
    },
    {
      question: "Quanto tempo ci vuole per ottenere la certificazione BIS?",
      answer:
        "Tipicamente, 6-10 settimane a seconda del tipo di prodotto, dei requisiti di test e dei risultati dell'audit",
    },
    {
      question: "Qual è il periodo di validità di una licenza BIS?",
      answer:
        "Di solito da 1 a 2 anni, dopo i quali deve essere rinnovata. Il rinnovo dovrebbe essere avviato almeno 30 giorni prima della scadenza.",
    },
    {
      question: "Qual è il costo della certificazione BIS?",
      answer:
        "I costi variano ma possono variare da ₹25.000 a ₹100.000+, inclusi test, audit e tariffe della licenza.",
    },
    {
      question: "La certificazione BIS è obbligatoria per tutti i prodotti?",
      answer:
        "No. È obbligatoria solo per i prodotti elencati sotto lo schema 1 della certificazione BIS.",
    },
    {
      question: "Come posso trovare lo standard IS giusto per il mio prodotto?",
      answer:
        "Visita il sito web BIS o consulta con laboratori di test e consulenti riconosciuti BIS per identificare lo standard applicabile.",
    },
    {
      question:
        "I produttori stranieri possono richiedere la certificazione BIS?",
      answer:
        "Sì. Attraverso lo Schema di Certificazione per Produttori Stranieri (FMCS), entità estere possono ottenere licenze BIS per l'uso del marchio ISI.",
    },
    {
      question: "Cosa succede se il mio prodotto non supera i test BIS?",
      answer:
        "Dovrai correggere i problemi e ri-inviare per i test. Le domande possono essere messe in pausa fino a quando non viene dimostrata una conformità di successo.",
    },
    {
      question: "La certificazione BIS è necessaria per l'esportazione?",
      answer:
        "Anche se non sempre obbligatoria per le esportazioni, la certificazione BIS aumenta la credibilità e può soddisfare acquirenti internazionali o organismi normativi.",
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
          Domande Frequenti
        </h2>

        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          Non riesci a trovare la risposta che stai cercando?{" "}
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
      path: "/a-guide-to-bis-certification-indian-bis",
    },
    {
      code: "zh",
      name: "Chinese",
      flag: "https://flagcdn.com/w320/cn.png",
      path: "/zh/bis-isi-mark-renzheng",
    },
    {
      code: "de",
      name: "German",
      flag: "https://flagcdn.com/w320/de.png",
      path: "/de/bis-isi-mark-zertifizierung",
    },
    {
      code: "nl",
      name: "Dutch",
      flag: "https://flagcdn.com/w320/nl.png",
      path: "/nl/bis-isi-mark-certificering",
    },
    {
      code: "ja",
      name: "Japanese",
      flag: "https://flagcdn.com/w320/jp.png",
      path: "/ja/bis-isi-mark-shounin",
    },
    {
      code: "ko",
      name: "Korean",
      flag: "https://flagcdn.com/w320/kr.png",
      path: "/ko/bis-isi-mark-injeung",
    },
    {
      code: "fr",
      name: "French",
      flag: "https://flagcdn.com/w320/fr.png",
      path: "/fr/certification-bis-marque-isi",
    },
    {
      code: "es",
      name: "Spanish",
      flag: "https://flagcdn.com/w320/es.png",
      path: "/es/certificacion-bis-marca-isi",
    },
    {
      code: "th",
      name: "Thai",
      flag: "https://flagcdn.com/w320/th.png",
      path: "/th/bis-isi-mark-raprong",
    },
    {
      code: "id",
      name: "Indonesian",
      flag: "https://flagcdn.com/w320/id.png",
      path: "/id/sertifikasi-bis-isi-mark",
    },
    // {
    //   code: "it",
    //   name: "Italian",
    //   flag: "https://flagcdn.com/w320/it.png",
    //   path: "/it/certificazione-bis-isi-mark",
    // },
    {
      code: "ar",
      name: "Arabic",
      flag: "https://flagcdn.com/w320/sa.png",
      path: "/ar/dalil-shahadat-bis-bis-alhind",
    },
    {
      code: "vi",
      name: "Vietnamese",
      flag: "https://flagcdn.com/w320/vn.png",
      path: "/vi/chung-nhan-bis-isi-mark",
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

const ISIMarkServices = () => {
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
                Miglior Consulente per Certificati in India
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
              Certificazione di Registrazione CDSCO
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
              Gestione dei Rifiuti di Plastica
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
