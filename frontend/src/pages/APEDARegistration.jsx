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
  "https://bis-certifications.com/apeda-registration-india";
const FAQ_PAGE_URL = `${CANONICAL_URL}#faq`;

const APEDA_FAQS = [
  {
    question: "What is APEDA Registration?",
    answer:
      "Agricultural and Processed Food Products Export Development Authority (APEDA) Registration is a mandatory process for exporters dealing in agricultural and processed food products. It provides legal authorization to export goods from India and ensures compliance with international standards. After registration, exporters receive the APEDA RCMC (Registration-Cum-Membership Certificate), which allows them to access government benefits, subsidies, and export promotion schemes. It also enhances credibility in global markets and ensures that products meet quality and safety requirements.",
  },
  {
    question: "Who needs APEDA Registration in India?",
    answer:
      "APEDA Registration is required for businesses exporting scheduled agricultural and processed food products such as fruits, vegetables, meat, dairy products, cereals, and processed foods. Any exporter involved in these categories must obtain APEDA RCMC to legally operate in international markets. Without registration, exporters cannot avail government incentives or participate in export promotion programs. It is essential for manufacturers, merchants, and exporters who want to expand their business globally.",
  },
  {
    question: "What is APEDA RCMC Certificate?",
    answer:
      "APEDA RCMC (Registration-Cum-Membership Certificate) is issued after successful APEDA Registration. It acts as proof that the exporter is a registered member of APEDA. This certificate is essential to claim export benefits, subsidies, and financial assistance schemes. It also allows exporters to participate in international trade fairs and buyer-seller meets. Having a valid RCMC ensures compliance with export regulations and helps build trust with international buyers.",
  },
  {
    question: "What documents are required for APEDA Registration?",
    answer:
      "To complete APEDA Registration, exporters must submit key documents such as Import Export Code (IEC), PAN card, bank certificate, and business registration proof. These documents are required to verify the authenticity of the exporter and ensure compliance with regulations. Accurate and complete documentation is crucial, as any errors or missing details may lead to delays or rejection of the application.",
  },
  {
    question: "What is the APEDA Registration process?",
    answer:
      "The APEDA Registration process is conducted online through the official APEDA website. Exporters need to fill out the application form, upload required documents, and pay the registration fee. After submission, APEDA verifies the details and issues the RCMC certificate. The digital process has made registration faster, more transparent, and convenient, eliminating the need for physical visits.",
  },
  {
    question: "What are the fees for APEDA Registration?",
    answer:
      "The APEDA Registration fee depends on the type of enterprise. MSMEs typically pay ₹5,000 plus GST (₹5,900 total), while large enterprises pay ₹10,000 plus GST (₹11,800 total). It is a one-time registration fee, making it a cost-effective certification. However, exporters must renew their registration periodically to continue enjoying benefits such as subsidies and export support.",
  },
  {
    question: "What are the benefits of APEDA Registration?",
    answer:
      "APEDA Registration offers multiple benefits, including legal recognition, access to global markets, financial assistance, and quality assurance. Exporters can avail subsidies, participate in international trade fairs, and receive support for packaging and infrastructure. It also enhances credibility and ensures compliance with international standards, helping businesses grow globally.",
  },
  {
    question: "Is APEDA Registration mandatory for exporters?",
    answer:
      "Yes, APEDA Registration is mandatory for exporters dealing in scheduled agricultural and processed food products. Without it, exporters cannot legally export such goods or avail government incentives. It is a crucial requirement for entering international markets and maintaining compliance with export regulations.",
  },
  {
    question: "How long is APEDA Registration valid?",
    answer:
      "APEDA Registration is generally valid for a lifetime; however, exporters must comply with renewal requirements and maintain proper records through APEDA return filing. Regular updates and compliance ensure that the registration remains active and benefits are not interrupted.",
  },
  {
    question: "What is APEDA Renewal and why is it important?",
    answer:
      "APEDA Renewal ensures that the exporter's registration remains active and compliant with current regulations. It is important for continuing export operations without interruption. Failure to renew on time may result in loss of benefits, penalties, or suspension of export activities.",
  },
  {
    question: "What is APEDA Return Filing?",
    answer:
      "APEDA Return Filing is the process of submitting export data and records to maintain transparency and compliance. It helps the government track export activities and ensures that exporters follow guidelines. Regular return filing is essential for maintaining APEDA registration and eligibility for benefits.",
  },
  {
    question: "What financial assistance does APEDA provide?",
    answer:
      "APEDA provides financial assistance for infrastructure development, packaging improvement, cold storage, and transportation. Exporters can also receive subsidies for export promotion activities and market development. These schemes help reduce costs and encourage businesses to expand globally.",
  },
  {
    question: "How does APEDA ensure product quality?",
    answer:
      "APEDA ensures product quality through strict certification and compliance standards. Exporters must follow hygiene, safety, and international quality guidelines. The APEDA Certificate confirms that products meet global standards, increasing trust among international buyers and reducing the risk of rejection.",
  },
  {
    question: "What is the role of APEDA in export promotion?",
    answer:
      "APEDA actively promotes Indian agricultural products by organizing trade fairs, exhibitions, and buyer-seller meets. Registered exporters can participate in these events to connect with global buyers. This helps increase exports, improve market reach, and boost business growth.",
  },
  {
    question: "Can I apply for APEDA Registration online?",
    answer:
      "Yes, APEDA Registration can be completed online through the official website. Exporters can fill out the application, upload documents, pay fees, and track their application status digitally. The online system has simplified the process, making it faster and more efficient.",
  },
];

const getApedaFaqSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": FAQ_PAGE_URL,
  mainEntity: APEDA_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

const APEDARegistration = () => {
  return (
    <div className="relative">
      <MetaTags />
      <FAQSchemaInjector />
      <APEDARatingSchema />
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

export default APEDARegistration;

const MetaTags = () => {
  const title =
    "APEDA Registration | APEDA RCMC Certificate for Agricultural Exporters in India";
  const description =
    "Complete guide to APEDA Registration in India. Learn about APEDA RCMC, registration process, documents, fees, renewal, return filing, and benefits for agricultural exporters.";
  const keywords =
    "APEDA Registration, APEDA RCMC, APEDA License, APEDA Certificate, APEDA Registration Online, APEDA Registration Documents, APEDA Registration Fee, APEDA Renewal, APEDA Return Filing, Agricultural Export Registration";
  const author = "Dhruv Aggarwal";
  const publisher = "Sun Certifications India";
  const ogTitle =
    "APEDA Registration | APEDA RCMC Certificate for Agricultural Exporters in India";
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
        name: "APEDA Registration",
        item: CANONICAL_URL,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": CANONICAL_URL,
    },
    headline: "APEDA Registration in India",
    description: description,
    image: "https://bis-certifications.com/services-main-images/CRSRegistration.webp",
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
    datePublished: "2025-09-15",
    dateModified: "2026-05-28",
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
      <meta property="og:site_name" content="Sun Certifications India" />
      <meta property="og:type" content="website" />
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
  const faqSchema = useMemo(() => getApedaFaqSchema(), []);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "apeda-faq-schema";
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById("apeda-faq-schema");
      if (el) el.remove();
    };
  }, [faqSchema]);

  return null;
};

