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
import ServicesRightSideContentItalian from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentItalian";
import ISIMARKImage from "../../assets/servicesImages/ISIMARKUpdated.jpg";
import BISCertificateImage from "../../assets/bisfmpageimage/biscertificate.png";
import BISFMProductTable from "@/pages/BISFMProductTable/BISFMProductTable.jsx";
import ServiceAuthorItalian from "@/components/manual/ServiceAuthor/ServiceAuthorItalian";
import FooterItalian from "@/components/manual/Footer/FooterItalian";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const BISFMItalian = () => {
  // Prevent auto-scroll on mount - ensure page stays at top
  useEffect(() => {
    // Immediately scroll to top
    window.scrollTo(0, 0);

    // Also check if there's a hash in URL that might cause scroll
    // If hash exists and it's not intentional, remove it
    if (window.location.hash === "#product-table") {
      // Clear hash to prevent auto-scroll to product table
      window.history.replaceState(null, "", window.location.pathname);
    }

    // Additional safeguard: ensure scroll stays at top after a brief delay
    const timeoutId = setTimeout(() => {
      // Only scroll to top if we're not already there (to avoid unnecessary scroll)
      if (window.scrollY > 50) {
        window.scrollTo(0, 0);
      }
    }, 200);

    return () => clearTimeout(timeoutId);
  }, []);

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
      <FooterItalian />
      <ScrollToTopButton />
    </div>
  );
};

export default BISFMItalian;

