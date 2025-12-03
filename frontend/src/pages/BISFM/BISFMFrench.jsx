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
import { Link, useLocation } from "react-router-dom";
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
import ServicesRightSideContentEng from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentEng";
import ISIMARKImage from "../../assets/servicesImages/ISIMARKUpdated.jpg";
import BISCertificateImage from "../../assets/bisfmpageimage/biscertificate.png";
import BISFMProductTable from "@/pages/BISFMProductTable/BISFMProductTable.jsx";
import ServicesRightSideContentFrench from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentFrench";
import ServiceAuthorFrench from "@/components/manual/ServiceAuthor/ServiceAuthorFrench";
import FooterFrench from "@/components/manual/Footer/FooterFrench";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const BISFMFrench = () => {
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
      <LanguageSelector />
      <div id="services">
        <Services />
      </div>
      <FooterFrench />
      <ScrollToTopButton />
    </div>
  );
};

export default BISFMFrench;

const MetaTags = () => {
  const title =
    "Certification BIS FMCS | Schéma de Certification des Fabricants Étrangers | Sun Certifications";
  const description =
    "Services experts de certification BIS FMCS pour les fabricants étrangers. Obtenez la certification ISI Mark pour les exportations vers l'Inde. Certifications BIS de confiance depuis 2013. ✓ Traitement Rapide ✓ Conseil Expert";
  const keywords =
    "Certificat BIS pour fabricants étrangers, Licence BIS, Marque ISI";
  const canonicalUrl =
    "https://bis-certifications.com/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis";
  const author = "Dhruv Aggarwal";
  const publisher = "Sun Certifications India";
  const ogTitle =
    "Certification BIS FMCS | Schéma de Certification des Fabricants Étrangers";
  const ogDescription =
    "Services experts de certification BIS FMCS pour les fabricants étrangers. Obtenez la certification ISI Mark pour les exportations vers l'Inde. ✓ Traitement Rapide ✓ Conseil Expert";

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://bis-certifications.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Marque BIS (Licence ISI) pour Fabricants Étrangers",
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
                    <Link to="/">Accueil</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Marque BIS (Licence ISI) pour Fabricants Étrangers
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
              Expertise Certifiée
            </span>
          </div>

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              Certification BIS Indienne
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            pour les fabricants étrangers
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            Les fabricants étrangers ont besoin de la marque ISI pour les
            exportations vers l'Inde. Couvre plus de 600 produits obligatoires
            et plus de 20 000 produits volontaires.
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
        <ContactUsForm />
      </div>
    </div>
  );
};

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);

  const getPageName = () => {
    const path = window.location.pathname;

    // BISFM (FMCS - Foreign Manufacturers)
    if (
      path.includes(
        "/fr/guide-certification-bis-pour-fabricants-etrangers-bis-inde"
      )
    )
      return "BISFM (FMCS - Foreign Manufacturers) French Page";
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

    // Validation du nom complet
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

    // Validation de l'email - autoriser tout domaine
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "Veuillez entrer une adresse email valide.",
        description: "Vérifiez si le format de votre email est correct",
      });
      setLoading(false);
      return;
    }

    // Validation du numéro de téléphone
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "Veuillez entrer un numéro de téléphone valide",
        description: "Le numéro de téléphone doit contenir (8-15 chiffres)",
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
        error.response?.data?.message || "Une erreur s'est produite";
      toast({
        variant: "destructive",
        title:
          errorMessage ||
          "Échec de la soumission des détails du formulaire de contact !",
        description:
          "Une erreur s'est produite. Veuillez vérifier vos informations et réessayer.",
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
        Réserver un Rendez-vous
      </div>

      <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
        Vous souhaitez contacter notre équipe et planifier un appel ?
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
            placeholder="Adresse email *"
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
    overview: "Aperçu",
    standardization: "Normalisation",
    representation: "Représentation",
    document: "Document",
    process: "Processus",
    costing: "Coûts",
    surveillance: "Surveillance",
    facilitator: "Facilitateur",
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

  // Fermer le menu mobile lors d'un clic à l'extérieur
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
          aria-label="Basculer le menu"
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
        <ServicesRightSideContentFrench />
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
            Informations complètes sur la certification BIS indienne sous le
            Schéma FMCS
          </h1>

          <h2 className="service-left-content-heading-three">
            Qu'est-ce que le BIS indien ?
          </h2>

          <p className="service-left-content-paragraph">
            Le Bureau des Normes Indiennes (BIS) est l'organisme national de
            normalisation de l'Inde sous le ministère des Affaires des
            Consommateurs, de l'Alimentation et de la Distribution Publique.
            Établi sous la Loi BIS de 1986, et révisé en 2016, le BIS joue un
            rôle central dans la normalisation, le marquage et la certification
            de qualité des produits. Il vise à assurer la qualité, la sécurité
            et la fiabilité des produits offerts aux consommateurs indiens.
          </p>

          <p className="service-left-content-paragraph">
            Le BIS opère à travers divers schémas qui incluent la certification
            de produits, le poinçonnage pour les bijoux, les services de test et
            les programmes de formation. Cependant, l'un de ses cadres les plus
            significatifs au niveau international est le Schéma de Certification
            des Fabricants Étrangers (FMCS).
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
        <ServiceAuthorFrench />
      </div>
    </div>
  );
};

