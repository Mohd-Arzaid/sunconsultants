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
import { Link } from "react-router-dom";
import { useState, useRef, useEffect, useMemo } from "react";
import { Separator } from "@/components/ui/separator";
import ScrollToTopButton from "@/components/common/ScrollToTop";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { ClockLoader } from "react-spinners";
import axios from "axios";
import { BoxReveal } from "@/components/magicui/box-reveal";
import FooterEng from "@/components/manual/Footer/FooterEng";
import ServiceAuthorEng from "@/components/manual/ServiceAuthor/ServiceAuthorEng";
import ServicesRightSideContentEng from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentEng";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
const CANONICAL_URL =
  "https://bis-certifications.com/authorized-indian-representative";
const PAGE_IMAGE =
  "https://bis-certifications.com/blogImages/AuthorizedIndianRepresentative.webp";
const PAGE_TITLE =
  "Authorized Indian Representative (AIR) for BIS Certification | Sun Certifications India";
const PAGE_DESCRIPTION =
  "Appoint Sun Certifications India as your Authorized Indian Representative (AIR) for BIS certification. Legally structured, corporately accountable AIR service for foreign manufacturers — no subcontracting, dedicated compliance officers.";

const AuthorizedIndianRepresentativeAIR = () => {
  return (
    <div className="relative">
      <MetaTags />
      <FAQSchemaInjector />
      <AIRRatingSchema />
      <BreadcrumbContent />
      <HeroSection />
      <IndexSection />
      <MainContent />
      <ServiceFaq />
      <div id="services">
        <Services />
      </div>
      <FooterEng />
      <ScrollToTopButton />
    </div>
  );
};

export default AuthorizedIndianRepresentativeAIR;

const MetaTags = () => {
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
        name: "Authorized Indian Representative (AIR) for BIS Certification",
        item: CANONICAL_URL,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": CANONICAL_URL,
    },
    headline: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    image: PAGE_IMAGE,
    author: {
      "@type": "Person",
      name: "Dhruv Aggarwal",
      url: "https://www.linkedin.com/in/dhruv-aggarwal-44b116155",
    },
    publisher: {
      "@type": "Organization",
      name: "Sun Certifications India",
      logo: {
        "@type": "ImageObject",
        url: "https://bis-certifications.com/company-logo/company-logo.webp",
      },
    },
    datePublished: "2026-06-09",
    dateModified: "2026-06-09",
  };

  return (
    <Helmet>
      <title>{PAGE_TITLE}</title>
      <meta name="description" content={PAGE_DESCRIPTION} />
      <meta
        name="keywords"
        content="Authorized Indian Representative, AIR for BIS Certification, BIS AIR Service, Foreign Manufacturer AIR India, BIS FMCS AIR, Sun Certifications India AIR"
      />
      <meta name="author" content="Dhruv Aggarwal" />
      <meta name="publisher" content="Sun Certifications India" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={PAGE_TITLE} />
      <meta property="og:description" content={PAGE_DESCRIPTION} />
      <meta property="og:url" content={CANONICAL_URL} />
      <meta property="og:site_name" content="Sun Certifications India" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={PAGE_IMAGE} />
      <meta name="twitter:title" content={PAGE_TITLE} />
      <meta name="twitter:description" content={PAGE_DESCRIPTION} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={PAGE_IMAGE} />
      <link rel="canonical" href={CANONICAL_URL} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
    </Helmet>
  );
};

const FAQSchemaInjector = () => {
  const faqSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can a foreign manufacturer act as their own AIR?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The AIR must be a legal entity registered and based in India. A foreign company cannot appoint itself or one of its overseas offices as the AIR. The representative must be an Indian company or individual with a valid Indian address and PAN.",
          },
        },
        {
          "@type": "Question",
          name: "What happens if the AIR is non-compliant or unresponsive after certification?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BIS can cancel or suspend the licence if the AIR fails to respond to compliance notices, market surveillance actions, or renewal requirements. This is why the quality and reliability of your AIR directly affects the long-term validity of your BIS certificate in India.",
          },
        },
        {
          "@type": "Question",
          name: "Can we change our AIR after the BIS licence has already been issued?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, it is possible to change the AIR on an existing BIS licence, but it involves a formal amendment process with BIS. Sun Certifications India handles AIR transfer engagements for foreign manufacturers who are switching from a previous representative.",
          },
        },
        {
          "@type": "Question",
          name: "Does the AIR need to be physically present during the factory audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The AIR is responsible for coordinating the factory audit and facilitating communication between BIS and the foreign manufacturer. In practice, having your AIR's technical representative present during the overseas factory inspection significantly improves the audit outcome — which is precisely why we deploy our own team to the factory before and during the audit.",
          },
        },
        {
          "@type": "Question",
          name: "Is one AIR sufficient if we have multiple products under BIS certification?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A single AIR can manage multiple BIS licences for the same foreign manufacturer, across different product categories and BIS schemes. Sun Certifications India manages multi-product portfolios for several international clients under a unified AIR engagement.",
          },
        },
      ],
    }),
    []
  );

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "air-faq-schema";
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById("air-faq-schema");
      if (el) el.remove();
    };
  }, [faqSchema]);

  return null;
};

