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
import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect, useMemo } from "react";
import ServicesRightSideContentFrench from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentFrench";
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
import CDSCO from "../../assets/images/CDSCO.jpg";
import PlasticWasteManagement from "../../assets/images/PlasticWasteManagement.jpg";
import EPRCertificate from "../../assets/images/EPRCertificate.jpg";
import LMPC from "../../assets/images/LMPC.jpg";
import ISIMark from "../../assets/images/ISIMark.jpg";
import { BoxReveal } from "@/components/magicui/box-reveal";
import FooterFrench from "@/components/manual/Footer/FooterFrench";
import ServiceAuthorFrench from "@/components/manual/ServiceAuthor/ServiceAuthorFrench";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const CRSRegistrationFrench = () => {
  return (
    <div className="relative">
      {/* CRS Registration Meta Tags */}
      <CRSRegistrationMetaTags />
      {/* CRS Registration Breadcrumb */}
      <CRSRegistrationBreadcrumb />
      {/* CRS Registration Hero Section */}
      <CRSRegistrationHero />
      {/* CRS Registration Index Section */}
      <CRSRegistrationIndex />
      {/* CRS Registration Main Content Section */}
      <CRSRegistrationMainContent />
      {/* Footer Section */}
      <FooterFrench />
      {/* Scroll To Top Button Section */}
      <ScrollToTopButton />
    </div>
  );
};

export default CRSRegistrationFrench;

const CRSRegistrationMetaTags = () => {
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: window.location.origin + "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Enregistrement BIS CRS",
        item: window.location.href,
      },
    ],
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>
        Enregistrement BIS - Schéma d'Enregistrement Obligatoire (CRS)
      </title>
      <meta
        name="description"
        content="L'enregistrement BIS consiste à obtenir une licence du BIS pour les produits électroniques et informatiques qui sont conformes aux normes indiennes applicables dans le cadre du schéma CRS."
      />
      <meta
        name="keywords"
        content="Certificat BIS, Processus d'enregistrement BIS, Enregistrement BIS, Processus d'enregistrement BIS en ligne, Certification BIS pour produits électroniques, Processus d'enregistrement BIS en Inde, Enregistrement BIS pour produits électroniques, Schéma d'enregistrement obligatoire"
      />
      <meta name="author" content="Dhruv Aggarwal" />
      <meta name="publisher" content="Sun Certifications India" />
      <meta name="robots" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href={window.location.href} />

      {/* Open Graph Meta Tags */}
      <meta
        property="og:title"
        content="Enregistrement BIS - Schéma d'Enregistrement Obligatoire (CRS)"
      />
      <meta
        property="og:description"
        content="L'enregistrement BIS consiste à obtenir une licence du BIS pour les produits électroniques et informatiques qui sont conformes aux normes indiennes applicables dans le cadre du schéma CRS."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />

      {/* Twitter Meta Tags */}
      <meta
        name="twitter:title"
        content="Enregistrement BIS - Schéma d'Enregistrement Obligatoire (CRS)"
      />
      <meta
        name="twitter:description"
        content="L'enregistrement BIS consiste à obtenir une licence du BIS pour les produits électroniques et informatiques qui sont conformes aux normes indiennes applicables dans le cadre du schéma CRS."
      />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Breadcrumb Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbStructuredData)}
      </script>
    </Helmet>
  );
};

const CRSRegistrationBreadcrumb = () => {
  return (
    <div className="absolute md:top-5 top-3 left-0 w-full z-30">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="w-fit font-inter">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Accueil</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Enregistrement BIS CRS</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const CRSRegistrationHero = () => {
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
              Expertise Certifiée
            </span>
          </div>

          <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              Enregistrement BIS CRS
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>
          </h1>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            Obligatoire pour les produits électroniques afin d'assurer la
            sécurité et la qualité. Obtenez l'approbation BIS avec l'aide
            d'experts !
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
                Voir les Services
              </span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <CRSRegistrationHeroContactForm />
      </div>
    </main>
  );
};

const CRSRegistrationHeroContactForm = () => {
  const [loading, setLoading] = useState(false);

  // Function to get page name based on URL
  const getPageName = () => {
    const path = window.location.pathname;

    // Service pages
    if (path.includes("/fr/quest-ce-que-le-crs-bis-ou-lenregistrement-crs"))
      return "CRS Registration French";
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
        title: "Veuillez entrer un nom complet valide.",
        description: "Le nom ne doit contenir que des lettres et des espaces.",
      });
      setLoading(false);
      return;
    }

    // Email validation - allow any domain
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "Veuillez entrer une adresse e-mail valide.",
        description: "Vérifiez si le format de votre e-mail est correct",
      });
      setLoading(false);
      return;
    }

    // Phone number validation
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "Veuillez entrer un numéro de téléphone valide",
        description: "Le numéro de téléphone doit être (8-15 chiffres)",
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
        title: "Formulaire de contact soumis avec succès !",
        description:
          "Merci de nous avoir contactés. Notre équipe vous répondra bientôt.",
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
        error.response?.data?.message || "Quelque chose s'est mal passé";
      toast({
        variant: "destructive",
        title:
          errorMessage || "Échec de la soumission du formulaire de contact !",
        description:
          "Quelque chose s'est mal passé. Veuillez vérifier vos détails et réessayer.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="z-20 w-full md:w-[580px] h-auto md:h-[435px] flex flex-col">
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-poppins font-semibold text-[18px] md:text-[20px] text-[#008080]">
          Contactez-nous
        </span>
        <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
      </div>

      <div className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
        Réservez un Rendez-vous
      </div>

      <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
        Vous voulez contacter notre équipe et planifier un appel ?
        <span className="text-black"> Essayez maintenant</span>
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
            placeholder="Nom complet *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Adresse e-mail *"
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
            placeholder="Numéro de contact *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="companyName"
            value={companyName}
            onChange={handleOnChange}
            placeholder="Nom de l'entreprise *"
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
            placeholder="Nom du produit *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="message"
            value={message}
            onChange={handleOnChange}
            placeholder="Certification requise*"
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
              <span>Envoi en cours</span>
            </div>
          ) : (
            <div className="flex gap-3 items-center justify-center">
              <span>Réserver un Rendez-vous</span>
            </div>
          )}
        </Button>
      </form>
    </div>
  );
};