const OverviewSection = () => {
  return (
    <div id="overview" className="flex flex-col scroll-mt-20">
      {/* Aperçu */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Aperçu</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Qu'est-ce qu'un certificat BIS sous FMCS ?
      </h2>

      <p className="service-left-content-paragraph">
        Introduit en 2000, le FMCS est un mécanisme par lequel les fabricants
        étrangers peuvent obtenir une licence BIS pour utiliser la marque ISI
        sur leurs produits, indiquant la conformité aux normes indiennes. Le
        processus de certification FMCS permet aux entités étrangères de vendre
        légalement leurs produits en Inde sans établir une unité de fabrication
        locale.
      </p>

      <p className="service-left-content-paragraph">
        À ce jour, plus de 1 650 fabricants étrangers opèrent en Inde sous le
        système de certification BIS via le FMCS.{" "}
      </p>

      <h2 className="service-left-content-heading-three">
        Pourquoi la Certification BIS est Cruciale ?
      </h2>

      <p className="service-left-content-paragraph">
        Obtenir un certificat BIS est plus qu'une exigence légale—c'est une
        porte d'entrée vers le vaste marché de consommation indien. Voici
        quelques raisons clés pour lesquelles c'est essentiel :
      </p>

      <PointsListWithoutHeading
        points={[
          "Conformité Légale : Les produits doivent se conformer aux normes indiennes pertinentes.",
          "Crédibilité de la Marque : La marque ISI sert de preuve de qualité et renforce la confiance des consommateurs.",
          "Dédouanement : Sans une licence BIS valide, les produits peuvent être rejetés à la douane.",
          "Accès au Marché : Aide les marques étrangères à obtenir une entrée sans heurt et une acceptation généralisée en Inde.",
          "Atténuation des Risques : Assure que les produits sont sûrs, évitant ainsi les rappels potentiels et les problèmes de responsabilité.",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        Portée des Produits Couverts par le BIS
      </h2>

      <p className="service-left-content-paragraph">
        Le BIS a listé plus de 600 produits sous certification obligatoire, et
        plus de 20 000 articles sont éligibles pour un certificat BIS
        volontaire. Ceux-ci couvrent un large éventail d'industries :
      </p>

      <PointsListWithoutHeading
        points={[
          "Électronique et matériel informatique",
          "Pièces automobiles",
          "Appareils ménagers",
          "Produits en acier",
          "Ciment et matériaux de construction, etc.",
        ]}
      />

      <p className="service-left-content-paragraph">
        La liste croissante indique la portée et la pertinence croissantes du
        certificat BIS dans le commerce mondial.
      </p>

      <h2 className="service-left-content-heading-three">
        Objectifs ou avantages de la Certification BIS pour les Fabricants
        Étrangers sous FMCS
      </h2>

      <p className="service-left-content-paragraph">
        Le régime FMCS et certificat BIS vise à :
      </p>

      <PointsListWithoutHeading
        points={[
          "L'utilisation de la marque ISI sans une licence BIS valide est punissable par la loi.",
          "Les produits certifiés doivent afficher à la fois le logo ISI et le numéro CM/L (Certificat de Licence de Fabrication).",
          "Les contrevenants peuvent faire face à des interdictions de produits, des amendes ou même des poursuites pénales.",
          "Construire la confiance entre les consommateurs et les marques importées.",
          "Faciliter le commerce équitable et un terrain de jeu équitable.",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        Caractéristiques Clés du Certificat BIS pour les Fabricants Étrangers
      </h2>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                CARACTÉRISTIQUE
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                DESCRIPTION
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Applicabilité
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Fabricants étrangers uniquement
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Marquage
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Marque ISI + numéro CM/L
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Exigence d'Audit
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Inspection d'usine obligatoire
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Tests
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Effectués dans des laboratoires indiens approuvés par le BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Validité
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Licence BIS valide pour 1-2 ans
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Renouvellement
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Requis à l'expiration ou lors de mises à jour de produits
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                AIR (Représentant Indien Autorisé)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Doit être nommé pour servir de liaison avec le BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Garantie Bancaire de Performance
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Requise d'une banque indienne approuvée par la RBI
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
      {/* Normalisation */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">
          Normalisation
        </span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Qu'est-ce que le BIS Indien et Pourquoi C'est Important ?
      </h2>

      <p className="service-left-content-paragraph">
        Le BIS indien est le gage de qualité et de sécurité délivré par le
        Bureau des Normes Indiennes (BIS). Aujourd'hui, la marque ISI est
        utilisée exclusivement pour désigner les produits qui se conforment aux
        normes indiennes sous le schéma officiel de certification BIS.
      </p>

      <p className="service-left-content-paragraph">
        Pour qu'un produit porte la marque BIS indienne ou ISI, il doit passer
        par un processus rigoureux de certification BIS, incluant des tests en
        laboratoire, une inspection d'usine, des audits de documentation et des
        vérifications de conformité avec les directives BIS indiennes.
      </p>

      <p className="service-left-content-paragraph">
        Statut Légal de la Certification BIS en Inde
      </p>

      <p className="service-left-content-paragraph">
        La licence BIS n'est pas simplement un outil marketing—c'est une
        exigence statutaire pour tous les produits relevant du schéma de
        certification BIS obligatoire.{" "}
      </p>

      <h3 className="service-left-content-heading-three">
        Selon la Loi BIS de 2016 :
      </h3>

      <PointsListWithoutHeading
        points={[
          "L'utilisation de la marque ISI sans une licence BIS valide est punissable par la loi.",
          "Les produits certifiés doivent afficher à la fois le logo ISI et le numéro CM/L (Certificat de Licence de Fabrication).",
          "Les contrevenants peuvent faire face à des interdictions de produits, des amendes ou même des poursuites pénales.",
        ]}
      />

      <img
        src={ISIMARKImage}
        alt="Logo de la marque ISI"
        title="Logo de la marque ISI"
        className="w-full max-w-[300px] h-auto rounded-lg shadow-sm my-6 mx-auto border border-gray-200 hover:shadow-md transition-shadow duration-300"
      />

      <p className="service-left-content-heading-three">
        Le logo ISI se compose généralement de :
      </p>

      <PointsListWithoutHeading
        points={[
          "Les lettres stylisées \"ISI\" à l'intérieur d'un rectangle aux coins arrondis",
          "Le numéro CM/L affiché sous ou à côté de la marque",
          "Le numéro de code de norme indienne de référence (par exemple, IS 302 pour les appareils électriques)",
        ]}
      />

      <p className="service-left-content-heading-three">
        Le placement doit être :
      </p>

      <PointsListWithoutHeading
        points={[
          "Permanent et clairement visible sur le produit",
          "Sur l'emballage si ce n'est pas possible sur le produit",
          "Sur les manuels d'utilisation dans certaines catégories de produits",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        Catégories de Produits Nécessitant un Certificat BIS
      </h2>

      <p className="service-left-content-paragraph">
        Plus de 600 produits nécessitent la marque ISI sous le schéma
        d'enregistrement obligatoire en Inde. Les exemples incluent :
      </p>

      {/* Table for Product Categories Requiring BIS Certificate */}
      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                CATÉGORIE DE PRODUIT
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                CODE IS
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                STATUT
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Appareils Électriques
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 302
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Obligatoire
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Acier et Fer
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 2062
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Obligatoire
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Contenants Alimentaires
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 10146
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Obligatoire
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Casques
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 4151
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Obligatoire
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Ciment
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 1489
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Obligatoire
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <p className="service-left-content-paragraph">
        Chaque catégorie nécessite l'adhésion à sa norme indienne
        correspondante, qui est testée pendant le processus de certification
        BIS. La liste complète des produits peut être consultée en{" "}
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
          cliquant ici
        </span>
      </p>

      <h2 className="service-left-content-heading-three">
        BIS Indien vs. Autres Certifications Mondiales
      </h2>

      <p className="service-left-content-paragraph">
        Comparons la marque ISI avec d'autres symboles internationaux :
      </p>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                MARQUE
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                PAYS
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                OBLIGATOIRE ?
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
                Inde
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Oui
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Sécurité et qualité des produits
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                CE
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                UE
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Oui (pour catégories spécifiques)
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Santé, sécurité, environnement
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                UL
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                États-Unis
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Non
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Normes de sécurité (volontaire)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                CCC
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Chine
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Oui
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Sécurité des biens électriques
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <p className="service-left-content-paragraph">
        Contrairement à UL (volontaire) ou CE (spécifique à une région), la
        marque ISI sous le schéma d'enregistrement BIS est à la fois obligatoire
        et appliquée localement.
      </p>

      <h2 className="service-left-content-heading-three">
        La Certification BIS ou la Licence BIS est-elle Obligatoire pour
        l'Importation en Inde ?
      </h2>

      <p className="service-left-content-paragraph">
        Nature Obligatoire du Certificat BIS
      </p>

      <p className="service-left-content-paragraph">
        Le gouvernement indien a rendu obligatoire pour certains produits d'être
        certifiés par le Bureau des Normes Indiennes (BIS) avant qu'ils ne
        puissent être importés, vendus ou distribués sur le marché indien. Cette
        obligation découle de :
      </p>

      <PointsListWithoutHeading
        points={[
          "Objectifs de protection des consommateurs",
          "Harmonisation avec les normes indiennes",
          "Règlementations de sécurité nationales",
        ]}
      />

      <p className="service-left-content-paragraph">
        Si un produit relève de l'exigence obligatoire du BIS indien, il doit
        avoir un certificat BIS et porter la marque ISI avant de pouvoir passer
        les douanes indiennes.
      </p>

      <h2 className="service-left-content-heading-three">
        La Certification BIS est-elle Requise Uniquement pour les Importations ?
      </h2>

      <p className="service-left-content-paragraph">
        Non. La certification BIS est obligatoire pour :
      </p>

      <PointsListWithoutHeading
        points={[
          "Les fabricants nationaux produisant des produits réglementés",
          "Les fabricants étrangers exportant des produits réglementés vers l'Inde",
        ]}
      />

      <p className="service-left-content-paragraph">
        Que vous soyez situé en Inde ou à l'étranger, si votre produit est sur
        la liste obligatoire, il doit avoir une licence BIS et porter la marque
        ISI.
      </p>

      <p className="service-left-content-paragraph">
        Les douanes indiennes utilisent maintenant des systèmes de données
        avancés pour signaler automatiquement les expéditions non conformes.
        Tous les biens sous catégories réglementées sont scannés pour la
        présence d'un certificat BIS valide.
      </p>

      <p className="service-left-content-paragraph">
        Exemptions de la Certification BIS
      </p>

      <p className="service-left-content-paragraph">
        La certification BIS est obligatoire dans la plupart des cas, mais des
        exemptions peuvent être accordées dans des scénarios spécifiques :
      </p>

      <PointsListWithoutHeading
        points={[
          "Pour les prototypes R&D ou les tests d'échantillons",
          "Pour les importations personnelles de quantité limitée",
        ]}
      />

      <p className="service-left-content-paragraph">
        Cependant, celles-ci sont rares et nécessitent des lettres d'exemption
        formelles du BIS ou des ministères concernés.
      </p>

      <h2 className="service-left-content-heading-three">
        Comment Savoir Si Votre Produit Nécessite un Certificat BIS ou une
        Licence BIS ?
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
          Cliquez ici
        </span>{" "}
        pour vérifier si votre produit est couvert par le schéma de
        certification BIS indien obligatoire.
      </p>
    </div>
  );
};

const RepresentationSection = () => {
  return (
    <div id="representation" className="flex flex-col scroll-mt-20">
      {/* Représentation */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">
          Représentation
        </span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Titre */}
      <h2 className="service-left-content-heading-two">
        Rôle du Représentant Indien Autorisé (AIR) dans la Certification BIS
      </h2>

      <h3 className="service-left-content-heading-three">
        Qu'est-ce qu'un Représentant Indien Autorisé (AIR) ?
      </h3>

      <p className="service-left-content-paragraph">
        Un Représentant Indien Autorisé (AIR) est un intermédiaire crucial nommé
        par un fabricant étranger cherchant une certification BIS sous le schéma
        d'enregistrement FMCS. L'AIR sert de liaison officielle entre le Bureau
        des Normes Indiennes (BIS) et le fabricant, assurant une communication
        fluide, la gestion de la documentation et la coordination du processus
        de certification.
      </p>

      <h3 className="service-left-content-heading-three">
        Exigence Légale pour la Nomination d'un AIR
      </h3>

      <p className="service-left-content-paragraph">
        Selon les directives BIS, tout fabricant étranger qui n'a pas de bureau
        enregistré en Inde doit nommer un AIR. Cette exigence garantit que le
        BIS a un point de contact fiable et accessible dans la juridiction
        indienne.
      </p>

      <h3 className="service-left-content-heading-three">
        Responsabilités Clés de l'AIR
      </h3>

      <p className="service-left-content-paragraph">
        Le rôle de l'AIR s'étend sur tout le processus de certification BIS, de
        la documentation et la soumission de la demande à la coordination des
        audits et la conformité post-certification :
      </p>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Responsabilité
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                Description
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Communication
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Agit comme point de contact avec les responsables et
                départements BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Support de Demande
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Aide à remplir les formulaires, compiler les documents et
                soumettre la demande
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Coordination d'Audit
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Coordonne les calendriers d'inspection d'usine et répond aux
                questions des auditeurs
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Surveillance de la Conformité
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Assure que toutes les activités de test et de certification
                respectent les normes BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Gestion du Renouvellement
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Supervise le renouvellement de la licence BIS, les mises à jour
                de documentation et les paiements de frais
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 className="service-left-content-heading-three">
        Critères d'Éligibilité pour Devenir un AIR
      </h3>

      <p className="service-left-content-paragraph">
        Pour servir en tant qu'AIR, un individu ou une organisation doit :
      </p>

      <PointsListWithoutHeading
        points={[
          "Être un citoyen indien ou une entité commerciale légalement enregistrée en Inde",
          "Avoir une adresse physique en Inde avec un code postal valide",
          "Être capable de communiquer couramment en anglais et dans les langues locales",
          "Comprendre le schéma de certification, les protocoles de documentation BIS et les attentes réglementaires",
          "Être capable de répondre aux audits et à la correspondance rapidement au nom du fabricant étranger",
        ]}
      />

      <h3 className="service-left-content-heading-three">
        Pourquoi le Rôle de l'AIR est Vital
      </h3>

      <p className="service-left-content-paragraph">
        L'AIR assure la continuité et la responsabilité tout au long du
        processus de certification BIS. Sans AIR :
      </p>

      <PointsListWithoutHeading
        points={[
          "Le BIS n'a pas de juridiction pour agir contre un fabricant étranger non conforme",
          "Les questions urgentes et les calendriers d'audit peuvent être retardés",
          "Le processus de certification peut être bloqué, révoqué ou rejeté",
        ]}
      />

      <p className="service-left-content-paragraph">
        Un AIR proactif et expérimenté augmente considérablement les chances de
        certification BIS réussie.
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

      {/* Titre */}
      <h2 className="service-left-content-heading-two">
        Documentation Requise pour la Certification BIS sous FMCS
      </h2>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Type de Document
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                Objectif
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Formulaire de Demande FMCS
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Demande officielle de certification
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Liste d'Équipements de Fabrication
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Montre les capacités de production
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Liste de Matières Premières
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Assure la qualité des matières premières
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Liste d'Équipements de Test
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Évalue la préparation aux tests et à la conformité
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Certificats d'Étalonnage
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Prouve la précision de l'équipement de test
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Plan d'Usine et Flux de Processus
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Aide les auditeurs à comprendre les étapes de fabrication
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Certificats de Test
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Prouve la qualité des matières premières et du produit final
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Profil de Contrôle Qualité
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Vérifie les qualifications du personnel et les procédures
                opérationnelles standard (SOP)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Preuve de Paiement
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Valide la soumission des frais au BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Garantie Bancaire de Performance
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Agit comme assurance financière pour le BIS
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 className="service-left-content-heading-three">
        Analyse Détaillée de Chaque Document Requis pour la Certification BIS
        Indienne
      </h3>

      <div className="service-left-content-heading-three">
        1. Formulaire de Demande FMCS
      </div>

      <p className="service-left-content-paragraph">
        Ce document fournit des détails généraux sur le fabricant étranger,
        incluant :
      </p>

      <PointsListWithoutHeading
        points={[
          "Détails du produit (type, catégorie, modèle)",
          "Norme Indienne Prévue",
          "Coordonnées de l'usine et de l'AIR",
          "Capacité de fabrication et portée des tests",
        ]}
      />

      <div className="service-left-content-heading-three">
        2. Liste d'Équipements de Fabrication
      </div>

      <PointsListWithoutHeading
        points={[
          "Nom et marque de la machine",
          "Capacité de production",
          "Coordonnées de l'usine et de l'AIR",
          "Dossiers de maintenance (le cas échéant)",
        ]}
      />

      <div className="service-left-content-heading-three">
        3. Liste de Matières Premières
      </div>

      <PointsListWithoutHeading
        points={[
          "Source d'approvisionnement",
          "Grades et spécifications",
          "Protocole de test (le cas échéant)",
        ]}
      />

      <div className="service-left-content-heading-three">
        4. Liste d'Équipements de Test
      </div>

      <PointsListWithoutHeading
        points={[
          "Nom et fabricant de l'équipement",
          "Conformité aux paramètres de test dans la Norme Indienne",
          "Emplacement dans l'usine",
        ]}
      />

      <div className="service-left-content-heading-three">
        5. Certificats d'Étalonnage
      </div>

      <PointsListWithoutHeading
        points={[
          "Date du dernier étalonnage",
          "Période de validité",
          "Numéro de certificat",
        ]}
      />

      <div className="service-left-content-heading-three">
        6. Plan d'Usine et Diagramme de Flux de Processus
      </div>

      <PointsListWithoutHeading
        points={[
          "Points d'entrée et de sortie",
          "Zones de laboratoire de test",
          "Points de contrôle QC",
          "Sections de stockage et d'emballage",
        ]}
      />

      <div className="service-left-content-heading-three">
        7. Garantie Bancaire de Performance
      </div>

      <p className="service-left-content-paragraph">
        Émise par une banque indienne approuvée par la RBI, la Garantie Bancaire
        de Performance (PBG) couvre la responsabilité en cas de non-conformité.
        Ce document doit :
      </p>

      <PointsListWithoutHeading
        points={[
          "Être sur papier à en-tête officiel de la banque",
          "Indiquer la période de garantie et le montant",
          "Être signé et scellé",
        ]}
      />

      <div className="service-left-content-heading-three">
        Erreurs de Documentation Courantes à Éviter lors de la Demande de
        Certificat BIS ou BIS Indien
      </div>

      <PointsListWithoutHeading
        points={[
          "Décalage entre les données du formulaire et la réalité de l'usine",
          "Soumission de rapports d'étalonnage expirés",
          "Preuve de paiement BIS manquante",
          "Flux de processus incomplets ou vagues",
          "Incohérences de dénomination entre les documents",
        ]}
      />
    </div>
  );
};

const ProcessSection = () => {
  return (
    <div id="process" className="flex flex-col scroll-mt-20">
      {/* Processus */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Processus</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Titre */}
      <h2 className="service-left-content-heading-two">
        Processus de Certification BIS Étape par Étape sous FMCS
      </h2>

      <h3 className="service-left-content-heading-three">
        Aperçu du Parcours de Certification BIS
      </h3>

      <p className="service-left-content-paragraph">
        Le processus de certification BIS sous le Schéma de Certification des
        Fabricants Étrangers (FMCS) est méthodique, structuré et multi-phases.
        Il garantit que les produits se conforment aux normes indiennes
        applicables, que les processus de fabrication sont robustes et que les
        tests sont précis.
      </p>

      <h3 className="service-left-content-heading-three">
        Tableau Récapitulatif du Processus de Licence BIS Étape par Étape
      </h3>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Étape
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                Description
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                1
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Soumission de la Demande au BIS FMCD
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                2
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Examen de la Documentation et Révision Initiale
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                3
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Résolution des Questions et Soumission de Clarifications
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                4
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Nomination de l'Auditeur Technique BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                5
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Planification et Coordination de l'Audit d'Usine via l'AIR
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                6
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Inspection d'Usine et Scellage d'Échantillons par l'Auditeur BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                7
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Tests de Produits Internes (le cas échéant)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                8
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Test des Échantillons Scellés dans les Laboratoires Approuvés
                par le BIS en Inde
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                9
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Révision des Rapports de Test et Résultats d'Audit
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                10
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Délivrance de la Licence BIS et Utilisation de la Marque ISI
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <img
        src={BISCertificateImage}
        alt="Exemple de certificat BIS pour FMCS"
        title="Exemple de certificat BIS pour FMCS"
        className="w-full h-auto rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 my-8 mx-auto"
      />

      <h3 className="service-left-content-heading-three">
        Délai pour Obtenir un Certificat BIS
      </h3>

      <p className="service-left-content-heading-three">
        Durée Typique de la Demande au Certificat
      </p>

      <p className="service-left-content-paragraph">
        Le processus de certification BIS sous FMCS prend généralement environ
        120 jours ouvrables (environ 3-4 mois) à compter de la date de
        soumission correcte de la demande. Les retards se produisent souvent
        lorsque les documents ne sont pas clairs ou si l'usine n'est pas prête
        pour l'audit.
      </p>
    </div>
  );
};

const CostingSection = () => {
  return (
    <div id="costing" className="flex flex-col scroll-mt-20">
      {/* Coûts */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Coûts</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Titre */}
      <h2 className="service-left-content-heading-two">
        Structure des Coûts de Certification BIS Expliquée
      </h2>

      <h3 className="service-left-content-heading-three">
        Aperçu des Coûts de Certification BIS
      </h3>

      <p className="service-left-content-paragraph">
        L'obtention d'un certificat BIS sous le Schéma de Certification des
        Fabricants Étrangers (FMCS) implique plusieurs types de coûts. Ceux-ci
        couvrent tout, de la soumission de la demande et des audits aux tests de
        produits et à l'utilisation de la marque.
      </p>

      <p className="service-left-content-paragraph">
        Les fabricants étrangers doivent budgétiser adéquatement pour assurer
        des paiements en temps voulu, car l'échec du paiement peut entraîner le
        rejet de la certification BIS à mi-parcours.
      </p>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Catégorie de Coût
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                Description
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Frais de Demande (INR 1000)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Payé lors de la soumission du formulaire de demande FMCS pour
                obtenir le BIS indien
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Frais d'Audit (INR 7000)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Couvre les déplacements de l'auditeur BIS, les tarifs par
                jour-homme et les dépenses connexes
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Frais de Test de Produit (Selon le produit)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Pour tester les échantillons scellés dans les laboratoires
                reconnus par le BIS en Inde
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Frais de Licence (INR 1000)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Frais unique payé lors de l'octroi du certificat BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Frais de Marquage (Selon le produit)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Frais annuel pour l'utilisation de la marque ISI sur les
                produits certifiés
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Garantie Bancaire de Performance (USD 10,000)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Garantie financière déposée via une banque indienne pour assurer
                la conformité
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
        <span className="service-left-content-index-heading">Surveillance</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Titre */}
      <h2 className="service-left-content-heading-two">
        Surveillance Post-Certification BIS et Exigences de Conformité
      </h2>

      <p className="service-left-content-paragraph">
        Une fois qu'un certificat BIS est accordé, la responsabilité ne s'arrête
        pas là. La certification BIS inclut un système de surveillance et de
        conformité continu pour assurer l'adhésion continue aux normes
        indiennes. Cette phase post-certification est cruciale pour maintenir
        votre licence BIS, conserver le droit d'utiliser la marque ISI et éviter
        les pénalités légales ou les suspensions.
      </p>

      <p className="service-left-content-paragraph">
        Composants Clés de la Surveillance après l'obtention du certificat BIS
        Surveillance du Marché : Échantillonnage aléatoire de produits du marché
        indien pour des tests en laboratoire indépendants. Si l'échantillon
        échoue, le certificat BIS est suspendu. Cela est effectué deux fois par
        an.
      </p>
    </div>
  );
};

const FacilitatorSection = () => {
  return (
    <div id="facilitator" className="flex flex-col scroll-mt-20">
      {/* Facilitateur */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Facilitateur</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Titre */}
      <h2 className="service-left-content-heading-two">
        Pourquoi Choisir un Consultant en Certification BIS ?
      </h2>

      <p className="service-left-content-paragraph">
        La certification BIS sous le schéma d'enregistrement FMCS est complexe,
        hautement technique et sensible au temps. Bien qu'il soit possible de
        poursuivre la certification de manière indépendante, la plupart des
        fabricants étrangers qui réussissent s'appuient sur des consultants BIS
        pour rationaliser le parcours et minimiser les risques.
      </p>

      <h3 className="service-left-content-heading-three">
        Que Fait un Consultant BIS ?
      </h3>

      <p className="service-left-content-paragraph">
        Un consultant en certification BIS fournit des conseils de bout en bout
        à chaque étape du processus. Leurs responsabilités principales incluent
        :
      </p>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Tâche
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                Description
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Documentation
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Prépare, examine et formate tous les documents requis
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Support de Demande
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Soumet et suit votre demande BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Préparation d'Audit
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Guide les équipes d'usine pour assurer la préparation à l'audit
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Coordination d'Échantillons
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Gère le scellage et l'expédition des échantillons vers l'Inde
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Assistance aux Tests
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Assure la liaison avec les laboratoires et aide à interpréter
                les résultats
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Renouvellement et Surveillance
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Supervise les extensions de licence et les vérifications de
                conformité
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <p className="service-left-content-paragraph">
        Ils agissent comme votre partenaire stratégique, faisant souvent double
        emploi en tant que Représentant Indien Autorisé (AIR).
      </p>
    </div>
  );
};

export const ServiceFaq = () => {
  const faqs = [
    {
      question:
        "Qu'est-ce que la certification BIS et pourquoi est-il important pour les fabricants étrangers d'obtenir le BIS indien ?",
      answer:
        "La certification BIS est un processus réglementaire mené par le Bureau des Normes Indiennes pour garantir que les produits répondent aux normes indiennes. Elle est essentielle pour les fabricants étrangers pour obtenir l'accès au marché, le dédouanement et la confiance des consommateurs en Inde.",
    },
    {
      question: "Que représente la marque ISI ?",
      answer:
        "La marque ISI indique la conformité à une Norme Indienne spécifique. Elle est obligatoire pour les produits sous certification BIS et doit être imprimée sur les emballages et les produits.",
    },
    {
      question:
        "La certification BIS est-elle obligatoire pour toutes les importations en Inde ?",
      answer:
        "Non. La certification BIS est obligatoire pour les produits listés sous le schéma de certification BIS indien obligatoire. Cependant, la certification volontaire est disponible pour d'autres produits.",
    },
    {
      question: "Qui peut demander la certification BIS sous FMCS ?",
      answer:
        "Seuls les fabricants étrangers réels (pas les importateurs ou les commerçants) peuvent postuler. Un Représentant Indien Autorisé (AIR) est obligatoire pour les représenter en Inde.",
    },
    {
      question: "Combien de temps faut-il pour obtenir un certificat BIS ?",
      answer:
        "Le processus moyen de certification BIS sous FMCS prend 120 jours, selon la préparation des documents, la planification des audits et les délais de traitement des tests.",
    },
    {
      question:
        "Quels sont les coûts majeurs impliqués dans la certification BIS ?",
      answer:
        "Les coûts incluent les frais de demande, les frais d'audit, les frais de test en laboratoire, les frais de licence et de marquage, et une Garantie Bancaire de Performance (PBG) d'une banque indienne approuvée par la RBI.",
    },
    {
      question: "La licence BIS peut-elle être renouvelée ?",
      answer:
        "Oui. La licence BIS est généralement valide pour 1 à 2 ans et peut être renouvelée en respectant les exigences de conformité et de mise à jour des documents.",
    },
    {
      question:
        "Que se passe-t-il si le produit échoue lors des tests en laboratoire BIS ?",
      answer:
        "Si un produit échoue, le BIS peut autoriser une action corrective et un nouveau test. Un échec persistant peut entraîner le rejet de la demande.",
    },
    {
      question:
        "Est-il nécessaire d'embaucher un consultant en certification BIS ?",
      answer:
        "Ce n'est pas obligatoire mais fortement recommandé. Un consultant aide à réduire les retards, gérer la conformité et améliorer les chances d'approbation en assurant un alignement complet avec les protocoles BIS.",
    },
    {
      question: "Une licence BIS peut-elle être suspendue ou annulée ?",
      answer:
        "Oui. Le BIS peut suspendre ou annuler une licence pour non-conformité, échec du produit, mauvaise utilisation du logo ISI ou divergences d'audit.",
    },
    {
      question:
        "Quels documents sont nécessaires pour le processus de certification BIS ?",
      answer:
        "Les documents incluent le formulaire de demande FMCS, les rapports de test, les listes d'équipements, les certificats d'étalonnage, le plan d'usine, la lettre de nomination AIR et la preuve de paiement des frais.",
    },
    {
      question: "Un AIR peut-il représenter plusieurs demandes BIS ?",
      answer:
        "Oui, à condition qu'il soit autorisé pour chaque projet et ait la capacité de gérer la documentation, les audits et la communication pour chaque certification.",
    },
    {
      question: "Quel est le rôle d'une Garantie Bancaire de Performance ?",
      answer:
        "Une PBG assure au BIS que le fabricant se conformera aux normes indiennes. Elle est remboursable lors de l'annulation de la licence et obligatoire pour toutes les demandes FMCS obtenant le BIS indien.",
    },
    {
      question: "La certification BIS est-elle reconnue en dehors de l'Inde ?",
      answer:
        "Bien que le certificat BIS soit une norme indienne, il est respecté dans les contextes commerciaux dans de nombreuses régions qui acceptent la conformité indienne, notamment en Asie et en Afrique.",
    },
    {
      question:
        "Comment savoir si mon produit nécessite une certification BIS ?",
      answer:
        "Consultez la liste mise à jour sur le site web officiel du BIS ou consultez un consultant BIS pour vérifier si votre produit relève de la certification obligatoire.",
    },
  ];

  return (
    <section
      id="faqs"
      className="my-2  scroll-mt-20"
      aria-label="Questions Fréquemment Posées"
    >
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          Questions Fréquemment Posées
        </h2>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          Vous ne trouvez pas la réponse que vous cherchez ?{" "}
          <a
            href="/contact"
            className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4 hover:text-[#1A8781] transition-colors"
          >
            Contactez-nous !
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

const LanguageSelector = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const languages = [
    {
      code: "en",
      name: "English",
      flag: "https://flagcdn.com/w320/gb.png",
      path: "/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis",
    },
    {
      code: "zh",
      name: "Chinese",
      flag: "https://flagcdn.com/w320/cn.png",
      path: "/zh/wai-guo-sheng-chan-shang-yin-du-bis-ren-zheng-zhi-nan",
    },
    {
      code: "de",
      name: "German",
      flag: "https://flagcdn.com/w320/de.png",
      path: "/de/leitfaden-zur-bis-zertifizierung-fuer-auslaendische-hersteller-indisches-bis",
    },
    {
      code: "nl",
      name: "Dutch",
      flag: "https://flagcdn.com/w320/nl.png",
      path: "/nl/gids-voor-bis-certificering-voor-buitenlandse-fabrikanten-indiaas-bis",
    },
    {
      code: "ja",
      name: "Japanese",
      flag: "https://flagcdn.com/w320/jp.png",
      path: "/ja/bis-nintei-gaikoku-seizousha-no-tame-no-gaido-india-no-bis",
    },
    {
      code: "ko",
      name: "Korean",
      flag: "https://flagcdn.com/w320/kr.png",
      path: "/ko/indo-bis-waeoe-jejo-eopeul-wihan-bis-injeung-gaideu",
    },
    // {
    //   code: "fr",
    //   name: "French",
    //   flag: "https://flagcdn.com/w320/fr.png",
    //   path: "/fr/guide-certification-bis-pour-fabricants-etrangers-bis-inde",
    // },
    {
      code: "es",
      name: "Spanish",
      flag: "https://flagcdn.com/w320/es.png",
      path: "/es/guia-certificacion-bis-para-fabricantes-extranjeros-bis-indio",
    },
    {
      code: "th",
      name: "Thai",
      flag: "https://flagcdn.com/w320/th.png",
      path: "/th/khumanam-kanraprong-bis-samrab-puuphlit-thangchat-bis-india",
    },
    {
      code: "id",
      name: "Indonesian",
      flag: "https://flagcdn.com/w320/id.png",
      path: "/id/panduan-sertifikasi-bis-untuk-produsen-asing-bis-india",
    },
    {
      code: "it",
      name: "Italian",
      flag: "https://flagcdn.com/w320/it.png",
      path: "/it/guida-alla-certificazione-bis-per-produttori-stranieri-bis-indiano",
    },
    {
      code: "ar",
      name: "Arabic",
      flag: "https://flagcdn.com/w320/sa.png",
      path: "/ar/dalil-shahadat-bis-lilmusanein-alajnabiyin-bis-alhind",
    },
    {
      code: "vi",
      name: "Vietnamese",
      flag: "https://flagcdn.com/w320/vn.png",
      path: "/vi/huong-dan-chung-nhan-bis-cho-nha-san-xuat-nuoc-ngoai-bis-an-do",
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
                        alt={`${language.country} Flag`}
                        title={`${language.country} Flag`}
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

const Services = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12  md:pb-16  overflow-x-hidden ">
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
                Meilleur Consultant en Certificats d'Inde
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
              Marque BIS (Licence ISI) pour Fabricants Étrangers
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
              Certification d'Enregistrement CDSCO
            </p>
          </Link>

          <Link
            to="/what-is-crs-bis-or-crs-registration"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/BISCRS.jpg"
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
                src="/services-images/PlasticWasteManagement.jpg"
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
                src="/services-images/EPRCertificate.jpg"
                alt="EPR Certificate Logo"
                title="EPR Certificate Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Certifications Certificat EPR
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-lmpc-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/LMPC.jpg"
                alt="LMPC Logo"
                title="LMPC Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Certifications Certificat LMPC
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
              Certificat d'Enregistrement BIS
            </p>
          </Link>

          <Link
            to="/a-guide-to-bis-certification-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/services-images/ISIMark.jpg"
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
