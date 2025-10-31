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
import ServicesRightSideContentFrench from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentFrench";
import ServiceAuthorFrench from "@/components/manual/ServiceAuthor/ServiceAuthorFrench";
import { ISIMarkAndBISCommonTableFrench } from "../ISIMarkAndBISCommonTable/ISIMarkAndBISCommonTableFrench";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { ClockLoader } from "react-spinners";
import { BoxReveal } from "@/components/magicui/box-reveal";
import FooterFrench from "@/components/manual/Footer/FooterFrench";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
const BISImage = "/services-images/BIS.jpg";
const CDSCO = "/services-images/CDSCO.jpg";
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";

const BISCertificationFrench = () => {
  return (
    <div className="relative w-full">
      <BISCertificationMetaTags />
      <BISCertificationBreadcrumb />
      <BISCertificationHero />
      <BISCertificationIndex />
      <BISCertificationContent />
      <BISCertificationFaq />
      <ISIMarkAndBISCommonTableFrench />
      <div id="services">
        <BISCertificationServices />
      </div>
      <FooterFrench />
    </div>
  );
};

export default BISCertificationFrench;

const BISCertificationMetaTags = () => {
  const title = "Certification BIS : Types, Processus, Documents, Coût";
  const description =
    "La certification BIS garantit que les produits sont conformes aux normes indiennes en matière de sécurité, de performance et de qualité.";
  const keywords =
    "Certification BIS, Enregistrement BIS, Marque ISI, Processus BIS, Coût BIS, Normes indiennes, BIS Inde, Licence BIS";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher = "Dhruv Aggarwal, Responsable des opérations chez Sun Certification India";

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
                    <Link to="/">Accueil</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Certification BIS en Inde pour importateurs et fabricants
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
              Expertise certifiée
            </span>
          </div>

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              Certification BIS en Inde
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            pour importateurs et fabricants
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            La certification BIS assure la qualité et la sécurité des produits en Inde. Elle est obligatoire pour de nombreux produits et nécessite essais, documentation et approbation.
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
                Voir les services
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
    if (path.includes("/fr/quest-ce-que-le-certificat-bis-indien"))
      return "Certification BIS - Page Française";
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
        title: "Veuillez saisir un nom complet valide.",
        description: "Le nom ne doit contenir que des lettres et des espaces.",
      });
      setLoading(false);
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "Veuillez saisir une adresse e-mail valide.",
        description: "Vérifiez le format de votre e-mail.",
      });
      setLoading(false);
      return;
    }

    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "Veuillez saisir un numéro de téléphone valide.",
        description: "Le numéro doit contenir 8 à 15 chiffres.",
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
        title: "Formulaire soumis avec succès !",
        description:
          "Merci de nous avoir contactés. Notre équipe vous répondra prochainement.",
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
      const errorMessage = error.response?.data?.message || "Une erreur est survenue";
      toast({
        variant: "destructive",
        title: errorMessage || "Échec de l'envoi du formulaire !",
        description:
          "Veuillez vérifier vos informations et réessayer.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="z-20 w-full md:w-[580px] h-auto md:h-[435px] flex flex-col">
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-poppins font-semibold text-[18px] md:text-[20px] text-[#008080]">
          Contact
        </span>
        <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
      </div>

      <h3 className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
        Prendre rendez-vous
      </h3>

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
            placeholder="Numéro de téléphone *"
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
            placeholder="Certification requise *"
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
              <span>Envoi…</span>
            </div>
          ) : (
            <div className="flex gap-3 items-center justify-center">
              <span>Réserver</span>
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
    overview: "Aperçu",
    schemes: "Programmes",
    process: "Processus",
    documents: "Documents",
    cost: "Coût",
    air: "AIR",
    conclusion: "Conclusion",
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
        <ServicesRightSideContentFrench />
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
      <h1 className="service-left-content-heading-two">
        Certification BIS Marque ISI pour fabricants indiens
      </h1>

      <div className="flex justify-center mt-[20px] md:mt-[26px]">
        <img
          src="/services-main-images/IndianBisCertification.png"
          alt="Certification BIS en Inde"
          title="Certificat BIS pour fabricants indiens"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <h2 className="service-left-content-heading-three">
        Introduction : pourquoi la certification BIS est essentielle
      </h2>

      <p className="service-left-content-paragraph">
        Imaginez un fabricant en Allemagne ayant conçu un appareil électronique unique et souhaitant le vendre sur le marché indien. Bien que l’appareil soit sûr et approuvé en Europe, il est retenu au port en Inde. Pourquoi ? Parce qu’il nécessite la certification BIS, indispensable pour de nombreux produits en Inde.
      </p>

      <p className="service-left-content-paragraph">
        Pour les consommateurs, la marque BIS n’est pas qu’un logo : c’est un gage que le produit a été testé pour la qualité, la sécurité et la fiabilité. Pour les entreprises, c’est la porte d’entrée vers l’un des plus grands marchés du monde.
      </p>

      <p className="service-left-content-paragraph">
        Cet article répond aux questions sur la certification BIS : son utilité, ses processus, ses avantages, ses programmes, ses coûts et la manière de s’y retrouver pour les fabricants étrangers et nationaux.
      </p>

      <h2 className="service-left-content-heading-three">
        Qu’est‑ce que la certification BIS pour fabricants et importateurs ?
      </h2>

      <p className="service-left-content-paragraph">
        La certification BIS est une attestation de qualité et de sécurité délivrée par le Bureau of Indian Standards (BIS), l’organisme national de normalisation de l’Inde. Elle atteste la conformité aux Normes Indiennes (IS) en matière de performance, de sécurité et de qualité.
      </p>
      <p className="service-left-content-paragraph">
        Une fois les exigences remplies, le BIS délivre une licence ou un certificat. Les produits peuvent alors porter la marque ISI (programmes domestiques) ou un numéro d’enregistrement CRS unique (sous le Compulsory Registration Scheme).
      </p>
      <p className="service-left-content-paragraph">
        Pour de nombreux fabricants et importateurs, la certification BIS est obligatoire. Elle couvre une large gamme de produits : appareils électriques, ciment et acier, eau potable conditionnée, électronique (téléphones, LED, power banks), bijoux (via le hallmarking), etc. Sans reconnaissance BIS, la vente ou la distribution en Inde est illégale.
      </p>

      <h2 className="service-left-content-heading-three">
        Bref historique du BIS en Inde
      </h2>

      <p className="service-left-content-paragraph">
        Le Bureau of Indian Standards (BIS) a été créé en 1986, remplaçant l’Indian Standards Institution (ISI) fondée en 1947. Il est aujourd’hui le garant de la qualité et des normes en Inde, aligné sur les pratiques internationales et adapté au contexte local.
      </p>

      <h3 className="service-left-content-heading-three">Repères clés</h3>

      <PointsListWithoutHeading
        points={[
          "1947 : Création de l’ISI pour soutenir les contrôles qualité après l’indépendance.",
          "1955 : Introduction de la marque ISI – symbole de qualité en Inde.",
          "1986 : Adoption de la loi BIS, l’ISI devient le Bureau of Indian Standards.",
          "2016/2018 : Élargissement des responsabilités (hallmarking et programmes de certification).",
        ]}
      />

      <p className="service-left-content-paragraph">
        Aujourd’hui, le BIS garantit la sécurité, la fiabilité et la standardisation de milliers de produits pour les utilisateurs en Inde, tous secteurs confondus.
      </p>

      <h2 className="service-left-content-heading-three">
        Pourquoi la certification BIS est‑elle obligatoire en Inde ?
      </h2>
      <p className="service-left-content-paragraph">
        Le marché indien est immense, évolutif et sensible aux prix. Cette ouverture l’expose aux produits bon marché et dangereux. La certification BIS agit comme barrière de protection.
      </p>
      <PointsListWithoutHeading
        points={[
          "Sécurité des consommateurs – prévention des accidents, des risques sanitaires et des fraudes.",
          "Régulation du marché – empêche l’entrée de produits non conformes.",
          "Confiance – renforce la crédibilité des produits nationaux et internationaux.",
          "Alignement international – aide les entreprises étrangères à se conformer au cadre indien.",
          "Concurrence loyale – tous concurrencent sur la base de la qualité.",
        ]}
      />
      <p className="service-left-content-paragraph">
        Par exemple, la certification BIS pour l’eau potable conditionnée prévient des risques sanitaires. De même, les normes pour chauffages, grille‑pain et autres appareils réduisent les incendies. La certification répond à ces enjeux.
      </p>
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

        <h2 className="service-left-content-heading-two">Processus de certification BIS</h2>

        <p className="service-left-content-paragraph">
          Le processus suit un déroulé structuré :
        </p>

        <PointsListWithoutHeading
          points={[
            "Identifier la norme applicable (IS).",
            "Déposer la demande auprès du BIS avec les documents requis.",
            "Essais produits dans des laboratoires reconnus BIS.",
            "Inspection d’usine par des agents du BIS.",
            "Licence BIS après évaluation concluante.",
            "Surveillance et maintien de la conformité.",
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
          <span className="service-left-content-index-heading">Documents</span>
          <Separator className="service-left-content-separator" />
        </div>

        <h2 className="service-left-content-heading-two">
          Documents requis pour la certification BIS
        </h2>

        <p className="service-left-content-paragraph">
          Un dossier solide assure un traitement fluide. Exigences clés :
        </p>

        <PointsListWithoutHeading
          points={[
            "Licence d’activité ou documents d’enregistrement de l’entreprise.",
            "Schéma du processus de fabrication.",
            "Liste des machines et équipements.",
            "Détails du produit et spécifications techniques.",
            "Rapports d’essais de laboratoires reconnus par le BIS.",
            "Manuel de contrôle qualité.",
            "Certificat de marque (le cas échéant).",
          ]}
        />

        <h3 className="service-left-content-heading-three mt-5">
          Pour les fabricants étrangers :
        </h3>

        <PointsListWithoutHeading
          points={[
            "Nomination d’un Représentant Indien Autorisé (AIR).",
            "Preuves de représentation et documents d’identité.",
          ]}
        />
      </div>
    );
  };

  const CostSection = () => {
  return (
    <div id="cost" className="flex flex-col scroll-mt-20">
      {/* Coût */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Coût</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">Coût de la certification BIS</h2>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                Poste de coût
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                Détails
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Frais de dossier
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Frais uniques, non remboursables, selon le type de produit
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Frais d’essais
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Selon la complexité ; versés aux laboratoires reconnus par le BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Redevance annuelle de licence
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Due chaque année pour maintenir la licence BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Frais d’inspection/audit d’usine
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Facturés en cas de visite d’usine par le BIS (déplacements nationaux/internationaux en sus)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Frais de conseil (le cas échéant)
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Optionnels, pour un accompagnement de conformité de bout en bout
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
        Rôle du Représentant Indien Autorisé (AIR)
      </h2>

      <p className="service-left-content-paragraph">
        Pour les fabricants étrangers, le Représentant Indien Autorisé (AIR) est essentiel.
      </p>

      <PointsListWithoutHeading
        points={[
          "Gère toute la communication avec le BIS.",
          "Rassemble et soumet les documents, puis facilite le processus d’inspection.",
          "Garantit la conformité avant, pendant et après la certification.",
          "Doit être un citoyen indien ou une entité disposant d’une adresse enregistrée en Inde.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Sans AIR, l’obtention de la certification BIS pour les entreprises étrangères est impossible.
      </p>
    </div>
  );
};

const ConclusionSection = () => {
  return (
    <div id="conclusion" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Conclusion</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">Conclusion</h2>

      <p className="service-left-content-paragraph">
        La certification BIS est indispensable pour faire des affaires en Inde. Elle n’est plus optionnelle : elle est essentielle pour la réussite et la confiance. Pour les fabricants et importateurs, elle assure un cadre légal et sécurisé, réduisant les risques. Avec la marque BIS, la confiance des consommateurs est renforcée.
      </p>

      <p className="service-left-content-paragraph">
        L’Inde est l’une des économies à la croissance la plus rapide. Accéder à ce marché offre un potentiel considérable. Que vous produisiez en Inde ou à l’étranger, la licence BIS est nécessaire pour fabriquer ou vendre en Inde. C’est un investissement en sécurité, confiance, réputation et croissance durable.
      </p>
    </div>
  );
};

const SchemesSection = () => {
  return (
    <div id="schemes" className="flex flex-col scroll-mt-20">
      {/* Programmes */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Programmes</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Programmes de certification BIS
      </h2>

      <p className="service-left-content-paragraph">
        Le BIS propose de nombreux programmes de certification conçus pour divers secteurs et types de produits. Chacun répond aux besoins spécifiques de l’industrie et du produit.
      </p>

      <PointsListWithoutHeading
        points={[
          "FMCS – Foreign Manufacturers Certification Scheme",
          "Programme Marque ISI (fabricants nationaux)",
          "Scheme X du BIS indien",
          "CRS – Compulsory Registration Scheme",
          "Hallmarking (bijoux et métaux précieux)",
          "Certification Eco Mark",
          "MSCS – Management Systems Certification Scheme",
          "LRS – Lab Recognition Scheme",
        ]}
        linkMap={{
          "FMCS – Foreign Manufacturers Certification Scheme":
            "a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis",
          "Programme Marque ISI (fabricants nationaux)":
            "a-guide-to-bis-certification-indian-bis",
          "Scheme X du BIS indien":
            "indian-bis-certification-under-scheme-x",
          "CRS – Compulsory Registration Scheme":
            "what-is-crs-bis-or-crs-registration",
        }}
      />

      <h3 className="service-left-content-heading-three">
        Programme Marque ISI (fabricants nationaux)
      </h3>

      <p className="service-left-content-paragraph">
        Pour les fabricants indiens, obtenir une licence BIS est un prérequis pour vendre légalement leurs produits dans le pays. Cette certification est délivrée par le Bureau of Indian Standards (BIS) afin d’attester le respect des Normes Indiennes en matière de qualité, de sécurité et de performance. Elle comprend des audits d’usine, des essais produits et des contrôles de conformité aux paramètres du BIS. Une fois le produit validé, les fabricants sont autorisés à apposer la marque ISI. Cette marque est un signe distinctif qui aide le client à identifier un produit authentique et certifié ISI.
      </p>

      <p className="service-left-content-paragraph">
        Qu’il s’agisse d’électronique, d’acier, de ciment, de plastique ou de matériaux de construction, obtenir un certificat BIS est essentiel pour accéder au marché. Au‑delà de la confiance des consommateurs, la certification renforce la réputation des fabricants indiens, leur permet de participer aux marchés publics et ouvre de nombreuses opportunités. Surtout, l’absence de certification peut avoir de graves conséquences : amendes, rappels de produits, voire interdiction de vente en Inde. La conformité BIS est donc plus qu’une obligation légale : c’est une stratégie pour instaurer et maintenir la confiance des consommateurs.
      </p>

      <p className="service-left-content-paragraph">
        Le programme de la marque ISI est le plus prestigieux. Les fabricants doivent faire tester leurs produits dans des laboratoires reconnus par le BIS. Les sites de production sont soumis à inspection et essais. Les produits conformes sont autorisés à utiliser la marque ISI. Il est interdit de fournir des produits tels que le ciment, les bouteilles de GPL, les câbles électriques, l’eau potable conditionnée, etc., sans la marque ISI.
      </p>

      <h3 className="service-left-content-heading-three">
        FMCS – Foreign Manufacturers Certification Scheme
      </h3>

      <p className="service-left-content-paragraph">
        Le FMCS est un programme élaboré par le BIS pour les entreprises étrangères souhaitant entrer sur le marché indien. Il garantit la sécurité, la qualité et la performance des produits fabriqués à l’étranger conformément aux Normes Indiennes. Selon le FMCS, les entreprises étrangères qui souhaitent vendre en Inde doivent d’abord obtenir un certificat ou une licence du BIS. Comme les fabricants indiens, les fabricants étrangers doivent également obtenir une licence BIS pour utiliser la marque ISI. Cette marque convoitée est accordée après une évaluation approfondie comprenant l’inspection de l’usine et des essais rigoureux des échantillons selon les Normes Indiennes.
      </p>

      <p className="service-left-content-paragraph">
        Le fabricant étranger doit nommer un Représentant Indien Autorisé (AIR), responsable de la communication et de la coordination, premier point de contact avec le BIS pour ce programme. Cela inclut le dépôt de la demande, l’évaluation approfondie de la conformité et la prise en charge de toutes les obligations nécessaires dans les délais. En suivant les lignes directrices du FMCS, les entreprises étrangères peuvent entrer sur le marché indien et gagner la confiance des clients. Tout produit portant la marque ISI atteste d’un haut niveau de qualité, de sécurité et de fiabilité en Inde.
      </p>

      <p className="service-left-content-paragraph">
        Aucun produit étranger relevant des catégories réglementées ne peut entrer en Inde sans la certification FMCS.
      </p>

      <h3 className="service-left-content-heading-three">
        Scheme X (Omnibus Technical Regulation)
      </h3>

      <p className="service-left-content-paragraph">
        Scheme X, ou Omnibus Technical Regulation, est un autre programme du BIS visant à simplifier les procédures de conformité pour les secteurs mécaniques et électriques. Contrairement à d’autres programmes, Scheme X réduit la documentation, les évaluations et les approbations, tout en garantissant l’adhérence aux Normes Indiennes. Les produits portant la marque standard sont de qualité et de sécurité élevées, après essais de type, inspections d’usine et certification des exigences obligatoires.
      </p>

      <p className="service-left-content-paragraph">
        Le Scheme X couvre les lignes directrices de sécurité des machines lourdes et des équipements électriques tels que pompes, grues, transformateurs, machines‑outils et autres produits d’ingénierie lourde. Il réduit le temps et les coûts de la certification BIS complexe, vise à rationaliser la conformité pour accélérer la mise sur le marché et renforcer la réputation, sans compromettre la qualité et la sécurité. La réputation du BIS facilite le commerce international, indispensable pour respecter la conformité et accroître la compétitivité.
      </p>

      <p className="service-left-content-paragraph">
        Scheme X est obligatoire pour accéder au secteur indien des machines lourdes. Ce programme favorise la concurrence, l’innovation et la conformité via une structure simplifiée mais robuste.
      </p>

      <h3 className="service-left-content-heading-three">
        Compulsory Registration Scheme (CRS)
      </h3>

      <p className="service-left-content-paragraph">
        Le BIS a développé le CRS (Compulsory Registration Scheme) pour réguler les produits IT et électroniques en Inde. Il évalue la sécurité et la qualité de produits à risque comme les LED, téléphones mobiles, ordinateurs portables, power banks et autres électroniques grand public selon les Normes Indiennes. Contrairement au programme ISI, le CRS n’octroie pas la marque ISI ; les produits enregistrés portent un marquage CRS avec un numéro d’enregistrement unique. Tous les produits doivent être testés dans des laboratoires reconnus par le BIS et enregistrés sous le CRS avant la vente ou l’importation en Inde.
      </p>

      <p className="service-left-content-paragraph">
        Ce programme protège les consommateurs contre les produits dangereux, de qualité inférieure ou contrefaits, en particulier sur un marché numérique en forte croissance. Les fabricants indiens et étrangers doivent obtenir l’enregistrement CRS. Les entreprises étrangères doivent nommer un AIR. Le BIS met régulièrement à jour la liste des produits couverts pour inclure de nouvelles technologies et problématiques de sécurité. Pour les fabricants, l’enregistrement CRS améliore la conformité, la confiance, la réputation de l’entreprise et l’accès au marché de l’électronique en Inde.
      </p>

      <h3 className="service-left-content-heading-three">Hallmarking</h3>

      <p className="service-left-content-paragraph">
        En Inde, le poinçonnage (hallmarking) des bijoux en or et en argent est obligatoire et réglementé par le BIS, garantissant la pureté et l’authenticité. Les articles en métaux précieux sont testés dans des centres d’essai et de poinçonnage (AHC) agréés par le BIS, puis poinçonnés. Ce processus n’est achevé que si les articles satisfont aux Normes Indiennes. Les bijoutiers doivent obtenir une licence BIS pour vendre des bijoux poinçonnés et se soumettre à des essais produits, audits BIS et contrôles continus.
      </p>

      <p className="service-left-content-paragraph">
        Pour les consommateurs indiens, l’or et l’argent ne sont pas que des ornements, mais aussi des investissements majeurs ; la confiance et la transparence sont essentielles. Le poinçonnage est un gage pour le public que chaque bijou vendu a été rigoureusement testé selon des critères nationaux et des pratiques commerciales loyales. Il renforce la crédibilité et la réputation du marché de la bijouterie.
      </p>

      <h3 className="service-left-content-heading-three">
        Certification Eco Mark
      </h3>

      <p className="service-left-content-paragraph">
        Eco Mark est un programme de reconnaissance orienté innovation, créé par le BIS pour promouvoir les produits éco‑responsables. Contrairement à la certification traditionnelle axée sur la sécurité et la qualité, Eco Mark est attribué aux produits conformes aux Normes Indiennes et présentant un impact environnemental réduit à une ou plusieurs étapes de leur cycle de vie. La certification n’est accordée qu’après des essais approfondis et la démonstration de critères de conformité : niveaux d’émissions, non‑toxicité, biodégradabilité, recyclabilité et interactions globales avec l’environnement.
      </p>

      <p className="service-left-content-paragraph">
        La licence BIS avec Eco Mark atteste une fabrication responsable et le souci de l’environnement. Elle garantit la conformité légale et crée un avantage concurrentiel auprès des consommateurs et entreprises orientés durabilité. Eco Mark soutient la vision de l’Inde : concilier protection de la qualité et protection de l’environnement sous l’égide du BIS.
      </p>

      <h3 className="service-left-content-heading-three">
        MSCS – Management Systems Certification Scheme
      </h3>

      <p className="service-left-content-paragraph">
        Le MSCS est une procédure graduelle du BIS qui évalue et reconnaît les entreprises pour la mise en œuvre de systèmes de management reconnus internationalement (ISO 9001 Qualité, ISO 14001 Environnement, ISO 45001 Santé & Sécurité, etc.). Il certifie la légalité des opérations, la constance et l’amélioration continue. Les entreprises certifiées subissent de multiples évaluations et audits, renforçant la confiance des clients, régulateurs et parties prenantes ainsi que les garanties de sécurité, qualité et durabilité.
      </p>

      <p className="service-left-content-paragraph">
        En tant qu’organisme national de normalisation, le BIS renforce la réputation et la crédibilité des organisations en Inde et à l’international. Au‑delà de la supervision périodique et des recertifications, le MSCS encourage l’intégrité, l’efficacité et l’équité des pratiques, et soutient des initiatives publiques comme « Make in India » et « Atmanirbhar Bharat ». Il favorise le commerce et l’investissement et contribue à l’écosystème qualité du pays.
      </p>

      <h3 className="service-left-content-heading-three">
        LRS – Lab Recognition Scheme
      </h3>

      <p className="service-left-content-paragraph">
        Dans le cadre du BIS, le LRS garantit la fiabilité et la compétence des laboratoires qui testent et certifient les produits. Ces labos sont évalués sur la compétence technique, la qualité du personnel, les infrastructures et la conformité à l’ISO/IEC 17025. Une fois reconnus, ils peuvent réaliser les essais requis pour les différents programmes de certification (ISI, CRS).
      </p>

      <p className="service-left-content-paragraph">
        Le LRS renforce l’équité des résultats et leur alignement sur des références internationales, tout en n’accréditant que des laboratoires fiables. Pour garantir intégrité et transparence, le BIS réalise audits, essais d’aptitude et surveillances réguliers. Cette reconnaissance améliore la confiance des consommateurs et rend la certification plus efficace pour l’industrie. Pour obtenir la certification BIS, la collaboration avec des laboratoires reconnus LRS est essentielle.
      </p>

      <h3 className="service-left-content-heading-three">
        Produits nécessitant une certification BIS
      </h3>

      <p className="service-left-content-paragraph">
        La certification BIS s’applique à une grande variété de produits. Exemples :
      </p>

      <PointsListWithoutHeading
        points={[
          "Électrique & Électronique – Lampes LED, téléphones mobiles, adaptateurs, ordinateurs portables.",
          "Matériaux de construction – Ciment, barres d’acier, produits structurels.",
          "Biens de consommation – Eau potable conditionnée, bouteilles de gaz.",
          "Bijoux & métaux précieux – Or et argent (hallmarking).",
          "Équipements industriels – Pompes, transformateurs, machines‑outils.",
        ]}
      />

      <p className="service-left-content-paragraph">
        La liste continue de s’allonger à mesure que de nouveaux risques et technologies émergent.
      </p>

      <h3 className="service-left-content-heading-three">
        Bénéfices de la certification BIS
      </h3>

      <p className="service-left-content-paragraph">
        Pour les entreprises, le certificat BIS offre bien plus que la simple conformité légale :
      </p>

      <PointsListWithoutHeading
        points={[
          "Conformité légale : pas d’amendes, pas d’interdictions, pas de saisies.",
          "Accès au marché : indispensable pour vendre des produits réglementés en Inde.",
          "Confiance des consommateurs : la marque ISI est un signe de preuve reconnu.",
          "Avantage compétitif : différenciation claire face aux concurrents non certifiés.",
          "Facilitation des exportations : de nombreux acheteurs internationaux comprennent et valorisent la certification BIS.",
          "Appels d’offres : de nombreux projets publics exigent des biens certifiés BIS.",
        ]}
      />
    </div>
  );
};

const BISCertificationFaq = () => {
  const faqData = [
    {
      question: "Qu’est‑ce que la certification BIS en Inde ?",
      answer:
        "La certification BIS est une attestation de qualité délivrée par le Bureau of Indian Standards, garantissant la conformité aux normes indiennes de sécurité, de performance et de qualité.",
    },
    {
      question: "Pourquoi ai‑je besoin d’un certificat BIS ?",
      answer:
        "Il est obligatoire pour fabriquer, importer, distribuer ou vendre certains produits en Inde. Il renforce la confiance et la conformité réglementaire.",
    },
    {
      question: "Qu’est‑ce que la marque ISI ?",
      answer:
        "La marque ISI indique qu’un produit est conforme et certifié selon les normes indiennes sous les programmes du BIS.",
    },
    {
      question: "Qui délivre les licences BIS ?",
      answer:
        "Le Bureau of Indian Standards (BIS), l’organisme national sous le Ministère des Affaires Consommatrices.",
    },
    {
      question: "Quels sont les principaux programmes BIS ?",
      answer:
        "Marque ISI, CRS (Compulsory Registration Scheme), FMCS, Hallmarking, Eco Mark et Scheme X.",
    },
  ];

  return (
    <section id="faqs" className="my-2 scroll-mt-20" aria-label="Questions fréquentes">
      <div className="max-w-[88rem] mx-auto px-4 pt-5 pb-9 md:pb-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          FAQs – Certification BIS en Inde
        </h2>

        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          Vous ne trouvez pas votre réponse ?{" "}
          <a
            href="/contact"
            className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4 hover:text-[#1A8781] transition-colors"
          >
            Contactez‑nous !
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
              Nos services
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                Meilleur consultant en certification en Inde
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
                alt="BIS"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Marque BIS (licence ISI) pour fabricants étrangers
            </p>
          </Link>

          <Link
            to="/cdsco-registration-certification"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={CDSCO}
                alt="CDSCO"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Enregistrement & Certification CDSCO
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
                alt="PlasticWasteManagement"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Gestion des déchets plastiques (EPR)
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
              Certificat EPR
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
              Certificat LMPC
            </p>
          </Link>

          <Link
            to="/what-is-bis-certificate-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={BISImage}
                alt="BIS"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Certificat d’enregistrement BIS
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
              Marque ISI (BIS) pour fabricants indiens
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