const AIRRatingSchema = () => {
  const ratingSchema = useMemo(
    () => ({
      "@context": "https://schema.org/",
      "@type": "Product",
      name: PAGE_TITLE,
      image: PAGE_IMAGE,
      description: PAGE_DESCRIPTION,
      brand: {
        "@type": "Brand",
        name: "Sun Certifications India",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "58042",
      },
    }),
    []
  );

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "air-rating-schema";
    script.textContent = JSON.stringify(ratingSchema);
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById("air-rating-schema");
      if (el) el.remove();
    };
  }, [ratingSchema]);

  return null;
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
                    Authorized Indian Representative (AIR) for BIS Certification
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
      <div className="hidden md:block absolute inset-0 rounded-bl-full z-10 transform translate-x-1/2 custom-radial-gradient-cdsco"></div>

      <div
        className="absolute top-[20%] z-[10] right-[15%] w-[20px] h-[20px] rounded-full bg-[#1A8781]/30 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-[84rem] gap-[40px] md:gap-[90px] flex flex-col md:flex-row items-center justify-center h-full w-full mx-auto px-4 md:px-0">
        <div className="relative flex flex-col gap-6 md:gap-8 w-full md:w-[533px] items-start">
          <div className="inline-flex items-center">
            <div className="h-[3px] w-[40px] bg-[#1A8781] mr-4"></div>
            <span className="text-[#1A8781] font-poppins text-sm font-medium tracking-wider uppercase">
              Certified Expertise
            </span>
          </div>

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              Authorized Indian Representative
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            (AIR) for BIS Certification
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            Every foreign manufacturer seeking BIS certification in India must
            appoint an AIR. Sun Certifications India offers a structured,
            legally accountable AIR service — not a casual third-party
            arrangement, but an institutional commitment backed by dedicated
            compliance officers and clear legal frameworks.
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
                View Services
              </span>
            </div>
          </div>
        </div>

        <ContactUsForm />
      </div>
    </div>
  );
};

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);

  const getPageName = () => {
    const path = window.location.pathname;
    if (path.includes("/authorized-indian-representative")) {
      return "Authorized Indian Representative (AIR) for BIS Certification - English Page";
    }
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
        title: "Please enter a valid full name.",
        description: "Name should only contain letters and spaces.",
      });
      setLoading(false);
      return;
    }

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
        Book an Appointment
      </div>

      <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
        Want to contact our team and schedule a call?
        <span className="text-black"> Try Now</span>
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
              <span>Book Appointment</span>
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
      "risks",
      "requirements",
      "service",
      "process",
      "eligibility",
      "final-thoughts",
    ],
    []
  );

  const MENU_ITEMS = {
    overview: "Overview",
    risks: "Risks",
    requirements: "Requirements",
    service: "Our Service",
    process: "Process",
    eligibility: "Eligibility",
    "final-thoughts": "Final Thoughts",
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

const MainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        <MainContentLeft />
        <ServicesRightSideContentEng />
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
            Authorized Indian Representative (AIR) for BIS Certification
          </h1>

          {/* <div className="flex justify-center mt-[20px] md:mt-[26px]">
            <img
              src="/blogImages/AuthorizedIndianRepresentative.webp"
              alt="Authorized Indian Representative (AIR) for BIS Certification"
              title="Authorized Indian Representative (AIR) for BIS Certification"
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div> */}

          <p className="service-left-content-paragraph">
            Every foreign manufacturer seeking BIS certification in India must
            appoint an AIR. Sun Certifications India offers a structured,
            legally accountable AIR service — not a casual third-party
            arrangement, but an institutional commitment backed by dedicated
            compliance officers and clear legal frameworks.
          </p>
        </div>

        <WhatIsAIRSection />
        <div className="service-left-content-divider" />
        <RisksSection />
        <div className="service-left-content-divider" />
        <RequirementsSection />
        <div className="service-left-content-divider" />
        <ServiceSection />
        <div className="service-left-content-divider" />
        <ProcessSection />
        <div className="service-left-content-divider" />
        <WhoNeedsSection />
        <div className="service-left-content-divider" />
        <ConclusionSection />
        <ServiceAuthorEng />
      </div>
    </div>
  );
};