const APEDARatingSchema = () => {
  const ratingSchema = useMemo(
    () => ({
      "@context": "https://schema.org/",
      "@type": "Product",
      name: "APEDA Registration Consultant",
      image:
        "https://bis-certifications.com/services-main-images/CRSRegistration.webp",
      description:
        "Professional APEDA Registration and RCMC certificate assistance for agricultural and processed food product exporters in India.",
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
        reviewCount: "58042",
      },
    }),
    []
  );

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "apeda-rating-schema";
    script.textContent = JSON.stringify(ratingSchema);
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById("apeda-rating-schema");
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
                    APEDA Registration
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
              APEDA
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            Registration
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            APEDA Registration is essential for exporters of agricultural and
            processed food products seeking APEDA RCMC, global market access, and
            government export benefits.
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
    if (path.includes("/apeda-registration-india"))
      return "APEDA Registration - English Page";
    return "APEDA Registration";
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
    () => ["overview", "rcmc", "benefits", "process", "fees", "consultant"],
    []
  );

  const MENU_ITEMS = {
    overview: "Overview",
    rcmc: "RCMC & Digital",
    benefits: "Benefits",
    process: "Process",
    fees: "Fees",
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

const TopicHeading = ({ children }) => (
  <h2 className="service-left-content-heading-three mt-8 md:mt-10">
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
            What is APEDA Registration
          </h1>

          

          <p className="service-left-content-paragraph">
            APEDA Full Form is Agricultural and Processed Food Products Export
            Development Authority. The Agricultural and Processed Food Products
            Export Development Authority (APEDA) is a government organization
            established under the Ministry of Commerce and Industry. It plays a
            significant role in promoting the export of agricultural and processed
            food products from India to international markets. The formation of
            APEDA was necessary because India produces a large variety of
            agricultural goods, but without proper regulation and export support,
            these products cannot reach global consumers efficiently.
          </p>

          <p className="service-left-content-paragraph">
            APEDA helps exporters by guiding them through the APEDA Registration
            Process, providing them with an official APEDA License, and ensuring
            product quality.
          </p>

          <p className="service-left-content-paragraph">
            In today&apos;s digital era, the introduction of Online APEDA
            Registration through the APEDA Website has simplified the APEDA
            process significantly. Exporters can now complete their registration,
            upload APEDA Registration Documents, pay the APEDA Registration Fee,
            and track their application without visiting any office physically.
          </p>
        </div>

        <OverviewSection />
        <div className="service-left-content-divider" />
        <RcmcSection />
        <div className="service-left-content-divider" />
        <BenefitsSection />
        <div className="service-left-content-divider" />
        <ProcessSection />
        <div className="service-left-content-divider" />
        <FeesSection />
        <div className="service-left-content-divider" />
        <ConsultantSection />
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

      <MainSectionHeading>Importance of APEDA Registration</MainSectionHeading>

      <p className="service-left-content-paragraph">
        APEDA plays a crucial role in strengthening India&apos;s position in the
        global agricultural market. It not only regulates exports but also
        supports exporters in improving quality, packaging, and marketing
        strategies.
      </p>

      <p className="service-left-content-paragraph">
        One of the most important functions of APEDA is to ensure that exporters
        complete their APEDA Registration and obtain the APEDA RCMC
        (Registration-Cum-Membership Certificate). Without the APEDA RCMC,
        exporters cannot avail benefits such as government schemes, subsidies, and
        export assistance.
      </p>

      <p className="service-left-content-paragraph">
        Additionally, APEDA ensures that exporters follow international standards
        by providing APEDA Certification. This certification increases the trust
        of foreign buyers and enhances the reputation of Indian products. The
        availability of the APEDA Certificate for Export ensures that goods meet
        global quality standards.
      </p>

      <p className="service-left-content-paragraph">
        The organization also manages activities such as APEDA Return Filing,
        which helps maintain proper export records and ensures compliance with
        government regulations. Exporters are also required to complete APEDA
        Renewal from time to time to keep their registration active.
      </p>
    </div>
  );
};

const RcmcSection = () => {
  return (
    <div id="rcmc" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">
          RCMC & Digital
        </span>
        <Separator className="service-left-content-separator" />
      </div>

      <MainSectionHeading>APEDA RCMC or APEDA Membership</MainSectionHeading>

      <p className="service-left-content-paragraph">
        The APEDA RCMC is issued after successful APEDA Registration. It serves
        as proof that the exporter is a registered member of APEDA.
      </p>

      <SubHeading>RCMC Fees</SubHeading>
      <p className="service-left-content-paragraph">
        The RCMC Fees are included in the registration process. Payment of these
        fees grants exporters access to various benefits such as financial
        assistance and export promotion schemes.
      </p>

      <SubHeading>APEDA Membership</SubHeading>
      <p className="service-left-content-paragraph">
        Once registered, exporters receive APEDA Membership, which provides
        opportunities to participate in international trade fairs, training
        programs, and export promotion activities.
      </p>

      <TopicHeading>APEDA Website and Digital Services</TopicHeading>

      <p className="service-left-content-paragraph">
        The APEDA Website is an essential platform for exporters. It provides
        access to all services related to APEDA Registration Online, APEDA
        Renewal, and APEDA Return Filing.
      </p>

      <p className="service-left-content-paragraph">
        Through the APEDA Website, exporters can:
      </p>

      <PointsListWithoutHeading
        points={[
          "Apply for APEDA Registration Online",
          "Upload APEDA Registration Documents",
          "Pay the APEDA Registration Fee",
          "Download the APEDA Certificate",
          "Track application status",
        ]}
      />

      <p className="service-left-content-paragraph">
        The digitalization of services has made the APEDA Registration Process
        faster and more efficient.
      </p>

      <TopicHeading>APEDA Renewal and Return Filing</TopicHeading>

      <SubHeading>APEDA Renewal</SubHeading>
      <p className="service-left-content-paragraph">
        The APEDA Renewal process ensures that the exporter&apos;s registration
        remains valid. Exporters must complete APEDA Renewal periodically to
        continue their operations.
      </p>

      <SubHeading>APEDA Return Filing</SubHeading>
      <p className="service-left-content-paragraph">
        APEDA Return Filing is required to maintain records of exports. It helps
        the government track export activities and ensures transparency.
      </p>
    </div>
  );
};

