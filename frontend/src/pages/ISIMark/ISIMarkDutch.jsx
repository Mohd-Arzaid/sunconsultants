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
const CDSCO = "/services-images/CDSCO.jpg";
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";

const ISIMarkDutch = () => {
  return (
    <div className="relative w-full">
      <ISIMarkMetaTags />
      <ISIMarkBreadcrumb />
      <ISIMarkHero />
      <ISIMarkIndex />
      <ISIMarkContent />
      <ISIMarkFaq />
      <div id="product-table">
        <ISIMarkAndBISCommonTableDutch />
      </div>
      <div id="services">
        <ISIMarkServices />
      </div>
      <FooterDutch />
    </div>
  );
};

export default ISIMarkDutch;

const ISIMarkMetaTags = () => {
  const title = "BIS ISI Mark Certificeringsproces, Documenten, Kosten";
  const description =
    "ISI mark certificering uitgegeven door het Bureau of Indian Standards wordt gegeven aan producten die strenge tests en inspecties ondergaan om aan de vereiste normen en conformiteit te voldoen";
  const keywords =
    "ISI Mark, ISI Mark Certificering, ISI Mark Certificaat, ISI Certificering, ISI Certificaat, ISI Mark Registratie, ISI Licentie, BIS ISI Mark, BIS ISI Mark Certificering";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Hoofd Operaties bij Sun Certification India";

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
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    BIS ISI Mark Certificeringsproces, Documenten, Kosten
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
              Gecertificeerde Expertise
            </span>
          </div>

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              BIS Certificering voor
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            Indiase Fabrikanten
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            Als onderdeel van de 'Make in India' visie helpt BIS certificering
            fabrikanten om productveiligheid, kwaliteit en conformiteit te garanderen. Krijg
            certificering en laat uw merk met vertrouwen groeien.
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
    if (path.includes("/nl/bis-isi-mark-certificering"))
      return "ISI Mark - Dutch Page";
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
        title: errorMessage || "Mislukt om contactformuliergegevens in te dienen!",
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
        Wilt u ons team contacteren en een gesprek plannen?
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
              <span>Maak Afspraak</span>
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
    overview: "Overzicht",
    requirement: "Vereisten",
    documents: "Documenten",
    conclusion: "Conclusie",
    faqs: "Veelgestelde Vragen",
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
          <ServicesRightSideContentDutch />
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
          src="/services-main-images/BIS-Certification-for-Indian-Manufacturers.png"
          alt="Indiase BIS Certificeringsschema's"
          title="BIS Licentie Schema"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <p className="service-left-content-paragraph">
        In de huidige marktdynamiek heeft de reputatie van een merk in de huidige
        markt, het vertrouwen van consumenten een aanzienlijk belang. Elke consument
        wil zekerheid over de veiligheid en betrouwbaarheid van een product, samen
        met de kwaliteitscontrole stappen die tijdens de productie worden genomen. Het
        Bureau of Indian Standards adresseert deze problemen en zorgen en zorgt ervoor dat
        kwaliteitsbenchmarks voor de producten die in India worden verkocht. De ISI Mark
        Certificering is een van de meest gerenommeerde certificaten die onder
        BIS wordt uitgereikt.
      </p>
      <p className="service-left-content-paragraph">
        Voor binnenlandse fabrikanten is het verkrijgen van een BIS ISI Mark Certificering
        niet alleen het verkrijgen van het certificaat van conformiteit, het gaat ook om
        het verkrijgen van marktacceptatie, merkvertrouwen en juridische bescherming. Het
        ISI merk wordt universeel erkend en versterkt de geloofwaardigheid in India
        wanneer het gaat om de productie van elektrische apparaten, bouwmaterialen,
        chemicaliën of huishoudelijke goederen.
      </p>
      <p className="service-left-content-paragraph">
        Dit artikel heeft tot doel de BIS ISI Mark Certificering voor binnenlandse
        fabrikanten te onderzoeken, met name gericht op het belang, de vereisten,
        voordelen en het hele proces van certificaatverwerving.
      </p>
      <h2 className="service-left-content-heading-three">
        BIS en haar Rol Begrijpen
      </h2>
      <p className="service-left-content-paragraph">
        Het Bureau of Indian Standards (BIS) is een Nationale Standaardisatie en
        Certificeringsinstantie in India onder het Ministerie van Consumentenzaken en
        Publiek. Als regelgevend orgaan stelt het normen voor
        kwaliteit vast en handhaaft deze en de handhaving ervan in verschillende industrieën zoals bepaald onder de
        BIS Wet van 1986.
      </p>
      <p className="service-left-content-paragraph">
        Het BIS fungeert als een verificatie-autoriteit van derden die controleert of
        een product voldoet aan de specifieke Indiase normen. BIS certificering
        biedt de fabrikant niet alleen een juridische vereiste, maar ook
        een merkteken van goedkeuring van vertrouwen en geloofwaardigheid van de klanten.{" "}
      </p>
      <h2 className="service-left-content-heading-three">
        Wat is een ISI Mark?
      </h2>
      <p className="service-left-content-paragraph">
        De ISI mark (Indian Standards Institute mark) certificering is het
        oudste en meest erkende certificeringsmerk van het Bureau of
        Indian Standards (BIS) in India. De ISI certificering richt zich op
        bevestiging dat een product voldoet aan de basisvereisten van de kwaliteitsnormen
        die door BIS zijn vastgesteld met betrekking tot veiligheid, kwaliteit, prestaties en
        betrouwbaarheid.{" "}
      </p>
      <p className="service-left-content-paragraph">
        Producten die het ISI merk dragen hebben grondige laboratoriumtests en
        fabrieksinspecties voltooid. Het garandeert dat goede kwaliteitscontrole
        procedures worden geïmplementeerd en gevolgd tijdens de productie
        fasen. Consumenten kunnen veilige en betrouwbare producten verkrijgen en gebruiken
        gelabeld met het ISI merk. Het ISI merk is een instrument voor vertrouwen tussen de
        consument en de fabrikant en dit merk gaat verder dan de standaard.
      </p>
      <p className="service-left-content-paragraph">
        Enkele voorbeelden van producten waarvoor verplichte ISI certificering
        vereist is, zijn als volgt:{" "}
      </p>
      <PointsListWithoutHeading
        points={[
          "Apparaten van alle soorten (Elektrische strijkijzers, elektrische kachels, elektrische draden, koelkasten, airconditioning units)",
          "Cement en staal, UPVC buizen, plastic schoeisel en andere plastic producten",
          "Meststoffen, chemicaliën en zuren",
          "Veiligheidshelmen en -brillen, evenals sommige soorten speelgoed voor kinderen",
        ]}
      />
      <p className="service-left-content-paragraph">
        Er zijn meer dan 650 producten die verplichte BIS
        certificering vereisen om het standaardmerk (ISI Mark) te gebruiken onder Schema I
        Bijlage I van het Bureau of Indian Standard. Producten die onder het
        verplichte certificeringsschema worden gehouden kunnen niet worden gefabriceerd, geïmporteerd of verkocht
        op de Indiase markt zonder ISI merk. De lijst van verplichte producten
        kan worden geraadpleegd op deze{" "}
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
          Productlijst link
        </a>
        .{" "}
      </p>
      <h2 className="service-left-content-heading-three">
        Wat is het Verschil tussen BIS Certificering en ISI Mark?
      </h2>
      <p className="service-left-content-paragraph">
        Hoewel vaak verward en gebruikt als synoniemen, hebben BIS Certificering en ISI
        Mark specifieke definities en doelen:
      </p>
      <p className="service-left-content-paragraph">
        <strong>BIS Certificering :</strong> Het proces van het verlenen van goedkeuring aan
        een product nadat is vastgesteld dat het voldoet aan de vereiste Indiase Normen. Het
        is het kader waarbinnen conformiteitsbeoordelingen worden beheerd.
      </p>

      <p className="service-left-content-paragraph">
        <strong>ISI Mark :</strong> Het kwaliteitssymbool of het standaardmerk dat
        wordt toegekend aan een product nadat BIS certificering is verkregen. Het
        geeft aan dat het product volledig is gecertificeerd en voldoet aan de vereiste
        Indiase Normen.
      </p>
      <p className="service-left-content-paragraph">
        Op deze manier vormt ISI de fysieke certificeerbare verbintenis,
        terwijl BIS certificering het benodigde administratieve kader biedt.{" "}
      </p>

      <h2 className="service-left-content-heading-three">
        Waarom is BIS ISI Mark Certificering Belangrijk voor Fabrikanten?
      </h2>

      <p className="service-left-content-paragraph">
        BIS ISI Mark Certificering heeft een aanzienlijke waarde voor binnenlandse
        fabrikanten, zoals:
      </p>

      <p className="service-left-content-paragraph">
        <strong>1. Kwaliteitsgarantie:</strong> Het ISI merk betekent dat het
        strenge tests en inspecties heeft doorstaan, waardoor de vastgestelde
        hoogste kwaliteitsnormen worden gehandhaafd. Dit verhoogt op zijn beurt de betrouwbaarheid
        en betrouwbaarheid van het product terwijl de kans op defecten wordt geminimaliseerd.
      </p>

      <p className="service-left-content-paragraph">
        <strong>2. Vertrouwen van de Consument:</strong> Producten gelabeld met ISI
        merk worden algemeen als veilig en effectief beschouwd. Dit
        draagt bij aan merk loyaliteit, en dus een robuuster en gerenommeerder
        merk.
      </p>

      <p className="service-left-content-paragraph">
        <strong>3. Toegang tot de Markt:</strong> De Indiase markt heeft een
        overvloed aan artikelen die strikt verboden zijn als men geen
        geldig ISI certificaat bezit. In dergelijke gevallen dient het ISI merk als de
        poort voor het faciliteren van verkopen.
      </p>

      <p className="service-left-content-paragraph">
        <strong>4. Markttoegang Verkrijgen:</strong> Binnen een zeer
        competitieve omgeving worden ISI gecertificeerde producten gezien als met een
        positieve reputatie, waardoor ze een hoger concurrentievoordeel hebben ten opzichte van
        anderen die niet gecertificeerd zijn.
      </p>

      <p className="service-left-content-paragraph">
        <strong>5. Regelgevingsconformiteit:</strong> BIS normen zijn zodanig dat
        een fabrikant waarvan de producten zich aan dergelijke normen houden een soepele,
        onbelemmerde werking heeft, vrij van juridische complexiteit.
      </p>

      <p className="service-left-content-paragraph">
        <strong>6. Export Promotie:</strong> Producten die ISI gecertificeerd zijn
        en dus een sterke merk reputatie bezitten, hebben meer kans om te worden begunstigd
        door buitenlandse markten vanwege de perceptie dat het hoge kwaliteit is en
        voldoet aan mondiale normen.
      </p>

      <p className="service-left-content-paragraph">
        <strong>7. Veiligheid van de Consument:</strong> Elk product met ISI
        certificering garandeert de veiligheid van de consument tegen eventuele potentiële
        gevaren, ongelukken of slechte productprestaties.
      </p>

      <p className="service-left-content-paragraph">
        <strong>8. Kwaliteitscontrole:</strong> De noodzaak om constant
        onderzoeken en controles uit te voeren garandeert dat de fabrikanten in staat zijn om
        constante kwaliteit te bereiken voor alle geproduceerde batches.
      </p>
    </div>
  );
};