const WhatIsAIRSection = () => {
  return (
    <div id="overview" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Overview</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        What is an Authorized Indian Representative — and Why It Matters
      </h2>

      <p className="service-left-content-paragraph">
        Under the Bureau of Indian Standards Act and the Foreign Manufacturers
        Certification Scheme (FMCS), every overseas manufacturer who wishes to
        obtain BIS certification for products sold in India must designate a
        legal entity based in India as their Authorized Indian Representative.
        This entity — commonly referred to as the AIR — acts as the official
        point of contact between the foreign manufacturer and BIS throughout the
        certification process and beyond.
      </p>

      <p className="service-left-content-paragraph">
        The AIR is responsible for submitting and managing the BIS application,
        coordinating factory audits, liaising with BIS officials, ensuring
        ongoing compliance after certification is granted, and responding to any
        regulatory actions — including market surveillance, product complaints,
        or enforcement inquiries — on behalf of the foreign manufacturer.
      </p>
    </div>
  );
};

const RisksSection = () => {
  return (
    <div id="risks" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Risks</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Why Most AIR Appointments Are Riskier Than They Appear
      </h2>

      <p className="service-left-content-paragraph">
        When foreign companies first begin the BIS certification process, they
        are often advised to simply &quot;find someone in India&quot; to act as
        their AIR — a local contact, a freight forwarder, a trading partner,
        or an individual consultant willing to sign the forms. On the surface,
        this seems straightforward. In practice, it creates a fragile foundation
        for everything that follows.
      </p>

      <p className="service-left-content-paragraph">
        Informal AIR arrangements typically have no structured compliance
        oversight after the certificate is issued. There is no dedicated
        officer monitoring product standards, tracking BIS circulars for
        regulatory updates, or managing responses to BIS surveillance notices.
        When a product complaint arises or BIS initiates a market check, the
        foreign manufacturer discovers that their Indian representative has
        neither the legal infrastructure nor the operational capacity to handle
        it properly.
      </p>

      <p className="service-left-content-paragraph">
        Beyond ongoing compliance, informal AIR setups also struggle during the
        certification process itself — with inconsistent communication to BIS,
        mismanaged document submissions, and audit coordination gaps that delay
        or derail the entire application.
      </p>
    </div>
  );
};

const RequirementsSection = () => {
  return (
    <div id="requirements" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Requirements</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Requirements of Authorized Indian Representative
      </h2>

      <PointsListWithoutHeading
        points={[
          "Must be atleast graduate by qualification.",
          "Must have knowledge about the product and process of BIS Certification",
          "Should be resident of India.",
          "Must have all the statutory documents.",
          "AIR shall ensure compliance of terms and conditions of the agreement signed by them, provisions of the Bureau of Indian Standards Act 2016, and rules and regulations framed there under and applicable Indian laws.",
          "The Bureau may ask its authorized representative to appear before it for personal representation as and when required.",
          "He shall not engage in any unethical practices such as communicating with lab with regard to testing of BIS samples (except for deposition of sample and payment of testing charges), tampering of documents, misrepresentation of facts, etc.",
          "He shall maintain the confidentiality of all the information.",
          "He shall facilitate and ensure drawl of Market Sample from the consignments being imported to India bearing standard mark.",
        ]}
      />
    </div>
  );
};