const BenefitsSection = () => {
  return (
    <div id="benefits" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Benefits</span>
        <Separator className="service-left-content-separator" />
      </div>

      <MainSectionHeading>Benefits of APEDA Registration</MainSectionHeading>

      <p className="service-left-content-paragraph">
        APEDA provides several important benefits to exporters, helping them grow
        in both domestic and international markets. These benefits become available
        after completing the APEDA Registration Process, obtaining the APEDA
        License, and receiving the APEDA RCMC.
      </p>

      <PointsListWithoutHeading
        points={[
          "Legal Recognition: APEDA Registration or APEDA License give exporters legal permission to export agricultural products without any issues.",
          "Access to Global Markets: With APEDA Certificate for Export, products meet international standards and can be sold worldwide.",
          "Financial Assistance: Exporters with APEDA RCMC can get subsidies and financial support for export-related activities.",
          "Quality Assurance: The APEDA Certificate ensures that products are safe, hygienic, and of high quality, increasing buyer trust.",
          "Easy Online Process: The APEDA Website allows easy APEDA Registration Online, submission of APEDA Registration Documents, and payment of APEDA Registration Fee.",
          "Business Growth: With proper APEDA Return Filing and timely APEDA Renewal, exporters can run their business smoothly and expand globally.",
        ]}
      />

      <TopicHeading>Financial Assistance Provided by APEDA</TopicHeading>

      <p className="service-left-content-paragraph">
        One of the most important roles of the Agricultural and Processed Food
        Products Export Development Authority is to provide financial assistance
        to exporters. After completing APEDA Registration and obtaining the APEDA
        License, exporters become eligible for various subsidy schemes.
      </p>

      <p className="service-left-content-paragraph">
        These schemes support activities such as infrastructure development,
        packaging improvement, cold storage facilities, and transportation.
        Exporters who hold an APEDA RCMC and maintain proper APEDA Return Filing
        records can easily apply for these benefits.
      </p>

      <p className="service-left-content-paragraph">
        Financial support reduces the burden on exporters and encourages them to
        expand their business globally. It also motivates new businesses to
        complete the APEDA Registration Process and enter the export market.
      </p>

      <TopicHeading>Quality Control and Standards of APEDA</TopicHeading>

      <p className="service-left-content-paragraph">
        Maintaining quality is one of the main responsibilities of APEDA. Through
        APEDA Certification, exporters are required to meet strict international
        standards.
      </p>

      <p className="service-left-content-paragraph">
        The APEDA Certificate ensures that the products are safe, hygienic, and
        suitable for export. Exporters must follow guidelines even after obtaining
        the APEDA License, as failure to comply may lead to cancellation or issues
        during APEDA Renewal.
      </p>

      <p className="service-left-content-paragraph">
        Quality control also affects the APEDA Certificate Cost, as higher
        standards may require additional testing and certification procedures.
      </p>

      <TopicHeading>APEDA&apos;s Role in Export Promotion</TopicHeading>

      <p className="service-left-content-paragraph">
        APEDA actively promotes Indian agricultural products in international
        markets. It organizes trade fairs, exhibitions, and buyer-seller meets.
      </p>

      <p className="service-left-content-paragraph">
        Exporters who have completed APEDA Registration and hold APEDA Membership
        are given opportunities to participate in these events. This helps them
        find global buyers and increase their exports.
      </p>

      <p className="service-left-content-paragraph">
        The presence of an APEDA Certificate for Export and a valid APEDA License
        increases the credibility of exporters during such promotional activities.
      </p>

      <TopicHeading>Role of APEDA in Traceability Systems</TopicHeading>

      <p className="service-left-content-paragraph">
        Traceability is an important concept in international trade. APEDA has
        introduced systems that allow tracking of products from farm to export.
      </p>

      <p className="service-left-content-paragraph">
        Exporters who complete APEDA Registration Online and obtain the APEDA
        Certificate must follow traceability guidelines. This ensures transparency
        and builds trust among international buyers.
      </p>

      <p className="service-left-content-paragraph">
        The traceability system is linked with the APEDA Website, where exporters
        update data as part of APEDA Return Filing.
      </p>

      <TopicHeading>Role of APEDA in Boosting Farmer Income</TopicHeading>

      <p className="service-left-content-paragraph">
        APEDA indirectly helps farmers by connecting them with global markets.
        Exporters who complete APEDA Registration and obtain the APEDA Certificate
        purchase products from farmers for export.
      </p>

      <p className="service-left-content-paragraph">
        Through APEDA Certification, farmers are encouraged to maintain quality
        standards, which increases the value of their produce.
      </p>

      <p className="service-left-content-paragraph">
        As exports increase, farmers receive better prices, which improves their
        income and standard of living.
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

      <MainSectionHeading>APEDA Registration Process</MainSectionHeading>

      <p className="service-left-content-paragraph">
        The process of APEDA Registration is the first and most important step for
        any exporter dealing with agricultural products. It provides legal
        recognition and allows exporters to operate in international markets.
      </p>

      <PointsListWithoutHeading
        points={[
          "The APEDA Registration Process is designed to be simple yet effective. Exporters must first visit the APEDA Website, where they can begin their APEDA Registration Online. The process involves filling out an application form, uploading necessary APEDA Registration Documents, and paying the APEDA Registration Fee.",
          "Once the application is submitted, APEDA verifies the details and issues the APEDA RCMC, which confirms that the exporter is officially registered.",
        ]}
      />

      <TopicHeading>APEDA Registration Documents</TopicHeading>

      <p className="service-left-content-paragraph">
        The submission of proper APEDA Registration Documents is crucial for
        successful registration. These documents include:
      </p>

      <PointsListWithoutHeading
        points={[
          "Import Export Code (IEC)",
          "PAN card",
          "Bank certificate",
          "Business registration proof",
        ]}
      />

      <p className="service-left-content-paragraph">
        If the APEDA Registration Documents are incomplete or incorrect, the
        application may be delayed or rejected. Therefore, exporters must ensure
        accuracy while uploading documents during APEDA Registration.
      </p>
    </div>
  );
};