const CRSRegistrationIndex = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const stickyRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const SECTIONS = useMemo(
    () => [
      "overview",
      "eligibility",
      "documents",
      "registration",
      "fees",
      "elabelling",
    ],
    []
  );

  const MENU_ITEMS = {
    overview: "Aperçu",
    eligibility: "Éligibilité",
    documents: "Documents",
    registration: "Enregistrement",
    fees: "Frais d'enregistrement",
    elabelling: "Étiquetage électronique",
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

const CRSRegistrationMainContent = () => {
  return (
    <div>
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side */}
          <CRSRegistrationMainContentLeft />
          {/* Right Side */}
          <ServicesRightSideContentFrench />
        </div>
      </div>
      <CRSRegistrationServiceFaq />
      <CISProductTable />
      <LanguageSelector />
      <div id="services">
        <Services />
      </div>
    </div>
  );
};

const CRSRegistrationMainContentLeft = () => {
  return (
    <div className="flex-1">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        <div className="flex flex-col gap-2">
          <h2 className="service-left-content-heading-two">
            Qu'est-ce que l'enregistrement BIS ?
          </h2>

          <p className="service-left-content-paragraph">
            Le Bureau des normes indiennes (BIS) est l'organisme national de
            normalisation en Inde et fonctionne sous l'égide du ministère des
            Affaires des consommateurs, de l'Alimentation et de la distribution
            publique du gouvernement indien. Le BIS est responsable du maintien
            des références de qualité, de sécurité et de performance pour divers
            produits et services en Inde conformément aux normes indiennes (IS)
            pertinentes.
          </p>

          <p className="service-left-content-paragraph">
            Le BIS est responsable de la supervision et de la mise en œuvre de
            divers schémas en Inde. Le Schéma d'enregistrement obligatoire (CRS)
            est un schéma de certification très important et obligatoire du BIS
            couvrant diverses catégories de produits électroniques et
            informatiques.
          </p>

          <p className="service-left-content-paragraph">
            Les performances et la sécurité des produits indiens sont un
            problème important pour l'Inde. La certification BIS CRS garantit
            que les produits électroniques et informatiques sont conformes aux
            normes indiennes et aide à protéger les consommateurs contre les
            produits non conformes et de qualité inférieure.
          </p>
        </div>

        {/* Overview Section */}
        <CRSRegistrationMainContentLeftOverviewSection />

        {/* Divider */}
        <div className="service-left-content-divider" />

        {/* Eligibility Section */}
        <CRSRegistrationMainContentLeftEligibilitySection />

        {/* Divider */}
        <div className="service-left-content-divider" />

        {/* Documents Section */}
        <CRSRegistrationMainContentLeftDocumentsSection />

        {/* Divider */}
        <div className="service-left-content-divider" />

        {/* Registration Section */}
        <CRSRegistrationMainContentLeftRegistrationSection />

        {/* Divider */}
        <div className="service-left-content-divider" />

        {/* Fees Section */}
        <CRSRegistrationMainContentLeftFeesSection />

        {/* Divider */}
        <div className="service-left-content-divider" />

        {/* E-Labelling  */}
        <CRSRegistrationMainContentLeftELabellingSection />

        {/* Divider */}
        <div className="service-left-content-divider" />
        <ServiceAuthorFrench />
      </div>
    </div>
  );
};