const ServiceSection = () => {
  return (
    <div id="service" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Our Service</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        The Sun Certifications AIR Service — Structured, Accountable,
        End-to-End
      </h2>

      <p className="service-left-content-paragraph">
        Sun Certifications India offers a corporate AIR service designed to meet
        the expectations of international legal and compliance teams — not just
        to satisfy a regulatory checkbox. When we act as your Authorized Indian
        Representative, we take on the role with the institutional seriousness
        it deserves.
      </p>

      <h3 className="service-left-content-heading-three">
        Dedicated Compliance Officer
      </h3>
      <p className="service-left-content-paragraph">
        Each client is assigned a named compliance officer responsible for
        managing all BIS interactions, documentation, and regulatory
        correspondence on their behalf.
      </p>

      <h3 className="service-left-content-heading-three">
        Legally Structured Framework
      </h3>
      <p className="service-left-content-paragraph">
        Our AIR engagements are governed by clear legal agreements that define
        the scope of liability, compliance obligations, and escalation
        procedures — documented and enforceable.
      </p>

      <h3 className="service-left-content-heading-three">
        Post-Certification Monitoring
      </h3>
      <p className="service-left-content-paragraph">
        Our responsibility does not end at certificate issuance. We actively
        monitor BIS updates, manage renewal timelines, and respond to any
        market surveillance actions throughout the certificate&apos;s validity.
      </p>

      <h3 className="service-left-content-heading-three">
        International Communication Standards
      </h3>
      <p className="service-left-content-paragraph">
        All client communication is structured, transparent, and documented. We
        operate across time zones and maintain response standards that match
        international business expectations.
      </p>

      <h3 className="service-left-content-heading-three">No Subcontracting</h3>
      <p className="service-left-content-paragraph">
        We do not delegate the AIR role to third-party individuals or informal
        networks. Every AIR engagement is handled directly by our in-house team.
      </p>

      <h3 className="service-left-content-heading-three">
        Renewal &amp; Amendment Management
      </h3>
      <p className="service-left-content-paragraph">
        We manage BIS licence renewals, product amendments, factory change
        notifications, and any modifications to your certification — proactively,
        without waiting for the client to prompt us.
      </p>
    </div>
  );
};

const ProcessSection = () => {
  return (
    <div id="process" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Process</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        How Our AIR Appointment Process Works
      </h2>

      <p className="service-left-content-paragraph">
        From the moment a foreign manufacturer engages Sun Certifications as
        their AIR, the process is structured, transparent, and actively managed.
        Here is how it works from start to finish.
      </p>

      <h3 className="service-left-content-heading-three">
        1 Initial Product &amp; Eligibility Assessment
      </h3>
      <p className="service-left-content-paragraph">
        We review your product category, target BIS scheme (FMCS, CRS, or ISI),
        and existing documentation to confirm eligibility and map the exact
        certification pathway before any formal engagement begins.
      </p>

      <h3 className="service-left-content-heading-three">
        2 AIR Agreement &amp; Legal Documentation
      </h3>
      <p className="service-left-content-paragraph">
        A formal AIR appointment agreement is executed between Sun Certifications
        India and the foreign manufacturer, defining roles, responsibilities,
        liability scope, and compliance obligations. This document is what your
        legal team needs to feel confident about the arrangement.
      </p>

      <h3 className="service-left-content-heading-three">
        3 BIS Application Preparation &amp; Submission
      </h3>
      <p className="service-left-content-paragraph">
        We prepare all BIS application documents — including the AIR
        appointment letter, product technical documentation, factory details,
        and test reports — and submit the application to BIS on your behalf
        through the official portal.
      </p>

      <h3 className="service-left-content-heading-three">
        4 Factory Audit Coordination
      </h3>
      <p className="service-left-content-paragraph">
        For FMCS applications, we coordinate the BIS factory audit — scheduling
        the government inspector&apos;s visit, preparing your factory team, and
        conducting a pre-audit mock inspection at your overseas facility to
        ensure first-attempt success.
      </p>

      <h3 className="service-left-content-heading-three">
        5 Certificate Issuance &amp; Ongoing Compliance
      </h3>
      <p className="service-left-content-paragraph">
        Once BIS issues the licence, we take over ongoing AIR responsibilities
        — monitoring compliance, managing BIS correspondence, handling
        renewals, and responding to any regulatory queries or market
        surveillance actions for the duration of the licence.
      </p>
    </div>
  );
};

const WhoNeedsSection = () => {
  return (
    <div id="eligibility" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">ELIGIBILITY</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">Who Needs an AIR</h2>

      <p className="service-left-content-paragraph">
        Any foreign manufacturer whose product falls under a mandatory BIS
        certification scheme — whether that is the Foreign Manufacturers
        Certification Scheme for industrial and consumer products, the
        Compulsory Registration Scheme for electronics, or any other
        BIS-notified category — is legally required to appoint an AIR before
        their application can be processed.
      </p>

      <p className="service-left-content-paragraph">
        Our AIR service is built specifically for companies that want more than
        a name on a government form. It is designed for international
        manufacturers, procurement heads, and legal teams who need a partner in
        India that operates with the same standard of accountability they expect
        from their own compliance infrastructure.
      </p>
    </div>
  );
};