const FeesSection = () => {
  return (
    <div id="fees" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Fees</span>
        <Separator className="service-left-content-separator" />
      </div>

      <MainSectionHeading>APEDA Registration Fees Structure</MainSectionHeading>

      <p className="service-left-content-paragraph">
        The cost of APEDA registration in India depends on the type of enterprise
        applying for the certificate. Below is a detailed breakdown of the
        applicable fees:
      </p>

      <div className="mt-6 md:mt-8 overflow-x-auto">
        <Table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Category
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Registration Fees (₹)
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 border-r border-gray-300 text-[#1E1E1E]">
                Total (Including 18% GST)
              </TableHead>
              <TableHead className="font-semibold font-geist text-left text-base md:text-lg px-4 md:px-6 py-3 md:py-4 text-[#1E1E1E]">
                Remarks
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Micro, Small &amp; Medium Enterprises (MSME)
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                ₹5,000 + GST
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                ₹5,900
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Applicable for MSME exporters
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Large Enterprises
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                ₹10,000 + GST
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                ₹11,800
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Applicable for large-scale exporters
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                APEDA Renewal Fees
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                ₹5,000 – ₹10,000 + GST
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-r border-gray-200 text-[#42434d]">
                Varies
              </TableCell>
              <TableCell className="font-geist text-sm md:text-base px-4 md:px-6 py-3 md:py-4 text-[#42434d]">
                Depends on business size
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <p className="service-left-content-paragraph">
        APEDA registration involves a one-time fee, making it a cost-effective
        certification for exporters. However, businesses must ensure timely renewal
        to continue availing export-related benefits and compliance support.
      </p>

      <p className="service-left-content-paragraph">
        For instance, a small-scale tea exporter in Assam would typically pay
        ₹5,900 for initial registration, whereas a large company exporting
        processed agricultural products may incur a cost of ₹11,800.
      </p>

      <p className="service-left-content-paragraph">
        In addition to registration, APEDA-certified exporters can access various
        government incentives, including financial assistance for export promotion,
        freight subsidies, and participation in international market development
        programs, helping businesses expand globally.
      </p>
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

      <MainSectionHeading>Role of APEDA Registration Consultant</MainSectionHeading>

      <p className="service-left-content-paragraph">
        An APEDA Registration Consultant plays a crucial role in simplifying the
        registration process for exporters dealing in agricultural and processed
        food products. Since the procedure involves documentation, compliance, and
        coordination with authorities, professional guidance helps businesses avoid
        delays and errors.
      </p>

      <SubHeading>1) Expert Guidance on Eligibility &amp; Documentation</SubHeading>
      <p className="service-left-content-paragraph">
        A consultant first evaluates whether your business requires APEDA
        registration and identifies the applicable category. They assist in
        preparing accurate documentation such as IEC, bank certificates, and
        business details, ensuring everything is aligned with APEDA requirements.
      </p>

      <SubHeading>2) Hassle-Free Application Process</SubHeading>
      <p className="service-left-content-paragraph">
        From filling out the online application to submitting required documents,
        the consultant manages the complete registration process. This minimizes
        the chances of rejection due to incorrect or incomplete information.
      </p>

      <SubHeading>3) Compliance &amp; Regulatory Support</SubHeading>
      <p className="service-left-content-paragraph">
        APEDA registration is not just about obtaining the certificate—it also
        involves ongoing compliance. Consultants ensure that exporters adhere to
        APEDA guidelines, helping them stay updated with policy changes and export
        regulations.
      </p>

      <SubHeading>4) Faster Approval &amp; Error Reduction</SubHeading>
      <p className="service-left-content-paragraph">
        With industry experience, consultants understand common mistakes and
        technical requirements. This results in quicker approvals and reduces the
        risk of application delays or rejections.
      </p>

      <SubHeading>5) Assistance in Availing APEDA Benefits</SubHeading>
      <p className="service-left-content-paragraph">
        Registered exporters can access various government schemes, including
        financial assistance, export promotion programs, and subsidies. Consultants
        guide businesses on how to claim these benefits effectively and maximize
        returns.
      </p>

      <SubHeading>6) Renewal &amp; Post-Registration Support</SubHeading>
      <p className="service-left-content-paragraph">
        Consultants also handle renewal processes and provide continuous support for
        maintaining APEDA compliance. They ensure that businesses do not face
        interruptions in export activities due to expired registration.
      </p>

      <TopicHeading>Conclusion</TopicHeading>

      <p className="service-left-content-paragraph">
        India&apos;s agricultural export sector is on a strong growth trajectory,
        with an expected annual increase of 7–8%, driven by rising global demand
        for products such as Basmati rice, organic food, dairy items, processed
        products, and cereals. For businesses aiming to capitalize on these
        expanding international opportunities, obtaining agricultural export
        registration is essential—and securing an APEDA certificate is the first
        and most important step.
      </p>

      <p className="service-left-content-paragraph">
        While the APEDA registration fees typically range between ₹5,900 and ₹11,800
        depending on the size of the enterprise, this cost should be viewed as a
        strategic investment rather than an expense. The certification unlocks
        access to global markets, government-backed incentives, financial assistance
        schemes, and smoother export procedures. In addition, APEDA registration
        enhances credibility, ensures regulatory compliance, and provides exporters
        with tools such as quality certification support, training programs, and
        export promotion benefits.
      </p>

      <p className="service-left-content-paragraph">
        For new and growing exporters, understanding the documentation, compliance
        requirements, and application procedures can be challenging. Any errors or
        delays in the process may impact business operations and export timelines.
      </p>

      <p className="service-left-content-paragraph">
        Ultimately, obtaining an APEDA certificate not only enables businesses to
        participate in international trade but also strengthens their long-term
        growth potential. With the right approach and support, exporters can fully
        leverage APEDA benefits to scale their operations, improve competitiveness,
        and establish a strong presence in global markets.
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
            {APEDA_FAQS.map((faq, index) => (
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