const CRSRegistrationMainContentLeftOverviewSection = () => {
  return (
    <div id="overview" className="flex flex-col scroll-mt-20">
      {/* Overview */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Aperçu</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Qu'est-ce qu'un Schéma d'Enregistrement Obligatoire (CRS) ?
      </h2>

      <p className="service-left-content-paragraph">
        Le Schéma d'enregistrement obligatoire (CRS) est un schéma
        d'enregistrement de produits BIS qui a été lancé en 2012 et était
        principalement axé sur les produits électroniques. Au fil des ans, alors
        que plus de produits ont été publiés, le CRS a été étendu pour inclure
        une gamme plus large de catégories de produits, qui incluent les
        produits électriques tels que les appareils, l'équipement solaire, les
        batteries et plus encore. L'enregistrement CRS est obligatoire pour les
        produits spécifiés dans les ordonnances de contrôle de qualité (QCO)
        émises par différents ministères.
      </p>

      <p className="service-left-content-paragraph">
        Tout produit qui relève du schéma CRS obligatoire doit être vendu,
        importé ou distribué en Inde seulement après avoir obtenu
        l'enregistrement auprès du BIS.
      </p>

      <h3 className="service-left-content-heading-three">
        Histoire de la certification CRS en Inde
      </h3>

      <p className="service-left-content-paragraph">
        En 2012, le premier QCO sous le schéma CRS a été publié et s'est
        concentré sur l'équipement électronique et informatique. Depuis lors,
        des QCO supplémentaires ont été émis dans les secteurs suivants :
      </p>

      <PointsListWithoutHeading
        points={[
          "Électronique grand public",
          "Éclairage et LED",
          "Batteries et cellules",
          "Dispositifs de communication sans fil",
          "Panneaux solaires et composants",
          "Appareils électriques pour ménages",
        ]}
      />

      <p className="service-left-content-paragraph">
        La liste pour la certification CRS s'étend rapidement, il est donc très
        important pour les fabricants d'être proactifs et conscients des mises à
        jour récentes.
      </p>
    </div>
  );
};

const CRSRegistrationMainContentLeftEligibilitySection = () => {
  return (
    <div id="eligibility" className="flex flex-col scroll-mt-20">
      {/* Eligibility */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Éligibilité</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Critères d'éligibilité pour l'enregistrement BIS CRS
      </h2>

      <p className="service-left-content-paragraph">
        Qui peut demander une certification BIS sous CRS ?
      </p>

      <p className="service-left-content-paragraph">
        En Inde, un certificat BIS sous le Schéma d'enregistrement obligatoire
        (CRS) ne peut être accordé qu'aux fabricants qui répondent aux exigences
        établies par le Bureau des normes indiennes. Ceci est pour s'assurer que
        seuls les fabricants authentiques obtiennent le privilège de pouvoir
        s'enregistrer ainsi que d'apposer le logo BIS CRS sur leurs produits.
      </p>

      <div className="service-left-content-heading-three">
        Liste de vérification des critères d'éligibilité
      </div>

      <p className="service-left-content-paragraph">
        Le demandeur doit être un fabricant - Seul le fabricant original (pas le
        commerçant ou le revendeur) du produit est éligible pour faire une
        demande.
      </p>

      <p className="service-left-content-paragraph">
        L'emplacement peut être indien ou étranger - Les fabricants indiens et
        les marques internationales peuvent tous deux faire une demande.
      </p>

      <p className="service-left-content-paragraph">
        AIR (Représentant indien autorisé) - Les fabricants étrangers doivent
        nommer un AIR - soit leur succursale indienne ou un tiers formellement
        autorisé.
      </p>
    </div>
  );
};

const CRSRegistrationMainContentLeftDocumentsSection = () => {
  return (
    <div id="documents" className="flex flex-col scroll-mt-20">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Documents</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Documents requis pour l'enregistrement BIS CRS
      </h2>

      <div className="service-left-content-heading-three">
        Liste des documents requis pour obtenir l'enregistrement BIS CRS.
      </div>

      <p className="service-left-content-paragraph">
        Le remplissage de la demande d'enregistrement BIS CRS est entièrement
        numérique, cependant, il nécessite encore des documents entièrement
        complétés pour obtenir l'approbation. Chaque erreur mineure et un échec
        à respecter tout aspect, tel que le type de document, les formats
        incorrects ou les mauvais types de fichiers peuvent causer le rejet ou
        le retard de la demande.
      </p>

      <p className="service-left-content-paragraph">
        Pour un traitement approprié et plus rapide des documents BIS, il est
        nécessaire d'avoir les documents appropriés avec vous à chaque étape.
        Avoir les documents appropriés prêts garantit que votre certificat BIS
        est traité à temps et reste légalement clair de tout audit de
        conformité, inspection douanière ou approbation de marché.
      </p>

      <div className="service-left-content-heading-three">
        Liste de vérification des documents pour l'enregistrement BIS CRS
      </div>

      <p className="service-left-content-paragraph">
        • Preuve d'adresse du fabricant - Bail d'usine, facture d'utilité ou
        licence
      </p>
      <p className="service-left-content-paragraph">
        • Rapport d'essai d'un laboratoire approuvé par le BIS - Doit être
        récent (dans les 90 jours) et référencer le code IS
      </p>
      <p className="service-left-content-paragraph">
        • Engagements (selon le format BIS) - Inclut la responsabilité, la
        conformité et la responsabilité du produit
      </p>
      <p className="service-left-content-paragraph">
        • Certificat de marque - Requis si la marque est enregistrée
      </p>
      <p className="service-left-content-paragraph">
        • Accord AIR (Pour les demandeurs étrangers) - Signé et notarié
      </p>
    </div>
  );
};

const CRSRegistrationMainContentLeftRegistrationSection = () => {
  return (
    <div id="registration" className="flex flex-col scroll-mt-20">
      {/* Registration */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">
          Processus d'enregistrement
        </span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Processus d'enregistrement BIS CRS
      </h2>

      <p className="service-left-content-paragraph">
        L'enregistrement BIS CRS est un processus entièrement en ligne via le
        portail d'enregistrement BIS. Il ne s'agit pas uniquement de procédures
        qui incluent le téléchargement de documents. Il nécessite également une
        attention particulière de nature technique, la compréhension des
        réglementations, ainsi qu'une conformité totale avec la norme indienne
        (IS).
      </p>

      <div className="service-left-content-heading-three">
        Étape 1 : Essai du produit dans un laboratoire autorisé par le BIS
      </div>

      <PointsListWithoutHeading
        points={[
          "Sélectionner un laboratoire de la liste approuvée par le BIS",
          "Soumettre un échantillon du produit pour lequel l'essai doit être effectué pour l'IS pertinent",
          "Obtenir le rapport d'essai de l'échantillon selon le format de rapport d'essai BIS",
        ]}
      />

      <div className="service-left-content-heading-three">
        Étape 2 : Préparation des documents
      </div>

      <PointsListWithoutHeading
        points={[
          "Collecter les documents requis, comme déjà décrit",
          "S'assurer que les documents sont correctement nommés, formatés, signés et datés",
          "Développer une étiquette de produit qui est un autocollant factice qui contient un espace pour un logo BIS et un espace pour la norme IS",
        ]}
      />

      <div className="service-left-content-heading-three">
        Étape 3 : Remplir la demande en ligne
      </div>

      <PointsListWithoutHeading
        points={[
          "Aller au portail BIS CRS (https://www.bis.org.in/) et se connecter ou s'inscrire",
          "Compléter le produit, le numéro de modèle, la marque et l'unité de fabrication de l'AIR, si nécessaire",
          "Suivre les étapes pour le paiement des frais gouvernementaux",
        ]}
      />

      <div className="service-left-content-heading-three">
        Étape 4 : Examen de la demande par le BIS
      </div>

      <PointsListWithoutHeading
        points={[
          "Le BIS vérifie les documents de support et les rapports de laboratoire",
          "Si nécessaire, une clarification est soulevée via le portail",
          "Répondre avec les bons documents ou des explications logiques",
        ]}
      />

      <p className="service-left-content-paragraph">
        S'il s'agit d'une requête de clarification, elle doit être répondue dans
        les 30 jours, sinon la demande va aux fichiers d'archive, ce qui
        signifie rejetée.
      </p>

      <div className="service-left-content-heading-three">
        Étape 5 : Octroi de l'enregistrement BIS
      </div>

      <PointsListWithoutHeading
        points={[
          "Le certificat BIS sera émis si les fonctionnaires du BIS sont satisfaits des résultats des évaluations qu'ils ont menées",
        ]}
      />

      <p className="service-left-content-paragraph">
        Votre certificat inclura :
      </p>

      <PointsListWithoutHeading
        points={[
          "Numéro d'enregistrement BIS",
          "Nom de la marque",
          "Modèle du produit",
          "Code de norme IS",
        ]}
      />

      <div className="service-left-content-heading-three">
        Étape 6 : Étiquetage et distribution
      </div>

      <PointsListWithoutHeading
        points={[
          "Les produits certifiés BIS doivent porter :",
          "Logo BIS CRS",
          "Code IS qui se rapporte au produit",
          "Numéro d'enregistrement BIS",
          "Le numéro d'enregistrement et le logo BIS doivent être imprimés ou intégrés numériquement selon les réglementations BIS.",
        ]}
      />
    </div>
  );
};

const CRSRegistrationMainContentLeftFeesSection = () => {
  return (
    <div id="fees" className="flex flex-col scroll-mt-20">
      {/* Fees */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">
          Frais d'enregistrement
        </span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Frais d'enregistrement BIS CRS, validité et directives de renouvellement
      </h2>

      <p className="service-left-content-paragraph">
        Pour obtenir un certificat BIS sous le CRS, le demandeur est tenu de
        payer les frais gouvernementaux ainsi que le paiement pour que le
        produit soit testé. Même si le processus est en ligne et que l'interface
        est rationalisée, de nombreux demandeurs font face à des retards sur
        leurs demandes et des rejets dus au sous-paiement et aux demandes mal
        déposées.
      </p>

      <h3 className="service-left-content-heading-three">
        Structure des frais pour l'enregistrement CRS
      </h3>

      <p className="service-left-content-paragraph">
        • Frais gouvernementaux : ₹53,000 + 18% TPS par rapport d'essai
      </p>
      <p className="service-left-content-paragraph">
        • Frais d'essai : ₹10,000 – ₹20,000 + 18% TPS (varie selon le
        produit/laboratoire)
      </p>
      <p className="service-left-content-paragraph">
        • Rapport supplémentaire dans la même demande : ₹20,000 + 18% TPS par
        rapport
      </p>
      <p className="service-left-content-paragraph">
        • Frais de renouvellement : ₹53,000 + 18% TPS
      </p>

      <h3 className="service-left-content-heading-three">
        Validité et renouvellement du certificat CRS
      </h3>

      <p className="service-left-content-paragraph">
        • Validité initiale : 2 ans
      </p>
      <p className="service-left-content-paragraph">
        • Durée de renouvellement : Jusqu'à 5 ans (si aucun changement de
        produit)
      </p>
      <p className="service-left-content-paragraph">
        • Processus de renouvellement : En ligne, basé sur une nouvelle
        déclaration sous serment + frais de renouvellement
      </p>
      <p className="service-left-content-paragraph">
        • Nouveau test requis ? : Non sauf si les spécifications du
        produit/norme IS changent
      </p>
    </div>
  );
};

const CRSRegistrationMainContentLeftELabellingSection = () => {
  return (
    <div id="elabelling" className="flex flex-col scroll-mt-20">
      {/* E-Labelling */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">
          Étiquetage électronique
        </span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Directives d'étiquetage électronique pour les produits certifiés CRS
      </h2>

      <h3 className="service-left-content-heading-three">
        Qu'est-ce que l'étiquetage électronique ?
      </h3>

      <p className="service-left-content-paragraph">
        L'étiquetage électronique est la pratique d'afficher les informations
        réglementaires dans un dispositif électroniquement au lieu de les
        imprimer et de les apposer sur le dispositif. Sous le Schéma
        d'enregistrement obligatoire (CRS) du BIS, les produits spécifiés, en
        particulier les dispositifs compacts ou numériques, sont capables
        d'afficher les détails du certificat BIS, la marque standard et le code
        IS via l'interface logicielle ou l'emballage numérique.
      </p>

      <h3 className="service-left-content-heading-three">
        Exigences pour l'étiquetage électronique :
      </h3>

      <p className="service-left-content-paragraph">
        • Étiquette physique sur l'emballage - La boîte du produit ou
        l'emballage externe doit afficher le logo BIS CRS et les détails
        d'enregistrement.
      </p>
      <p className="service-left-content-paragraph">
        • Étiquettes amovibles pour l'emballage en vrac - Si les produits sont
        expédiés en vrac, une étiquette adhésive amovible sur l'emballage
        extérieur est acceptable.
      </p>
      <p className="service-left-content-paragraph">
        • Aucun outil nécessaire pour l'accès - Les utilisateurs doivent pouvoir
        accéder aux informations d'étiquette électronique sans avoir besoin
        d'outils ou d'accessoires.
      </p>
      <p className="service-left-content-paragraph">
        • Programmation sécurisée - Les informations d'étiquette électronique
        doivent être intégrées dans le firmware/logiciel, verrouillées contre la
        modification par tout tiers.
      </p>
      <p className="service-left-content-paragraph">
        • Accès basé sur le menu - Les utilisateurs doivent accéder aux
        informations en pas plus de 4 étapes via l'interface de menu du
        dispositif.
      </p>
      <p className="service-left-content-paragraph">
        • Instructions requises - Des instructions sur la façon d'accéder aux
        détails d'étiquette électronique doivent être fournies.
      </p>

      <p className="service-left-content-paragraph">
        Comment Sun Certifications India peut vous aider avec l'enregistrement
        BIS sous le schéma CRS
      </p>

      <h2 className="service-left-content-heading-two">
        Pourquoi choisir un consultant BIS ?
      </h2>

      <p className="service-left-content-paragraph">
        L'ensemble de l'enregistrement BIS CRS est très technique et exhaustif
        en ce qui concerne les règles et le volume de documentation. En
        l'absence d'une compréhension approfondie des normes indiennes, des QCO
        récents, de la structure du rapport d'essai et des flux de travail dans
        l'interface du portail, les demandeurs risquent de perdre
        considérablement en termes d'actions ultérieures de retards, de rejet ou
        de non-conformité active de longue durée. C'est là que Sun
        Certifications India intervient avec un associé réputé et fiable pour
        aider le demandeur dans chaque détail du schéma de certification
        obligatoire.
      </p>
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

const CRSRegistrationServiceFaq = () => {
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const allFaqs = [
    {
      id: "item-1",
      question: "1. Qu'est-ce que l'enregistrement BIS ?",
      answer:
        "La certification BIS est un processus de conformité régi par le Bureau des normes indiennes, qui vérifie qu'un produit répond aux normes indiennes (IS) applicables pour la qualité, la sécurité et la fiabilité.",
    },
    {
      id: "item-2",
      question: "2. Qu'est-ce que l'enregistrement CRS sous BIS ?",
      answer:
        "CRS signifie Schéma d'Enregistrement Obligatoire. C'est un processus d'enregistrement obligatoire pour des catégories de produits spécifiques telles que l'électronique, l'électrique, les batteries et les articles solaires. Les produits sous CRS doivent être testés et enregistrés auprès du BIS avant de pouvoir être vendus en Inde.",
    },
    {
      id: "item-3",
      question: "3. La certification BIS est-elle obligatoire en Inde ?",
      answer:
        "Oui. Pour tous les produits listés sous la liste de produits CRS (actuellement 80+ articles), l'enregistrement BIS est obligatoire pour la fabrication, l'importation ou la vente en Inde.",
    },
    {
      id: "item-4",
      question: "4. Quelle est la différence entre BIS CRS et la marque ISI ?",
      answer:
        "BIS CRS : Pour l'électronique et les biens informatiques, seulement pour les produits obligatoires notifiés sous QCO. <br />Marque ISI : Utilisée pour une gamme plus large de produits, peut être volontaire ou obligatoire selon la catégorie de produit.",
    },
    {
      id: "item-5",
      question: "5. Qui peut demander l'enregistrement BIS CRS ?",
      answer:
        "Seuls les fabricants peuvent faire une demande. Cela inclut les fabricants indiens et étrangers. Les marques étrangères doivent nommer un Représentant indien autorisé (AIR).",
    },
    {
      id: "item-6",
      question: "6. Quel est le rôle d'un AIR ?",
      answer:
        "Un Représentant indien autorisé (AIR) est légalement responsable de déposer la demande BIS au nom d'un fabricant étranger. Il agit comme le lien officiel entre le BIS et le demandeur étranger.",
    },
    {
      id: "item-7",
      question: "7. Combien de temps prend l'enregistrement BIS CRS ?",
      answer:
        "Le processus prend généralement 3-4 semaines, en supposant que tous les documents et rapports d'essai sont soumis correctement et qu'aucune objection n'est soulevée par le BIS.",
    },
    {
      id: "item-8",
      question: "8. Combien coûte le certificat BIS CRS ?",
      answer:
        "Les coûts incluent : <br />Frais d'essai : ₹10,000–₹20,000 + TPS <br />Frais gouvernementaux : ₹53,000 + TPS par rapport d'essai <br />Frais supplémentaires : Affidavit, courrier, documentation AIR, etc. <br />Remise applicable pour les fabricants indiens enregistrés MSME",
    },
    {
      id: "item-9",
      question: "9. Quelle est la validité des certificats BIS CRS ?",
      answer:
        "La licence BIS initiale est valide pour 2 ans. Elle peut être renouvelée jusqu'à 5 ans si les détails du produit et de la fabrication restent inchangés.",
    },
    {
      id: "item-10",
      question:
        "10. La certification BIS peut-elle être obtenue volontairement ?",
      answer:
        "Non. Sous CRS, vous ne pouvez pas faire de demande volontaire pour des produits qui ne sont pas listés sous les QCO. La certification volontaire n'est applicable que pour les produits non-CRS via le schéma ISI.",
    },
    {
      id: "item-11",
      question: "11. Où puis-je trouver la liste des produits BIS CRS ?",
      answer:
        'Vous pouvez visiter le site web officiel du BIS <a href="https://www.crsbis.in/BIS/publicdashAction.do" target="_blank" rel="noopener noreferrer" className="text-[#1A8781] underline">https://www.crsbis.in/BIS/publicdashAction.do</a> et naviguer vers la section "Produits sous CRS" pour voir la liste complète des produits couverts.',
    },
    {
      id: "item-12",
      question: "12. La marque BIS peut-elle être affichée électroniquement ?",
      answer:
        "Oui, par l'étiquetage électronique, mais elle doit respecter les règles strictes du BIS : Les informations d'étiquette doivent être intégrées dans le firmware <br />Accès facile en 4 étapes dans le menu de l'appareil <br />L'emballage physique doit toujours porter les informations réglementaires",
    },
    {
      id: "item-13",
      question:
        "13. Que se passe-t-il si je n'obtiens pas l'enregistrement BIS pour un produit obligatoire ?",
      answer:
        "Sanctions sévères, y compris : <br />Saisie du produit <br />Rejets douaniers <br />Amendes légales <br />Radiation des portails e-commerce <br />Interdiction permanente du marché indien",
    },
    {
      id: "item-14",
      question:
        "14. Un certificat BIS peut-il couvrir plusieurs modèles ou marques ?",
      answer:
        "Non. Chaque marque et emplacement d'usine doit être certifié séparément. Plusieurs modèles peuvent être ajoutés en utilisant des rapports supplémentaires, mais seulement sous la même demande et marque.",
    },
    {
      id: "item-15",
      question: "15. Comment Sun Certifications India peut-il m'aider ?",
      answer:
        "Nous offrons : <br />Support complet de documentation <br />Coordination de laboratoire <br />Gestion des demandes du portail BIS <br />Résolution de requêtes et suivi BIS <br />Guidance de renouvellement et d'étiquetage <br />Assurance de conformité pour les marques étrangères via les services AIR",
    },
  ];

  const visibleFaqs = showAllFaqs ? allFaqs : allFaqs.slice(0, 5);

  return (
    <div id="faqs" className="my-2 scroll-mt-20">
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          Questions Fréquemment Posées
        </h2>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          Vous ne trouvez pas la réponse que vous cherchez ?{" "}
          <span className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4">
            Contactez-nous !
          </span>
        </p>

        <div className="w-full max-w-[1104px] mt-[16px] md:mt-[24px] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {visibleFaqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                  <h3>{faq.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                  <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Show More/Show Less Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAllFaqs(!showAllFaqs)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A8781] text-white font-geist font-medium text-[16px] rounded-lg hover:bg-[#125E5A] transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              {showAllFaqs ? (
                <>
                  <svg
                    className="w-5 h-5 transform rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  Afficher moins de FAQ
                </>
              ) : (
                <>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  Afficher plus de FAQ
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const productsData = [
  {
    id: 1,
    product: "AMPLIFICATEURS AVEC PUISSANCE D'ENTRÉE 2000W ET PLUS",
    isNumber: "IS 616:2017",
    date: "03 juillet 2013",
  },
  {
    id: 2,
    product: "MACHINE DE TRAITEMENT AUTOMATIQUE DE DONNÉES",
    isNumber: "IS 13252(Partie 1):2010",
    date: "03 juillet 2013",
  },
  {
    id: 3,
    product: "HORLOGES ÉLECTRONIQUES AVEC ALIMENTATION RÉSEAU",
    isNumber: "IS 302-2-26:2014",
    date: "03 juillet 2013",
  },
  {
    id: 4,
    product: "JEUX ÉLECTRONIQUES (VIDÉO)",
    isNumber: "IS 616:2017",
    date: "03 juillet 2013",
  },
  {
    id: 5,
    product:
      "SYSTÈMES MUSICAUX ÉLECTRONIQUES AVEC PUISSANCE D'ENTRÉE 200W ET PLUS",
    isNumber: "IS 616:2017",
    date: "03 juillet 2013",
  },
  {
    id: 6,
    product: "ORDINATEUR PORTABLE/NOTEBOOK/TABLETTE",
    isNumber: "IS 13252(Partie 1):2010",
    date: "03 juillet 2013",
  },
  {
    id: 7,
    product: "FOURS À MICRO-ONDES",
    isNumber: "IS 302-2-25:2014",
    date: "03 juillet 2013",
  },
  {
    id: 8,
    product:
      "LECTEURS DE DISQUES OPTIQUES AVEC AMPLIFICATEURS INTÉGRÉS DE PUISSANCE D'ENTRÉE 200W ET PLUS",
    isNumber: "IS 616:2017",
    date: "03 juillet 2013",
  },
  {
    id: 9,
    product: "TÉLÉVISEURS PLASMA/LCD/LED DE TAILLE D'ÉCRAN 32\" ET PLUS",
    isNumber: "IS 616:2017",
    date: "03 juillet 2013",
  },
  {
    id: 10,
    product: "IMPRIMANTES, TRACEURS",
    isNumber: "IS 13252(Partie 1):2010",
    date: "03 juillet 2013",
  },
  {
    id: 11,
    product: "SCANNERS",
    isNumber: "IS 13252(Partie 1):2010",
    date: "03 juillet 2013",
  },
  {
    id: 12,
    product: "DÉCODEUR TÉLÉVISION",
    isNumber: "IS 13252(Partie 1):2010",
    date: "03 juillet 2013",
  },
  {
    id: 13,
    product: "RÉPONDEURS TÉLÉPHONIQUES",
    isNumber: "IS 13252(Partie 1):2010",
    date: "03 juillet 2013",
  },
  {
    id: 14,
    product:
      "UNITÉS D'AFFICHAGE VISUEL, MONITEURS VIDÉO DE TAILLE D'ÉCRAN 32\" ET PLUS",
    isNumber: "IS 13252(Partie 1):2010",
    date: "03 juillet 2013",
  },
  {
    id: 15,
    product: "CLAVIERS SANS FIL",
    isNumber: "IS 13252(Partie 1):2010",
    date: "03 juillet 2013",
  },
  {
    id: 16,
    product: "CAISSES ENREGISTREUSES",
    isNumber: "IS 13252(Partie 1):2010",
    date: "13 mai 2015",
  },
  {
    id: 17,
    product: "MACHINES DE COPIE/DUPLICATEURS",
    isNumber: "IS 13252(Partie 1):2010",
    date: "13 mai 2015",
  },
  {
    id: 18,
    product: "LECTEUR DE PASSEPORT",
    isNumber: "IS 13252(Partie 1):2010",
    date: "13 mai 2015",
  },
  {
    id: 19,
    product: "TERMINAUX DE POINT DE VENTE",
    isNumber: "IS 13252(Partie 1):2010",
    date: "13 mai 2015",
  },
  {
    id: 20,
    product:
      "MACHINES DE TRAITEMENT DU COURRIER/MACHINES D'AFFRANCHISSEMENT/MACHINES D'AFFRANCHISSEMENT",
    isNumber: "IS 13252(Partie 1):2010",
    date: "13 mai 2015",
  },
  {
    id: 21,
    product:
      "BANQUES D'ALIMENTATION POUR UTILISATION DANS DES APPLICATIONS PORTABLES",
    isNumber: "IS 13252(Partie 1):2010",
    date: "13 mai 2015",
  },
  {
    id: 22,
    product: "LECTEUR DE CARTE À PUCE",
    isNumber: "IS 13252(Partie 1):2010",
    date: "13 mai 2015",
  },
  {
    id: 23,
    product: "TÉLÉPHONES MOBILES",
    isNumber: "IS 13252(Partie 1):2010",
    date: "13 septembre 2015",
  },
  {
    id: 24,
    product: "LAMPES LED AUTO-BALLASTÉES POUR SERVICES D'ÉCLAIRAGE GÉNÉRAL",
    isNumber: "IS 16102(Partie 1):2012",
    date: "13 septembre 2015",
  },
  {
    id: 25,
    product:
      "ÉQUIPEMENTS DE CONTRÔLE ÉLECTRONIQUES ALIMENTÉS EN CC OU CA POUR MODULES LED",
    isNumber: "IS 15885(Partie 2/Sec 13):2012",
    date: "01 décembre 2015",
  },
  {
    id: 26,
    product:
      "ADAPTATEURS D'ALIMENTATION POUR APPAREILS ÉLECTRONIQUES AUDIO, VIDÉO ET SIMILAIRES",
    isNumber: "IS 616:2010",
    date: "01 décembre 2015",
  },
  {
    id: 27,
    product: "ADAPTATEURS D'ALIMENTATION POUR ÉQUIPEMENTS INFORMATIQUES",
    isNumber: "IS 13252(Partie 1):2010",
    date: "01 décembre 2015",
  },
  {
    id: 28,
    product: "LUMINAIRES LED À USAGE GÉNÉRAL FIXES",
    isNumber: "IS 10322(Partie 5/Sec 1):2012",
    date: "01 mars 2016",
  },
  {
    id: 29,
    product: "UPS/ONDULEURS DE PUISSANCE <= 5KVA",
    isNumber: "IS 16242(Partie 1):2014",
    date: "01 mars 2016",
  },
  {
    id: 30,
    product:
      "CELLULES/BATTERIES SECONDAIRES SCÉLLÉES CONTENANT DES ÉLECTROLYTES ALCALINS OU AUTRES NON-ACIDES POUR UTILISATION DANS DES APPLICATIONS PORTABLES PARTIE 1 SYSTÈMES NICKEL",
    isNumber: "IS 16046(Partie 1): 2018",
    date: "01 juin 2016",
  },
  {
    id: 31,
    product:
      "CELLULES/BATTERIES SECONDAIRES SCÉLLÉES CONTENANT DES ÉLECTROLYTES ALCALINS OU AUTRES NON-ACIDES POUR UTILISATION DANS DES APPLICATIONS PORTABLES PARTIE 2 SYSTÈMES LITHIUM",
    isNumber: "IS 16046(Partie 2): 2018",
    date: "01 juin 2016",
  },
  {
    id: 32,
    product: "SUPPORT DE LANGUE INDIENNE POUR TÉLÉPHONES MOBILES",
    isNumber: "IS 16333 (Partie 3) : 2022",
    date: "01 mai 2018",
  },
  {
    id: 33,
    product: "Luminaires LED encastrés",
    isNumber: "IS 10322 (Partie 5/Section 2) : 2012",
    date: "23 mai 2018",
  },
  {
    id: 34,
    product: "Luminaires LED pour éclairage routier et urbain",
    isNumber: "IS 10322 (Partie 5/Section 3) : 2012",
    date: "23 mai 2018",
  },
  {
    id: 35,
    product: "Projecteurs LED",
    isNumber: "IS 10322 (Partie 5/Section 5) : 2013",
    date: "23 mai 2018",
  },
  {
    id: 36,
    product: "Lampes LED portatives",
    isNumber: "IS 10322 (Partie 5/Section 6) : 2013",
    date: "23 mai 2018",
  },
  {
    id: 37,
    product: "Chaînes d'éclairage LED",
    isNumber: "IS 10322 (Partie 5/Section 7) : 2017",
    date: "23 mai 2018",
  },
  {
    id: 38,
    product: "Luminaires LED pour éclairage d'urgence",
    isNumber: "IS 10322 (Partie 5/Section 8) : 2013",
    date: "23 mai 2018",
  },
  {
    id: 39,
    product: "UPS/onduleurs de puissance <= 10kVA",
    isNumber: "IS 16242 (Partie 1) : 2014",
    date: "23 mai 2018",
  },
  {
    id: 40,
    product: "Télévision Plasma/LCD/LED de taille d'écran jusqu'à 32",
    isNumber: "IS 616 : 2017",
    date: "23 mai 2018",
  },
  {
    id: 41,
    product:
      "Unités d'affichage visuel, moniteurs vidéo de taille d'écran jusqu'à 32",
    isNumber: "IS 13252 (Partie 1) : 2010",
    date: "23 mai 2018",
  },
  {
    id: 42,
    product: "Caméras CCTV/Enregistreurs CCTV",
    isNumber:
      "IS 13252 (Partie 1) : 2010, Exigence(s) essentielle(s) pour la sécurité de la CCTV",
    date: "23 mai 2018",
  },
  {
    id: 43,
    product: "Adaptateurs pour appareils électriques ménagers et similaires",
    isNumber: "IS 302 (Partie 1) : 2008",
    date: "23 mai 2018",
  },
  {
    id: 44,
    product:
      "Lecteurs de codes-barres USB, scanners de codes-barres, scanners d'iris, scanners d'empreintes digitales optiques",
    isNumber: "IS 13252 (Partie 1) : 2010",
    date: "23 mai 2018",
  },
  {
    id: 45,
    product: "Montres intelligentes",
    isNumber: "IS 13252 (Partie 1) : 2010",
    date: "23 mai 2018",
  },
  {
    id: 46,
    product:
      "Modules photovoltaïques terrestres au silicium cristallin (PV) (basés sur plaquette Si)",
    isNumber:
      "IS 14286 : 2010/ IEC 61215 : 2005, IS/IEC 61730 (Partie 1) : 2004 & IS/IEC 61730 (Partie 2) : 2004",
    date: "31 mars 2019",
  },
  {
    id: 47,
    product:
      "Modules photovoltaïques terrestres à couche mince (PV) (a-Si, CiGs et CdTe)",
    isNumber:
      "IS 16077 : 2013/ IEC 61646 : 2008, IS/IEC 61730 (Partie 1) : 2004 & IS/IEC 61730 (Partie 2) : 2004",
    date: "31 mars 2019",
  },
  {
    id: 48,
    product:
      "Convertisseurs de puissance pour utilisation dans les systèmes d'alimentation photovoltaïques",
    isNumber: "IS 16221 (Partie 2) : 2015 / IEC 62109-2 : 2011",
    date: "30 juin 2021",
  },
  {
    id: 49,
    product: "Onduleurs photovoltaïques interconnectés au réseau",
    isNumber:
      "IS 16221 (Partie 2):2015/IEC 62109-2 :2011 & IS 16169 :2014/IEC 62116 :2008",
    date: "30 juin 2021",
  },
  {
    id: 50,
    product: "Batterie de stockage",
    isNumber: "IS 16270 : 2014",
    date: "01 janvier 2019",
  },
  {
    id: 51,
    product: "Modules LED indépendants pour éclairage général",
    isNumber: "IS 16103 (Partie 1) : 2012",
    date: "01 avril 2021",
  },
  {
    id: 52,
    product: "Chaîne d'éclairage (lumières à corde)",
    isNumber: "IS 10322 (Partie 5/Sec 9) : 2017",
    date: "01 avril 2021",
  },
  {
    id: 53,
    product: "Clavier",
    isNumber: "IS 13252 (Partie 1) : 2010",
    date: "01 avril 2021",
  },
  {
    id: 54,
    product: "Cuisinière à induction",
    isNumber: "IS 302-2-6 : 2009",
    date: "01 avril 2021",
  },
  {
    id: 55,
    product: "Distributeurs automatiques de billets",
    isNumber: "IS 13252 (Partie 1) : 2010",
    date: "01 avril 2021",
  },
  {
    id: 56,
    product: "Disque dur externe de type USB",
    isNumber: "IS 13252 (Partie 1) : 2010",
    date: "01 avril 2021",
  },
  {
    id: 57,
    product: "Casque et écouteurs sans fil",
    isNumber: "IS 616 : 2017",
    date: "01 avril 2021",
  },
  {
    id: 58,
    product:
      "Dispositifs de stockage à état solide externes de type USB (capacité supérieure à 256 Go)",
    isNumber: "IS 13252 (Partie 1) : 2010",
    date: "01 avril 2021",
  },
  {
    id: 59,
    product:
      "Système musical électronique avec puissance d'entrée inférieure à 200 Watts",
    isNumber: "IS 616 : 2017",
    date: "01 avril 2021",
  },
  {
    id: 60,
    product:
      "Alimentations à découpage autonomes (SMPS) avec tension de sortie 48V (max)",
    isNumber: "IS 13252 (Partie 1) : 2010",
    date: "01 avril 2021",
  },
  {
    id: 61,
    product: "Télévision autre que les téléviseurs Plasma/LCD/LED",
    isNumber: "IS 616 : 2017",
    date: "01 avril 2021",
  },
  {
    id: 62,
    product: "Cuiseur de riz",
    isNumber: "IS 302-2-15 : 2009",
    date: "01 avril 2021",
  },
  {
    id: 63,
    product: "Microphone sans fil",
    isNumber: "IS 616 : 2017",
    date: "01 octobre 2021",
  },
  {
    id: 64,
    product: "Appareil photo numérique",
    isNumber: "IS 13252 (Partie 1) : 2010",
    date: "01 octobre 2021",
  },
  {
    id: 65,
    product: "Caméra vidéo",
    isNumber: "IS 616 : 2017",
    date: "01 octobre 2021",
  },
  {
    id: 66,
    product: "Webcam (produit fini)",
    isNumber: "IS 616 : 2017",
    date: "01 octobre 2021",
  },
  {
    id: 67,
    product: "Haut-parleurs intelligents (avec et sans écran)",
    isNumber: "IS 616 : 2017",
    date: "01 octobre 2021",
  },
  {
    id: 68,
    product: "Gradateurs pour produits LED",
    isNumber: "IS 60669-2-1: 2008",
    date: "01 octobre 2021",
  },
  {
    id: 69,
    product: "Haut-parleurs Bluetooth",
    isNumber: "IS 616 : 2017",
    date: "01 octobre 2021",
  },
  {
    id: 70,
    product: "Acide orthophosphorique",
    isNumber: "IS 798 : 2020",
    date: "12 décembre 2021",
  },
  {
    id: 71,
    product: "Acide polyphosphorique",
    isNumber: "IS 17439:2020",
    date: "24 décembre 2021",
  },
  {
    id: 72,
    product: "Balles de coton",
    isNumber: "IS 12171:2019",
    date: "03 mars 2023",
  },
  {
    id: 73,
    product: "Phosphite de triméthyle qualité technique",
    isNumber: "IS 17412:2020",
    date: "03 mars 2023",
  },
  {
    id: 74,
    product: "Téléviseurs",
    isNumber: "IS 18112:2022",
    date: "26 avril 2023",
  },
];

export const CISProductTable = () => {
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

  const scrollToTable = () => {
    const tableSection = document.querySelector(".product-table-section");
    if (tableSection) {
      tableSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToTable();
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      scrollToTable();
    }
  };

  return (
    <section className="w-full pb-12 product-table-section">
      <div className="max-w-[88rem] mx-auto px-4 md:px-12">
        <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mb-4">
          Liste officielle des produits sous l'enregistrement BIS CRS
        </h2>

        <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-8">
          Le tableau suivant liste les produits qui nécessitent un
          enregistrement BIS CRS en Inde ainsi que leurs numéros de norme
          indienne (IS) applicables et leurs dates de mise en œuvre.
        </p>

        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Rechercher des produits par nom ou numéro IS..."
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
                  N°
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[180px] border-r border-gray-300">
                  Produit
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[180px] border-r border-gray-300">
                  N° IS
                </TableHead>
                <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                  Date de mise en œuvre
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
                    {item.product}
                  </TableCell>
                  <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                    {item.isNumber}
                  </TableCell>
                  <TableCell className="font-geist text-base md:text-lg text-left">
                    {item.date}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-6">
            <div className="flex items-center">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Précédent
              </button>
              <span className="px-4 py-2 font-geist text-sm">
                Page {currentPage} sur {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Suivant
              </button>
            </div>
          </div>
        )}
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
      path: "/what-is-crs-bis-or-crs-registration",
    },
    {
      code: "zh",
      name: "Chinese",
      flag: "https://flagcdn.com/w320/cn.png",
      path: "/zh/crs-bis-shi-shen-me-huo-crs-deng-ji",
    },
    {
      code: "de",
      name: "German",
      flag: "https://flagcdn.com/w320/de.png",
      path: "/de/was-ist-crs-bis-oder-crs-registrierung",
    },
    {
      code: "nl",
      name: "Dutch",
      flag: "https://flagcdn.com/w320/nl.png",
      path: "/nl/wat-is-crs-bis-of-crs-registratie",
    },
    {
      code: "ja",
      name: "Japanese",
      flag: "https://flagcdn.com/w320/jp.png",
      path: "/ja/crs-bis-toha-nani-ka-crs-toroku",
    },
    {
      code: "ko",
      name: "Korean",
      flag: "https://flagcdn.com/w320/kr.png",
      path: "/ko/crs-bis-i-mueos-inga-crs-deunglog",
    },
    // {
    //   code: "fr",
    //   name: "French",
    //   flag: "https://flagcdn.com/w320/fr.png",
    //   path: "/fr/quest-ce-que-le-crs-bis-ou-lenregistrement-crs",
    // },
    {
      code: "es",
      name: "Spanish",
      flag: "https://flagcdn.com/w320/es.png",
      path: "/es/que-es-crs-bis-o-registro-crs",
    },
    {
      code: "th",
      name: "Thai",
      flag: "https://flagcdn.com/w320/th.png",
      path: "/th/crs-bis-khue-a-rai-rab-phit-thab-crs",
    },
    {
      code: "id",
      name: "Indonesian",
      flag: "https://flagcdn.com/w320/id.png",
      path: "/id/apa-itu-crs-bis-atau-registrasi-crs",
    },
    {
      code: "it",
      name: "Italian",
      flag: "https://flagcdn.com/w320/it.png",
      path: "/it/cose-il-crs-bis-o-registrazione-crs",
    },
    {
      code: "ar",
      name: "Arabic",
      flag: "https://flagcdn.com/w320/sa.png",
      path: "/ar/ma-huwa-crs-bis-aw-tasjeel-crs",
    },
    {
      code: "vi",
      name: "Vietnamese",
      flag: "https://flagcdn.com/w320/vn.png",
      path: "/vi/crs-bis-la-gi-hoac-dang-ky-crs",
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

export const Services = () => {
  return (
    <div className="pt-6 md:pt-12 pb-12  md:pb-16  overflow-x-hidden ">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
              Nos Services
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                Meilleur Consultant en Certificats de l'Inde
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
              Marque BIS (Licence ISI) pour Fabricant Étranger
            </p>
          </Link>

          <Link
            to="/cdsco-registration-certification"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={CDSCO}
                alt="CDSCO Logo"
                title="CDSCO Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Certification d'Enregistrement CDSCO
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
              Enregistrement BIS (CRS)
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
              Gestion des Déchets Plastiques
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
              Certifications de Certificat EPR
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
              Certifications de Certificat LMPC
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
              Certificat d'Enregistrement BIS
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
              MARQUE ISI (BIS) pour Fabricants Indiens
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