const MetaTags = () => {
  const title =
    "Certificazione BIS FMCS | Schema di Certificazione per Produttori Stranieri | Sun Certifications";
  const description =
    "Servizi esperti di certificazione BIS FMCS per produttori stranieri. Ottieni la certificazione ISI Mark per le esportazioni in India. Certificazioni BIS affidabili dal 2013. ✓ Elaborazione Rapida ✓ Guida Esperta";
  const keywords =
    "Certificato BIS per produttori stranieri, Licenza BIS, Marchio ISI";
  const canonicalUrl =
    "https://bis-certifications.com/it/guida-alla-certificazione-bis-per-produttori-stranieri-bis-indiano";
  const author = "Dhruv Aggarwal";
  const publisher = "Sun Certifications India";
  const ogTitle =
    "BIS FMCS Certification | Foreign Manufacturer Certification Scheme";
  const ogDescription =
    "Expert BIS FMCS certification services for foreign manufacturers. Get ISI Mark certification for exports to India. ✓ Fast Processing ✓ Expert Guidance";

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://bis-certifications.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Marchio BIS (Licenza ISI) per Produttori Stranieri",
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
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Marchio BIS (Licenza ISI) per Produttori Stranieri
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
              Competenza Certificata
            </span>
          </div>

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              Certificazione BIS Indiana
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            per produttori stranieri
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            I produttori stranieri necessitano del marchio ISI per le
            esportazioni in India. Copre oltre 600 prodotti obbligatori e oltre
            20.000 prodotti volontari.
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
        <ContactUsForm />
      </div>
    </div>
  );
};

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);

  // Function to get page name based on URL
  const getPageName = () => {
    const path = window.location.pathname;

    // BISFM (FMCS - Foreign Manufacturers)
    if (
      path.includes(
        "/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
      )
    )
      return "BIS Mark (ISI License) for Foreign Manufacturers - English Page";
    if (
      path.includes(
        "/it/guida-alla-certificazione-bis-per-produttori-stranieri-bis-indiano"
      )
    )
      return "Marchio BIS (Licenza ISI) per Produttori Stranieri - Pagina Italiana";
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
        title: "Please enter a valid full name.",
        description: "Name should only contain letters and spaces.",
      });
      setLoading(false);
      return;
    }

    // Email validation - allow any domain
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "Please enter a valid email address.",
        description: "Check if your email format is correct",
      });
      setLoading(false);
      return;
    }

    // Phone number validation
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "Please enter a valid phone number",
        description: "Phone number must be (8-15 digits)",
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
        title: "Contact form submitted successfully!",
        description:
          "Thank you for contacting us. Our team will get back to you soon.",
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
        title: errorMessage || "Failed to submit contact form details!",
        description:
          "Something went wrong. Please check your details and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="z-20 w-full md:w-[580px] h-auto md:h-[435px] flex flex-col">
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-poppins font-semibold text-[18px] md:text-[20px] text-[#008080]">
          Contact Us
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
            placeholder="Full Name *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Email Address *"
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
            placeholder="Contact Number *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="companyName"
            value={companyName}
            onChange={handleOnChange}
            placeholder="Company Name *"
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
            placeholder="Product Name *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="message"
            value={message}
            onChange={handleOnChange}
            placeholder="Required Certification*"
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
              <span>Prenota Appuntamento</span>
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
    overview: "Panoramica",
    standardization: "Standardizzazione",
    representation: "Rappresentanza",
    document: "Documento",
    process: "Processo",
    costing: "Costi",
    surveillance: "Sorveglianza",
    facilitator: "Facilitatore",
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

const MainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side */}
        <MainContentLeft />
        {/* Right Side */}
        <ServicesRightSideContentItalian />
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
            Informazioni complete sulla certificazione BIS indiana secondo lo
            Schema FMCS
          </h1>

          <h2 className="service-left-content-heading-three">
            Cos'è il BIS indiano?
          </h2>

          <p className="service-left-content-paragraph">
            Il Bureau of Indian Standards (BIS) è l'ente nazionale di
            standardizzazione dell'India sotto il Ministero degli Affari dei
            Consumatori, Alimentari e Distribuzione Pubblica. Istituito con la
            legge BIS del 1986 e rivista nel 2016, il BIS svolge un ruolo
            fondamentale nella standardizzazione, marcatura e certificazione
            della qualità delle merci. Mira a garantire la qualità, sicurezza e
            affidabilità dei prodotti offerti ai consumatori indiani.
          </p>

          <p className="service-left-content-paragraph">
            Il BIS opera attraverso vari schemi che includono la certificazione
            dei prodotti, la punzonatura per i gioielli, i servizi di test e
            programmi di formazione. Tuttavia, uno dei suoi framework più
            significativi a livello internazionale è lo Schema di Certificazione
            per Produttori Stranieri (FMCS).
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

      <h2 className="service-left-content-heading-two">
        Cos'è il certificato BIS secondo FMCS?
      </h2>

      <p className="service-left-content-paragraph">
        Introdotto nel 2000, FMCS è un meccanismo attraverso il quale i
        produttori stranieri possono ottenere una licenza BIS per utilizzare il
        marchio ISI sui loro prodotti, indicando la conformità agli standard
        indiani. Il processo di certificazione FMCS consente alle entità estere
        di vendere legalmente i loro prodotti in India senza stabilire un'unità
        di produzione locale.
      </p>

      <p className="service-left-content-paragraph">
        Ad oggi, più di 1.650 produttori stranieri operano in India sotto il
        sistema di certificazione BIS attraverso FMCS.{" "}
      </p>

      <h2 className="service-left-content-heading-three">
        Perché la Certificazione BIS è Cruciale?
      </h2>

      <p className="service-left-content-paragraph">
        Ottenere un certificato BIS è più di un requisito legale—è una porta
        d'accesso al vasto mercato dei consumatori indiano. Ecco alcuni motivi
        chiave per cui è essenziale:
      </p>

      <PointsListWithoutHeading
        points={[
          "Conformità Legale: I prodotti devono conformarsi agli standard indiani pertinenti.",
          "Credibilità del Marchio: Il marchio ISI serve come prova di qualità e aumenta la fiducia dei consumatori.",
          "Sdoganamento: Senza una licenza BIS valida, i prodotti possono essere respinti alla dogana.",
          "Accesso al Mercato: Aiuta i marchi stranieri a ottenere un ingresso senza problemi e un'ampia accettazione in India.",
          "Mitigazione del Rischio: Garantisce che i prodotti siano sicuri, evitando così potenziali richiami e problemi di responsabilità.",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        Ambito dei Prodotti Coperti dal BIS
      </h2>

      <p className="service-left-content-paragraph">
        Il BIS ha elencato oltre 600 prodotti sotto certificazione obbligatoria
        e oltre 20.000 articoli sono idonei per il certificato BIS volontario.
        Questi coprono una vasta gamma di settori:
      </p>

      <PointsListWithoutHeading
        points={[
          "Elettronica e hardware IT",
          "Componenti automobilistici",
          "Elettrodomestici",
          "Prodotti in acciaio",
          "Cemento e materiali da costruzione ecc.",
        ]}
      />

      <p className="service-left-content-paragraph">
        L'elenco in crescita indica l'ambito e la rilevanza crescenti del
        certificato BIS nel commercio globale.
      </p>

      <h2 className="service-left-content-heading-three">
        Obiettivi o benefici della Certificazione BIS per Produttori Stranieri
        secondo FMCS
      </h2>

      <p className="service-left-content-paragraph">
        Il regime FMCS e il certificato BIS mirano a:
      </p>

      <PointsListWithoutHeading
        points={[
          "L'uso del marchio ISI senza una licenza BIS valida è punibile per legge.",
          "I prodotti certificati devono mostrare sia il logo ISI che il numero CM/L (Certificato di Licenza di Produzione).",
          "I trasgressori possono affrontare divieti di prodotti, multe o persino procedimenti penali.",
          "Costruire fiducia tra consumatori e marchi importati.",
          "Facilitare il commercio equo e un campo di gioco uniforme.",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        Caratteristiche Principali del Certificato BIS per produttori stranieri
      </h2>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                CARATTERISTICA
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                DESCRIZIONE
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Applicabilità
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Solo produttori stranieri
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Marcatura
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Marchio ISI + numero CM/L
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Requisito di Audit
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Ispezione obbligatoria dello stabilimento
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Test
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Condotti presso laboratori indiani approvati dal BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Validità
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Licenza BIS valida per 1-2 anni
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Rinnovo
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Richiesto alla scadenza o agli aggiornamenti del prodotto
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                AIR (Rappresentante Indiano Autorizzato)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Deve essere nominato per interfacciarsi con il BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Garanzia Bancaria di Prestazione
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Richiesta da una banca indiana approvata dalla RBI
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
      {/* Standardization */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">
          Standardizzazione
        </span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Cos'è il BIS Indiano e Perché è Importante?
      </h2>

      <p className="service-left-content-paragraph">
        Il BIS indiano è il marchio di qualità e sicurezza emesso dal Bureau of
        Indian Standards (BIS). Oggi, il marchio ISI è utilizzato esclusivamente
        per designare prodotti che conformi agli standard indiani secondo lo
        schema ufficiale di certificazione BIS.
      </p>

      <p className="service-left-content-paragraph">
        Affinché un prodotto possa portare il marchio BIS o ISI indiano, deve
        superare un rigoroso processo di certificazione BIS, inclusi test di
        laboratorio, ispezione dello stabilimento, audit della documentazione e
        controlli di conformità con le linee guida BIS indiane.
      </p>

      <p className="service-left-content-paragraph">
        Posizione Legale della Certificazione BIS in India
      </p>

      <p className="service-left-content-paragraph">
        La licenza BIS non è solo uno strumento di marketing—è un requisito
        legale per tutti i prodotti che rientrano nello schema di certificazione
        BIS obbligatorio.{" "}
      </p>

      <h3 className="service-left-content-heading-three">
        Secondo la Legge BIS, 2016:
      </h3>

      <PointsListWithoutHeading
        points={[
          "L'uso del marchio ISI senza una licenza BIS valida è punibile per legge.",
          "I prodotti certificati devono mostrare sia il logo ISI che il numero CM/L (Certificato di Licenza di Produzione).",
          "I trasgressori possono affrontare divieti di prodotti, multe o persino procedimenti penali.",
        ]}
      />

      <img
        src={ISIMARKImage}
        alt="Logo Marchio ISI"
        title="Logo Marchio ISI"
        className="w-full max-w-[300px] h-auto rounded-lg shadow-sm my-6 mx-auto border border-gray-200 hover:shadow-md transition-shadow duration-300"
      />

      <p className="service-left-content-heading-three">
        Il logo ISI tipicamente consiste di:
      </p>

      <PointsListWithoutHeading
        points={[
          'Le lettere stilizzate "ISI" all\'interno di un rettangolo con angoli arrotondati',
          "Il numero CM/L mostrato sotto o accanto al marchio",
          "Il numero di codice dello standard indiano di riferimento (es., IS 302 per elettrodomestici)",
        ]}
      />

      <p className="service-left-content-heading-three">
        Il posizionamento deve essere:
      </p>

      <PointsListWithoutHeading
        points={[
          "Permanente e chiaramente visibile sul prodotto",
          "Sulla confezione se non possibile sul prodotto",
          "Sui manuali utente in alcune categorie di prodotti",
        ]}
      />

      <h2 className="service-left-content-heading-three">
        Categorie di Prodotti che Richiedono il Certificato BIS
      </h2>

      <p className="service-left-content-paragraph">
        Più di 600 prodotti richiedono il marchio ISI secondo lo schema di
        registrazione obbligatorio in India. Esempi includono:
      </p>

      {/* Table for Product Categories Requiring BIS Certificate */}
      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                CATEGORIA PRODOTTO
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                CODICE IS
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                STATO
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Elettrodomestici
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 302
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Obbligatorio
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Acciaio e Ferro
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 2062
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Obbligatorio
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Contenitori per Alimenti
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 10146
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Obbligatorio
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Caschi
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 4151
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Obbligatorio
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Cemento
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                IS 1489
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Obbligatorio
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <p className="service-left-content-paragraph">
        Ogni categoria richiede l'adesione al corrispondente standard indiano,
        che viene testato durante il processo di certificazione BIS, l'elenco
        completo dei prodotti può essere raggiunto{" "}
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
          Cliccando Qui
        </span>
      </p>

      <h2 className="service-left-content-heading-three">
        BIS Indiano vs. Altre Certificazioni Globali
      </h2>

      <p className="service-left-content-paragraph">
        Confrontiamo il marchio ISI con altri simboli internazionali:
      </p>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                MARCHIO
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                PAESE
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                OBBLIGATORIO?
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
                India
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Sì
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Sicurezza e qualità del prodotto
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
                Sì (per categorie specifiche)
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Salute, sicurezza, ambiente
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                UL
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                USA
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                No
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Standard di sicurezza (volontario)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                CCC
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Cina
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Sì
              </TableCell>
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Sicurezza dei beni elettrici
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <p className="service-left-content-paragraph">
        A differenza di UL (volontario) o CE (specifico per regione), il marchio
        ISI secondo lo schema di registrazione BIS è sia obbligatorio che
        applicato localmente.
      </p>

      <h2 className="service-left-content-heading-three">
        La Certificazione BIS o la Licenza BIS è Obbligatoria per l'Importazione
        in India?
      </h2>

      <p className="service-left-content-paragraph">
        Natura Obbligatoria del Certificato BIS
      </p>

      <p className="service-left-content-paragraph">
        Il Governo dell'India ha reso obbligatoria la certificazione di
        determinati prodotti da parte del Bureau of Indian Standards (BIS) prima
        che possano essere importati, venduti o distribuiti nel mercato indiano.
        Questo obbligo deriva da:
      </p>

      <PointsListWithoutHeading
        points={[
          "Obiettivi di protezione dei consumatori",
          "Armonizzazione con gli standard indiani",
          "Regolamenti nazionali di sicurezza",
        ]}
      />

      <p className="service-left-content-paragraph">
        Se un prodotto rientra nel requisito obbligatorio del BIS indiano, deve
        avere un certificato BIS e portare il marchio ISI prima di poter
        superare la dogana indiana.
      </p>

      <h2 className="service-left-content-heading-three">
        La Certificazione BIS è Richiesta Solo per le Importazioni?
      </h2>

      <p className="service-left-content-paragraph">
        No. La certificazione BIS è obbligatoria per:
      </p>

      <PointsListWithoutHeading
        points={[
          "Produttori nazionali che producono prodotti regolamentati",
          "Produttori stranieri che esportano prodotti regolamentati in India",
        ]}
      />

      <p className="service-left-content-paragraph">
        Che tu sia situato in India o all'estero, se il tuo prodotto è
        nell'elenco obbligatorio, deve avere una licenza BIS e presentare il
        marchio ISI.
      </p>

      <p className="service-left-content-paragraph">
        La dogana indiana ora utilizza sistemi di dati avanzati per segnalare
        automaticamente le spedizioni non conformi. Tutte le merci nelle
        categorie regolamentate vengono scansionate per la presenza di un
        certificato BIS valido.
      </p>

      <p className="service-left-content-paragraph">
        Esenzioni dalla Certificazione BIS
      </p>

      <p className="service-left-content-paragraph">
        La certificazione BIS è obbligatoria nella maggior parte dei casi, ma
        possono essere concesse esenzioni in scenari specifici:
      </p>

      <PointsListWithoutHeading
        points={[
          "Per prototipi R&S o test di campioni",
          "Per importazioni personali di quantità limitata",
        ]}
      />

      <p className="service-left-content-paragraph">
        Tuttavia, queste sono rare e richiedono lettere di esenzione formali dal
        BIS o ministeri correlati.
      </p>

      <h2 className="service-left-content-heading-three">
        Come Sapere Se il Tuo Prodotto Necessita di Certificato BIS o Licenza
        BIS?
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
          Cliccando Qui
        </span>
        Clicca qui per verificare se il tuo prodotto è coperto dallo schema di
        certificazione BIS indiano obbligatorio.
      </p>
    </div>
  );
};

const RepresentationSection = () => {
  return (
    <div id="representation" className="flex flex-col scroll-mt-20">
      {/* Representation */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">
          Rappresentanza
        </span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        Ruolo del Rappresentante Indiano Autorizzato (AIR) nella Certificazione
        BIS
      </h2>

      <h3 className="service-left-content-heading-three">
        Cos'è un Rappresentante Indiano Autorizzato (AIR)?
      </h3>

      <p className="service-left-content-paragraph">
        Un Rappresentante Indiano Autorizzato (AIR) è un intermediario cruciale
        nominato da un produttore straniero che cerca la certificazione BIS
        secondo lo schema di registrazione FMCS. L'AIR funge da collegamento
        ufficiale tra il Bureau of Indian Standards (BIS) e il produttore,
        garantendo comunicazione fluida, gestione della documentazione e
        coordinamento del processo di certificazione.
      </p>

      <h3 className="service-left-content-heading-three">
        Requisito Legale per la Nomina dell'AIR
      </h3>

      <p className="service-left-content-paragraph">
        Secondo le linee guida BIS, qualsiasi produttore straniero che non ha un
        ufficio registrato in India deve nominare un AIR. Questo requisito
        garantisce che il BIS abbia un punto di contatto affidabile e
        accessibile all'interno della giurisdizione indiana.
      </p>

      <h3 className="service-left-content-heading-three">
        Responsabilità Chiave dell'AIR
      </h3>

      <p className="service-left-content-paragraph">
        Il ruolo dell'AIR si estende all'intero processo di certificazione BIS,
        dalla documentazione e presentazione della domanda al coordinamento
        degli audit e conformità post-certificazione:
      </p>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Responsabilità
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                Descrizione
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Comunicazione
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Funge da punto di contatto con funzionari e dipartimenti BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Supporto all'Applicazione
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Assiste nella compilazione dei moduli, raccolta dei documenti e
                presentazione della domanda
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Coordinamento Audit
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Coordina i programmi di ispezione dello stabilimento e risponde
                alle domande dell'auditor
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Monitoraggio Conformità
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Garantisce che tutte le attività di test e certificazione
                rispettino le norme BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Gestione Rinnovo
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Supervisiona il rinnovo della licenza BIS, gli aggiornamenti
                della documentazione e i pagamenti delle tasse
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 className="service-left-content-heading-three">
        Criteri di Idoneità per Diventare un AIR
      </h3>

      <p className="service-left-content-paragraph">
        Per servire come AIR, un individuo o un'organizzazione deve:
      </p>

      <PointsListWithoutHeading
        points={[
          "Essere un cittadino indiano o un'entità commerciale legalmente registrata in India",
          "Avere un indirizzo fisico in India con un codice postale valido",
          "Essere in grado di comunicare fluentemente in inglese e lingue locali",
          "Comprendere lo schema di certificazione, i protocolli di documentazione BIS e le aspettative normative",
          "Essere in grado di rispondere prontamente ad audit e corrispondenza per conto del produttore straniero",
        ]}
      />

      <h3 className="service-left-content-heading-three">
        Perché il Ruolo AIR è Vitale
      </h3>

      <p className="service-left-content-paragraph">
        L'AIR garantisce continuità e responsabilità durante l'intero processo
        di certificazione BIS. Senza un AIR:
      </p>

      <PointsListWithoutHeading
        points={[
          "Il BIS non ha giurisdizione per agire contro un produttore straniero non conforme",
          "Le richieste urgenti e i programmi di audit possono essere ritardati",
          "Il processo di certificazione può bloccarsi, essere revocato o respinto",
        ]}
      />

      <p className="service-left-content-paragraph">
        Un AIR proattivo ed esperto aumenta significativamente le possibilità di
        certificazione BIS di successo.
      </p>
    </div>
  );
};

const DocumentSection = () => {
  return (
    <div id="document" className="flex flex-col scroll-mt-20">
      {/* Document */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Documento</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        Documentazione Richiesta per la Certificazione BIS secondo FMCS
      </h2>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Tipo di Documento
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                Scopo
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Modulo di Domanda FMCS
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Richiesta ufficiale di certificazione
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Elenco Attrezzature di Produzione
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Mostra le capacità di produzione
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Elenco Materie Prime
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Garantisce la qualità del materiale in ingresso
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Elenco Attrezzature di Test
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Valuta la prontezza per test e conformità
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Certificati di Calibrazione
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Dimostra l'accuratezza delle attrezzature di test
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Layout dello Stabilimento e Flusso del Processo
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Aiuta gli auditor a comprendere le fasi di produzione
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Certificati di Test
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Dimostra la qualità delle materie prime e del prodotto finale
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Profilo Controllo Qualità
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Verifica le qualifiche del personale e le SOP
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Prova di Pagamento
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Valida la presentazione delle tasse al BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Garanzia Bancaria di Prestazione
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Funge da garanzia finanziaria per il BIS
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h3 className="service-left-content-heading-three">
        Dettaglio Completo di Ogni Documento Richiesto per la Certificazione BIS
        Indiana
      </h3>

      <div className="service-left-content-heading-three">
        1. Modulo di Domanda FMCS
      </div>

      <p className="service-left-content-paragraph">
        Questo documento fornisce dettagli generali sul produttore straniero,
        inclusi:
      </p>

      <PointsListWithoutHeading
        points={[
          "Dettagli del prodotto (tipo, categoria, modello)",
          "Standard Indiano Previsto",
          "Dettagli di contatto dello stabilimento e AIR",
          "Capacità di produzione e ambito di test",
        ]}
      />

      <div className="service-left-content-heading-three">
        2. Elenco Attrezzature di Produzione
      </div>

      <PointsListWithoutHeading
        points={[
          "Nome e marca della macchina",
          "Capacità di produzione",
          "Dettagli di contatto dello stabilimento e AIR",
          "Registri di manutenzione (se applicabile)",
        ]}
      />

      <div className="service-left-content-heading-three">
        3. Elenco Materie Prime
      </div>

      <PointsListWithoutHeading
        points={[
          "Fonte di approvvigionamento",
          "Gradi e specifiche",
          "Protocollo di test (se presente)",
        ]}
      />

      <div className="service-left-content-heading-three">
        4. Elenco Attrezzature di Test
      </div>

      <PointsListWithoutHeading
        points={[
          "Nome dell'attrezzatura e produttore",
          "Conformità con i parametri di test nello Standard Indiano",
          "Posizione all'interno dello stabilimento",
        ]}
      />

      <div className="service-left-content-heading-three">
        5. Certificati di Calibrazione
      </div>

      <PointsListWithoutHeading
        points={[
          "Data dell'ultima calibrazione",
          "Periodo di validità",
          "Numero del certificato",
        ]}
      />

      <div className="service-left-content-heading-three">
        6. Layout dello Stabilimento e Diagramma del Flusso del Processo
      </div>

      <PointsListWithoutHeading
        points={[
          "Punti di ingresso e uscita",
          "Aree del laboratorio di test",
          "Punti di controllo QC",
          "Sezioni di stoccaggio e imballaggio",
        ]}
      />

      <div className="service-left-content-heading-three">
        7. Garanzia Bancaria di Prestazione
      </div>

      <p className="service-left-content-paragraph">
        Emessa da una banca indiana approvata dalla RBI, la Garanzia Bancaria di
        Prestazione (PBG) copre la responsabilità in caso di non conformità.
        Questo documento deve:
      </p>

      <PointsListWithoutHeading
        points={[
          "Essere su carta intestata ufficiale della banca",
          "Indicare il periodo di garanzia e l'importo",
          "Essere firmato e sigillato",
        ]}
      />

      <div className="service-left-content-heading-three">
        Errori Comuni di Documentazione da Evitare durante la Domanda per il
        Certificato BIS o BIS Indiano.
      </div>

      <PointsListWithoutHeading
        points={[
          "Disallineamento tra i dati del modulo e la realtà dello stabilimento",
          "Presentazione di rapporti di calibrazione scaduti",
          "Mancanza di prova del pagamento delle tasse BIS",
          "Flussi di processo incompleti o vaghi",
          "Inconsistenze di denominazione tra i documenti",
        ]}
      />
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

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        Processo di Certificazione BIS Passo-Passo secondo FMCS
      </h2>

      <h3 className="service-left-content-heading-three">
        Panoramica del Percorso di Certificazione BIS
      </h3>

      <p className="service-left-content-paragraph">
        Il processo di certificazione BIS secondo lo Schema di Certificazione
        per Produttori Stranieri (FMCS) è metodico, strutturato e multi-fase.
        Garantisce che i prodotti siano conformi agli standard indiani
        applicabili, i processi di produzione siano robusti e i test siano
        accurati.
      </p>

      <h3 className="service-left-content-heading-three">
        Tabella Riepilogativa del Processo di Licenza BIS Passo-Passo
      </h3>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Passo
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                Descrizione
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                1
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Presentazione della Domanda al BIS FMCD
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                2
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Esame della Documentazione e Revisione Iniziale
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                3
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Risoluzione delle Domande e Presentazione delle Chiarimenti
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                4
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Nomina dell'Auditor Tecnico BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                5
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Programmazione e Coordinamento dell'Audit dello Stabilimento
                tramite AIR
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                6
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Ispezione dello Stabilimento e Sigillatura dei Campioni da parte
                dell'Auditor BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                7
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Test del Prodotto Interno (se applicabile)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                8
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Test dei Campioni Sigillati nei Laboratori Approvati BIS in
                India
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                9
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Revisione dei Rapporti di Test e Risultati dell'Audit
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                10
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Emissione della Licenza BIS e Uso del Marchio ISI
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <img
        src={BISCertificateImage}
        alt="Esempio di Certificato BIS per FMCS"
        title="Esempio di Certificato BIS per FMCS"
        className="w-full h-auto rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 my-8 mx-auto"
      />

      <h3 className="service-left-content-heading-three">
        Tempi per Ottenere il Certificato BIS
      </h3>

      <p className="service-left-content-heading-three">
        Durata Tipica dalla Domanda al Certificato
      </p>

      <p className="service-left-content-paragraph">
        Il processo di certificazione BIS secondo FMCS generalmente richiede
        circa 120 giorni lavorativi (circa 3–4 mesi) dalla data di presentazione
        corretta della domanda. I ritardi si verificano spesso quando i
        documenti non sono chiari o se lo stabilimento non è pronto per l'audit.
      </p>
    </div>
  );
};

const CostingSection = () => {
  return (
    <div id="costing" className="flex flex-col scroll-mt-20">
      {/* Costing */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Costi</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        Struttura dei Costi della Certificazione BIS Spiegata
      </h2>

      <h3 className="service-left-content-heading-three">
        Panoramica dei Costi della Certificazione BIS
      </h3>

      <p className="service-left-content-paragraph">
        Ottenere un certificato BIS secondo lo Schema di Certificazione per
        Produttori Stranieri (FMCS) comporta diversi tipi di costi. Questi
        coprono tutto, dalla presentazione della domanda e gli audit ai test del
        prodotto e l'uso del marchio.
      </p>

      <p className="service-left-content-paragraph">
        I produttori stranieri devono budgetare adeguatamente per garantire
        pagamenti tempestivi, poiché il mancato pagamento può portare al rifiuto
        della certificazione BIS a metà percorso.
      </p>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Categoria di Costo
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                Descrizione
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Tassa di Domanda (INR 1000)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Pagata durante la presentazione del modulo di domanda FMCS per
                ottenere il BIS indiano
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Spese di Audit (INR 7000)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Copre viaggi dell'auditor BIS, tariffe giornaliere e spese
                correlate
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Tasse per Test del Prodotto (Secondo il prodotto)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Per testare campioni sigillati presso laboratori riconosciuti
                BIS in India
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Tassa di Licenza (INR 1000)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Tassa una tantum pagata al momento del rilascio del certificato
                BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Tassa di Marcatura (Secondo il prodotto)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Tassa annuale per l'uso del marchio ISI su prodotti certificati
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Garanzia Bancaria di Prestazione (USD 10.000)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Garanzia finanziaria depositata tramite banca indiana per
                garantire la conformità
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
        <span className="service-left-content-index-heading">Sorveglianza</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        Sorveglianza Post Certificazione BIS e Requisiti di Conformità
      </h2>

      <p className="service-left-content-paragraph">
        Una volta concesso un certificato BIS, la responsabilità non finisce lì.
        La certificazione BIS include un sistema continuo di sorveglianza e
        conformità per garantire l'adesione continua agli standard indiani.
        Questa fase post-certificazione è cruciale per mantenere la tua licenza
        BIS, conservare il diritto di utilizzare il marchio ISI ed evitare
        sanzioni legali o sospensioni.
      </p>

      <p className="service-left-content-paragraph">
        Componenti Chiave della Sorveglianza dopo aver ottenuto il Certificato
        BIS Sorveglianza del Mercato: Campionamento casuale di prodotti dal
        mercato indiano per test di laboratorio indipendenti, se il campione
        fallisce il certificato BIS viene sospeso. Viene fatto due volte
        all'anno.
      </p>
    </div>
  );
};

const FacilitatorSection = () => {
  return (
    <div id="facilitator" className="flex flex-col scroll-mt-20">
      {/* Facilitator */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Facilitatore</span>
        <Separator className="service-left-content-separator" />
      </div>

      {/* Title */}
      <h2 className="service-left-content-heading-two">
        Perché Scegliere un Consulente per la Certificazione BIS?
      </h2>

      <p className="service-left-content-paragraph">
        La certificazione BIS secondo lo schema di registrazione FMCS è
        complessa, altamente tecnica e sensibile al tempo. Sebbene sia possibile
        perseguire la certificazione in modo indipendente, la maggior parte dei
        produttori stranieri di successo si affida ai consulenti BIS per
        semplificare il percorso e minimizzare i rischi.
      </p>

      <h3 className="service-left-content-heading-three">
        Cosa Fa un Consulente BIS?
      </h3>

      <p className="service-left-content-paragraph">
        Un consulente per la certificazione BIS fornisce una guida end-to-end in
        ogni fase del processo. Le loro responsabilità principali includono:
      </p>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Compito
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                Descrizione
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Documentazione
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Prepara, rivede e formatta tutti i documenti richiesti
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Supporto all'Applicazione
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Presenta e monitora la tua domanda BIS
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Preparazione Audit
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Guida i team dello stabilimento per garantire la prontezza per
                l'audit
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Coordinamento Campioni
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Gestisce la sigillatura e la spedizione dei campioni in India
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Assistenza Test
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Si interfaccia con i laboratori e aiuta a interpretare i
                risultati
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Rinnovo e Sorveglianza
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Supervisiona le estensioni della licenza e i controlli di
                conformità
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <p className="service-left-content-paragraph">
        Agiscono come tuo partner strategico, spesso fungendo anche da
        Rappresentante Indiano Autorizzato (AIR).
      </p>
    </div>
  );
};

export const ServiceFaq = () => {
  const faqs = [
    {
      question:
        "Cos'è la certificazione BIS e perché è importante per i produttori stranieri ottenere il BIS indiano?",
      answer:
        "La certificazione BIS è un processo normativo condotto dal Bureau of Indian Standards per garantire che i prodotti soddisfino gli standard indiani. È essenziale per i produttori stranieri ottenere l'accesso al mercato, lo sdoganamento e la fiducia dei consumatori in India.",
    },
    {
      question: "Cosa rappresenta il marchio ISI?",
      answer:
        "Il marchio ISI indica la conformità a uno specifico Standard Indiano. È obbligatorio per i prodotti sotto certificazione BIS e deve essere stampato su confezioni e prodotti.",
    },
    {
      question:
        "La certificazione BIS è obbligatoria per tutte le importazioni in India?",
      answer:
        "No. La certificazione BIS è obbligatoria per i prodotti elencati nello schema di certificazione BIS indiano obbligatorio. Tuttavia, la certificazione volontaria è disponibile per altri prodotti.",
    },
    {
      question: "Chi può richiedere la certificazione BIS secondo FMCS?",
      answer:
        "Solo i produttori stranieri effettivi (non importatori o commercianti) possono richiederla. Un Rappresentante Indiano Autorizzato (AIR) è obbligatorio per rappresentarli in India.",
    },
    {
      question: "Quanto tempo ci vuole per ottenere un certificato BIS?",
      answer:
        "Il processo medio di certificazione BIS secondo FMCS richiede 120 giorni, a seconda della prontezza dei documenti, della programmazione degli audit e dei tempi di turnaround dei test.",
    },
    {
      question:
        "Quali sono i costi principali coinvolti nella certificazione BIS?",
      answer:
        "I costi includono tasse di domanda, spese di audit, tasse per test di laboratorio, tasse di licenza e marcatura, e una Garanzia Bancaria di Prestazione (PBG) da una banca indiana approvata dalla RBI.",
    },
    {
      question: "La licenza BIS può essere rinnovata?",
      answer:
        "Sì. La licenza BIS è generalmente valida per 1-2 anni e può essere rinnovata al soddisfacimento dei requisiti di conformità e aggiornamento documentale.",
    },
    {
      question:
        "Cosa succede se il prodotto fallisce durante i test di laboratorio BIS?",
      answer:
        "Se un prodotto fallisce, il BIS può consentire azioni correttive e nuovi test. Fallimenti persistenti possono comportare il rifiuto della domanda.",
    },
    {
      question:
        "È necessario assumere un consulente per la certificazione BIS?",
      answer:
        "Non è obbligatorio ma altamente raccomandato. Un consulente aiuta a ridurre i ritardi, gestire la conformità e migliorare le possibilità di approvazione garantendo il pieno allineamento con i protocolli BIS.",
    },
    {
      question: "Una licenza BIS può essere sospesa o cancellata?",
      answer:
        "Sì. Il BIS può sospendere o cancellare una licenza per non conformità, fallimento del prodotto, uso improprio del logo ISI o discrepanze negli audit.",
    },
    {
      question:
        "Quali documenti sono necessari per il processo di certificazione BIS?",
      answer:
        "I documenti includono il modulo di domanda FMCS, rapporti di test, elenchi di attrezzature, certificati di calibrazione, layout dello stabilimento, lettera di nomina AIR e prova del pagamento delle tasse.",
    },
    {
      question: "Un AIR può rappresentare più domande BIS?",
      answer:
        "Sì, a condizione che siano autorizzati per ogni progetto e abbiano la capacità di gestire documentazione, audit e comunicazione per ogni certificazione.",
    },
    {
      question: "Qual è il ruolo di una Garanzia Bancaria di Prestazione?",
      answer:
        "Una PBG assicura al BIS che il produttore rispetterà gli standard indiani. È rimborsabile alla cancellazione della licenza ed è obbligatoria per tutte le domande FMCS che ottengono il BIS indiano.",
    },
    {
      question: "La certificazione BIS è riconosciuta fuori dall'India?",
      answer:
        "Sebbene il certificato BIS sia uno standard indiano, è rispettato in contesti commerciali in molte regioni che accettano la conformità indiana, specialmente in Asia e Africa.",
    },
    {
      question:
        "Come faccio a sapere se il mio prodotto richiede la certificazione BIS?",
      answer:
        "Controlla l'elenco aggiornato sul sito web ufficiale del BIS o consulta un consulente BIS per verificare se il tuo prodotto rientra nella certificazione obbligatoria.",
    },
  ];

  return (
    <section
      id="faqs"
      className="my-2  scroll-mt-20"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          Domande Frequenti
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
    {
      code: "fr",
      name: "French",
      flag: "https://flagcdn.com/w320/fr.png",
      path: "/fr/guide-certification-bis-pour-fabricants-etrangers-bis-inde",
    },
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
    // {
    //   code: "it",
    //   name: "Italian",
    //   flag: "https://flagcdn.com/w320/it.png",
    //   path: "/it/guida-alla-certificazione-bis-per-produttori-stranieri-bis-indiano",
    // },
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
              I Nostri Servizi
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                Miglior Consulente per Certificati dell'India
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
              BIS Mark (ISI License) for Foreign Manufacture
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
              CDSCO Registration Certification
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
              BIS (CRS) Registration
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
              Plastic Waste Management
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
              EPR Certificate certifications
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
              LMPC Certificate certifications
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
              BIS Registration Certificate
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
              ISI MARK (BIS) for Indian Manufactures
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
