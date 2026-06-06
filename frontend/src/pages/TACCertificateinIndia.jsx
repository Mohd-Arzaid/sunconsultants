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
  "https://bis-certifications.com/tac-certificate-india";
const FAQ_PAGE_URL = `${CANONICAL_URL}#faq`;

const TAC_FAQS = [
  {
    question: "What is TAC Certificate in India?",
    answer:
      "A TAC Certificate is a Type Approval Certificate issued to confirm that an automotive product complies with Indian safety and technical standards. It is mandatory for certain regulated components and ensures the product is safe, reliable, and legally approved for use or sale in India.",
  },
  {
    question: "Is TAC Certification mandatory in India?",
    answer:
      "Yes, TAC Certification is mandatory for specific automotive components and systems that fall under regulatory requirements. Without TAC Approval, such products cannot be legally sold, imported, or used in India, making it essential for compliance and market access.",
  },
  {
    question: "What is the TAC Certification Process?",
    answer:
      "The TAC Certification Process includes application submission, document verification, product testing, and final approval. Authorities evaluate compliance with standards, and once the product passes all checks, a TAC Certificate or TAC License is issued to the applicant.",
  },
  {
    question: "How long does it take to get TAC Certificate?",
    answer:
      "The timeline for obtaining a TAC Certificate usually ranges from 2 to 6 weeks. However, it may vary depending on product complexity, testing requirements, and the completeness of submitted documentation.",
  },
  {
    question: "What is the cost of TAC Certification in India?",
    answer:
      "TAC Certification Cost depends on factors like product type, testing scope, and documentation. Typically, it ranges between ₹25,000 and ₹2,00,000 or more. Engaging TAC Consultants can help manage costs efficiently.",
  },
  {
    question: "Who needs TAC Approval?",
    answer:
      "Manufacturers, importers, and suppliers of automotive components or systems that fall under regulated categories require TAC Approval. It is essential for ensuring compliance with Indian standards before entering the market.",
  },
  {
    question: "Can I apply for TAC Certification without a consultant?",
    answer:
      "Yes, you can apply independently, but the process can be complex. Many businesses prefer TAC Certificate Consultants to ensure accurate documentation, faster approvals, and reduced chances of rejection.",
  },
  {
    question: "What documents are required for TAC Registration?",
    answer:
      "Documents include product specifications, test reports, manufacturer details, quality compliance records, and application forms. Proper documentation is crucial for successful TAC Certification and avoiding delays.",
  },
  {
    question: "What happens if TAC Certification is not obtained?",
    answer:
      "Failure to obtain TAC Certification can lead to product rejection, penalties, legal action, and inability to sell or import products in India. It also damages brand credibility and business operations.",
  },
  {
    question: "How can TAC Consultants help in certification?",
    answer:
      "TAC Consultants provide end-to-end support, including documentation, testing coordination, application filing, and follow-ups. Their expertise ensures faster approvals, compliance accuracy, and reduced risks in the TAC Certification process.",
  },
];

const getTacFaqSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": FAQ_PAGE_URL,
  mainEntity: TAC_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

const TACCertificateinIndia = () => {
  return (
    <div className="relative">
      <MetaTags />
      <FAQSchemaInjector />
      <TACRatingSchema />
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

export default TACCertificateinIndia;

const MetaTags = () => {
  const title =
    "TAC Certificate in India: Process, Cost, Audit & Complete Guide";
  const description =
    "Complete details on TAC Certificate in India including TAC Certification process, cost, audit, requirements, and approval.";
  const keywords =
    "TAC Certificate, TAC Certification, TAC License, TAC Licence, TAC Audit, TAC Certification Cost, TAC Approval, TAC Certification Process, TAC Certification Requirements";
  const author = "Sun Consultants & Engineers";
  const publisher = "Sun Consultants & Engineers";
  const ogTitle =
    "TAC Certificate in India: Process, Cost, Audit & Complete Guide";
  const ogDescription = description;

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
        name: "TAC Certificate in India: Complete Information",
        item: CANONICAL_URL,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": CANONICAL_URL,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": CANONICAL_URL,
    },
    headline: "TAC Certificate in India: Complete Information",
    description: description,
    image:
      "https://bis-certifications.com/services-main-images/CRSRegistration.webp",
    author: {
      "@type": "Organization",
      name: "Sun Consultants & Engineers",
    },
    publisher: {
      "@type": "Organization",
      name: "Sun Consultants & Engineers",
      logo: {
        "@type": "ImageObject",
        url: "https://bis-certifications.com/company-logo/company-logo.webp",
      },
    },
    datePublished: "2026-03-21",
    dateModified: "2026-03-21",
    keywords: [
      "TAC Certificate",
      "TAC Certification",
      "TAC License",
      "TAC Licence",
      "TAC Audit",
      "TAC Certification Cost",
      "TAC Approval",
      "TAC Certification Process",
      "TAC Services",
      "TAC Certification Requirements",
      "TAC Full Form",
      "TAC Guidelines",
      "TAC Consultants",
      "TAC Registration",
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
      <meta property="og:url" content={CANONICAL_URL} />
      <meta property="og:site_name" content="Sun Consultants & Engineers" />
      <meta property="og:type" content="article" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:card" content="summary_large_image" />
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
  const faqSchema = useMemo(() => getTacFaqSchema(), []);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "tac-faq-schema";
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById("tac-faq-schema");
      if (el) el.remove();
    };
  }, [faqSchema]);

  return null;
};

