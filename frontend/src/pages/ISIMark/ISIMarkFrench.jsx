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
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";

const ISIMarkFrench = () => {
  return (
    <div className="relative w-full">
      <ISIMarkMetaTags />
      <ISIMarkBreadcrumb />
      <ISIMarkHero />
      <ISIMarkIndex />
      <ISIMarkContent />
      <ISIMarkFaq />
      <div id="product-table">
        <ISIMarkAndBISCommonTableFrench />
      </div>
      <LanguageSelector />
      <div id="services">
        <ISIMarkServices />
      </div>
      <FooterFrench />
    </div>
  );
};

export default ISIMarkFrench;

const ISIMarkMetaTags = () => {
  const title =
    "Processus de Certification de Marque BIS ISI, Documents, Frais";
  const description =
    "La certification de marque ISI délivrée par le Bureau des Normes Indiennes est accordée aux produits qui subissent des tests et inspections rigoureux pour répondre aux normes et conformités requises";
  const keywords =
    "Marque ISI, Certification de Marque ISI, Certificat de Marque ISI, Certification ISI, Certificat ISI, Enregistrement de Marque ISI, Licence ISI, Marque BIS ISI, Certification de Marque BIS ISI";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Chef des Opérations chez Sun Certification India";

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
                    <Link to="/">Accueil</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Processus de Certification de Marque BIS ISI, Documents,
                    Frais
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
              Expertise Certifiée
            </span>
          </div>

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              Certification BIS pour
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            les Fabricants Indiens
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            Dans le cadre de la vision 'Make in India', la certification BIS
            aide les fabricants à garantir la sécurité, la qualité et la
            conformité des produits. Obtenez la certification et développez
            votre marque en toute confiance.
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
    if (path.includes("/fr/certification-bis-marque-isi"))
      return "ISI Mark - French Page";
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
        description: "Le numéro de téléphone doit contenir (8-15 chiffres)",
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
          "Merci de nous avoir contactés. Notre équipe vous contactera sous peu.",
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
          errorMessage ||
          "Échec de l'envoi des détails du formulaire de contact !",
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

      <h3 className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
        Réserver un Rendez-vous
      </h3>

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
            placeholder="Nom Complet *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Adresse E-mail *"
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
            placeholder="Numéro de Contact *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="companyName"
            value={companyName}
            onChange={handleOnChange}
            placeholder="Nom de l'Entreprise *"
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
            placeholder="Nom du Produit *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="message"
            value={message}
            onChange={handleOnChange}
            placeholder="Certification Requise*"
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
    overview: "Aperçu",
    requirement: "Exigences",
    documents: "Documents",
    conclusion: "Conclusion",
    faqs: "Questions Fréquentes",
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
          <ServicesRightSideContentFrench />
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
        <ServiceAuthorFrench />
      </div>
    </div>
  );
};