const RequirementSection = () => {
  return (
    <div id="requirement" className="flex flex-col scroll-mt-20">
      {/* Requirement */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Vereisten</span>
        <Separator className="service-left-content-separator" />
      </div>
      <h2 className="service-left-content-heading-two">
        Basisvereisten voor BIS ISI Mark Certificering
      </h2>
      <p className="service-left-content-paragraph">
        Om BIS certificering te verkrijgen, moeten binnenlandse fabrikanten de
        volgende belangrijke verplichtingen vervullen.
      </p>
      <PointsListWithoutHeading
        points={[
          "Er moet voldaan worden aan de Indian Standard Specificatie (ISS).",
          "Een licentie wordt alleen uitgegeven en verleend aan fabrikanten, niet aan distributeurs of retailers.",
          "Er moet een aparte aanvraag worden ingediend voor elke fabriekslocatie voor de certificering.",
          "Fabrieken moeten gekwalificeerd personeel en interne testlaboratoria bezitten.",
          "Alle productiemodi moeten worden uitgevoerd in dezelfde productie-eenheid vanaf de grondstof tot de finale verpakking (Outsourcing moet vooraf worden geautoriseerd door BIS).",
          "Technische begeleiding wordt verstrekt in Producthandboeken die de normen voor inspectie, testen en noodzakelijke documentatie detailleren.",
        ]}
      />
      <h2 className="service-left-content-heading-three">
        Proces van BIS ISI Certificering voor Binnenlandse Fabrikanten
      </h2>
      <p className="service-left-content-paragraph">
        Het verkrijgen van de BIS certificering is een proces in meerdere stappen. Er zijn twee
        hoofdprocedures om het BIS certificeringsproces te benaderen: Normale
        Procedure en Vereenvoudigde Procedure.{" "}
      </p>
      <h3 className="service-left-content-heading-three">
        1. Normale Procedure (60-65 Dagen)
      </h3>
      <PointsListWithoutHeading
        points={[
          "De fabrikant richt interne laboratoria op en brengt de producten in overeenstemming met de Indiase Normen.",
          "Aanvraag samen met de vereiste documentatie wordt ingediend.",
          "Fabrieksinspectie door BIS functionarissen.",
          "Testen van producten in BIS-goedgekeurde laboratoria.",
          "Licentie wordt verleend als aan alle voorwaarden wordt voldaan.",
        ]}
      />

      <h3 className="service-left-content-heading-three">
        2. Vereenvoudigde Procedure (35-40 Dagen)
      </h3>
      <PointsListWithoutHeading
        points={[
          "Fabrikant dient documenten in van vooraf geteste producten van door BIS erkende laboratoria.",
          "Aanvraag samen met de vergoeding wordt ingediend.",
          "Documenten controle en fabrieksinspectie.",
          "Eindtest en verlening van licentie in een periode van 35-40 dagen.",
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
          Vereiste Documenten
        </span>
        <Separator className="service-left-content-separator" />
      </div>
      <h2 className="service-left-content-heading-two">
        Documenten Vereist voor ISI Mark Certificering
      </h2>
      <p className="service-left-content-paragraph">
        De volgende documenten moeten worden gepresenteerd door de Fabrikanten:
      </p>
      <PointsListWithoutHeading
        points={[
          "1. Ingevuld Aanvraagformulier (Formulier V of VI afhankelijk van het schema)",
          "2. Bedrijfsregistratiecertificaat (bijv. Udyam Registratie, MSME, GST Certificaat)",
          "3. Fabriekslicentie of Gemeentelijke Handel Licentie",
          "4. Lijst van Productiemachines",
          "5. Productieproces Flowchart",
          "6. Layoutplan van de Productie Premises",
          "7. Details van Intern Kwaliteitscontrole Personeel",
          "8. Details van Testapparatuur",
          "9. Overeenkomst van Technische Samenwerking (indien van toepassing)",
          "10. Volmacht/Autorisatiebrief",
          "11. Merknaam Autorisatiebrief (indien aanvraag onder een ander merk)",
          "12. Testrapport van BIS-goedgekeurd laboratorium",
          "13. Factuur van Grondstof Aanbesteding",
          "14. Foto's van Product en Verpakking",
          "15. Verklaring van Conformiteit aan Normen",
          "16. Verbintenis Betreffende Niet-Standaard Producten",
        ]}
      />
      <h3 className="service-left-content-heading-three">
        Voordelen van BIS ISI Mark Certificering
      </h3>
      <p className="service-left-content-paragraph">
        Voor Indiase fabrikanten biedt het verkrijgen van de BIS ISI Mark Certificering
        specifieke voordelen:
      </p>
      <PointsListWithoutHeading
        points={[
          "Landelijke Autorisatie: Fabrikanten hebben toestemming om de gecertificeerde producten in het hele land te verkopen.",
          "Sancties Ontwijken: Het naleven van BIS normen voorkomt zware boetes en juridische problemen.",
          "Verhoogde Inkomsten: Vraag is hoger voor producten die gecertificeerd zijn.",
          "Exportpotentieel: Bepaalde buitenlandse markten identificeren ISI als een norm van uitmuntendheid.",
          "Focus op Kwaliteit: Een Gecertificeerd bedrijf toont toewijding aan de principes van kwaliteitsproductie.",
        ]}
      />

      <h3 className="service-left-content-heading-three">
        {" "}
        Intrekking van BIS Licentie{" "}
      </h3>
      <p className="service-left-content-paragraph">
        De licentie om te certificeren is het exclusieve eigendom van de BIS autoriteit en deze kan
        een dergelijke licentie annuleren indien:
      </p>
      <PointsListWithoutHeading
        points={[
          "Er is een daling in de kwaliteit van producten die zijn gecertificeerd.",
          "Er is een onjuist gebruik van het ISI merk door de producenten.",
          "De producent volgt een bepaald aspect van de licentie niet.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Volgens Regeling 11 van BIS (Conformiteitsbeoordeling) Regelingen,
        2018, is er geen twijfel dat de licentie kan worden geschorst of geannuleerd voor
        het niet naleven van de genoteerde regelingen.
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
        Voor de BIS ISI Mark Certificering, nogmaals, er is geen twijfel dat het
        meer is dan alleen bureaucratische stappen voor fabrikanten in India. Het
        helpt bij het vestigen van een positieve reputatie en het bereiken van duurzame
        groei in het bedrijf. Als de BIS normen worden nageleefd, dan is er
        uiterste gecertificeerde garantie dat de producten betrouwbaar zijn en klaar zijn voor
        verkoop.
      </p>

      <p className="service-left-content-paragraph">
        Concluderend is het ISI merk meer geworden dan alleen een juridische
        conformiteit, het is een merkteken van garantie geworden in een zakelijke omgeving
        waar vertrouwen moeilijk te vinden is. Het is een teken van concurrentievermogen in de
        markt samen met naleving van regelgeving.
      </p>

      <p className="service-left-content-paragraph">
        Of u nu elektronische producten, bouwelementen of
        andere producten voor verkoop produceert, BIS ISI Certificering zorgt ervoor dat uw producten
        overeenkomen met India's eersteklas normen terwijl u uw
        reputatie beschermt evenals uw consumenten.
      </p>
    </div>
  );
};

const ISIMarkFaq = () => {
  const faqData = [
    {
      question: "Wat is BIS certificering en waarom is het belangrijk?",
      answer:
        "BIS certificering wordt uitgegeven door het Bureau of Indian Standards om ervoor te zorgen dat producten voldoen aan Indiase veiligheids- en kwaliteitsnormen. Het is van cruciaal belang voor juridische conformiteit, consumentenvertrouwen en marktacceptatie.",
    },
    {
      question: "Wat is het verschil tussen BIS licentie en ISI merk?",
      answer:
        "De BIS licentie is een juridisch document dat een fabrikant autoriseert om het ISI merk te gebruiken. Het ISI merk is het zichtbare label op producten dat BIS certificering aangeeft.",
    },
    {
      question: "Hoe lang duurt het om BIS certificering te krijgen?",
      answer:
        "Typisch 6-10 weken afhankelijk van producttype, testvereisten en auditresultaten",
    },
    {
      question: "Wat is de geldigheidsperiode van een BIS licentie?",
      answer:
        "Gewoonlijk 1 tot 2 jaar, waarna deze moet worden vernieuwd. Vernieuwing moet ten minste 30 dagen voor de vervaldatum worden gestart.",
    },
    {
      question: "Wat zijn de kosten van BIS certificering?",
      answer:
        "Kosten variëren maar kunnen variëren van ₹25.000 tot ₹100.000+, inclusief testen, audit en licentievergoedingen.",
    },
    {
      question: "Is BIS certificering verplicht voor alle producten?",
      answer:
        "Nee. Het is alleen verplicht voor producten die onder schema 1 van BIS certificering staan vermeld.",
    },
    {
      question: "Hoe kan ik de juiste IS norm voor mijn product vinden?",
      answer:
        "Bezoek de BIS website of raadpleeg met BIS-erkende testlaboratoria en consultants om de toepasselijke norm te identificeren.",
    },
    {
      question: "Kunnen buitenlandse fabrikanten BIS certificering aanvragen?",
      answer:
        "Ja. Via het Foreign Manufacturers Certification Scheme (FMCS) kunnen buitenlandse entiteiten BIS licenties verkrijgen voor ISI merk gebruik.",
    },
    {
      question: "Wat gebeurt er als mijn product BIS testen niet haalt?",
      answer:
        "U moet de problemen corrigeren en opnieuw indienen voor testen. Aanvragen kunnen worden gepauzeerd totdat succesvolle conformiteit wordt aangetoond.",
    },
    {
      question: "Is BIS certificering nodig voor export?",
      answer:
        "Hoewel niet altijd verplicht voor export, verhoogt BIS certificering geloofwaardigheid en kan het internationale kopers of regelgevende instanties tevredenstellen.",
    },
  ];

  return (
    <section
      id="faqs"
      className="my-2 scroll-mt-20"
      aria-label="Veelgestelde Vragen"
    >
      <div className="max-w-[88rem] mx-auto px-4 pt-5 pb-9 md:pb-12">
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
              Onze Diensten
            </h2>
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
                src={CDSCO}
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
                src={BISCRS}
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
                src={PlasticWasteManagement}
                alt="PlasticWasteManagement"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Beheer van Plastic Afval
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
              EPR Certificaat Certificeringen
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
              LMPC Certificaat Certificeringen
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