const TACRatingSchema = () => {
  const ratingSchema = useMemo(
    () => ({
      "@context": "https://schema.org/",
      "@type": "Product",
      name: "TAC Certificate Consultant",
      image:
        "https://bis-certifications.com/services-main-images/CRSRegistration.webp",
      description:
        "Professional TAC Certificate and TAC Certification assistance for automotive manufacturers, importers, and component suppliers in India.",
      brand: {
        "@type": "Brand",
        name: "Sun Consultants & Engineers",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "58042",
        reviewCount: "58042",
      },
    }),
    []
  );

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "tac-rating-schema";
    script.textContent = JSON.stringify(ratingSchema);
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById("tac-rating-schema");
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
                    TAC Certificate in India: Complete Information
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
              TAC
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            Certificate
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            TAC Certificate ensures automotive components and systems meet Indian
            safety and technical standards—essential for manufacturers, importers,
            and suppliers entering the Indian market.
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
    if (path.includes("/tac-certificate-india"))
      return "TAC Certificate in India: Complete Information - English Page";
    return "TAC Certificate in India: Complete Information";
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
      "importance",
      "scope",
      "requirements",
      "process",
      "cost",
      "consultant",
    ],
    []
  );

  const MENU_ITEMS = {
    overview: "Overview",
    importance: "Importance",
    scope: "Scope",
    requirements: "Requirements",
    process: "Process",
    cost: "Cost",
    consultant: "Consultant",
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
              <button
                key={item}
                onClick={() => handleItemClick(item)}
                className={`px-4 py-3 text-left text-sm font-semibold font-geist tracking-wider uppercase transition-colors ${
                  item === activeSection
                    ? "text-blue-900 bg-blue-50"
                    : "text-blue-950 hover:bg-blue-50"
                }`}
              >
                {MENU_ITEMS[item]}
              </button>
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

const MainSectionHeading = ({ children }) => (
  <h2 className="service-left-content-heading-two mt-4 md:mt-6 mb-2 md:mb-3">
    {children}
  </h2>
);

const SubHeading = ({ children }) => (
  <h3 className="service-left-content-heading-three mt-5 md:mt-6">
    {children}
  </h3>
);

const MainContentLeft = () => {
  return (
    <div className="flex-1">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        <div className="flex flex-col gap-2">
          <h1 className="service-left-content-heading-two mt-0 mb-2 md:mb-3">
            TAC Certificate in India: Complete Information
          </h1>

          <p className="service-left-content-paragraph">
            In India&apos;s rapidly evolving automotive and transportation
            ecosystem, regulatory compliance is no longer optional—it is essential.
            Whether you are a manufacturer, importer, or automotive component
            supplier, you may have come across terms like TAC Certificate, TAC
            Certification, or TAC Approval. Yet, many businesses struggle to
            understand what it actually means, when it is required, and how to
            obtain it.
          </p>

          <p className="service-left-content-paragraph">
            The lack of clarity often leads to delays in product approvals,
            compliance risks, and even financial losses. That&apos;s where a
            well-structured understanding of TAC Certification in India becomes
            critical.
          </p>

          <p className="service-left-content-paragraph">
            This comprehensive guide simplifies everything you need to know—from
            what is TAC Certificate, to the TAC Certification process, cost,
            requirements, and the role of TAC Consultants—so you can move forward
            with confidence and compliance.
          </p>
        </div>
        <div className="service-left-content-divider" />
        <OverviewSection />
        <div className="service-left-content-divider" />
        <ImportanceSection />
        <div className="service-left-content-divider" />
        <ScopeSection />
        <div className="service-left-content-divider" />
        <RequirementsSection />
        <div className="service-left-content-divider" />
        <ProcessSection />
        <div className="service-left-content-divider" />
        <CostSection />
        <div className="service-left-content-divider" />
        <ConsultantSection />
        <div className="service-left-content-divider" />
        <ConclusionSection />
        <ServiceAuthorEng />
      </div>
    </div>
  );
};

const OverviewSection = () => {
  return (
    <div id="overview" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Overview</span>
        <Separator className="service-left-content-separator" />
      </div>

      <MainSectionHeading>What is TAC Certificate?</MainSectionHeading>

      <p className="service-left-content-paragraph">
        A TAC Certificate (Type Approval Certificate) is an official approval
        granted to automotive components, vehicles, or related products after
        verifying that they comply with prescribed technical and safety standards.
      </p>

      <p className="service-left-content-paragraph">In simple terms:</p>
      <p className="service-left-content-paragraph">
        TAC Certification ensures that a product meets regulatory requirements
        before it is allowed for use or sale in India.
      </p>

      <p className="service-left-content-paragraph">It is commonly required for:</p>
      <PointsListWithoutHeading
        points={[
          "Automotive components",
          "Vehicle systems",
          "Safety-critical parts",
          "Imported automobile equipment",
        ]}
      />

      <SubHeading>Key Highlights of TAC Certification:</SubHeading>
      <PointsListWithoutHeading
        points={[
          "Confirms compliance with Indian automotive standards",
          "Issued after testing and evaluation",
          "Mandatory for specific regulated products",
          "Ensures safety, quality, and performance",
        ]}
      />
    </div>
  );
};

const ImportanceSection = () => {
  return (
    <div id="importance" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Importance</span>
        <Separator className="service-left-content-separator" />
      </div>

      <MainSectionHeading>
        Why TAC Certification is Important in India
      </MainSectionHeading>

      <p className="service-left-content-paragraph">
        With increasing focus on road safety, environmental compliance, and product
        quality, TAC Certification in India plays a vital role in the automotive
        sector.
      </p>

      <SubHeading>1. Legal Compliance</SubHeading>
      <p className="service-left-content-paragraph">
        Without a valid TAC Certificate, certain automotive products cannot be
        legally sold or used in India.
      </p>

      <SubHeading>2. Ensures Product Safety</SubHeading>
      <p className="service-left-content-paragraph">
        TAC testing verifies that products meet safety benchmarks, reducing risks
        for end users.
      </p>

      <SubHeading>3. Market Access</SubHeading>
      <p className="service-left-content-paragraph">
        Manufacturers and importers must obtain TAC Approval to enter the Indian
        automotive market.
      </p>

      <SubHeading>4. Builds Brand Trust</SubHeading>
      <p className="service-left-content-paragraph">
        A TAC Certified product signals reliability, quality, and compliance to
        customers and regulators.
      </p>

      <SubHeading>5. Avoids Penalties &amp; Rejections</SubHeading>
      <p className="service-left-content-paragraph">Non-compliance can result in:</p>
      <PointsListWithoutHeading
        points={[
          "Product rejection",
          "Fines and penalties",
          "Market bans",
        ]}
      />
    </div>
  );
};

const ScopeSection = () => {
  return (
    <div id="scope" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Scope</span>
        <Separator className="service-left-content-separator" />
      </div>

      <MainSectionHeading>Scope of TAC Certification</MainSectionHeading>

      <p className="service-left-content-paragraph">
        The scope of TAC Registration typically includes:
      </p>

      <SubHeading>1. Automotive Components</SubHeading>
      <PointsListWithoutHeading
        points={[
          "Braking systems",
          "Lighting systems",
          "Tyres and safety parts",
        ]}
      />

      <SubHeading>2. Vehicle Systems</SubHeading>
      <PointsListWithoutHeading
        points={[
          "Electrical systems",
          "Control modules",
          "Engine-related components",
        ]}
      />

      <SubHeading>3. Imported Products</SubHeading>
      <p className="service-left-content-paragraph">
        Imported automotive goods must undergo TAC Certification Process before
        entering the Indian market.
      </p>

      <SubHeading>4. Safety Equipment</SubHeading>
      <PointsListWithoutHeading
        points={["Helmets", "Reflective devices", "Safety accessories"]}
      />
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

      <MainSectionHeading>TAC Certification Requirements</MainSectionHeading>

      <p className="service-left-content-paragraph">
        To obtain a TAC Certificate, businesses must meet specific technical and
        documentation requirements.
      </p>

      <p className="service-left-content-paragraph">Basic Requirements:</p>

      <SubHeading>1. Product Details</SubHeading>
      <PointsListWithoutHeading
        points={[
          "Technical specifications",
          "Design drawings",
          "Material composition",
        ]}
      />

      <SubHeading>2. Test Reports</SubHeading>
      <PointsListWithoutHeading
        points={[
          "Lab testing reports from approved laboratories",
          "Performance evaluation results",
        ]}
      />

      <SubHeading>3. Manufacturer Details</SubHeading>
      <PointsListWithoutHeading
        points={[
          "Company registration documents",
          "Manufacturing unit details",
        ]}
      />

      <SubHeading>4. Quality Compliance</SubHeading>
      <PointsListWithoutHeading
        points={[
          "Compliance with relevant Indian standards",
          "Quality control procedures",
        ]}
      />

      <SubHeading>5. Application Documents</SubHeading>
      <PointsListWithoutHeading
        points={[
          "Filled application form",
          "Authorization letters (if applicable)",
        ]}
      />
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

      <MainSectionHeading>TAC Certification Process</MainSectionHeading>

      <p className="service-left-content-paragraph">
        The TAC Certification Process involves multiple stages of verification and
        approval.
      </p>

      <SubHeading>Step 1: Application Submission</SubHeading>
      <p className="service-left-content-paragraph">
        Submit the application along with required documents for TAC Registration.
      </p>

      <SubHeading>Step 2: Product Evaluation</SubHeading>
      <p className="service-left-content-paragraph">
        Authorities review technical specifications and compliance details.
      </p>

      <SubHeading>Step 3: Testing</SubHeading>
      <p className="service-left-content-paragraph">
        Products are tested in authorized laboratories to ensure compliance.
      </p>

      <SubHeading>Step 4: Inspection (if required)</SubHeading>
      <p className="service-left-content-paragraph">
        Manufacturing facilities may be inspected for quality assurance.
      </p>

      <SubHeading>Step 5: Approval &amp; Issuance</SubHeading>
      <p className="service-left-content-paragraph">
        After successful evaluation, the TAC Certificate is issued.
      </p>
    </div>
  );
};

const CostSection = () => {
  return (
    <div id="cost" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Cost</span>
        <Separator className="service-left-content-separator" />
      </div>

      <MainSectionHeading>TAC Certification Cost</MainSectionHeading>

      <p className="service-left-content-paragraph">
        The TAC Certification Cost varies based on several factors.
      </p>

      <p className="service-left-content-paragraph">Key Cost Factors:</p>
      <PointsListWithoutHeading
        points={[
          "Type of product",
          "Testing requirements",
          "Number of variants",
          "Documentation complexity",
          "Consultant involvement",
        ]}
      />
    </div>
  );
};

const ConsultantSection = () => {
  return (
    <div id="consultant" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Consultant</span>
        <Separator className="service-left-content-separator" />
      </div>

      <MainSectionHeading>Role of TAC Consultants</MainSectionHeading>

      <p className="service-left-content-paragraph">
        Navigating the TAC Certification Process can be complex, especially for
        first-time applicants. This is where TAC Consultants play a crucial role.
      </p>

      <SubHeading>1. End-to-End Support</SubHeading>
      <p className="service-left-content-paragraph">
        From documentation to approval, consultants manage the entire process.
      </p>

      <SubHeading>2. Documentation Accuracy</SubHeading>
      <p className="service-left-content-paragraph">
        They ensure all documents meet regulatory standards.
      </p>

      <SubHeading>3. Faster Approvals</SubHeading>
      <p className="service-left-content-paragraph">
        Minimize delays by avoiding errors and rejections.
      </p>

      <SubHeading>4. Cost Optimization</SubHeading>
      <p className="service-left-content-paragraph">
        Help reduce unnecessary testing and expenses.
      </p>

      <SubHeading>5. Compliance Expertise</SubHeading>
      <p className="service-left-content-paragraph">
        Stay updated with changing regulations and requirements.
      </p>
    </div>
  );
};

const ConclusionSection = () => {
  return (
    <div className="flex flex-col">
      <MainSectionHeading>Conclusion</MainSectionHeading>

      <p className="service-left-content-paragraph">
        The TAC Certificate is a crucial regulatory requirement in India&apos;s
        automotive ecosystem. Whether you are launching a new product or importing
        components, obtaining TAC Certification ensures compliance, safety, and
        seamless market entry.
      </p>

      <p className="service-left-content-paragraph">
        Understanding the TAC Certification Process, requirements, and costs can save
        your business from delays and penalties. However, due to the technical nature
        of approvals, working with experienced TAC Consultants is often the smartest
        move.
      </p>

      <p className="service-left-content-paragraph">
        If you&apos;re planning to apply, now is the right time to take
        action—because in today&apos;s competitive market, compliance is not just a
        requirement, it&apos;s a strategic advantage.
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

const ServiceFaq = () => {
  return (
    <section
      id="faq"
      className="my-2 scroll-mt-20"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          Frequently Asked Questions
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
            {TAC_FAQS.map((faq, index) => (
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
              ISI Mark Certification
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