const ConclusionSection = () => {
  return (
    <div id="final-thoughts" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">FINAL THOUGHTS</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">CONCLUSION</h2>

      <p className="service-left-content-paragraph">
        Obtaining BIS certification is not a one-time transaction. It is the
        beginning of a long-term legal and operational relationship between your
        company and the Indian regulatory system. The product you certify today
        will face renewal requirements, market surveillance inspections, and
        potential amendments as Indian standards evolve. Every one of those
        touch points passes through your Authorized Indian Representative.
      </p>

      <p className="service-left-content-paragraph">
        This is why the AIR appointment — which many foreign manufacturers treat
        as a formality to be resolved quickly and cheaply — is actually the most
        consequential decision in the entire India market entry process. A poorly
        structured AIR arrangement does not just create inconvenience. It creates
        legal exposure, delays your certification, and leaves your product
        vulnerable to compliance lapses that can result in licence suspension or
        market withdrawal.
      </p>

      <p className="service-left-content-paragraph">
        At Sun Certifications India, we have spent nearly a decade working with
        manufacturers and importers who came to us after experiencing exactly
        these problems with previous arrangements. What we hear most often is not
        that their earlier AIR was dishonest — it is that the role was simply
        not taken seriously enough. No dedicated oversight. No proactive
        communication. No one watching what BIS was doing with their licence after
        the certificate was issued.
      </p>

      <p className="service-left-content-paragraph">
        We built our AIR service to be the opposite of that experience. When Sun
        Certifications India acts as your Authorized Indian Representative, you
        are not handing responsibility to a passive intermediary. You are
        engaging a compliance team that actively manages your BIS obligations,
        monitors your certification status, and treats your India market standing
        with the same seriousness you do.
      </p>
    </div>
  );
};

const ServiceFaq = () => {
  const faqs = [
    {
      question: "Can a foreign manufacturer act as their own AIR?",
      answer:
        "No. The AIR must be a legal entity registered and based in India. A foreign company cannot appoint itself or one of its overseas offices as the AIR. The representative must be an Indian company or individual with a valid Indian address and PAN.",
    },
    {
      question:
        "What happens if the AIR is non-compliant or unresponsive after certification?",
      answer:
        "BIS can cancel or suspend the licence if the AIR fails to respond to compliance notices, market surveillance actions, or renewal requirements. This is why the quality and reliability of your AIR directly affects the long-term validity of your BIS certificate in India.",
    },
    {
      question:
        "Can we change our AIR after the BIS licence has already been issued?",
      answer:
        "Yes, it is possible to change the AIR on an existing BIS licence, but it involves a formal amendment process with BIS. Sun Certifications India handles AIR transfer engagements for foreign manufacturers who are switching from a previous representative.",
    },
    {
      question:
        "Does the AIR need to be physically present during the factory audit?",
      answer:
        "The AIR is responsible for coordinating the factory audit and facilitating communication between BIS and the foreign manufacturer. In practice, having your AIR's technical representative present during the overseas factory inspection significantly improves the audit outcome — which is precisely why we deploy our own team to the factory before and during the audit.",
    },
    {
      question:
        "Is one AIR sufficient if we have multiple products under BIS certification?",
      answer:
        "Yes. A single AIR can manage multiple BIS licences for the same foreign manufacturer, across different product categories and BIS schemes. Sun Certifications India manages multi-product portfolios for several international clients under a unified AIR engagement.",
    },
  ];

  return (
    <section
      id="faqs"
      className="my-2 scroll-mt-20"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          Frequently Asked Questions about AIR for BIS Certification
        </h2>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          Can&apos;t find the answer you are looking for?{" "}
          <a
            href="/contact"
            className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4 hover:text-[#1A8781] transition-colors"
          >
            Reach out to us!
          </a>
        </p>

        <div className="w-full max-w-[1104px] mt-[16px] md:mt-[24px] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
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

const Services = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12 md:pb-16 overflow-x-hidden">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist text-center text-[#1E1E1E]">
              Our Services
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                India&apos;s Best Certificate Consultant
              </span>
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
            </div>
          </BoxReveal>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-x-3 md:gap-x-10 px-4 md:px-0 gap-y-12 md:gap-y-24">
          <Link
            to="/authorized-indian-representative"
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
              Authorized Indian Representative (AIR)
            </p>
          </Link>

          <Link
            to="/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
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