const OverviewSection = () => {
  return (
    <div id="overview" className="flex flex-col scroll-mt-20">
      {/* Overview */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Aperçu</span>
        <Separator className="service-left-content-separator" />
      </div>
      <h1 className="service-left-content-heading-two">
        Schémas de Certification BIS en Inde
      </h1>
      <div className="flex justify-center mt-[20px] md:mt-[26px]">
        <img
          src="/services-main-images/BIS-Certification-for-Indian-Manufacturers.png"
          alt="Schémas de Certification BIS de l'Inde"
          title="Schéma de Licence BIS"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <p className="service-left-content-paragraph">
        Dans la dynamique actuelle du marché, la réputation d'une marque sur le
        marché d'aujourd'hui, la confiance des consommateurs a une importance
        significative. Chaque consommateur veut une assurance concernant la
        sécurité et la fiabilité d'un produit, ainsi que les étapes de contrôle
        de la qualité prises lors de sa fabrication. Le Bureau des Normes
        Indiennes aborde ces problèmes et préoccupations en assurant des repères
        de qualité pour les produits vendus en Inde. La Certification de Marque
        ISI est l'un des certificats les plus réputés décernés sous BIS.
      </p>
      <p className="service-left-content-paragraph">
        Pour les fabricants nationaux, obtenir une Certification de Marque BIS
        ISI n'est pas seulement une question d'obtention du certificat de
        conformité, c'est aussi gagner l'acceptation du marché, la confiance de
        la marque et la protection juridique. La marque ISI est reconnue
        universellement et renforce la crédibilité en Inde lorsqu'il s'agit de
        la production d'appareils électriques, de matériaux de construction, de
        produits chimiques ou de biens de consommation.
      </p>
      <p className="service-left-content-paragraph">
        Cet article vise à explorer la Certification de Marque BIS ISI pour les
        fabricants nationaux, en se concentrant spécifiquement sur l'importance,
        les exigences, les avantages et l'ensemble du processus d'acquisition du
        certificat.
      </p>
      <h2 className="service-left-content-heading-three">
        Comprendre BIS et Son Rôle
      </h2>
      <p className="service-left-content-paragraph">
        Le Bureau des Normes Indiennes (BIS) est un organisme National de
        Normalisation et de Certification en Inde sous le Ministère des Affaires
        des Consommateurs et Publiques. En tant qu'organisme de réglementation,
        il établit et maintient des normes de qualité et leur application dans
        diverses industries tel que dirigé sous la Loi BIS de 1986.
      </p>
      <p className="service-left-content-paragraph">
        Le BIS agit comme une autorité de vérification tierce qui vérifie si un
        produit répond aux normes indiennes particulières. La certification BIS
        fournit au fabricant non seulement une exigence légale, mais aussi une
        marque d'approbation de confiance et de crédibilité de la part des
        clients.{" "}
      </p>
      <h2 className="service-left-content-heading-three">
        Qu'est-ce qu'une Marque ISI ?
      </h2>
      <p className="service-left-content-paragraph">
        La certification de marque ISI (marque de l'Institut des Normes
        Indiennes) est la marque de certification la plus ancienne et la plus
        reconnue du Bureau des Normes Indiennes (BIS) en Inde. La certification
        ISI se concentre sur la confirmation qu'un produit répond aux exigences
        de base des normes de qualité établies par BIS en relation avec la
        sécurité, la qualité, les performances et la fiabilité.{" "}
      </p>
      <p className="service-left-content-paragraph">
        Les produits qui portent la marque ISI ont subi des tests approfondis en
        laboratoire et des inspections d'usine. Il garantit que des procédures
        de contrôle de qualité appropriées sont mises en place et suivies
        pendant les étapes de production. Les consommateurs peuvent obtenir et
        utiliser des produits sûrs et fiables étiquetés avec la marque ISI. La
        marque ISI est un outil de confiance entre le consommateur et le
        fabricant et cette marque va au-delà de la norme.
      </p>
      <p className="service-left-content-paragraph">
        Quelques exemples de produits pour lesquels une certification ISI
        obligatoire est requise sont les suivants :{" "}
      </p>
      <PointsListWithoutHeading
        points={[
          "Appareils de tous types (Fers à repasser électriques, chauffages électriques, fils électriques, réfrigérateurs, unités de climatisation)",
          "Ciment et acier, tuyaux UPVC, chaussures en plastique et autres produits plastiques",
          "Engrais, produits chimiques et acides",
          "Casques de sécurité et lunettes, ainsi que certains types de jouets pour enfants",
        ]}
      />
      <p className="service-left-content-paragraph">
        Il y a plus de 650 produits qui nécessitent une certification BIS
        obligatoire pour utiliser la marque standard (Marque ISI) selon le
        Schéma I Annexe I du Bureau des Normes Indiennes. Les produits maintenus
        sous le schéma de certification obligatoire ne peuvent pas être
        fabriqués, importés ou vendus sur le marché indien sans la marque ISI.
        La liste des produits obligatoires peut être consultée sur ce{" "}
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
          lien de Liste des Produits
        </a>
        .{" "}
      </p>
      <h2 className="service-left-content-heading-three">
        Quelle est la Différence Entre la Certification BIS et la Marque ISI ?
      </h2>
      <p className="service-left-content-paragraph">
        Bien qu'elles soient souvent confondues et utilisées comme synonymes, la
        Certification BIS et la Marque ISI ont des définitions et des objectifs
        spécifiques :
      </p>
      <p className="service-left-content-paragraph">
        <strong>Certification BIS :</strong> Le processus d'octroi d'approbation
        à un produit après s'être assuré qu'il répond aux Normes Indiennes
        requises. C'est le cadre sous lequel les évaluations de conformité sont
        administrées.
      </p>

      <p className="service-left-content-paragraph">
        <strong>Marque ISI :</strong> Le symbole de qualité ou la marque
        standard qui est décernée à un produit après l'obtention de la
        certification BIS. Elle indique que le produit a été entièrement
        certifié et répond aux Normes Indiennes requises.
      </p>
      <p className="service-left-content-paragraph">
        De cette manière, ISI constitue l'engagement certifiable physique,
        tandis que la certification BIS offre le cadre administratif nécessaire.{" "}
      </p>

      <h2 className="service-left-content-heading-three">
        Pourquoi la Certification de Marque BIS ISI est-elle Importante pour les
        Fabricants ?
      </h2>

      <p className="service-left-content-paragraph">
        La Certification de Marque BIS ISI a une valeur significative pour les
        fabricants nationaux, tels que :
      </p>

      <p className="service-left-content-paragraph">
        <strong>1. Assurance Qualité :</strong> La marque ISI signifie qu'elle a
        passé des tests et inspections rigoureux, maintenant ainsi les normes
        les plus élevées établies de qualité. Cela, à son tour, augmente la
        fiabilité et la fiabilité du produit tout en minimisant les chances de
        défauts.
      </p>

      <p className="service-left-content-paragraph">
        <strong>2. Confiance du Consommateur :</strong> Les produits étiquetés
        avec la marque ISI sont généralement considérés comme sûrs et efficaces.
        Cela contribue à la fidélité à la marque, et donc à une marque plus
        robuste et réputée.
      </p>

      <p className="service-left-content-paragraph">
        <strong>3. Accès au Marché :</strong> Le marché indien a une abondance
        d'articles qui sont strictement interdits si l'on ne possède pas un
        certificat ISI valide. Dans de tels cas, la marque ISI sert de
        passerelle pour faciliter les ventes.
      </p>

      <p className="service-left-content-paragraph">
        <strong>4. Obtention d'Admission sur le Marché :</strong> Dans un
        environnement très compétitif, les produits certifiés ISI sont
        considérés comme ayant une réputation positive, ayant ainsi un avantage
        concurrentiel plus élevé par rapport à d'autres qui ne sont pas
        certifiés.
      </p>

      <p className="service-left-content-paragraph">
        <strong>5. Conformités Réglementaires :</strong> Les normes BIS sont
        telles que un fabricant dont les produits s'alignent avec de telles
        normes a une opération fluide, sans entrave, exempte de complexité
        juridique.
      </p>

      <p className="service-left-content-paragraph">
        <strong>6. Promotion des Exportations :</strong> Les produits qui sont
        certifiés ISI et possèdent donc une forte réputation de marque sont plus
        susceptibles d'être favorisés par les marchés étrangers en raison de la
        perception qu'ils sont de haute qualité et répondent aux normes
        mondiales.
      </p>

      <p className="service-left-content-paragraph">
        <strong>7. Sécurité du Consommateur :</strong> Tout produit avec
        certification ISI garantit la sécurité du consommateur contre tout
        danger potentiel, accidents ou mauvaise performance du produit.
      </p>

      <p className="service-left-content-paragraph">
        <strong>8. Contrôle de la Qualité :</strong> La nécessité d'effectuer
        des examens et vérifications constants garantit que les fabricants
        peuvent atteindre une qualité constante pour tous les lots produits.
      </p>
    </div>
  );
};

const RequirementSection = () => {
  return (
    <div id="requirement" className="flex flex-col scroll-mt-20">
      {/* Requirement */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Exigences</span>
        <Separator className="service-left-content-separator" />
      </div>
      <h2 className="service-left-content-heading-two">
        Exigences de Base pour la Certification de Marque BIS ISI
      </h2>
      <p className="service-left-content-paragraph">
        Pour obtenir la certification BIS, les fabricants nationaux doivent
        remplir les obligations clés suivantes.
      </p>
      <PointsListWithoutHeading
        points={[
          "Il doit y avoir conformité à la Spécification de Norme Indienne (ISS).",
          "Une licence est délivrée et accordée uniquement aux fabricants, et non aux distributeurs ou détaillants.",
          "Il est nécessaire de soumettre des demandes séparées pour chaque emplacement d'usine pour la certification.",
          "Les usines doivent posséder du personnel qualifié et des laboratoires d'essai internes.",
          "Tous les modes de production doivent être effectués dans la même unité de production depuis la matière première jusqu'à l'emballage final (La sous-traitance doit être autorisée au préalable par BIS).",
          "Des conseils techniques sont fournis dans les Manuels de Produits qui détaillent les normes pour l'inspection, les essais et la documentation nécessaire.",
        ]}
      />
      <h2 className="service-left-content-heading-three">
        Processus de Certification BIS ISI pour les Fabricants Nationaux
      </h2>
      <p className="service-left-content-paragraph">
        Obtenir la certification BIS est un processus en plusieurs étapes. Il y
        a deux procédures principales pour aborder le processus de certification
        BIS : Procédure Normale et Procédure Simplifiée.{" "}
      </p>
      <h3 className="service-left-content-heading-three">
        1. Procédure Normale (60-65 Jours)
      </h3>
      <PointsListWithoutHeading
        points={[
          "Le fabricant met en place des laboratoires internes et amène les produits à la conformité avec les Normes Indiennes.",
          "La demande ainsi que la documentation requise sont soumises.",
          "Inspection de l'Usine par les fonctionnaires BIS.",
          "Essai des produits dans les laboratoires approuvés par BIS.",
          "La licence est accordée si toutes les conditions sont remplies.",
        ]}
      />

      <h3 className="service-left-content-heading-three">
        2. Procédure Simplifiée (35-40 Jours)
      </h3>
      <PointsListWithoutHeading
        points={[
          "Le fabricant soumet des documents de produits pré-testés provenant de laboratoires reconnus par BIS.",
          "La demande ainsi que les frais sont soumis.",
          "Examen des documents et inspection de l'usine.",
          "Essais finaux et Octroi de licence dans une période de 35-40 jours.",
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
          Documents Requis
        </span>
        <Separator className="service-left-content-separator" />
      </div>
      <h2 className="service-left-content-heading-two">
        Documents Requis pour la Certification de Marque ISI
      </h2>
      <p className="service-left-content-paragraph">
        Les documents suivants doivent être présentés par les Fabricants :
      </p>
      <PointsListWithoutHeading
        points={[
          "1. Formulaire de Demande Complété (Formulaire V ou VI selon le schéma)",
          "2. Certificat d'Enregistrement Commercial (par ex., Enregistrement Udyam, MSME, Certificat GST)",
          "3. Licence d'Usine ou Licence Commerciale Municipale",
          "4. Liste de la Machinerie de Fabrication",
          "5. Organigramme du Processus de Fabrication",
          "6. Plan d'Aménagement des Locaux de Fabrication",
          "7. Détails du Personnel de Contrôle de Qualité Interne",
          "8. Détails de l'Équipement d'Essai",
          "9. Accord de Collaboration Technique (si applicable)",
          "10. Pouvoir Notarié/Lettre d'Autorisation",
          "11. Lettre d'Autorisation du Nom de Marque (si demande sous une marque différente)",
          "12. Rapport d'Essai du laboratoire approuvé par BIS",
          "13. Facture d'Achat de Matière Première",
          "14. Photographies du Produit et de l'Emballage",
          "15. Déclaration de Conformité aux Normes",
          "16. Engagement Concernant les Produits Non Standard",
        ]}
      />
      <h3 className="service-left-content-heading-three">
        Avantages de la Certification de Marque BIS ISI
      </h3>
      <p className="service-left-content-paragraph">
        Pour les fabricants indiens, obtenir la Certification de Marque BIS ISI
        offre des avantages spécifiques :
      </p>
      <PointsListWithoutHeading
        points={[
          "Autorisation Nationale : Les fabricants ont la permission de vendre les produits certifiés dans tout le pays.",
          "Éviter les Pénalités : Se conformer aux normes BIS évite des amendes importantes et des problèmes juridiques.",
          "Revenus Augmentés : La demande est plus élevée pour les produits qui sont certifiés.",
          "Potentiel d'Exportation : Certains marchés étrangers identifient ISI comme une norme d'excellence.",
          "Focus sur la Qualité : Une entreprise certifiée montre son engagement envers les principes de production de qualité.",
        ]}
      />

      <h3 className="service-left-content-heading-three">
        {" "}
        Révocation de la Licence BIS{" "}
      </h3>
      <p className="service-left-content-paragraph">
        La licence pour certifier est la propriété exclusive de l'autorité BIS
        et elle peut annuler une telle licence si :
      </p>
      <PointsListWithoutHeading
        points={[
          "Il y a une baisse de la qualité des produits qui ont été certifiés.",
          "Il y a une utilisation impropre de la marque ISI par les producteurs.",
          "Le producteur ne respecte pas un certain aspect de la licence.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Selon le Règlement 11 des Règlements BIS (Évaluation de la Conformité),
        2018, il ne fait aucun doute que la licence peut être suspendue ou
        annulée pour non-conformité aux règlements notés.
      </p>
    </div>
  );
};

const ConclusionSection = () => {
  return (
    <div id="conclusion" className="flex flex-col scroll-mt-20">
      {/* Conclusion */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Conclusion</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">Conclusion</h2>

      <p className="service-left-content-paragraph">
        Pour la Certification de Marque BIS ISI, encore une fois, il ne fait
        aucun doute qu'elle a plus que de simples étapes bureaucratiques pour
        les fabricants en Inde. Elle aide à établir une réputation positive et à
        réaliser une croissance durable dans l'entreprise. Si les normes BIS
        sont respectées, alors il y a une assurance certifiée maximale que les
        produits sont fiables et prêts pour la vente.
      </p>

      <p className="service-left-content-paragraph">
        En conclusion, la marque ISI est devenue plus qu'un simple conformité
        légale, elle est devenue une marque d'assurance dans un environnement
        commercial où la confiance est difficile à trouver. C'est un signe de
        compétitivité sur le marché ainsi que de conformité aux règlements.
      </p>

      <p className="service-left-content-paragraph">
        Peu importe si vous fabriquez des produits électroniques, des éléments
        de construction ou tout autre produit pour la vente, la Certification
        BIS ISI garantit que vos produits sont alignés avec les normes de
        premier rang de l'Inde tout en protégeant votre réputation ainsi que vos
        consommateurs.
      </p>
    </div>
  );
};

const ISIMarkFaq = () => {
  const faqData = [
    {
      question:
        "Qu'est-ce que la certification BIS et pourquoi est-elle importante ?",
      answer:
        "La certification BIS est délivrée par le Bureau des Normes Indiennes pour s'assurer que les produits respectent les normes de sécurité et de qualité de l'Inde. Elle est vitale pour la conformité légale, la confiance des consommateurs et l'acceptation sur le marché.",
    },
    {
      question:
        "Quelle est la différence entre la licence BIS et la marque ISI ?",
      answer:
        "La licence BIS est un document juridique qui autorise un fabricant à utiliser la marque ISI. La marque ISI est l'étiquette visible sur les produits indiquant la certification BIS.",
    },
    {
      question: "Combien de temps faut-il pour obtenir la certification BIS ?",
      answer:
        "Typiquement, 6 à 10 semaines selon le type de produit, les exigences d'essai et les résultats de l'audit",
    },
    {
      question: "Quelle est la période de validité d'une licence BIS ?",
      answer:
        "Généralement de 1 à 2 ans, après quoi elle doit être renouvelée. Le renouvellement doit être initié au moins 30 jours avant l'expiration.",
    },
    {
      question: "Quel est le coût de la certification BIS ?",
      answer:
        "Les coûts varient mais peuvent aller de ₹25,000 à ₹100,000+, incluant les essais, l'audit et les frais de licence.",
    },
    {
      question:
        "La certification BIS est-elle obligatoire pour tous les produits ?",
      answer:
        "Non. Elle est obligatoire uniquement pour les produits listés sous le schéma 1 de certification BIS.",
    },
    {
      question:
        "Comment puis-je trouver la norme IS appropriée pour mon produit ?",
      answer:
        "Visitez le site web de BIS ou consultez avec les laboratoires d'essai et consultants reconnus par BIS pour identifier la norme applicable.",
    },
    {
      question:
        "Les fabricants étrangers peuvent-ils demander la certification BIS ?",
      answer:
        "Oui. Par le Schéma de Certification des Fabricants Étrangers (FMCS), les entités étrangères peuvent obtenir des licences BIS pour l'utilisation de la marque ISI.",
    },
    {
      question: "Que se passe-t-il si mon produit échoue aux essais BIS ?",
      answer:
        "Vous devrez corriger les problèmes et soumettre à nouveau pour les essais. Les demandes peuvent être suspendues jusqu'à ce qu'une conformité réussie soit démontrée.",
    },
    {
      question: "La certification BIS est-elle nécessaire pour l'exportation ?",
      answer:
        "Bien qu'elle ne soit pas toujours obligatoire pour les exportations, la certification BIS augmente la crédibilité et peut satisfaire les acheteurs internationaux ou les organismes de réglementation.",
    },
  ];

  return (
    <section
      id="faqs"
      className="my-2 scroll-mt-20"
      aria-label="Questions Fréquentes"
    >
      <div className="max-w-[88rem] mx-auto px-4 pt-5 pb-9 md:pb-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          Questions Fréquentes
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
    // {
    //   code: "fr",
    //   name: "French",
    //   flag: "https://flagcdn.com/w320/fr.png",
    //   path: "/fr/certification-bis-marque-isi",
    // },
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
    {
      code: "it",
      name: "Italian",
      flag: "https://flagcdn.com/w320/it.png",
      path: "/it/certificazione-bis-isi-mark",
    },
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

const ISIMarkServices = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12  md:pb-16  overflow-x-hidden ">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
              Nos Services
            </h2>
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
                src={ISIMarkImage}
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
